import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);

  return data;
}

export async function dltContact(id) {
  await axios.delete(`/contacts/${id}`);
  return id;
}