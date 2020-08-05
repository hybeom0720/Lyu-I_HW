import React from 'react';
import axios from 'axios';
import Movie from "../components/Movie";
import "./Home.css";


class Home extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async()=>{
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json"); 
    // console.log(movies.data.data.movies);
    const {data:{data :{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); 
    //If without {data:{datA:{movies}}} -> movies.data.data.movies
    this.setState({movies, isLoading: false}) 
  }
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false});
    //   //this.setState({isLaoding: false, book: true}) => ok, it is working, not error
    // }, 6000);
    //Fetching the data which we want in componentDidMount part;
    this.getMovies();
  }

  
  render() {
  const {isLoading, movies} = this.state;
  //return <div> {this.state.isLaoding ? "Loading" : "We are ready"} </div> => without const {isLoading} = this.state;
  return (
    <section className = "container">
    {isLoading ? (
    <div className = "loader">
      <span className = "loader__text">Loading...</span>
      </div>
  ) :  (
    <div className = "movies">
      {movies.map(movie => (
        <Movie
        key = {movie.id}
        id = {movie.id}
        year = {movie.year}
        title = {movie.title}
        summary = {movie.summary}
        poster = {movie.medium_cover_image}
        genres = {movie.genres}
        />
        // parsing part
      ))}

    </div>
  )}
  </section>
  );
}
}
export default Home;

  // render() {
  // const {isLoading, movies} = this.state;
  // //return <div> {this.state.isLaoding ? "Loading" : "We are ready"} </div> => without const {isLoading} = this.state;
  // return <div>{isLoading ? "Loading" : movies.map(movie =>{
  //   return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
  // })}</div>