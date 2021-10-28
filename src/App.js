import React,{useState,useEffect} from 'react';
import NameList from "./Components/NameList";
import './App.css';
import Data from "./babyNamesData.json"
import SearchName from "./Components/SearchName";
import FavoritesList from './Components/FavoriteList';


const names =Data.sort((a, b) => a.name.localeCompare(b.name));


function App() {

  const[search,setSearch]= useState("");
  const[searchResults,setSearchResults] = useState([]);
  const [favorite, setFavorite] = useState([]);
  console.log(favorite)

const handleClick =(id)=>{
  const favList = favorite.concat(names.filter(name => name.id===id))
  setFavorite(favList)

}

  useEffect(() =>{
      const results = names.filter(person =>
          person.name.toLowerCase().includes(search.toLowerCase())
      );
     
     
      setSearchResults(results);
   
  },[search]);

  const handleRemoveItem = (id) => {
    setFavorite( favorite.filter( item => item.id !== id ) )
   };



  return (
    <div className="App"> 
     <h2 className="multicolortext">Baby Name Piker</h2>
    <div className="container">   
      <SearchName data={names} search={search} setSearch={setSearch} setSearchResults={setSearchResults}/>   
      <FavoritesList data={names} handleRemoveItem={handleRemoveItem} favorite={favorite} setFavorite={setFavorite}/>
      <hr/>
      <NameList data={names}  handleClick={handleClick} searchResults={searchResults} setSearchResults={setSearchResults} />
    </div>
  
    </div>  
  );
}



export default App
