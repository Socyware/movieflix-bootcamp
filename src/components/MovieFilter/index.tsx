import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { requestBackend } from "util/requests";
import Select from "react-select";
import { Genres } from "types/genres";
import "./styles.css";

export type MovieFilterData = {
  name: string;
  genre: Genres | null;
};

type Props = {
  onSubmitFilter: (data: MovieFilterData) => void;
};

const MovieFilter = ({ onSubmitFilter }: Props) => {
  const [selectGenre, setSelectGenre] = useState<Genres[]>([]);

  const { handleSubmit, setValue, getValues, control } = useForm<
    MovieFilterData
  >();

  const onSubmit = (formData: MovieFilterData) => {
    onSubmitFilter(formData);
  };

  const handleChangeGenre = (value: Genres) => {
    setValue("genre", value);

    const obj: MovieFilterData = {
      name: getValues("name"),
      genre: getValues("genre"),
    };

    onSubmitFilter(obj);
  };

  useEffect(() => {
    requestBackend({ url: "/genres", withCredentials:true }).then((response) => {
      setSelectGenre(response.data);
    });
  }, []);

  return (
    <div className="base-card genre-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="genre-filter-form ">
        <div className="genre-filter-bottom-container  ">
          <div className="genre-filter-category-container ">
            <Controller
              name="genre"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectGenre}
                  isClearable
                  placeholder="Categoria"
                  classNamePrefix="genre_filter_select__control"
                  onChange={(value) => handleChangeGenre(value as Genres)}
                  getOptionLabel={(genre: Genres) => genre.name}
                  getOptionValue={(genre: Genres) => String(genre.id)}
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
