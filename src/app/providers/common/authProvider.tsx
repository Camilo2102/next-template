"use client";

import { createContext, useContext} from "react";
import { useStorageState } from "../../hooks/common/useStorageState";

type context = {
    authorized: any | undefined;
    setAuthorized: (authorized: any | undefined) => void
}

const AuthContext = createContext<context>({} as context);


export function useAuthContext() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: {children: React.ReactNode}) {
    const [authorized, setAuthorized] = useStorageState("authorized");
    
    return(
        <AuthContext.Provider value={{authorized, setAuthorized}}>
            {children}
        </AuthContext.Provider>
    )
}