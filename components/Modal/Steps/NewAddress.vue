<script setup lang="ts">
import type { Address } from "~/types";
const emits = defineEmits(["submit"]);

const newAddress = defineModel<Address>('newAddress');
const valid = ref(false);

const rules = {
  province: [(v: string) => !!v || "استان را انتخاب کنید"],
  city: [(v: string) => !!v || "شهر را انتخاب کنید"],
  postalCode: [
    (v: string) => !!v || "کد پستی را وارد کنید",
    (v: string) => v.length === 10 || "کد پستی نادرست است.",
  ],
  buildingNumber: [(v: string) => !!v || "پلاک را وارد کنید"],
  unitNumber: [(v: string) => !!v || "واحد را وارد کنید"],
  address: [(v: string) => !!v || "آدرس را وارد کنید"],
};

const submit = () => {
 valid.value && emits("submit", "addNewAddress");
};

</script>

<template>
  <v-form v-model="valid" @submit.prevent="submit">
    <div class="steps__new__address__container ga-3 mb-6">
      <!-- header steps -->
      <div class="steps__new__address__container--header mt-3">
        <h4 class="steps__new__address__container--header--title">
          آدرس تحویل هدیه‌‌‌‌‌‌‌‌‌‌‌‌ات رو انتخاب کن
        </h4>
      </div>

      <div class="d-flex flex-row justify-center ga-3">
        <!-- province -->
        <v-combobox
        v-if="newAddress"
          :rules="rules.province"
          label=" استان *"
          :items="['البرز', 'تهران', 'قزوین', 'اراک', 'مشهد', 'خوزستان']"
          height="42"
          variant="outlined"
          class="steps__new__address--input custom-input"
          v-model="newAddress.province"
          hide-details="auto"
        ></v-combobox>

        <!-- city -->
        <v-combobox
        v-if="newAddress"
          :rules="rules.city"
          label=" شهر *"
          :items="['کرج', 'هشتگرد', 'نظرآباد', 'کردان']"
          variant="outlined"
          class="steps__new__address--input custom-input"
          v-model="newAddress.city"
          hide-details="auto"
        ></v-combobox>
      </div>
      <div class="d-flex flex-row justify-center ga-3">
        <v-text-field
        v-if="newAddress"
          :rules="rules.postalCode"
          class="custom-input"
          label="کد پستی *"
          variant="outlined"
          v-model="newAddress.postalCode"
          hide-details="auto"

        ></v-text-field>

        <v-text-field
        v-if="newAddress"
          :rules="rules.buildingNumber"
          class="custom-input"
          label="پلاک *"
          variant="outlined"
          v-model="newAddress.buildingNumber"
          hide-details="auto"

        ></v-text-field>

        <v-text-field
        v-if="newAddress"
          :rules="rules.unitNumber"
          class="custom-input"
          label="واحد"
          variant="outlined"
          v-model="newAddress.unitNumber"
          hide-details="auto"

        ></v-text-field>
      </div>
      <v-textarea
      v-if="newAddress"
        :rules="rules.address"
        auto-grow
        label="تکمیل آدرس *"
        variant="outlined"
        v-model="newAddress.address"
        hide-details="auto"

      ></v-textarea>
    </div>

    <button class="btn-secondary w-full" type="submit">ثبت آدرس</button>
  </v-form>
</template>

<style lang="scss">
@use "~/assets/styles/main.scss" as *; // Import with wildcard to avoid prefixing
.steps__new__address {
  &--input {
    width: 100%;
  }
  &__container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 0px;

    &--header {
      width: 100%;
      display: inline-flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;

      &--title {
        font-size: 16px;
        font-weight: 400;
      }

      &--button {
        font-size: 16px;
        font-weight: 800;
        color: $color-secondary;
      }
    }

    &--card {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      border-radius: 8px;
      border: 1px solid $text-gray;
      padding: 0 7px;

      &--content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 16px 7px !important;
        gap: 8px;

        font-size: 14px;
        font-weight: 400;
      }

      &--icon {
        width: 24px;
        height: 24px;
      }

      // Styles for when the card is active
      &.active {
        border-color: $color-secondary; // Border color when active
        color: $color-secondary; // Text color when active

        .steps__four__container--card--content {
          p,
          span {
            color: $color-secondary;
          }
        }
      }
    }
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
