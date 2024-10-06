import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/authSlice';
import "./Form.css";

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const authError = useSelector((state) => state.auth.error);
  const token = useSelector((state) => state.auth.token);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  // Utilisez useEffect pour surveiller les changements de authStatus et token
  useEffect(() => {
    if (authStatus === 'succeeded' && token && rememberMe) {
      localStorage.setItem('token', token);
    }
  }, [authStatus, token, rememberMe]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="signIn-Modale-Email-Wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="SignIn-Modale-Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="signIn-Modale-Password-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="signIn-Modale-Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="signIn-Modale-RememberMe-wrapper">
        <input
          type="checkbox"
          id="signIn-Modale-RememberMe"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="signIn-Modale-RememberMe">Remember Me</label>
      </div>
      <div className="signIn-Modale-Submit-Wrapper">
        <input type="submit" id="signIn-Modale-Submit" value="Sign In" />
      </div>
      {authStatus === 'loading' && <p>Loading...</p>}
      {authStatus === 'failed' && <p>Error: {authError}</p>}
    </form>
  );
}

export default Form;