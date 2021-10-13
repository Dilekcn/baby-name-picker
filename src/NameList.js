import React  from 'react'


const NameList = ({searchResults}) => {

 
 
  return (
  
           <div className="name-list-container">             
             {searchResults.map((name,i)=>(
                 <span key={i} className={name.sex === "f" ? "name-list-pink" : "name-list-blue"} >{name.name}</span>
             ))}

            </div>
  
  
  );
};

export default NameList;
