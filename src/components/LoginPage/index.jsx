import { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const navigate = useNavigate();

  function handleChangeUsername(e) {
    setUsernameInput(e.target.value);
  }

  function handleChangePassword(e) {
    setPasswordInput(e.target.value);
  }

  function validateLogin() {
    if (usernameInput == "admin" && passwordInput == "admin") {
      localStorage.setItem("user", usernameInput);
      alert("Success!");
      navigate("/dash");
    } else {
      alert("Login failed!");
      // navigate("/")
    }
  }

  return (
    <>
      <div className="loginpage-container">
        <div className="login-container">
          <div className="login-image-container"></div>
          {/* <div className="login-divider"></div> */}
          <div className="login-input-container">
            <div className="login-header">Welcome back!</div>
            <form className="user--pass--container" action="">
              <div className="input-placeholder">Username</div>
              <input
                className="username-input"
                onChange={handleChangeUsername}
              ></input>
              <div className="input-spacer" style={{ height: "10px" }}></div>
              <div className="input-placeholder">Password</div>
              <input
                className="password-input"
                onChange={handleChangePassword}
              ></input>
              <div className="input-spacer" style={{ height: "20px" }}></div>
              <button className="auth-button" onClick={validateLogin}>
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
