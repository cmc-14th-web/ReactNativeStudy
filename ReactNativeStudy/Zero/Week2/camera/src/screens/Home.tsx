import BackgroundContainer from '../component/atom/BackgroundContainer';
import Header from '../component/molcule/Header';
import { storage } from '../utils/storage';
import { useEffect, useState } from 'react';
import EmptyGalleryTemplates from '../component/templates/EmptyGalleryTemplate';
import { Image } from '../type/image';
import ImageGalleryTemplate from '../component/templates/ImageGalleryTemplate';
import { useImages } from '../hooks/useImages';

function Home() {
    const { getImages } = useImages();
    const [images, setImages] = useState<Image[]>(getImages());

    useEffect(() => {
        const listener = storage.addOnValueChangedListener(changedKey => {
            if (changedKey === 'images') {
                setImages(getImages());
            }
        });

        return () => {
            listener.remove();
        }
    }, []);

    const renderImages = () => {
        if (images.length > 0) {
            return <ImageGalleryTemplate images={images} />;
        }

        return <EmptyGalleryTemplates />;
    };

    return (
        <BackgroundContainer>
            <Header title="CMC님의 사진첩" />
            {renderImages()}
        </BackgroundContainer>
    );
}

export default Home;
