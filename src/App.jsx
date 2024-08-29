import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* COMPONENTS */
import Header from "./Components/Header";

/* PAGES */
import Home from "./pages/Home";
import Offer from "./pages/Offer";

/* MODAL */

import Signup from "./modals/Signup";
import Login from "./modals/Login";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers/:id" element={<Offer />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/user/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
