import React from "react"
import context, { Consumer } from "./context"
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
export default function Education(){
    var[data,setdata]=React.useState();
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: false });
    return(<>
    <Consumer>
        {(value)=>{
            setdata(!value);
        }}
    </Consumer>
        <div  id="Education">
        <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 250 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 250 }}
        transition={{ duration: 0.8 ,delay:0.2}}>
        <h1 className="flex text-4xl justify-center my-10 text-pink-500">Education</h1>
        <div className="flex flex-wrap gap-10 justify-center h-[200px]" >
                    <div className="h-100 flex border border-white-1000 rounded-lg border-spacing-7 gap-5 py-12 shadow-2xl hover:scale-110 hover:border-green-400 px-10" >
                        <div className="flex flex-col px-10 gap-3">
                        <h1 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">College:<h1 className="text-pink-500 text-bold font-medium text-xl">Vishnu Institute Of Technology</h1></h1>
                        <h2 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">Branch:<h2  className="font-bold text-blue-500">Computer Science and Engineering</h2></h2>
                        <h3 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">CGPA:<h2  className=" text-green-500 font-bold">9.06</h2></h3>
                        <h4 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">Location:<h3  className="font-semibold">Bhimavaram,A.P</h3></h4>
                          </div>
                    </div>
                    <div className="max-w-xl flex border border-white-1000 rounded-lg gap-5 shadow-2xl hover:scale-110 hover:border-green-400 py-12 px-20" >
                        <div className="flex flex-col justify-between px-10">
                        <h1 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">College:<h1 className="text-pink-500 text-bold font-medium text-xl">Aditya Junior College</h1></h1>
                        <h2 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">Branch:<h2 className="font-bold text-blue-500">Intermediate(MPC)</h2></h2>
                        <h3 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">Percentage:<h2 className=" text-green-500 font-bold">94.6%</h2></h3>
                        <h4 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">Location:<h3 className="font-semibold">Tadepalligudem,A.P</h3></h4>
                          </div>
                    </div>
                    <div className="flex border border-white-1000 rounded-lg gap-1 py-12 shadow-2xl hover:scale-110 hover:border-green-400 px-10" >
                        <div className="flex flex-col justify-between px-20">
                        <h1 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">College:<h1 className="text-pink-500 text-bold font-medium text-xl">Pippara Techno School</h1></h1>
                        <h2 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">Branch:<h2 className="font-bold text-blue-500">SSC</h2></h2>
                        <h3 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">CGPA:<h2 className="text-green-500 font-bold">9.8</h2></h3>
                        <h4 style={{color:data?"white":""}} className="flex gap-2 text-lg font-bold">Location:<h3 className="font-semibold">Pippara,A.P</h3></h4>
                          </div>
                    </div>
        </div>
        </motion.div>
        </div>
    </>)
}