// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import RecipeView from '../views/RecipeView.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import HeroSection from '@/components/HeroSection.vue'
import SearchResults from '@/views/SearchResults.vue'

const routes = [
  { path: '/', name: 'Home', component: HeroSection },
  { path: '/recipe/:id', name: 'Recipe', component: RecipeView },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/search', name: 'SearchResults', component: SearchResults }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Make sure this is a default export
export default router