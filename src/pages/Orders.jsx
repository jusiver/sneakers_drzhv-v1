import React from 'react';
import axios from 'axios';

import Card from '../Components/Card';
// import AppContext from '../context';

    function Orders() {
      // const {onAddToFavorite, onAddToCart} = React.useContext(AppContext);
      const [orders, setOrders] = React.useState([]);
      const [isLoading, setIsLoading] = React.useState(true);

      
      React.useEffect(() => {
        (async() => {
          try {
            const { data } = await axios.get('https://646bd9eb7b42c06c3b2a8632.mockapi.io/orders');
            setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
            setIsLoading(false);
          } catch (error) { 
            alert('Помилка при запиті замовлень');
            console.error(error);
          }
        })();
      }, []);

      return (
        <div className="Content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>Мої покупки</h1>
          </div>

          <div className="d-flex flex-wrap">
            {( isLoading ? [...Array(12)] : orders).map((item, index) => (
              <Card key={index}
              loading={isLoading}
              {...item} />
            ))}
          </div>
        </div>
      );
}

export default Orders;