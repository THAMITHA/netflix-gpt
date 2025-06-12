import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/moviesSlice"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"

const usePopularMovies = () => {
  const dispatch = useDispatch()  
  const popularMovies = (store) => store.movies.nowPlayingMovies
  //Fetch Data from TMDB API and update store 
    const getPopularMovies = async () => { 
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addPopularMovies(json.results))
  }
  useEffect(()=>{
    !popularMovies && getPopularMovies();
  },[])
}

export default usePopularMovies;