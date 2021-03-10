import React from "react"
import {Button , Modal , input, form } from 'react-bootstrap'
import {useState} from "react"

import '../App'
import { v4 as uuidv4 } from 'uuid';
const AddMovie = (props)=>{
    const[title,setTitle]=useState("Film Title") ; 
    const[description , setDescription] = useState("Film description"); 
    const[rate, setRate]= useState(0) ;
    const[link , setLink ] = useState ("") ; 
    const[posterUrl, setPosterUrl]= useState('https://fr.web.img2.acsta.net/pictures/19/10/25/11/18/5224976.jpg') 
    const [show,setShow] =useState(false) ; 
    const HandleShow = ()=> {
        setShow(true) ; 
    }
   
    
    const handleClose =()=>{
        setShow(false ) ; 
    }
    
    const handleCLick=()=>{
      props.AddItemMovie( {Name: title ,  
      Poster : posterUrl,
      Description: description , 
      Rating: rate,
      Id: uuidv4(),
      trailerLink:link.replace("watch?=" ,"embed/") }, )  
    
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
           <input onChange={event=>setTitle(event.target.value)}></input>
           <label>Movie description: </label>
           <input onChange = {event => setDescription(event.target.value)}></input>
           <label>Movie Rate :</label>
           <input onChange ={event => setRate(event.target.value)}></input>
           <label> Movie Poster</label>
           <input onChange = {event => setPosterUrl(event.target.value)}></input>
           <label> Trailer Link</label>
           <input onChange = {event => setLink(event.target.value)}></input>
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