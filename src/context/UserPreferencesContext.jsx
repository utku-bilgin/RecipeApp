import { createContext, useState } from "react";

export const UserPreferencesContext = createContext()


 export const UserPreferencesProvider = ({children}) => {

    const [language, setLanguage] = useState("English")
    const [theme,setTheme] = useState("light")

    const toggleTheme = () => setTheme( theme === 'light' ? "dark" : 'light')

  return (
    <UserPreferencesContext.Provider value={{theme, toggleTheme}}>
      {children}
    </UserPreferencesContext.Provider>
  )


  }


export default UserPreferencesContext
