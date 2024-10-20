
<script setup>

const model = ref(null);
const products = [
  { name: 'Product 1', image: 'https://via.placeholder.com/300x200' },
  { name: 'Product 2', image: 'https://via.placeholder.com/300x200' },
  { name: 'Product 3', image: 'https://via.placeholder.com/300x200' },
  { name: 'Product 3', image: 'https://via.placeholder.com/300x200' },
  { name: 'Product 3', image: 'https://via.placeholder.com/300x200' },
  { name: 'Product 3', image: 'https://via.placeholder.com/300x200' },
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
