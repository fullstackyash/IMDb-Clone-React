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
               return <MovieItem/>
            })}
        </div>
    </div>
  )
}

export default MovieList