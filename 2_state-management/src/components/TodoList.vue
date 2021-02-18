<template>
  <div>
    <TodoItem
      v-for="(item, index) in todoItems"
      :key="index"
      v-bind:item="item"
    ></TodoItem>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoItems: []
    };
  },

  methods: {
    fetchTodoItems() {
      this.todoItems = ["a", "b", "c"];
    }
  },

  created() {
    this.fetchTodoItems();
  }
};
</script>

<style></style>
