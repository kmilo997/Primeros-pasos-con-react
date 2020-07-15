import React,{Fragment,useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'

function App() {

  // crear listado de productos
  const [productos, guardarProductos] = useState([
    {id:1 ,nombre:"t-shirt", price: 30},
    {id:2 ,nombre:"kubana", price: 210},
    {id:3 ,nombre:"pisos", price: 110},  
  ]);

  // State carro de compras
  const [carrito,agregarProducto] = useState([]);

  return (
    <Fragment>
      <Header titulo="Mi first app"/>
      <h1>Lista de productos</h1>
      {
        productos.map(p=>(
          <div className="margin-bottom: 10">
            <Producto
              nombre={p.nombre}
              price={p.price}
              id={p.id}
              key={p.id}
              carrito={carrito}
              agregarProducto={agregarProducto}
              productos={productos}
              btn_carrito={false}
            />
          </div>
        ))
      }
      <Carrito
        productos={carrito}
        agregarProducto={agregarProducto}
      />
      <Footer/>
    </Fragment>
  );
}

export default App;
