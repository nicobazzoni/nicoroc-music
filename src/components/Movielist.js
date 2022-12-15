import React from 'react'
import MovieCard from './MovieCard'

import {Link} from 'react-router-dom'
const Movielist = ({movieArray}) => {
    return (
        <div className="list">
            {movieArray.map((item,i)=>
            <div {...item.Title}   >
            <MovieCard key={i} item={item}/>
            </div>
            )}
        </div>
    )
}

export default Movielist