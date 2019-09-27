<template>
<v-app>
  <v-app id="inspire">

    <v-app-bar app color="yellow darken-1" dark>
      <v-btn depressed class="transparent" to="/"><v-toolbar-title class="text-uppercase white--text">
                <span class="font-weight-light">Sun</span>
                <span>Shine</span>
            </v-toolbar-title></v-btn>
            <v-spacer></v-spacer>
            <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn to="/" text>Home</v-btn>
        <v-btn to="/ourstory" text>Our Story</v-btn>
        <v-btn to="/whatwedo" text>What we do?</v-btn>
        <v-btn to="/ourimpact" text>Our Impact</v-btn>
        <v-btn to="/jointhemovement" text>Join the Movement</v-btn>
        <v-btn to="/donate" text>Donate</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
       <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
       <div id="heading">
    <v-col align="center" justify="center">
      <v-avatar>
      <v-img class="white--text" src="@/assets/sunshine.png"></v-img>
    </v-avatar>
      <h1 class="display-3 font-weight-thin mb-4">Sunshine Foundation</h1>
      <h4 class="subheading">Be a part of our Community!</h4>
      <v-btn to="/Register" class="text-center" color="transparent" dark large>Join NOW!</v-btn>
    </v-col>
    </div>
  </v-parallax>

  <v-row>
    <v-hover>
      <template v-slot="{hover}">
  <v-card :elevation="hover ? 24 : 6" class="mx-auto" width="400px">
    <v-img class="white--text" height="200px" src="@/assets/volunteer.png">
      <v-card-title class="align-end fill-height black--text">VOLUNTEER Login</v-card-title>
    </v-img>
    <v-card-text>
      <span class="text--primary">
        <span>Volunteer for our events and spread happiness</span>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn to="/loginforvolunteers" text color="orange">Volunteer Login</v-btn>
    </v-card-actions>
  </v-card>
      </template>
    </v-hover>

<v-hover>
   <template v-slot="{hover}">
<v-card :elevation="hover ? 24 : 6" class="mx-auto" width="400px">
    <v-img class="white--text" height="200px" src="@/assets/staff.jpg">
      <v-card-title class="align-end fill-height black--text">STAFF Login</v-card-title>
    </v-img>

    <v-card-text>
      <span class="text--primary">
        <span>Staff (Sunshine Foundation) </span>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn to="/loginforstaff" text color="orange">Staff Login</v-btn>
    </v-card-actions>
  </v-card>
   </template>
  </v-hover>
  </v-row>
      <!--<v-carousel v-model="model">
      <v-carousel-item
        v-for="(color, i) in colors"
        :key="color"
      >
        <v-sheet
          :color="color"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>-->
    </v-content>
    <v-footer color="yellow darken-1" app>
      <span class="white--text">&copy; Benifer (Webmasters-2019)</span>
      <v-toolbar-items class="justify-center">
        <v-btn to="faqs" class="white--text" text>FAQs</v-btn>
        <v-btn to="/privacypolicy" class="white--text" text>Privacy Policy</v-btn>
        <v-btn to="/contact" class="white--text" text>Contact us</v-btn>
      </v-toolbar-items>
      <template>
        <div class="flex-grow-1"></div>
        <v-btn icon>
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
      </template>
    </v-footer>
  </v-app>
</v-app>
</template>

<script>
import LoginforStaff from '../components/LoginforStaff';


export default {
  data () {
      return {
        colors: [
          'primary',
          'secondary',
          'yellow darken-2',
          'red',
          'orange',
        ],
        model: 0,
      }
    },
  components: {
    LoginforStaff,
  },
};
</script>

<style>
#heading {
  margin-top: 10px;
}
</style>
