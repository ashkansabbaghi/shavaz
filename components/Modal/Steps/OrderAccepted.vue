<script setup lang="ts">
const emits = defineEmits(["submit"]);

const submit = () => {
  console.log("submit");
  emits("submit");
};
</script>

<template>
  <v-form @submit.prevent="submit">
    <div class="d-flex flex-column justify-center align-items-center mb-6">
      <div class="steps__six--container">
        <NuxtImg src="/images/accepted.svg" class="steps__six--icon" />

        <p class="steps__six--title text-center text__gray">
          شاوازی عزیز اطلاعات آدرست با موفقیت ذخیره شد. <br> هدیه‌‌‌‌‌‌ات به زودی به
          دستت می‌رسه. <br> میتونی وضعیتش رو از لیست سفارشات پیگیری کنی.
        </p>
      </div>
    </div>

    <button class="btn-secondary w-full" type="submit">ثبت سفارش</button>
  </v-form>
</template>

<style lang="scss" scoped>
.steps__six {
  &--container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    padding: 11px 0;
  }
  &--title {
    font-size: 16px;
    font-weight: 300;
    line-height: 32px;
  }

  &--icon {
    width: 140px;
    margin: auto;
    height: auto;
  }
}
</style>
