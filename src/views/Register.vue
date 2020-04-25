<template>
  <div class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-10 col-md-8 col-lg-6 form-border">
        <vue-headful title="Register | Noty" description="Noty register page" />
        <form>
          <p class="h4 text-center mb-4">Register</p>
          <hr />
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            placeholder="Email"
            v-model="email"
            required
          />
          <p v-if="emailError" class="text-danger">{{ emailError }}</p>
          <br v-if="!emailError" />
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            class="form-control"
            placeholder="Password"
            v-model="password"
            required
          />
          <p v-if="passwordError" class="text-danger">{{ passwordError }}</p>
          <br v-if="!passwordError" />
          <label for="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            class="form-control"
            placeholder="Confirm Password"
            v-model="confirmPassword"
            required
          />
          <p v-if="confirmPasswordError" class="text-danger">
            {{ confirmPasswordError }}
          </p>
          <div class="text-center mt-4">
            <mdb-btn class="white-border" color="black" @click="registerUser"
              >Register</mdb-btn
            >
          </div>
        </form>

        <hr />
        <div class="container text-center">
          <small>OR REGISTER WITH:</small>
          <br /><br />
          <a @click="registerUserWithGoogle"><i class="fab fa-google"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbBtn } from "mdbvue";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: ""
    };
  },
  methods: {
    registerUser() {
      this.emailError = "";
      this.passwordError = "";
      this.confirmPasswordError = "";

      let errors = 0;
      const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!this.email || !re.test(String(this.email).toLowerCase())) {
        this.emailError = "Invalid Email";
        errors++;
      }

      if (this.password.length < 6) {
        this.passwordError = "Password length must be atleast 6 characters";
        errors++;
      }

      if (this.password !== this.confirmPassword) {
        this.confirmPasswordError = "Password are not matching";
        errors++;
      }

      if (errors > 0) {
        return;
      }

      const data = {
        email: this.email,
        password: this.password
      };
      console.log("User data: ", data);

      this.email = "";
      this.emailError = "";
      this.password = "";
      this.passwordError = "";
      this.username = "";
      this.usernameError = "";
      this.confirmPassword = "";
      this.confirmPasswordError = "";
    },
    registerUserWithGoogle() {
      console.log("Registering with Google...");
    }
  },
  components: { mdbBtn }
};
</script>

<style scoped>
hr {
  border: white 1px solid;
}

.form-border {
  border: white 1px solid;
  border-radius: 30px;
  padding: 30px;
}
.white-border {
  border: white 1px solid;
}
.white-border:hover {
  color: white;
}
</style>
