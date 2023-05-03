import { Link } from "react-router-dom";
import "bootstrap/js/src/collapse.js";
import { getTokenData, isAuthenticated } from "util/auth";
import { removeAuthData } from "util/storage";
import { useContext, useEffect } from "react";
import history from "util/history";
import { AuthContext } from "AuthContext";
import "./styles.css";


const Navbar = () => {

  const {authContextData, setAuthContextData } = useContext(AuthContext);


  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
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
          {authContextData.authenticated ? (
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
