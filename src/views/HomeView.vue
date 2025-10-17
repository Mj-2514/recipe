<template>
  <div class="bg-yellow-50 min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-200 p-12 text-center relative overflow-hidden">
      <h1 class="text-5xl font-bold mb-4 text-white drop-shadow-lg">Welcome to Your Food Adventure!</h1>
      <p class="text-xl text-white/90 mb-6 drop-shadow-md">Learn new food recipes from around the world, right from your home kitchen 🍳</p>
      <SearchBar @selectRecipe="goToRecipe" />
      <!-- Optional hero image -->
      <img src="/hero-image.jpg" alt="Food Hero" class="w-full h-full object-cover rounded-xl" /> 
           alt="Food Hero" 
           class="absolute right-0 bottom-0 w-80 opacity-50 rounded-lg shadow-lg" />
    </section>

    <!-- Suggested Recipes Section -->
    <section class="max-w-7xl mx-auto py-12 px-6">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">Suggested Recipes</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <RecipeCard 
          v-for="recipe in suggestions" 
          :key="recipe.idMeal" 
          :recipe="recipe" 
          @click="goToRecipe(recipe.idMeal)" 
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getMealById } from '@/api/mealApi.js'
import RecipeCard from '@/components/RecipeCard.vue'
import SearchBar from '@/components/SearchBar.vue'
import { useMeta } from 'vue-meta'

// ✅ Page-level meta for SEO
useMeta({
  title: 'Home - My Recipe App',
  meta: [
    { name: 'description', content: 'Discover amazing recipes and cooking ideas.' },
    { name: 'keywords', content: 'recipes, cooking, food, vue, beginner' }
  ]
})

const suggestions = ref([])
const router = useRouter()

onMounted(async () => {
  suggestions.value = await getMealById(8) // more suggestions for menu feel
})

function goToRecipe(id) {
  router.push(`/recipe/${id}`)
}
</script>

<style scoped>
/* Optional: subtle scroll fade on hero image */
</style>
