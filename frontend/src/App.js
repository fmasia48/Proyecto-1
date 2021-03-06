import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';

function App() {

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (

    <BrowserRouter>

<div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <Link to="/">Petit Duran</Link>
        
      </div>
      <div className="header-links">
        <Link to="/cart/">Carrito</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Categorias de productos</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <Link to="/category/Vinos">Vinos</Link>
        </li>

        <li>
          <Link to="/category/Aceites">Aceites</Link>
        </li>
        <li>
            <a href="index.html">Packs Especiales</a>
          </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
      <Route path="/signin" component={SigninScreen} />
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/category/:cid" component={HomeScreen} />
      <Route path="/cart/:id?" component={CartScreen} />
      <Route path="/" exact={true} component={HomeScreen} />

      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
