import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Cart from './Components/Cart';
import AppContext from './context';

import Home from './pages/Home';
import Favorites from './pages/Favorites';



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);




  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://6467fd35e99f0ba0a81c043a.mockapi.io/cart');
      console.log("fetching: " + cartResponse.data);
      const favoritesResponse = await axios.get('https://646bd9eb7b42c06c3b2a8632.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://6467fd35e99f0ba0a81c043a.mockapi.io/items');
      
      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    
    
    fetchData();
  }, []);



  const onAddToCart = (obj) => {
    console.log('obj.id:', obj);
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://6467fd35e99f0ba0a81c043a.mockapi.io/cart/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
      axios.post('https://6467fd35e99f0ba0a81c043a.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };
  

  const onRemoveItem = (id) => {
    axios.delete(`https://6467fd35e99f0ba0a81c043a.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://646bd9eb7b42c06c3b2a8632.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
      const { data } = await axios.post('https://646bd9eb7b42c06c3b2a8632.mockapi.io/favorites', obj);
      setFavorites((prev) => [ ...prev, data]);
    }
    } catch (error) {
      alert('Не вдалося додати до фаворитів');
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };


  return (
    <AppContext.Provider 
      value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, onAddToCart, setCartOpened, setCartItems }}>
      <div className="Wrapper clear">
        {cartOpened && (
          <Cart items={cartItems} onClose={() => setCartOpened(false)}  onRemove={onRemoveItem} /> 
        )}

        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route 
            exact path="/" 
            element={
            <Home 
              items={items} 
              cartItems={cartItems}
              searchValue={searchValue} 
              setSearchValue={searchValue} 
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}/>
            }
            />

          <Route 
            exact path="/favorites" 
            element={
            <Favorites />
            }
            />
        </Routes> 
      </div>
    </AppContext.Provider>
  );
}

export default App;
