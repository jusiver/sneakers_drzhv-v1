function Card() {
    return (
        <div className="Card">
            <div className="Favorite">
              <img src="/img/Unliked.svg" alt="Unliked" />  
            </div>
            <img width={133} height={112} src="/img/sneakers/1.png" alt="Sneakers" />
            <h5>Чоловічі Кросівки Nike Dunk Low</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>14 888 грн.</b>
              </div>
              <button className="Button">
                <img width={11} height={11} src="/img/Add.svg" alt="Add" />
              </button>
            </div>
        </div>
    );
}

export default Card;