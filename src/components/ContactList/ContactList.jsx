import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ filterContact, deleteContact }) => {
    const filteredContacts = filterContact();
    
    return (
        <ul className={css.ulBox}>
            {filteredContacts.map(filteredContact => (
                <ContactListItem
                    key={filteredContact.id}
                    filteredContact={filteredContact}
                    deleteContact={deleteContact}
                />
            ))}
        </ul>
    );
}

ContactList.propTypes = {
        filterContact: PropTypes.func.isRequired,
        deleteContact: PropTypes.func.isRequired,
};