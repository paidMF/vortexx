import React from 'react'
import data from '../../utils/slider.json'
import { useNavigate } from 'react-router-dom';

// PROPRTY CARD IN THE CAROUSAL (OBJECTS IN THE CAROUSAL)
const PropertyCard = ({card}) => {

    const navigate = useNavigate();
    return (
      <div className="flexColStart r-card"
  
      
  
      // on clicking on the property card, navigate to the specificpage of the card of id card.id
      onClick={()=>navigate(`../Apartment/${card.id}`)}
      >
        <Heart id={card?.id}/>
  
        {/* // image on the card */}
        <img src={card.image} alt="home" />
  
        {/* // price of the residence on the card */}
        <span className="secondaryText r-price">
          <span style={{ color: "orange" }}>$</span>
          <span>{card.price}</span>
        </span>
  
        {/* // name of the residence on the card */}
  
        {/* // lodash makes sure the title and description is truncated to have a uniform number of character */}
        <span className="primaryText">{truncate(card.name, {length: 15})}</span>
  
        {/* // description of the residence on the  card */}
        {/* // lodash makes sure the title and description is truncated to have a uniform number of character */}
        <span className="secondaryText">{truncate(card.detail, {length: 80})}</span>
      </div>
    );
  };
  
  export default PropertyCard;
  
