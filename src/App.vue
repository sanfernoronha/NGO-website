<template>
  <v-app>

    <v-content>
      <router-view>
        <Home/>
      </router-view>
    </v-content>

  </v-app>
</template>

<script>
import Home from "./views/Home";
// import Register from "./components/Register";
// import LoginforVolunteers from "./components/LoginforVolunteers";
// import LoginforStaff from "./components/LoginforStaff";

export default {
  name: "App",
  components: {
    Home
  },
  data: () => ({
    //
  })
};
</script>
