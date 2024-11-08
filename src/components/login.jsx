import { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import users from "../data/userData.js";

let Login = () => {
  let navigate = useNavigate();

  let [Password, setPassword] = useState("");

  let [Username, setUsername] = useState("");

  let [errorF, setError] = useState("");

  let handleClick = (e) => {
    e.preventDefault();

    users.map((val) => {
      if (Username === val.username) {
        console.log("found");
      }
    });

    if (Username != "Aneesh") {
      setError("Incorrect Username");
      console.log("incorrect username");
    } else {
      if (Username === "") {
        console.log("username is empty");
        setError("Username is empty  !");
      } else {
        if (Password === "") {
          console.log("PASSWORD IS EMPTY UNCLE JII");
          setError("Password is empty !");
        } else {
          navigate("/catalog");
        }
      }
    }
  };

  return (
    <div className="AppX">
      <div className="header" id="header">
        <h2 className="titleX">Hadipaa</h2>
      </div>

      <form onSubmit={handleClick}>
        <div class="inbox" id="inbox">
        <p className="main-heading">Sign in</p>
          <input
            type="text"
            className="inputX"
            id="username"
            placeholder="username"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="inputX"
            id="password"
            placeholder="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p id="errorMessage"> {errorF}</p>

          <a href="/signup" className="signup-btn">SignUp</a>
          <br />
          <a href="/catalog">
            <button id="loginbtn" type="submit">
              Login
            </button>
          </a>
        </div>
      </form>

      <footer>
        <p>
          This is an online entertaining OTT platform designed by Aneesh Tiwari
          , it provides you with an experience of free movie watching ###
          Hadippaa!Punjabii!!
        </p>

        <p>Contact: tiwarianeesh629@gmail.com</p>
      </footer>
    </div>
  );
};

export default Login;
