<template>
  <v-app class="grey lighten-3 page-wrapper">
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
        <v-col cols="12" sm="8" md="4" lg="12">
          <v-card class="elevation-12" height="auto" min-height="500px">
            <v-toolbar color="yellow darken-4" dark flat>
              <v-toolbar-title>STAFF DASHBOARD</v-toolbar-title>
              <div class="flex-grow-1"></div>
            </v-toolbar>
            <v-card-text>
              <v-card height="auto" class="d-flex flex-row" min-height="500px">
                <v-navigation-drawer absolute permanent left>
                  <template v-slot:prepend>
                    <v-list-item two-line>
                      <v-list-item-avatar>
                        <img
                          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                        />
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>{{name}}</v-list-item-title>
                        <v-list-item-subtitle v-show="isLoggedIn" class="success--text">Logged In</v-list-item-subtitle>
                        <v-list-item-subtitle v-show="!isLoggedIn" class="error--text">Logged In</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                  <v-divider></v-divider>
                  <v-list dense>
                    <v-list-item
                      v-for="(item,index) in sidebar"
                      :key="item.title"
                      @click="changeBoolean(index)"
                    >
                      <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>

                  <v-divider></v-divider>

                  <v-list dense>
                    <v-list-item @click="logout">
                      <v-list-item-icon>
                        <v-icon>mdi-exit-to-app</v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title>Logout</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-navigation-drawer>

                <v-container style="height: auto;">
                  <v-row>
                    <v-col cols="12" offset-lg="3">
                      <profile-card v-if="sidebar[0].show"></profile-card>
                      <my-events v-else-if="sidebar[1].show"></my-events>
                      <my-volunteers v-else-if="sidebar[2].show"></my-volunteers>
                      <create-event v-else-if="sidebar[3].show"></create-event>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
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
import ProfileCard from "../components/profile_card_staff";
import MyEvents from "../components/my_list";
import MyVolunteers from "../components/my_volunteers";
import Create from "../components/create_event";
export default {
  data() {
    return {
      name: "",
      email: "",
      sidebar: [
        { title: "Profile", icon: "mdi-account-badge-horizontal", show: true },
        { title: "My Events", icon: "mdi-playlist-star", show: false },
        { title: "My Volunteers", icon: "mdi-account-group", show: false },
        { title: "Create Event", icon: "mdi-calendar-plus", show: false }
      ],
      isLoggedIn: false,
      currentUser: false
    };
  },
  components: {
    "profile-card": ProfileCard,
    "my-events": MyEvents,
    "my-volunteers": MyVolunteers,
    "create-event": Create
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/loginforstaff/");
        });
    },
    changeBoolean(index) {
      if (index == 0) {
        this.sidebar[0].show = true;
        this.sidebar[1].show = false;
        this.sidebar[2].show = false;
        this.sidebar[3].show = false;
      } else if (index == 1) {
        this.sidebar[0].show = false;
        this.sidebar[1].show = true;
        this.sidebar[2].show = false;
        this.sidebar[3].show = false;
      } else if (index == 2) {
        this.sidebar[0].show = false;
        this.sidebar[1].show = false;
        this.sidebar[2].show = true;
        this.sidebar[3].show = false;
      } else if (index == 3) {
        this.sidebar[0].show = false;
        this.sidebar[1].show = false;
        this.sidebar[2].show = false;
        this.sidebar[3].show = true;
      }
    },
    fetchData() {
      db.collection("staff_data")
        .where("Email", "==", this.$route.params.staffEmail)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.name = doc.data().FullName;
          });
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    db.collection("staff_data")
      .where("Email", "==", to.params.staffEmail)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.name = doc.data().FullName;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  }
};
</script>

<style>
#dashboard {
  margin-top: -350px;
}

/* #parallax {
  height: 1000px;
} */
</style>