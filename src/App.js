function App() {
  return (
    <div className="Wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/Logo.png" />
          <div>
            <h3 className="text-uppercase">Sneakers_Drzhv</h3>
            <p className="opacity-5">Магазин кросівок для найкращих</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/Cart.svg" />
            <span>1488 грн.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/User.svg" />
          </li>
        </ul>
      </header>
      <div className="Content p-40">
        <h1 className="mb-40">Усі кросівки</h1>
        

        <div className="d-flex">

        <div className="Card">
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

        <div className="Card">
          <img width={133} height={112} src="/img/sneakers/2.png" alt="Sneakers" />
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

        <div className="Card">
          <img width={133} height={112} src="/img/sneakers/3.png" alt="Sneakers" />
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

        <div className="Card">
          <img width={133} height={112} src="/img/sneakers/4.png" alt="Sneakers" />
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

        </div>

      </div>
    </div>
  );
}

export default App;
