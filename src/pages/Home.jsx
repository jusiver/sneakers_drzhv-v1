import React from 'react';

import Card from '../Components/Card';

function Home({ 
    items, 
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart, 
    isLoading
}){
  const renderItems = () => {
      const filtredItems = items.filter((item) => 
        item.title.toLowerCase().includes (searchValue.toLowerCase()),
      );
      return ( isLoading ? [...Array(12)] : filtredItems).map((item, index) => (
        <Card
          key={index}
          onClickFavorite={(obj) => onAddToFavorite(obj)}
          onClickAdd={(obj) => onAddToCart(obj)}
          loading={isLoading}
          {...item}
        />
      ));
  };




    return (
        <div className="Content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Пошук за запитом: "${searchValue}"` : 'Усі кросівки'}</h1>
          <div className="Search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
            <img 
              onClick={() => setSearchValue('')} 
              className="clear cu-p" 
              src="/img/Btn-remove_noBorder.svg" 
              alt="Clear" 
              />
            )}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Пошук..."  />
          </div>
        </div>
        





        <div className="d-flex flex-wrap">
          {renderItems()}
        </div>
      </div>
    );
}

export default Home;