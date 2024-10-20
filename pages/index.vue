<script lang="ts" setup>
/**
 * A reference to the product slider component.
 */
const productSliderRef = ref<any>(null);

/**
 * Smoothly scrolls to the product slider section if the reference is available.
 * - Checks if the `productSliderRef` and `$el` exist before scrolling.
 */
const scrollToProductSlider = (): void => {
  productSliderRef.value &&
    productSliderRef.value.$el &&
    productSliderRef.value.$el.scrollIntoView({ behavior: "smooth" });
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
  <v-container>
    <sections-gift-card />
    <sections-info class="mt-12" />
    <product-slider ref="productSliderRef" class="mt-12" />
  </v-container>
</template>
