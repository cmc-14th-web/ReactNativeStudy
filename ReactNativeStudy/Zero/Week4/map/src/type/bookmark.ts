export interface Bookmark extends Position {
  id: string;
}

export type Position = {
  lat: number;
  lng: number;
};
