<template>
  <div class="container h-100">
    <br />
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-10 col-md-8 col-lg-6 form-border">
        <vue-headful
          title="Edit Profile | Noty"
          description="Noty edit profile page"
        />
        <div class="float-right" v-if="imageUrl">
          <img class="preview" :src="imageUrl" />
        </div>
        <h1 class="text-center">Edit Profile</h1>
        <br v-if="imageUrl" />
        <hr />
        <form class="form">
          <label for="username"><strong>Username</strong></label>
          <input
            type="text"
            id="username"
            class="form-control"
            placeholder="Username"
            v-model="username"
          />
          <p v-if="usernameError" class="text-danger">{{ usernameError }}</p>
          <br v-if="!usernameError" />
          <label for="username"><strong>About Me</strong></label>
          <textarea
            type="text"
            id="username"
            class="form-control"
            maxlength="140"
            rows="3"
            placeholder="Write about yourself in 140 characters..."
            v-model="aboutMe"
          />
          <p v-if="aboutMeError" class="text-danger">{{ aboutMeError }}</p>
          <br v-if="aboutMeError" />
          <p v-if="imageError" class="text-danger">{{ imageError }}</p>
          <div class="text-center mt-4">
            <div class="upload-btn-wrapper">
              <mdb-btn class="btn white-border" color="black"
                >Upload image</mdb-btn
              >
              <input type="file" accept="image/*" @change="onChange" />
            </div>
          </div>
          <div class="text-center mt-4">
            <mdb-btn class="white-border" color="black" @click="editProfile">
              <div v-if="!loading">Edit Profile</div>
              <div
                v-if="loading"
                class="spinner-border text-light spinner-border-sm"
                role="status"
              ></div>
            </mdb-btn>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbBtn } from "mdbvue";

export default {
  name: "CreateProfile",
  data() {
    return {
      username: "KengoWada",
      imageUrl:
        "https://lh4.googleusercontent.com/-Z03lSlAc8FE/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPtRrIxc-ZnNqLG5B3lp5POLvQQGg/photo.jpg",
      aboutMe:
        "Lorem Ipsum telah menjadi text contoh semenjak tahun ke 1500an, apabila pencetak yang kurang terkenal mengambil sebuah galeri cetak dan yang",
      image: null,
      usernameError: "",
      aboutMeError: "",
      imageError: "",
      loading: false
    };
  },
  methods: {
    editProfile() {
      this.loading = true;
      this.imageError = "";
      this.aboutMeError = "";
      this.usernameError = "";

      // Validation
      let errors = 0;
      if (!this.imageUrl) {
        this.imageError = "You must upload a profile image";
        errors++;
      }

      if (!this.aboutMe) {
        this.aboutMeError = "About Me can not be empty";
        errors++;
      }

      // TODO Check if the username is taken.
      // const usernameTaken = await profile.usernameTaken(this.username);
      // if (usernameTaken) {
      //   this.usernameError = 'Username is taken';
      //   errors++;
      // }

      if (errors > 0) {
        this.loading = false;
        return;
      }

      console.log("Creating Profile");
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    },
    onChange(e) {
      const file = e.target.files[0];
      this.image = file;
      this.imageUrl = URL.createObjectURL(file);
    }
  },
  components: { mdbBtn }
};
</script>

<style scoped>
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn {
  border: 1px solid white;
  color: beige;
  background-color: black;
  cursor: pointer;
}

.upload-btn-wrapper input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

hr {
  border: white 1px solid;
}

.custom-file-input {
  background-color: black;
  color: beige;
}
.preview {
  border: none;
  border-radius: 50%;
  height: 80px;
  width: 80px;
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
