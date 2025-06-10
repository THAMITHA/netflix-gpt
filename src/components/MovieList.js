import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  console.log(movies)
  return (
    <div>
      <div className='flex overflow-x-scroll'>
        <h1>{title}</h1>
        <div className='flex'>{movies.map((movie)=>(
          <MovieCard key={movie.id} posterPath={movie.poster_path}/>
        ))}
          <div/></div>
      </div>
    </div>
  )
}

export default MovieList