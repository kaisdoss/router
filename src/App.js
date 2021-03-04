import "./App.css";
import MovieList from "./components/MovieList";
import MovieCard from "./components/MovieCard";
import Trailer from "./components/Trailer";
import { moviesList } from "./movies";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/trailer/:id" render={({match, history})=>(<Trailer moviesLists={moviesList} match={match} history={history} />)}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
