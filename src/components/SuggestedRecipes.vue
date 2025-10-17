<template>
  <section class="max-w-7xl mx-auto py-12 px-6">
    <h2 class="text-3xl font-bold text-gray-800 mb-8">Suggested Recipes</h2>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <RecipeCard 
        v-for="recipe in recipes" 
        :key="recipe.idMeal" 
        :recipe="recipe"
        @click="goToRecipe(recipe.idMeal)" 
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import RecipeCard from '@/components/RecipeCard.vue'
import { getRandomMeals } from '@/api/mealApi.js'


const recipes = ref([])
const router = useRouter()

onMounted(async () => {
  recipes.value = await getRandomMeals(8)
})

function goToRecipe(id) {
  router.push({ name: 'Recipe', params: { id } })
}
</script>
