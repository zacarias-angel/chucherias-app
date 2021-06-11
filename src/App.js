
import './App.css';
import ContenedorGrid  from './component/ContenedorGrid.js';
import NavBar from './component/NavBar.js'
import ItemListContainer from './component/ItemListContainer.js';
import  ItemCount  from './component/ItemCount';
function App() {
  return (
    <div className="App">
      <ContenedorGrid >
        <NavBar/>
        <ItemListContainer texto ="proximante catalogo.">
          <ItemCount></ItemCount>
        </ItemListContainer>
      </ContenedorGrid>
    </div>
  );
}

export default App;
