import React from 'react';
const ItemListContainer = props => {
    
    const {texto} = props;
    return(
    <div className=" main">
        <p>
            {texto}'
        </p>

    </div>
    )
    
}

export default ItemListContainer;