import React from 'react';

const ContenedorGrid = props =>{
    const {children} = props;
    return (
    <>
        <div className="contenedor-grid">
        {children}
        </div>
    </>

    )
}
export default ContenedorGrid;