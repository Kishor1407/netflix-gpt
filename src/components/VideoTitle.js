import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[16%] px-16 absolute bg-gradient-to-r from-black
    '>
      <h1 className='text-3xl text-white font-semibold'>{title}</h1>
      <p className='py-6 text-white text-lg w-1/4'>{overview}</p>
      <div  className=''>
        <button className='bg-white m-2 rounded-lg text-black w-32 p-2  text-md hover:bg-opacity-50'>
        
      ▶
     
      Play Now</button>
        <button className='bg-gray-500 m-2 rounded-lg text-black w-32 p-2  text-md'>ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
