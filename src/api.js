import axios from "axios";
// const URL = "http://localhost:5000";
axios.interceptors.request.use(
  function(config) {
    if (config.url == "http://ip-api.com/json") return config;
    config.withCredentials = true;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default {
  getlocation() {
    return axios.get("http://ip-api.com/json");
  },
  register(user) {
    return axios.post(`account/register`, user);
  },
  login(user) {
    return axios.post(`account/login`, user);
  },
  checktoken() {
    return axios.get(`check-token`);
  },
  deletetoken() {
    return axios.get(`delete-token`);
  },
  changepicture(picture) {
    return axios.post(`account/picture`, picture);
  },
  changepassword(email) {
    return axios.put(`account/change-pw?email=${email}`, null);
  },
  userChangesPw(user) {
    return axios.post("account/changed-pass", user);
  },
  scrapeweb(info) {
    return axios.post("find", info);
  },
  GoldQuery(metal,country,unit){
   return axios.post(`http://localhost:5000/find/findmetals?metal=${metal}&country=${country}&unit=${unit}`);
  },
  CurrencyQuery(Have,Want,Amount){
    return axios.post(`http://localhost:5000/find/currency?Have=${Have}&Want=${Want}&Amount=${Amount}`);
  }
};
