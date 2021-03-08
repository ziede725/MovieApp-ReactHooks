import React from "react"
import {Button , Modal , input, form } from 'react-bootstrap'
import {useState} from "react"

import '../App'
import { v4 as uuidv4 } from 'uuid';
const AddMovie = (props)=>{
  const [show,setShow] =useState(false) ; 
    const HandleShow = ()=> {
        setShow(true) ; 
    }
    const handleClose =()=>{
        setShow(false ) ; 
    }
    
    const handleCLick=()=>{
      props.AddItemMovie( {Name: props.title ,  
      Poster : props.poster,
      Description: props.description , 
      Rating: props.rate,
     Id: uuidv4() }, )  
     handleClose() ;     
    }

    
    
return (<>

<Button onClick={HandleShow}>Add Movie</Button>
{show ? 
   <Modal show ={show} onHide={handleClose}>
   <Modal.Header closeButton>
     <Modal.Title>Add new movie </Modal.Title>
   </Modal.Header>
   <Modal.Body>
       <form>
           <div className ='Modal-form'>
           <label>Movie Title : </label>
           <input onChange={event=>props.handleTitle(event.target.value)}></input>
           <label>Movie description: </label>
           <input onChange = {event => props.handleDescription(event.target.value)}></input>
           <label>Movie Rate :</label>
           <input onChange ={event => props.handleRate(event.target.value)}></input>
           <label> Movie Poster</label>
           <input onChange = {event => props.handleUrl(event.target.value)}></input>
           </div>
           
       </form>
   </Modal.Body>
   <Modal.Footer>
     <Button variant="secondary" onClick={handleClose}>
       Close
     </Button>
     <Button variant="primary" onClick ={handleCLick} >
       Save Changes
     </Button>
     
   </Modal.Footer>  
 </Modal>:[]}

 
</>
)
}
export default AddMovie ; 