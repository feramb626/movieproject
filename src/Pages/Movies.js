import React, { useEffect, useState } from 'react';
import Backmovie from '../Components/Backgroundmovie/Backmovie';
import Ico from '../Components/Ico/Ico';

const Moviepage = () => {

    return(
        <div>
            <Backmovie />
            <div className="div-h container mx-auto">
                <div>
                    <p classname="textobold">Kids</p>
                </div>
                <div>
                    <p classname="textobold">&#9679;</p>
                </div>
                <div>
                    <p classname="textobold">Fantasy Movie</p>
                </div>
                <div>
                    <p classname="textobold">&#9679;</p>
                </div>
                <div>
                    <p classname="textobold">Action</p>
                </div>
            </div>
            <div className="transp container mx-auto">
                <div className="texto-azul">
                    MOVY ORIGINAL
                </div>             
            </div>
            <div class="div-h container mx-auto mt-8">
                <div classname="center">   
                    <Ico 
                        name={"fa fa-plus fa-3x"}
                    />             
                    <p classname="textobold">My List</p>              
                </div>
                <div classname="center">
                    <Ico 
                        name={"fa fa-play-circle fa-3x"}
                    />  
                    <p classname="textobold">Play</p>
                </div>
                <div classname="center">
                    <Ico 
                        name={"fa fa-info-circle fa-3x"}
                    />  
                    <p classname="textobold">Info</p>
                </div>
            </div>
        </div>
    )
}

export default Moviepage;