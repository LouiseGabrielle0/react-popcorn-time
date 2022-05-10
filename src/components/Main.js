import moviesArr from "../data/movies.json";
import './Main.css'
import Movies from "./Movies"

function Main() {

  return (
    <> 
     {moviesArr.map((movie) => {
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
