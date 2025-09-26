"use client";
import React, { createContext, useContext } from 'react'

type SideBarContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBarContext = createContext<SideBarContextType | undefined>(undefined);

export function SideBarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <SideBarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SideBarContext.Provider>
  );
}

export default function useSideBarContext() {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error('useSideBarContext must be used within a SideBarProvider');
  }
  return context;
}
