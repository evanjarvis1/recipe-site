import RecipeCard from "../RecipeCard"
import "./RecipeDisplay.css"

const apiUrl = `https://recipes.devmountain.com`

const RecipeDisplay = (props) => {

    let recipes=props.recipes

    let search = props.search

    let setSearch = props.setSearch

const recipeDisplay1 = recipes.filter((recipe, index) => {
    let title = recipe.recipe_name.toLowerCase()
    let searchParams = search.toLowerCase()
    return title.includes(searchParams)
})
    const finalList = recipeDisplay1.map((recipe, index) => {
    return <RecipeCard recipe={recipe}/>;
}
    )

    return (
        <div className="displayed-recipes">
            {finalList}
        </div>
    )



}

export default RecipeDisplay;