import './Login.css'

const Login = () => {
    return (
        <div className='login p-4 mt-3'>
            <h3>Inicia Sesion</h3>
            <form action="" className='d-flex flex-column gap-3'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" />
                <button className='btn btn-primary'>Iniciar Sesion</button>
            </form>
        </div>
    )
}

export default Login