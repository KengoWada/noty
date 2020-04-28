<template>
  <mdb-container v-if="noNav">
    <mdb-navbar dark>
      <mdb-navbar-brand router to="/">
        <strong>Noty</strong>
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item router to="/">Home</mdb-nav-item>
          <mdb-nav-item router to="/about">About</mdb-nav-item>
        </mdb-navbar-nav>
        <mdb-navbar-nav right>
          <mdb-nav-item
            v-for="item in navItems"
            :key="item.title"
            router
            :to="item.route"
            >{{ item.title }}</mdb-nav-item
          >
          <mdb-nav-item v-if="isAuthenticated" @click="logoutUser">
            Logout
          </mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
  </mdb-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbContainer
} from "mdbvue";

export default {
  name: "NavbarPage",
  props: ["route"],
  methods: {
    ...mapGetters(["isLoggedIn"]),
    ...mapActions(["logout"]),
    async logoutUser() {
      await this.logout();
      if (this.route === "/") {
        return;
      }

      this.$router.push("/");
    }
  },
  computed: {
    isAuthenticated() {
      return this.isLoggedIn();
    },
    noNav() {
      if (this.route === "/profile/create") {
        return false;
      }
      return true;
    },
    navItems() {
      const login = [{ title: "Register", route: "/register" }];
      const register = [{ title: "Log In", route: "/login" }];
      const loggedIn = [{ title: "Profile", route: "/profile" }];

      if (this.isAuthenticated) {
        return loggedIn;
      }

      if (this.route === "/login") {
        return login;
      }

      if (this.route === "/register") {
        return register;
      }

      return [...register, ...login];
    }
  },
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbContainer
  }
};
</script>
