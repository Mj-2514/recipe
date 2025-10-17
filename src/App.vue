<template>
  <div class="bg-yellow-50 min-h-screen">
    <Navbar />

    <!-- Show different components based on current route -->
    <div v-if="$route.path === '/'">
      <HeroSection />
      <SuggestedRecipes />
    </div>
    
    <RecipeView v-else-if="$route.path.startsWith('/recipe/')" />
    <About v-else-if="$route.path === '/about'" />
    <Contact v-else-if="$route.path === '/contact'" />
    <SearchResults v-else-if="$route.path === '/search'" />
    
    <!-- Fallback -->
    <div v-else class="text-center py-12">
      <p class="text-gray-600">Page not found</p>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import SuggestedRecipes from '@/components/SuggestedRecipes.vue'
import RecipeView from '@/views/RecipeView.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import SearchResults from './views/SearchResults.vue'
import { useRoute } from 'vue-router'




const $route = useRoute()
</script>