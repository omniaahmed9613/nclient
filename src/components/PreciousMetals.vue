<template>
  <div class="d-flex justify-content-center">
    <div class="flex-column mt-5">
      <img
        style="mix-blend-mode: multiply;"
        :src="this.$store.getters.website.websitesrc"
        width="400"
        alt="no pic"
      />
      <form class="mt-5 " @submit.prevent="submitInfo">
        <select
          class="form-control input-sm gpxticker-currency "
          id="gpxtickerLeft_curr"
          v-model="countryvalue"
          style="border:none;background:transparent;border-bottom:1px solid grey"
        >
          <option value="USD">USD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; United States Dollar</option>
          <option value="AED">AED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;United Arab Emirates Dirham</option>
          <option value="AFN">AFN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Afghan Afghani</option>
          <option value="ALL">ALL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Albanian Lek</option>
          <option value="AMD" selected>AMD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Armenian Dram</option>
          <option value="ANG">ANG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Netherlands Antillean Guilder</option>
          <option value="AOA">AOA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Angolan Kwanza</option>
          <option value="ARS">ARS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Argentine Peso</option>
          <option value="AUD">AUD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Australian Dollar</option>
          <option value="AWG">AWG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aruban Florin</option>
          <option value="AZN">AZN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Azerbaijani Manat</option>
          <option value="BAM">BAM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bosnia-Herzegovina Convertible Mark</option>
          <option value="BBD">BBD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Barbadian Dollar</option>
          <option value="BDT">BDT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bangladeshi Taka</option>
          <option value="BGN">BGN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bulgarian Lev</option>
          <option value="BHD">BHD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bahraini Dinar</option>
          <option value="BIF">BIF&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Burundian Franc</option>
          <option value="BMD">BMD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bermudan Dollar</option>
          <option value="BND">BND&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Brunei Dollar</option>
          <option value="BOB">BOB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bolivian Boliviano</option>
          <option value="BRL">BRL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Brazilian Real</option>
          <option value="BSD">BSD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bahamian Dollar</option>
          <option value="BTN">BTN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bhutanese Ngultrum</option>
          <option value="BWP">BWP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Botswanan Pula</option>
          <option value="BYN">BYN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New Belarusian Ruble</option>
          <option value="BZD">BZD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Belize Dollar</option>
          <option value="CAD">CAD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Canadian Dollar</option>
          <option value="CDF">CDF&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Congolese Franc</option>
          <option value="CHF">CHF&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Swiss Franc</option>
          <option value="CLP">CLP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chilean Peso</option>
          <option value="CNY">CNY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chinese Yuan</option>
          <option value="COP">COP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Colombian Peso</option>
          <option value="CRC">CRC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Costa Rican Colón</option>
          <option value="CUC">CUC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cuban Convertible Peso</option>
          <option value="CUP">CUP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cuban Peso</option>
          <option value="CVE">CVE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cape Verdean Escudo</option>
          <option value="CZK">CZK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Czech Republic Koruna</option>
          <option value="DJF">DJF&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Djiboutian Franc</option>
          <option value="DKK">DKK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Danish Krone</option>
          <option value="DOP">DOP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dominican Peso</option>
          <option value="DZD">DZD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Algerian Dinar</option>
          <option value="EGP">EGP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Egyptian Pound</option>
          <option value="ERN">ERN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Eritrean Nakfa</option>
          <option value="ETB">ETB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ethiopian Birr</option>
          <option value="EUR">EUR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Euro</option>
          <option value="FJD">FJD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fijian Dollar</option>
          <option value="FKP">FKP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Falkland Islands Pound</option>
          <option value="GBP">GBP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;British Pound Sterling</option>
          <option value="GEL">GEL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Georgian Lari</option>
          <option value="GGP">GGP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guernsey Pound</option>
          <option value="GHS">GHS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ghanaian Cedi</option>
          <option value="GIP">GIP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gibraltar Pound</option>
          <option value="GMD">GMD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gambian Dalasi</option>
          <option value="GNF">GNF&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guinean Franc</option>
          <option value="GTQ">GTQ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guatemalan Quetzal</option>
          <option value="GYD">GYD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guyanaese Dollar</option>
          <option value="HKD">HKD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hong Kong Dollar</option>
          <option value="HNL">HNL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Honduran Lempira</option>
          <option value="HRK">HRK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Croatian Kuna</option>
          <option value="HTG">HTG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Haitian Gourde</option>
          <option value="HUF">HUF&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hungarian Forint</option>
          <option value="IDR">IDR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indonesian Rupiah</option>
          <option value="ILS">ILS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Israeli New Sheqel</option>
          <option value="IMP">IMP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manx pound</option>
          <option value="INR">INR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indian Rupee</option>
          <option value="IQD">IQD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Iraqi Dinar</option>
          <option value="IRR">IRR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Iranian Rial</option>
          <option value="ISK">ISK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Icelandic Króna</option>
          <option value="JEP">JEP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jersey Pound</option>
          <option value="JMD">JMD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jamaican Dollar</option>
          <option value="JOD">JOD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jordanian Dinar</option>
          <option value="JPY">JPY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Japanese Yen</option>
          <option value="KES">KES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kenyan Shilling</option>
          <option value="KGS">KGS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kyrgystani Som</option>
          <option value="KHR">KHR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cambodian Riel</option>
          <option value="KMF">KMF&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comorian Franc</option>
          <option value="KPW">KPW&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;North Korean Won</option>
          <option value="KRW">KRW&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;South Korean Won</option>
          <option value="KWD">KWD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kuwaiti Dinar</option>
          <option value="KYD">KYD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cayman Islands Dollar</option>
          <option value="KZT">KZT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kazakhstani Tenge</option>
          <option value="LAK">LAK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Laotian Kip</option>
          <option value="LBP">LBP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lebanese Pound</option>
          <option value="LKR">LKR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sri Lankan Rupee</option>
          <option value="LRD">LRD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Liberian Dollar</option>
          <option value="LSL">LSL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lesotho Loti</option>
          <option value="LYD">LYD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Libyan Dinar</option>
          <option value="MAD">MAD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moroccan Dirham</option>
          <option value="MDL">MDL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moldovan Leu</option>
          <option value="MGA">MGA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Malagasy Ariary</option>
          <option value="MKD">MKD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Macedonian Denar</option>
          <option value="MMK">MMK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Myanma Kyat</option>
          <option value="MNT">MNT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mongolian Tugrik</option>
          <option value="MOP">MOP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Macanese Pataca</option>
          <option value="MRO">MRO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mauritanian Ouguiya</option>
          <option value="MUR">MUR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mauritian Rupee</option>
          <option value="MVR">MVR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maldivian Rufiyaa</option>
          <option value="MWK">MWK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Malawian Kwacha</option>
          <option value="MXN">MXN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mexican Peso</option>
          <option value="MYR">MYR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Malaysian Ringgit</option>
          <option value="MZN">MZN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mozambican Metical</option>
          <option value="NAD">NAD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Namibian Dollar</option>
          <option value="NGN">NGN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nigerian Naira</option>
          <option value="NIO">NIO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nicaraguan Córdoba</option>
          <option value="NOK">NOK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Norwegian Krone</option>
          <option value="NPR">NPR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nepalese Rupee</option>
          <option value="NZD">NZD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New Zealand Dollar</option>
          <option value="OMR">OMR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Omani Rial</option>
          <option value="PAB">PAB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Panamanian Balboa</option>
          <option value="PEN">PEN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Peruvian Nuevo Sol</option>
          <option value="PGK">PGK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Papua New Guinean Kina</option>
          <option value="PHP">PHP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Philippine Peso</option>
          <option value="PKR">PKR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pakistani Rupee</option>
          <option value="PLN">PLN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Polish Zloty</option>
          <option value="PYG">PYG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Paraguayan Guarani</option>
          <option value="QAR">QAR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qatari Rial</option>
          <option value="RON">RON&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Romanian Leu</option>
          <option value="RSD">RSD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Serbian Dinar</option>
          <option value="RUB">RUB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Russian Ruble</option>
          <option value="RWF">RWF&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rwandan Franc</option>
          <option value="SAR">SAR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Saudi Riyal</option>
          <option value="SBD">SBD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Solomon Islands Dollar</option>
          <option value="SCR">SCR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seychellois Rupee</option>
          <option value="SDG">SDG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sudanese Pound</option>
          <option value="SEK">SEK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Swedish Krona</option>
          <option value="SGD">SGD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Singapore Dollar</option>
          <option value="SHP">SHP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Saint Helena Pound</option>
          <option value="SLL">SLL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sierra Leonean Leone</option>
          <option value="SOS">SOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Somali Shilling</option>
          <option value="SRD">SRD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Surinamese Dollar</option>
          <option value="STD">STD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;São Tomé and Príncipe Dobra</option>
          <option value="SVC">SVC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Salvadoran Colón</option>
          <option value="SYP">SYP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Syrian Pound</option>
          <option value="SZL">SZL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Swazi Lilangeni</option>
          <option value="THB">THB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thai Baht</option>
          <option value="TJS">TJS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tajikistani Somoni</option>
          <option value="TMT">TMT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Turkmenistani Manat</option>
          <option value="TND">TND&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tunisian Dinar</option>
          <option value="TOP">TOP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tongan Paʻanga</option>
          <option value="TRY">TRY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Turkish Lira</option>
          <option value="TTD">TTD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trinidad and Tobago Dollar</option>
          <option value="TWD">TWD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New Taiwan Dollar</option>
          <option value="TZS">TZS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tanzanian Shilling</option>
          <option value="UAH">UAH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ukrainian Hryvnia</option>
          <option value="UGX">UGX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ugandan Shilling</option>
          <option value="USD">USD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;United States Dollar</option>
          <option value="UYU">UYU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uruguayan Peso</option>
          <option value="UZS">UZS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uzbekistan Som</option>
          <option value="VEF">VEF&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Venezuelan Bolívar Fuerte</option>
          <option value="VND">VND&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vietnamese Dong</option>
          <option value="VUV">VUV&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vanuatu Vatu</option>
          <option value="WST">WST&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Samoan Tala</option>
          <option value="XAF">XAF&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CFA Franc BEAC</option>
          <option value="XCD">XCD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;East Caribbean Dollar</option>
          <option value="XOF">XOF&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CFA Franc BCEAO</option>
          <option value="XPF">XPF&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CFP Franc</option>
          <option value="YER">YER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yemeni Rial</option>
          <option value="ZAR">ZAR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;South African Rand</option>
          <option value="ZMW">ZMW&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Zambian Kwacha</option>
        </select>
        <select
          class="form-control input-sm gpxticker-weight"
          id="gpxtickerRight_wgt-ag"
          v-model="unitvalue"
        >
          <option value="oz" selected>oz</option>
          <option value="kg">kg</option>
          <option value="g">g</option>
        </select>
        <v-btn type="submit" class="white--text" color="#164e87" :loading="loading">Scrape now</v-btn>
      </form>
    </div>
  </div>
</template>

<script>
import api from "../api.js"
export default {
    data(){
        return{
            loading: false,
            unitvalue:null,
            countryvalue:null,
            metal:null
        }        
    },
    methods:{
      submitInfo()
      {
        this.metal=this.$store.state.chosenwebsite.websitename;
        api.GoldQuery(this.metal,this.countryvalue,this.unitvalue).then((res)=>{
          console.log(res.data);
        });
      }
    }
};
</script>

<style>
</style>