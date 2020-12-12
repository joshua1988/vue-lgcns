<template>
  <div>
    <h1>v-model 예제</h1>
    <div>
      <input type="text" v-model="searchInput" />
    </div>
    <!-- NOTE: 한글 입력 시 주의해야 할 사항 -->
    <!-- <h1>v-model 한글 입력시 주의할 사항</h1>
    <div>
      <div>
        <input type="text" v-model="searchInput" />
        <button :disabled="buttonDisabled">검색</button>
      </div>
      <p>최소 5글자 입력해주세요</p>
    </div> -->
    <!-- NOTE: 한글 입력 다루는 방법 -->
    <!-- <h1>한글 입력 다루기</h1>
    <div>
      <div>
        <input type="text" @input="updateSearchText" :value="searchInput" />
        <button :disabled="buttonDisabled">검색</button>
      </div>
      <p>최소 5글자 입력해주세요</p>
    </div> -->
    <!-- TODO: 인풋 하나를 작은 컴포넌트로 만들어서 해결해 보세요  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: ""
    };
  },

  methods: {
    updateSearchText() {
      this.searchInput = event.target.value;
    }
  },

  computed: {
    buttonDisabled() {
      return this.searchInput.length < 5;
    }
  }
};
</script>

<style></style>
