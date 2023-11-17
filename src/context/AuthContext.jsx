import { createContext } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const[isAuthenticated, setIsAuthenticated] = useState(false)

    const login = async (email, password) => {
        try{
            const response = await AuthService.login(email, password)
            if(response.access_token){
                setIsAuthenticated(true)
                return true
            }
        }catch (error) {
            setIsAuthenticated(false)
            return false
        }
    }

    return(
        <AuthContext.Provider value={isAuthenticated, login}>
            {children}
        </AuthContext.Provider>
    )
}