<template>
  <!-- <div class="container mt-5"> -->
    <v-carousel cycle hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../logo/backbannerslide.png"),
        },
        {
          src: require("../logo/fullbck.png"),
        },
        {
          src: require("../logo/HM.jpg"),
        },
        {
          src: require("../logo/Souq-.png"),
        },
          {
          src: require("../logo/zara-.png"),
        },
        {
          src:require("../logo/FRESH-Egypt-5027-og.png")
        },
        {
          src: require("../logo/logo_.jpg"),
        },
        {
          src: require("../logo/sephora-logo.png")
        },
        {
          src: require("../logo/ikeaaa.png")
        },
        {
          src: require("../logo/homecenterr.png")
        },
        {
          src: require("../logo/gold&silver.png")
        },
        {
          src: require("../logo/nikedefault.jpg")
        }
      ],
      slides: ["WELCOME TO", "OUR", "NOTIFY", "WEBSITE", "Fifth"],
    };
  },
};
</script>

<style></style>
