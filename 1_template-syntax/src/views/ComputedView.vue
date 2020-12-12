<template>
  <div>
    <h1>Computed 속성 예제</h1>
    <div>
      <input
        type="radio"
        id="computed1"
        v-model="selectedComputedExample"
        value="computed1"
      />
      <label for="computed1">예제 1</label>
      <input
        type="radio"
        id="computed2"
        v-model="selectedComputedExample"
        value="computed2"
      />
      <label for="computed2">예제 2</label>
      <input
        type="radio"
        id="computed3"
        v-model="selectedComputedExample"
        value="computed3"
      />
      <label for="computed3">예제 3</label>
    </div>
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import ComputedExample1 from "@/components/ComputedExample1.vue";
import ComputedExample2 from "@/components/ComputedExample2.vue";
import ComputedExample3 from "@/components/ComputedExample3.vue";

const componentMapper = {
  computed1: ComputedExample1,
  computed2: ComputedExample2,
  computed3: ComputedExample3
};

export default {
  components: {
    ComputedExample1
  },

  data() {
    return {
      selectedComputedExample: "computed1"
    };
  },

  computed: {
    selectedComponent() {
      return componentMapper[this.selectedComputedExample] || ComputedExample1;
    }
  }
};
</script>

<style></style>
