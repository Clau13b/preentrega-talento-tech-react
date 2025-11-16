
import { createContext, useState } from "react";

export const Context = createContext()
const ContexProvider = ({children}) => {


    return (
        <Context.Provider  value={{}}>
            {children}

        </Context.Provider>
        
        
        )
    
}
export default ContexProvider