<template>
  <v-app class="grey lighten-3">
    <v-app-bar app color="yellow darken-1" dark>
      <v-btn depressed class="transparent" to="/">
        <v-toolbar-title class="text-uppercase white--text">
          <span class="font-weight-light">Sun</span>
          <span>Shine</span>
        </v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn depressed class="transparent" to="/">Back to Home</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <div id="parallax">
      <v-parallax dark src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <v-row align="center" justify="center"></v-row>
      </v-parallax>
    </div>

    <v-container id="dashboard">
      <v-row>
        <v-col>
          <v-card class="elevation-12" max-width="500px" id="create_card">
            <v-toolbar color="yellow darken-1" dark flat>
              <v-toolbar-title>Edit</v-toolbar-title>
              <div class="flex-grow-1"></div>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form_create" @submit.prevent="updateEvents">
                <v-text-field
                  v-model="title"
                  label="Title"
                  id="title"
                  name="title"
                  prepend-icon
                  type="text"
                  width="50px"
                ></v-text-field>

                <v-select
                  v-model="location"
                  label="Location"
                  :items="city"
                  :rules="[v => !!v || 'required']"
                  required
                ></v-select>

                <v-text-field
                  v-model="imageUrl"
                  label="Image Url"
                  id="image-url"
                  name="imageUrl"
                  prepend-icon
                  type="text"
                ></v-text-field>
                <v-layout row>
                  <v-flex xs12 sm6 offset-sm0>
                    <img :src="imageUrl" height="300" />
                  </v-flex>
                </v-layout>
                <v-text-field
                  v-model="start"
                  label="Start Date"
                  id="start_date"
                  name="start_date"
                  prepend-icon
                  type="date"
                  width="50px"
                ></v-text-field>
                <v-text-field
                  v-model="end"
                  label="End Date"
                  id="end_date"
                  name="end_date"
                  prepend-icon
                  type="date"
                  width="50px"
                ></v-text-field>

                <v-textarea
                  v-model="description"
                  label="Description"
                  id="description"
                  name="description"
                  prepend-icon
                  type="text"
                  hint="Describe in so and so words"
                ></v-textarea>
                <v-combobox
                  v-model="chips"
                  :items="items"
                  chips
                  clearable
                  multiple
                  solo
                  label="Keywords"
                >
                  <template v-slot:selection="{ attrs, item, select, selected }">
                    <v-chip
                      v-bind="attrs"
                      :input-value="selected"
                      close
                      @click="select"
                      @click:close="remove(item)"
                    >
                      <p>{{ item }}</p>&nbsp;
                    </v-chip>
                  </template>
                </v-combobox>

                <v-btn class="primary mb-5 mt-5" type="submit">SAVE</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-layout>
      <v-footer color="yellow darken-1" app>
        <span class="white--text">&copy; (TE COMPUTER Webmasters-2019)</span>
      </v-footer>
    </v-layout>
  </v-app>
</template>

<script>
import db from "../components/firebaseInit";
import firebase from "firebase";

export default {
  name: "Edit",
  data() {
    return {
      title: "",
      title_id: "",
      start: "",
      end: "",
      location: "",
      city: [
        "Ahmedabad",
        "Bangalore",
        "Chennai",
        "Delhi",
        "Firozabad",
        "Gwailor",
        "Hyderabad",
        "Jaipur",
        "Kolkata",
        "Lucknow",
        "Mumbai",
        "Noida",
        "Pune",
        "Raipur",
        "Srinagar"
      ],
      imageUrl: "",
      description: "",
      chips: [],
      items: ["Clean-up", "Donation"],
      staff_email: this.$route.params.staffEmail
    };
  },
  created() {
    db.collection("events")
      .where("Event_ID", "==", this.$route.params.eventID)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.title = doc.data().Title;
          this.title_id = this.$route.params.eventID;
          this.start = doc.data().Start_Date;
          this.end = doc.data().End_Date;
          this.location = doc.data().Location;
          this.imageUrl = doc.data().Image_Url;
          this.description = doc.data().Description;
          this.chips = doc.data().Keywords;
          this.staff_email = doc.data().Staff_Email;
        });
      });
  },
  methods: {
    updateEvents() {
      db.collection("events")
        .where("Event_ID", "==", this.$route.params.eventID)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                Title: this.title,
                Event_ID: this.title_id,
                Start_Date: this.start,
                End_Date: this.end,
                Location: this.location,
                Image_Url: this.imageUrl,
                Description: this.description,
                Keywords: this.chips,
                Staff_Email: this.staff_email
              })
              .then(() => {
                this.$router.push({
                  name: "dashboardStaff",
                  params: { staffEmail: this.staff_email }
                });
              });
          });
        });
    }
  }
  // beforeRouteEnter(to, from, next) {
  //   db.collection("events")
  //     .where("Events_ID", "==", to.params.eventID)
  //     .get()
  //     .then(querySnapshot => {
  //       querySnapshot.forEach(doc => {
  //         next(vm => {
  //           vm.title = doc.data().Title;
  //           vm.title_id = this.$route.params.eventID;
  //           vm.start = doc.data().Start_Date;
  //           vm.end = doc.data().End_Date;
  //           vm.location = doc.data().Location;
  //           vm.imageUrl = doc.data().Image_Url;
  //           vm.description = doc.data().Description;
  //           vm.chips = doc.data().Keywords;
  //           vm.staff_email = doc.data().Staff_Email;
  //         });
  //       });
  //     });
  // },
  // watch: {
  //   $route: "fetchEvent"
  // },

  // methods: {
  //   logout: function() {
  //     firebase
  //       .auth()
  //       .signOut()
  //       .then(() => {
  //         this.$router.push("/loginforstaff/");
  //       });
  //   },
  //   fetchEvent() {
  //     db.collection("events")
  //       .where("Events_ID", "==", this.$route.params.eventID)
  //       .get()
  //       .then(querySnapshot => {
  //         querySnapshot.forEach(doc => {
  //           this.title = doc.data().Title;
  //           this.title_id = this.$route.params.eventID;
  //           this.start = doc.data().Start_Date;
  //           this.end = doc.data().End_Date;
  //           this.location = doc.data().Location;
  //           this.imageUrl = doc.data().Image_Url;
  //           this.description = doc.data().Description;
  //           this.chips = doc.data().Keywords;
  //           this.staff_email = this.$route.params.staffEmail;
  //         });
  //       });
  //   }
  // }
};
</script>

<style scoped>
#dashboard {
  margin-top: -350px;
  margin-left: 22%;
}

/* #parallax {
  height: 1000px;
} */
</style>