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
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <div
              id="heading"
              class="heading display-1 font-weight-black grey--text text-center"
            >CONTACT US</div>
          </v-col>
        </v-row>

        <div id="details">
          <v-container>
            <div class="headline font-weight-bold black--text">MUMBAI (REGD. OFFICE)</div>
            <span>
              Sunshine Foundation
              <br />Godrej One, 2nd Floor
              <br />Pirojshanagar, Eastern Express Highway
              <br />Vikhroli (East), Mumbai - 400079
              <br />
            </span>
            <v-icon>mdi-phone</v-icon>
            <span>
              +91 22 25194283
              <br />+91 22 25194284
              <br />
            </span>
          </v-container>
        </div>

        <div id="details1">
          <v-container>
            <div class="headline font-weight-bold black--text">PUNE</div>
            <span>
              Sunshine Foundation
              <br />Row House #4, Goldfields Enclave
              <br />South Main Road, Koregaon Park
              <br />Pune - 411001
              <br />
            </span>
            <v-icon>mdi-phone</v-icon>
            <span>
              +91 20 64000252
              <br />+91 20 64001558
              <br />
            </span>
          </v-container>
        </div>
        <br />

        <div id="details2">
          <v-container>
            <div class="headline font-weight-bold black--text">CHENNAI</div>
            <span>
              Sunshine Foundation
              <br />#16/18, Nainiyappan Street
              <br />Jeth Nagar 1st Main Road
              <br />Mandeveli, Chennai - 600028
              <br />
            </span>
            <v-icon>mdi-phone</v-icon>
            <span>
              +91 44 24629210
              <br />+91 44 24629290
              <br />
            </span>
          </v-container>
        </div>

        <div id="details3">
          <v-container>
            <div class="headline font-weight-bold black--text">NEW DELHI</div>
            <span>
              Sunshine Foundation
              <br />N-23, Second Floor
              <br />Green Park Extn.
              <br />New Delhi - 110016
              <br />
            </span>
            <v-icon>mdi-phone</v-icon>
            <span>
              +91 11 40543751
              <br />+91 11 65658666
              <br />
            </span>
          </v-container>
        </div>

        <div id="details4">
          <v-container>
            <div class="headline font-weight-bold black--text">BENGALURU</div>
            <span>
              Sunshine Foundation
              <br />Commercial Premises No. 259
              <br />2nd floor, 3rd cross, 1st Main
              <br />Color 2nd Stage, Domlur
              <br />Above Rainbow Play School
              <br />Bangalore. Karnataka - 560071
              <br />
            </span>
            <v-icon>mdi-phone</v-icon>
            <span>
              +91 080 41320015
              <br />
            </span>
          </v-container>
        </div>
        <br />

        <div id="details5">
          <v-container>
            <div class="headline font-weight-bold black--text">HYDERABAD</div>
            <span>
              Sunshine Foundation
              <br />#147, Panchavati Colony
              <br />Road No. 10, Banjara Hills
              <br />Hyderabad, Telangana - 500034
              <br />
            </span>
            <v-icon>mdi-phone</v-icon>
            <span>
              +91 40 23395707
              <br />
            </span>
          </v-container>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
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
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      model: 0
    };
  },
  components: {}
};
</script>

<style>
#iconbtn {
  color: white;
}
#heading {
  margin-top: -500px;
}
#details {
  margin-left: 200px;
  margin-top: -400px;
  width: 400px;
}
#details1 {
  margin-left: 1000px;
  margin-top: -200px;
  width: 400px;
}
#details2 {
  margin-left: 200px;
  margin-top: 20px;
  width: 400px;
}
#details3 {
  margin-left: 1000px;
  margin-top: -200px;
  width: 400px;
}
#details4 {
  margin-left: 200px;
  margin-top: 20px;
  width: 400px;
}
#details5 {
  margin-left: 1000px;
  margin-top: -250px;
  width: 400px;
}
</style>
