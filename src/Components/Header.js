import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../hooks/useCart';

function Header(props) {
  const { totalPrice } = useCart();

    return (
        <header className="d-flex justify-between align-center p-40">
          <Link to="/">
            <div className="d-flex align-center">
              <img width={40} height={40} src="img/Logo.png" alt="Logo" />
                <div>
                  <h3 className="text-uppercase">Drzhv_Store</h3>
                  <p className="opacity-5">Магазин кросівок для найкращих</p>
                </div>
            </div>
        </Link>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img width={18} height={18} src="img/Cart.svg" alt="Кошик" />
            <span>{totalPrice} грн.</span>
          </li>
          <li className="mr-5 cu-p">
            <Link to="/favorites">
              <img width={18} height={18} src="img/Heart.svg" alt="Закладки" />
            </Link>
          </li>
          <li>
          <Link to="/orders">
              <img width={18} height={18} src="img/User.svg" alt="Юзер" />
            </Link>
          </li>
        </ul>
      </header>
    );

}

export default Header;