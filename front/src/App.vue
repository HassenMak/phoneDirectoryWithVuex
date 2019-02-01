<template>
  <div id="app">
    <h1> Phone Directory </h1>
    <ContactList />
    <button type="button" class="button__add-contact">
      +
    </button>
    <loading
      :active.sync="isLoading"
      :is-full-page="true">
    </loading>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Loading from 'vue-loading-overlay';

import ContactList from './components/ContactList.vue';
// Import component
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';


export default {
  name: 'app',
  components: {
    ContactList,
    Loading,
  },

  computed: {
    ...mapState([
      'isLoading',
    ]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin:0;

  button {
    border-style: none;
    outline-style: none;
  }
  input {
    border-style: none;
    outline-style: none;
    font-size: 14px;
  }
}

.button__add-contact {
  position: fixed;
  bottom: 60px;
  right: 60px;
  width: 56px;
  height: 56px;
  padding: 0px;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
  transition: .3s ease-out;
  font-size: 28px;
  color: #fff;
  background-color: #F44336;
  border-radius: 50%
}
</style>
