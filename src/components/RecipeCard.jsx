import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./RecipeCard.css"


const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()
  

    
    const handleClick = () => {
      navigate(`/recipe/${recipe.recipe_id}`)
    }
    return (
      <div className="recipe_card">
        <div>
          <div className="recipe_img_container">
            <img src={recipe.image_url} className="recipe-card-image"/>
          </div>
          <h4>{recipe.recipe_name}</h4>
        </div>
        <button className="blue-btn" onClick={handleClick}>See More</button>
      </div>
    );
  };
  
  export default RecipeCard;