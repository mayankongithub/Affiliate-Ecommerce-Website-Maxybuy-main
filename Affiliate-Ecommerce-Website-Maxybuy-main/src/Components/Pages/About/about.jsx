import React, { useEffect } from 'react'
// import styles from './about.module.css'
import aboutimg from  './aboutimg.jpg'
const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [ ]);


    return (
        <div className='flex flex-col w-full items-center'>
            <div className='flex w-full max-w-[1660px] h-[900px] items-center justify-center flex-col   px-5'>
            <div className='w-full'>
                <img className='w-full' src={aboutimg} alt="" />
            </div>
            </div>
        </div>
    )
}



export default About