import React,{useContext} from 'react';
import img from '../img/carrito-ico.ico';
import {Link} from 'react-router-dom'
import {Addcontext} from '../context/Addcontext.js';




const CardWiget = () => {
    const [hookcontext,setHookcontext] = useContext(Addcontext);
   
return(
    <div className="btn-movil">
                    <button className="btn-menu">menu</button>
                    <ul className="btn-carrito-movil">
                        <li className="btn-render">  <Link id="btncarrito" to="/cars"> <img src={img} alt=""/></Link> <span className="spancarrito">${hookcontext.leng}</span></li>
                    </ul>
                </div>
)

}
export default CardWiget;
