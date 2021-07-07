import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import  UpdateMovie from './Movies/UpdateMovie'; 
const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [rerender, setRerender] = useState(false)
  const [movies, setMovies] = useState([]);
  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} setMovies={setMovies} addToSavedList={addToSavedList} />;
        }}
      />
      <Route
        path="/update-movie/:id"
        render={props => {
          return <UpdateMovie {...props} movies={movies}/>;
        }}
      />
      {/* <Route
        path="/update-movie/:id"
        render={props => {
          return <UpdateMovie setRerender={setRerender}{...props} />;
        }}
      /> */}
    </>
  );
};

export default App;
