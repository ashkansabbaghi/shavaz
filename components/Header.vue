<script setup lang="ts"></script>

<template>
  <header class="header d-flex justify-space-between align-center">
    <v-sheet max-width="1440" class="header__container" elevation="0" transparent>
      <IconLogo class="header__logo" />
    </v-sheet>
  </header>
</template>

<style lang="scss" scoped>
.v-container {
  box-shadow: none !important;
}
.header {
  height: 96px;
  background-color: transparent;
  &__container {
    width: 100%;
    padding: 30px 36px;
    margin: auto;
  }
  &__logo {
    width: 100px;
    height: 36px;
  }
}
</style>
