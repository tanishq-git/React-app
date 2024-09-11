import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="main px-10 py-5 lg:flex md:flex flex-wrap justify-between items-center bg-[#40407a] w-full text-white shadow-md sticky top-0">
        <div className="left flex items-center gap-3 justify-center">
            <img className='w-10 h-10 cursor-pointer' src="https://movie-app-88kamal.vercel.app/clipart3105859.png" alt="" />
            <h2 className='text-2xl font-semibold cursor-pointer '>MovieMasala</h2>
        </div>
        <div className="right">
            <ul className='flex gap-5 justify-center md:mt-0 lg:mt-0 mt-5 cursor-pointer'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Service</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar
