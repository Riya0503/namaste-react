import React, { useRef } from 'react'
import { lang } from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
// import client from '../utils/openAI'
import { API_OPTIONS } from '../utils/constants';
import {addGPTMovieResult} from '../utils/gptSearchSlice'

const MovieGPTSearchBar = () => {
    const language = useSelector((store) => store.config.language);
    const dispatch = useDispatch();
    const searchText = useRef(null);

    const searchMovieInTMDB = async(movie) => {
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      return json.results;
    }
    const handleGPTSearch = async() => {
      console.log(searchText.current.value)

      //for getting output you'll have buy open ai 
      // const gptQuery = `Act as an movie recommendation system and suggest some movies for the query : ${searchText.current.value} only give me movies of 10 movies, comma separted like the  example result ['don', 'sholay','gadar', 'golmal','koi mil gaya']`;
      // const completion = await client.chat.completions.create({
      //   model: 'gpt-3.5-turbo',
      //   messages: [{ role: 'user', content: gptQuery }]
      // });
      

      // console.log(completion.choices);



      {/* since I have not bought the gpt api I am mocking it data and showing accordingly */}
      const result = [{
        message: {
          content: "Andaz Apna Apna, Hera Pheri , Chupke Chupke, Jaane Bhi DO Yaaro, Padosan",
          role: 'Assiantant'
        }
      }]

      const gptMovies = result[0]?.message?.content.split(",")

      const promiseArray = gptMovies.map(item => searchMovieInTMDB(item))  // [promise,promise,promise,promise,promise ]

      //since we are making api calls for each item these all will return promises so we can access it directly so we
      //do Promise.all on the array and then use the data.
      const tmdbRes = await Promise.all(promiseArray);
      dispatch(addGPTMovieResult({moviesName : gptMovies, moviesRes : tmdbRes}));
    }
  return (
    <div>
      
      <div className='text-white  flex w-full justify-center text-center'>
          <form className='px-4 w-full md:w-[60%] ' onSubmit={(e) => e.preventDefault()}>
              <h1 className='w-full mb-4 text-3xl'>{lang[language].title}</h1>
              <div className='flex flex-col md:flex-row md:h-10' >
                <input ref={searchText} className='grow-[2] h-12 rounded-md p-2 mb-2 text-black md:mr-1' placeholder={lang[language].gptPlaceHolder} type="text"/>
                <button className='grow bg-red-600 h-12 rounded-md ' onClick={handleGPTSearch}>{lang[language].search}</button>
              </div>
          </form>
      </div>
    </div>
  )
}

export default MovieGPTSearchBar