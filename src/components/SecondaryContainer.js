import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      {/*
      MovieList- Popular
        MovieCard* n
      MovieList- Now Playing
      MovieList- Trending
      MovieList- Horror 

      */}</div>
  )
}

export default SecondaryContainer