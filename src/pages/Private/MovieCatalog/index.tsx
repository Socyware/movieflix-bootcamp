import MovieCard from "components/MovieCard";
import { MovieById } from "types/movieById";
import { useCallback, useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "util/requests";
import { SpringPage } from "types/vendor/spring";
import Pagination from "components/Pagination";
import MovieFilter, { MovieFilterData } from "components/MovieFilter";

import "./styles.css";

type ControlComponentsData = {
  activePage: number;
  filterData: MovieFilterData;
};

const MovieCatalog = () => {
  const [movieById, setMovieById] = useState<SpringPage<MovieById>>();

  const [controlComponentsData, setControlComponentsData] = useState<
    ControlComponentsData
  >({
    activePage: 0,
    filterData: { name: "", genre: null },
  });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: MovieFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };

  const getMovies = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        name: controlComponentsData.filterData.name,
        genreId: controlComponentsData.filterData.genre?.id,
      },
    };

    requestBackend(config).then((response) => {
      setMovieById(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="container-listmovie">
      <div className="row mt-2 mb-2">
        <MovieFilter onSubmitFilter={handleSubmitFilter} />
      </div>

      <div className=" row container-movie-card ">
        {movieById?.content.map((movieById) => (
          <div className=" col col-sm-6 col-lg-4 col-xl-3">
            <MovieCard movieById={movieById} />
          </div>
        ))}
      </div>

      <div className="row my-2">
        <Pagination
          forcePage={movieById?.number}
          pageCount={movieById ? movieById.totalPages : 0}
          range={5}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default MovieCatalog;
