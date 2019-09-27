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

  <v-container class="">
    <p class="text-justify">
    Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.

    Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
  </p>
  </v-container>
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
