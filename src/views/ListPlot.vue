<template>
  <div>
    <v-container class="pt-0 pb-0">
  
    <div class="d-flex flex-row">
      <v-icon class="ml-2 " @click="back" >mdi-arrow-left</v-icon>
      <p id="title">โพสต์ของฉัน</p>
    </div>
  <v-tabs
    fixed-tabs
    icons-and-text
  >
    <v-tabs-slider color="green"></v-tabs-slider>

    <v-tab href="#tab-1">
      ให้ความรู้
      <v-icon>mdi-barley</v-icon>
    </v-tab>

    <v-tab href="#tab-2">
      สอบถามปัญหา
      <v-icon>mdi-lightbulb-on</v-icon>
    </v-tab>

    <v-tab-item
      v-for="i in 2"
      :key="i"
      :value="'tab-' + i"
    >
    <v-divider></v-divider>
    <div class=" ml-10 mt-6">
    <v-row>
      <v-col cols="12" style="max-width: 90%">

        <!-- <v-card-text>{{ text }}</v-card-text> -->

    <div id="plot" v-for="plot in listPlots" :key="plot.id">
      <Plot :plot="plot" />
    </div>
      </v-col>
      </v-row>
      </div>
    </v-tab-item>
  </v-tabs>


    </v-container>
  </div>
</template>

<script>
import Plot from "@/components/Plot.vue";

export default {
  components: { Plot },
  data() {
    return {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      ,
      Plot: null,
      listPlots: [
        {
          id: 1,
          TitleDeed: "การปลูกต้นลำไย",
          Category: "ผลไม้",
          CreateDate: "19/01/64",
          detail:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
        },
        {
          id: 2,
          TitleDeed: "การปลูกต้นมะม่วง",
          Category: "ผลไม้",
          CreateDate: "20/01/64",
          detail:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
        },
        {
          id: 3,
          TitleDeed: "การปลูกผักสลัด",
          Category: "พืชผัก",
          CreateDate: "21/01/64",
          detail:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
        },
      ],
    };
  },
  methods:{
    back() {
      this.$router.push("/usermenu").catch(()=>{});
    }
  }
};
</script>

<style>
#title {
  padding-top: 15px;
  padding-left: 20px;
  font-size: 25px;
  font-family: Roboto;
}
#subtitle {
  padding-left: 10px;
  padding-top: 10px;
}
#plot {
  padding-top: 5px;
}
/* #line {
        padding-bottom: 5px;
    } */
</style>
