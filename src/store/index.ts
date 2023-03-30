import {create} from 'zustand'
import { IMovie } from '../components/interfaces/app.interface';

interface InfoState {
    modal: boolean
    currentMovie: IMovie
    setModal: (bool: boolean) => void
    setCurrentMovie: (movie:IMovie) => void
}

export const useInfoStore = create<InfoState>()(set => ({
    modal: false,
    currentMovie: {} as IMovie,
    setModal: (bool: boolean) => set(state => ({ ...state, modal: bool})),
    setCurrentMovie: (movie: IMovie) => set(state => ({...state, currentMovie: movie}))
}))