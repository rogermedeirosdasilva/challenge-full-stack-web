<template>
  <v-app>
    <v-container>
      <v-content id="appArea">
        <router-view />
      </v-content>
    </v-container>
    <AppBar />
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";

export default {
  name: "App",
  components: {
    AppBar
  },
  data: () => ({})
};
</script>
