import React from 'react'
import './Listas.css'

import Movie from '../Movie/Movie'


const Listas = (movies) => {
    console.log("hasta aca");
    movies.movies?.map((movie) => console.log(movie.poster_path))

    return (
        <div className="lista flex flex-row">
            {movies.movies?.map((movie) => <Movie title={movie.poster_path}/>)}
        </div>
    )
}

export default Listas
