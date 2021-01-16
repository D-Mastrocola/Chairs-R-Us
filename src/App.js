import logo from './logo.svg';
import Header from './components/Header'
import './App.css';
import CartWidget from './components/CartWidget';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='shop-container'>
        <Shop/>
        <CartWidget/>
      </div>
    </div>
  );
}

export default App;
