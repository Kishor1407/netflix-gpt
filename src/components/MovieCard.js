import React from 'react'
import { img_cdn_url } from '../utils/constant'
const MovieCard = ({posterPath}) => {
    console.log(img_cdn_url+posterPath);

  return (
    <div className='w-36  pr-4'>
      <img src={img_cdn_url+posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard
