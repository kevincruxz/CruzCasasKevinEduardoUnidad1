import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import Menu from './Components/Menu';
import { useState } from 'react';

function App() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const abrirMenu = () => setMenuAbierto(true);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <>
      <div className={`oscuridad ${menuAbierto ? 'oscuridad-abierta' : ''}`}></div>
      <Nav abrirMenu={abrirMenu} />
      <Menu cerrarMenu={cerrarMenu} estado={menuAbierto} />
    </>
  )
}

export default App