import React from 'react'

function Watchlist() {
  return (
    <>
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
              <td className='flex items-center px-6 py-4'><img className='h-[6rem] w-[10rem]' src={`https://www.tallengestore.com/cdn/shop/products/Joker_-_Joaquin_Phoenix_-_Hollywood_Action_Movie_Poster_4d1b0644-dd78-42f8-996a-5d0c5bdc21b5.jpg?v=1573629455`} /></td>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  )
}

export default Watchlist