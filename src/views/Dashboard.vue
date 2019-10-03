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
        <v-col cols="12" sm="8" md="4" lg="12">
          <v-card class="elevation-12" height="auto" min-height="500px">
            <v-toolbar color="yellow darken-4" dark flat>
              <v-toolbar-title>DASHBOARD</v-toolbar-title>
              <div class="flex-grow-1"></div>
            </v-toolbar>
            <v-card-text>
              <v-card height="auto" class="d-flex flex-row" min-height="500px">
                <v-navigation-drawer absolute permanent left>
                  <template v-slot:prepend>
                    <v-list-item two-line>
                      <v-list-item-avatar>
                        <img src="https://randomuser.me/api/portraits/women/81.jpg" />
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>Jane Smith</v-list-item-title>
                        <v-list-item-subtitle>Logged In</v-list-item-subtitle>
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

                  <v-list dense></v-list>
                </v-navigation-drawer>

                <v-container style="height: auto;">
                  <v-row>
                    <v-col cols="12" offset-lg="6">
                      <profile-card v-if="sidebar[0].show"></profile-card>
                      <completed-list v-else-if="sidebar[1].show"></completed-list>
                      <ongoing-list v-else-if="sidebar[2].show"></ongoing-list>
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
import ProfileCard from "../components/profile_card";
import CompletedList from "../components/completed_list";
import OngoingList from "../components/ongoing_list";
export default {
  data() {
    return {
      sidebar: [
        { title: "Profile", icon: "mdi-account-badge-horizontal", show: true },
        { title: "Completed", icon: "mdi-calendar-check-outline", show: false },
        { title: "On-going", icon: "mdi-calendar-clock", show: false }
      ]
    };
  },
  components: {
    "profile-card": ProfileCard,
    "completed-list": CompletedList,
    "ongoing-list": OngoingList
  },
  methods: {
    changeBoolean(index) {
      if (index == 0) {
        this.sidebar[0].show = true;
        this.sidebar[1].show = false;
        this.sidebar[2].show = false;
      } else if (index == 1) {
        this.sidebar[0].show = false;
        this.sidebar[1].show = true;
        this.sidebar[2].show = false;
      } else if (index == 2) {
        this.sidebar[0].show = false;
        this.sidebar[1].show = false;
        this.sidebar[2].show = true;
      }
    }
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