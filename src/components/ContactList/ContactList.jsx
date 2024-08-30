import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts) || [];
  const filterValue = useSelector(selectNameFilter) || '';
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );


  return (
    <ul className={css.contactsList}>
      {filterContacts.map(({ id, ...contact }) => (
        <li key={id} className={css.listItem}>
          <Contact id={id} {...contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
