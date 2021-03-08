import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ReactStars from "react-rating-stars-component";
import '../App.css'



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
    <Card.Text>Description: 
      {props.description}
    </Card.Text>
    <div> <ReactStars count={5} onChange={ratingChanged} value={parseInt(props.rating)}/></div>
      
    <Button variant="primary">Watch Movie</Button>
    </div>

  </Card.Body>
</Card>

        </>
    )
   {console.log(props.rating)}
}
export default MovieCard ; 