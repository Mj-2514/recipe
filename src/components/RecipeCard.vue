<template>
  <div
    v-if="recipe"
    class="relative bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer w-64"
    @click="RecipeView"
  >
    <div class="px-4 py-4 text-black font-semibold text-lg text-center">
      {{ recipe.strMeal }}
    </div>

    <img :src="recipe.strMealThumb" alt="Recipe" class="w-full h-56 object-cover" />

    <div class="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white flex items-center justify-center py-2 space-x-2">
      <span class="text-sm font-medium">See Complete Recipe</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  recipe: Object
})
</script>
