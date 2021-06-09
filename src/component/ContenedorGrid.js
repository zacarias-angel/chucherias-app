import React,{fragment} from 'react';
import ItemListContainer from './ItemListContainer.js';
import NavBar from './NavBar.js'
const ContenedorGrid = () =>{
    return (
    <fragment>
        <div className="contenedor-grid">
        <NavBar/>
        <div className="banner" >
        </div>
        <ItemListContainer texto ="proximante catalogo."/>
        <div className="widget">
            
        </div>
        <div className="footer">
        
        </div>
        <div className="footer2">
            
        
        </div>
    
        </div>
    </fragment>

    )
}
export default ContenedorGrid;