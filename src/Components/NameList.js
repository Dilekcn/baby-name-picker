import React from 'react'

function NameList({searchResults,handleClick}) {
  
    return (
        <div className="name-list-container">             
        {searchResults.map((name,i)=>(
             <span key={i} onClick={()=>handleClick(name.id)} className={name.sex === "f" ? "name-list-pink" : "name-list-blue"} >{name.name}</span>
         
        ))}

       </div>

    )
}

export default NameList
