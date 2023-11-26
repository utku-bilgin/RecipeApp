import { useState, useEffect } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import RecipeList from "./components/RecipeList/RecipeList.jsx";
import AddRecipe from "./components/AddRecipe/AddRecipe.jsx";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState({
    read: false,
    add: false,
  });

  useEffect(() => {
    const getRecipes = async () => {
      try {
        setIsLoading((prevIsLoading) => ({ ...prevIsLoading, read: true }));
        const response = await axios
          .get("http://localhost:3002/fakeRecipes")
          .then((response) => {
            setRecipes(response.data);
          });
        setIsLoading((prevIsLoading) => ({ ...prevIsLoading, read: false }));
      } catch (error) {
        console.error("There was an error fetching the recipes!", error);
      }
    };
    getRecipes();
  }, []);

  const addRecipeToList = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  const deleteRecipe = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3002/fakeRecipes/${id}`
      );
      if (response.status === 200) {
        setIsLoading((prevIsLoading) => ({ ...prevIsLoading, delete: true }));
        const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
        setRecipes(updatedRecipes);
        setIsLoading((prevIsLoading) => ({ ...prevIsLoading, delete: false }));
      }
    } catch (error) {
      console.error("There was an error deleting the recipe!", error);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
          <Routes>
            <Route
              path="/"
              element={
                <RecipeList
                  recipes={recipes}
                  deleteRecipe={deleteRecipe}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="/addrecipe"
              element={
                <AddRecipe
                  addRecipeToList={addRecipeToList}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login />
              }
            />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// npx json-server --watch db.json -p 3002
