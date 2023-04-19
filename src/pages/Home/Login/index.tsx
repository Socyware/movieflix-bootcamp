import ButtonIcon from "components/ButtonIcon";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./styles.css";

type FormData = {
  username: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit =(formData : FormData) =>{
    console.log('Sucesso')

  };


  return (
    <div className="container-login">
      <div className="base-card login-card">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              {...register("username")}
              type="text"
              className="form-control base-input"
              placeholder="Email"
              name="username"
            />
          </div>
          <div className="mb-2">
            <input
              {...register("password")}
              type="password"
              className="form-control base-input "
              placeholder="Password"
              name="password"
            />
          </div>

          <div className="login-submit">
            <Link to="/movies">
              <ButtonIcon text="Fazer login" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
