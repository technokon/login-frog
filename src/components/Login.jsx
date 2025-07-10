import { useContext } from "react";
import { useRef } from "react";
import { Session } from "../App";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setSession } = useContext(Session);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (usernameRef.current.value && passwordRef.current.value) {
      setSession(usernameRef.current.value);
      navigate(location.state?.from?.pathname || "/", { replace: true });
    }
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usrname">Username:</label>
          <input ref={usernameRef} id="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input ref={passwordRef} id="password" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
