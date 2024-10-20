<script setup>
// import IconArrowLeft from "/images/arrow-left.svg";
// import IconArrowRight from "/images/arrow-right.svg";

const model = ref(null);
const products = [
  { name: "Product 1", image: "/images/product-card-1.jpg" },
  { name: "Product 2", image: "/images/product-card-2.jpg" },
  { name: "Product 3", image: "/images/product-card-3.jpg" },
  { name: "Product 3", image: "/images/product-card-1.jpg" },
  { name: "Product 3", image: "/images/product-card-2.jpg" },
  { name: "Product 3", image: "/images/product-card-3.jpg" },
];
</script>

<template>
  <v-sheet class="mx-auto" max-width="100%" elevation="0">
    <v-slide-group
      v-model="model"
      class="ga-8"
      selected-class="bg-success"
      show-arrows
    >
      <template #prev>
        <icon-arrow-left />
      </template>

      <template #next>
        <icon-arrow-right />
      </template>

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
