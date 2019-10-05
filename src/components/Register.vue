<template>
  <div>
    <v-app-bar app color="yellow darken-1" dark>
      <v-btn depressed class="transparent" to="/">
        <v-toolbar-title class="text-uppercase white--text">
          <span class="font-weight-light">Sun</span>
          <span>Shine</span>
        </v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn depressed class="transparent" to="/">Back to Home</v-btn>
    </v-app-bar>

    <v-layout justify-center>
      <v-container id="admin" class="fill-height" fluid v-if="!submitted">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="12">
            <v-card class="elevation-12">
              <v-toolbar color="yellow darken-4">
                <v-toolbar-title class="white--text">Volunteer for Us</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>

              <v-card-text>
                <v-form @submit.prevent="saveVolunteer">
                  <v-text-field
                    v-model="name"
                    label="Full Name"
                    name="name"
                    :rules="nameRules"
                    prepend-icon
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
                    v-model="ccity"
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
                  <v-text-field
                    v-model="password"
                    label="Password"
                    name="password"
                    :rules="passwordRules"
                    prepend-icon
                    type="password"
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

                  <div class="text-center">
                    <v-btn color="red lighten-2 my-3" dark type="submit">Register</v-btn>
                  </div>
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
import db from "./firebaseInit";
import firebase from "firebase";

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
      ccity: "",
      aoi: "",
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
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length <= 8 || "Password is incorrect"
      ],
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
      sc: "",
      availability: ["Part-time", "Full-time"],
      // uploadfile: null,
      checkbox: false,
      dialog: false,
      available: "",
      volunteers_email: [],
      staff_email: []
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
  created() {
    db.collection("volunteers_data")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const email = doc.data().Email;
          this.volunteers_email.push(email);
        });
      });

    db.collection("staff_data")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const staff_email = doc.data().Email;
          this.staff_email.push(staff_email);
        });
      });
  },
  methods: {
    saveVolunteer: function(e) {
      let flag = false;
      for (let index = 0; index < this.volunteers_email.length; index++) {
        if (this.volunteers_email[index] == this.email) {
          flag = true;
        }
      }
      for (let index = 0; index < this.staff_email.length; index++) {
        if (this.staff_email[index] == this.email) {
          flag = true;
        }
      }

      if (flag == true) {
        window.alert("Account exists on this email");
        return false;
      } else if (flag == false) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(
            user => {
              alert(`Account created for ${user.email}`);
              db.collection("volunteers_data")
                .add({
                  Availability: this.available,
                  City: this.ccity,
                  Contact: this.contact,
                  Email: this.email,
                  FullName: this.name,
                  Interest: this.aoi,
                  Sex: this.sex,
                  Special: this.sc,
                  Password: this.password
                })
                .then(docRef => {
                  this.$router.push({
                    name: "dashboard",
                    params: { userEmail: this.email }
                  });
                })
                .catch(error => {
                  console.error("error adding ", error);
                });
            },
            err => {
              alert(err.message);
            }
          );
      }
      e.preventDefault();
    }
  }
};
</script>

<style>
#admin {
  margin-left: 30%;
  margin-right: 30%;
  margin-top: 100px;
}
</style>