export type Message<T = unknown> = {
  type: string;
  data?: T;
};
