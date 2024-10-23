<script setup lang="ts">
const emits = defineEmits(["submit"]);

const submit = () => {
  emits("submit");
};
</script>

<template>
  <v-form @submit.prevent="submit">
    <div class="d-flex flex-column justify-center align-items-center">
      <div class="steps__two--container">
        <p class="steps__two--title text-center text__gray">
          با شماره‌ی شما هنوز سفارشی در شاواز ثبت نشده ولی می‌‌‌‌‌‌‌‌تونی بعد از
          ثبت اولین سفارشت به این صفحه سر بزنی و هدیه‌‌‌‌‌‌‌‌ رومینا رو دریافت
          کنی.
        </p>
      </div>

      <NuxtImg src="/images/order-not-placed.svg" class="steps__two--icon" />
    </div>

    <button class="btn-secondary w-full" type="submit">ثبت سفارش</button>
  </v-form>
</template>

<style lang="scss" scoped>
.steps__two {
  &--container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 32px;
  }
  &--title {
    font-size: 16px;
    font-weight: 300;
    line-height: 32px;
  }

  &--icon {
    width: 120px;
    margin: 40px 64px;
    height: auto;
  }
}
</style>
