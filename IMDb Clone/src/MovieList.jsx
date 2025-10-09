import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem'
import axios from 'axios'

function MovieList() {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=da52087768a7bac890908465701afdaa&language=en-US&page=1`).then(function(res){
            console.log(res.data.results);
            setMovies(res.data.results);
        })
    }, [])
    
  return (
    <div className='p-5'>
        <h1 className='text-center font-bold'>Movies</h1>
        <div className='flex flex-row flex-wrap justify-center mt-5 gap-5'>
            {movies.map((movie)=>{
               return <MovieItem poster_path={movie.poster_path} original_title={movie.original_title}/>
            })}
        </div>
        <div className='pagination flex justify-center mt-5'>
            <button className='prev bg-sky-500 hover:bg-sky-700 p-1 rounded-xl text-xs font-bold'> Prev </button>
            <div className='pagination-count p-2  text-xs font-bold'> 1 </div>
            <button className='next bg-sky-500 hover:bg-sky-700 p-1 rounded-xl text-xs font-bold'> Next </button>
        </div>
    </div>
  )
}

export default MovieList