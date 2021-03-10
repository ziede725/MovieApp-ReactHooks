import './App.css';
import {useEffect, useState} from 'react'
import Navigation from './myComponents/Navigation'
import AddMovie from './myComponents/AddMovie'
import MovieList from './myComponents/MovieList';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieDescription from './myComponents/MovieDescription';

function App() {
    
    const [newRate , setNewRate] = useState (0) ;
    const [movies , setMovies] = useState([{
   Name: 'Inception' , 
   Poster: 'https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/inceptionmovie-newposter-big.jpg?itok=zn3rPAOq' , 
   Description : "Movie Description" , 
   Rating: 5  ,  Id:2 , trailerLink:"https://www.youtube.com/embed/8hP9D6kZseM"},
 {Name: 'Titanic' ,  
 Poster : 'https://fr.web.img2.acsta.net/pictures/19/10/25/11/18/5224976.jpg',
Description: '' , 
Rating: 5 ,
 
Id: 1 , 
trailerLink : "https://www.youtube.com/embed/ZQ6klONCq4s" }, 
{Name:'The Irish Man' , Poster:'https://i.ytimg.com/vi/WHXxVmeGQUc/maxresdefault.jpg' , 
Description:'' , Rating:4 ,Id:3 , trailerLink: "https://www.youtube.com/embed/WHXxVmeGQUc"}
]) ; 
const[searchTerm , setSearchTerm] = useState('')

const AddItemMovie = (newMovie)=>{
  setMovies([...movies , newMovie]); 
  };
const search = (e) =>{
   
   setSearchTerm(e.target.value.toLowerCase()) ; 
  
}



  return (
    <div className="App">

  <Navigation movies={movies} search ={search} rate={newRate} setRate={setNewRate}/>
  <AddMovie  AddItemMovie={AddItemMovie}></AddMovie>
  <BrowserRouter>
 
    <Route  exact path="/">
    <MovieList movies ={movies} searchTerm={searchTerm} rate ={newRate} />
    </Route>
    <Route exact path = '/Home/MovieDescription/:id'>
  <MovieDescription movies={movies}/>
</Route>
    </BrowserRouter>
    </div>
  
  );
  
 
  }
  

export default App;
