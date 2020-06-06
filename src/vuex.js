import Vuex from "vuex";
import Vue from "vue";
import VuexPersist from "vuex-persist";
const vuexPersist = new VuexPersist({
  key: "user-info",
  storage: window.localStorage
});
Vue.use(Vuex);
const store = new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    user: null,
    newEmail: null,
    chosenwebsite: null,
    metal:null
  
  },
  mutations: {
    setEmail(state, email) {
      state.newEmail = email;
    },
    assignUser(state, user) {
      state.user = user;
    },
    assignpicture(state, picture) {
      state.user.picture = picture;
    },
    assignwebsite(state, website) {
      state.chosenwebsite = website;
    },
    
  },
  getters: {
    userImage: state => {
      return state.user.picture;
    },
    userEmail: state => {
      return state.user.email;
    },
    userName: state => {
      return `${state.user.firstname} ${state.user.lastname}`;
    },
    website: state => {
      return state.chosenwebsite;

    },
  }
});
export default store;
