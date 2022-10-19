import logo from './logo.svg';
import log from './recursos/imagenes/UniSophosLogo.png';
import './App.css';
import { FaBeer } from 'react-icons/fa';
import { FiArrowRight } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <label id="InitLabel1">UNIVERSIDAD SOPHOS SOLUTIONS</label>
        <img src={log} className="App-logo" alt="logo" />
        <div>
        <label id="InitLabel2">
          
          INGRESE NIT DE UNIVERSIDAD PARA INICIAR SESIÓN
          </label>
          <button id="ButtonInitLabel"><FiArrowRight /></button>
        </div>
        <form>
        <label for="NIT" >NIT:</label>
        <input type="text" id="InputAreaInitLabel2" ></input>
        </form>

      </header>
    </div>
  );
}

export default App;
