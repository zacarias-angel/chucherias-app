import React from 'react';
import CardWiget from './CardWiget.js';
import imgLogo from '../img/logo.png';
import {Link} from 'react-router-dom'

function NavBar (){
    return (
        <header>
            <div className="nav" >
                <div className="imagen-logo">
                <img src={imgLogo} alt=""/>
                </div>
                <div className="botones-nav boton-togle" >
                        <ul className="menu-drop">
                            <li> <a href="/"> HOME</a></li>
                            <li className="dropdow"> <Link to="/" className="btn-drop"> PRODUCTOS</Link>
                                <ul className="drop-container">
                                    <li className="limpieza-drop" ><Link to="/">LIMPIEZA</Link></li>
                                    <li className="reposteria-drop"><Link to="/">REPOSTERIA</Link></li>
                                    <li className="gastronomia-drop" ><Link to="/">GASTRONOMIA</Link></li>
                                </ul>
                            </li>
                            <li> <a href="/">CONTACTO</a>
                            </li>
                        </ul>
                </div>
                <CardWiget/>
            </div>    
        </header>
    );
}
export default NavBar;