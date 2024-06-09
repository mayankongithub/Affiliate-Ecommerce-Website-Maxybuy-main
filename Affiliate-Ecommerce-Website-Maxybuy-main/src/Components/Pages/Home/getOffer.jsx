import React from 'react'
 
import exImg from '../../../assets/exclusive_image.png'
import arrow from '../../../assets/arrow.png'

const GetOffer = () => {
  return (

    <section className=" full-page-section">
      <div className="centre-page-section">
        <div className="  h-[300px] flex gap-9 items-center flex-col justify-center w-6/12 ">
          <h1 className='text-3xl text-white'>Get <br />Exclusive <br /> Offers</h1>
          <button className='text-3xl rounded-md p-[8px] font-bold flex items-center gap-3 border-none text-white bg-[#07071c]  cursor-pointer ' >Check Now  <img src={arrow} alt="" /></button>
         
        </div>
        <div className="ex-img flex items-center justify-center h-full w-1/2">
          <img className='h-full' src={exImg} alt="exclusive offer img" />
        </div>
        
      </div>
    </section>
  )
}

export default GetOffer