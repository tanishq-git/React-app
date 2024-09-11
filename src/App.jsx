import Moviecard from "./Components/Moviecard"
import Navbar from "./Components/Navbar"
import Searchbar from "./Components/Searchbar"
import { useState } from "react"
function App() {
const [allmoviedata,setAllmoviedata] = useState([])
const [searchmovie,setSearchmovie] = useState('')
const [loading,setLoading] = useState(false)

const fetchmoviedata = async () => {
  try {
    setLoading(true)
    const res = await fetch(`https://omdbapi.com/?s=${searchmovie}&apikey=a1de9591`)
    const data = await res.json()
    setAllmoviedata(data.Search)
    console.log(data.Search[0])
    setLoading(false)
  } catch (error) {
    console.log(error)
    setLoading(false)
  }
}
  return (
    <>
    <div className="bg">
   <Navbar/>
   <Searchbar searchmovie={searchmovie} setSearchmovie={setSearchmovie} fetchmoviedata={fetchmoviedata}/>
   <Moviecard allmoviedata={allmoviedata} loading={loading}/>
   </div>
    </>
  )
}

export default App
