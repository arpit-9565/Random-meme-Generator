import React,{useState} from 'react'
import Spinner from './Spinner.js'
import useGif from '../hooks/useGif.js'

const Tag = () => {
    const{loading,gif,fetchData}=useGif('car');
    const[tag,setTag]=useState('car');

    return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">

      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">Random {tag} Gif</h1>

      {loading?<Spinner/>:<img src={gif} alt="desired gif" style={{ height: '300px', width: '450px' }}/>}
      
      <input className="w-10/12 text-lg py-2 rounded-lg text-center"
      onChange={event =>setTag(event.target.value)} value={tag}
      />
      <button onClick={()=>fetchData(tag)} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"> 
       Generate 
      </button>  
    </div>
  )
}

export default Tag
