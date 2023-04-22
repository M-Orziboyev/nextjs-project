import { User, onAuthStateChanged } from 'firebase/auth';
import { createContext, ReactNode, useMemo, useEffect, useState } from 'react';
import { useAuth } from 'src/hooks/useAuth';
import { auth } from 'src/firebase';
import { useRouter } from 'next/router'

interface AuthContextState {
    isLoading: boolean,
    error: string,
    user: User | null
    signUp: (email: string, password: string) => Promise<void>
    signIn: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
}
export const AuthContext = createContext<AuthContextState>({
    user: null,
    error: '',
    isLoading: false,
    signIn: async () => { },
    signUp: async () => { },
    logout: async () => { },
})

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [initialLoader, setInitialLoader] = useState<boolean>(true)
    const { user, error, isLoading, logout, signIn, signUp, setUser, setIsLoading } = useAuth()
    const router = useRouter()

    const value = useMemo(() => ({
        user,
        error,
        isLoading,
        logout,
        signIn,
        signUp
    })
        //eslint-disable-next-line
        , [user, isLoading, error]
    );

    useEffect(() => onAuthStateChanged(auth, user => {
        if (user) {
            setUser(user)
        } else {
            setUser(null)
            router.push("/auth")
        }
        setInitialLoader(false)
        //eslint-disable-next-line
    }), [])


    return <AuthContext.Provider value={value}>{!initialLoader ? children : null}</AuthContext.Provider>
}

export default AuthContextProvider
