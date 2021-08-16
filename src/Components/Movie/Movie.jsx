import React from 'react'
import './Movie.css'


const Movie = ({title}) => {
    return (
        <div className="flex space-x-3 mt-8">
            <div className="caratula">
                <img src={`https://image.tmdb.org/t/p/original${title}`}/>
            </div>
        </div>
    )
}

export default Movie
