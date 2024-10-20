
<script setup>

const model = ref(null);
const products = [
  { name: 'Product 1', image: '/images/product-card-1.jpg' },
  { name: 'Product 2', image: '/images/product-card-2.jpg' },
  { name: 'Product 3', image: '/images/product-card-3.jpg' },
  { name: 'Product 3', image: '/images/product-card-1.jpg' },
  { name: 'Product 3', image: '/images/product-card-2.jpg' },
  { name: 'Product 3', image: '/images/product-card-3.jpg' },
];

</script>


<template>
  <v-sheet
    class="mx-auto"
    elevation="8"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-success"
      show-arrows
    >
      <v-slide-group-item
        v-for="(n, i) in products"
        :key="i"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <lazy-product-item class="mr-5" />
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>
