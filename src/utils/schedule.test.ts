import {describe,expect,it} from 'vitest';
import {formatDuration,mondayOf,phaseForWeek,programWeek,workoutForDate} from './schedule';
import {workouts} from '../data/workouts';

describe('programme FitJourney',()=>{
 it('calcule la semaine à partir du lundi local',()=>{
  expect(programWeek('2026-10-26',new Date(2026,10,1,12))).toBe(1);
  expect(programWeek('2026-10-26',new Date(2026,10,2,12))).toBe(2);
  expect(programWeek('2026-10-26',new Date(2027,0,1,12))).toBe(8);
 });
 it('ne dépasse pas les huit semaines et gère un changement d’heure',()=>{
  expect(programWeek('2026-03-02',new Date(2026,2,9,12))).toBe(2);
  expect(programWeek('2026-01-05',new Date(2026,3,1,12))).toBe(8);
 });
 it('commence les semaines le lundi',()=>expect(mondayOf(new Date(2026,10,1,16)).getDay()).toBe(1));
 it('sélectionne le jour d’entraînement prévu et les journées de repos restent vides',()=>{
  expect(workoutForDate(new Date(2026,10,2,12),[0,1,3,5],workouts)?.id).toBe('A');
  expect(workoutForDate(new Date(2026,10,4,12),[0,1,3,5],workouts)).toBeUndefined();
 });
 it('applique une montée graduelle des phases',()=>{
  expect(phaseForWeek(1).maxMinutes).toBe(60);
  expect(phaseForWeek(3).maxMinutes).toBe(75);
  expect(phaseForWeek(5).maxMinutes).toBe(90);
  expect(phaseForWeek(8).name).toBe('Consolidation');
 });
 it('formate le chronomètre sans dépendre d’un intervalle cumulé',()=>expect(formatDuration(3661)).toBe('61:01'));
});
