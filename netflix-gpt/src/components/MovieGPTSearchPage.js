import React from 'react'
import { lang } from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const MovieGPTSuggestion = () => {
    const language = useSelector((store) => store.config.language);
  
  return (
    <div>
      
      <div className='text-white absolute top-[40%] left-[50%]  -translate-x-1/2 -translate-y-1/2 flex w-full justify-center text-center'>
          <form className='w-[60%]'>
              <h1 className='w-full mb-4 text-3xl'>{lang[language].title}</h1>
              <div className='flex h-10' >
                <input className='grow-[2] h-12 rounded-md mr-1 p-2' placeholder={lang[language].gptPlaceHolder} type="text"/>
                <button className='grow bg-red-600 h-12 rounded-md '>{lang[language].search}</button>
              </div>
          </form>
      </div>
    </div>
  )
}

export default MovieGPTSuggestion