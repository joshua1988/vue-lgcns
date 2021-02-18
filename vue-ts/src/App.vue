<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { fetchUser } from "./api";

export default Vue.extend({
  data() {
    return {
      message: "hello"
    };
  },

  methods: {
    changeMessage(str: string) {
      this.message = this.message + "!";
    },
    async fetchData() {
      const response = await fetchUser();
      console.log(response.data.name);
      // this.changeMessage()
    }
  },

  created() {
    this.fetchData();
  }
});
</script>

<style scoped></style>
