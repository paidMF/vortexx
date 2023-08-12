import React from "react";
import "./Apartments.css";
import Searchbar from "../../components/Searchbar/Searchbar";
import data from "../../utils/slider.json";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Apartments = () => {

  const id = useParams()

  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <Searchbar />
        <div className="paddings flexCenter properties">
          {data.map((card, i) => (
            // <NavLink to="/Apartment/{card}">
              <div className="flexColStart r-card"



                // on clicking on the property card, navigate to the specificpage of the card of id card.id
                onClick={() => navigate(`../Apartments/${card.id}`)}
              >
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            // </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apartments;
