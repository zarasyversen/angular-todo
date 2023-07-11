export interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
  day?: string | undefined;
  updated?: boolean | undefined;
  time?: string | undefined;
};


export class TodoItem implements ITodoItem {
    constructor(
      public id: number,
      public title: string,
      public completed: boolean,
      public day?: string | undefined,
      public updated?: boolean | undefined,
      public time?: string | undefined
    ) {  }
  }