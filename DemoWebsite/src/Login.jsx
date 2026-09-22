import "./App.css";

function Login() {
  return (
    <div className="login-page">
      <h1>Login Page</h1>

      <input className="login-input" type="email" placeholder="Enter Email" />

      <br />
      <br />

      <input
        className="login-input"
        type="password"
        placeholder="Enter Password"
      />

      <br />
      <br />

      <button className="login-button">Login</button>
    </div>
  );
}

export default Login;
