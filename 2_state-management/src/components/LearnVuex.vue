<template>
  <div>
    <h1>컴포넌트 로직</h1>
    <div>
      <p>{{ message }}</p>
      <button @click="addString">add</button>
      <p>{{ reversedMessage }}</p>
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
      message: "hi",
      abcd: 100
    };
  },

  computed: {
    reversedMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },

  methods: {
    addString() {
      this.message = this.message + "!";
    },
    addStringByVuex() {
      this.$store.commit("addMessage");
    },
    async getMyUser() {
      var user = await this.$store.dispatch("FETCH_USER");
      this.user = user;
    }
  },

  created() {
    console.log(this.$store);
  }
};
</script>

<style></style>
