import React from "react";
import "../App.css"
import "../index.scss";

const Onerecepie = ({ one }) => {
  return (
    <div>
      <div className="receipe-content-area">
        <div className="container">
          <div className="header">
          <img width="500" height="600" src={one.Recipe_Image} alt="" />
          
          <i className="sousou-kady" />
         
          </div>
          <div className="text">
            <h1 className="food">{one.Recipe_Name}</h1>
            <i > {one.Cook_Time} </i>
            <i > Serves: 5 </i>

            <p className="info">Cheesy pizza is a classic pizza topped with a generous amount of melted cheese. The cheese used can vary from mozzarella to cheddar, provolone, or any other type of cheese that melts well.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Onerecepie;
