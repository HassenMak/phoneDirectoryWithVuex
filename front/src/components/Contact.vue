<template>
    <div class="contact">
        <div class="contact__title">
            <h3> {{ fullName }}</h3>
        </div>
        <div class="contact__information">
            <div class="contact__information__number">
                <span> Phone number : </span>
                <input type="number" v-model="phoneNumber" :disabled="fieldsDisabled"/>
            </div>
            <div class="contact__information__email">
                <span> Email address : </span>
                <input v-model="emailAddress" :disabled="fieldsDisabled"/>
            </div>

        </div>
        <div class="contact__actions">
            <button type="button" class="button__save" v-on:click="update(details)">{{ updateText }}</button>
            <button type="button" class="button__delete" v-on:click="deleteContact(details)">Delete</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    details: Object,
  },
  data: () => ({
    fieldsDisabled: true,
  }),
  methods: {
    ...mapActions(['updateContact', 'deleteContact']),
    update() {
      if (this.fieldsDisabled) {
        this.fieldsDisabled = false;
      } else {
        this.fieldsDisabled = true;
        this.updateContact(this.details);
      }
    },
  },
  computed: {
    fullName() {
      return `${this.details.firstName} ${this.details.lastName}`;
    },
    updateText() {
      if (this.fieldsDisabled) {
        return 'Modify contact';
      }
      return 'Update Database';
    },
    phoneNumber: {
      get() {
        return this.$store.state.contacts.find(item => item._id === this.details._id).phoneNumber;
      },
      set(value) {
        const newDetails = { ...this.details, phoneNumber: value };
        this.$store.commit('updateContact', newDetails);
      },
    },
    emailAddress: {
      get() {
        return this.$store.state.contacts.find(item => item._id === this.details._id).emailAddress;
      },
      set(value) {
        const newDetails = { ...this.details, emailAddress: value };
        this.$store.commit('updateContact', newDetails);
      },
    },
  },
};
</script>

<style lang="scss" scoped>

.contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 15px;
    padding-bottom: 20px;
    max-width: 700px;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
}

.contact__title {
    margin-top: 20px;
    margin-bottom: 20px;
}

.contact__information {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    .contact__information__number {
        margin-right: 10px;
    }
    .contact__information__email {
        // width: 0px;
    }

}
.contact__actions{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    width:100%
}

button {
    width: 100%;
    background: none;
    border:none;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 14px;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    min-width: 100px;
    min-height: 30px;
    cursor: pointer;
}

.button__save:hover {
    background-color: #78e08f
}

.button__delete:hover {
    background-color: #e55039
}

input {
    border: none;
    border-bottom: 1px solid gray;
}
</style>
