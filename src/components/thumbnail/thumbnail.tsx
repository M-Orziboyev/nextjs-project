import { image_base } from 'src/helpers/constants';
import Image from 'next/image';
import { thumbnailProps } from './thumbnail.props';

function Thumbnail({ movie }: thumbnailProps): JSX.Element {
    return (
        <div className='relative h-[40vh] min-w-[200px] cursor-pointer transition duration-200 ease-out hover:scale-125 md:h-[50vh] md:min-w-[292px]'>
            <Image
                src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`}
                alt={movie.title}
                fill
                className='object-cover rounded-md md:rounded-sm hover:rounded-md md:hover:rounded-sm'
            />
            <div className='absolute text-blue'>
                {movie.media_type}
            </div>
        </div>
    )
}

export default Thumbnail