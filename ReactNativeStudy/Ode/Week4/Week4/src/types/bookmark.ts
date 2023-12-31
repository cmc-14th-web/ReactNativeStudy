export type BookMark = {
  id: number;
  address: string;
  lat: number;
  lng: number;
};

export type BookMarks = Record<string, BookMark>;
