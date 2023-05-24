import "./ThemeSelector.css"

const ThemeSelector = (props) => {

    const theme = props.theme
    const setTheme = props.setTheme

    return (
        <select onChange={(e) => setTheme(e.target.value)}>
  <option value="devMountain">DevMountain</option>
  <option value="allrecipes">Allrecipes</option>
  <option value="foodNetwork">Food Network</option>
</select>
    )
}

export default ThemeSelector;