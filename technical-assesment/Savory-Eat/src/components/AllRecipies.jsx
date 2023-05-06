import React from "react";
import RecipeCard from "../RecipeCard.jsx";
const AllRecipes = ({setOne, changeView, data}) => {
  console.log(data);
  return (
    <div className="card-container">
      {data?.map((e, i) => (
        <RecipeCard e={e} key={i} setOne={setOne} changeView={changeView} />
      ))}
    </div>
  );
      }


export default AllRecepies;
