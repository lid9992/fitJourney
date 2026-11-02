export type Exercise = {id:string;name:string;english:string;category:'Cardio'|'Renforcement'|'Mobilité';level:string;muscles:string;equipment:string;duration:string;steps:string[];breathing:string;setup:string;errors:string; safety:string; beginner:string; alternative:string; icon:string};
export type Block = {exerciseId:string;minutes:number;sets?:number;reps?:string;note?:string};
export type Workout = {id:string;title:string;focus:string;day:number;blocks:Block[]};
export type Profile = {id:string;name:string;weight:number;height:number;goal1:number;goal2:number;programStart:string;days:number[];theme:'light'|'dark'|'system'};
export type Measurement = {id:string;date:string;weight:number;waist?:number;note?:string};
export type SessionBlock = Block & {done:boolean; actualMinutes?:number; load?:number; repsDone?:number; noteText?:string};
export type WorkoutSession = {id:string;workoutId:string;title:string;startedAt:number;runningSince?:number;endedAt?:number;status:'active'|'paused'|'completed'|'partial'|'skipped';blocks:SessionBlock[];elapsedMs:number;difficulty?:number;fatigue?:string;notes?:string};
export type Settings = {id:'settings';theme:'light'|'dark'|'system';weekStart:string};
