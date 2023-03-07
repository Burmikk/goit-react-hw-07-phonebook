import styles from './contactList.module.scss';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterSearch = () => {
    if (!filter) {
      return contacts;
    }
    const newContact = contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return newContact;
  };

  const filteredContacts = filterSearch();

  const list = filteredContacts.map(({ id, name, phone }) => (
    <ContactItem key={id} id={id} name={name} number={phone} />
  ));

  return <ul className={styles.list}>{list}</ul>;
};

export default ContactList;
