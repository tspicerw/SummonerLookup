<template>
  <div class="my-2">
    <h4 id="rotationLabel">Free Champion Rotation</h4>
    <ul id="freeChampionTable">
      <li v-for="img in champtionRotationData" :key="img.name">
        <b-img :src="img" fluid alt="Free Champion Image"></b-img>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RotationList",

  data: () => {
    return {
      champtionRotationData: [],
    };
  },
  mounted() {
    let url = `http://localhost:3000`;
    axios.get(url).then((response) => {
      this.champtionRotationData = response.data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-row {
  width: 50%;
  margin: 0 auto;
}

.full-width {
  width: 100%;
}

ul {
  list-style-type: none;
}

li {
  display: inline;
  padding: 5px;
}

#rotationLabel {
  color: white;
}
</style>
