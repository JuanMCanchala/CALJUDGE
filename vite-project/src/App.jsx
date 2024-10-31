import { Routes, Route } from "react-router-dom";
import './App.css'
import Headerhor from './components/Headerhor';
import Home from './views/Home';
import Footer from './components/Footer.jsx';
import User from "./views/User.jsx";
import Foro from "./views/Foro.jsx";
// aqui van las paginas
//abajo se pone asi para cada pagina entre routes
// <Route path="/" element={<Inicio />} />

function App() {
  return (
    <div>
      <Headerhor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/User" element={<User />} />
          <Route path="/Foro" element={<Foro />} />
        </Routes>
        <Footer />
    </div>

  );
}

export default App;
