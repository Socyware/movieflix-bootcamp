import { ReactComponent as DesenhoLogin } from "assets/img/Desenho.svg";
import "./Login/styles.css";
import Login from "./Login";
import { hasAnyRoles } from "util/auth";

const Home = () => {
  return (
    
    <div className="container-login">
      <Login />
      <div className="container-login-desenho">
        <div>
          <h1>Avalie Filmes</h1>
        </div>
        <div>
          <h4>Diga o que você achou do seu filme favorito</h4>
        </div>
        <div>
          <DesenhoLogin />
        </div>
      </div>
      <h1>Resultado = {hasAnyRoles(['ROLE_MEMBER' ]) ? 'sim' : 'nao'}</h1>
    </div>
  );
};

export default Home;
