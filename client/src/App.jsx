import styles from './index.module.css'
import fridgeImg from './assets/fridge.jpg'

import { useState } from 'react'

function App() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const recipe = await generateRecipe();
    setRecipe(recipe)
  }

  const generateRecipe = async () => {
    const response = await fetch("http://localhost:3005/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ingredients: ingredients}),
    });

    const data = await response.json();
    return data.response.trim();
  }

  return (
    <main className={styles.main}>
      <img src={fridgeImg} alt="" className={styles.icon}/>
      <h3>Find Your Next Meal</h3>

      <form onSubmit={onSubmit}>
        <textarea 
          cols="30" 
          rows="3"
          type="text" 
          name="help-description"
          placeholder="What's in your fridge?"
          onChange = {(e) => setIngredients(e.target.value)}></textarea>
        <input type="submit" value="Create Recipe!"/>
        <pre>{recipe}</pre>
      </form>
    </main>
  )
}

export default App
