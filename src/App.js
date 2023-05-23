import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Cart from './Components/Cart';
import Home from './pages/Home';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);



  React.useEffect(() => {
    axios.get('https://6467fd35e99f0ba0a81c043a.mockapi.io/items').then(res =>{
      setItems(res.data);
    });
    axios.get('https://6467fd35e99f0ba0a81c043a.mockapi.io/cart').then(res =>{
      setCartItems(res.data);
    });
  }, []);



  const onAddToCart = (obj) => {
    axios.post('https://6467fd35e99f0ba0a81c043a.mockapi.io/cart', obj);
    setCartItems((prev) => [ ... prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6467fd35e99f0ba0a81c043a.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    axios.post('https://646bd9eb7b42c06c3b2a8632.mockapi.io/favorites', obj);
    setFavorites((prev) => [ ... prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };


  return (
    <div className="Wrapper clear">
      
      {cartOpened && (
        <Cart items={cartItems} onClose={() => setCartOpened(false)}  onRemove={onRemoveItem} /> 
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route 
          path="/" 
          element={
          <Home 
            items={items} 
            searchValue={searchValue} 
            setSearchValue={searchValue} 
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
          />
          }
          exact
          />
      </Routes>
         
    </div>
  );
}

export default App;
