import React from 'react'
import NameList from './NameList';

function FavoritesList({ favorite}) {

    return (
     
        <div className="favourite">
        <h2>Favourites: </h2> 
     <span  className={favorite.sex === "f" ? "name-list-pink" : "name-list-blue"}>{favorite}</span>
        <br/>
  
      </div>
    )
}

export default FavoritesList
