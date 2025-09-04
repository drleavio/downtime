"use client";
import { createContext, useState, Dispatch, SetStateAction, useEffect } from "react";
import { ReactNode } from "react";

type StoreContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  open:boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const StepContext = createContext<StoreContextType | undefined>(undefined);

export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [open,setOpen]=useState<boolean>(false)

  // Load token only in client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("token");
      setIsLoggedIn(value ? JSON.parse(value) : false);
    }
  }, []);

  // Save token only in client
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("token", JSON.stringify(isLoggedIn));
    }
  }, [isLoggedIn]);

  return (
    <StepContext.Provider value={{ isLoggedIn, setIsLoggedIn,open,setOpen }}>
      {children}
    </StepContext.Provider>
  );
};

export default StepContext;
