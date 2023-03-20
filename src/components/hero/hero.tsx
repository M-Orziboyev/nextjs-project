import { image_base } from 'src/helpers/constants';
import Image from 'next/image'
import { IMovie } from '../interfaces/app.interface';
import { HeroProps } from './hero.props';
import { useState, useEffect } from 'react';

function Hero({ trending }: HeroProps): JSX.Element {
    const [movie, setMovie] = useState<IMovie>({} as IMovie)

    useEffect(() => {
        const randomMovie = trending[Math.floor(Math.random() * trending.length)]
        setMovie(randomMovie)
    }, [trending])

    return (
        <div className='flex flex-col space-y-2 py-20 md:space-y-4 lg:h-[65vh] lg:pb-12 lg:justify-end '>
            <div className='absolute top-0 left-0 -z-10 h-[95vh] w-full'>
                <Image src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`} alt={movie.name} fill className='object-cover'/>
            </div>
            <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl text-white'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <p className='max-w-xs md:max-w-lg lg:max-w-2xl text-xs md:text-xl lg:text-2xl text-white'>{movie?.overview}</p>

            <div>
                <button  className='bg-transparent  border-solid border-2 border-[black] w-[200px] h-[56px] rounded-full'>Watch Now</button>
            </div>
        </div>
    )
}

export default Hero