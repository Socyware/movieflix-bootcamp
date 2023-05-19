import { MoviesByGenre } from "types/moviesByGenre";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { requestBackend } from "util/requests";
import Select from "react-select";
import "./styles.css";


export type MovieFilterData = {
  name: string;
  genre: MoviesByGenre | null;
};

type Props = {
  onSubmitFilter: (data: MovieFilterData) => void;
};

const MovieFilter = ({ onSubmitFilter }: Props) => {
    const [selectCategories, setSelectCategories] = useState<MoviesByGenre[]>([]);

  const { register, handleSubmit, setValue, getValues, control } = useForm<
    MovieFilterData
  >();

  const onSubmit = (formData: MovieFilterData) => {
    onSubmitFilter(formData);
  };

  const hadleFormClear = () => {
    setValue("name", "");
    setValue("genre", null);
  };

  const handleChangeGenre = (value: MoviesByGenre) => {
    setValue("genre", value);

    const obj: MovieFilterData = {
      name: getValues("name"),
      genre: getValues("genre"),
    };

    onSubmitFilter(obj);

  };

  useEffect(() => {
    requestBackend({ url: "/genres" }).then((response) => {
      setSelectCategories(response.data.content);
    });
  }, []);

  return (
    <div className="base-card product-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="product-filter-form">
        <div className="product-filter-bottom-container ">
          <div className="product-filter-category-container">
            <Controller
              name="genre"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectCategories}
                  isClearable
                  placeholder="Categoria"
                  classNamePrefix="product_filter_select__control"
                  onChange={(value) => handleChangeGenre(value as MoviesByGenre)}
                  getOptionLabel={(genre: MoviesByGenre) => genre.title}
                  getOptionValue={(genre: MoviesByGenre) => String(genre.id)}
                />
              )}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MovieFilter;
