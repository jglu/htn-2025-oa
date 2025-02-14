import { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const { loggedIn, setLoggedIn } = use(AuthContext)
    
    return (
        <>
            <p>login page</p>
        </>
    )
}

export default Login
