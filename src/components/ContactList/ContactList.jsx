import styles from './contactList.module.scss';
import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';

const ContactList = ({ filterSearch }) => {
  const list = filterSearch.map(({ id, name, number }) => (
    <ContactItem key={id} id={id} name={name} number={number} />
  ));

  return <ul className={styles.list}>{list}</ul>;
};
ContactList.propTypes = {
  filterSearch: PropTypes.array.isRequired,
};
export default ContactList;
