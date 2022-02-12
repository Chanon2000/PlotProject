<template>
  <div>
      <v-container class="pt-0 pb-0">
              <div class=" ml-6 mt-10">
          <v-row>
    <v-col cols="12" style="max-width: 90%">
          <div class="text-h5 mb-2"><v-icon class="ml-2 mr-2" @click="back" >mdi-arrow-left</v-icon>{{ post.title }}</div>
          <v-divider ></v-divider>
          </v-col>
          <v-col cols="12" class="text-justify" style="max-width: 95%">
              <p> {{ post.detail }}</p>
              <v-col cols="12" class="mb-2">
                  <v-img
                  lazy-src="https://picsum.photos/id/11/10/6"
                  max-height="190"
                  max-width="235"
                  src="https://picsum.photos/id/11/500/300"
                  >
                  </v-img>
              </v-col>
          <v-divider ></v-divider>
          </v-col>
          <v-col cols="12" style="max-width: 90%" class=" mt-n2">
              <p class="text-caption text-right">
                  <v-img max-height="30"
              max-width="86"
              src="https://cdn.discordapp.com/attachments/691554684120334338/850284839042154516/wide-default.png"
              style="float: left">
              </v-img>
              วันที่โพสต์ 1 ส.ค. 2562 เวลา 16.37 น <br> <small>โดย นาย แสนดี สุดยอด</small> </p>
          </v-col>
          </v-row>
          </div>
      </v-container>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  props: ['id'],
  data() {
      return {
          post: {
              id: "1",
              title: "การปลูกต้นลำไย",
              detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
              picUrl: "https://picsum.photos/id/11/500/300",
              category: "ผลไม้",
              createDate: "19/01/64"
          }
    }
  },
    methods:{
        back() {
            this.$router.push("/listplots").catch(()=>{});
    },
    },
//   created() {
//     this.$store.dispatch('fetchPost', this.id) //ทำ Poststore...
//   },
//   computed: mapState(['post'])
}
</script>

<style>

</style>