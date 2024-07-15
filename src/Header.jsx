import React from "react";
import { WiMoonAltWaningCrescent2 } from "react-icons/wi"
import context, { Consumer } from "./context";
export default function Header(props){
    var[data,setdata]=React.useState();
    return(<>
    <Consumer>
        {(value)=>{
            setdata(!value);
        }}
    </Consumer>
        <div style={{backgroundColor:data?"black":""}} className="text-fuchsia-500  flex flex-row justify-between  bg-white border border-white-1100  rounded-s-lg shadow-md h-[85px]  w-[100%] sticky top-1">
            <h1 className="mr-10 font-mono text-3xl font-medium subpixel-antialiased italic  ml-5 mt-[20px] ">Jaswanth Varma</h1>
            <nav   className="flex  flex-row mt-[20px]">
            <button style={{backgroundColor:data?"white":"",border:data?"1px solid white":"",borderRadius:data?"10px":"",paddingBottom:data?"48px":""}} onClick={()=>{return props.method()}} className="text-5xl mr-5 mb-5 text-green-400 hover:text-black transition ease-in-out delay-15  hover:-translate-y-2 hover:-translate-x-1 hover:bg-black-500 duration-300"><WiMoonAltWaningCrescent2 /></button>
                <a className="mr-10 pt-[3px] mb-4 font-bold text-2xl font-medium  hover:bg-blue-500  hover:text-white hover:border rounded-md transition ease-in-out delay-15  hover:-translate-y-2 hover:-translate-x-1 hover:bg-black-500 duration-300" href="/">Home</a>
                <a className="mr-10 pt-[3px] mb-4 font-bold text-2xl font-medium  hover:bg-blue-500  hover:text-white hover:border rounded-md transition ease-in-out delay-15  hover:-translate-y-2 hover:-translate-x-1 hover:bg-black-500 duration-300" href="#Education">Education</a>
                <a className="mr-10 pt-[3px] mb-4 font-bold text-2xl font-medium  hover:bg-blue-500  hover:text-white hover:border rounded-md transition ease-in-out delay-15  hover:-translate-y-2 hover:-translate-x-1 hover:bg-black-500 duration-300" href="#projects">Projects</a>
                <a className="mr-10 pt-[3px] mb-4 font-bold text-2xl font-medium  hover:bg-blue-500  hover:text-white  hover:border rounded-md transition ease-in-out delay-15  hover:-translate-y-2 hover:-translate-x-1 hover:bg-black-500 duration-300" href="#skills">Skills</a>
                <a className="mr-10 pt-[3px] mb-4 font-bold text-2xl font-medium  hover:bg-blue-500  hover:text-white hover:border rounded-md transition ease-in-out delay-15  hover:-translate-y-2 hover:-translate-x-1 hover:bg-black-500 duration-300" href="#Internships">Internships</a>
                <a className="mr-10 pt-[3px] mb-4 font-bold text-2xl font-medium  hover:bg-blue-500  hover:text-white hover:border rounded-md transition ease-in-out delay-15  hover:-translate-y-2 hover:-translate-x-1 hover:bg-black-500 duration-300" href="#other">Contact</a>
            </nav>
        </div>
    </>)
}