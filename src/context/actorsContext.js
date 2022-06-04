// react context actorsContext.js
import { createContext, useEffect, useState } from "react";
import { Avengers} from '../helpers/db/avengers'


export const ActorsContext = createContext();



export const ActorsProvider = ({children}) => {




    return (
        <ActorsContext.Provider 
            value={{
           
            }}>
            {children}
        </ActorsContext.Provider>
    )
 }