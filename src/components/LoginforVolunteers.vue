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
            <v-card class="elevation-12" :loading="loading">
              <v-toolbar color="black">
                <v-toolbar-title class="white--text">Volunteer Login</v-toolbar-title>
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
  name: "login",
  data: () => ({
    valid: false,
    password: "",
    volunteers_email: [],
    passwordRules: [
      v => !!v || "Password is required",
      v => (v.length = 8 || "Enter valid passsword")
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    loading: false
  }),
  created() {
    db.collection("volunteers_data")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          var email = doc.data().Email;
          this.volunteers_email.push(email);
        });
      });
  },
  methods: {
    login: function(e) {
      this.loading = true;
      let flag = false;
      for (var index = 0; index < this.volunteers_email.length; index++) {
        if (this.volunteers_email[index] == this.email) {
          flag = false;
          break;
        } else flag = true;
      }

      if (flag == true) {
        window.alert("But you are tony staff!!!");
      } else {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(
            user => {
              alert(`You are logged in as ${user.email}`);
              this.$router.push({
                name: "dashboard",
                params: { userEmail: this.email }
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