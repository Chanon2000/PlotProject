<template>
  <div>
      <v-container class="pt-0 pb-0">
          <div class="d-flex flex-row">
              <v-icon class="ml-2 " @click="back" >mdi-arrow-left</v-icon>
              <p id="title">สร้างโพสต์</p>
              </div>
              <v-container grid-list-xs class="">
                        <v-row
        no-gutters
        style="height: 500px;"
      >
        <v-col class="ml-13" style="max-width: 70%">
            <div class="text-subtitle-1"><p class="font-weight-light"> หัวข้อโพสต์ </p>
            </div>
            <v-form
              ref="form"
            v-model="valid"
            lazy-validation
            >
            <v-text-field
            class="mt-n4"
            solo
            outlined
            v-model="Topic"
            :counter="30"
            :rules="topicRules"
            label="หัวข้อโพสต์"
            required
            >
            </v-text-field>
            <div class="text-subtitle-1"><p class="font-weight-light"> เนื้อหา </p>
            </div>
            <v-textarea
            class="mt-n4"
            solo
            outlined
            name="input-7-4"
            label="Solo textarea"
        ></v-textarea>
        <div class="text-subtitle-1"><p class="font-weight-light"> เพิ่มรูปภาพ </p>
            </div>
               <div>
      <v-btn
        color="white"
        class="text-none"
        rounded
        :loading="isSelecting"
        @click="onButtonClick"
      >
        <v-icon left>
            mdi-camera
        </v-icon>
        {{ buttonText }}
      </v-btn>
      <input
        ref="uploader"
        class="d-none"
        type="file"
        accept="image/*"
        @change="onFileChanged"
      >
    </div>
    <v-row class="text-center">
        <v-col>       
          <v-btn
           @click="handleSubmit"
          color="#34C759"
        class="mt-5 mr-4"
        type="submit"
        :disabled="invalid"
      >
        submit
      </v-btn>
      </v-col>
    </v-row>
            </v-form>
            </v-col>
    </v-row>
    </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
    name: "CreatePost",
      data: () => ({
    defaultButtonText: 'เพิ่มรูปภาพ',
    selectedFile: null,
    isSelecting: false
    }),
  computed: {
    buttonText() {
      return this.selectedFile ? this.selectedFile.name : this.defaultButtonText
    }
  },
  methods: {
    onButtonClick() {
      this.isSelecting = true
      window.addEventListener('focus', () => {
        this.isSelecting = false
      }, { once: true })

      this.$refs.uploader.click()
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0]
      
      // do something
    },
    back() {
        this.$router.push("/usermenu").catch(()=>{});
    },
    handleSubmit() {
        this.$router.push("/postshow").catch(()=>{});
        },
  }

}
</script>

<style scoped>

.v-icon--left {
  margin-right: 8px;
}

</style>