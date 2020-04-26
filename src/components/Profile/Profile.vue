<template>
  <div class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-10 col-md-8 col-lg-6 div-border">
        <vue-headful
          title="Profile | Noty"
          description="Noty create profile page"
        />
        <h1 class="text-center">Profile</h1>
        <hr />
        <div class="container d-flex h-100">
          <img
            class="float-left preview"
            :src="displayImage"
            alt="displayImage"
          />
          <div class="row justify-content-center align-self-center margin-left">
            <h4>
              <strong>{{ username }}</strong>
              <br />
              <h6>{{ aboutMe }}</h6>
            </h4>
          </div>
        </div>
        <div class="text-center mt-4">
          <router-link class="btn white-border" to="/profile/edit" tag="button"
            >Update Profile</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      username: "KengoWada",
      displayImage:
        "https://lh4.googleusercontent.com/-Z03lSlAc8FE/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPtRrIxc-ZnNqLG5B3lp5POLvQQGg/photo.jpg",
      aboutMe:
        "Lorem Ipsum telah menjadi text contoh semenjak tahun ke 1500an, apabila pencetak yang kurang terkenal mengambil sebuah galeri cetak dan yang"
    };
  }
};
</script>

<style scoped>
hr {
  border: white 1px solid;
}

.margin-left {
  margin-left: 20px;
}
.preview {
  border: none;
  border-radius: 50%;
  height: 80px;
  width: 80px;
}
.div-border {
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
