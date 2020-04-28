<template>
  <div>
    <Navbar :route="currentRoute" />
    <br /><br />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

import firebase from "./firebaseConfig";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  methods: {
    ...mapActions(["authState"])
  },
  created() {
    this.authState().then(res => {
      if (!res.isValid) {
        return;
      }

      if (!res.exists) {
        this.$router.push("/profile/create");
        return;
      }

      firebase.analytics();
      return;
    });
  },
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
