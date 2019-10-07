<template>
<div>
  <v-app-bar app color="yellow darken-1" dark>
      <v-btn depressed class="transparent" to="/"><v-toolbar-title class="text-uppercase white--text">
                <span class="font-weight-light">Sun</span>
                <span>Shine</span>
            </v-toolbar-title></v-btn>
            <v-spacer></v-spacer>
            <v-btn depressed class="transparent" to="/">Back to Home</v-btn>
  </v-app-bar>

<v-layout justify-center>
<v-container id="admin" class="fill-height" fluid v-if="!submitted">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="12">
            <v-card class="elevation-12">
              <v-toolbar color="black">
                <v-toolbar-title class="white--text">Volunteer for Us</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>

              <v-card-text>
                <v-form>
                    <v-text-field
                  v-model="name"
                    label="Full Name"
                    name="name"
                    :rules="nameRules"
                    prepend-icon=""
                    type="text"
                    width="50px"
                    required
                  ></v-text-field>

                   <v-select
                    v-model="sex"
                    :items="gender"
                    :rules="[v => !!v || 'required']"
                    label="Sex"
                    required
                    ></v-select>

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

                  <v-select
                    v-model="aoi"
                    :items="areaofinterest"
                    :rules="[v => !!v || 'required']"
                    label="Area of Interest"
                    required
                    ></v-select>

                    <v-select
                    v-model="sc"
                    :items="specialcapabilities"
                    :rules="[v => !!v || 'required']"
                    label="Special Capabilities"
                    required
                    ></v-select>

                    <v-select
                    v-model="available"
                    :items="availability"
                    :rules="[v => !!v || 'required']"
                    label="Availability"
                    required
                    ></v-select>

                  <!-- <v-file-input label="Upload Resume"></v-file-input> -->

                  <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Yes! I would like to volunteer for Sunshine Foundation."
                required
                ></v-checkbox>

              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="black" class="white--text" v-on:click.prevent="post" to="/showForProf">Register</v-btn>
              </v-card-actions>

            <br><br><br>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
</v-container>

    <v-footer color="yellow darken-1" app>
      <span class="white--text">&copy; (TE COMPUTER Webmasters-2019)</span>
    </v-footer>

  </v-layout>
</div>
</template>

<script>
// import db from './firebaseinit.js';

export default {
  name: "register",
  data() {
    return {
      valid: false,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 20 || "Maximum 20 characters"
      ],
      sex: null,
      gender: ["Male", "Female", "others"],
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
        v => v.length <= 10 || "Maximum 10 digits "
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      areaofinterest: [
        "Education",
        "Health and Nutrition",
        "Fundraising",
        "Campaigning",
        "Humanitarian Response"
      ],
      specialcapabilities: [
        "Teacher",
        "Health Care Porfessional",
        "Child Care Expert",
        "Blogger",
        "Fundraiser",
        "Activist"
      ],
      availability: ["Part-time", "Full-time"],
      uploadfile: null,
      checkbox: false,
      dialog: false
    };
  },
  // created () {
  //   db.collection('volunteer').get().
  //   then(querySnapshot => {
  //     querySnapshot.forEach(doc => {
  //       console.log(doc.data());
  //       const data = {
  //         'id':doc.id;
  //         'name': doc.data().name,
  //         'sex': doc.data().sex,
  //         'city': doc.data().city,
  //         'contact': doc.data().contact,
  //         'email': doc.data().email,
  //         'areaofinterest': doc.data().areaofinterest,
  //         'specialcapabilities': doc.data().specialcapabilities,
  //         'availibility': doc.data().availibility,
  //       }
  //       this.volunteer.push(data)
  //     })
  //   })
  // }
  methods: {}
};
//   register: function(e) {
//     firebase
//       .auth()
//       .registerVolunteer(
//         this.name,
//         this.sex,
//         this.city,
//         this.contact,
//         this.email,
//         this.areaofinterest,
//         this.specialcapabilities,
//         this.availability
//       )
//       .then(volunteer => {
//         alert(`Account created for ${volunteer.name}`);
//         this.$router.push('/');
//       };
//     e.preventDefault();
//   }
// }
</script>

<style>
#admin {
  margin-left: 30%;
  margin-right: 30%;
  margin-top: 100px;
}
</style>