<script setup lang="ts">
const emits = defineEmits(["submit"]);
const otpCode = defineModel<string | undefined>("otpCode");
const iconInfo = '<v-icon icon="mdi mdi-information" />';

const validOTPCode = computed(() => otpCode.value === "33333");

const submit = () => {
  console.log("submit");
  !validOTPCode.value && emits("submit");
};

const getOTPCode = () => {
  console.log("getOTPCode");
  otpCode.value = "";
};
</script>

<template>
  <v-form v-model="validOTPCode" @submit.prevent="submit">
    <div class="d-flex justify-space-between align-items-center">
      <div class="steps__three--container">
        <p class="steps__three--title text__gray">
          کد ارسال شده به شماره موبایلت رو وارد کن
        </p>
        <v-otp-input
          :length="5"
          :error="validOTPCode"
          variant="outlined"
          v-model="otpCode"
          height="48"
          max-width="288"
          autofocus
          focus-all
          class="steps__three--input"
          :class="{
            error: validOTPCode,
          }"
        >
        </v-otp-input>

        <button
          v-if="validOTPCode"
          class="steps__three--description--active"
          variant="text"
          :disabled="!validOTPCode"
          type="button"
          @click.prevent="getOTPCode"
        >
          دریافت مجدد
        </button>
        <button
          v-else
          class="steps__three--description "
          variant="text"
          type="button"
          :disabled="validOTPCode"
        >
          1:00 تا دریافت مجدد کد تایید
        </button>
      </div>

      <NuxtImg src="/images/otp.svg" class="steps__three--icon" />
    </div>

    <button class="btn-secondary w-full" type="submit">ارسال</button>
  </v-form>
</template>

<style lang="scss">
@use "~/assets/styles/main.scss" as *; // Import with wildcard to avoid prefixing

.steps__three {
  &--container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 40px;
    padding: 48px 0;
  }
  &--title {
    font-size: 16px;
    font-weight: 400;
  }

  &--icon {
    width: 110px;
    margin: 30px 64px;
    height: 134px;
  }
  &--input {
    width: 100%;
    justify-content: start;
    padding: 0;

    .v-field {
        color: $text-primary;
        border-radius: 8px;

        border: 1px solid $text-primary;
      }
    &.error {
      .v-field--error {
        color: $color-secondary;
        border-radius: 8px;

        background-color: #d8384d4d;
        border: 1px solid $color-secondary;
      }
    }
  }
  &--description {
    font-family: IRANSansXFaNum;
    font-size: 12px;
    font-weight: 500;

    &--active {
      font-size: 12px;
      font-weight: 700;
      color: $color-secondary;
    }
  }
}
</style>
