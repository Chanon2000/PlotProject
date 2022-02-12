<template>
  <v-app>
    <v-main>
    <!-- <router-view ></router-view> -->
    <router-view></router-view>
    <!-- <SignUp :email="this.lineprofilePrivate.email"/> -->
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {},
  beforeCreate() {
    console.log("init");
  },
  data() {
    return {
      lineprofilePrivate: {
        userId: "",
        displayName: "",
        pictureUrl: "",
        statusMessage: "",
        email: "",
        linetoken: ""
      }
    };
  },
  mounted() {
    this.$liff.init(
      { liffId: "1655992126-ENl5gGga" }, //productiton id => 1656018813-JYaDevOG //dev saifah => 1655383415-Zb72O2jA
      this.$liff.ready.then(
        () => {
          if (this.$liff.isLoggedIn()) {
            console.log("isLoggedIn");
            this.$liff
              .getProfile()
              .then((profile) => {
                this.lineprofilePrivate = profile;
                this.lineprofilePrivate.email = this.$liff.getDecodedIDToken().email;
                this.lineprofilePrivate.lineToken = this.$liff.getAccessToken();
                this.$store.dispatch("setLineProfile", this.lineprofilePrivate); // เอาค่า profile ไปเก็บที่ store
                // console.log(this.lineprofilePrivate.email);
                //  check user  regis หรือ
                // line token
                this.lineprofilePrivate.lineToken = this.$liff.getAccessToken();
                // console.log(lineoken);
                console.log(this.lineprofilePrivate.userId);
                console.log(this.lineprofilePrivate);
                //  call api  checkregis

                // ไม่มี  push / ไปหน้า signup
              })
              .catch((err) => console.error(err));
          } else {
            this.$liff.login({
              scope:
                "profile,profile%20openid,profile%20openid%20email,openid,openid%20email",
              prompt: "consent",
            });
            // console.log("Work!!")
            // this.lineToken = this.$liff.getAccessToken();
            // this.$store.dispatch("setToken", this.lineToken);
            
          }
        },
        (err) => console.error(err.code)
      )
    );
  },
  methods: {
    ...mapActions(["setLineProfile"]),
  },
};
</script>

<style scoped>
.my-div {
  margin: 0px !important;
}
</style>
