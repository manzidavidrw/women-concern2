<template>
  <svg :width="size" :height="size" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="19" cy="19" r="19" fill="#1E4D35" />
    <circle cx="19" cy="12" r="4.2" fill="#D4A017" />
    <path d="M10 31c0-7 18-7 18 0" stroke="#D4A017" stroke-width="2.2" stroke-linecap="round" fill="none" />
    <path d="M15 19l4 5.5 4-5.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: Number, default: 38 }
})
</script>
