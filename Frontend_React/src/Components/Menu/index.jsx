import React from 'react'
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = ({ cerrarMenu, estado }) => {
    return (
        <div className={`menu shadow p-4 d-flex flex-column align-items-center ${estado ? 'abierto' : ''}`}>
            <img src="/img/x.png" alt="cerrar menu" className='boton-cerrar' onClick={cerrarMenu} />
            <h3 className="text-primary mb-5 text-center">Menu de Navegacion</h3>
            <div className="d-flex flex-column w-50">
                <Link to={'/ayuda'}>
                    <p className="btn btn-primary mb-2 w-100">Ayuda</p>
                </Link>
                <Link to={'/buzon'}>
                    <p className="btn btn-success mb-2 w-100">Buzon</p>
                </Link>
                <Link to={'/contacto'}>
                    <p className="btn btn-danger mb-2 w-100">Contacto</p>
                </Link>
            </div>
        </div>
    )
}

export default Menu;