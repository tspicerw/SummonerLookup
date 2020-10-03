
<template >
  <div id="app" class="my-0">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <Toolbar />

    <router-view />
  </div>
</template>

<script>
import Toolbar from "./components/Toolbar.vue";

export default {
  name: "App",
  components: {
    Toolbar,
  },
  data() {
    return {
      summoner: "",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
  height: 100vh;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
