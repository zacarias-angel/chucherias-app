
import './App.css';
import ContenedorGrid  from './component/ContenedorGrid.js';
import NavBar from './component/NavBar.js'
import ItemListContainer from './component/ItemListContainer.js';
function App() {
  return (
    <div className="App">
      <ContenedorGrid >
        <NavBar/>
        <ItemListContainer texto ="proximante catalogo."/>
      </ContenedorGrid>
    </div>
  );
}

export default App;
