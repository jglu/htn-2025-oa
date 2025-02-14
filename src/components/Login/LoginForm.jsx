import { use, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';

import styled from 'styled-components';

const LoginForm = () => {
  const { loggedIn, setLoggedIn } = use(AuthContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // HARDCODED VALUES
  const trueUsername = 'hacker';
  const truePassword = 'htn2025'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === trueUsername && password === truePassword) {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Invalid credentials. Please try again.');
    }
    setUsername('');
    setPassword('');
  }

  return (
    <>
      { !loggedIn
        ? <StyledWrapper>
          <form className="form" onSubmit={handleSubmit}>
            <div className="title">Welcome,<br /><span>Log in</span></div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
            <button type="submit" className="button-confirm">Let`s go →</button>
          </form>
        </StyledWrapper>
        : <p>You are logged in!</p>
      }
    </>
  );
}

const StyledWrapper = styled.div`
  .form {
    --input-focus: #2d8cf0;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --main-color: #323232;
    padding: 20px;
    background: lightgrey;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
  }

  .title {
    color: var(--font-color);
    font-weight: 900;
    font-size: 20px;
    margin-bottom: 25px;
  }

  .title span {
    color: var(--font-color-sub);
    font-weight: 600;
    font-size: 17px;
  }

  .input {
    width: 250px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 15px;
    font-weight: 600;
    color: var(--font-color);
    padding: 5px 10px;
    outline: none;
  }

  .input::placeholder {
    color: var(--font-color-sub);
    opacity: 0.8;
  }

  .input:focus {
    border: 2px solid var(--input-focus);
  }

  .login-with {
    display: flex;
    gap: 20px;
  }
  }`;

export default LoginForm;
