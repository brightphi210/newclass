import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "./auth/Context"

const ProtectedRoute = ({element}) => {
    const navigate = useNavigate()
    // const isAuthenticated = useContext(UserContext)

    const isAuthenticated = localStorage.getItem('token')

    useEffect(()=>{
        if(!isAuthenticated){
            navigate('/login')
        }
    },[navigate, isAuthenticated])
    
    return isAuthenticated ? element : null
}

export default ProtectedRoute
