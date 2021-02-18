<template>
  <div>
    <!-- <LearnVuex></LearnVuex> -->
    <!-- <input type="text" v-model="username" /> -->
    <input type="text" :value="username" @input="updateInput" />
    <!-- <FormInput v-model=""></FormInput>
    <FormInput v-model=""></FormInput>
    <FormButton></FormButton> -->
    <!-- <p>{{ counter }}</p> -->
    <div v-for="user in users">
      <input type="checkbox" name="" id="" :checked="user.checked" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // counter: 0,
      // username: ""
      users: []
    };
  },

  methods: {
    updateInput() {
      Vue.set();
      // this.username = event.target.value;
      this.user.checked = true;
      this.$set(this.users, 'checked', false);
    },
    async fetchUsers() {
      const { data } = await axios.get("users");
      this.users = data.users.map(user => {
        ...user,
        checked: false
      }); // [{}, {}, {}, {} ]
    }
  },

  created() {
    this.fetchUsers();
  }
};
</script>

<style></style>
