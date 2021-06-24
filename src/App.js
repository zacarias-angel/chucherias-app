
import './App.css';
import ContenedorGrid  from './component/ContenedorGrid.js';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import NavBar from './component/NavBar.js';
import ItemdetailContainer from './component/ItemDetailContainer.js';
import ItemDetail from './component/ItemDetail.js';
import ItemListContainer from './component/ItemListContainer.js';
/*import  ItemCount  from './component/ItemCount';*/
import ItemList from './component/ItemList.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ContenedorGrid >
      <NavBar/>
      <Switch>
        <Route exact path="/" >
          <ItemListContainer texto ="proximante catalogo.">
          <ItemList/>
        </ItemListContainer> 
        </Route>
        
          <ItemdetailContainer  texto ="DETALLES.">
            <Route exact path="/detalles/:id">
          <ItemDetail/>
          </Route>
        </ItemdetailContainer>
        
      </Switch>
     </ContenedorGrid>
      </BrowserRouter>
    </div>
  );
}

export default App;
