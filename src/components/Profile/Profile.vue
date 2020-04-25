<template>
  <div class="text-center">
    <vue-headful title="Profile | Noty" description="Noty profile page" />
    <h1>Profile</h1>
    <div class="text-center mt-4">
      <router-link class="btn white-border" to="/profile/edit" tag="button"
        >Update Profile</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style scoped>
.white-border {
  border: white 1px solid;
}
.white-border:hover {
  color: white;
}
</style>
