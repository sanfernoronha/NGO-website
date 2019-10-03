<template>
  <v-app>
    <v-app id="inspire">
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
          <v-btn to="/" text>Home</v-btn>
          <v-overflow-btn
            color="yellow darken-1"
            to="/ourstory"
            class="my-2"
            :items="stories"
            label="Our Stories"
            target="#dropdown-example"
          ></v-overflow-btn>
          <v-btn to="/whatwedo" text>What we do?</v-btn>
          <v-btn to="/ourimpact" text>Our Impact</v-btn>
          <v-btn to="/jointhemovement" text>Join the Movement</v-btn>
          <v-btn to="/donate" text>Donate</v-btn>
        </v-toolbar-items>
      </v-app-bar>

      <v-row align="center" justify="center">
        <v-img
          src="https://picsum.photos/id/11/500/300"
          lazy-src="https://picsum.photos/id/11/10/6"
          aspect-ratio="1"
          class="grey lighten-2"
          max-width="1350"
          max-height="500"
        >
          <v-row align="end" class="lightbox white--text pa-2 fill-height">
            <v-col>
              <div class="heading display-2 font-weight-black text-center">DONATE</div>
            </v-col>
          </v-row>
        </v-img>
      </v-row>

      <v-content>
        <div id="content" class="center">
          <p>
            This year, 1250 Fellows are directly transforming the lives of 38,000 children. Our mission is to mobilize and inspire a wider movement of leaders that will lead to the same transformation for all children in the country. Contribute and join the movement to fight for educational equity in India. Your donation will fuel a movement of leaders into the action required to reach our goal for all children.
            <br />For US-based donors looking to donate to our US 501(c)3 entity, please visit
            <v-link>www.friendsofteachforindia.org</v-link>
          </p>
        </div>
        <br />

        <v-spacer></v-spacer>

        <div
          class="heading display-1 font-weight-white text-center"
          margin-top="30px"
        >HOW IS MY MONEY USED?</div>
        <div class="blue darken-2 text-center">
          <span class="white--text">
            <br />Out of every rupee that is donated to Teach For India, 87 paise goes towards classroom expenses like Fellow salary and allowances, classroom resources, field trips etc.
            <br />and 13 paise goes towards the operational expenses of the Teach For India Fellowship program. This includes the cost of Finance, Communications, Technology,
            <br />Development, HR, and other such functions, necessary to support the organization.
            <br />
            <br />Teach For India is committed to and practices good governance. It is accountable and transparent to various stakeholders and has received accreditation from
            <br />The Credibility Alliance, GiveIndia, the National CSR Hub, Global Giving, and is NGO source verified.
            <br />
            <br />Click Here to access our 2016-17 Annual Report, which contains an overview of all the main activities across different departments, a review of the progress
            <br />and results achieved in the year, information on our Staff and Board members, remuneration/reimbursement and other financial details.
            <br />
          </span>
        </div>
        <br />
        <div
          class="heading display-1 font-weight-bold blue--text text-center"
          margin-top="30px"
        >DONATE NOW</div>
        <v-container class="align-center">
          <v-text-field
            v-model="name"
            label="Full Name"
            name="name"
            :rules="nameRules"
            prepend-icon
            type="text"
            width="10px"
            required
          ></v-text-field>

          <v-text-field
            v-model="amount"
            label="Amount in Indian Rupees"
            name="amount"
            :rules="nameRules"
            prepend-icon
            type="text"
            width="10px"
            required
          ></v-text-field>

          <v-text-field
            v-model="address"
            label="Address"
            name="address"
            :rules="addressRules"
            prepend-icon
            type="text"
            width="50px"
            required
          ></v-text-field>

          <v-text-field
            v-model="contact"
            label="Contact No."
            name="contact"
            :rules="contactRules"
            prepend-icon
            type="text"
            width="50px"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            label="Email ID"
            name="email"
            :rules="emailRules"
            prepend-icon
            type="text"
            width="50px"
            required
          ></v-text-field>
          <form></form>
        </v-container>
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
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ],
      stories: ["Beginnings", "People"]
    };
  },
  components: {}
};
</script>

<style>
#content {
  margin-left: 50px;
  margin-right: 50px;
}
</style>
