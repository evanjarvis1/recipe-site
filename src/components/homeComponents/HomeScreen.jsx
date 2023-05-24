import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import AdBanner from './AdBanner'
import './HomeScreen.css'
import RecipeCard from '../RecipeCard'
import RecipeDisplay from './RecipeDisplay'

import { ImSearch } from "react-icons/im"

const apiUrl = `https://recipes.devmountain.com`

const HomeScreen = () => { 
  
  const [recipes, setRecipes] = useState([])

  const [search, setSearch] = useState("")

  const getRecipes = () => {
    axios.get(`${apiUrl}/recipes`)
    .then((res) => {
      setRecipes(res.data)
      console.log(res.data)
    })
  }

  useEffect(() => {
    getRecipes()
},[])



  return (
    <div>
      <AdBanner />

      <span>
    <ImSearch size="1em" />
    &nbsp;
    &nbsp;
    <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a Recipe"
    />
</span>

<RecipeDisplay recipes={recipes} search={search} setSearch={setSearch}/>

    </div>
  )
}

export default HomeScreen