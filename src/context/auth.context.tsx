import { User } from 'firebase/auth';
import { createContext, ReactNode, useMemo } from 'react';
import { useAuth } from 'src/hooks/useAuth';

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
    const { user, error, isLoading, logout, signIn, signUp } = useAuth()

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
    )
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
