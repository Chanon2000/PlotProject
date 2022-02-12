<template>
  <router-link :to="{ name: 'PostShow', params: { id: plot.id } }">
  <div>
      <v-card class="mx-auto justify-center" max-width="600" outlined >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="caption">{{ plot.Category }} > สร้างเมื่อ {{ plot.CreateDate }}</div>
        <v-list-item-title class="mb-1 text-decoration-underline font-weight-black">
          {{ plot.TitleDeed }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ plot.detail }}</v-list-item-subtitle>
      </v-list-item-content>
                <v-list-item-action>
                          <v-list-item-avatar size="48" color="#5db075">
          <v-icon large> mdi-pencil </v-icon>
        </v-list-item-avatar>
                </v-list-item-action>
    </v-list-item>
  </v-card>
    <!-- <v-card elevation="2">
      <v-card-title>
        {{ plot.TitleDeed }}
      </v-card-title>
      <v-card-text>
        <div v-if="showDetail">
          <div class="text--primary">
            <p>{{ plot.Address }}</p>
            <p>{{ plot.Category }}</p>
            <p>{{ plot.detail }}</p>
          </div>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
          @click="showDetail = !showDetail"
        >
          <span v-if="showDetail == false">More</span>
          <span v-if="showDetail">Out</span>
        </v-btn>
      </v-card-actions>
    </v-card> -->
  </div>
  </router-link>
</template>

<script>
export default {
  props: ["plot"],
  data() {
    return {
      showDetail: false,
    };
  },
};
</script>

<style></style>
