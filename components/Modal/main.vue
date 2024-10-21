<script lang="ts" setup>
const isOpen = defineModel<boolean>("isOpen");
const step = ref(1);
const phoneNumber = ref("");
const otpCode = ref("");
const selectedAddress = ref(null);
const newAddress = ref("");

//rules
const rulesPhoneNumber = {
  required: (value: string) => !!value || "شماره موبایل الزامی است",
  counter: (value: string) => value.length <= 11 || "شماره موبایل نادرست است",
};

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
        <!-- step 1 : give phone number -->
        <div v-if="step === 1">
          <div class="d-flex justify-space-between align-items-center">
            <div class="modal__steps__one--container">
              <p class="modal__steps__one--title">
                شماره موبایلت رو اینجا وارد کن
              </p>
              <v-text-field
                :rules="[rulesPhoneNumber.required, rulesPhoneNumber.counter]"
                variant="outlined"
                v-model="phoneNumber"
                label="شماره موبایل"
                class="modal__steps__input"
                height="42"
                :hint="
                  phoneNumber.length > 11 ? 'شماره موبایل باید 11 رقم باشد' : ''
                "
              >
                <template #details>
                  <v-spacer />

                  See our <a href="#">Terms and Service</a>
                </template>
              </v-text-field>
            </div>

            <NuxtImg src="/images/phone.svg" class="modal__steps__one--icon" />
          </div>

          <button class="btn-secondary w-full" @click="nextStep()">
            ادامه
          </button>
        </div>
        <div v-else-if="step === 2">
          <!-- Step 2: سفارش ثبت نشده -->
          <p>شما سفارشی ثبت نکردید.</p>
          <v-btn @click="nextStep()">ثبت سفارش</v-btn>
        </div>
        <div v-else-if="step === 3">
          <!-- Step 3: کد OTP -->
          <v-text-field v-model="otpCode" label="کد OTP"></v-text-field>
          <v-btn @click="nextStep()">ادامه</v-btn>
        </div>
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

      <!-- <v-card-actions>
        <v-btn block>Click me</v-btn>
      </v-card-actions> -->
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
    &__input {
      width: 100%;
      border-radius: 8px;
    }

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
