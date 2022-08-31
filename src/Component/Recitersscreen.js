import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const Recitersscreen = ({reciters}) => {
  return (
<div className='min vh-100 shadow-lg  p-3 bg-red mx-0 '>
<h1 className='text-center fs-5 fw-bold'>Reciters </h1><hr/>

<div className='d-flex align-items-center p-0'>
  <FaUserCircle className='fs-3 mt-0'/> <br/>
    <span className='fs-6 mx-1 active'>Sheikh Shuraymi mohamud</span>
 
</div>
<hr className='my-1'/>
</div>



  )
}

export default Recitersscreen