<script lang="ts" setup></script>

<template>
  <v-card class="gift-card">
    <v-card-title class="gift-card__title text__primary">
      هدیه رومینا برای تو که دوست شاوازی
      <v-spacer></v-spacer>
    </v-card-title>

    <v-card-text class="gift-card__text text__primary">
      فقط کافیه شماره‌ات رو وارد کنی و با انتخاب یا وارد کردن آدرست، هدیه شاواز
      و رومینا به دستت برسه!
    </v-card-text>

    <v-card-actions class="gift-card__actions">
      <button class="gift-card__actions__btn btn-secondary">دریافت هدیه</button>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss">
.gift-card {
  margin: auto;
  margin-top: -60px;
  width: Fixed (1, 344px) px;
  padding: 25px 23px;
  gap: var(--Zero);
  border-radius: 2px 0px 0px 0px;
  opacity: 0px;
  box-shadow: 0px 4px 13px 0px #6161611a;

  &__title {
    font-size: 22px;
    font-weight: 600;
    line-height: 46px;
    text-align: center;
  }
  &__text {
    font-size: 20px;
    font-weight: 300;
    line-height: 46px;
    text-align: center;
  }
  &__actions {
    display: flex;
    justify-content: center;
    align-items: center;

    &__btn {
      font-size: 16px;
      font-weight: 700;
    }
  }
}
</style>
