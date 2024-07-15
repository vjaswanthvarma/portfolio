import React from "react";
import { Link } from "react-router-dom";
export default function Contact(){
    var[data,setdata]=React.useState({name:'',email:'',message:''});
    return(<>
    <div id="other">
        <h1 className="flex flex-wrap justify-center my-36 text-pink-500 text-4xl">Contact</h1>
        <div className="flex flex-row justify-between">
        <div className="flex flex-col ml-[150px] h-[500px] shadow-xl border border-white-1000"> 
            <form className="bg-black-100 border border-black rounded-xl">
            <h1 className="font-bold text-2xl mt-1 mb-2 mx-2 text-blue-500">Name</h1>
            <input className="border border-pink-300 rounded-md w-[560px] h-10 pr-1 hover:border-black mx-2 cursor-auto pl-2" type="text" onChange={(e)=>setdata({name:e.target.value,email:data.email,message:data.message})} />
            <h1 className="font-bold text-2xl text-blue-500 mt-5 mb-2 mx-2">Gmail</h1>
            <input className="border border-pink-300 rounded-md w-[560px] h-10  hover:border-black mx-2 pl-2" type="email" onChange={(e)=>setdata({name:data.name,email:e.target.value,message:data.message})} />
            <h1 className="font-bold text-2xl mt-5 mb-2 mx-2 text-blue-500">Message</h1>
            <textarea className="border border-pink-300 rounded-md w-[560px] h-[200px]  hover:border-black mx-2 pl-2 pt-2" type="text" onChange={(e)=>setdata({name:data.name,email:data.email,message:e.target.value})} />
            <Link to="mailto:jaswanrh378@gmail.com" className="ml-0 p-1 flex  bg-green-500  text-white rounded-md text-xl  pl-[250px] ml-2 mr-1 my-2 hover:bg-white hover:text-black hover:border-black hover:border hover:font-bold">Submit</Link>
            </form>
            </div>
        <div className="flex flex-col gap-10 mt-10 mr-16">
            <div className="flex flex-col gap-10">
                <h1 className="font-bold text-5xl mt-10 text-blue-500">Gmail</h1>
                <h2 className="text-pink-500 text-2xl mr-16">21pa1a05j1@vishnu.edu.in</h2> 
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-5xl mt-10 text-blue-500" >Social</h1>
                <div className="flex  justify-between mr-[100px] mt-10">
                    <Link to="https://www.linkedin.com/in/vemulamanda-jaswanth-varma-259017248/"><img src="link.png" className="w-12 hover:h-16 hover:w-12" /></Link>
                    <Link to="https://github.com/vjaswanthvarma"><img src="git.png" className="w-12 hover:h-16 hover:w-12" /></Link>
                    <Link to="https://www.youtube.com/@jaswanthvarmavemulamanda"> <img src="you.png" className="w-12 hover:h-16 hover:w-12"/></Link>
                   
                </div>
            </div>
        </div>
        </div>
        </div>
    </>)
}