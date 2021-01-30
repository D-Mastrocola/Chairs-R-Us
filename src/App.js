import './App.css';

import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Chairs R Us</h1>
        <nav>
          <a className='header-link' href='./shop'>Shop</a>
          <a className="header-link" href="#">Cart</a>
        </nav>
      </header>
      <div className='shop-container'>
        <Shop />
      </div>
    </div>
  );
}

export default App;
