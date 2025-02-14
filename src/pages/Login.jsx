import LoginForm from '../components/Login/LoginForm';

import './page.css'

const Login = () => {
    return (
        <div className="page">
            <h1>log in</h1>
            <p>You must log in to access events from the hackathons you've attended.</p>
            <LoginForm/>
        </div>
    )
}

export default Login

