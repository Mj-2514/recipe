<template>
  <nav class="bg-white sticky top-0 z-50 mb-3 mt-2 shadow-md">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 text-2xl font-bold text-indigo-600 cursor-pointer" @click="goHome">
          RecipeBook
        </div>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex space-x-8">
          <RouterLink to="/" class="text-gray-700 hover:text-indigo-600 font-medium">Home</RouterLink>
          <RouterLink to="/about" class="text-gray-700 hover:text-indigo-600 font-medium">About</RouterLink>
          <RouterLink to="/contact" class="text-gray-700 hover:text-indigo-600 font-medium">Contact</RouterLink>
        </div>

        <!-- Right Icons -->
        <div class="flex items-center space-x-4">
          <!-- Search Bar -->
          <div class="relative">
            <!-- Search Input (shown when search is active) -->
            <input 
              v-if="showSearchInput"
              ref="searchInput"
              v-model="searchQuery"
              @keyup.enter="performSearch"
              @blur="hideSearchInput"
              type="text" 
              placeholder="Search recipes..." 
              class="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            />
            
            <!-- Search Button -->
            <button 
              @click="toggleSearchInput"
              class="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              :class="{ 'text-indigo-600': showSearchInput }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"/>
              </svg>
            </button>
          </div>

          <div class="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-semibold">
            U
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-gray-600 hover:text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isOpen" class="md:hidden mt-2 space-y-2">
        <RouterLink to="/" class="block px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium">Home</RouterLink>
        <RouterLink to="/about" class="block px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium">About</RouterLink>
        <RouterLink to="/contact" class="block px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium">Contact</RouterLink>
        
        <!-- Mobile Search -->
        <div class="px-4 py-2">
          <input 
            v-model="searchQuery"
            @keyup.enter="performSearch"
            type="text" 
            placeholder="Search recipes..." 
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const isOpen = ref(false)
const showSearchInput = ref(false)
const searchQuery = ref('')
const searchInput = ref(null)
const router = useRouter()

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function goHome() {
  router.push('/')
}

function toggleSearchInput() {
  showSearchInput.value = !showSearchInput.value
  if (showSearchInput.value) {
    nextTick(() => {
      searchInput.value?.focus()
    })
  }
}

function hideSearchInput() {
  // Small delay to allow for click events to register
  setTimeout(() => {
    if (!searchQuery.value) {
      showSearchInput.value = false
    }
  }, 200)
}

function performSearch() {
  if (searchQuery.value.trim()) {
    router.push({ 
      name: 'SearchResults', 
      query: { q: searchQuery.value.trim() } 
    })
    // Clear search and hide input after navigation
    searchQuery.value = ''
    showSearchInput.value = false
    isOpen.value = false // Close mobile menu
  }
}
</script>