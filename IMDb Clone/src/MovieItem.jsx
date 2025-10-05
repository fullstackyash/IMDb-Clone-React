import React from 'react'

function MovieItem({poster_path}) {
  return (
    <div className='h-[40vh] w-[200px] bg-contain bg-no-repeat' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>

    </div>
  )
}

export default MovieItem