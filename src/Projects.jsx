import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
export default function Projects(){
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: false });
    return(<>
        <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -250 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -250 }}
        transition={{ duration: 0.8 ,delay:0.2}}>
        <div id="projects" className=" flex flex-col my-20">
        <h1 className="flex justify-center my-10 text-pink-500 text-4xl">Projects</h1>
        <div className="flex flex-wrap gap-10 justify-center">
        <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow-2xl hover:scale-95 hover:border-green-400">
        <img className="rounded-t-lg" src="online.png"  className="w-45 h-[40%]" />
        <div class="p-5">
            <h5 className="text--600 font-semibold text-xl text-center mb-5">Online Shop Ecommerce Website</h5>
             <h5 className="text--500 font-semibold text-xl text-blue-600 my-4">Technologies:<span className="gap-1 text-black">HTML,CSS,JavaScript,Express JS,Node Js,EJS,Firebase</span></h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">It is an E-commerce website where users can easily sign up and log in with their credentials. Everything is encrypted. Users can view various products and purchase them through Amazon or Flipkart. They can also save items.</p>
        <div className="flex gap-6">
        <Link to="https://github.com/vjaswanthvarma/E-Commerce-Website-Online-Shop"><img src="git.png"  className="w-12" /></Link>
        <Link to="https://www.youtube.com/@jaswanthvarmavemulamanda"><img src="you.png"  className="w-12" /></Link>
        <Link to="https://e-commerce-website-online-shop-1.onrender.com/"><img src="ren.png"  className="w-[25%] border rounded-md" /></Link>
        </div></div>
</div> 
    <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow-2xl hover:scale-95 hover:border-green-400 ">
        <img className="rounded-t-lg" src="sport.png"  className="w-45" />
        <div class="p-5"> 
            <h5 className="flex justify-center text--500 font-semibold text-xl mb-5">Sports Schedular</h5>
            <h5 className="text--500 font-semibold text-xl text-blue-600 mb-5">Technologies:<span className="gap-1 text-black">HTML,CSS,JavaScript,Express JS,Node Js,EJS,Postgres,Sessions,passport js</span></h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">It is a sports conducting platform where teammates and coaches can organize sports events. Users can create a sport and conduct it at a specific time. Different encryption techniques are used to hide the credentials.</p>
        <div className="flex gap-6">
        <Link to="https://github.com/vjaswanthvarma/Sports-Schedular"><img src="git.png"  className="w-12" /></Link>
        <Link to="https://www.youtube.com/@jaswanthvarmavemulamanda"><img src="you.png"  className="w-12" /></Link>
        <Link to="https://www.youtube.com/watch?v=DpOB35H5FOg"><img src="ren.png"  className="w-[25%] border rounded-md" /></Link>
        </div></div>
</div>
<div className="max-w-md bg-white border border-gray-200 rounded-lg shadow-2xl hover:scale-95 hover:border-green-400">
        <img className="rounded-t-lg" src="netflix.png"  className="w-45 h-[45%]" />
        <div class="p-5">
            <h5 className="text--500 font-semibold text-xl flex justify-center mb-5">Netflix Clone</h5>
            <h5 className="text--500 font-semibold text-xl text-blue-600 my-5">Technologies:<span className="gap-1 text-black">HTML,Tailwind,JavaScript,React js,Express JS,Node Js,Rapid API,Mongodb</span></h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">It looks like Netflix. We have login and signup options, then we enter the main home page. On the home page, we can see different movies and web series and also have the option to search for various movies</p>
        <div className="flex gap-6">
        <Link to="https://github.com/vjaswanthvarma/Netflix_Clone"><img src="git.png"  className="w-12" /></Link>
        <Link to="https://www.youtube.com/@jaswanthvarmavemulamanda"><img src="you.png"  className="w-12" /></Link>
        <Link to="https://netflix-clone-zeta-eight-59.vercel.app/"><img src="ren.png"  className="w-[25%] border rounded-md" /></Link>
        </div></div>
</div>
<div className="max-w-md bg-white border border-gray-200 rounded-lg shadow-2xl hover:scale-95 hover:border-green-400">
        <img className="rounded-t-lg" src="concers.png"  className="w-45 h-[50%]" />
        <div class="p-5">
            <h5 className="text--500 font-semibold text-xl flex justify-center my-5">Student permissions and faculty Concerns</h5>
            <h5 className="text--500 font-semibold text-xl text-blue-600 my-5">Technologies:<span className="gap-1 text-black">HTML,CSS,JavaScript,Express JS,Node Js,EJS,Firebase</span></h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">It is a student permission and faculty website that allows both students and faculty to interact for various purposes. Students can ask doubts to faculty members, and faculty can easily respond to their queries.</p>
        <div className="flex gap-6">
        <Link to="https://github.com/vjaswanthvarma/Faculty-Concerns-and-Permissions"><img src="git.png"  className="w-12" /></Link>
        <Link to="www.youtube.com"><img src="you.png"  className="w-12" /></Link>
        <Link to="https://www.youtube.com/@jaswanthvarmavemulamanda"><img src="ren.png"  className="w-[25%] border rounded-md" /></Link>
        </div></div>
</div>
<div className="max-w-md bg-white border border-gray-200 rounded-lg shadow-2xl hover:scale-95 hover:border-green-400">
        <img className="rounded-t-lg" src="movie.png"  className="w-45" />
        <div class="p-5">
            <h5 className="text--500 font-semibold text-xl flex justify-center my-5">MovieUpdatesChatBot</h5>
            <h5 className="text--500 font-semibold text-xl text-blue-600 my-5">Technologies:<span className="gap-1 text-black">HTML,CSS,JavaScript,Node Js,OMDB Api,Firebase</span></h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">It is a chatbot that provides complete details of any movie when you provide the name of the movie. All history will be stored in a Firebase database with their respective account</p>
        <div className="flex gap-6">
        <Link to="https://github.com/vjaswanthvarma/Telegram-chatBot"><img src="git.png"  className="w-12" /></Link>
        <Link to="https://www.youtube.com/@jaswanthvarmavemulamanda"><img src="you.png"  className="w-12" /></Link>
        <Link to="https://t.me/MovieUpdate_123Bot"><img src="ren.png"  className="w-[25%] border rounded-md" /></Link>
        
        </div></div>
</div>
</div>

</div>
</motion.div>
    </>)
}