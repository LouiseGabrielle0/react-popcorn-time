import moviesArr from "../data/movies.json";
import './Main.css'
import Movies from "./Movies"
import {useState} from "react";

function Main() {

    const [movies, setMovies] = useState(moviesArr);

    const filterTopRated = () => {
        setMovies ((preValue) => preValue.filter(movies => movies.rating >= 8))
        // setMovies(movies.filter(movies => movies.rating >= 8))
    }

  return (
    <> 

    <div className="controls">
        <button onClick={filterTopRated}>Display Top Rated Only</button>
    </div>

     {movies.map((movie) => {
      return (
          <Movies 
                key={movie.key} 
                title={movie.title} 
                year={movie.year} 
                imgURL={movie.imgURL} 
                alt={movie.title} 
                rating={movie.rating}
      />
      )
      })}
      </>
  )
}
 
export default Main;
