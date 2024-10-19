<script setup lang="ts"></script>

<template>
  <v-app-bar class="custom-header">
    <v-spacer></v-spacer>
    <NuxtImg
      src="/images/Logo.svg"
      alt="logo-shavaz"
      class="w-20"
      width="100"
      height="35"
    />
  </v-app-bar>
</template>

<style>
.v-container {
  box-shadow: none !important;
}
.v-app-bar.custom-header {
  height: 96px !important;
  padding: 0;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1) !important;
  background-color: transparent !important;

  .v-toolbar__content {
    padding: 0 36px;
  }
}

</style>
