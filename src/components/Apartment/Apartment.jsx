import React from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../../utils/slider.json'; // Import your JSON data here
import "./Apartment.css"
import Map from '../Map/Map';


const Apartment = () => {
  const { id } = useParams(); // Get the ID from the URL using useParams()

  // Find the data entry in jsonData corresponding to the ID
  const product = jsonData.find((item) => item.id === id);

  // Display or use the fetched data
  return (
    <div className="wrapper">
      {product ? (
        <div className="flexCenter paddings innerWidth property-container">
          <img src={product.image} alt={""} />
          <br/>
          <div className="flexCenter property-details">
            <div className="flexColStart left">
              <div className="flexStart head">
                <span className='primaryText'>{product.name}</span>
                <br/>
                <span className="orangeText" style={{ fontSize: "1.5rem" }}>${product.price}</span>
                <br/>
                
                <div><span >{product.detail}</span></div>
              </div>
            </div>

            <div className="map">
            <Map
              address={product.detail}
              city={product.city}
              country={product.country}
            />
          </div>

          </div>

          
        </div>
      ) : (
        <p>Product not found!</p>
      )}
    </div>
  );
};

export default Apartment;
