import React from 'react';
import ContentLoader from 'react-content-loader';

import AppContext from '../../context';

import Styles from './Card.module.scss';


function Card({ 
  id, 
  title, 
  imageUrl, 
  price, 
  onClickFavorite, 
  onClickAdd, 
  favorited = false, 
  loading = false, 
}) {
    const { isItemAdded } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const obj = { id, parentId: id, title, imageUrl, price };



    const onClickPlus = () => {
      onClickAdd(obj);
    };

    const onClickLiked = () => {
      onClickFavorite (obj);
      setIsFavorite (!isFavorite);
    };

    return (
        <div className={Styles.Card}>
          {loading ? ( 
            <ContentLoader 
              speed={2}
              width={155}
              height={256}
              viewBox="0 0 155 265"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb">
              <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
              <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
              <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
              <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
              <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
            </ContentLoader> 
          ) : (
            <>
            {onClickFavorite && (
              <div className={Styles.Favorite} onClick={onClickLiked}>
                <img src={isFavorite ? '/img/Liked.svg' : '/img/Unliked.svg'} alt="Unliked" />  
              </div>
            )}
            <img width='100%' height={135} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>{price} грн.</b>
              </div>
              {onClickAdd && (
                <img 
                  className={Styles.Plus} 
                  onClick={onClickPlus} 
                  src={isItemAdded(id) ? "/img/Btn_checked.svg" : "/img/Btn_add.svg"} 
                  alt="Plus" 
              />
            )}
            </div>
          </>
        )} 
      </div>
    );
}

export default Card;