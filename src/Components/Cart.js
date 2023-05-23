function Cart({ onClose, onRemove, items = [] }){
  return(
    <div className="Shadow">
        <div className="Cart" >
          <h2 className="d-flex justify-between mb-30">
            Кошик 
            <img onClick={onClose} className="cu-p" src="/img/Btn-remove.svg" alt="Close" />
          </h2>

          {items.length > 0 ? (
            <div>
              <div className="Items"> 
                {items.map((obj) => (
                  <div className="CartItem d-flex align-center mb-20" >
                    <div 
                      style={{ backgroundImage: `url(${obj.imageUrl})` }} 
                      className="CartItemImg "></div>
                  
                  <div className="mr-20 flex"> 
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} грн.</b>
                  </div>
                  <img 
                    onClick={() => onRemove(obj.id)} 
                    className="RemoveBtn" 
                    src="/img/Btn-remove.svg" 
                    alt="Remove" 
                  />
                </div>
                ))}
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
          ) : (
             <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />
            <h2>Кошик порожній</h2>
            <p class="opacity-6">Додайте хоча б одну пару кросівок, щоб зробити замовлення.</p>
            <button onClick={onClose} class="redButton">
                <img src="/img/Arrow.svg" alt="Arrow" />
                Повернутися
            </button>
          </div>
          )}

          
    

          
          
        </div>
      </div>
  );

}

export default Cart;