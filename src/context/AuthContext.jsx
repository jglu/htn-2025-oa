import { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <AuthContext value={{ loggedIn, setLoggedIn }}>
            {children}
        </AuthContext>
    )
}