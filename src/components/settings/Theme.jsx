import { useContext } from 'react'
import UserPreferencesContext from '../../context/UserPreferencesContext.jsx'

const Theme = () => {
  const { theme, toggleTheme } =  useContext(UserPreferencesContext)
  return (
    <div>
      <label>Theme</label>
      <button onClick={toggleTheme}>{theme === 'light' ? 'Switch to Dark' : 'Switch to Light'} </button>
    </div>
  )
}

export default Theme
