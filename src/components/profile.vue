<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    width="500"
  >
    <v-img
      height="250"
      src="https://timesofindia.indiatimes.com/thumb/msid-66880878,imgsize-86155,width-800,height-600,resizemode-4/66880878.jpg"></v-img>

    <v-card-title>Benita Rego</v-card-title>
    <v-card-text>
      <v-row align="center">


        <div class="grey--text ml-4">Volunteer</div>
      </v-row>
      <div class="my-4 subtitle-1 black--text"><v-icon>mdi-account</v-icon>
        Female
      </div>
      <div class="my-4 subtitle-1 black--text"><v-icon>mdi-map</v-icon>
        Mumbai
      </div>
      <div class="my-4 subtitle-1 black--text"><v-icon>mdi-description</v-icon>
      I am 20 year old student, a fun loving girl who gets along with others really well.
      I wanna help the needy and try my best in giving them all the happiness they deserve.
      </div>
      <div class="my-4 subtitle-1 black--text"><v-icon>mdi-phone</v-icon>
        9892938847
      </div>
      <div class="my-4 subtitle-1 black--text"><v-icon>mdi-email</v-icon>
        regobenita26@gmail.com
      </div>
      <div class="my-4 subtitle-1 black--text"><v-icon>mdi-interest</v-icon>
        Education
      </div>
      <div class="my-4 subtitle-1 black--text"><v-icon>mdi-special</v-icon>
        Teacher
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple accent-4"
        text
        @click="savechanges"
      >
        Save Changes
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>
