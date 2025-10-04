import React from 'react'
import MovieItem from './MovieItem'

function MovieList() {
  return (
    <div className='p-5'>
        <h1 className='text-center font-bold'>Movies</h1>
        <div className='flex flex-row flex-wrap justify-around mt-5'>
            <MovieItem/>
            <MovieItem/>
            <MovieItem/>
            <MovieItem/>
            <MovieItem/>
            <MovieItem/>
            <MovieItem/>
        </div>
    </div>
  )
}

export default MovieList