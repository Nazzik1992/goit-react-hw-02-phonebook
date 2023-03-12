
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(element => {
          const { id, userName, number } = element;
          return (
            <li key={id} className="Statistics__result">
              {userName}: {number}
              <button type="button" name={id} onClick={onDelete}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

Contacts.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.is,
};