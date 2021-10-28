import React from 'react'

function FavoriteList({favorite, handleRemoveItem}) {

  
     
    return (
      <div>
          <h4 className="multicolortext">Favorite List : </h4>
            <div  className="name-list-container fab_list">
            {favorite.map((item,i)=><span onClick={()=>handleRemoveItem(item.id)} className={item.sex === "f" ? "name-list-pink" : "name-list-blue"} key={i}>{item.name}</span>)}
         </div>
      </div>
    )
}

export default FavoriteList
