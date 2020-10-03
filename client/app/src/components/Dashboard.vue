<template>
  <div class="my-2">
    <h4 id="rotationLabel">Summoner: {{returnName}}</h4>
    <h4 id="rotationLabel">Summoner Level: {{returnLevel}}</h4>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Dashboard",

  data: () => {
    return {
      sname: "",
      returnName: "",
      returnLevel: "",
    };
  },
  props: ["summonerName"],

  mounted() {
    console.log(this.$route.query.summonerName);
    if (this.$route.query.summonerName) {
      this.sname = this.$route.query.summonerName;
      let url = `http://localhost:3000/dashboard/`;
      axios
        .post(url, {
          summonerName: this.sname,
        })
        .then((response) => {
          console.log(response);
          this.returnName = response.data.name;
          this.returnLevel = response.data.summonerLevel;
        });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
