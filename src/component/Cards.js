import React,{useContext} from 'react';
import {Addcontext} from '../context/Addcontext.js';



const Cards = props =>{
    const {agregarCarrito, quitarcarrito} = props; 
   
    const [hookcontext,setHookcontext] = useContext(Addcontext);
    console.log(hookcontext)
    const mostrarcarrito = hookcontext;
   const totalCompra = mostrarcarrito.reduce((acc,{Numero, precio}) => acc + Numero * precio, 0)



    return(
        <div className=" main">
       <div className="emcarro">
        <table className="tabla-carro">
    <tr>
        <th className="tamanio-entablas">imagen</th>
        <th>titulo</th>
        <th>cantidad</th>
        <th>precio</th>
        <th> a pagar</th>
        <th></th>
        <th></th>
        <th></th>
    </tr>
 {hookcontext.map((mostrarcarrito , id) => <React.Fragment key={id}><tr>
        <td><img src={mostrarcarrito.rutaimagen}/></td>
        <td>{mostrarcarrito.titulo}</td>
        <td>{mostrarcarrito.Numero}</td>
        <td>{mostrarcarrito.precio }</td>
        <td>${mostrarcarrito.precio* mostrarcarrito.Numero}</td>
        <td><button onClick={()=>agregarCarrito()} >agregar</button></td>
        <td><button onClick={quitarcarrito}>quitar</button></td>
        <td><button>eliminiar</button></td>
    </tr> 
    </React.Fragment>)}
        </table>
    
         <div>cuadrado con detalles
         <h4>total de productos</h4>
        <h4>algo mas </h4>
        <h2>{`el total de tu conmpra es ${totalCompra}`}</h2>
        </div>
        </div>
    </div>
    )
}
export default Cards;