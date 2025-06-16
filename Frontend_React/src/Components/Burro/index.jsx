import './Burro.css'

const Burro = (props) => {
    return (
        <div className='burro'>
            <img src={props.image} alt={props.nombre} className='icono-burro' />
            <div className='d-flex justify-content-between my-1'>
                <h5>{props.nombre}</h5>
                <p>${props.precio}</p>
            </div>
            <div className='d-flex gap-2'>
                <button className='btn btn-dark'>Comprar</button>
                <img src="/img/carrito.png" alt="agregar al carrito" className='carrito' />
            </div>
        </div>
    )
}

export default Burro