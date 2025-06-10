import React from 'react'
import './Menu.css';

const Menu = ({ cerrarMenu, estado }) => {
    return (
        <div className={`menu shadow p-4 d-flex flex-column align-items-center ${estado ? 'abierto' : ''}`}>
            <img src="/img/x.png" alt="cerrar menu" className='boton-cerrar' onClick={cerrarMenu} />
            <h3 className="text-primary mb-5 text-center">Menu de Navegacion</h3>
            <div className="d-flex flex-column">
                <a className="btn btn-primary mb-2" href="/">Mapa del Sitio</a>
                <a className="btn btn-secondary mb-2" href="/about">Ayuda</a>
                <a className="btn btn-success mb-2" href="/services">Buzon</a>
                <a className="btn btn-danger mb-2" href="/contact">Contacto</a>
            </div>
        </div>
    )
}

export default Menu;