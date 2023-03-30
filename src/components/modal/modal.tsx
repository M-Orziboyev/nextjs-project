import MuiModal from '@mui/material/Modal'
import { useInfoStore } from '../../store/index'
import { FaTimes } from 'react-icons/fa'
const Modal = () => {
    const { modal, setModal } = useInfoStore()
    const handleClose = () => {
        setModal(false)
    }
    return (
        <MuiModal open={modal} onClose={handleClose}>
            <>
                <button onClick={handleClose} className='modalButton absolute right-5 top-5  !z-40 h-9 w-9 border-none bg-[#09254e]/40'><FaTimes /></button>
            </>
        </MuiModal>
    )
}

export default Modal
