function Controls(props){

    let moviesList = [...props.listOfMovies]
    
    const filterTopRated = () => {
        props.setMovies (moviesList.filter((movies) => movies.rating >= 8))
        // setMovies(movies.filter(movies => movies.rating >= 8))
    }

    const filterOldMovies = () => {
        props.setMovies (moviesList.filter((movies) => movies.year <= 1990))
    }

    const reset = () => {
        props.setMovies(props.listOfMovies)
    }

    const sortByYear = () => {
        let sortedMovies = [...moviesList]
        props.setMovies(sortedMovies.sort((a,b) => a.year < b.year ? 1: b.year < a.year ? -1 : 0))
    }

    const sortByRating = () => {
        let sortedMovies = [...props.listOfMovies]
        props.setMovies(sortedMovies.sort((a,b) => a.rating < b.rating ? 1: b.rating < a.rating ? -1 : 0))
    }


    return (
        <>
        <div className="controls">
        <button onClick={filterTopRated}>Display Top Rated Only</button>
        <button onClick={filterOldMovies}>Display Old Movies Only</button>
        <button onClick={sortByYear}>Sort by Year</button>
        <button onClick={sortByRating}>Sort by Rating</button>
        <button onClick={reset}>Reset Filters</button>
    </div>
        </>
    )
}

export default Controls