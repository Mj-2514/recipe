<template>
  <div v-if="recipe" class="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-8">
    <!-- Back Button -->
    <div class="max-w-6xl mx-auto px-4 mb-6">
      <button 
        @click="goBack"
        class="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-gray-700 hover:text-orange-600 font-semibold border border-orange-200"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        Back to Recipes
      </button>
    </div>

    <!-- Recipe Header -->
    <div class="max-w-6xl mx-auto px-4">
      <div class="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:shadow-2xl transition-all duration-500">
        <div class="flex flex-col lg:flex-row">
          <!-- Recipe Image -->
          <div class="lg:w-1/2 relative">
            <img 
              :src="recipe.strMealThumb" 
              :alt="recipe.strMeal" 
              class="w-full h-96 lg:h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute top-6 left-6">
              <span class="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                🍽️ Featured Recipe
              </span>
            </div>
          </div>

          <!-- Recipe Info -->
          <div class="lg:w-1/2 p-8 lg:p-12 bg-gradient-to-br from-white to-amber-50">
            <div class="space-y-6">
              <h1 class="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                {{ recipe.strMeal }}
              </h1>
              
              <div class="flex flex-wrap gap-4">
                <div class="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <span class="text-green-600">📊</span>
                  <span class="font-semibold text-green-700">{{ recipe.strCategory }}</span>
                </div>
                <div class="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                  <span class="text-blue-600">🌍</span>
                  <span class="font-semibold text-blue-700">{{ recipe.strArea }}</span>
                </div>
              </div>

              <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p class="text-gray-600 italic text-lg leading-relaxed">
                  {{ history }}
                </p>
              </div>

              <!-- Quick Stats -->
              <div class="grid grid-cols-2 gap-4 pt-4">
                <div class="text-center p-4 bg-white rounded-xl shadow-sm border border-orange-100">
                  <div class="text-2xl mb-1">⏱️</div>
                  <div class="text-sm text-gray-600">Prep Time</div>
                  <div class="font-bold text-gray-800">30 mins</div>
                </div>
                <div class="text-center p-4 bg-white rounded-xl shadow-sm border border-orange-100">
                  <div class="text-2xl mb-1">👨‍👩‍👧‍👦</div>
                  <div class="text-sm text-gray-600">Servings</div>
                  <div class="font-bold text-gray-800">4 people</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Ingredients Section -->
      <div class="mt-12 bg-white rounded-3xl shadow-xl p-8 lg:p-12 transform hover:shadow-2xl transition-all duration-500">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <span class="text-2xl">🧂</span>
          </div>
          <h2 class="text-3xl font-bold text-gray-800">Ingredients</h2>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div 
            v-for="(item, index) in ingredients" 
            :key="index"
            class="flex items-center gap-4 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors duration-300 border border-orange-200"
          >
            <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
              <span class="text-orange-500 text-sm font-bold">{{ index + 1 }}</span>
            </div>
            <span class="text-gray-700 font-medium">{{ item }}</span>
          </div>
        </div>
      </div>

      <!-- Instructions Section -->
      <div class="mt-12 bg-white rounded-3xl shadow-xl p-8 lg:p-12 transform hover:shadow-2xl transition-all duration-500">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <span class="text-2xl">👩‍🍳</span>
          </div>
          <h2 class="text-3xl font-bold text-gray-800">Cooking Instructions</h2>
        </div>
        
        <div class="prose prose-lg max-w-none">
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
            <p class="text-gray-800 leading-relaxed text-lg whitespace-pre-line font-medium">
              {{ recipe.strInstructions }}
            </p>
          </div>
        </div>
      </div>

      <!-- Tips & Notes -->
      <div class="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl shadow-2xl p-8 lg:p-12 text-white">
        <div class="flex items-center gap-4 mb-6">
          <span class="text-3xl">💡</span>
          <h2 class="text-2xl font-bold">Chef's Tips</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white bg-opacity-20 p-6 rounded-2xl backdrop-blur-sm">
            <h3 class="text-black font-bold text-lg mb-2">🍳 Pro Tip</h3>
            <p class="text-black">Let the ingredients come to room temperature before cooking for more even results.</p>
          </div>
          <div class="bg-white bg-opacity-20 p-6 rounded-2xl backdrop-blur-sm">
            <h3 class="text-black font-bold text-lg mb-2">🌶️ Spice Level</h3>
            <p class="text-black">Adjust the seasoning to your taste - feel free to add more herbs and spices!</p>
          </div>
        </div>
      </div>

      <!-- Share Section -->
      <div class="mt-12 text-center">
        <p class="text-gray-600 mb-4">Love this recipe? Share it with friends! 🎉</p>
        <div class="flex justify-center gap-4">
          <button class="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300">
            📘 Share on Facebook
          </button>
          <button class="bg-blue-400 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition-colors duration-300">
            🐦 Share on Twitter
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Loading State -->
  <div v-else class="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
    <div class="text-center">
      <div class="w-20 h-20 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p class="text-2xl font-bold text-gray-700 mb-2">Cooking up something delicious...</p>
      <p class="text-gray-600">Fetching your recipe details 🍳</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getMealById } from '@/api/mealApi.js'
import { useMeta } from 'vue-meta'

const route = useRoute()
const router = useRouter()
const recipe = ref(null)
const ingredients = ref([])
const history = ref(
  "This culinary masterpiece has been passed down through generations, celebrated for its perfect balance of flavors and heartwarming appeal that brings people together around the table."
)

// Reactive SEO meta
useMeta(() => ({
  title: recipe.value ? `${recipe.value.strMeal} - My Recipe App` : 'Loading Recipe...',
  meta: [
    { name: 'description', content: recipe.value ? `Learn how to cook ${recipe.value.strMeal}` : 'Fetching recipe...' },
    { name: 'keywords', content: recipe.value ? `recipe, cooking, ${recipe.value.strMeal}` : 'recipe, cooking' }
  ]
}))

onMounted(async () => {
  try {
    const response = await getMealById(route.params.id)
    const meal = response?.meals?.[0]
    if (meal) {
      recipe.value = meal
      const tempIngredients = []
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`]
        const measure = meal[`strMeasure${i}`]
        if (ingredient && ingredient.trim()) {
          tempIngredients.push(`${ingredient} - ${measure}`)
        }
      }
      ingredients.value = tempIngredients
    }
  } catch (err) {
    console.error(err)
  }
})

function goBack() {
  router.back()
}
</script>




<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #fed7aa;
}

::-webkit-scrollbar-thumb {
  background: #f97316;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ea580c;
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: color, background-color, border-color, transform, box-shadow;
  transition-duration: 300ms;
}
</style>