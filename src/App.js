import logo from './logo.svg';
import Header from './components/Header'
import './App.css';

import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='shop-container'>
        <Shop/>
      </div>
    </div>
  );
}

export default App;
