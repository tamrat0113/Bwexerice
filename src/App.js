
import { useState, useEffect } from "react";

import "./App.css";

import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";

import { getMoviesBySearchTerm, getMovieDetailsById } from "./utils";

function App() {
  console.log("<App /> component rendering...");

  // const [name, setName] = useState("Erik"); // = A[0]
  // const [isHappy, setIsHappy] = useState(true); // = A[1]
  // const [counter, setCounter] = useState(0); // = A[1]
  const [movie, setMovie] = useState(null);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMoviesBySearchTerm("superman").then((movies) => {
      console.log("getMoviesBySearchTerm Done!", movies);

      setMovieList(movies);
    });
  }, []);

  useEffect(() => {
    // use setTimeOut to simulate internet lag
    // setTimeout(() => {
    getMovieDetailsById("tt3896198").then((movie) => {
      console.log("getMovieDetailsById Done!", movie);
      setMovie(movie);
    });
    // }, 4000);
  }, []);

  // const handleClickIncrement = () => {
  //   setCounter(counter + 1); // Update counter during next render
  // };

  // const handleClickDecrement = () => {
  //   setCounter(counter - 1); // Update counter during next render
  // };

  return (
    <div className="App">
      <h1>Movie App</h1>

      {/* <h1>Counter state value: {counter}</h1>

      <button onClick={handleClickIncrement}>Increment</button>
      <button onClick={handleClickDecrement}>Decrement</button> */}

      <hr />

      {/* <pre>
        <code>{JSON.stringify(movie)}</code>
      </pre> */}

      <hr />



     {/* {movie ?( <MovieDetails
        posterUrl={movie.Poster}
        title={movie.Title}
        rated={movie.rated}
        runtime={movie.runtime}
        genre={movie.genre}
        actors={movie.actors}
        rating={movie.rating}
     />)} */}

      <hr />

      {movie ? (
        <MovieCard
          title={movie.Title}
          type={movie.Type}
          posterUrl={movie.Poster}
          Actors={movie.Actors}
        />
      ) : (
        <div>Loading..</div>
      )}

      <hr />

      <h4>Movie List</h4>

      <div className="movielist">
        {movieList.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            type={movie.Type}
            posterUrl={movie.Poster}
          />
        ))}
      </div>
    </div>
  );
}

export default App;






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

