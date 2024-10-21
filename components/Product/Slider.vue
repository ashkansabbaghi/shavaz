<script setup>

const model = ref(null);
const products = [
  {
    title: "کرم ضد آفتاب رومینا مدل Rose Beige-25 حجم 50 میلی لیتر",
    name: "Product 1",
    image: "/images/product-card-1.jpg",
    price: "۱۴۵,۰۰۰ ",
    price_old: null,
    discount: null,
  },
  {
    title: "سرم مو آبرسان و ترمیم کننده لورآل مدل Elseve حجم 100 میلی لیتر",
    name: "Product 2",
    image: "/images/product-card-2.jpg",
    price: "۱۸۰,۰۰۰ ",
    price_old: "۲۲۵,۰۰۰ ",
    discount: "٪۲۰",
  },
  {
    title: "ماسک صورت نوتروژینا مدل Deep Clean حجم 100 میلی لیتر",
    name: "Product 3",
    image: "/images/product-card-3.jpg",
    price: "۹۵,۰۰۰ ",
    price_old: "۱۲۰,۰۰۰ ",
    discount: "٪۲۱",
  },
  {
    title: "شامپو ضد ریزش مو گارنیه مدل Fructis حجم 400 میلی لیتر",
    name: "Product 4",
    image: null,
    price: "۱۶۰,۰۰۰ ",
    price_old: "۲۰۰,۰۰۰ ",
    discount: "٪۲۰",
  },
  {
    title: "کرم مرطوب کننده نیوآ مدل Soft حجم 200 میلی لیتر",
    name: "Product 5",
    image: "/images/product-card-5.jpg",
    price: "۱۱۰,۰۰۰ ",
    price_old: "۱۳۰,۰۰۰ ",
    discount: "٪۱۵",
  }
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
        <icon-arrow-right />
      </template>
      
      <template #next>
        <icon-arrow-left />
      </template>

      <v-slide-group-item
        v-for="(product, i) in products"
        :key="i"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <lazy-product-item :product="product" class="mr-5" />
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>
