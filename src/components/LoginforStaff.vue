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
          <v-col cols="12" sm="8" md="8">
            <v-alert
              :value="alert"
              color="success"
              dark
              border="top"
              icon="mdi-home"
              transition="scale-transition"
            >Logging you in</v-alert>
            <v-card class="elevation-12">
              <v-toolbar color="black">
                <v-toolbar-title class="white--text">Staff Login</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>

              <v-card-text>
                <v-form>
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
                </v-form>
              </v-card-text>

              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn
                  color="black"
                  class="white--text"
                  v-on:click.prevent="post"
                  @click="login"
                >Login</v-btn>
              </v-card-actions>
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
import db from "../components/firebaseInit";
import firebase from "firebase";
export default {
  name: "stafflogin",
  data: () => ({
    alert: false,
    valid: false,
    password: "",
    staff_email: [],
    passwordRules: [
      v => !!v || "Password is required",
      v => (v.length = 8 || "Enter valid passsword")
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  created() {
    db.collection("staff_data")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          var email = doc.data().Email;
          this.staff_email.push(email);
        });
      });
  },
  methods: {
    login: function(e) {
      var flag = false;
      for (var index = 0; index < this.staff_email.length; index++) {
        if (this.staff_email[index] == this.email) {
          flag = false;
          break;
        } else flag = true;
      }

      if (flag == true) {
        window.alert("You are a Volunteer.");
      } else {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(
            user => {
              this.alert = true;
              this.$router.push({
                name: "dashboardStaff",
                params: { staffEmail: this.email }
              });
            },
            err => {
              alert(err.message);
            }
          );
        e.preventDefault();
      }
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