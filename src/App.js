
import './App.css';
import ContenedorGrid  from './component/ContenedorGrid.js';
import Ruteo from './component/Ruteo.js'
 import ItemListContainer from './component/ItemListContainer.js';
import  ItemCount  from './component/ItemCount';
import ItemList from './component/ItemList.js';
import Item from './component/Item.js'; 

function App() {
  return (
    <div className="App">
      <ContenedorGrid >
        <Ruteo/>
        <ItemListContainer texto ="proximante catalogo.">
          <ItemCount/>
          <ItemList>
            <Item/>
          </ItemList>
        </ItemListContainer> 
      </ContenedorGrid>
    </div>
  );
}

export default App;
