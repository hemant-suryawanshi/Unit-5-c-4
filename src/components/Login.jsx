import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { handleAuth } = useContext(AuthContext);

  const fetchdata = () => {
   
    fetch(`http://localhost:8080/users?username=${username}`)
      .then((x) => x.json())
      .then((data) => {
       alert("Login Suceesfull")
         handleAuth(true);
          navigate("/neworder")
      });
  };

  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        className="submit"
        onClick={() => {
          fetchdata();
        }}
      >
        Login
      </button>
    </div>
  );
};
