import React from 'react'

const MainMovieVideoTitle = ({original_title, overview}) => {
  return (
    <div className='p-16 pt-36 absolute text-white bg-gradient-to-r from-black/70 w-full aspect-video'>
        <h1 className='text-6xl font-bold'>{original_title}</h1>
        <p className='p-2 mb-4 text-lg w-1/2 h-[120px] overflow-hidden line-clamp-4	 '>{overview}</p>
        <div>
            <button className='py-2 m-2 w-[100px] text-center bg-white text-black cursor-pointer rounded-md hover:bg-opacity-80'>▶  Play</button>
            <button className='py-2 m-2 w-[150px] text-center bg-gray-600/70 cursor-pointer text-white rounded-md hover:bg-opacity-50' > ⓘ  More Info</button>
        </div>
    </div>
  )
}

export default MainMovieVideoTitle;