import "./login.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    if (email === "rest@rest.com" && password === "rest") {
      localStorage.setItem(
        "restaurant",
        JSON.stringify({ email: email, password: password })
      );
      navigate("/restaurantMenuEdit");
    } else if (email === "user@user.com" && password === "user") {
      localStorage.setItem(
        "user",
        JSON.stringify({ email: email, password: password })
      );
      navigate("/");
    } else if (email === "admin@admin.com" && password === "admin") {
      localStorage.setItem(
        "admin",
        JSON.stringify({ email: email, password: password })
      );
      navigate("/adminAll");
    } else {
      alert("Wrong Email or Password");
      navigate("/login");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("restaurant")) {
      navigate("/restaurantMenuEdit");
    } else if (localStorage.getItem("user")) {
      navigate("/");
    } else if (localStorage.getItem("admin")) {
      navigate("/admin");
    }
  }, []);

  return (
    <div>
      <div className="mainLoginDiv">
        <form className="loginForm">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-3 form-check d-flex justify-content-between">
            <div>
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember Me
              </label>
            </div>
            <div>
              <p>
                Dont have an account yet?{" "}
                <a href="/signUp" style={{ color: "white" }}>
                  Register
                </a>
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-end loginSubmit">
            <button
              type="submit"
              className="btn btn-success"
              onClick={(e) => {
                login(e);
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="loginResgisterRest">
        <p>
          Want to offer services as a restaurant?{" "}
          <a href="/restaurantSignUp">SignUp as a Restaurant</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
