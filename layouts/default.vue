<template>
  <v-responsive class="border rounded" max-height="300">
    <v-app :theme="theme">
      <Header />

      <!-- content -->
      <v-main>
        <slot />
      </v-main>


    </v-app>
  </v-responsive>
</template>
