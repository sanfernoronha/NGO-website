<template>
<v-app>
  <v-app id="inspire">

    <v-app-bar app color="black" dark>
        <v-btn to="/">
      <v-img :src="require('@/assets/sun.png')" height="20px" max-width="50px"></v-img></v-btn>
      <v-btn depressed class="transparent" to="/"><v-toolbar-title class="text-uppercase white--text">
                <span class="font-weight-light">Sun</span>
                <span>Shine</span>
            </v-toolbar-title></v-btn>
            <v-spacer></v-spacer>
            <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn  to="/" text>Back to Home</v-btn>
      </v-toolbar-items>
    </v-app-bar>

<v-content>
    <div id="success" >
    <h2 class="text-center">Thank you for your precious donation to Sunshine Foundation.</h2>
    </div>
    <br><br>
    <div id="gif">
    <v-img src="https://media.giphy.com/media/Sv3cZObOeWMK539ixK/giphy.gif"></v-img>
    </div>
</v-content>

<v-footer color="black" app>
      <span class="white--text">&copy; Benifer (Webmasters-2019)</span>
      <v-toolbar-items class="justify-center">
        <v-btn to="faqs" class="white--text" text>FAQs</v-btn>
        <v-btn to="/privacypolicy" class="white--text" text>Privacy Policy</v-btn>
        <v-btn to="/contact" class="white--text" text>Contact us</v-btn>
      </v-toolbar-items>
      <template>
        <div class="flex-grow-1"></div>
        <v-btn id="iconbtn" icon>
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn id="iconbtn" icon>
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn id="iconbtn" icon>
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn id="iconbtn" icon>
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn id="iconbtn" icon>
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
      </template>
    </v-footer>
  </v-app>
</v-app>
</template>

<script>
export default {
  data() {
    return {
      src: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQq1V1XsTPEARKG_NQ73x_hFzP6-OmUdglfLiW0aWZDMXrPaZew",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZHPYK2qkFoZzjCwwRH9dRNk966mg7FpeMeChy4O0cbxRUWw1VA",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: [
        "Sunshine Foundation",
        "Are you ready for it? Apply now",
        "Volunteer, be a part of our community",
        "Fellow, grab the opportunity",
        "Donate and help the Needy"
      ]
    };
  },
  components: {}
};
</script>

<style>
#iconbtn {
  color: white;
}
#whatwedoback {
  margin-top: -65px;
}

#gif {
  height: 150px;
  width: 150px;
  margin-left: 50%;
}

#success {
  margin-left: 100px;
}
</style>

