import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const changeName = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    try {
      const res = await axios.post("https://cabsystemsms-1.onrender.com/register", data);
      alert(res.data);
    } catch (err) {
      const msg = err?.response?.data || err.message || 'Request failed';
      alert(msg);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <input onChange={changeName} name="username" placeholder="enter Username" />
      <input onChange={changeName} name="email" placeholder="enter email" />
      <input type="password" onChange={changeName} name="password" placeholder="enter password" />
      <button onClick={submit}>register</button>
    </>
  );
}

export default Register;
