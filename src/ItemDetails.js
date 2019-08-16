import React , { useState, useEffect } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function ItemDetails({match}) {
 
useEffect(()=>{
  fecthItem();
},[]);

const [item, setItem] = useState({
    images:{}
});


const fecthItem = async () =>{
  const data = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`);
  const item = await data.json();
  console.log(item);
  setItem(item);

};

  return (
    <div>
        <h1>{item.name}</h1>
        <img src={item.images.transparent} />
    </div>
  );
}

export default ItemDetails;
