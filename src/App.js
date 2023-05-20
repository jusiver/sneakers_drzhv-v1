import React from 'react';
import Card from './Components/Card';
import Header from './Components/Header';
import Cart from './Components/Cart';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  fetch('https://6467fd35e99f0ba0a81c043a.mockapi.io/items')
    .then((res) =>{
      return res.json();
    })
    .then(json => {
      setItems(json);
    });

  return (
    <div className="Wrapper clear">
      
      {cartOpened && <Cart onClose={() => setCartOpened(false)} /> }

      <Header onClickCart={() => setCartOpened(true)} />





      <div className="Content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Усі кросівки</h1>
          <div className="Search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Пошук..."  />
          </div>
        </div>
        





        <div className="d-flex flex-wrap">
          {items.map((obj) => (
              <Card
                title={obj.title}
                price={obj.price}  
                imageUrl={obj.imageUrl}
                onClickFavorite={() => console.log('Додали до закладок')}
                onClickAdd={() => console.log('Натиснули плюс')}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
