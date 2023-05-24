import React from "react";
import axios from "axios";
import { useState } from "react";
import './NewRecipeScreen.css'
import { Formik } from "formik";

const NewRecipeScreen = () => {

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
};

const onSubmit = (values) => {
    values.ingredients = ingredients
    console.log(values)

    axios
    .post(`https://recipes.devmountain.com/recipes`, values)

}

  const [ingredients, setIngredients] = useState([]);

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')

  const addIngredient = () => {
    setIngredients([...ingredients, {name, quantity}])
    setName('')
    setQuantity('')
  }



  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(values, handleChange, handleSubmit) => (

      
      <form onSubmit={handleSubmit}>
        <div className="div-0">
        <input type="text" name="recipeName" placeholder="Title your Recipe!" value={values.recipeName} onChange={handleChange}></input>
        <input type="text" name="imageUrl" placeholder="Paste an Image URL" value={values.imageURL} onChange={handleChange}></input>
        </div>

        <div className="div-1">
        <span><input type="radio" value="cook" onChange={handleChange} name="type"></input><h5>Cook</h5></span>
        <span><input type="radio" value="bake" onChange={handleChange} name="type"></input><h5>Bake</h5></span>
        <span><input type="radio" value="drink" onChange={handleChange} name="type"></input><h5>Drink</h5></span>
        </div>

        <div className="div-2">
        <input type="text" name="prepTime" placeholder="Prep Time"></input>
        <input type="text" name="cookTime" placeholder="Cook Time"></input>
        <input type="text" name="serves" placeholder="Serves"></input>
        </div>

        <div className="div-3">
          <div className="ingredients-div">
        <input type="text" name="ingredient" placeholder="Ingredient" onChange={(event) => {setName(event.target.value)}} value={name}></input>
        <input type="text" name="quantity" placeholder="Quantity" onChange={(event) => {setQuantity(event.target.value)}} value={quantity}></input>
        </div>
        <button type="button" onClick={addIngredient}>Add Ingredient</button>
        </div>

        <div className="div-4">
        <textarea name="instructions" placeholder="What are the Instructions?"></textarea>
        </div>

      </form>

      )}

      </Formik>

    </section>

  );

};

export default NewRecipeScreen;
