import React from 'react';
import ItemDetail from './ItemDetail.js';



const ItemdetailContainer = props =>{
    const {children,texto} = props;
    return(
        <div className="main">
            <h2>{texto}</h2>
            {children}
            <ItemDetail/>

        </div>
    )
    
    
}
export default ItemdetailContainer;