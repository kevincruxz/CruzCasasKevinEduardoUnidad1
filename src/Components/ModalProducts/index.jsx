import './ModalProducts.css'
import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';

export default function ModalProducts({ cerrarModal, cambiarRefresh }) {
    const [producto, setProducto] = useState({
        nombre: '',
        precio: 0,
        imagen: '',
        descripcion: ''
    });

    const handleChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5035/api/Productos/agregar_producto', producto);
            if (response.status === 200) {
                Swal.fire({
                    title: 'Burro Agregado!',
                    text: 'Se agrego el burro correctamente.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                setProducto({ nombre: '', precio: '', imagen: '', descripcion: '' });
                cambiarRefresh();
                cerrarModal();
            }
        } catch (error) {
            console.error('Error al agregar producto:', error);
            alert('Hubo un error al agregar el producto');
        }
    };

    return (
        <div className='modal-add shadow p-5'>
            <img src="/img/boton-x.png" alt="cerrar modal" className='btn-cerrar-modal' onClick={cerrarModal} />
            <form className='d-flex flex-column gap-3' onSubmit={handleSubmit}>
                <h3>Agregar Burro</h3>
                <div className='d-flex flex-column'>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name='nombre' className='form-control' onChange={handleChange} value={producto.nombre} />
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor="nombre">Precio</label>
                    <input type="number" name='precio' className='form-control' onChange={handleChange} value={producto.precio} />
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor="nombre">Imagen</label>
                    <input type="text" name='imagen' className='form-control' onChange={handleChange} value={producto.imagen} />
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor="nombre">Descripcion</label>
                    <textarea name="descripcion" className='form-control' onChange={handleChange} value={producto.descripcion} />
                </div>
                <button className='btn btn-primary mt-4' type='submit'>Agregar</button>
            </form>
        </div>
    )
}