<template>
  <v-card :loading="loading" class="mx-auto my-12" width="500">
    <v-img height="250" :src="imgURL"></v-img>

    <v-card-title class="font-weight-bold">{{title}}</v-card-title>
    <v-card-text>
      <v-row align="center"></v-row>
      <div class="my-4 subtitle-1 black--text">
        <v-icon>mdi-map</v-icon>
        Location: {{location}}
      </div>
      <div class="my-4 subtitle-1 black--text">
        <v-icon>mdi-description</v-icon>Description:
        <br />
        {{description}}
      </div>
      <div class="my-4 subtitle-1 black--text">
        <v-icon>mdi-calendar</v-icon>
        Start Date: {{startDate}}
      </div>
      <div class="my-4 subtitle-1 black--text">
        <v-icon>mdi-calendar</v-icon>
        End Date: {{endDate}}
      </div>
      <div>
        <v-row>
          <v-col v-for="labels in keywords" :key="labels" cols="12" sm="1" md="4" lg="4">
            <v-chip class="ma-2" color="primary" label text-color="white" small>
              <v-icon left>mdi-label</v-icon>
              {{labels}}
            </v-chip>
          </v-col>
        </v-row>
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn color="deep-purple accent-4" text @click="register">Register</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import db from "../components/firebaseInit";
export default {
  name: "viewMore",
  data() {
    return {
      loading: false,
      selection: 1,
      description: "",
      endDate: "",
      startDate: "",
      imgURL: "",
      keywords: [],
      location: "",
      title: "",
      Vol_Emails: []
    };
  },
  created() {
    db.collection("events")
      .where("Event_ID", "==", this.$route.params.EventID)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          (this.description = doc.data().Description),
            (this.endDate = doc.data().End_Date),
            (this.startDate = doc.data().Start_Date),
            (this.imgURL = doc.data().Image_Url),
            (this.keywords = doc.data().Keywords),
            (this.location = doc.data().Location),
            (this.Vol_Emails = doc.data().Volunteer_Email),
            (this.title = doc.data().Title);
        });
      });
  },

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    register() {
      this.Vol_Emails.push(this.$route.params.volEmail);
      console.log(this.Vol_Emails);
      db.collection("events")
        .where("Event_ID", "==", this.$route.params.EventID)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                Volunteer_Email: this.Vol_Emails
              })
              .then(() => {
                window.alert("Successful");
              });
          });
        });
    }
  }
};
</script>
