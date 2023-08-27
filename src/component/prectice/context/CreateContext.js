import { createContext } from "react";

export const counter = createContext(null)
export const CounterProvider = counter.Provider

export const nameContext = createContext(null)
export const NameProvider = nameContext.Provider

export const dataContext = createContext(null)
export const DataProvider = dataContext.Provider