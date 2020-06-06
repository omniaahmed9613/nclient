<template>
  <div class="d-flex justify-content-center">
    <div class="flex-column  mt-5 ">
      <img
        style="mix-blend-mode: multiply;"
        :src="this.$store.getters.website.websitesrc"
        width="200"
        alt="no pic"
      />
      <form class="mt-5" @submit.prevent="submitInfo">
        <v-row align="center">      
      <v-col >
        <v-select
          v-model="Have"
          :items="states"
          menu-props="auto"
          label="Currency You Have"
          hide-details
          prepend-icon="mdi mdi-map"
          single-line
        ></v-select>
      </v-col>
    </v-row>
     <v-row algin="center">

      <v-col>
        <v-select
          v-model="Want"
          :items="states"
          prepend-icon="mdi mdi-map"
          menu-props="auto"
          hide-details
          label="Currency You Want"
          single-line
        ></v-select>
      </v-col>
    </v-row>
   <v-row algin="center">
      <v-col>
        <v-text-field label="Amount" value="1" prefix="$" v-model="Amount"></v-text-field>
      </v-col>
    </v-row>

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
import api from '../api';
export default {
  data() {
    return {
     Have:null,
     Want:null,
     Amount:null,

      states: [
        "USD ",
        "EUR ",
        "GBP",
        "DZD",
        "ARP",
        "AUD",
        "ATS",
        "BSD",
        "BBD",
        "BEF",
        "BMD",
        "BRR",
        " BGL",
        "CAD",
        "CLP ",
        "CNY",
        "CYP",
        "CSK",
        "DKK",
        "NLG",
        "XCD",
        "EGP",
        "FJD",
        "FIM",
        "FRF",
        "DEM",
        "XAU",
        "GRD",
        "HKD",
        "HUF",
        "ISK",
        "INR",
        "IDR",
        "IEP",
        "ILS",
        "ITL",
        "JMD",
        "JPY",
        "JOD",
        "KRW",
        "LBP",
        "LUF",
        "MYR",
        "MXP",
        "NLG",
        "NZD",
        "NOK",
        "PKR",
        "XPD",
        "PHP",
        "XPT",
        "PLZ",
        "PTE",
        "ROL",
        "RUR",
        "SAR",
        "XAG",
        "SGD",
        "SKK",
        "ZAR",
        "KRW",
        "ESP",
        "XDR",
        "SDD",
        "SEK",
        "CHF",
        "TWD",
        "THB",
        "TTD",
        "TRL",
        "VEB",
        "ZMK",
        "EUR",
        "XCD",
        "XDR",
        "XAG",
        "XAU",
        "XPD",
        "XPT"
      ]
    };
  },
  methods:{
    submitInfo(){
      console.log(this.Have);
    api.CurrencyQuery(this.Have,this.Want,this.Amount);
    
    }
  }
};
</script>
<style>
</style>