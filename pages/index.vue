<script lang="ts" setup>
import { useGoTo } from "vuetify";


const goTo = useGoTo();
const options = {
  container: "#goto-container-example",
  duration: 1000,
  easing: "easeInOutCubic",
  offset: -20,
};

const scrollToProductSlider = (): void => {
  goTo("#productSliderRef", options);

};

/**
 * Provide the `scrollToProductSlider` method to be used in child components (e.g., Banner.vue).
 * This allows the banner section to trigger smooth scrolling to the product slider.
 */
provide("scrollToProductSlider", scrollToProductSlider); // inject for Banner.vue
</script>

<template>
  <!-- https://www.figma.com/design/EL2nkO6PtqmeW72YEYmysG/Romina-Landing?node-id=0-1&node-type=canvas&t=cMmQtlNp2D3Ed4ut-0 -->
  <sections-banner />
  <v-container max-width="1440" class="pa-0 px-12">
    <sections-gift-card />
    <sections-info class="mt-12" />
    <product-slider id="productSliderRef" class="mt-12" />
  </v-container>
</template>
