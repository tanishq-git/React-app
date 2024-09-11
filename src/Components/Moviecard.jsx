import React from 'react'

const Moviecard = ({allmoviedata,loading}) => {
  return (
    <>{
        loading ?
        <div className='flex justify-center '>
          <img className=' w-16 py-20' src="https://i.gifer.com/ZZ5H.gif" alt="" />
        </div>
        :
    
     <div className='main mt-8 flex flex-wrap px-4 lg:px-10'>
      
       { allmoviedata.map((movie) => (
            <div key={movie.id} className='child p-3 lg:w-1/4 sm:w-full'>
            <div className=' subchild bg-[#002e4b] p-3 rounded-2xl '>
               <img className='w-full rounded-lg mb-2' src={movie.Poster} alt="" />
               <h2 className='text-white font-bold text-xl'>{movie.Title}</h2>
               <h2 className='text-white text-lg mb-2'>{movie.Year}</h2>
            </div> 
            </div>
        ))
    }
        </div>
      }
     
    </>
  )
}

export default Moviecard
