<template>
  <v-container class="fill-height" id="my_container">
    <v-row>
      <v-col
        cols="12"
        sm="1"
        md="3"
        lg="3"
        v-for="item in volunteering"
        :key="item.eventID"
        class="mr-5"
      >
        <v-card
          class="my-12 mr-12"
          max-width="374"
          elevation="200"
          width="200"
          color="#385F73"
          dark
        >
          <v-img
            height="150"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            contain
          ></v-img>

          <v-card-title>
            {{item.title}}
            <v-row align="center" justify="end"></v-row>
          </v-card-title>
          <v-card-text>
            <v-row align="center">
              <div class="white--text ml-4">{{item.location}}</div>
            </v-row>

            <div class="my-4 subtitle-2 white--text">{{item.startDate}}</div>
          </v-card-text>

          <!-- <v-card-text>
            <div>
              <p>{{item.description}}</p>
            </div>
            <div>
              <v-row>
                <v-col
                  v-for="(labels,index) in item.keywords"
                  :key="labels[index]"
                  cols="12"
                  sm="1"
                  md="4"
                  lg="5"
                >
                  <v-chip class="ma-2" color="primary" label text-color="white" small>
                    <v-icon left>mdi-label</v-icon>
                    {{labels}}
                  </v-chip>
                </v-col>
              </v-row>
            </div>
          </v-card-text>-->
          <!-- <v-divider class="mx-1"></v-divider> -->

          <v-card-actions>
            <!-- <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>

              <v-row align="center" justify="end">
                <div class="text-center">
            <router-link v-bind:to="{name: 'list', params: {vol_id: item.vol_id}}"><v-btn rounded color="primary" dark>View</v-btn></router-link>
                </div>
              </v-row>
            </v-list-item>-->

            <v-btn
              fab
              dark
              x-small
              color="teal"
              class="mr-10"
              @click="pushToEdit(item.eventID,item.completed)"
            >
              <v-icon dark>mdi-format-paint</v-icon>
            </v-btn>

            <div class="text-center">
              <v-btn
                fab
                dark
                x-small
                color="success"
                class="mr-10 ml-1"
                @click="pushToComplete(item.eventID)"
                :disabled="item.completed"
              >
                <v-icon dark>mdi-check-circle</v-icon>
              </v-btn>
              <v-snackbar
                top="top"
                v-model="snackbar_complete"
                color="yellow--text"
              >{{ text_complete }}</v-snackbar>
            </div>
            <div class="text-center">
              <v-btn fab dark x-small color="error" class="mr-9" @click="deleteEvent(item.eventID)">
                <v-icon dark>mdi-delete</v-icon>
              </v-btn>
              <v-snackbar top="top" v-model="snackbar_delete" color="yellow--text">{{ text_delete }}</v-snackbar>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import db from "../components/firebaseInit";
export default {
  name: "MyEventsStaff",
  data() {
    return {
      volunteering: [],
      keywords: [],
      dialogue: false,
      snackbar_complete: false,
      text_complete: "Completing your event",
      snackbar_delete: false,
      text_delete: "Deleting Event"
    };
  },
  methods: {
    pushToEdit(id) {
      this.$router.push({
        name: "Edit",
        params: { eventID: id }
      });
    },
    pushToComplete(id, completed) {
      if (confirm("Are you sure you want to mark this event as complete ?")) {
        this.snackbar_complete = true;
        db.collection("events")
          .where("Event_ID", "==", id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref
                .update({
                  Completed: true
                })
                .then(() => {
                  this.$router.go();
                });
            });
          });
      }
    },
    deleteEvent(id) {
      if (confirm("Are you sure you want to delete this event?")) {
        this.snackbar_delete = true;
        db.collection("events")
          .where("Event_ID", "==", id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.go();
            });
          });
      }
    }
  },
  computed: {},
  created() {
    db.collection("events")
      .where("Staff_Email", "==", this.$route.params.staffEmail)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            description: doc.data().Description,
            endDate: doc.data().End_Date,
            eventID: doc.data().Event_ID,
            imageURL: doc.data().Image_URL,
            keywords: doc.data().Keywords,
            location: doc.data().Location,
            startDate: doc.data().Start_Date,
            title: doc.data().Title,
            completed: doc.data().Completed
          };
          this.volunteering.push(data);
        });
      });
  }
};
</script>

<style scoped>
#my_container {
  margin-left: -2%;
}
#my_card {
  margin-right: 50px;
}
</style>