import React from 'react';
import img from '../img/carrito-ico.ico';

const CardWiget = () => {
return(
    
    <div className="btn-movil">
                    <button className="btn-menu">menu</button>
                    <ul className="btn-carrito-movil">
                        <li className="btn-render">  <a id="btncarrito" href="/"> <img src={img} alt=""/></a> <span className="spancarrito"> </span></li>
                    </ul>
                </div>

)

}
export default CardWiget;
