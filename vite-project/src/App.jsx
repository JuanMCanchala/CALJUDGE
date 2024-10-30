import { Routes, Route } from "react-router-dom";
import './App.css'
import Headerhor from './components/Headerhor';
import Home from './views/Home';
// aqui van las paginas
//abajo se pone asi para cada pagina entre routes
// <Route path="/" element={<Inicio />} />

function App() {
  return (
    <div>
      <Headerhor>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </Headerhor>
    </div>

  );
}

export default App;
