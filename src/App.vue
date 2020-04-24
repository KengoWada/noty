<template>
  <div>
    <Navbar :route="currentRoute" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  computed: {
    currentRoute() {
      return this.$route.path;
    }
  },
  components: {
    Navbar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

body {
  background-color: black;
  color: beige;
}
</style>
