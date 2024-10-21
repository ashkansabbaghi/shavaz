<script lang="ts" setup>
const images = [
  "images/product-banner-1.png",
  "images/product-banner-2.png",
  "images/product-banner-3.png",
];

const currentIndex = ref(0);
const currentImage = ref(images[currentIndex.value]);

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
    currentImage.value = images[currentIndex.value];
  }, 2500);
});

const scrollToProductSlider = inject<() => void>("scrollToProductSlider"); // provide to index.vue
</script>

<template>
  <section class="banner">
    <!-- bg banner -->
    <NuxtImg
      class="banner__bg"
      src="/images/bg-banner.jpg"
      alt="banner-shavaz"
      loading="lazy"
      height="460"
    />

    <!-- content banner -->
    <div class="banner__content">

      <!-- Main information section -->
      <div class="banner__content-section">
        <h1 class="banner__content__title">
          <IconRomina class="banner__content__icon" />
        </h1>
        <p class="banner__content__tagline">
          فصل جدید و داستان جدید برای سلامت پوست و موهات خلق کن.
        </p>
        <p class="banner__content__description">
           درخشش پوستت و زیبایی ابریشمی موهات با فرمولاسیون پیشرفته محصولات
          رومینا محقق می‌شود.  برند رومینا با تمرکز بر زیبایی و درخشندگی،
          محصولات متنوعی برای مراقبت از پوست و مو ارائه می‌دهد.
        </p>
      </div>

      <!-- section img 2 -->
      <v-sheet
      max-width="184"
      elevation="0"
      color="transparent"
        class="banner__content-section banner__content-section--center position-relative"
      >
        <!-- image change  -->
        <v-sheet height="274" width="130" class="bg-transparent">
          <transition>
            <NuxtImg
              :src="currentImage"
              :key="currentImage"
              alt="banner-shavaz"
              loading="lazy"
              height="274"
              class="banner__content__image"
            />
          </transition>
        </v-sheet>

        <v-btn
          class="banner__content__more"
          color="primary"
          variant="text"
          flat
          @click.prevent="scrollToProductSlider"
        >
          <template v-slot:prepend>
            <IconArrowDown />
          </template>
          مشاهده بیشتر
        </v-btn>
      </v-sheet>

      <!-- section img 1 -->
      <div
        class="banner__content-section banner__content-section--image align-end"
      >
        <!-- background -->
        <NuxtImg
          src="/images/product-usr-banner.png"
          alt="banner-shavaz"
          loading="lazy"
          width="477"
          height="510"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100% !important;
  height: 460px;
  overflow: visible;
  &__bg {
    width: 100%;
  }
  &__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //
    display: flex;
    justify-content: space-between;
    padding-right: 64px;
    column-gap: 130px;
    justify-items: stretch;
    align-items: flex-end;

    &__image {
      display: block;
      position: absolute;
      // top: 50%;
      left: 50%;
      transform: translate(-50%);
    }

    &-section {
      width: 100%;
      height: 100%;
      // padding: 16px;
      text-align: start;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 12px;

      &--image {
        width: 100%;
        height: fit-content;
        padding: 0;
        // align-items: end;
      }

      &--center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
    }
    &__title {
      // icon
      min-width: 100%;
      height: auto;
    }

    &__tagline {
      width: 100%;
      font-size: 20px;
      font-weight: 700;
      line-height: 40px;
    }

    &__description {
      font-size: 20px;
      font-weight: 300;
      line-height: 40px;
      text-align: justify;
    }

    &__more {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      text-align: center;
    }
  }
}
// responsive mobile 768px
// @media (max-width: 768px) {
//   .banner {
//     // height: 100%;
//     &__content {

//       padding: 0;
//       row-gap: 12px;
//       &-section {
//         &--center {
//           padding: 0 12px;
//         }
//       }
//     }
//   }
// }

// fade design
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
