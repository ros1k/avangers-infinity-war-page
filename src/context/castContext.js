import { createContext, useEffect, useState } from "react";
import {castAvengers} from '../helpers/db/cast'

 export const CastContext = createContext();

 export const CastProvider = ({children}) => {
    const [colorThemeType, setColorThemeType] = useState("");
    const [colorTheme, setColorTheme] = useState("");
    const [colorGradient, setColorGradient] = useState("");
 
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSubPage, setCurrentSubPage] = useState(0);
    const [subPages,setSubPages] = useState(['Summary','History','Poster','Design']);
    useEffect(() => {
        setColorThemeType(castAvengers.Avengers[0].colorThemeType)
        setColorTheme(castAvengers.Avengers[0].colorTheme)
        setColorGradient(castAvengers.Avengers[0].colorGradient)
    });

    const changeColorTheme = ( colorThemeType ,colorTheme, colorGradient) => {
        colorThemeType === "single" ? setColorTheme("single") : setColorTheme("gradient");
        if(colorThemeType === "single"){
            setColorTheme(colorTheme);
        }else{
            setColorTheme(colorTheme);
            setColorGradient(colorGradient);
        }
    }
    return (
        <CastContext.Provider 
            value={{
                colorThemeType,
                colorTheme,
                colorGradient,
                changeColorTheme,
                currentSlide,
                currentSubPage,
                setCurrentSubPage,
                subPages,
            }}>
            {children}
        </CastContext.Provider>
    )
 }