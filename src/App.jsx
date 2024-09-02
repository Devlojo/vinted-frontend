import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

/* COMPONENTS */
import Header from "./Components/Header";

/* PAGES */
import Home from "./pages/Home";
import Offer from "./pages/Offer";

/* MODAL */

import Signup from "./modals/Signup";
import Login from "./modals/Login";

const App = () => {
  const [token, setToken] = useState(Cookies.get("token") || null);

  // Cette fonction permet de stocker le token dans le state et dans les cookies ou supprimer le token dans le state et dans les cookies
  const handleToken = (token) => {
    if (token) {
      // Si il y a un token, on le stocke dans les cookies pendant 15 jours
      Cookies.set("token", token, { expires: 15 });
      setToken(token);
    } else {
      Cookies.remove("token");
      setToken(null);
    }
  };
  return (
    <>
      <Router>
        <Header handleToken={handleToken} token={token} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers/:id" element={<Offer />} />
          <Route
            path="/user/signup"
            element={<Signup handleToken={handleToken} />}
          />
          <Route
            path="/user/login"
            element={<Login handleToken={handleToken} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
