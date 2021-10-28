import React  from 'react'
import Name from './Name'

const NameList = ({searchResults,handleChange,listFilter}) => {

 
 
  return (
  
           <div className="name-list-container">             
             {searchResults.map((name,i)=>(
                //  <span  onClick={handleChange} key={i}  className={name.sex === "f" ? "name-list-pink" : "name-list-blue"} >{name.name}</span>
                <Name onClick={handleChange} key={i} name={name} />
             ))}

            </div>
  
  
  );
};

export default NameList;
