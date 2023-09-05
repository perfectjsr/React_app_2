import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomeCarousel from './components/HomeCarousel';
import ImageCard from './components/ImageCard';
import data from './data';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

function App() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products")
        
        const Data = await response.json()
        setData(Data.products)

        

      }
      catch (error) {
        console.error("Error occured ", error);
      }
    };
    fetchdata();
  },[])
  return (
    <div>
      <NavBar />
      <HomeCarousel />
      <h1 className='myheading'>TOP TRENDING MOVIES ON IMDB</h1>
      <div className='imgs'>
        {
          data.map((obj) => {
            return (
              <div key={obj.id} className='Imgbox '>
                <ImageCard title={obj.title} image={API_IMG + obj.poster_path} />
              </div>
            ) 
          })
        }
      </div>
    </div>
  );
}

export default App;
