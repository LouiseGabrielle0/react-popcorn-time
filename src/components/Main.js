import './Main.css'
import Movies from "./Movies"



function Main(props) {

  
  



  return (
    <> 
 

 

     {props.listOfMovies.map((movie, index) => {
      return (
          <Movies 
                key={index} 
                title={movie.title} 
                year={movie.year} 
                imgURL={movie.imgURL} 
                alt={movie.title} 
                rating={movie.rating}
                movies={props.listOfMovies}
                setMovies={props.setMovies}
                id={movie.id}
      />
      )
      })}
      </>
  )
}
 
export default Main;
