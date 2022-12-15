import React from 'react'
import './moviecard.css'

const MovieCard = ({item}) => {
    return (
       
<div className="card movie_card">
		  <img src={item.Poster} className="card-img-top" alt="..."/>
		  <div className="card-body">
		   <h5 className="card-title">{item.Title}</h5>
            <p className="Type">{item.Type}</p>
		   		<span className="movie_Year">{item.Year}</span>
		   		<span className="movie_info float-right">{item.Rate} / 5</span>
	
		  </div>
		</div>

			
    )
}

export default MovieCard