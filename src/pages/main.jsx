import React from 'react';
import Header from '../componentes/header';
import Pessoas from '../componentes/pessoas';
import Footer from '../componentes/footer';



function Main(){
    return(
        <div>
            <Header />
            <div className='main-content'>
                <h1>Some stuff</h1>
                <Pessoas />
            </div>
            <Footer />
        </div>
    )
}

export default Main;