import { Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';
import MoviePage from './pages/Movie';
import MoviesPage from './pages/Movies';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/movies" component={MoviesPage} />
        <Route path="/movie" component={MoviePage} />
        <Redirect to="/movies" />
      </Switch>
    </div>
  );
}

export default App;
