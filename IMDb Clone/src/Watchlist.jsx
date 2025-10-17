import React from 'react'

function Watchlist() {
  return (
    <>
      <div className='flex flex-wrap justify-center m-4 gap-4'>
        <div className='bg-blue-400 w-[9rem] h-[3rem] rounded-xl text-white font-bold flex justify-center items-center'>Action</div>
        <div className='bg-gray-300 w-[9rem] h-[3rem] rounded-xl font-bold flex justify-center items-center'>Suspense</div>
        <div className='bg-gray-300 w-[9rem] h-[3rem] rounded-xl font-bold flex justify-center items-center'>Thriller</div>
      </div>

      <div className='flex justify-center my-10'>
        <input type="text" placeholder='Search Movies' className='w-[18rem] h-[3rem] bg-gray-200 outline-none p-4' />
      </div>

      <div className='rounded-lg overflow-hidden border border-gray-200 m-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Movie</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
            
          </thead>
          <tbody>
            <tr className='border-b-2'>
              <td className='flex items-center px-6 py-4'><img className='h-[25vh] w-[90px] mr-10' src={`https://www.tallengestore.com/cdn/shop/products/Joker_-_Joaquin_Phoenix_-_Hollywood_Action_Movie_Poster_4d1b0644-dd78-42f8-996a-5d0c5bdc21b5.jpg?v=1573629455`} /> Joker</td>
              <td>6.5</td>
              <td>7.0</td>
              <td>Action</td>
              <td className='text-red-800'>Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Watchlist