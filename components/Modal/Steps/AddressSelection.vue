<script setup lang="ts">
import type { Address } from "~/types";
const emits = defineEmits(["submit"]);
const props = defineProps({
  addresses: {
    type: Array as PropType<Address[]>,
    required: true,
  },
});
const showAll = ref(false);

const visibleAddresses = computed(() => {
  // const addressReversed= props.addresses.reverse();
  return showAll.value ? props.addresses : props.addresses.slice(0, 3);
  
});

const submit = () => {
  emits("submit", "accepted");
};

const newAddress = () => {
  emits("submit", "newAddress");
};
</script>

<template>
  <v-form @submit.prevent="submit">
    <div class="steps__four__container">
      <!-- header steps -->
      <div class="steps__four__container--header">
        <h4 class="steps__four__container--header--title">
          آدرس تحویل هدیه‌‌‌‌‌‌‌‌‌‌‌‌ات رو انتخاب کن
        </h4>
        <button
          type="button"
          class="steps__four__container--header--button"
          @click.prevent="newAddress"
        >
          <v-icon icon="mdi-plus-box" size="small"></v-icon>
          آدرس جدید
        </button>
      </div>

      <div class="d-flex flex-column justify-center">
        <v-item-group
          selected-class="bg-primary"
          class="d-flex flex-column ga-3"
        >
          <v-item
            v-for="(address , indexAddress) in visibleAddresses"
            :key="indexAddress"
            v-slot="{ isSelected, selectedClass, toggle }"
          >
            <v-card
              elevation="0"
              class="steps__four__container--card"
              :class="{ active: isSelected }"
              @click="toggle"
            >
              <IconLocation
                class="steps__four__container--card--icon"
                :color="isSelected ? '#d72585' : '#3c3c3c'"
              />
              <div class="steps__four__container--card--content">
                <p>{{ address?.address }}</p>
                <p>
                  <span class="font-bold">گیرنده :</span> {{ address?.receiver }}
                </p>
              </div>
            </v-card>
          </v-item>
          <!-- more btn -->
          <div class="d-flex justify-end">
            <button
              type="button"
              class="steps__four__container--more"
              @click="showAll = !showAll"
            >
              {{ !showAll ? "مشاهده بیشتر" : "بستن" }}
              <v-icon
                :icon="!showAll ? 'mdi-chevron-down' : 'mdi-chevron-up'"
              ></v-icon>
            </button>
          </div>
        </v-item-group>
      </div>
    </div>

    <button class="btn-secondary w-full" type="submit">ثبت و ارسال هدیه</button>
  </v-form>
</template>

<style lang="scss">
@use "~/assets/styles/main.scss" as *; // Import with wildcard to avoid prefixing
.steps__four {
  &__container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 24px;
    margin-bottom: 24px;

    &--header {
      width: 100%;
      display: inline-flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &--title {
        font-size: 16px;
        font-weight: 400;
      }

      &--button {
        font-size: 16px;
        font-weight: bold !important;
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

    &--more {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 16px 0;
      font-size: 14px;
      font-weight: 400;
      color: $color-secondary;
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
