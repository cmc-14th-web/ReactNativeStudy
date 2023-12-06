import { storage } from "../utils/storage"

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
        return images && images.length > 0;
    }

    const createImage = (uri: string) => {
        const currentDate = new Date().toString();
        const images = getImages();
        const newImages = images ? [...images, { uri, date: currentDate }] : [{ uri, date: currentDate }];
        storage.set("images", JSON.stringify(newImages));
    }

    const getImage = (date: string) => {
        const images = getImages();
        return images.find((image: any) => image.date === date);
    }

    return {
        getImages,
        isImageExist,
        createImage,
        getImage
    }
}