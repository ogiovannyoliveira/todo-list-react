export const TASKS_KEY = 'tasks';

export enum TaskState {
  CREATING = 'CREATING',
  CREATED = 'CREATED',
}

export interface Task {
  id: string;
  title: string;
  concluded: boolean;
  state?: TaskState;
}