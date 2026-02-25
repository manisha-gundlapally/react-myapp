import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const changeName = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const submit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/reg",
        data
      );

      console.log(res.data);

      navigate("/h");

    } catch (xyz) {
      console.log(xyz);
    }
  };

  return (
    <>
      <h1>I am App</h1>

      <input onChange={changeName} name="username" placeholder="enter name:" />
      <input onChange={changeName} name="email" placeholder="enter email:" />
      <input onChange={changeName} name="password" placeholder="enter password:" />

      <button onClick={submit}>Submit</button>
    </>
  );
}

export default Register;