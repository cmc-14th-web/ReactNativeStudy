import dayjs from "dayjs";

import { storage } from "../utils/storage"
import { Image } from "../type/image";

export function useImages() {
    const getImages = () => {
        const stringImages = storage.getString("images");
        if (!stringImages) {
            storage.set("images", JSON.stringify([]));
        }

        return JSON.parse(stringImages || "[]");
    };

    const isImageExist = () => {
        const images = getImages();
        return images.length > 0;
    }

    const getLastId = () => {
        const images = getImages();
        return images.length > 0 ? images[images.length - 1].id : 0;
    }

    const generateId = () => {
        return getLastId() + 1;
    }

    const createImage = (uri: string) => {
        const currentDate = dayjs().unix();
        const id = generateId();
        const images = getImages();
        const newImages = images ? [...images, { uri, date: currentDate, id }] : [{ uri, date: currentDate, id }];
        storage.set("images", JSON.stringify(newImages));
    }

    const getImage = (id: number) => {
        const images = getImages();
        return images.find((image: Image) => image.id === id);
    }

    const deleteStorage = () => {
        storage.clearAll();
    }

    return {
        getImages,
        isImageExist,
        createImage,
        getImage,
        deleteStorage,
    }
}