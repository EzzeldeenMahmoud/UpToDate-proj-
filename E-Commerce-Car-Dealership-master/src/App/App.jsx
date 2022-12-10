import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Routers } from "../router/Routers";



 

export const App = () => {



    return(
        <div className="wrapper">
        <div id="container">
            <Header/>
            <Routers/>
            <Footer/>
        </div>
        </div>
    );
};