import React from 'react'
import { img_cdn_url } from '../utils/constant'


const MovieCard = ({posterPath}) => {

  if(!posterPath) return null;
    console.log(img_cdn_url+posterPath);

  return (
    <div className='w-48  pr-4'>
      <img src={img_cdn_url+posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard
