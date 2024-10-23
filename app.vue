<script setup lang="ts">
const description = 'محصولات رومینا برای مراقبت از پوست و مو با فرمولاسیون پیشرفته.' // for seo site 
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
