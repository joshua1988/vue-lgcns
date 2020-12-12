<template>
  <div>
    <h1>지양해야 할 Vuex 패턴</h1>
    <p>{{ streetName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      streetName: ""
    };
  },

  created() {
    this.$store
      .dispatch("user/FETCH_USER")
      .then(response => (this.streetName = response))
      .catch(error => console.log(error));
  }
};
</script>

<style></style>
