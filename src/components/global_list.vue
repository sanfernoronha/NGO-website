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

            <v-btn fab dark x-small color="success" class="mr-9">
              <v-icon dark>mdi-check-circle</v-icon>
            </v-btn>
            <v-btn fab dark x-small color="error" class="mr-9">
              <v-icon dark>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import db from "../components/firebaseInit";
export default {
  name: "Global",
  data() {
    return {
      volunteering: [],
      keywords: []
    };
  },
  created() {
    db.collection("events")
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
            title: doc.data().Title
          };
          this.volunteering.push(data);
        });
      });
  }
};
</script>

<style scoped>
#my_container {
  margin-left: -27%;
}
#my_card {
  margin-right: 50px;
}
</style>