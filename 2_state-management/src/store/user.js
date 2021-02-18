import axios from "axios";

export default {
  namespaced: true,
  actions: {
    async FETCH_USER() {
      const url = "https://jsonplaceholder.typicode.com/users/1";
      const response = await axios.get(url);
      const street = response.data.address.street;
      return street;
    }
  }
};

// UserProfile.vue
