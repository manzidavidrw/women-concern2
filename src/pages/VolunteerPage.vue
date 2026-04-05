<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
    <div class="max-w-xl w-full text-center">

      <!-- Icon -->
      <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-brand-green/10 flex items-center justify-center text-4xl">
        🙌
      </div>

      <!-- Title -->
      <h1 class="text-3xl font-display font-black text-gray-900 mb-3">
        No Volunteer Opportunities Right Now
      </h1>

      <!-- Message -->
      <p class="text-gray-500 text-base leading-relaxed mb-6">
        We currently don’t have any open volunteer calls.
        But we’re always growing — and new opportunities may open soon.
      </p>

      <!-- Encouragement -->
      <p class="text-gray-500 text-sm mb-10">
        Please check back regularly or follow our updates to stay informed.
      </p>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row justify-center gap-4">

        <!-- Back Home -->
        <button @click="$emit('navigate', 'home')"
          class="bg-brand-green text-white font-bold px-6 py-3 rounded-full text-sm hover:brightness-110 transition-all shadow-md">
          ← Back to Home
        </button>

        <!-- Contact -->
        <button @click="$emit('navigate', 'contact-us')"
          class="border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-full text-sm hover:bg-gray-100 transition-all">
          Contact Us
        </button>

      </div>

      <!-- Optional subtle note -->
      <p class="text-xs text-gray-400 mt-10">
        Want to be notified? Reach out and we’ll keep you informed.
      </p>

    </div>
  </div>
</template>