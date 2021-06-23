import React from 'react';
import {BrowserRouter,Switch,Route, Link} from 'react-router-dom';
import NavBar from './NavBar.js';
 
import ItemdetailContainer from './ItemDetailContainer.js';
import ItemDetail from './ItemDetail.js';

const Ruteo = ()=>{
    return(
        <BrowserRouter>
        <NavBar/>
        <Switch>
        <Route path="/ItemListContainer" >
        <ItemdetailContainer texto ="DETALLES."><Link to="/ItemListContainer"> enlace</Link>
          <ItemDetail/>
        </ItemdetailContainer>

        </Route>
        </Switch>
        </BrowserRouter>

    )
}
export default Ruteo;