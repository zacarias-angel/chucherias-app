
import './App.css';
import ContenedorGrid  from './component/ContenedorGrid.js';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import NavBar from './component/NavBar.js';
import ItemdetailContainer from './component/ItemDetailContainer.js';
import ItemListContainer from './component/ItemListContainer.js';
//import  ItemCount  from './component/ItemCount';
import ItemList from './component/ItemList.js'; 
import {AddProvider} from './context/Addcontext.js';
function App() {
  return (
    <div className="App">
      <AddProvider>
      <BrowserRouter>
      <ContenedorGrid >
      <NavBar/>
      <Switch>
        <Route exact path="/" >
          <ItemListContainer texto ="proximante catalogo.">
            <ItemList/>
          </ItemListContainer> 
        </Route>
        <Route exact path="/detalles/:id">
          <ItemdetailContainer texto ="DETALLES."/>
        </Route>
      </Switch>
      </ContenedorGrid>
      </BrowserRouter>
      </AddProvider>
    </div>
  );
}

export default App;
