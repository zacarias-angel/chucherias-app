import React,{fragment} from 'react';

const ContenedorGrid = props =>{
    const {children} = props;
    return (
    <fragment>
        <div className="contenedor-grid">
        {children}
        </div>
    </fragment>

    )
}
export default ContenedorGrid;