<template>
  <div>
    <b-container>
      <b-row class="landing-image my-3">
        <b-img
          src="http://www.pngall.com/wp-content/uploads/2016/05/League-of-Legends-Free-PNG-Image.png"
          fluid
          id="landingImage"
          alt="Jinx Image"
        ></b-img>
      </b-row>
      <b-form-input
        fluid
        type="search"
        id="search"
        class="full-width"
        v-model="summonerName"
        placeholder="Summoner Name"
      ></b-form-input>
      <b-dropdown v-model="region" id="region-dropdown" text="NA" class="full-width">
        <b-dropdown-item>EUW</b-dropdown-item>
        <b-dropdown-item>EUE</b-dropdown-item>
        <b-dropdown-item>KR</b-dropdown-item>
      </b-dropdown>
      <router-link :to="{ path: '/dashboard', query: { summonerName }}">Search</router-link>

      <!-- <b-form @submit="getSummoner">
        <b-form-row class="search-row mt-3">
          <b-col cols="8">
           
          </b-col>
          <b-col cols="2">
            <b-dropdown v-model="form.region" id="region-dropdown" text="NA" class="full-width">
              <b-dropdown-item>EUW</b-dropdown-item>
              <b-dropdown-item>EUE</b-dropdown-item>
              <b-dropdown-item>KR</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col cols="2">
            <router-link
              :to="{name:'Dashboard' }"
              variant="outline-primary"
              id="summonerSearch"
            >Search</router-link>
          </b-col>
        </b-form-row>
      </b-form>-->
      <b-row>
        <RotationList />
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import axios from "axios";
import RotationList from "./RotationList";

export default {
  name: "Search",
  components: {
    RotationList,
  },
  data: () => {
    return {
      region: "",
      summonerName: "",
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-row {
  width: 50%;
  margin: 0 auto;
}

.landing-image {
  width: 30%;
  margin: 0 auto;
}

.full-width {
  width: 100%;
}
</style>
