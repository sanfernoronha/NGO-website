<template>
<v-app>
  <v-app id="inspire">

    <v-app-bar app color="black" dark>
      <v-img :src="require('@/assets/sun.png')" height="20px" max-width="50px"></v-img>
      <v-btn depressed class="transparent" to="/"><v-toolbar-title class="text-uppercase white--text">
                <span class="font-weight-light">Sun</span>
                <span>Shine</span>
            </v-toolbar-title></v-btn>
            <v-spacer></v-spacer>
            <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn to="/whatwedo" text>What we do?</v-btn>
        <v-btn to="/ourimpact" text>Our Impact</v-btn>
        <v-btn to="/jointhemovement" text>Join the Movement</v-btn>
        <v-btn to="/donate" text>Donate</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
       <v-row align="center" justify="center">
    <v-img id="whatwedoback"
      src="@/assets/edu.jpg"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width="1350"
      max-height="550">
    <v-row align="end" class="lightbox white--text pa-2 fill-height">
      <v-col>
        <div class="heading display-2 font-weight-black text-center">WHAT WE DO?</div>
      </v-col>
    </v-row>
    </v-img>
  </v-row>

  <br><br><br>
  <div align="center" justify="center">
    <p class="subtitle-1">
      In order to build a growing community of leaders, Sunshine Foundation has developed a two-part theory of change.<br>
      In the short-term, through our volunteership program, we provide an opportunity to India’s brightest and most promising<br>
      individuals, from the nation’s best universities and workplaces, to serve as full-time teachers to children from low<br>
      income communities in some of the nation’s most under-resourced schools. Through this experience of teaching in classrooms<br>
      and working with key education stakeholders like students, principals, and parents, our volunteers get exposed to the grassroots<br>
      realities of India’s education system and begin to cultivate the knowledge, skills, and mindsets necessary to attain positions<br>
      of leadership in the education system and identify their role in building a larger movement for equity in education.<br><br>
      In the long-term, we engage these leaders, our Alumni, and support this growing community to advocate for change. Our Alumni<br>
      work in diverse roles within the education sector, as teachers, teacher-trainers, school principals, curriculum designers,<br>
      and education policy researchers, as well as in the ecosystem surrounding and supporting the education sector, as journalists,<br>
      lawyers, health experts, entrepreneurs, and corporate leaders, all with a shared purpose to build a broad people’s movement for<br>
      educational equity that will accelerate progress towards that day when all children in India have the opportunity to attain an<br>
      excellent education so that we, as a nation, can find our light and our true potential.<br></p>
  </div>
  <br>

  <div class="black text-center" ><p class="display-1 font-weight-bold white--text"><br>OUR INITIATIVE<br></p>
    <span class="white--text">
      <br>Sunshine Foundation volunteers commit two years, full-time, to providing their students with the opportunities that can put them on a<br>
          different life path.The volunteership journey is one of teaching and learning, of working for children while developing your leadership.<br>
          Our volunteers are on a mission to end educational inequity for their children, and through this, they develop a long-term commitment to<br>
          multiplying that impact as Alumni.<br>
          Each Fellow is assigned a classroom in one of Sunshine Foundation’s placement cities, and charged to teach academics, values and mindsets<br>
          and to give their students the access and exposure they need to reach their personal, long-term visions. Our framework for leadership<br>
          at Sunshine Foundation is called the Leadership Development Journey, and is centered around three commitments:<br><br>
          - The Commitment to Personal Transformation: Exploring who you are, your purpose, and striving to be a better person.<br><br>
          - The Commitment to Collective Action: Building relationships and organizing partners to multiply and deepen our impact.<br><br>
          - The Commitment to Educational Equity: Deepening our understanding of educational equity and committing to attaining it.<br><br>
          volunteers work on these commitments in and beyond the full-time lab of their classroom, where they relentlessly focus on moving their students<br>
          towards “path-changing” learning, the highest level of our Student Vision Scale.<br>
          By growing in the 3 commitments, and embedded with real life leadership experiences in the classrooms and communities, volunteers are ready<br>
          to be lifelong learners and leaders for greater impact on children.<br>
    <br></span><br>
    <v-btn class="ma-2" outlined color="yellow">Learn More</v-btn>
    <br><br>
  </div>
    </v-content>

    <v-footer color="black" app>
      <span class="white--text">&copy; (Webmasters-2019)</span>
      <v-toolbar-items class="justify-center">
        <v-btn to="faqs" class="white--text" text>FAQs</v-btn>
        <v-btn to="/privacypolicy" class="white--text" text>Privacy Policy</v-btn>
        <v-btn to="/contact" class="white--text" text>Contact us</v-btn>
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
</style>

