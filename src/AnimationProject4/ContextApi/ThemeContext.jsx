import {createContext, useContext, useState} from 'react'

const ThemeContext = createContext()

export  const ThemeProvider =({children})=>{
    const [theme, settheme] = useState("dark")
    const ToggleTheme=()=>{
        settheme(theme==="dark"?"light":"dark")
    }

    return(
        <ThemeContext.Provider value={{theme ,ToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = ()=>useContext(ThemeContext)