import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {useState} from "react";
import moviesArr from "./data/movies.json";
import Controls from "./components/Controls"


function App() {

  const [movies, setMovies] = useState(moviesArr);

  return (
    <div className="App">
 
      <Header listOfMovies={movies}/>
      <Controls listOfMovies={moviesArr} setMovies={setMovies}/>
      <Main listOfMovies={movies} setMovies={setMovies} />
      <Footer />
      
    </div>
  );
}

export default App;
