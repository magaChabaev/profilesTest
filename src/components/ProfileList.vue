<template>
  <div class="container">
    <div class="users__container">
      <h2 v-for="({ name }, index) in users" :key="index" class="user">
        <router-link :to="{ path: `/user/${index}` }"
          >{{ index + 1 }} : {{ name }}</router-link
        >
      </h2>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProfileList",
  methods: {
    ...mapActions("users", ["setUsers"]),
  },
  mounted() {
    this.setUsers();
  },
  computed: {
    ...mapGetters("users", ["users"]),
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.user {
  margin-bottom: 10px;
}
</style>
