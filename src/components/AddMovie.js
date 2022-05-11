import {useState} from "react";

function AddMovie(props) {
  
  // const [inputs, setInputs] = useState({title:"", year:"", rating:""})
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(2000);
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setMovies((prevMovies) => {
      const newMovieToAdd = {title:title, year:year, rating:rating}
      console.log(newMovieToAdd)
      return [newMovieToAdd, ...prevMovies]
        })
      setTitle("")
      setYear(2000)
      setRating(5)
    }
  

    return (

        <div id="add-new-form">
        <form onSubmit={handleSubmit}>
              <input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}} />
              <input type="number" name="year" value={year} onChange={(e) => {setYear(e.target.value)}} />
              <input type="number" name="rating" value={rating} onChange={(e) => {setRating(e.target.value)}} />
              <button type="submit">Create</button>
          </form>
        </div>
  
        
        
        )
}

export default AddMovie