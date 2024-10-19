<script setup lang="ts">
const description = 'black friday' // for seo site 
useHead({
  title : 'SHAVAZ',
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' }, // change icon tab browser
  ],
  meta: [
    { name: 'description', content: description }
  ],
})
</script>

<template>
  <NuxtLayout>
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>
