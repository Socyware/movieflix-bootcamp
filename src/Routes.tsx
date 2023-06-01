import Navbar from "components/Navbar";
import Home from "pages/Home";
import MovieDetails from "pages/Private/MovieDetails";
import MovieCatalog from "pages/Private/MovieCatalog";
import { Route, Router, Switch } from "react-router-dom";
import history from "util/history";
import PrivateRoute from "components/PrivateRoute";

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <PrivateRoute path="/movies">
        <Route path="/movies">
          <MovieCatalog/>
        </Route>
        <Route path="/movies/details/:movieId">
          <MovieDetails />
        </Route>
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
