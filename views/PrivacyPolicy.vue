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


    <v-container id="container">
       <v-col>
        <div class="heading display-1 font-weight-black grey--text text-center">PRIVACY POLICY</div>
      </v-col>
    <div id="up" align="center" justify="center">
    <p class="subtitle-1">
      Sunshine Foundation is committed to providing privacy for our web site visitors as well as recipients of our email messages.
      Sunshine Foundation promotes the tenets of opt-in email and privacy among our partners and employees.
      We are continuously evaluating our internal procedures and technology to ensure privacy at all levels in our organization.<br></p>
  </div>

          <p class="subheading font-weight-bold black--text"><br>Information Tracked</p>
    <span class="black--text">
      We track location, device type, browser type to help us understand our visitors’ needs related to our web site design.
      We do so in a way that makes your personal information non-personally identifiable by aggregating data and removing identifiable characteristics.<br><br>
          There are registration and application sections of our web site where input forms require your name, email address and other information.
          By submitting such forms, you give us permission to send email messages to you containing information relating to your interest in Sunshine Foundation.
          Each email we send will also contain instructions on how to opt-out of receiving future emails of any sort from Sunshine Foundation<br>
          </span><br><br>

           <p class="subheading font-weight-bold black--text"><br>Cookies</p>
    <span class="black--text">
      Client-side cookies are used to verify the login status of visitors and registered users of our web site. Usage of a cookie is
       in no way linked to any personally identifiable information while on our site. If visitors reject a cookie, they may still use our
       site; however, they may not be able to log in, or access all areas of our site. (Cookies are text files our website places in your
       computer’s browser to store your preferences.)
</span><br><br>

        <p class="subheading font-weight-bold black--text"><br>Security and Privacy</p>
    <span class="black--text">
      We will never share, sell, or rent your individual personal information with or to any individual or organization without your advance
      permission or unless ordered by a court of law. Information submitted to us is only available to employees managing this information for
      purposes of contacting you, processing your application, or sending you emails related to your interest in Sunshine Foundation.
    </span><br><br>

    <p class="subheading font-weight-bold black--text"><br>Third party agreement</p>
    <span class="black--text">
      This site works with third party services that collect anonymous traffic data at this site.
    </span><br><br>

    <p class="subheading font-weight-bold black--text"><br>Notification of changes</p>
    <span class="black--text">
      If we change our privacy policy, we will post these changes to ensure that our users are always aware of what information we collect,
      how we use it, and under what circumstances, if any, we disclose it. If at any point we decide to use personally identifiable information
      in a manner different from that stated at the time it was collected, we will notify users by way of an email at the last address provided
      and/or by prominently posting notice of the changes on our website. Users will have a choice as to whether or not we use their information
      in this different manner. We will use information in accordance with the privacy policy under which information was collected. Any such changes
      may affect our use and sharing of personal information that you provided to us before our notification to you of the changes. If you do not wish to
      permit changes in our collection, use, or sharing of personal information that you have provided to us before the effective date of such changes,
      you must notify us before that effective date. Please be advised, however, that regardless of whether you provide such notice to us, the changes to
      this privacy policy will apply to any personal information that you provide to us on or after the effective date of such changes.
    </span><br><br>

</v-container>
    </v-content>
    <v-footer color="black" app>
      <span class="white--text">&copy;  (Webmasters-2019)</span>
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

#up {
  margin-top: 50px;
}

#container {
  width: 850px;
}
</style>

