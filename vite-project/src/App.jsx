import { Routes, Route } from "react-router-dom";
import './App.css';
import Headerhor from "./components/Headerhor";
import Headerver from "./components/Headerver";
import Home from "./views/Home";
import Footer from "./components/Footer";
import User from "./views/User";
import Foro from "./views/Foro";
import RankingPage from "./components/RankingPage";
import Submit from "./views/Submit";
import { useState } from "react";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="app-container">
      <Headerver collapsed={isCollapsed} toggleMenu={toggleMenu} />
      <main className={`main-content ${isCollapsed ? 'collapsed' : ''}`}>
        <Headerhor isCollapsed={isCollapsed} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/User" element={<User />} />
          <Route path="/Foro" element={<Foro />} />
          <Route path="/RankingPage" element={<RankingPage />} />
          <Route path="/Submit" element={<Submit />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
