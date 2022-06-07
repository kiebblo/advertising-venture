import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import AuthContext from '../../components/context/AuthContext';
import Loader from '../../components/loader/Loader';
import MessageError from '../../components/errorMsg/MessageError';

export default function Connection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //const { setToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    const user = { email, password };

    axios
      .post("/api/user/login", user)
      .then((res) => {
        localStorage.setItem("token", res.data);
        //setToken(res.data);
        navigate("/");
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h2>Connection</h2>
      {loading && <Loader />}
      {error && <MessageError />}
      <form onSubmit={handleSubmit}>
        <div>
          <input type='text' autoComplete='username' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <br />
        <div>
          <input type='password' autoComplete='current-password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <br />
        <button>Log In</button>
      </form>
    </div>
  );
};