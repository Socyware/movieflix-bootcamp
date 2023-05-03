import { Link } from "react-router-dom";
import "bootstrap/js/src/collapse.js";
import { TokenData, getTokenData, isAuthenticated } from "util/auth";
import { removeAuthData } from "util/storage";
import { useEffect, useState } from "react";
import history from "util/history";
import "./styles.css";

type AuthData = {
  authenticated: boolean;
  tokenData?: TokenData;
};

const Navbar = () => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthData({
        authenticated: false,
      });
    }
  }, []);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthData({
      authenticated: false,
    });
    history.replace("/");
  };

  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <div className="nav-logo">
          <Link to="/" className="nav-logo-text">
            <h4>MovieFlix</h4>
          </Link>
        </div>

        <div className="nav-logout">
          {authData.authenticated ? (
            <a href="#lougout" onClick={handleLogoutClick}>
              SAIR
            </a>
          ) : (
            <Link to="/" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
