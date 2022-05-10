function Movies(props) {
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
        </section>
        </div>
      </section>
        )
}

export default Movies