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
  padding: 30px 36px;
  height: 96px;
  background-color: transparent;

  .header__logo {
    width: 100px;
    height: 36px;
  }
}
</style>
