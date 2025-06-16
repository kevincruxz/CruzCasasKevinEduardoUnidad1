import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = ({ abrirMenu }) => {
    return (
        <nav className="shadow p-5">
            <div className='container d-flex justify-content-between align-items-center'>
                <Link to={'/'} className='text-decoration-none'>
                    <h1 className="text-primary titulo-page">Los Burros de Don Pepe</h1>
                </Link>
                <ul className="nav gap-3">
                    <img src="/img/menu.png" alt="imagen de menu" className="menu-icon" onClick={abrirMenu} />
                </ul>
            </div>
        </nav>
    )
}

export default Nav;