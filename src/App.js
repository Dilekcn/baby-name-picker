import React,{useState,useEffect} from 'react';
import NameList from "./NameList";
import './App.css';
import Data from "./babyNamesData.json"
import SearchName from "./SearchName";
import FavoritesList from './FavoritesList';


const names =Data.sort((a, b) => a.name.localeCompare(b.name));

const list = ["a","b","c"]
function App() {

  const[search,setSearch]= useState("");
  const[searchResults,setSearchResults] = useState([]);
  const [favorite, setFavorite] = useState([]);

  
  useEffect(() =>{
      const results = names.filter(person =>
          person.name.toLowerCase().includes(search.toLowerCase())
      );
     
      setSearchResults(results);
  },[search]);
  



  return (
    <div className="App"> 
    <div className="container">   
      <SearchName data={names} search={search} setSearch={setSearch} setSearchResults={setSearchResults}/>   
      <FavoritesList data={names} favorite={favorite} />
      <hr/>
      <NameList data={names}  searchResults={searchResults} setSearchResults={setSearchResults} />
      <hr/>
    </div>
  
    </div>  
  );
}

export default App;
