import { Link } from 'react-router-dom';
import './SuccessPage.css';
import Nav from '../Nav';
import Menu from '../Menu';
import { useState } from 'react';

export default function SuccessPage() {
    const [menuAbierto, setMenuAbierto] = useState(false);
        
    const abrirMenu = () => setMenuAbierto(true);
    const cerrarMenu = () => setMenuAbierto(false);

    return (
        <div className='success-page'>
            <div className={`oscuridad ${(menuAbierto) ? 'oscuridad-abierta' : ''}`}></div>
            <Nav abrirMenu={abrirMenu} />
            <Menu cerrarMenu={cerrarMenu} estado={menuAbierto} />
            <div className='d-flex justify-content-center mt-5'>
                <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" alt="Éxito" className='img-fluid success-img' />
            </div>
            <h1 className='text-center mt-4'>¡Éxito!</h1>
            <p className='text-center'>Tu acción se ha completado con éxito.</p>
            <Link to={'/'} className='text-decoration-none'>
                <div className='text-center mt-4'>
                    <p className='btn btn-primary'>Volver al inicio</p>
                </div>
            </Link>
        </div>
    );
}