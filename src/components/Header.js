import "./Header.css";

function Header(props) {
  return (


    

    <header className="Header">
      <h1> Its Popcorn Time</h1>
      <h3> There is curently {props.listOfMovies.length} movies that meet your search criteria </h3> 
    </header>
  );
}

export default Header;
