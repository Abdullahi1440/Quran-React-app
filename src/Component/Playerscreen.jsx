import React from 'react'
import ReactPlayer from 'react-player';
 const Playerscreen = () => {
  return (
    <div className="min vh-100 text-center bg-red p-3 ">
    <h1 className="fs-4 fw-bold text-center  "> القاري</h1>
    <hr/>
   <div>
    <ul className="list-group text-end ">
        <li className="list-group-item  fs-5 bg-transparent text-light border-0  py-0 ps-0 d-flex justify-content-between  cursor">
        <span className="fs-6">Reciter:</span>
        <span className="fs-6">SH Sudaysi mohamed </span>
        </li>
        <hr/>
        <li className="list-group-item  fs-5 bg-transparent text-light border-0  py-0 ps-0 d-flex justify-content-between  cursor">
        <span className="fs-6">CHapter in Arabic :</span>
        <span className="fs-6">الماءة</span>
        </li>
       
        <hr/>
        <li className="list-group-item  fs-5 bg-transparent text-light border-0  py-0 ps-0 d-flex justify-content-between  cursor">
        <span className="fs-6">Chapters in english:</span>
        <span className="fs-6">Alma'idah  </span>
        </li>
        <hr/>
        <li className="list-group-item  fs-5 bg-transparent text-light border-0  py-0 ps-0 d-flex justify-content-between  cursor">
        <span className="fs-6">Revelation place :</span>
        <span className="fs-6">Almakkah </span>
        </li>
        <hr/>
        <li className="list-group-item  fs-5 bg-transparent text-light border-0  py-0 ps-0 d-flex justify-content-between  cursor">
        <span className="fs-6">Translated  :</span>
        <span className="fs-6">The table spread </span>
        </li>
        <hr/>
        <div>
   <ReactPlayer url={'https://www.youtube.com/watch?v=EFcNwHbnccg'} 
   controls={true}
    playing={true}
   width='100%' height='100%'/>
   </div>
    </ul>
  
  
   </div>
 


</div> 


)
}
export default Playerscreen;