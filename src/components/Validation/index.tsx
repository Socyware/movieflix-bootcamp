import { useForm } from "react-hook-form";
import { AxiosRequestConfig } from "axios";
import {  requestBackend } from "util/requests";
import { MoviesReviews } from "types/moviesReviews";
import "./styles.css";

type Props = {
  movieId: string;
  onInsertReview: (review: MoviesReviews) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const Validation = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    console.log(formData);

    const config: AxiosRequestConfig = {
      method: "POST",
      url: "/reviews",
      data: formData,
      withCredentials: true,
      
    };

    requestBackend(config)
      .then(response => {
        setValue('text','');
        onInsertReview(response.data);
        console.log("SUCESSO AO SALVAR", response);
      })
      .catch((error) => {
        console.log("ERRO AO SALVAR", error);
      });
  };

  return (
    <div className="container-validation base-card">
      <div className="base-input">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
              {...register('text', {
                required: 'Campo obrigatório',
              })}
                type="text"
                name="text"
                placeholder="Deixe sua avaliação aqui"
              />
              <div>
                {errors.text?.message}
              </div>
            </div>
            <button type="submit">
              SALVAR AVALIAÇÃO
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Validation;
