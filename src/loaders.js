const URL = "https://randomuser.me/api/?results=50&seed=694bf5712b858b6e&inc=name,email,id,picture,cell&nat=IN";

export async function loadContacts() {
  const result = await fetch(URL);
  return (await result.json())?.results;
}
//Here .results is object inside the data we are receiving

export async function loadContact(contactId) {
  const contacts = await loadContacts();
  return contacts.find((contact) => contact.id.value === contactId);
}
