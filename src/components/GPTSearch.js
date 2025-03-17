import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { bg_url } from '../utils/constant'
const GPTSearch = () => {
  return (
    <div>
              <div className="absolute -z-10">
        <img
          src={bg_url}
          alt=""
        />
      </div>
      <GPTSearchBar/>
      <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearch
