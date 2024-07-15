import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import Contact from './Contact';
import context, { Consumer } from "./context";
export default function Main(){
    var[data,setdata]=React.useState();
    return(<>
    <Consumer>
        {(value)=>{
            setdata(!value);
        }}
    </Consumer>
        <div className='flex justify-between'>
            <div className="mx-auto content-center mt-20">
            <h1 style={{color:data?"white":""}} className='text-5xl font-bold ml-4'>Hi,I am Jaswanth Varma</h1>
            <h1 className='text-5xl font-bold text-pink-400 my-5 ml-4 mb-5'><Typewriter words={['Software Engineer', 'Full Stack Web Developer']} loop={2} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000}/></h1>
            <h3 style={{color:data?"white":""}} className='font-serif text-3xl ml-4' >I am Software Engineer and Full Stack Web Developer  with a knack for crafting seamless digital experience</h3>
            <div className='flex gap-10 ml-5 mt-10'>
                <Link to="https://www.linkedin.com/in/vemulamanda-jaswanth-varma-259017248/"><img src="link.png" className='w-12 border rounded-md hover:h-[55px]' /></Link>
                <Link to="https://github.com/vjaswanthvarma"><img src="git.png" className='w-12 border rounded-md hover:h-[55px]' /></Link>
                <Link to="https://www.youtube.com/channel/UCUADaZHy-PTaBpLvRJpUppA"><img src="you.png" className='w-12 border rounded-md hover:h-[55px]' /></Link>
                <Link to="https://www.youtube.com/channel/UCUADaZHy-PTaBpLvRJpUppA"><img src="leet.png" className='w-12 h-[48px] border rounded-md hover:h-[55px]' /></Link>
            </div>
            <div className='ml-[120px] text-2xl '>
            <a href='21pa1a05j1.pdf' download><h1 className='mt-12'><b className='text-pink-500 border border-white-1000 p-5  rounded-xl hover:bg-green-100 hover:text-black shadow-xl'>Resume</b></h1></a>
            </div>
            </div>
            {data? <img src='side.jpg'  className='mx-auto mt-10 w-[30%] h-[400px] border border-none rounded-md mr-5'/>: <img src='image.jpg'  className='mx-auto mt-36'/>}
            </div>
            
    </>)
}