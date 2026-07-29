
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { setTeacher } = useContext(AuthContext);

  function handleLogin(event) {

    event.preventDefault();

    if (username === "" || password === "") {

      setError("Please fill in all fields.");

      return;

    }

    setError("");

    setTeacher(username);

    navigate("/dashboard");

  }

  return (

    <div>

      <h1>Teacher Login</h1>

      {error && <p>{error}</p>}

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <br />
        <br />

        <button type="submit">
          Login
        </button>

      </form>

    </div>

  );

}

export default Login;