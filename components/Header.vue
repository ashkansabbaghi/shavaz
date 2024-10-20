<script setup lang="ts"></script>

<template>
  <!-- <v-card class="mx-auto" width="96"> -->
    <!-- <v-layout> -->
      <header class="header d-flex justify-space-between align-center" >
        <v-spacer></v-spacer>
        <IconLogo class="header__logo" />
      </header>
    <!-- </v-layout> -->
  <!-- </v-card> -->
</template>

<style>
.v-container {
  box-shadow: none !important;
}
.header {
  /* height: 96px !important; */
  padding: 30px 36px;
  height: 96px;
  /* box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1) !important; */
  background-color: bg-main;

  .header__logo {
    width: 100px;
    height: 36px;
  }
}
</style>
