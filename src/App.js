import "./App.css";
import MovieDetails from "./components/MovieDetails";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <div className="">
      <h1>Redux Movies</h1>
      <div className="">
        <MoviesList />
        <MovieDetails />
      </div>
    </div>
  );
}

export default App;
