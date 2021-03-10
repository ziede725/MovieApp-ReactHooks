import React from 'react'
import {useParams, Route , Link } from 'react-router-dom'
import "./MovieDescription.css"
const MovieDescription  = (props)=>{
    const {id} = useParams () ; 
 const selectedMovie = props.movies.find(el=> el.Id == id)
console.log(selectedMovie.trailerLink)

return(
    <>
       <div>
           <Link to = "/"> Go To Home </Link>
       </div>
       <div className ="page-display">
       <div>
        <p>Movie Description </p>
       </div>
       <div>
       <h1>Movie Trailer </h1>
       <iframe width="420" height="315" src={selectedMovie.trailerLink.replace("watch?v=" , "embed/") }></iframe> 
       </div>
       </div>
    </>
)
}
export default MovieDescription  ; 