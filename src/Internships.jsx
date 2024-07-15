import React from "react"
import context, { Consumer } from "./context"
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
export default function Internships(){
    var[data,setdata]=React.useState();
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: false });
    return(<>
    <Consumer>
        {(value)=>{
            setdata(!value);
        }}
    </Consumer>
        <div id="Internships" className="flex flex-col flex-wrap">
        <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 250 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 250 }}
        transition={{ duration: 0.8 ,delay:0.2}}>
                <h1 className="flex justify-center my-16 text-pink-500 text-4xl">Internships</h1>
            <div className="flex flex-wrap gap-10 justify-center h-[200px]" >
                    <div className="h-100 flex border border-white-1000 rounded-lg border-spacing-7 gap-5 py-10 shadow-2xl hover:scale-110 hover:border-green-400" >
                        <img src="oasis.jpeg" className="w-16 h-20 flex ml-10 mt-12" />
                        <div className="flex flex-col justify-between px-10">
                        <h1 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">Role:<h1 className="text-pink-500 text-bold font-medium text-xl">Front End Web Developer</h1></h1>
                        <h2 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">Company:<h2  className="font-bold text-blue-500">Oasis-InfoByte</h2></h2>
                        <h3 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">Duration:<h2  className="font-light">1 Month</h2></h3>
                        <h4 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">Remote:<h3  className="font-light">Online</h3></h4>
                          </div>
                    </div>
                    <div className="max-w-xl flex border border-white-1000 rounded-lg gap-5 shadow-2xl hover:scale-110 hover:border-green-400 py-10" >
                        <img src="bharatintern.jpeg" className="w-20 h-32 flex ml-10 mt-8"  />
                        <div className="flex flex-col justify-between px-10">
                        <h1 style={{color:data?"white":""}} className="flex gap-1 text-lg font-bold">Role:<h1 className="text-pink-500 text-bold font-medium text-xl">Front End Web Developer</h1></h1>
                        <h2 style={{color:data?"white":""}} className="flex gap-1 text-lg font-bold">Company:<h2 className="font-bold text-blue-500">Bharat Intern</h2></h2>
                        <h3 style={{color:data?"white":""}} className="flex gap-1 text-lg font-bold">Duration:<h2 className="font-light">1 Month</h2></h3>
                        <h4 style={{color:data?"white":""}} className="flex gap-1 text-lg font-bold">Remote:<h3 className="font-light">Online</h3></h4>
                          </div>
                    </div>
                    <div className="flex border border-white-1000 rounded-lg gap-1 py-10 shadow-2xl hover:scale-110 hover:border-green-400" >
                        <img src="Aicte.jpeg" className="w-[120px] h-20 flex ml-10 mt-12"  />
                        <div className="flex flex-col justify-between px-20">
                        <h1 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">Role:<h1 className="text-pink-500 text-bold font-medium text-xl">ML Developer</h1></h1>
                        <h2 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">Company:<h2 className="font-bold text-blue-500">AICTE</h2></h2>
                        <h3 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">Duration:<h2 className="font-light">3 Month</h2></h3>
                        <h4 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">Remote:<h3 className="font-light">Online</h3></h4>
                          </div>
                    </div>
                       
            </div>
            </motion.div>
        </div>
    </>)
}