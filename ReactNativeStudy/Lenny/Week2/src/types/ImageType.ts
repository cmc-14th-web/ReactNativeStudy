export type SelectedImageDataType = {
  path: string;
  creationDate: Date;
  height: number;
  width: number;
};

export type ImageDataType = {
  creationDate: string | null;
  cropRect: {height: number; width: number; x: number; y: number};
  data: null;
  duration: null;
  exif: null;
  filename: null;
  height: number;
  localIdentifier: null;
  mime: string;
  modificationDate: null;
  path: string;
  size: number;
  sourceURL: null;
  width: number;
};
