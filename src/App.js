
import './App.css';
import ContenedorGrid  from './component/ContenedorGrid.js';
import NavBar from './component/NavBar.js'
/* import ItemListContainer from './component/ItemListContainer.js';
import  ItemCount  from './component/ItemCount';
import ItemList from './component/ItemList.js';
import Item from './component/Item.js'; */
import ItemdetailContainer from './component/ItemDetailContainer.js';
import ItemDetail from './component/ItemDetail.js';
function App() {
  return (
    <div className="App">
      <ContenedorGrid >
        <NavBar/>
        <ItemdetailContainer texto ="DETALLES.">
          <ItemDetail/>
        </ItemdetailContainer>
        {/* <ItemListContainer texto ="proximante catalogo.">
          <ItemCount/>
          <ItemList>
            <Item/>
          </ItemList>
        </ItemListContainer> */}
      </ContenedorGrid>
    </div>
  );
}

export default App;
