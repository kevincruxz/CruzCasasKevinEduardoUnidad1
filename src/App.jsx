import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import Menu from './Components/Menu';
import { use, useState } from 'react';
import Main from './Components/Main';
import Products from './Components/Products';
import Espacio from './Components/EspacioXD';
import { Waves } from './Components/Waves';

function App() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const abrirMenu = () => setMenuAbierto(true);
  const cerrarMenu = () => setMenuAbierto(false);
  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);

  const triggerRefresh = () => {
      setRefresh(!refresh);
  };

  return (
    <div className='app'>
      <div className={`oscuridad ${(menuAbierto || modalAbierto) ? 'oscuridad-abierta' : ''}`}></div>
      <Nav abrirMenu={abrirMenu} />
      <Menu cerrarMenu={cerrarMenu} estado={menuAbierto} />
      <Main />
      <Products abrirModal={abrirModal} cerrarModal={cerrarModal} estado={modalAbierto} cambiarRefresh={triggerRefresh} refresh={refresh} />
      
      <Waves />
    </div>
  )
}

export default App