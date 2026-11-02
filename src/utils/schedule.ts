import {workouts} from '../data/workouts';
import type {Workout} from '../types';
export const localISO=(d:Date)=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
export function mondayOf(date:Date):Date { const d=new Date(date.getFullYear(),date.getMonth(),date.getDate()); d.setDate(d.getDate()-(d.getDay()+6)%7); return d; }
export function programWeek(start:string, now=new Date()):number { const a=mondayOf(new Date(`${start}T12:00:00`)); const b=mondayOf(now); const days=(Date.UTC(b.getFullYear(),b.getMonth(),b.getDate())-Date.UTC(a.getFullYear(),a.getMonth(),a.getDate()))/86400000; return Math.max(1,Math.min(8,Math.floor(days/7)+1)); }
export function phaseForWeek(week:number){ if(week<=2)return {name:'Découverte',maxMinutes:60,cardioFactor:.4,sets:1}; if(week<=4)return {name:'Progression douce',maxMinutes:75,cardioFactor:.7,sets:2}; if(week<=6)return {name:'Confiance',maxMinutes:90,cardioFactor:1,sets:2}; return {name:'Consolidation',maxMinutes:90,cardioFactor:1,sets:2}; }
export function workoutForDate(date:Date, days:number[], items:Workout[]=workouts):Workout|undefined { const weekday=(date.getDay()+6)%7; const i=items.find(w=>days.includes(weekday)&&w.day-1===weekday); return i; }
export function adjustedMinutes(workout:Workout,week:number){ const phase=phaseForWeek(week); return Math.min(phase.maxMinutes,Math.round(workout.blocks.reduce((n,b)=>n+b.minutes*(b.sets?1:phase.cardioFactor),0))); }
export function formatDuration(seconds:number){const m=Math.floor(seconds/60),s=seconds%60;return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;}
