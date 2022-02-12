import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

const handleOnAdd = (quantity) => {
  alert(`su cantidad es ${quantity}`)
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Hola Coders'}/>
      <ItemCount stock={10} initial={0} onAdd={handleOnAdd}/>
    </div>
  );
}

export default App;
