import "./App.css";
import {
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Login } from "./components/Login";
import { Dash } from "./components/Dash";
import { useState } from "react";
import { createContext } from "react";
import { PrivateRoute } from "./components/PrivateRoute";
import { Home } from "./components/Home";

export const Session = createContext(null);

function App() {
  const [username, setUsername] = useState(
    () => localStorage.getItem("username") || null
  );

  const onLogout = () => {
    setUsername(null);
    localStorage.removeItem("username");
  };

  const setSession = (user) => {
    setUsername(user);
    localStorage.setItem("username", user);
  };

  return (
    <>
      {username && <button onClick={onLogout}>Logout</button>}
      <nav>
        {!username && (
          <Link className="link" to="/login">
            Login
          </Link>
        )}
        {username && (
          <Link className="link" to="/dashboard">
            Dashboard
          </Link>
        )}
        <Link className="link" to="/">
          Home
        </Link>
      </nav>

      <Session.Provider value={{ setSession, username }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dash />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Session.Provider>
    </>
  );
}

export default App;
