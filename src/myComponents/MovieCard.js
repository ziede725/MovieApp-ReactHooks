import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ReactStars from "react-rating-stars-component";
import '../App.css'
import MovieDescription from './MovieDescription'
import  { BrowserRouter ,Link , Route , useParams} from 'react-router-dom'



const MovieCard =(props)=>{

const ratingChanged=(newRating)=>{
  return newRating; 
}
    return(
        <>
        <Card bg={'danger'} style={{ width: '18rem' , height:'450px', margin:'25px' }}>
          <div className='container'>
          <img src={props.posterUrl} className="ImageCLass"></img>
          </div>
  
  <Card.Body>
    <div className='card-Div'>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text> 
      <div>
      <Link to = {`/Home/MovieDescription/${props.id}`} >  Description: 
      </Link>
      </div>
      
      {props.description}
    </Card.Text>
    <div> 
      <ReactStars count={5} onChange={ratingChanged} value={parseInt(props.rating)}/>
      </div>
    </div>
  </Card.Body>
</Card>


        </>
    )

}
export default MovieCard ; 