import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";

let project_api_gate = "https://mis-api.cmu.ac.th/project_a/v1"; //https://mis-api.cmu.ac.th/project_a/v1


Vue.use(Vuex);

// const url = "http://localhost:5000/api/v1"

// const linetoken = "eyJhbGciOiJIUzI1NiJ9.o7lzTycWRR0G_sVnWYulzkAAORvn2vYId58OhAhxN0XcTOeqa16rCv11-Y_fvwmY1Ynfj9nG0RA5ucrfbMhz1g9pAdAUdjUa2Ao23dmm32RJ02nXa8Zjy1OvidcszDLhfIKzaYLMeIRv6je_rA0ImRCxkjqWcv8Vhl3EzOSFt0E.HUMJAl4ReUEGk3HkyzfxozPliyFXueDugDHD8wCpAuI";

// const headers = {
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer "+ this.state.lineprofile.linetoken
//   }
// }

export default new Vuex.Store({
  state: {
    dialog: {
      isShow: false,
      title: "",
      msg: "",
    },
    profile: {
      userEntityId: "", // gen เอง ที่ DB

      lineId: "", // get in backend

      // ที่ต้องส่งให้ backend
      Email: "",
      FirstName: "",
      LastName: "",
      tel: "",
      Address: "",

      createTime: "", // gen in backend

      displayName: "",
      pictureUrl: "https://cdn.vuetifyjs.com/images/profiles/marcus.jpg",
      statusMessage: "",
    },
    lineprofile: {
      userId: "",
      displayName: "",
      pictureUrl: "",
      statusMessage: "",
      email: "",
      lineToken: "",
    },
    
  },
  mutations: {
    set_Profile(state, data) {
      state.profile = { ...data }
      // console.log(state.profile)
    },
    SET_REGISTER(state, data) {
      state.profile = { ...data }
    },
    SET_LINE_PROFILE(state, data) {
      state.lineprofile = { ...data }
    },
  }, //SET val by mutation => to state
  actions: {
    async setRegister({ commit }, data) {

      const headers = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer "+ this.state.lineprofile.lineToken
        }
      } 

      let response = await axios.post( `${project_api_gate}/UserPost` ,data, headers);
      // console.log(response);
      commit("SET_REGISTER", response.data);
    },
    async setLineProfile({ commit }, data) {
      this.state.lineprofile = { ...data }
      // console.log(this.state.lineprofile)
      const headers = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer "+ this.state.lineprofile.lineToken
        }
      } 
      console.log(headers)
      await axios.get( `${project_api_gate}/User` , headers )
        .then(response => {
          // console.log(response.data)
        if( response.status == 200 && response.data.data != null ){ // ถ้า user registered
          commit('set_Profile', response.data.data) 
          if(router.history.current.path == '/'){
            router.push({ name : 'UserMenu' })
          } 
        } 
        // ถ้ายังไม่ได้ register
        commit('SET_LINE_PROFILE', data) 
        if(router.history.current.path == '/'){
          router.push({ name : 'signup' })
        } 
      })
    },
    async fetchProfile({ commit }) {
      // console.log(router.options.base)
      const headers = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer "+ this.state.lineprofile.lineToken
        }
      } 
      console.log(router.history.current.path)
      let response = await axios.get( `${project_api_gate}/User`, headers) ;
      // this.profile = response
      // console.log(response)
      // console.log(response.data.data)
      commit("set_Profile", response.data.data);
    },
  }, //to set state
  modules: {},
  getters: {
    getProfile(state) {
      return state.profile;
    },
    getLineprofile(state) {
      return state.lineprofile;
    },
    getToken(state) {
      return state.lineprofile.lineToken
  }
  }, // get val from state
  
});
