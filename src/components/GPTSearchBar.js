import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'


const GPTSearchBar = () => {
const langKey = useSelector((store)=>store.config?.lang)
console.log(langKey)
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 grid grid-cols-12 bg-black' action="">
        <input type="text" className='p-4 m-4 col-span-9'  placeholder={lang[langKey]?.gptPlaceholder}  />
        <button className='py-2 px-4 m-4 col-span-3 bg-red-700 rounded-lg text-white'>{lang[langKey]?.search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar
