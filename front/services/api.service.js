import axios from 'axios';

export default {
  getContactList() {
    setTimeout(
      () => axios.get('http://localhost:8081/contacts/list'),
      3000,
    );
  },

  getContact(id) {
    return axios.get(`http://localhost:8081//contacts/${id}`);
  },

  createContact(firstName, lastName, phoneNumber, emailAddress) {
    return axios.post('http://localhost:8081/contacts/create', {
      firstName,
      lastName,
      phoneNumber,
      emailAddress,
    });
  },

  updateContact(contact) {
    return axios.put(`http://localhost:8081/contacts/${id}/update`, {
      firstName: contact.firstName,
      lastName: contact.lastName,
      phoneNumber: contact.phoneNumber,
      emailAddress: contact.emailAddress,
    });
  },

  deleteContact(id) {
    return axios.delete(`http://localhost:8081/contacts/${id}/delete`);
  },
};
