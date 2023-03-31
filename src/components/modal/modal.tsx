import MuiModal from '@mui/material/Modal'
import { useInfoStore } from '../../store/index'
import { FaTimes } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { Element } from '../interfaces/app.interface';
import ReactPlayer from 'react-player'

const Modal = () => {
    const { modal, setModal, currentMovie } = useInfoStore()
    const [trailer, setTrailer] = useState<string>('');
    const [muted, setMuted] = useState<boolean>(true);

    const base_url = process.env.NEXT_PUBLIC_API_DOMAIN as string;
    const api_key = process.env.NEXT_PUBLIC_API_KEY as string;

    const handleClose = () => {
        setModal(false)
    }
    const api = `${base_url}/${currentMovie?.media_type === 'tv' ? 'tv' : 'movie'}/${currentMovie.id}/videos?api_key=${api_key}&language=en-US`;

    useEffect(() => {
        const fetchVideoData = async () => {
            const data = await fetch(api).then(res => res.json())
            if (data?.results) {
                const index = data.results.findIndex((el: Element) => el.type === 'Trailer')
                setTrailer(data?.results[index]?.key);
            }
        };
        fetchVideoData()
        console.log(trailer);

        //eslint-disable-next-line
    }, [currentMovie])
    return (
        <MuiModal open={modal} onClose={handleClose} className={'fixed !top-7 left-0 right-0  z-50 mx-auto w-full mx-w-5xl overflow-hidden'}>
            <>
                <button onClick={handleClose} className='modalButton absolute right-5 top-5  !z-40 h-9 w-9 border-none bg-[#09254e]/40'><FaTimes /></button>
                <div className='relative pt-[55%]'>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${trailer}`} width={'100%'} height={'100%'} playing style={{ top: 0, left: 0, position: 'absolute' }} muted={muted}/>
                </div>
            </>
        </MuiModal>
    )
}

export default Modal
