import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from './Shoes.json';

function Product() {

    return (
        <div>
            <h1 className="Boot">Bootcamp 2020 COllection</h1>
            <div className="productContainer">
                {Object.keys(Shoes).map(keyName=>{
                    const shoe = Shoes[keyName];
                    return (
                        <Link key={keyName} 
                            className="link" 
                            to={`/product/${keyName}`}>
                                <h4 className="styl">{shoe.name}</h4>
                                <img src={shoe.img} height={150} alt="shoe" />
                                <h4 className="styl">{shoe.price}</h4>
                                <button className="button">View More Details</button>
                                
                    </Link>)
                })}
            </div>
        </div>
    );
}

export default Product;
