<template>
  <div>
    <h1>컴퓨티드 속성을 써야 할 때</h1>
    <div>
      {{
        products[0].name
          ? products[0].name.charAt(0).toUpperCase() +
            products[0].name.substr(1)
          : null
      }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: "americano" },
        { id: 2 },
        { id: 3, name: "ice latte" }
      ]
    };
  }
};
</script>
