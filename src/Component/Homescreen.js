import React from 'react'
import Chapterscreen from './Chapterscreen';
import Playerscreen from './Playerscreen';
import Recitersscreen from './Recitersscreen';

const Homescreen = () => {
  return (
    <div className='row  py-5 home-body text-light'>
      <div className='col-lg-6 col-md-4 col-sm-12 col-12 scroll '>
        <Recitersscreen/>

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


