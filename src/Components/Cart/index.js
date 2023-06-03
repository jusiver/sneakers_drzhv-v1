//библиотеки (чужое)
import React from 'react';
import axios from 'axios';

//javascripts файлы, компонентов
import Info from '../info';
import { useCart } from '../../hooks/useCart';

//стили, прочее
import styles from './Cart.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Cart({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://646bd9eb7b42c06c3b2a8632.mockapi.io/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      //"костыль" для мокапи
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://6467fd35e99f0ba0a81c043a.mockapi.io/cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Помилка під час створення замовлення');
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.shadow} ${opened ? styles.shadowVisible : ''}`}>
      <div className={styles.cart}> 
        <h2 className="d-flex justify-between mb-30">
          Кошик
          <img onClick={onClose} className="cu-p" src="img/Btn-remove.svg" alt="Close" />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="Items flex">
              {items.map((obj) => (
                <div key={obj.id} className="CartItem d-flex align-center mb-20">
                  <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="CartItemImg"></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} грн.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="RemoveBtn"
                    src="img/Btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="CartTotal">
              <ul>
                <li>
                  <span>Разом:</span>
                  <div></div>
                  <b>{totalPrice} грн.</b>
                </li>
                <li>
                  <span>Податок 5%:</span>
                  <div></div>
                  <b>{parseFloat((totalPrice / 100) * 5).toFixed(2)} грн.</b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className="redButton">
                Оформити замовлення <img src="img/Arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? 'Замовлення оформлене!' : 'Кошик порожній'}
            description={
              isOrderComplete
                ? `Ваше замовлення #${orderId} скоро буде передано кур'єру`
                : 'Додайте хоча б одну пару кросівок, щоб зробити замовлення.'
            }
            image={isOrderComplete ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'}
            items={items}
          />
        )}
      </div>
    </div>
  );
}

export default Cart;