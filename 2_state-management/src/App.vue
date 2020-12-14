<template>
  <div>
    <LearnVuex></LearnVuex>
    <VuexAntiPattern></VuexAntiPattern>
  </div>
</template>

<script>
import LearnVuex from "@/components/LearnVuex.vue";
import VuexAntiPattern from "@/components/VuexAntiPattern.vue";

export default {
  components: {
    // "컴포넌트 이름": 컴포넌트 내용,
    // NOTE: 컴포넌트 등록 방식
    // "learn-vuex": LearnVuex,
    // "LearnVuex": LearnVuex,
    // LearnVuex: LearnVuex,
    // LearnVuex,
    LearnVuex: () => import("@/components/LearnVuex.vue")

    // "vuex-anti-pattern": VuexAntiPattern
    // LearnVuex,
    // VuexAntiPattern
  }
};
</script>

<style></style>
