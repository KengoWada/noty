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
          <a @click="loginWithGoogle"><i class="fab fa-google"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    loginUser() {
      this.loading = true;
      console.log("Logging user in");
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    },
    loginWithGoogle() {
      console.log("Log in user using Google");
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
