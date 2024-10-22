<script lang="ts" setup>
const isOpen = defineModel<boolean>("isOpen");
const step = ref(1);
const phoneNumber = ref("");
const otpCode = ref("");
const selectedAddress = ref(null);
const newAddress = ref("");

//rules

const addresses = ref(["آدرس ۱", "آدرس ۲", "آدرس ۳"]); // get object
const isLoading = ref(false);

const nextStep = () => {
  if (step.value < 6) {
    step.value++;
  }
};

const goToNewAddress = () => {
  step.value = 5;
};

const resetModal = () => {
  step.value = 1;
  phoneNumber.value = "";
  otpCode.value = "";
  selectedAddress.value = null;
  newAddress.value = "";
};

const closeModal = () => {
  isOpen.value = false;
  resetModal();
};

type NameSteps = {
  phoneNumber: string;
  orderNotPlaced: string;
  otpCode: string;
};
const controllerFunc = (nameStep: keyof NameSteps) => {
  // send data phone to backend
  if (nameStep === "phoneNumber" && phoneNumber.value) {
    console.log(nameStep, phoneNumber.value);
    nextStep();
  } else if (nameStep === "orderNotPlaced") {
    console.log(nameStep);
    nextStep();
  } else if (nameStep === "otpCode" && otpCode.value) {
    console.log(nameStep, otpCode.value);
    nextStep();
  }
};
</script>

<template>
  <v-dialog
    v-model="isOpen"
    max-width="600"
    transition="dialog-bottom-transition"
    persistent
    class="modal"
  >
    <v-card :loading="isLoading" class="rounded-lg">
      <!-- header card -->
      <template v-slot:title>
        <div class="d-flex justify-space-between modal__header">
          <v-btn
            density="compact"
            icon="mdi-window-close"
            elevation="0"
            width="25"
            height="24"
            @click.prevent="closeModal"
          ></v-btn>
          <h4 class="modal__header__title">دریافت هدیه</h4>
        </div>
      </template>

      <!-- steps -->
      <div class="modal__steps">
        <!-- PhoneNumber.vue -->
        <template v-if="step === 1">
          <modal-steps-phone-number
            v-model:phone-number="phoneNumber"
            @submit="controllerFunc('phoneNumber')"
          />
        </template>

        <!-- OrderNotPlaced.vue -->
        <template v-else-if="step === 2">
          <modal-steps-order-not-placed
            @submit="controllerFunc('orderNotPlaced')"
          />
        </template>

        <!-- OTPCode.vue -->
        <template v-else-if="step === 3">
          <modal-steps-otp-code v-model:otp-code="otpCode" @submit="controllerFunc('otpCode')" />
        </template>

        <div v-else-if="step === 4">
          <!-- Step 4: انتخاب آدرس -->
          <p>انتخاب آدرس:</p>
          <v-select
            v-model="selectedAddress"
            :items="addresses"
            label="انتخاب آدرس"
          ></v-select>
          <v-btn @click="nextStep()">ادامه</v-btn>
          <v-btn @click="goToNewAddress()">اضافه کردن آدرس جدید</v-btn>
        </div>
        <div v-else-if="step === 5">
          <!-- Step 5: ثبت آدرس جدید -->
          <v-text-field v-model="newAddress" label="آدرس جدید"></v-text-field>
          <v-btn @click="nextStep()">ادامه</v-btn>
        </div>
        <div v-else-if="step === 6">
          <!-- Step 6: ثبت هدیه -->
          <p>ثبت سفارش و دریافت هدیه شما انجام شد!</p>
        </div>
      </div>

      <!-- end content -->
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
.modal {
  &__header {
    &__title {
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
    }
  }
  &__steps {
    padding: 24px;

    &__submit {
      width: 100%;
    }

    &__one {
      width: 100%;

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
        font-weight: 400;
      }

      &--icon {
        width: 110px;
        margin: 30px 64px;
        height: 134px;
      }
    }
  }
}
</style>
