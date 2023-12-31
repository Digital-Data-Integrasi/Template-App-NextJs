"use client";

import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

interface ContextProps {
    username: string;
    setUsername: Dispatch<SetStateAction<string>>;
};


const GlobalContext = createContext<ContextProps>({
    username: '',
    setUsername: (): string => ''
});

export const GlobalContextProvider = ({ children, }: {
    children: ReactNode
}) => {
    const [username, setUsername] = useState('');
    return (
        <GlobalContext.Provider value={{ username, setUsername }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext)

