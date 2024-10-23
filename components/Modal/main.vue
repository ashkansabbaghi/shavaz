<script lang="ts" setup>
import type { Address , NameSteps } from "~/types";

const isOpen = defineModel<boolean>("isOpen");
const step = ref('phoneNumber');
const phoneNumber = ref("");
const otpCode = ref("");
const selectedAddress = ref(null);

const isLoading = ref(false);

const addresses: Address[] = reactive([
  {
    id: 1,
    province: "تهران",
    city: "تهران",
    postalCode: "1234567890",
    buildingNumber: "11",
    unitNumber: "2",
    address:
      "بزرگراه باکری جنوب کوی ارم خیابان شهیدمحسن یعقوبی(بهار جنوبی) نبش کوچه شهید اکبر اصغر زاده",
    receiver: "کیمیا علی محمدی",
  },
  {
    id: 2,
    province: "تهران",
    city: "تهران",
    postalCode: "2345678901",
    buildingNumber: "5",
    unitNumber: "3",
    address: "خیابان ولیعصر شمالی، بالاتر از میدان ونک، کوچه شایسته، پلاک ۵",
    receiver: "علی احمدی",
  },
  {
    id: 3,
    province: "تهران",
    city: "تهران",
    postalCode: "3456789012",
    buildingNumber: "11",
    unitNumber: "1",
    address: "خیابان شریعتی، نرسیده به پل صدر، خیابان معلم، پلاک ۱۱",
    receiver: "سارا مرادی",
  },
  {
    id: 4,
    province: "تهران",
    city: "تهران",
    postalCode: "2345678901",
    buildingNumber: "5",
    unitNumber: "3",
    address: "خیابان ولیعصر شمالی، بالاتر از میدان ونک، کوچه شایسته، پلاک ۵",
    receiver: "علی احمدی",
  },
  {
    id: 5,
    province: "تهران",
    city: "تهران",
    postalCode: "3456789012",
    buildingNumber: "11",
    unitNumber: "1",
    address: "خیابان شریعتی، نرسیده به پل صدر، خیابان معلم، پلاک ۱۱",
    receiver: "سارا مرادی",
  },
]);

const newAddress: Address = reactive({
  // id: 0,
  province: "",
  city: "",
  postalCode: "",
  buildingNumber: "",
  unitNumber: "",
  address: "",
  receiver: "اشکان صباغی",
});

const setAddressesFromClientSide = () => {
  const storedAddresses = JSON.parse(
    localStorage.getItem("addressList") || "[]"
  );

  if (storedAddresses.length > 0) {
    addresses.splice(0, addresses.length, ...storedAddresses);
  }
};

onMounted(() => {
  setAddressesFromClientSide();
});

const addNewAddressInClientSide = () => {
  const newAddressCopy = {
    ...newAddress,
  };
  addresses.push(newAddressCopy);
  localStorage.setItem("addressList", JSON.stringify(addresses));
  setAddressesFromClientSide();

};


const resetModal = () => {
  step.value = '';
  phoneNumber.value = "";
  otpCode.value = "";
  selectedAddress.value = null;

  newAddress.province = "";
  newAddress.city = "";
  newAddress.postalCode = "";
  newAddress.buildingNumber = "";
  newAddress.unitNumber = "";
  newAddress.address = "";
};

const closeModal = () => {
  isOpen.value = false;
  resetModal();
};

const goToStep = (nameStep?: string) => {
  nameStep && (step.value = nameStep);
};

const controllerFunc = (nameStep: keyof NameSteps) => {
  // send data phone to backend
  console.log(nameStep);

  if (nameStep === "phoneNumber" && phoneNumber.value) {
    console.log(nameStep, phoneNumber.value);
    goToStep("orderNotPlaced");
  } else if (nameStep === "orderNotPlaced") {
    console.log(nameStep);
    goToStep("otpCode");
  } else if (nameStep === "otpCode" && otpCode.value) {
    console.log(nameStep, otpCode.value);
    goToStep("selectAddress");
  } else if (nameStep === "selectAddress" && selectedAddress.value) {
    console.log(nameStep, selectedAddress.value);
    goToStep("accepted");
  } else if (nameStep === "newAddress") {
    console.log(nameStep);
    goToStep("newAddress");
  } else if (nameStep === "accepted") {
    console.log(nameStep);
    goToStep('accepted');
  } else if (nameStep === "finished") {
    console.log(nameStep);
    closeModal();

  } else if (nameStep === "addNewAddress") {
    console.log(nameStep);
    addNewAddressInClientSide();
    goToStep("selectAddress");
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
        <template v-if="step === 'phoneNumber'">
          <modal-steps-phone-number
            v-model:phone-number="phoneNumber"
            @submit="controllerFunc('phoneNumber')"
          />
        </template>

        <!-- OrderNotPlaced.vue -->
        <template v-else-if="step === 'orderNotPlaced'">
          <modal-steps-order-not-placed
            @submit="controllerFunc('orderNotPlaced')"
          />
        </template>

        <!-- OTPCode.vue -->
        <template v-else-if="step === 'otpCode'">
          <modal-steps-otp-code
            v-model:otp-code="otpCode"
            @submit="controllerFunc('otpCode')"
          />
        </template>
        <!-- AddressSelection.vue -->
        <template v-else-if="step === 'selectAddress'">
          <modal-steps-address-selection
            @submit="controllerFunc"
            :addresses="addresses"
          />
        </template>
        <!-- NewAddress.vue -->
        <template v-else-if="step === 'newAddress'">
          <modal-steps-new-address
            @submit="controllerFunc"
            v-model:new-address="newAddress"
          />
        </template>
        <template v-else-if="step === 'accepted'">
          <!-- OrderAccepted.vue -->
          <modal-steps-order-accepted @submit="controllerFunc('finished')" />
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
