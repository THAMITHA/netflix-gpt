import { useSelector } from "react-redux"
import useNowPlayingMovies from "../hooks/useNowplayingMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import GptSearch from "./GptSearch"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  useNowPlayingMovies() 
  usePopularMovies()
  return (
    <div>
      <Header/>
      {
        showGptSearch? (<GptSearch/>): (
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      )}
      {/*
        MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList * n
            - cards * n  
      */}
    </div>
  )
}

export default Browse