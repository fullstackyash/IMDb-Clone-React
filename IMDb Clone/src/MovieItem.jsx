import React from 'react'

function MovieItem({poster_path, original_title}) {
  return (
    <div className='h-[34vh] w-[110px] hover:scale-110 duration-300 bg-contain bg-no-repeat' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
        <div className='text-white w-full p-2 text-center bg-gray-900/60 '>
            {original_title}
        </div>

    </div>
  )
}

export default MovieItem