export type Todo = {
  text: string;
  done: boolean;
};

export type Todos = Record<string, Todo>;
