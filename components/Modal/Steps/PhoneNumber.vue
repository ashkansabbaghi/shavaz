<script setup lang="ts">
const emits = defineEmits(["submit"]);
const phoneNumber = defineModel<string | undefined>("phoneNumber");
const iconInfo = '<v-icon icon="mdi mdi-information" />';
const validPhone = ref(false);

const rulesPhoneNumber = {
  required: (value: string) => !!value || `  شماره موبایل الزامی است`,
  counter:  (value:string) => {
    const phoneRegex = /^09\d{9}$/
    if (phoneRegex.test(value)) return true
    return 'شماره موبایل نادرست است.'
  }
}

const submit = () => {
  console.log("submit");
 validPhone.value && emits("submit");
}

</script>

<template>
  <v-form
    v-model="validPhone"
    @submit.prevent="submit"
  >
    <div class="d-flex justify-space-between align-items-center">
      <div class="steps__one--container">
        <p class="steps__one--title text__gray">شماره موبایلت رو اینجا وارد کن</p>
        <v-text-field
          :rules="[rulesPhoneNumber.required, rulesPhoneNumber.counter]"
          variant="outlined"
          v-model="phoneNumber"
          label="شماره موبایل"
          class="steps__one--input"
          height="42"
          autofocus
        >
        </v-text-field>
      </div>

      <NuxtImg src="/images/phone.svg" class="steps__one--icon" />
    </div>

    <button class="btn-secondary w-full" type="submit">ارسال</button>
  </v-form>
</template>

<style lang="scss" scoped>
.steps__one {
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
    border-radius: 8px;
  }
}
</style>
