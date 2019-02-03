<template>
<div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" fab dark fixed color="#F44336" class="button__add-contact">
        <v-icon>add</v-icon>
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Create new contact</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md6>
                <v-text-field label="First name" required v-model="contact.firstName"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field label="Last name" v-model="contact.lastName"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                    label="Phone number"
                    type="number"
                    required
                    v-model="contact.phoneNumber">
                </v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email Address" required v-model="contact.emailAddress"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div v-show="dialog" class="overlay"></div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    contact: {
      firstName: '',
      lastName: '',
      phoneNumber: null,
      emailAddress: '',
    },
    dialog: false,
  }),
  methods: {
    ...mapActions(['createContact']),

    save() {
      this.dialog = false;
      this.createContact({
        firstName: this.contact.firstName,
        lastName: this.contact.lastName,
        phoneNumber: this.contact.phoneNumber,
        emailAddress: this.contact.emailAddress,
      });
      this.contact = {
        firstName: '',
        lastName: '',
        phoneNumber: null,
        emailAddress: '',
      };
    },
  },

};
</script>

<style lang="scss">

.button__add-contact {
  position: fixed;
  bottom: 60px;
  right: 60px;
}

.overlay {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    background: #fff;
    opacity: 0.5;
}

</style>
