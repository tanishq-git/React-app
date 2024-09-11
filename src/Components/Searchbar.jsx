import React from 'react'

const Searchbar = ({searchmovie,setSearchmovie,fetchmoviedata}) => {
  return (
    <>
     <div className="main flex justify-center mt-5 px-5">
        <input className='px-5 py-2 w-80 text-black outline-none rounded-s-md bg-gray-300' type="text" placeholder='Search here!:)'
        value={searchmovie}
        onChange={(e) => setSearchmovie(e.target.value)}/>
        <button onClick={fetchmoviedata} className='px-10 py-2 bg-[#40407a] text-white rounded-e-md '>Search</button>
     </div>
    </>
  )
}

export default Searchbar
