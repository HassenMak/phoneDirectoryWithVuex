import Vue from 'vue';
import Vuex from 'vuex';
import api from '../services/api.service';

Vue.use(Vuex);

const delay = () => {
  new Promise(((resolve, reject) => {
    setTimeout(() => resolve('foo'),
      3000);
  }));
};

export default new Vuex.Store({
  state: {
    contacts: [
    ],
    count: 1,
    isLoading: false,
  },
  getters: {
    getContact: (state, getters) => contactId => state.contacts.filter(contact => contact.id === contactId),
  },
  mutations: {
    increment(state, payload = {}) {
      // mutate state
      state.count += payload.amount;
      // Vue.set(state, 'count', payload.amount);
    },

    initialiseListMutation(state, payload = {}) {
      console.log('initialiseMutation', payload);
      state.contacts = payload.contacts.data;
      // Vue.set(state, 'contacts', payload.contacts.data);
    },

    startLoading(state) {
      Vue.set(state, 'loading', true);
    },

    stopLoading(state) {
      Vue.set(state, 'loading', false);
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
        const value = await delay();
        console.log(value);
        const contacts = await api.getContactList();
        console.log('youhou', api.getContactList());
        commit('initialiseListMutation', { contacts });
        commit('stopLoading');
      } catch (e) {
        commit('stopLoading');
        // action todo
        // commit ('REQUEST_FAILURE')
        console.log(e);
      }
    },

    async updateContact({ commit }, { id }) {
      try {
        // commit('Request')
        const contacts = await api.getContactList();
        commit('initialiseListMutation', { contacts });
        // commit ('Request_SUCCESS')
      } catch (e) {
        // commit ('REQUEST_FAILURE')
        console.log(e);
      }
    },
  },
});
