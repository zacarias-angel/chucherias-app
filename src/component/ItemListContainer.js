import React from 'react';
const ItemListContainer = props => {
    
    const {texto , children} = props;
    return(
    <div className=" main">
        <p>
            {texto}
        </p>
        {children}


    </div>
    )
    
}

export default ItemListContainer;