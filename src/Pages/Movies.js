import React, { useEffect, useState, useParams } from 'react';
import Backmovie from '../Components/Backgroundmovie/Backmovie';
import Ico from '../Components/Ico/Ico';
import getMovie from '../Api/movies';
import Movie from '../Components/Movie/Movie';
import Listas from '../Components/Listas/Listas';


const Moviepage = () => {
    const [movies, setmovies] = useState([]);

    useEffect (() => {
        getMovie()
            .then((response)=>{
                console.log(response.results[2].poster_path)
                setmovies(response.results)
            })
            .catch((error)=>{
                console.log('error:',error)
            })
      },[]);

    //   movies?.map((movie) => console.log(movie.poster_path))
    // useEffect (() => {
    //     const moviess = getMovie()
    //     console.log(moviess)
    //   },[]);

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
                <div className="center">   
                    <Ico 
                        name={"fa fa-plus fa-3x"}
                    />             
                    <p classname="textobold">My List</p>              
                </div>
                <div className="center">
                    <Ico 
                        name={"fa fa-play-circle fa-3x"}
                    />  
                    <p classname="textobold">Play</p>
                </div>
                <div className="center">
                    <Ico 
                        name={"fa fa-info-circle fa-3x"}
                    />  
                    <p classname="textobold">Info</p>
                </div>
            </div>
            <Listas
                movies={movies}
            />
        </div>
    )
}

export default Moviepage;