import { use } from 'react';
import { AuthContext } from '../context/AuthContext';

import LoginForm from '../components/Login/LoginForm';

const Login = () => {
    const { loggedIn, setLoggedIn } = use(AuthContext)
    
    return (
        <>
            <h1>Log In</h1>
            <LoginForm/>
        </>
    )
}

export default Login

