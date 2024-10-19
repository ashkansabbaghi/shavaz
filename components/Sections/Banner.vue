<script lang="ts" setup></script>

<template>
  <section class="banner">
    <!-- bg banner -->
    <NuxtImg
      class="banner__img"
      src="/images/bg-banner.jpg"
      alt="banner-shavaz"
      loading="lazy"
    />
    <!-- content banner -->
    <div class="banner__content">
      <!-- section img 1 -->
      <div class="banner__content-section banner__content-section--image">
        image 1
      </div>

      <!-- section img 1 -->
      <div class="banner__content-section banner__content-section--image">
        image 2
      </div>

      <!-- Main information section -->
      <div dir="rtl" class="banner__content-section">
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
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100% !important;
  height: 460px;
  overflow: hidden;
  &__img {
    width: 100%;
    object-fit: cover;
  }
  &__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //
    display: flex;
    column-gap: 10px;
    justify-items: stretch;
    align-items: stretch;

    &-section {
      width: 100%;
      height: 100%;
      padding: 10px;
      width: 300px;
      text-align: start;

      &--image {
        background-color: #f0f0f0;
      }
    }
    &__title {
      // icon
      min-width: 140px;
      height: auto;
    }

    &__tagline {
      font-family: IRANSansXFaNum;
      font-size: 20px;
      font-weight: 700;
      line-height: 40px;
      text-align: right;
    }

    &__description {
      font-family: IRANSansXFaNum;
      font-size: 20px;
      font-weight: 300;
      line-height: 40px;
      text-align: justified;
    }
  }
}
</style>
