<template>
  <div class="container">
    <div class="info">
      <h1>
        Name: {{ users[this.$router.currentRoute._rawValue.params.id].name }}
      </h1>
      <h2>
        Username:
        {{ users[this.$router.currentRoute._rawValue.params.id].username }}
      </h2>
      <h3>
        Email: {{ users[this.$router.currentRoute._rawValue.params.id].email }}
      </h3>
      <p>Address:</p>
      <div
        class="address"
        v-for="(address, value, index) in users[
          this.$router.currentRoute._rawValue.params.id
        ].address"
        :key="index"
      >
        <p :key="index" v-if="value !== 'geo'">{{ value }} {{ address }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UserProfile",
  computed: {
    ...mapGetters("users", ["users"]),
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
