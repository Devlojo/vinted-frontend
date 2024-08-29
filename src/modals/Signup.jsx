import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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

  const fetchData = async () => {
    try {
      const sendData = await axios.post(
        "https://site--backend-vinted--bf7zj7wtgltq.code.run/user/signup",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      // récupération du token du nouvel utilisateur qui va servir pendant l'authentification
      Cookies.set("token", sendData.data.token);
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
              type="passsword"
              name="password"
              id="password"
              placeholder="Mot de passe"
              onChange={handlePasswordChange}
              value={password}
            />
            <div className="checkbox-container">
              <input type="checkbox" name="newsletter" id="newsletter" />
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
