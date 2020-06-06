<template>
  <div class="d-flex justify-content-center">
    <div class="flex-column  mt-5 ">
      <img
        style="mix-blend-mode: multiply;"
        :src="this.$store.getters.website.websitesrc"
        width="400"
        alt="no pic"
      />
      <form class="mt-5" @submit.prevent="submitInfo">
        <v-text-field
          label="Enter the product link here"
          v-model="link"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
        <v-switch
          v-model="anypricedrop"
          class="mx-2 mt-5"
          color="#164e87"
          label="Email me when the price drops"
          :disabled="specificpricedrop"
        ></v-switch>
        <v-switch
          v-model="specificpricedrop"
          class="mx-2 mt-5"
          color="#164e87"
          :disabled="anypricedrop"
          label="Email me only when the price drops below"
          ref="spd"
        ></v-switch>

        <v-btn
          type="submit"
          class="white--text"
          color="#164e87"
          :loading="loading"
          >Scrape now</v-btn
        >
      </form>
    </div>
  </div>
</template>

<script>
import api from "../api";
export default {
  data() {
    return {
      anypricedrop: false,
      specificpricedrop: false,
      link: null,
      spcificprice: null,
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
      loading: false,
    };
  },
  methods: {
    submitInfo() {
      this.loading = true;
      let info = {
        link: this.link,
      };
      if (!this.link)
        return this.$alert("Please enter a link to find...", null, "error");
      if (!this.link.includes(`${this.$store.getters.website.websitename}`))
        return this.$alert(
          `Entered link must be from ${this.$store.getters.website.websitename
            .toString()
            .toUpperCase()}`,
          null,
          "error"
        );

      api
        .scrapeweb(info)
        .then(() => {
          this.loading = false;
          this.$fire({
            title: "<strong>HTML <u>example</u></strong>",
            icon: "info",
            html:
              "You can use <b>bold text</b>, " +
              '<a href="//sweetalert2.github.io">links</a> ' +
              "and other HTML tags",
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: "Proceed",
            cancelButtonText: "Cancel",
          });
        })
        .catch(() => {});
    },
  },
};
</script>
<style></style>
