import React from 'react' ; 
import Navbar from 'react-bootstrap/Navbar'
import '../App.css'
import ReactStars from "react-rating-stars-component";
import { Button } from 'react-bootstrap'
import {Link } from 'react-router-dom'


const Navigation =(props)=>{
    
const ratingChanged = (newRating)=>{
    props.setRate(newRating)
   
    
}

    return (<div>
       <Navbar bg="danger" expand="lg">
           <div className ="navbar-wrapper">
           <div className ="nav-elements">MyMovie App </div>
           <div>
           <form>
            <input placeholder="type Movie title" onChange={props.search}></input> 
        </form>
           </div>
           <div>filter by rate</div>
           <ReactStars count={5} onChange={ratingChanged} value={props.rate}/>
        
          </div> 
        
        
    </Navbar>
        
        <br></br>
        
      
    
    </div>) ; 
}

export default Navigation ; 
