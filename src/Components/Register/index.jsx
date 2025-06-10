import './Login.css'

const Login = () => {
    return (
        <div className='login p-4 mt-3'>
            <h3>Crea una Cuenta</h3>
            <form action="" className='d-flex flex-column gap-1'>

                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" />

                        <label htmlFor="apellidos">Apellidos</label>
                        <input type="text" name="apellidos" id="apellidos" />

                
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" />
                <button className='btn btn-primary mt-3'>Iniciar Sesion</button>
            </form>
        </div>
    )
}

export default Login