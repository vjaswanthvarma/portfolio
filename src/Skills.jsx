import React from "react";
import context, { Consumer } from "./context";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
export default function Skill(){
    const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false });
    var[data,setdata]=React.useState();
   return(<>
     <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 250 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 250 }}
        transition={{ duration: 0.8 ,delay:0.2}}>
   <Consumer>
        {(value)=>{
            setdata(!value);
        }}
    </Consumer>
    <div id="skills">
            <h1 className="flex text-4xl justify-center my-10 text-pink-500">Tools and Technologies</h1>
            <div>

                <div className="flex flex-wrap justify-center">
                <div style={{border:data?"2px solid white":""}} className=" shadow-lg py-2 px-4 bg-white-1000 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 hover:bg-blue-100 cursor-pointer md:w-48 w-40"><img  src="java.png" className="w-12"/><h2 style={{color:data?"green":"",fontSize:data?"20px":" ",fontWeight:data?"bold":" "}} className="text-xl ml-4">JAVA</h2></div>
                <div style={{border:data?"2px solid white":""}} className=" shadow-lg py-2 px-4 bg-white-1000 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 hover:bg-blue-100 cursor-pointer md:w-48 w-40"><img  src="python.png" className="w-12"/><h2 style={{color:data?"green":"",fontSize:data?"20px":" ",fontWeight:data?"bold":" "}} className="text-xl ml-4">Python</h2></div>
                <div style={{border:data?"2px solid white":""}} className=" shadow-lg py-2 px-4 bg-white-1000 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 hover:bg-blue-100 cursor-pointer md:w-48 w-40"><img  src="c.png" className="w-12"/><h2 style={{color:data?"green":"",fontSize:data?"20px":" ",fontWeight:data?"bold":" "}} className="text-xl ml-4">C</h2></div>
                <div style={{border:data?"2px solid white":""}} className=" shadow-lg py-2 px-4 bg-white-1000 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 hover:bg-blue-100 cursor-pointer md:w-48 w-40"><img  src="html.png" className="w-12"/><h2 style={{color:data?"green":"",fontSize:data?"20px":" ",fontWeight:data?"bold":" "}} className="text-xl ml-4">HTML</h2></div>
                <div style={{border:data?"2px solid white":""}} className=" shadow-lg py-2 px-4 bg-white-1000 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 hover:bg-blue-100 cursor-pointer md:w-48 w-40"><img  src="css.png" className="w-12"/><h2 style={{color:data?"green":"",fontSize:data?"20px":" ",fontWeight:data?"bold":" "}} className="text-xl ml-4">CSS</h2></div>
                <div style={{border:data?"2px solid white":""}} className=" shadow-lg py-2 px-4 bg-white-1000 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 hover:bg-blue-100 cursor-pointer md:w-48 w-40"><img  src="js.png" className="w-12"/><h2 style={{color:data?"green":"",fontSize:data?"20px":" ",fontWeight:data?"bold":" "}} className="text-xl ml-4">JavaScript</h2></div>
                <div style={{border:data?"2px solid white":""}} className=" shadow-lg py-2 px-4 bg-white-1000 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 hover:bg-blue-100 cursor-pointer md:w-48 w-40"><img  src="nodejs.png" className="w-12"/><h2 style={{color:data?"green":"",fontSize:data?"20px":" ",fontWeight:data?"bold":" "}} className="text-xl ml-4">Node JS</h2></div>
                <div style={{border:data?"2px solid white":""}} className=" shadow-lg py-2 px-4 bg-white-1000 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 hover:bg-blue-100 cursor-pointer md:w-48 w-40"><img  src="express.png" className="w-12"/><h2 style={{color:data?"green":"",fontSize:data?"20px":" ",fontWeight:data?"bold":" "}} className="text-xl ml-4">Express JS</h2></div>
                <div style={{border:data?"2px solid white":""}} className=" shadow-lg py-2 px-4 bg-white-1000 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 hover:bg-blue-100 cursor-pointer md:w-48 w-40"><img  src="react.png" className="w-12"/><h2 style={{color:data?"green":"",fontSize:data?"20px":" ",fontWeight:data?"bold":" "}} className="text-xl ml-4">React JS</h2></div>
                <div style={{border:data?"2px solid white":""}} className=" shadow-lg py-2 px-4 bg-white-1000 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 hover:bg-blue-100 cursor-pointer md:w-48 w-40"><img  src="ejs.png" className="w-12"/><h2 style={{color:data?"green":"",fontSize:data?"20px":" ",fontWeight:data?"bold":" "}} className="text-xl ml-4">EJS</h2></div>
                <div style={{border:data?"2px solid white":""}} className=" shadow-lg py-2 px-4 bg-white-1000 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 hover:bg-blue-100 cursor-pointer md:w-48 w-40"><img  src="Gitt.png" className="w-12"/><h2 style={{color:data?"green":"",fontSize:data?"20px":" ",fontWeight:data?"bold":" "}} className="text-xl ml-4">Git</h2></div>
                <div style={{border:data?"2px solid white":""}} className=" shadow-lg py-2 px-4 bg-white-1000 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 hover:bg-blue-100 cursor-pointer md:w-48 w-40"><img  src="rest.png" className="w-12"/><h2 style={{color:data?"green":"",fontSize:data?"20px":" ",fontWeight:data?"bold":" "}} className="text-xl ml-4">REST API</h2></div>
                <div style={{border:data?"2px solid white":""}} className=" shadow-lg py-2 px-4 bg-white-1000 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 hover:bg-blue-100 cursor-pointer md:w-48 w-40"><img  src="firebase.png" className="w-12"/><h2 style={{color:data?"green":"",fontSize:data?"20px":" ",fontWeight:data?"bold":" "}} className="text-xl ml-4">Firebase</h2></div>
                <div style={{border:data?"2px solid white":""}} className=" shadow-lg py-2 px-4 bg-white-1000 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 hover:bg-blue-100 cursor-pointer md:w-48 w-40"><img  src="mongo.png" className="w-12"/><h2 style={{color:data?"green":"",fontSize:data?"20px":" ",fontWeight:data?"bold":" "}} className="text-xl ml-4">MongoDB</h2></div>
                <div style={{border:data?"2px solid white":""}} className=" shadow-lg py-2 px-4 bg-white-1000 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 hover:bg-blue-100 cursor-pointer md:w-48 w-40"><img  src="post.png" className="w-20"/><h2 style={{color:data?"green":"",fontSize:data?"20px":" ",fontWeight:data?"bold":" ",marginLeft:data?"10px":""}} className="text-xl ml-4">Postgres</h2></div>
                <div style={{border:data?"2px solid white":""}} className=" shadow-lg py-2 px-4 bg-white-1000 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 hover:bg-blue-100 cursor-pointer md:w-48 w-40"><img  src="mysql.png" className="w-12"/><h2 style={{color:data?"green":"",fontSize:data?"20px":" ",fontWeight:data?"bold":" "}} className="text-xl ml-4">Mysql</h2></div>
                <div style={{border:data?"2px solid white":""}} className=" shadow-lg py-2 px-4 bg-white-1000 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 hover:bg-blue-100 cursor-pointer md:w-48 w-40"><img  src="snowflake.png" className="w-12"/><h2 style={{color:data?"green":"",fontSize:data?"20px":" ",fontWeight:data?"bold":" "}} className="text-xl ml-4">SnowFlake</h2></div>
                <div style={{border:data?"2px solid white":""}} className=" shadow-lg py-2 px-4 bg-white-1000 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 hover:bg-blue-100 cursor-pointer md:w-48 w-40"><img  src="sql.png" className="w-12"/><h2 style={{color:data?"green":"",fontSize:data?"20px":" ",fontWeight:data?"bold":" "}} className="text-xl ml-4">SQL</h2></div>
                <div style={{border:data?"2px solid white":""}} className=" shadow-lg py-2 px-4 bg-white-1000 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 hover:bg-blue-100 cursor-pointer md:w-48 w-40"><img  src="ml.png" className="w-12"/><h2 style={{color:data?"green":"",fontSize:data?"20px":" ",fontWeight:data?"bold":" "}} className="text-xl ml-4">Machine Learning</h2></div>
                </div>
            </div>
    </div>
    </motion.div>
   </>)
}