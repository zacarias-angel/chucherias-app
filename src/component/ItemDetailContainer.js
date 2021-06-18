import React from 'react';



const ItemdetailContainer = props =>{
    const {children,texto} = props;
    return(
        <div className="main">
            <h2>{texto}</h2>
            {children}
        </div>
    )
    
    
}
export default ItemdetailContainer;