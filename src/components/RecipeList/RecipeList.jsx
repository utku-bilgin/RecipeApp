import Card from '../Card/Card.jsx'
import './recipeList.css'

const RecipeList = ({ recipes, deleteRecipe, isLoading }) => {
  return (
    <div className='recipe'>
      {isLoading.read && <p>Loading</p>}
      {recipes.map((recipe) => (
        <Card
          {...recipe}
          className='card'
          deleteRecipe={deleteRecipe}
          isLoading={isLoading}
        />
      ))}
    </div>
  )
}

export default RecipeList
