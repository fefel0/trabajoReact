import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CartWidget />
      <ItemListContainer greeting={'Hola Coders'}/>
    </div>
  );
}

export default App;
