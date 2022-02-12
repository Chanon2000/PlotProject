<template>
  <div>
    <v-container class="pt-0 pb-0">
      <header>
      <v-row>
        <v-col cols="12">
          <div class="mt-8 text-title text-center">
            ประวัติส่วนตัว
          </div>
        </v-col>
      </v-row>
      </header>
      <v-row class="my-row">
        <v-col cols="12" class="pb-0">
          <div class="text-center">
            <v-avatar class= "my-avatar" size="155">
              <img :src="getProfile.pictureUrl" alt="alt" />
            </v-avatar>
          </div>
        </v-col>
        <v-col cols="12" class="pb-0">
          <v-list two-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-account </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title
                  >{{ getProfile.firstName }} {{ getProfile.lastName }}</v-list-item-title
                >
                <v-list-item-subtitle>ชื่อ นามสกุล</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <!-- end Account -->
          </v-list>
        </v-col>

        <v-col cols="12">
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo"> mdi-phone </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title> {{ getProfile.tel }} </v-list-item-title>
              <v-list-item-subtitle>เบอร์โทรศัพท์</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <!-- end phone -->
        </v-col>
        <v-col cols="12">
          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo"> mdi-email </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ getProfile.email }}</v-list-item-title>
              <v-list-item-subtitle>อีเมล</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>

        <v-col cols="12">
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo"> mdi-map-marker </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title> {{ getProfile.address }} </v-list-item-title>
              <v-list-item-subtitle>ประเทศไทย</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <div class="w-100 text-center my-btn" @click="back">
              <v-btn @click="back" block rounded large>
            กลับ
              </v-btn>
            </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Profile",
  computed: mapGetters(['getProfile']),
  methods: {
    ...mapActions(["fetchProfile"]),
    back() {
      this.$router.push("/usermenu").catch(()=>{});
    }
  },
  created(){
    this.fetchProfile();
  }
};
</script>
<style>
/* header styles */
.avatar {
  margin-top: 2.5em;
  border: 5.5px solid currentColor;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}
header {
  color: white;
  background: #5db075 no-repeat center center;
  background-size: cover;
  text-align: center;
  height: 10em;
}
header p {
  font-style: italic;
  font-size: 1.5em;
  margin-top: -10px;
  padding-top: 5px;
}
/* main */

.container {
  padding: 0 !important;
  /* margin: -5px; */
}
.my-div {
  margin: -6px !important;
}
.w-100 {
  width: 100%;
}
.my-btn {
  font-size: 20px;
  text-transform: none !important;
  height: auto !important;
  padding: 10px !important;
  font-weight: bold;
}
.my-row {
  padding: 0 20px;
}
.text-title {
  font-size: 20px;
  font-weight: bold;
}

.my-avatar {
  margin-top: -5em !important;
  border: 5.8px solid currentColor;
  border-radius: 50%;
  color: white;
}
</style>
