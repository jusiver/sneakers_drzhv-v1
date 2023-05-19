function Header() {
    return (
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
    );

}

export default Header;