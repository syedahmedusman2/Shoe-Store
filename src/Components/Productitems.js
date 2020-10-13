import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {useParams} from 'react-router-dom';
import Shoes from './Shoes.json';
function Productitems() {
  const { id } = useParams();
  const shoe = Shoes[id];

  if(!shoe)
  return<h2>Product Not Found</h2>
  return (
    <div>
      {/* <h1>Welcome to Product Items</h1> */}
      <div className="link">
                <h1>{shoe.name}</h1>
                <img src={shoe.img} height={500} alt="shoe" />
                <h1>Details</h1>
                <h3><b>{shoe.details}</b></h3>
                <h1>{shoe.price}</h1>
                <br></br>
                
            </div>
      
    </div>
  );
}

export default Productitems;
