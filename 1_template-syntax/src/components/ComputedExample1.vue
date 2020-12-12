<template>
  <div>
    <h1>컴퓨티드 속성 - 기본 문법</h1>
    <div>{{ reversedMessage }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hi"
    };
  },

  computed: {
    reversedMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>
