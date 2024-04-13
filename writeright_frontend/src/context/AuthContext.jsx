import { createContext, useState, useEffect} from "react";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    return(
        <AuthContext.Provider value={{
            name: 'John Doe',
        }}>
            {children}
        </AuthContext.Provider>
    )
}
