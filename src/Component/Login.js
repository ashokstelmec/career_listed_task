import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="app">
      <div className="container">
        <div className="board">Board.</div>

        <div className="form-control">
          <div>
            <div className="sign-in">
              <h2>Sign In</h2>
              <p>Sign in to your account</p>
            </div>
            <div className="social-media">
              <div className="sign-in-google">
                <FcGoogle className="icons" />
                Sign in with Google
              </div>
              <div className="sign-in-apple">
                <AiFillApple className="icons" />
                Sign in with Apple
              </div>
            </div>
            <div className="form-group">
              <form>
                <div>
                  <label>Email address</label>
                </div>
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  required=""
                />
                <div>
                  <label>Password</label>
                </div>
                <input type="password" placeholder="********" required="" />
                <div className="forgot-password">Forgot password?</div>
                <div className="sign-in-button">
                  <button type="submit" onClick={handleClick}>Sign In</button>
                </div>
              </form>
            </div>
            <div className="register-here">
              Don't have an account? <span>Register here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
