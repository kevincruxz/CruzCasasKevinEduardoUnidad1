import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Login from '../Login';
import Register from '../Register';
import './Main.css'
import Carousel from '../Carousel';
import Typewriter from 'typewriter-effect';

const Main = () => {
    const [loginAbierto, setLoginAbierto] = useState(true)

    const abrirLogin = () => setLoginAbierto(true)

    const cerrarLogin = () => setLoginAbierto(false)

    const imageRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(
            imageRef.current,
            {
                x: '100vw',
                opacity: 0,
                rotation: 0,
            },
            {
                x: 0,
                opacity: 1,
                rotation: 360,
                duration: 1,
                ease: 'power2.out',
                delay: 0.5,
            }
        );
    }, []);

    return (
        <div className="main container mt-4 mb-5">
            <div>
                <h4 className='mb-4'>
                    <Typewriter
                        options={{
                            strings: ['Bienvenido a Los Burros de Don Pepe!', 'Pasele a lo Barrido'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h4>
                <button className={`btn me-2 ${loginAbierto ? 'btn-secondary' : 'btn-primary'}`} onClick={cerrarLogin}>Registrarse</button>
                <button className={`btn ${loginAbierto ? 'btn-primary' : 'btn-secondary'}`} onClick={abrirLogin}>Iniciar Sesion</button>
                {loginAbierto ? <Login /> : <Register />}
            </div>
            <img src='./img/burrito.png' className='burrote' ref={imageRef} />
        </div>
    )
}

export default Main;