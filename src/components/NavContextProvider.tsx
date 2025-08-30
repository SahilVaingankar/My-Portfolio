import { createContext, ReactNode, useState } from "react";

interface NavContextProps {
  selectedLink: string;
  setSelectedLink: React.Dispatch<React.SetStateAction<string>>;
}

interface NavContextProviderProps {
  children: ReactNode;
}

export const NavContext = createContext<NavContextProps | null>(null);

export const NavContextProvider = ({ children }: NavContextProviderProps) => {
  const [selectedLink, setSelectedLink] = useState<string>("Home");
  return (
    <NavContext.Provider value={{ selectedLink, setSelectedLink }}>
      {children}
    </NavContext.Provider>
  );
};
