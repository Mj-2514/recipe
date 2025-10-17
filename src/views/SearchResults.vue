<template>
  <div class="max-w-7xl mx-auto py-12 px-6">
    <h2 class="text-3xl font-bold text-gray-800 mb-8">
      Search Results for "{{ $route.query.q }}"
    </h2>
    
    <div v-if="loading" class="text-center py-8">
      <p class="text-gray-600">Searching recipes...</p>
    </div>
    
    <div v-else-if="searchResults.length === 0" class="text-center py-8">
      <p class="text-gray-600">No recipes found for "{{ $route.query.q }}"</p>
      <button 
        @click="$router.push('/')"
        class="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Back to Home
      </button>
    </div>
    
    <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <RecipeCard 
        v-for="recipe in searchResults" 
        :key="recipe.idMeal" 
        :recipe="recipe"
        @click="goToRecipe(recipe.idMeal)" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import RecipeCard from '@/components/RecipeCard.vue'
import { searchMeals } from '@/api/mealApi.js'

const route = useRoute()
const router = useRouter()
const searchResults = ref([])
const loading = ref(false)

const searchRecipes = async (query) => {
  if (!query) return
  
  loading.value = true
  try {
    const results = await searchMeals(query)
    searchResults.value = results || []
  } catch (error) {
    console.error('Search error:', error)
    searchResults.value = []
  } finally {
    loading.value = false
  }
}

const goToRecipe = (id) => {
  router.push({ name: 'Recipe', params: { id } })
}

// Search when component mounts or query changes
onMounted(() => {
  if (route.query.q) {
    searchRecipes(route.query.q)
  }
})

watch(() => route.query.q, (newQuery) => {
  if (newQuery) {
    searchRecipes(newQuery)
  }
})
</script>