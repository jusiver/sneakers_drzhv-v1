function Cart(){
  return(
    <div style={{ display: 'none'}} className="Shadow">
        <div className="Cart" >
          <h2 className="d-flex justify-between mb-30">
            Кошик <img className="cu-p" src="/img/Btn-remove.svg" alt="Remove" />
          </h2>

          <div className="Items"> 

            <div className="CartItem d-flex align-center mb-20" >
              <div 
                style={{ backgroundImage: 'url(/img/Sneakers/1.png)' }} 
                className="CartItemImg "></div>
              
              <div className="mr-20 flex"> 
                <p className="mb-5">Чоловічі Кросівки Nike Dunk Low</p>
                <b>14 888 грн.</b>
              </div>
              <img className="RemoveBtn" src="/img/Btn-remove.svg" alt="Remove" />
            </div>

            <div className="CartItem d-flex align-center mb-20" >
              <div 
                style={{ backgroundImage: 'url(/img/Sneakers/1.png)' }} 
                className="CartItemImg "></div>
              
              <div className="mr-20 flex"> 
                <p className="mb-5">Чоловічі Кросівки Nike Dunk Low</p>
                <b>14 888 грн.</b>
              </div>
              <img className="RemoveBtn" src="/img/Btn-remove.svg" alt="Remove" />
            </div>

            <div className="CartItem d-flex align-center mb-20" >
              <div 
                style={{ backgroundImage: 'url(/img/Sneakers/1.png)' }} 
                className="CartItemImg "></div>
              
              <div className="mr-20 flex"> 
                <p className="mb-5">Чоловічі Кросівки Nike Dunk Low</p>
                <b>14 888 грн.</b>
              </div>
              <img className="RemoveBtn" src="/img/Btn-remove.svg" alt="Remove" />
            </div>

          </div>

          <div  className="CartTotal">
            <ul>
              <li>
              <span>Разом:</span>
              <div></div>
              <b>29 776 грн.</b>
            </li>
            <li>
              <span>Податок 5%:</span>
              <div></div>
              <b>1 488.8 грн.</b>
            </li>
          </ul>
          <button className="redButton">
            Оформити замовлення <img src="/img/Arrow.svg" alt="Arrow"/>
          </button>
        </div>
          
        </div>
      </div>
  );

}

export default Cart;