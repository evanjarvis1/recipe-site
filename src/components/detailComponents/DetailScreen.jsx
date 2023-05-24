


import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./DetailScreen.css"
import DetailImage from './DetailImage';

const DetailScreen = () => { 

  const { id } = useParams();
  
  const apiUrl = `https://recipes.devmountain.com`



  const [recipe, setRecipe] = useState({})

  

  console.log(id)

  useEffect(() => {
    axios.get(`${apiUrl}/recipes/${id}`)
      .then((res) => {
      setRecipe(res.data);
    });
  }, []);


console.log(recipe.image_url)

  return (
    <section className='details-section'>
      <DetailImage image={recipe.image_url} title={recipe.recipe_name}/>
      <div className='ingredients'>
      <h2>Recipe</h2>
            <h4>Prep Time: {recipe.prep_time}</h4>
            <h4>Cook Time: {recipe.cook_time}</h4>
            <h4>Serves: {recipe.serves}</h4>
        <h2>Ingredients</h2>
      {recipe.ingredients && recipe.ingredients.map((ingredient, index) => {
        return <h4>{ingredient.quantity}{ingredient.ingredient}</h4>
      })}
      </div>
      <div className='instructions'>
        <h2>Instructions</h2>
      <p style={{ whiteSpace: "pre-wrap" }}>
    {recipe.instructions && JSON.parse(recipe.instructions)}
</p>
</div>
    </section>
  );
};

export default DetailScreen;
