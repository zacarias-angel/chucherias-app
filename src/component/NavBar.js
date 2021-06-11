import React from 'react';
import CardWiget from './CardWiget.js';
import imgLogo from '../img/logo.png';

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
                            <li className="dropdow"> <a href="/" className="btn-drop"> PRODUCTOS</a>
                                <ul className="drop-container">
                                    <li className="limpieza-drop" ><a href="/">LIMPIEZA</a></li>
                                    <li className="reposteria-drop"><a href="/">REPOSTERIA</a></li>
                                    <li className="gastronomia-drop" ><a href="/">GASTRONOMIA</a></li>
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