<template>
  <div class="contact__list">
    <!-- <div>
      <span>{{count}} </span>
      <input v-model="count" />
      <button type="button" @click="increment"> add 1 </button>
    </div> -->

    <Contact
    v-for="contact in contacts"
    :key="contact.id"
    :details="contact"
    />
  </div>
</template>

<script>
import {
  mapState, mapGetters, mapMutations, mapActions,
} from 'vuex';
import axios from 'axios';
import Contact from './Contact.vue';

export default {
  name: 'ContactList',
  components: {
    Contact,
  },
  data() {
    return { };
  },
  computed: {
  // Retrieve STATE - method 1
    // contacts() {
    //   return this.$store.state.contacts;
    // },

    // Retrieve STATE - method 3
    // map this.contacts to store.state.contacts
    ...mapState(['contacts', 'count']), // using array and spread operator


    // Retrieve STATE - method 2
    // computed: mapState({
    //   contacts: state => state.contacts,
    // }),


    // Retrieve STATE using GETTERS - method 1
    // contacts() {
    //   return this.$store.getters.getContact(2);
    // },

    // Retrieve STATE using GETTERS - method 2
    // ...mapGetters([
    //   'getContact',
    // ]),
    // ...mapGetters({
    //   retrieveContact: 'getContact',
    // }),
  },
  methods: {

    // MUTATION - METHOD 1
    // increment() {
    //   // this.$store.commit('increment', { amount: 10 }); // COMMIT a MUTATION - method 1
    //   this.$store.commit({
    //     type: 'increment',
    //     amount: 10,
    //   });
    // },

    // MUTATION - METHOD 2
    // ...mapMutations({
    //   add: { type: 'increment', amount: 10 }, // map `this.add()` to `this.$store.commit('increment')`
    // }),

    // ACTION - METHOD 1
    // increment() {
    //   this.$store.dispatch({ type: 'increment', amount: 10 });
    // },

    // ACTION - METHOD 2
    // ...mapActions({
    //   increment: { type: 'increment', amount: 10 },
    // }),

    ...mapActions(['initialiseListAction']),
  },
  mounted() {
    this.initialiseListAction();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contact-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
