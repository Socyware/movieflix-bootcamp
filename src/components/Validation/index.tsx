import ButtonIcon from "components/ButtonIcon";
import "./styles.css";

const Validation = () => {
  return (
    <div className="container-validation base-card">
      <div className="base-input">
        <input
          type="text"
          className="form-control base-input"
          placeholder="Deixe sua avaliação aqui"
          name="username"
        />
      </div>
      <div className="btn-validation">
        <ButtonIcon text="Salvar Avaliação" />
      </div>
    </div>
  );
};

export default Validation;
