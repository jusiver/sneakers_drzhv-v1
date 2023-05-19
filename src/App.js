import Card from './Components/Card'
import Header from './Components/Header';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="Wrapper clear">
      
      <Cart />
      
      <Header />





      <div className="Content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Усі кросівки</h1>
          <div className="Search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Пошук..."  />
          </div>
        </div>
        





        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
