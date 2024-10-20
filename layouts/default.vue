<template>
    <v-app>
      <!-- header -->
      <Header />

      <!-- content -->
      <v-main>
        <slot />
      </v-main>

      <!-- footer -->
       <Footer class="mt-16" />
    </v-app>
</template>
