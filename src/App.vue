<template>
  <v-app>
    <v-content>
      <transition
        name="router-animation"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <router-view>
          <Home />
        </router-view>
      </transition>
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
<style>
.page-wrapper {
  animation-duration: 0.2s;
}
</style>
