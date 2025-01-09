import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModel, setShowModel] = useState(false)

  function toggleModel(){
    setShowModel(!showModel);
  }

  // react hook to call API 
  // takes a arrow function as first parma and depenency array
  // arrow function is executed when dependency is met or statisfied
  // useeffect listed to events in the application
  useEffect(()=> {
    async function fetchAPIDate(){
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url ='https://api.nasa.gov/planetary/apod'+ 
      `?api_key=${NASA_KEY}`


      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;

      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        return;
      }
      localStorage.clear();
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log('DATA\n', apiData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAPIDate();
  }, [] )

  return (
    <>
      {data ? (<Main data={data}/>) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}

      {showModel && (
        <Sidebar data ={data}toggleModel={toggleModel} />
        )}

      {data && (<Footer data={data}toggleModel={toggleModel}/>)}
    </>
  )
}

export default App
