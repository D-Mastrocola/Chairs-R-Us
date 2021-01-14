import logo from './logo.svg';
import Header from './components/Header'
import './App.css';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <div className="App">
      <Header />
      <CartWidget/>
    </div>
  );
}

export default App;
