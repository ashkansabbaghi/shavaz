<script setup lang="ts"></script>

<template>
  <!-- <v-card class="mx-auto" width="96"> -->
    <!-- <v-layout> -->
      <v-app-bar :elevation="0" class="header" height="96">
        <v-spacer></v-spacer>
        <IconLogo class="header__logo" />
      </v-app-bar>
    <!-- </v-layout> -->
  <!-- </v-card> -->
</template>

<style>
.v-container {
  box-shadow: none !important;
}
.v-app-bar.header {
  /* height: 96px !important; */
  padding: 0;
  /* box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1) !important; */
  background-color: transparent !important;

  .v-toolbar__content {
    padding: 30px 36px;
  }
  .header__logo {
    width: 100px;
    height: 36px;
  }
}
</style>
