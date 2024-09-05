const Header = () => {
    return (
      <header>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white">
          <div className="container">
            <a href="https://gotruck.online/#how-to-section" className="navbar-brand"></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="hamburger-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="https://gotruck.online/#how-to-section">
                    Proqram necə işləyir?
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://gotruck.online/#faq">
                    Tez-tez verilən suallar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;