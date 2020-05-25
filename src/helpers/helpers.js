export const checkContactForUnique = (contactsArr, newContact) =>
  contactsArr.some(
    item => item.name.toLowerCase() === newContact.name.toLowerCase(),
  );

export const filterContactList = (contactsArr, query) =>
  contactsArr.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );
