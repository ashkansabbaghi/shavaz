<script lang="ts" setup></script>

<template>
  <v-sheet class="info" elevation="0">
    <v-card class="info__card" elevation="0">
      <v-card-title class="info__card--title text__primary">
        این پاییز، تو شاواز بریز و بپاشه...!
      </v-card-title>

      <v-card-text class="info__card--text text__primary">
        هدیه داریم برای همه، هم برای امروز هم برای جمعه سیاه. فقط کافیه شمارت رو
        وارد کنی و با انتخاب یا وارد کردن آدرست،هدیه شاواز و رومینا به دستت
        برسه! راستی همراه هدیه‌ات یه کد تخفیف ۲۵ درصدی، بدون هیچ قید و شرطی
        می‌گیری. ممنونیم که همراه شاوازی.
      </v-card-text>
    </v-card>

    <!-- image -->
    <div class="info__container-image">
      <NuxtImg
        width="45"
        class="info__container-image--product-left"
        src="/images/product-banner-3.png"
        alt="info-card-shopping-cart"
      />
      <NuxtImg
        width="45"
        class="info__container-image--product-right"
        src="/images/product-banner-2.png"
        alt="info-card-shopping-cart"
      />
      <NuxtImg
        class="info__container-image--cart"
        src="/images/shopping-cart.png"
        alt="info-card-shopping-cart"
      />
    </div>
  </v-sheet>
</template>

<style lang="scss" scoped>
.info {
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__card {
    padding: 64px 0;

  }

  &__container-image {
    position: relative;
    width: 287px;
    height: 320px;
    margin-left: 90px;

    &:hover {
      .info__container-image--product-left {
        transform: translateX(22px) translateY(80px) rotate(-15deg);
      }
      .info__container-image--product-right {
        transform: translateX(-25px) translateY(61px) rotate(15deg);
      }
    }

    &--product-left,
    &--product-right,
    &--cart {
      position: absolute;
      transition: transform 0.5s ease; // Add transition property
    }

    &--cart {
      bottom: 0;
      left: 0;
      width: 100%;
      // height: 100%;
      object-fit: contain;
    }

    &--product-left {
      width: 44px;
      height: 126px;
      top: 15.89px;
      left: 107px;
      transform: rotate(-45deg);
    }

    &--product-right {
      width: 46px;
      height: 97px;
      top: 65.11px;
      left: 210px;
      transform: rotate(30deg);
    }
  }

  &__card {
    max-width: 770px;

    &--title {
      font-size: 20px;
      font-weight: 600;
      line-height: 40px;
      text-align: justify;
    }

    &--text {
      font-size: 20px;
      font-weight: 300;
      line-height: 40px;
      text-align: justify;
    }
  }
}
</style>
