<template>
  <div>
    <b-container fluid class="px-0">
      <b-navbar toggleable="lg" type="dark" fixed id="mainNav">
        <b-navbar-brand href="#" id="brandImageContainer">
          <b-img
            src="http://pngriver.com/wp-content/uploads/2018/03/Download-League-of-Legends-Logo-Transparent-Background-For-Designing-Project.png"
            alt="League Logo"
            id="logo"
          ></b-img>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item href="/champions" disabled>Champions</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Toolbar",

  data: () => {
    return {};
  },
  methods: {
    getChampions: function () {
      let url = `http://localhost:3000/home?`;
      axios.get(url).then((response) => {
        console.log(response);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.full-width {
  width: 100%;
}

#mainNav {
  background-color: rgb(79, 56, 84);
  height: 80px;
}

#brandImageContainer {
  width: 20%;
}

#logo {
  width: 50%;
}
</style>
