import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";

const Signup = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNewsletter = (event) => {
    setNewsletter(!newsletter);
  };

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://site--backend-vinted--bf7zj7wtgltq.code.run/user/signup",
        {
          username: username,
          email: email,
          password: password,
          newsletter: newsletter,
        }
      );
      // récupération du token du nouvel utilisateur qui va servir pendant l'authentification
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
          <h2>S'inscrire</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Nom d'utilisateur"
              onChange={handleUsernameChange}
              value={username}
            />
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
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="newsletter"
                id="newsletter"
                onChange={handleNewsletter}
              />
            </div>
            <button>S'inscrire</button>
            <Link to="/user/login">
              <p>Tu as déja un compte ? Connecte-toi !</p>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
