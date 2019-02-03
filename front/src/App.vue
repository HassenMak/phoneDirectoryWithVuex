<template>
  <div id="app">
    <h1> Phone Directory </h1>
    <ContactList />
    <CreateContact />


    <loading
      :active.sync="isLoading"
      :is-full-page="true">
    </loading>
  </div>
</template>

<script>
import { mapState } from 'vuex';

// Import component
import Loading from 'vue-loading-overlay';
import ContactList from './components/ContactList.vue';
import CreateContact from './components/CreateContact.vue';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';


export default {
  name: 'app',
  components: {
    ContactList,
    Loading,
    CreateContact,
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

  h1 {
    margin-bottom: 20px;
  }

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
</style>
