import axios from 'axios';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Registration() {

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { name, lastname, email, password };
    axios
      .post("/api/user/signup", user)
      .then((res) => Navigate("/connection"))
      .catch((error) => console.log(error.message));

  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <br />
        <div>
          <input type='text' placeholder='LastName' value={lastname} onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <br />
        <div>
          <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <br />
        <div>
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <br />
        <button>Register</button>
      </form>
    </div>
  );
};