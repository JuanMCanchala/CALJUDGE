import { Routes, Route } from "react-router-dom";
import './App.css';
import Headerhor from './components/Headerhor';
import Headerver from './components/Headerver';
import Home from './views/Home';
import Footer from './components/Footer';
import User from "./views/User";
import Foro from "./views/Foro";

function App() {
  return (
    <div className="app-container">
      <Headerver />
        <main className="main-content">
        <Headerhor />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/User" element={<User />} />
            <Route path="/Foro" element={<Foro />} />
          </Routes>
          <Footer />
        </main>
    </div>
  );
}

export default App;
