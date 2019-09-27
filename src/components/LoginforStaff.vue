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
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-toolbar color="black">
                <v-toolbar-title class="white--text">Staff Login</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>

              <v-card-text>
                <v-form>
                  <v-text-field
                  v-model="username"
                    label="Username"
                    name="username"
                    :rules="usernameRules"
                    prepend-icon=""
                    type="text"
                    required
                  ></v-text-field>

                  <v-text-field
                  v-model="password"
                    label="Password"
                    name="password"
                    :rules="passwordRules"
                    prepend-icon=""
                    type="password"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="black" class="white--text" v-on:click.prevent="post" to="/showForProf">Login</v-btn>
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
export default {
    data: () => ({
    valid: false,
    username: '',
    usernameRules: [
      v => !!v || 'Username is required',
      v => v.length = 4 || 'Enter valid username',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length <= 8 || 'Password is incorrect',
    ],
  })
};
</script>

<style>
#admin{
  margin-left: 30%;
  margin-right: 30%;
  margin-top: 100px;
}
</style>