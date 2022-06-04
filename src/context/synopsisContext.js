import { createContext } from "react";

 export const SynopsisContext = createContext();

 export const SynopsisProvider = ({children}) => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <SynopsisContext.Provider>
            {children}
        </SynopsisContext.Provider>
    )
 }