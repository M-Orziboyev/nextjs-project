import { RowProps } from './row.props';
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'
import Thumbnail from '../thumbnail/thumbnail';

function Row({ title, movies }: RowProps): JSX.Element {
    return (
        <>
            <div className='h-[10vh] space-x-1 md:space-x-2'>
                <h2 className='text-sm md:text-2xl w-56 cursor-pointer font-semibold text-white hover:text-teal-400 transation duration-400'>{title}</h2>
            </div>
            <div className='group relative md:ml-2'>
                <AiFillCaretLeft  className='absolute top-0 bottom-0 left-2 z-40 m-auto h-6 w-6 cursor-pointer fill-white opacity-0 group-hover:opacity-100 hover:scale-125 transation duration-200 shadow'/>
                <div className='flex items-center space-x-0.5 overflow-x-scroll md:space-x-2'>
                    {movies.map(movie => (
                        <Thumbnail key={movie.id} movie={movie}  />
                    ))}
                </div>
                <AiFillCaretRight className='absolute top-0 bottom-0 right-2 z-40 m-auto h-6 w-6 cursor-pointer fill-white opacity-0 group-hover:opacity-100 hover:scale-125 transation duration-200 shadow' />
            </div>
        </>
    )
}

export default Row