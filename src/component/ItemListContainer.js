import React from 'react';
import ItemList from './ItemList.js';
const ItemListContainer = props => {
    
    const {texto , children} = props;
    return(
    <div className=" main">
        <p>
            {texto}
        </p>
        {children}
        <ItemList/>
    
    </div>
    )
    
}

export default ItemListContainer;