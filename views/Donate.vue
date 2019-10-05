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

  <v-row align="center" justify="center">
    <v-img
      src="@/assets/donate.jpeg"
      class="grey lighten-2"
      max-width="1350"
      max-height="550">
    <v-row align="end" class="lightbox white--text pa-2 fill-height">
      <v-col>
        <div class="heading display-2 font-weight-black text-center">DONATE</div>
      </v-col>
    </v-row>
    </v-img>
  </v-row>

    <v-content>
      <div id="content" class="center"><br>
      <p>This year, 1250 volunteers are directly transforming the lives of 38,000 children. Our mission is to mobilize and inspire a wider
        movement of leaders that will lead to the same transformation for all children in the country. Contribute and join the movement to
         fight for educational equity in India. Your donation will fuel a movement of leaders into the action required to reach our goal for
         all children.<br><br>
For US-based donors looking to donate to our US 501(c)3 entity, please visit <v-link>www.friendsofteachforindia.org</v-link></p>
  </div><br><br><br>

  <div class="black text-center" ><p class="display-1 font-weight-bold text-center white--text"><br>HOW IS MY MONEY USED?<br></p>
    <span class="white--text">
      <br>Out of every rupee that is donated to Sunshine Foundation, 87 paise goes towards classroom expenses like Fellow salary and allowances, classroom resources, field trips etc.<br> and 13 paise goes towards the operational expenses of the Sunshine Foundation volunteership program. This includes the cost of Finance, Communications, Technology,<br>Development, HR, and other such functions, necessary to support the organization.<br>
<br>Sunshine Foundation is committed to and practices good governance. It is accountable and transparent to various stakeholders and has received accreditation from <br>The Credibility Alliance, GiveIndia, the National CSR Hub, Global Giving, and is NGO source verified. <br><br>Click Here to access our 2016-17 Annual Report, which contains an overview of all the main activities across different departments, a review of the progress <br>and results achieved in the year, information on our Staff and Board members, remuneration/reimbursement and other financial details.<br>
    </span><br><br>
  </div>
<br><br><br>
  <div class="heading display-1 font-weight-bold blue--text text-center" margin-top="30px">DONATE NOW</div><br>
  <v-container id="donateform" class="align-center">
    <v-text-field
                  v-model="name"
                    label="Full Name"
                    name="name"
                    :rules="nameRules"
                    prepend-icon=""
                    type="text"
                    width="10px"
                    required
                  ></v-text-field>

            <v-text-field
                  v-model="address"
                    label="Address"
                    name="address"
                    :rules="addressRules"
                    prepend-icon=""
                    type="text"
                    width="50px"
                    required
                  ></v-text-field>

            <v-text-field
                  v-model="postalcode"
                    label="Postal Code"
                    name="postalcode"
                    :rules="postalRules"
                    prepend-icon=""
                    type="text"
                    required
                  ></v-text-field>

              <v-select
                    v-model="select"
                    :items="city"
                    :rules="[v => !!v || 'required']"
                    label="Current City"
                    required
                    ></v-select>

           <v-text-field
                  v-model="contact"
                    label="Contact No."
                    name="contact"
                    :rules="contactRules"
                    prepend-icon=""
                    type="text"
                    width="50px"
                    required
                  ></v-text-field>

                    <v-text-field
                  v-model="email"
                    label="Email ID"
                    name="email"
                    :rules="emailRules"
                    prepend-icon=""
                    type="text"
                    width="50px"
                    required
                  ></v-text-field>

                  <v-text-field
                  v-model="amount"
                    label="Amount in Indian Rupees"
                    name="amount"
                    :rules="amountRules"
                    prepend-icon=""
                    type="text"
                    width="10px"
                    required
                  ></v-text-field>

              <span class="yellow darken-3--text">Your Donation will be eligible for exemption under section 80G of the Income Tax Act, 1961.</span>
                  <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="I have read through the website's Privacy Policy and agree to make a donation"
                required
                ></v-checkbox>

                <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="black" class="white--text" v-on:click.prevent="post" to="/success">DONATE</v-btn>
              </v-card-actions>
              <br><br><br>
  <form >

  </form>
  </v-container>

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
      valid: false,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 20 || "Maximum 20 characters"
      ],
      address: "",
      addressRules: [
        v => !!v || "Address is required",
        v => v.length <= 100 || "Maximum 100 characters"
      ],
      postalcode: "",
      postalRules: [
        v => !!v || "Postal Code is required",
        v => v.length == 6 || "Enter correct Postal Code"
      ],
      select: null,
      city: [
        "Ahmedabad",
        "Bangalore",
        "Chennai",
        "Delhi",
        "Firozabad",
        "Gwailor",
        "Hyderabad",
        "Jaipur",
        "Kolkata",
        "Lucknow",
        "Mumbai",
        "Noida",
        "Pune",
        "Raipur",
        "Srinagar"
      ],
      contact: "",
      contactRules: [
        v => !!v || "Contact No. is required",
        v => v.length == 10 || "Maximum 10 digits "
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      amountRules: [v => !!v || "Please enter the amount"],
      checkbox: false
    };
  }
};
</script>

<style>
#content {
  margin-left: 50px;
  margin-right: 50px;
}

#iconbtn {
  color: white;
}

#donateform {
  width: 600px;
  height: 500px;
}
</style>
