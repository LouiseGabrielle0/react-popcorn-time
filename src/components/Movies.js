function Movies(props) {


  
  const deleteMovie =(id) => {
    let allMovies = JSON.parse(JSON.stringify(props.movies))
    console.log(id)
    console.log(allMovies)
    props.setMovies(allMovies.filter((movie) => movie.id !== id))
    console.log(allMovies)
  }
          return (
        <section className="movie">
              <div key={props.id}>
                <section className="movie-container">
                <h3 className="Main">
                  {props.title} - {props.year}
                </h3>
                <img src={props.imgURL} alt={props.title}></img>
                <h5> 
                Rating: {props.rating} {" "}
                {props.rating >= 7 && <span>RECOMMENDED</span>}
                </h5>  
                <button onClick={() => deleteMovie(props.id)}>Delete</button>
        </section>
        </div>
      </section>
        )
}

export default Movies