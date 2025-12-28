import { createContext } from "react";

export const AppContext=createContext();
export const AppContextProvider=({children})=>{
    const value={
        a:"value",
        b:"value",
         c:"value",
          d:"value",
           e:"value",
            f:"value",
    }
    return(
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )

}