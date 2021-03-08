import React from 'react' ;
import {useState} from 'react' ; 
import MovieCard from './MovieCard'
import '../App.css'
import '../App'
import { v4 as uuidv4 } from 'uuid';

const MovieList=(props)=>{
    let filteredMovies = props.movies.filter(el =>el.Name.toLowerCase().includes(props.searchTerm)&& el.Rating>= props.rate)
    return(
        <>
        <div className='ListMovie'>
            
        {filteredMovies.map((el)=>{
            
           
       return(
        <div key={el.Id}>
        <MovieCard title={el.Name} description={el.Description} posterUrl={el.Poster} rating={el.Rating}/>
    </div> 
       )
     
            })}

        </div>
        </>
    ) ; 

}   
export default MovieList ; 