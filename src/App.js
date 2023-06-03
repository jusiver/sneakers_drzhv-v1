import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Cart from './Components/Cart';
import AppContext from './context';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);



  React.useEffect(() => {
    async function fetchData() {
      try {
      
      const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([ //вовращает все 3 промиса в массив, по порядку. С помощью деструктуризации
        axios.get('https://6467fd35e99f0ba0a81c043a.mockapi.io/sneakers_drzhv/cart'), //промис
        axios.get('https://646bd9eb7b42c06c3b2a8632.mockapi.io/sneakers_drzhv/favorites'), //промис 2
        axios.get('https://6467fd35e99f0ba0a81c043a.mockapi.io/sneakers_drzhv/items'), //промис 3 
      ]);
     
      
      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
      } catch (error) {
        alert('Помилка при запиті даних');
      }
    }

    fetchData();
  }, []);



  const onAddToCart = async (obj) => {  
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://6467fd35e99f0ba0a81c043a.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]); // передаем обьект 
        const {data} = await axios.post('https://6467fd35e99f0ba0a81c043a.mockapi.io/cart', obj); // отправляем обьект на бекенд
        setCartItems((prev) => 
          prev.map(item => {
            if (item.parentId === data.parentId) {
              return {
                ...item, 
                id: data.id
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Помилка при додаванні до кошику');
      console.error(error);
    }
  };
  

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://6467fd35e99f0ba0a81c043a.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id)!== Number(id)));
    } catch (error) {
      alert('Помилка при видаленні з кошика');
      console.error(error);
    }
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
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };


  return (
    <AppContext.Provider 
      value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, onAddToCart, setCartOpened, setCartItems }}>
      <div className="Wrapper clear">
        <Cart 
          items={cartItems} 
          onClose={() => setCartOpened(false)}  
          onRemove={onRemoveItem} 
          opened={cartOpened} 
        /> 
          
        
        
        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route 
            exact path="" 
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
            exact path="favorites" 
            element={
            <Favorites />
            }
            />

          <Route 
            exact path="orders" 
            element={
            <Orders />
            }
            />

        </Routes> 
      </div>
    </AppContext.Provider>
  );
}

export default App;
