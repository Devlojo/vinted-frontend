import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* COMPONENTS */
import Header from "./Components/Header";

/* PAGES */
import Home from "./pages/Home";
import Offer from "./pages/Offer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers/:id" element={<Offer />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
