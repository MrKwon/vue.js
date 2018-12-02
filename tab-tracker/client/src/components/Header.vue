<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo({name: 'root'})">
        TabTracker
      </span>
    </v-toolbar-title>

    <!-- TODO: IMPLEMENT ME -->
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer> <!--Move all items to right after v-spacer-->

    <v-toolbar-items>
      <v-btn flat dark to='login'>
          Login
      </v-btn>
      <v-btn flat dark to='register'>
          Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #006064
}
</style>