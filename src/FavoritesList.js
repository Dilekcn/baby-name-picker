import React from 'react'
import Name from './Name'

function FavoritesList({ favorite}) {

    return (     
        <div className="favourite">
        <h2>Favourites: </h2>

        {/* {favorite.map((name, i) => (<Name key={i} name={name} />))} */}
        {favorite.map((name, i) => (<span className={name.sex === "f" ? "name-list-pink" : "name-list-blue"} key={i} >{name.name}</span>))}
        <br/>
  
      </div>
    )
}

export default FavoritesList
