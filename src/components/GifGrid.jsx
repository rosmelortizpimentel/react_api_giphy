import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { Giftem } from './Giftem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, []);

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {
                    images.map((image) => (
                        <Giftem
                            key={image.id}
                            {...image}
                        />
                    ))

                }
            </div>
        </>
    )
}
