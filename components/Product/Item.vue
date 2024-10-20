<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: () => ({
      title: "کرم ضد آفتاب رومینا مدل Rose Beige-25 حجم 50 میلی لیتر",
      name: "Product 1",
      image: "/images/product-card-1.jpg",
      price: "۱۴۵,۰۰۰ ",
      price_old: "۱۸۴,۰۳۰ ",
      discount: "٪۲۴",
    }),
  },
});
</script>

<template>
  <v-card class="product">
    <!-- Discount Badge -->
    <div class="product__discount">
      <p class="product__discount--text">{{ product.discount }}</p>
    </div>

    <!-- Product Image -->
    <NuxtImg class="product__image" :src="product.image" :alt="product.name" />

    <!-- Product Info -->
    <v-card-text class="pa-6">
      <h3 class="product__title" v-text="product.title" />

      <!-- Price -->
      <div class="d-flex justify-center mt-4">
        <IconToman />
        <div class="product__price">
          <p class="product__price--new" v-text="product.price"></p>
          <p class="product__price--old" v-text="product.price_old"></p>
        </div>
      </div>
      <v-btn class="buy-button" block variant="outlined">خرید</v-btn>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.product {
  width: 370px;
  height: auto;
  border-radius: 2px;
  text-align: center;
  box-shadow: 0px 2px 4px 0px #6161611a;

  &__discount {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #ff3d85;
    color: white;
    padding: 30px;
    font-size: 14px;
    font-weight: bold;
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
    transform: rotate(-90deg);

    &--text {
      position: absolute;
      top: 30px;
      left: 30px;
      font-size: 15px;
      font-weight: bold;
      color: white;
      transform: rotate(90deg);
    }
  }

  &__image {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  &__title {
    font-size: 16px;
    font-weight: 500;
    padding: 4px;
  }

  &--size {
    font-size: 14px;
    color: #777;
    margin-bottom: 15px;
  }

  &__price {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;

    &--new {
      font-size: 18px;
      font-weight: bold;
      color: #ff3d85;
    }

    &--old {
      font-size: 14px;
      color: #999;
      text-decoration: line-through;
    }
  }

  .buy-button {
    height: 56px;
    border: 2px solid var(--Border-Border, #cbcbcb);
    padding: 16px 32px;
    border-radius: 2px;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
}
</style>
