import './Main.css'
import Movies from "./Movies"


function Main(props) {

  



  return (
    <> 
 

 

     {props.listOfMovies.map((movie) => {
      return (
          <Movies 
                key={movie.id} 
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
