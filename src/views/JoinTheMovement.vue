<template>
<v-app>
  <v-app id="inspire">

    <v-app-bar app color="black" dark>
      <v-img :src="require('@/assets/sun.png')" height="20px" max-width="50px"></v-img>
      <v-btn transparent class="transparent" to="/"><v-toolbar-title class="text-uppercase yellow--text">
                <span class="font-weight-light">Sun</span>
                <span>Shine</span>
            </v-toolbar-title></v-btn>
            <v-spacer></v-spacer>
            <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn color="yellow" to="/whatwedo" text>What we do?</v-btn>
        <v-btn color="yellow" to="/ourimpact" text>Our Impact</v-btn>
        <v-btn color="yellow" to="/jointhemovement" text>Join the Movement</v-btn>
        <v-btn color="yellow" to="/donate" text>Donate</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
        <!-- <v-carousel id="slide"
    cycle
    height="550px"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :src="src[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">{{ slide }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel> -->

   <v-row align="center" justify="center">
    <v-img id="whatwedoback"
      src="@/assets/volunteerwoman.jpg"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width="1350"
      max-height="550">
    <v-row align="end" class="lightbox white--text pa-2 fill-height">
      <v-col>
        <div class="heading display-2 font-weight-black text-center">GET INVOLVED</div>
      </v-col>
    </v-row>
    </v-img>
  </v-row>
  <br><br><br><br>
  <div class="text-center">
    <p class="headline">
      You can play an integral role in growing this movement and redefining the education system in our country.<br>
      Here is how you can get involved:
      </p></div>
  <br><br>

  <div class="yellow darken-2 text-center" ><p class="display-1 font-weight-bold black--text"><br>VOLUNTEER<br></p>
    <span class="black--text">
      <br>Step into our classrooms and share your knowledge, experience and skills with our children by volunteering to teach and/or<br>
          assist our volunteers. Help us plan, execute and/or archive our events across the country to further strengthen the movement.<br>
          </span><br><br>
          <div class="text-center">
             <v-btn class="ma-2" outlined color="black" disabled>Mumbai</v-btn>
              <v-btn class="ma-2" outlined color="black" disabled>Bengaluru</v-btn>
               <v-btn class="ma-2" outlined color="black" disabled>Delhi</v-btn>
               <v-btn class="ma-2" outlined color="black" disabled>Pune</v-btn>
             <v-btn class="ma-2" outlined color="black" disabled>Hyderabad</v-btn>
              <v-btn class="ma-2" outlined color="black" disabled>Kolkata</v-btn>
               <v-btn class="ma-2" outlined color="black" disabled>Chennai</v-btn>
          </div>
          <br><br><br>
  </div>

    </v-content>
    <v-footer color="black" app>
       <span class="yellow--text">&copy; (Webmasters-2019)</span>
      <v-toolbar-items class="justify-center">
        <v-btn color="yellow" to="faqs" class="white--text" text>FAQs</v-btn>
        <v-btn color="yellow" to="/privacypolicy" class="white--text" text>Privacy Policy</v-btn>
        <v-btn color="yellow" to="/contact" class="white--text" text>Contact us</v-btn>
      </v-toolbar-items>
      <template>
        <div class="flex-grow-1"></div>
        <v-btn color="yellow" icon>
        <a href="https://www.facebook.com" color="yellow"  >
          <v-icon>mdi-facebook</v-icon></a>
        </v-btn>
        <v-btn color="yellow" icon>
            <a href="https://www.instagram.com" >
          <v-icon>mdi-instagram</v-icon></a>
        </v-btn>
        <v-btn color="yellow" icon>
            <a href="https://www.twitter.com" >
          <v-icon>mdi-twitter</v-icon></a>
        </v-btn>
        <v-btn color="yellow" icon>
            <a href="https://www.linkedin.com" >
          <v-icon>mdi-linkedin</v-icon></a>
        </v-btn>
        <v-btn color="yellow" icon>
            <a href="https://www.youtube.com" >
          <v-icon>mdi-youtube</v-icon></a>
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
      // src: [
      //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQq1V1XsTPEARKG_NQ73x_hFzP6-OmUdglfLiW0aWZDMXrPaZew",
      //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZHPYK2qkFoZzjCwwRH9dRNk966mg7FpeMeChy4O0cbxRUWw1VA",
      //   "pink darken-2",
      //   "red lighten-1",
      //   "deep-purple accent-4"
      // ],
      // slides: [
      //   "Sunshine Foundation",
      //   "Are you ready for it? Apply now",
      //   "Volunteer, be a part of our community",
      //   "Fellow, grab the opportunity",
      //   "Donate and help the Needy"
      // ]
    };
  },
  components: {}
};
</script>

<style>
#slide {
  margin-top: -65px;
}
#iconbtn {
  color: white;
}
</style>
