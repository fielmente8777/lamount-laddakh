"use client";

import { createContext, useState } from "react";
import React, { ReactNode } from "react";

export const DataContext = createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

type DataProviderProps = {
  children: ReactNode;
};

export const DataProvider = ({ children }: DataProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DataContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
