const AuthService = {

login: async (email, password) => {
    const response = axios.post("https://api.escuelajs.co/api/v1/auth/login", {
        "email": email,
        "password": password
    })
    console.log(response)
    return response.data
}





}

export default AuthService;