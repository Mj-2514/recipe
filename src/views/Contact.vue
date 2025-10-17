<template>
  <div class="min-h-screen bg-yellow-50 py-12">
    <div class="max-w-3xl mx-auto px-6 space-y-8">
      <h1 class="text-4xl font-bold text-center text-indigo-700">Contact Us</h1>
      <p class="text-center text-gray-700">
        Have questions, feedback, or want to collaborate? Fill out the form below and we’ll get back to you!
      </p>

      <form class="bg-white p-8 rounded-lg shadow space-y-6">
        <div>
          <label class="block text-gray-700 font-medium mb-1" for="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1" for="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1" for="message">Message</label>
          <textarea id="message" rows="5" placeholder="Your Message" class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
        </div>

        <button type="submit" class="w-full bg-indigo-600 text-white px-4 py-2 rounded font-semibold hover:bg-indigo-700 transition">
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
</script>
