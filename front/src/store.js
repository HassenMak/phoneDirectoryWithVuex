import Vue from 'vue';
import Vuex from 'vuex';
import api from '../services/api.service';

Vue.use(Vuex);

const delay = time => new Promise(
  (resolve) => {
    setTimeout(() => resolve('foo'),
      time);
  },
);

export default new Vuex.Store({
  state: {
    contacts: [],
    count: 1,
    isLoading: false,
  },
  getters: {
    /* eslint-disable max-len */
    // In argument we can also add getters if we need to use another getter
    getContact: state => contactId => state.contacts.filter(contact => contact._id === contactId),
  },
  mutations: {
    increment(state, payload = {}) {
      // mutate state
      // state.count += payload.amount;
      Vue.set(state, 'count', payload.amount);
    },

    updateContact(state, payload = {}) {
      const indexContactToChange = state.contacts.findIndex(element => element._id === payload._id);
      Vue.set(state.contacts, indexContactToChange, payload);
    },
    deleteContact(state, payload = {}) {
      Vue.set(state, 'contacts', [...state.contacts.filter(element => element._id !== payload._id)]);
    },
    initialiseListMutation(state, payload = {}) {
      Vue.set(state, 'contacts', payload.contacts.data);
    },

    startLoading(state) {
      Vue.set(state, 'isLoading', true);
    },

    stopLoading(state) {
      Vue.set(state, 'isLoading', false);
    },
  },
  actions: {
    // increment(context) {
    //   context.commit('increment');
    // },
    increment({ commit }, payload = {}) {
      commit(payload);
    },

    async initialiseListAction({ commit }) {
      try {
        commit('startLoading');
        await delay(500);

        const contacts = await api.getContactList();
        console.log('get contact list', contacts);
        commit('initialiseListMutation', { contacts });
        commit('stopLoading');
      } catch (e) {
        commit('stopLoading');
        // Handle the case when error with the database
        console.log(e);
      }
    },

    async updateContact({ commit }, payload) {
      try {
        commit('startLoading');

        await delay(500);
        const returnValue = await api.updateContact(payload);
        console.log('updatingContact', returnValue);

        commit('stopLoading');
      } catch (e) {
        commit('stopLoading');
        console.log(e);
      }
    },

    async deleteContact({ commit }, payload) {
      try {
        commit('startLoading');
        await delay(500);
        const returnValue = await api.deleteContact(payload._id);
        console.log('deletingContact', returnValue);
        if (returnValue.status === 200) {
          commit('deleteContact', payload);
        }

        commit('stopLoading');
      } catch (e) {
        commit('stopLoading');
        console.log(e);
      }
    },

    async createContact({ dispatch, commit }, payload) {
      try {
        commit('startLoading');
        await delay(500);
        const returnValue = await api.createContact(payload.firstName, payload.lastName, payload.phoneNumber, payload.emailAddress);
        console.log('creating new contact', returnValue);
        if (returnValue.status === 200) {
          await dispatch('initialiseListAction');
        }

        commit('stopLoading');
      } catch (e) {
        commit('stopLoading');
        console.log(e);
      }
    },
  },
});
