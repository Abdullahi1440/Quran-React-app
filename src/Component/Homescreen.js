import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Chapterscreen from './Chapterscreen';
import Playerscreen from './Playerscreen';
import Recitersscreen from './Recitersscreen';

const Homescreen = () => {
  const [reciters , setReciters]=useState([]);
  //get all reciters with audio
useEffect(() =>{
  async function fetchData(){
    const {
      data:{reciters },
    } = await axios.get('https://mp3quran.net/api/_english.php')
    setReciters(reciters)
  }
  fetchData()

}

) 


  return (
    <div className='row  py-5 home-body text-light'>
      <div className='col-lg-6 col-md-4 col-sm-12 col-12 scroll '>
        <Recitersscreen reciters={reciters}/>

      </div>
      <div className='col-lg-6 col-md-4 col-sm-12 col-12 scroll   '>
      <Chapterscreen/>

      </div>
      <div className='col-lg-6 col-md-4 col-sm-12 col-12 scroll '>
       <Playerscreen/>

      </div>
    
    
     </div>
  )
}

export default Homescreen


