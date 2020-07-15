import React from 'react';
import './carrito.css';
import Producto from './Producto';

function Carrito(props) {

    return (
        <div className="carrito">
            <h1>Carrito de compras</h1>

            {
                props.productos.length === 0 ?
                <p>No hay productos</p> 
                :
                props.productos.map(producto =>(
                    <Producto
                        key={producto.id}
                        id={producto.id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        btn_carrito={true}
                        carrito={props.productos}
                        agregarProducto={props.agregarProducto}
                    />
                ))
            }
        </div>
    )
    
}

export default Carrito;