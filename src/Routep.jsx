import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import Home from "./Home";
export default function Routep(){
    return(<>
         <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
    </>)
}