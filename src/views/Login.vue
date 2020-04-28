<template>
  <div class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-10 col-md-8 col-lg-6 form-border">
        <vue-headful title="Log In | Noty" description="Noty log in page" />
        <form class="form">
          <p class="h4 text-center mb-4">Log In</p>
          <hr />
          <p v-if="error" class="text-danger">{{ error }}</p>
          <label for="email"><strong>Email</strong></label>
          <input
            type="email"
            id="email"
            class="form-control"
            placeholder="Email"
            v-model="email"
          />
          <br />
          <label for="password"><strong>Password</strong></label>
          <input
            type="password"
            id="password"
            class="form-control"
            placeholder="Password"
            v-model="password"
          />
          <div class="text-center mt-4">
            <mdb-btn class="white-border" @click="loginUser" color="black">
              <div v-if="!loading">Log In</div>
              <div
                v-if="loading"
                class="spinner-border text-light spinner-border-sm"
                role="status"
              ></div>
            </mdb-btn>
          </div>
        </form>

        <hr />
        <div class="container text-center">
          <small>OR LOGIN WITH:</small>
          <br /><br />
          <a @click="loginWithGoogle">
            <i class="fab fa-google" style="font-size: 23px"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mdbBtn } from "mdbvue";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
      loading: false
    };
  },
  methods: {
    ...mapActions(["login", "registerWithGoogle"]),
    loginUser() {
      this.error = "";
      this.loading = true;

      const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!this.email || !re.test(String(this.email).toLowerCase())) {
        this.error = "Invalid email";
        this.loading = false;
        return;
      }
      if (!this.password) {
        this.error = "Password field can not be empty";
        this.loading = false;
        return;
      }

      const data = { email: this.email, password: this.password };
      this.login(data).then(res => {
        if (!res.isValid) {
          this.error = res.error;
          this.loading = false;
          return;
        }

        if (!res.exists) {
          this.email = "";
          this.password = "";
          this.error = "";
          this.loading = false;
          this.$router.push("/profile/create");
          return;
        }

        this.email = "";
        this.password = "";
        this.error = "";
        this.loading = false;

        this.$router.push("/");
      });
    },
    loginWithGoogle() {
      this.error = "";

      this.registerWithGoogle().then(res => {
        if (!res.isValid) {
          this.error = res.error;
          return;
        }

        if (!res.exists) {
          this.$router.push("/profile/create");
          return;
        }

        this.error = "";

        this.$router.push("/");
      });
    }
  },
  components: { mdbBtn }
};
</script>

<style scoped>
hr {
  border: white 1px solid;
}

.fab {
  margin-left: 10px;
  margin-right: 10px;
}
.form-border {
  border: white 1px solid;
  border-radius: 24px;
  padding: 30px;
}
.white-border {
  border: white 1px solid;
}
.white-border:hover {
  color: white;
}
</style>
