import React from 'react';

function NavBar (){
    return (
    <div>
        <div className="contenedor-grid">
        <header>
            <div className="nav" >
                <div className="imagen-logo">
                <img src="imagenes/logo.png" alt=""/>
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
                <div className="btn-movil">
                    <button className="btn-menu">menu</button>
                    <ul className="btn-carrito-movil">
                        <li className="btn-render">  <a id="btncarrito" href="/"> <img src="imagenes/carrito-ico.ico" alt=""/></a> <span className="spancarrito"> </span></li>
                    </ul>
                </div>
            </div>    
        </header>
        <div className="banner" >
        </div>
        <div className=" main">
            

        </div>
        <div className="widget">
            
        </div>
        <div className="footer">
        
        </div>
        <div className="footer2">
            
        
        </div>
    
        </div>
    </div>

    );
}
export default NavBar;