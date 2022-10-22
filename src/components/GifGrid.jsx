import { useFechGifs } from '../hooks/useFechGifs';
import { Giftem } from './Giftem';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFechGifs({ category });


    return (
        <>
            <h4>{category}</h4>
            {
                isLoading && (<h2>Loading ... </h2>)
            }
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
