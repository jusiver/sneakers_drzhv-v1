import React from 'react';
import Styles from './Card.module.scss';

function Card({ onClickFavorite, title, imageUrl, price, onClickAdd }){
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const onClickPlus = () => {
      onClickAdd({ title, imageUrl, price });
      setIsAdded(!isAdded);
    };

    const onClickLiked = () => {
      onClickAdd ({ title, imageUrl, price} );
      setIsFavorite (!isFavorite);
    }

    return (
        <div className={Styles.Card}>
            <div className={Styles.Favorite} onClick={onClickLiked}>
              <img src={isFavorite ? '/img/Liked.svg' : '/img/Unliked.svg'} alt="Unliked" />  
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>{price} грн.</b>
              </div>
              <img className={Styles.Plus} onClick={onClickPlus} src={isAdded ? "/img/Btn_checked.svg" : "/img/Btn_add.svg"} alt="Add" />
            </div>
        </div>
    );
}

export default Card;