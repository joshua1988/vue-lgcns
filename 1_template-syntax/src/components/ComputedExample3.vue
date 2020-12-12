<template>
  <div>
    <!-- TODO: 컴퓨티드 속성 문법 정리해 보기 -->
    <h1>컴퓨티드 속성의 클래스 분기 처리</h1>
    <div>
      <p
        class="greeting"
        v-bind:class="{ 'font-large': largeFont, error: fontColor === 'red' }"
      >
        안녕하세요 LG CNS 임직원 여러분
      </p>
      <button @click="sizeupFont">폰트 크기 150% 확대</button>
      <button @click="changeFontColor">폰트 컬러 변경</button>
      <button @click="initFontState">초기화</button>
    </div>
  </div>
</template>

<script>
// const FONT_SIZE_INIT_VALUE = false;
// const FONT_COLOR_INIT_VALUE = "black";

export default {
  data() {
    return {
      largeFont: false,
      fontColor: "black"
    };
  },

  methods: {
    sizeupFont() {
      this.largeFont = true;
    },
    changeFontColor() {
      this.fontColor = "red";
    },
    initFontState() {
      this.largeFont = false;
      this.fontColor = "black";
    }
  }
};
</script>

<style scoped>
.greeting {
  font-size: 12px;
}
.font-large {
  font-size: 24px;
}
.primary {
  color: black;
}
.error {
  color: red;
}
</style>
