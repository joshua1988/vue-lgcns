<template>
  <div>
    <h1>컴포넌트 로직</h1>
    <div>
      <p>{{ message }}</p>
      <button @click="addString">add</button>
    </div>
    <hr />
    <h1>Vuex 로직</h1>
    <div>
      <p>{{ $store.state.message }}</p>
      <button @click="addStringByVuex">add</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hi"
    };
  },

  methods: {
    addString() {
      this.message = this.message + "!";
    },
    addStringByVuex() {
      this.$store.commit("addMessage");
    }
  }
};
</script>

<style></style>
