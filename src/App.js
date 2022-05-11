import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {useState} from "react";
import moviesArr from "./data/movies.json";
import Controls from "./components/Controls"
import { editableInputTypes } from '@testing-library/user-event/dist/utils';


function App() {

  const [movies, setMovies] = useState(moviesArr);
  // const [inputs, setInputs] = useState({title:"", year:"", rating:""})
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(2000);
  const [rating, setRating] = useState(5);



  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => {
      const newMovieToAdd = {title:title, year:year, rating:rating}
      console.log(newMovieToAdd)
      return [newMovieToAdd, ...prevMovies]
        })
      setTitle("")
      setYear(2000)
      setRating(5)
    }
  

  return (
    <div className="App">
 
      <Header listOfMovies={movies}/>
      <Controls listOfMovies={moviesArr} setMovies={setMovies}/>

      <div id="add-new-form">
      <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}} />
            <input type="number" name="year" value={year} onChange={(e) => {setYear(e.target.value)}} />
            <input type="number" name="rating" value={rating} onChange={(e) => {setRating(e.target.value)}} />
            <button type="submit">Create</button>
        </form>
      </div>

      <Main listOfMovies={movies} setMovies={setMovies} />
      <Footer />
      
    </div>
  );
}

export default App;
