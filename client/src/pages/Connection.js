import React from 'react';

export default function Connection() {
  return (
    <div>
      <h2>Connection</h2>
      <form>
        <div>
          <input type='text' placeholder='Email'/>
        </div>
        <br />
        <div>
          <input type='password' placeholder='Password'/>
        </div>
        <br />
        <button>Log In</button>
      </form>
    </div>
  );
};