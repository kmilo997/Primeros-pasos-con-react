import React from 'react';


function Producto(props) {

    const agregarProductoCarrito = (id) => {
        const producto = props.productos.filter(p=> p.id === id)[0];
        props.agregarProducto([...props.carrito,producto]);
        console.log("props.carrito",props.carrito);
    }

    const eliminarProducto = (id) => {
        const productosRestantes = props.carrito.filter(p=> p.id != id);
        console.log("id",id);
        console.log("productosRestantes",productosRestantes);
        props.agregarProducto(productosRestantes);
    }

    return(
     <div className="card">
        <img className="card-img-top" src="..." alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{props.nombre}</h5>
            <p className="card-text">{props.price}</p>
            {
                props.btn_carrito === false ?
                <a href="#" onClick={()=> agregarProductoCarrito(props.id)} className="btn btn-primary">Agregar</a> 
                :
                <a href="#" onClick={()=> eliminarProducto(props.id)} className="btn btn-danger">Eliminar</a>
            }
            
        </div>    
     </div>
    )
}

export default Producto;