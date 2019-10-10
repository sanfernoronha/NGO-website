<template>
  <v-app class="page-wrapper">
    <v-app id="inspire">
      <v-app-bar app color="black" dark>
        <v-img :src="require('@/assets/sun.png')" height="20px" max-width="50px"></v-img>
        <v-btn transparent class="transparent" to="/">
          <v-toolbar-title class="text-uppercase yellow--text">
            <span class="font-weight-light">Sun</span>
            <span>Shine</span>
          </v-toolbar-title>
        </v-btn>
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
        <v-row align="center" justify="center">
          <v-img
            id="whatwedoback"
            src="@/assets/kidss.jpg"
            aspect-ratio="1"
            class="grey lighten-2"
            max-width="1350"
            max-height="550"
          >
            <v-row align="end" class="lightbox white--text pa-2 fill-height">
              <v-col>
                <div class="heading display-2 font-weight-black text-center">OUR IMPACT</div>
              </v-col>
            </v-row>
          </v-img>
        </v-row>

        <br />
        <br />
        <br />

        <div align="center" justify="center">
          <p class="subtitle-1">
            Our goal for our students is to put every child that we work with on a different life path. We measure our impact as progress
            <br />to this goal on three levels - academic growth, values and mindset, and exposure and access. Central to all our impact is leadership.
            <br />We aim to develop student leaders who show transformational change both in themselves and in their classroom, school, and community.
            <br />
          </p>
        </div>
        <br />

        <div class="yellow darken-2 text-center">
          <p class="display-1 font-weight-bold white--text">
            <br />STUDENT IMPACT
            <br />
          </p>
          <p class="subheading font-weight-bold black--text">
            <br />STUDENT VISION SCALE
          </p>
          <span class="white--text">
            <br />The Student Vision Scale is our measure of how classrooms are doing on academic achievement, exposure and access, and
            <br />values and mindsets. Our Program Managers have rated our classrooms a 3 out of 5 on our Student Vision Scale. This implies
            <br />that students are beginning to explore themselves, the world around them, the values they operate with and basic learning
            <br />is happening in the classroom. Students are also able to demonstrate class values, and start to think about how they want
            <br />to contribute to their community. Students who have already reached a 5 are passionate and joyful, and can evaluate and create
            <br />challenging content. They are able to independently demonstrate class values, both in and out of class, and are able to leverage
            <br />opportunities in the community and world around them.
            <br />
          </span>
          <br />
          <p class="subheading font-weight-bold black--text">
            <br />LONGITUDINAL STUDY
          </p>
          <span class="white--text">
            <br />The Longitudinal Study is a comparative study of Sunshine Foundation and non-Sunshine Foundation classrooms over time, done in
            <br />collaboration with Columbia University. Each year, Sunshine Foundation classrooms have made more than double the growth of
            <br />non-Sunshine Foundation classrooms in the control group.
            <br />
          </span>
          <br />
          <p class="subheading font-weight-bold black--text">
            <br />MATH
          </p>
          <span class="white--text">
            <br />Our students are learning to recall and apply knowledge and skills appropriate to their level. This has led to a 48% grade
            <br />level mastery on math at the end of the year versus 20% in the beginning of the year in 2015.
            <br />
          </span>
          <br />
          <p class="subheading font-weight-bold black--text">
            <br />READING COMPREHENSION
          </p>
          <span class="white--text">
            <br />On average, Sunshine Foundation students show a 1.1 year of growth in reading level in 2015, which means they have achieved over
            <br />a full year of reading ability. This is especially important as many students are below grade level at the time of Sunshine
            <br />Foundation intervention, and our volunteers need to accelerate their learning in order for them to be at par with peers of the same grade.
            <br />
          </span>
          <br />
          <v-btn class="ma-2" outlined color="black">Learn More</v-btn>
          <br />
          <br />
        </div>

        <div class="black text-center">
          <p class="display-1 font-weight-bold white--text">
            <br />TEAM IMPACT
            <br />
          </p>
          <p class="subheading font-weight-bold yellow--text">
            <br />COMMITMENT TO PERSONAL TRANSFORMATION
          </p>
          <span class="white--text">
            <br />Personal transformation is the journey of getting closer to being the person you want to be. Watch THIS video to get a glimpse
            <br />of leadership and transformation in our classrooms.
            <br />
          </span>
          <br />
          <p class="subheading font-weight-bold yellow--text">
            <br />COMMITMENT TO COLLECTIVE ACTION
          </p>
          <span class="white--text">
            <br />Through their “Be The Change Projects” in the second year of teaching, volunteers show us the power of collective action as they
            <br />engage with the community and larger eco-system around them to affect change. Projects include building school management, parent
            <br />employment empowerment, and active community engagement.
            <br />
          </span>
          <br />
          <p class="subheading font-weight-bold yellow--text">
            <br />THE COMMITMENT TO EDUCATIONAL EQUITY
          </p>
          <span class="white--text">
            <br />The commitment to educational equity involves deepening our understanding of the ground realities of inequity and committing to solve it.
            <br />The classroom becomes a platform for learning about the educational landscape in our country and the challenges that come with it.
            <br />
          </span>
          <br />
          <v-btn class="ma-2" outlined color="black">Learn More</v-btn>
          <br />
          <br />
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
            <a href="https://www.facebook.com" color="yellow">
              <v-icon>mdi-facebook</v-icon>
            </a>
          </v-btn>
          <v-btn color="yellow" icon>
            <a href="https://www.instagram.com">
              <v-icon>mdi-instagram</v-icon>
            </a>
          </v-btn>
          <v-btn color="yellow" icon>
            <a href="https://www.twitter.com">
              <v-icon>mdi-twitter</v-icon>
            </a>
          </v-btn>
          <v-btn color="yellow" icon>
            <a href="https://www.linkedin.com">
              <v-icon>mdi-linkedin</v-icon>
            </a>
          </v-btn>
          <v-btn color="yellow" icon>
            <a href="https://www.youtube.com">
              <v-icon>mdi-youtube</v-icon>
            </a>
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
#iconbtn {
  color: white;
}
</style>
