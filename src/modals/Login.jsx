import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://site--backend-vinted--bf7zj7wtgltq.code.run/user/login",
        {
          email: email,
          password: password,
        }
      );

      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="modal">
        <div className="form-container">
          <h2>Se connecter</h2>
          <form className="connexion-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleEmailChange}
              value={email}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
              onChange={handlePasswordChange}
              value={password}
            />

            <button>Se connecter</button>
            <Link to="/user/signup">
              <p>Pas encore de compte ? Inscris-toi !</p>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
