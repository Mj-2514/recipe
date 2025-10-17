// mealApi.js (FIXED)
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

// 💡 NEW/RENAMED FUNCTION: Fetches multiple random meals (Used by SuggestedRecipe.vue)
export async function getRandomMeals(count = 6) {
  const meals = []
  let attempts = 0
  const maxAttempts = 50

  while (meals.length < count && attempts < maxAttempts) {
    attempts++
    const res = await fetch(`${BASE_URL}/random.php`)
    const data = await res.json()
    const meal = data.meals[0]
    if (!meal) continue
    if (meal.strCategory.toLowerCase().includes('beef') || meal.strMeal.toLowerCase().includes('beef')) {
      continue
    }
    meals.push(meal)
  }

  return meals
}

// export async function searchMeals(query) {
//   const res = await fetch(`${BASE_URL}/search.php?s=${query}`)
//   const data = await res.json()
//   return (data.meals || []).filter(
//     meal => !meal.strCategory.toLowerCase().includes('beef') &&
//             !meal.strMeal.toLowerCase().includes('beef')
//   )
// }

// 💡 RESTORED FUNCTION: Fetches a single meal by ID (Used by RecipeView.vue)
export async function getMealById(id) {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`)
  const data = await res.json()
  // This structure { meals: [{...}] } is standard for TheMealDB lookup
  return data
}
export const searchMeals = async (query) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    const data = await response.json()
    return data.meals
  } catch (error) {
    console.error('Error searching meals:', error)
    return null
  }
}