
<script setup>

</script>

<template>
  <v-card class="product">
    <!-- Discount Badge -->
    <div class="product--discount">٪۲۴</div>
    
    <!-- Product Image -->
    <NuxtImg
      class="product__image"
      src="/images/product-banner-1.png"
      alt="Product Image"
    />

    <!-- Product Info -->
    <v-card-text>
      <h3 class="product__title">
        کرم ضد آفتاب رومینا مدل Rose Beige-۲۵
      </h3>
      <p class="product--size">حجم ۵۰ میلی لیتر</p>

      <!-- Price -->
      <div class="product__price">
        <p class="product__price--new">۱۴۵,۰۰۰ تومان</p>
        <p class="product__price--old">۱۸۴,۰۳۰ تومان</p>
      </div>
    </v-card-text>

    <!-- Buy Button -->
    <v-card-actions>
      <v-btn class="buy-button" block color="primary">خرید</v-btn>
    </v-card-actions>
  </v-card>
</template>


<style lang="scss" scoped>
.product {
  max-width: 350px;
  position: relative;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &--discount {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #ff3d85;
    color: white;
    padding: 8px;
    font-size: 14px;
    font-weight: bold;
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
  }

  &__image {
    height: 200px;
    object-fit: contain;
  }

  &__title {
    font-size: 16px;
    font-weight: 500;
    color: #333;
    margin-bottom: 5px;
  }

  &--size {
    font-size: 14px;
    color: #777;
    margin-bottom: 15px;
  }

  &__price {
    display: flex;
    justify-content: space-between;
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
    font-size: 16px;
    font-weight: bold;
    background-color: #ff3d85;
    &:hover {
      background-color: #ff216b;
    }
  }
}
</style>
