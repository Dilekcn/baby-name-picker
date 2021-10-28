import React from 'react'

function SearchName({setSearchResults,search,setSearch,data}) {


 const handleChange = event => {
        setSearch(event.target.value);    
      };  
const girlsName =() =>{
    const result = data.filter(name => name.sex==="f")
    setSearchResults(result)
  }
  
  const boysName =() =>{
    const result = data.filter(name => name.sex==="m")
    setSearchResults(result)
  }
  
  const allName =() =>{
    const result = data
    setSearchResults(result)
  }
    return (
        <div>
        <input type="text" value ={search}  className="input_search"  onChange = {handleChange} placeholder="Search for a name..."/>
       
       <span className="all-name" onClick={allName}>🐥</span>
       <span className="girl-name"  onClick={girlsName} >🐤</span>
       <span className="boy-name" onClick={boysName} >🐣</span>
 
        </div>
    )
}

export default SearchName