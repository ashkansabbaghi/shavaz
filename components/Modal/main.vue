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

const nextStep = (numStep?: number) => {
  if (numStep) {
    step.value = numStep;
  } else step.value < 6 && step.value++;
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
  selectAddress: string;
  newAddress: string;
  accepted: string;
  finished: string;
};
const controllerFunc = (nameStep: keyof NameSteps) => {
  // send data phone to backend
  console.log(nameStep);

  if (nameStep === "phoneNumber" && phoneNumber.value) {
    console.log(nameStep, phoneNumber.value);
    nextStep();
  } else if (nameStep === "orderNotPlaced") {
    console.log(nameStep);
    nextStep();
  } else if (nameStep === "otpCode" && otpCode.value) {
    console.log(nameStep, otpCode.value);
    nextStep();
  } else if (nameStep === "selectAddress" && selectedAddress.value) {
    console.log(nameStep, selectedAddress.value);
    nextStep();
  } else if (nameStep === "newAddress") {
    console.log(nameStep, newAddress.value);
    nextStep(5);
  } else if (nameStep === "accepted") {
    console.log(nameStep);
    nextStep(6);
  } else if (nameStep === "finished") {
    console.log(nameStep);
    closeModal();
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
          <h4 class="modal__header__title">دریافت هدیه</h4>
          <v-btn
            density="compact"
            icon="mdi-window-close"
            elevation="0"
            width="25"
            height="24"
            @click.prevent="closeModal"
          ></v-btn>
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
          <modal-steps-otp-code
            v-model:otp-code="otpCode"
            @submit="controllerFunc('otpCode')"
          />
        </template>

        <template v-else-if="step === 4">
          <modal-steps-address-selection @submit="controllerFunc" />
        </template>

        <template v-else-if="step === 5">
          <modal-steps-new-address @submit="controllerFunc" />

        </template>
        <template v-else-if="step === 6">
          <modal-steps-order-accepted
            @submit="controllerFunc('finished')"
          />
        </template>
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
