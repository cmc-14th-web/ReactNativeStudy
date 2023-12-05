export type ImageType = {
  date: string;
  width: number;
  height: number;
  path: string;
};

export type ImageStateType = {
  images: ImageType[];
  setImages: (newImage: ImageType) => void;
};
