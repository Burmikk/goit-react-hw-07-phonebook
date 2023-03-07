import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import styles from './contactPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-slice';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { addFilter } from 'redux/filter/filter-slice';

const ContactPage = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onAddContact = data => {
    const checkForMatch = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (checkForMatch) {
      return alert(`${data.name} is already in contacts`);
    }
    dispatch(addContact(data));
  };

  //Функция ниже возвращает либо contacts либо отфильтрованый массив с контактами.
  //Дальше она передается в компонент ContactList который создает разметку искользуя эти данные

  const filterSearch = () => {
    if (!filter) {
      return contacts;
    }
    const newContact = contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return newContact;
  };

  const onFilter = e => {
    const { value } = e.target;
    dispatch(addFilter(value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm addContact={onAddContact} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter filter={onFilter} filterValue={filter} />
        {contacts.length !== 0 && <ContactList filterSearch={filterSearch()} />}
      </div>
    </div>
  );
};

export default ContactPage;
