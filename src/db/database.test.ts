import 'fake-indexeddb/auto';
import {beforeEach,describe,expect,it} from 'vitest';
import {db,exportBackup,importBackup,validateBackup} from './database';
import type {Profile} from '../types';

const profile:Profile={id:'profile',name:'',weight:70,height:155,goal1:66.5,goal2:63,programStart:'2026-11-01',days:[0,1,3,5],theme:'system'};
const backup={app:'FitJourney',version:1,createdAt:'2026-11-01T00:00:00.000Z',profile:[profile],measurements:[],sessions:[],settings:[{id:'settings',theme:'system',weekStart:'2026-11-01'}]};

beforeEach(async()=>{await db.open(); await Promise.all(db.tables.map(table=>table.clear()))});

describe('sauvegarde locale',()=>{
 it('valide une sauvegarde versionnée',()=>expect(validateBackup(backup)).toBe(true));
 it('refuse une structure corrompue',()=>expect(validateBackup({app:'FitJourney',version:1,profile:'no'})).toBe(false));
 it('exporte puis restaure les données locales',async()=>{
  await db.profile.put(profile);
  await db.measurements.add({id:'m1',date:'2026-11-01',weight:69.8,waist:84});
  const saved=await exportBackup();
  await db.profile.clear();
  await importBackup(saved);
  expect(await db.profile.get('profile')).toMatchObject({weight:70});
  expect(await db.measurements.get('m1')).toMatchObject({weight:69.8,waist:84});
 });
 it('rejette un JSON invalide sans effacer les données',async()=>{
  await db.profile.put(profile);
  await expect(importBackup('{bad json')).rejects.toThrow('JSON valide');
  expect(await db.profile.get('profile')).toMatchObject({weight:70});
 });
 it('rejette un schéma invalide sans effacer les données',async()=>{
  await db.profile.put(profile);
  await expect(importBackup(JSON.stringify({app:'autre',version:1}))).rejects.toThrow('invalide');
  expect(await db.profile.get('profile')).toMatchObject({weight:70});
 });
});