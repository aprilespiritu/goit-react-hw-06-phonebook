import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const ContactListItem = ({ filteredContact, deleteContact}) => {
    
    const handleDelete = () => {
        deleteContact(filteredContact.id);
        Notify.success(`${filteredContact.name} was successfully deleted from your contacts!`, { position: 'center-top' });
    };

    return (
        <li className={css.contactListItem}>
            <p>{filteredContact.name}:</p>
            <p className={css.contactAlign}>{filteredContact.number}</p>
            <button className={css.btnDelete} onClick={handleDelete}>
                Delete
            </button>
        </li>
    );
}

ContactListItem.propTypes = {
    filteredContact: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired,
};