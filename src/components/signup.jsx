import "../styles/signup.css";
import "../data/userData.js";
import users from "../data/userData.js";
import { useState } from "react";

let Signup = () => {
  let [usernameS, setUsernameS] = useState("");
  let [PasswordS, setpasswordS] = useState("");

  const handleUsernameChange = (e) => setUsernameS(e.target.value);
  const handlePasswordChange = (e) => setpasswordS(e.target.value);

  let handleSignup = (e) => {
    e.preventDefault();

    users.push({ username: usernameS, password: PasswordS });
    setUsernameS("");
    setpasswordS("");

    console.log(users);
  };

  return (
    <div className="signup-page">
      <div className="signup-header">
        <h2>Hadipa</h2>
      </div>

      <div className="signup-inbox">
        <p className="main-heading">Sign up</p>

        <div className="signup-form">
          <input
            type="text"
            value={usernameS}
            onChange={handleUsernameChange}
            className="inputS"
            id="usernameS"
            placeholder="username"
          />
          <br />
          <input
            type="password"
            value={PasswordS}
            onChange={handlePasswordChange}
            className="inputS"
            id="passwordS"
            placeholder="password"
          />
          <br />
          <p className="termsS">
            <input type="checkbox" /> Accept the terms and conditions
          </p>

          <a href="">
            <button className="signbtn" onClick={handleSignup}>
              Signup
            </button>
          </a>
        </div>
      </div>

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

export default Signup;
