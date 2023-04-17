import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { auth } from 'src/firebase'
import { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';


export const useAuth = () => {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [user, setUser] = useState<User | null>(null)

    const signUp = async (email: string, password: string) => {
        setIsLoading(true)

        await createUserWithEmailAndPassword(auth, email, password).then(res => {
            setUser(res.user);
            router.push('/');
            fetch('/api/customers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: res.user.email, user_id: res.user.uid } ),
            });
            Cookies.set('user_id', res.user.uid)
            setIsLoading(true)
        }).catch(error => setError(error.message)).finally(() => setIsLoading(false))
    }
    const signIn = async (email: string, password: string) => {
        setIsLoading(true)

        await signInWithEmailAndPassword(auth, email, password).then(res => {
            setUser(res.user);
            router.push('/');
            Cookies.set('user_id', res.user.uid)
            setIsLoading(true)
        }).catch(error => setError(error.message)).finally(() => setIsLoading(false))
    }
    const logout = async () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser(null);
            Cookies.remove('user_id');
        }
        ).catch(error => setError(error.message))
    }

    return { error, isLoading, signIn, signUp, logout, user, setUser, setIsLoading }
}

export default useAuth