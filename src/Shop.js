import React , { useState, useEffect } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
 
useEffect(()=>{
  fecthItems();
},[]);

const [items, setItems] = useState([]);


const fecthItems = async () =>{
  const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');
  const items = await data.json();
  console.log(items.items);
  setItems(items.items);

};

  return (
    <div>
      {items.map(item => (
          <h3 key={item.itemid}>
          <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
          </h3>
      ))}
    </div>
  );
}

export default Shop;
