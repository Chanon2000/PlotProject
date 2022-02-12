<template>
  <div>
        <v-container class="pt-0 pb-0">
      <header>
      <!-- profile -->
            <v-row>
        <v-col cols="12">
          <div class="mt-8 text-title text-center">
            สมุดทะเบียนเกษตรกรดิจิทัล
          </div>
        </v-col>
            </v-row>
        <router-link :to="{ name: 'Profile' }">
          <v-avatar class="my-avatar1" size="155">
              <img :src="getProfile.pictureUrl" alt="alt" />
          </v-avatar>
        </router-link>
      </header>
    <v-container fluid class="pt-0 pb-0" >
      <br /><br />
      <div>
        <v-row justify="center" class="mt-4">
          <router-link :to="{ name: 'Profile' }">
            <v-card-title> {{ getProfile.firstName }} {{ getProfile.lastName }} </v-card-title>
          </router-link>
        </v-row>
        <v-card-text>
          <v-row align="center" class="mx-0" justify="center">
            <div class="grey--text ml-4 body-1" align="center">
              ขึ้นทะเบียนเมื่อ 17 เมษายน 2556 ณ {{ getProfile.address }}
            </div>
          </v-row>
        </v-card-text>
      </div>
      <br />
      <div class="font-weight-bold ml-8 mb-2">เมนู</div>
      <v-divider class="mx-4"></v-divider><br />
    </v-container>

    <!-- แจ้งปลูก/ปรับปรุง -->
    <div class="ml-10">
    <v-container fluid>
      <v-row dense>
        <v-col cols="12"  style="max-width: 90%">
                  <router-link :to="{ name: 'listPlots' }">
          <v-card>
            <v-card-actions>
              <v-list-item class="grow">
                <v-icon large left> mdi-pencil </v-icon>

                <v-list-item-content>
                  <v-list-item-title>โพสต์ของฉัน</v-list-item-title>
                  <v-list-item-subtitle>หัวข้อที่สร้างขึ้น</v-list-item-subtitle>
                </v-list-item-content>
                <v-row align="center" justify="end">
                  <v-icon large> mdi-chevron-right </v-icon>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
                  </router-link>
        </v-col>

        <!-- ตรวจข้อมูลแปลง -->
        <v-col cols="12"  style="max-width: 90%">
                  <router-link :to="{ name: 'CreatePost' }">
          <v-card>
            <v-card-actions>
              <v-list-item class="grow">
                <v-icon large left> mdi-flag-outline </v-icon>

                <v-list-item-content>
                  <v-list-item-title>สร้างโพสต์</v-list-item-title>
                  <v-list-item-subtitle>subtitle</v-list-item-subtitle>
                </v-list-item-content>
                <v-row align="center" justify="end">
                  <v-icon large> mdi-chevron-right </v-icon>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
                  </router-link>
        </v-col>

        <!-- สำรวจสมาชิก -->
        <v-col cols="12"  style="max-width: 90%">
          <v-card>
            <v-card-actions>
              <v-list-item class="grow">
                <v-icon large left> mdi-clipboard-text </v-icon>

                <v-list-item-content>
                  <v-list-item-title>ข่าวสาร</v-list-item-title>
                  <v-list-item-subtitle>subtitle</v-list-item-subtitle>
                </v-list-item-content>
                <v-row align="center" justify="end">
                  <v-icon large> mdi-chevron-right </v-icon>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- ใบรายงานผลการขึ้นทะเบียนเกษตรกร -->
        <v-col cols="12"  style="max-width: 90%">
          <v-card>
            <v-card-actions>
              <v-list-item class="grow">
                <v-icon large left> mdi-camera-enhance </v-icon>

                <v-list-item-content>
                  <v-list-item-title>ใบรายงานผล</v-list-item-title>
                  <v-list-item-subtitle>subtitle</v-list-item-subtitle>
                </v-list-item-content>
                <v-row align="center" justify="end">
                  <v-icon large> mdi-chevron-right </v-icon>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      
    </v-container>
        </div>
        </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "UserMenu",
  create() {
    this.$store.dispatch('')
  },
  computed:
    mapGetters(['getProfile']),
  methods: {
    ...mapActions(["fetchProfile"]),
    getPhoto() {
      return this.$store.getters.getProfileRegister.pictureUrl
    }
  },
  created(){
    this.fetchProfile();
  }
};
</script>

<style>
/* ้header */

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
header h1 {
  margin-top: 1.5em;
}

.v-application a {
    color: black !important;
    text-decoration: none;
    text-transform: none !important;
}
.my-avatar1 {
  /* margin-top: -3em !important; */
  border: 5.8px solid currentColor;
  border-radius: 50%;
  color: white;
}
 
</style>
