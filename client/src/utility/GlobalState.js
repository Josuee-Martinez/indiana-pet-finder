import React, {useState,useContext, createContext} from 'react';

    export const AuthContext = createContext();

    export const AuthProvider = props =>{
        const [authState, setAuthState] = useState({
            isAuthenticated:false
        })


        return(
            <AuthContext.Provider value={[authState, setAuthState]} >{props.children}</AuthContext.Provider>
        )
    }

    export const useAuthStore = () => useContext(AuthContext);