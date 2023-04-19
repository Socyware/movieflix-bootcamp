import ButtonIcon from "components/ButtonIcon";
import { Link } from "react-router-dom";
import "./styles.css";


const Login = () => {

  return (
    <div className="container-login">
      <div className="base-card login-card">
        <h1>LOGIN</h1>
        <form>
          <div className="mb-4">
            <input
              type="text"
              className="form-control base-input"
              placeholder="Email"
              name="username"
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              className="form-control base-input "
              placeholder="Password"
              name="password"
            />
          </div>

          <div className="login-submit">
            <Link to="/Movies">
              <ButtonIcon text="Fazer login" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
