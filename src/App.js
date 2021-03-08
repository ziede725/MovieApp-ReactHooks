import './App.css';
import {useEffect, useState} from 'react'
import Navigation from './myComponents/Navigation'
import AddMovie from './myComponents/AddMovie'
import MovieList from './myComponents/MovieList';
import { v4 as uuidv4 } from 'uuid';

function App() {
    
    const[title,setTitle]=useState("Film Title") ; 
    const[description , setDescription] = useState("Film description"); 
    const[rate, setRate]= useState(0) ;
    const[posterUrl, setPosterUrl]= useState('https://fr.web.img2.acsta.net/pictures/19/10/25/11/18/5224976.jpg') 
    const [movies , setMovies] = useState([{
   Name: 'Inception' , 
   Poster: 'https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/inceptionmovie-newposter-big.jpg?itok=zn3rPAOq' , 
   Description : "" , 
   Rating: 5  , Id:uuidv4() 
 },
 {Name: 'Titanic' ,  
 Poster : 'https://fr.web.img2.acsta.net/pictures/19/10/25/11/18/5224976.jpg',
Description: '' , 
Rating: 5 ,
Id: uuidv4() }, 
{Name:'The Irish Man' , Poster:'https://i.ytimg.com/vi/WHXxVmeGQUc/maxresdefault.jpg' , 
Description:'' , Rating:4 ,Id:uuidv4()}
]) ; 
const[searchTerm , setSearchTerm] = useState('')

const AddItemMovie = (newMovie)=>{
  setMovies([...movies , newMovie]); 
  };
const search = (e) =>{
   
   setSearchTerm(e.target.value.toLowerCase()) ; 
  
}
console.log(rate)


  return (
    <div className="App">

  <Navigation movies={movies} search ={search} rate={rate} setRate={setRate}/>
   <AddMovie title={title} description={description} rate={rate} poster={posterUrl} handleUrl={setPosterUrl}
   handleTitle={setTitle} handleDescription ={setDescription} handleRate={setRate} AddItemMovie={AddItemMovie}
  ></AddMovie>
   <MovieList movies ={movies} searchTerm={searchTerm} rate ={rate} />
    </div>
  
  );
  
 
  }
  

export default App;
