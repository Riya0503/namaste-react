import React from 'react'

const MainMovieVideoTitle = ({original_title, overview}) => {
  return (
    <div className='p-14 px-4 md:p-16 md:pt-36 absolute text-white bg-gradient-to-r from-black/70 w-full aspect-video'>
        <h1 className='text-2xl md:text-6xl font-bold'>{original_title}</h1>
        <p className='hidden md:inline-block p-2 mb-4 text-lg w-1/2 h-[120px] overflow-hidden line-clamp-4	 '>{overview}</p>
        <div>
            <button className='py-1 px-2 md:py-2 m-2 md:w-[100px] text-center bg-white text-black cursor-pointer rounded-md hover:bg-opacity-80'>▶  Play</button>
            <button className='hidden md:inline-block py-2 m-2 w-[150px] text-center bg-gray-600/70 cursor-pointer text-white rounded-md hover:bg-opacity-50' > ⓘ  More Info</button>
        </div>
    </div>
  )
}

export default MainMovieVideoTitle;