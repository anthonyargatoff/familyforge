import styles from '../contacts.module.css';
import { Roboto } from 'next/font/google';
import React, {useState} from 'react';


const roboto = Roboto({
    weight: '400',
    subsets: ['latin']
});

export default function SideBar(props) {
    
    // Use array destructuring to get the state values
    const [contactList, setContactList] = useState(props.contacts);
    const [sortOrderFirstName, setSortOrderFirstName] = useState('desc');
    const [sortOrderLastName, setSortOrderLastName] = useState('asc');
    const [searchQuery, setSearchQuery] = useState('');
    const [firstNameArrow, setFirstNameArrow] = useState('↓');
    const [lastNameArrow, setLastNameArrow] = useState('↑');
    const selectedContact = props.onContactSelect;

    // Filters out the user input and only returns matches
    const filteredContacts = contactList.filter(
        (contact) =>
            contact.firstname.toLowerCase().includes(searchQuery.toLowerCase()) || contact.lastname.toLowerCase().includes(searchQuery.toLowerCase())
    )
  
    // sorts the list by first name. Button toggles.
    function sortFirstName() {
        const cloneContacts = [...contactList];
        cloneContacts.sort((a, b) => {
            const comparison = a.firstname.localeCompare(b.firstname);
            return sortOrderFirstName === 'asc' ? comparison : -comparison;
        });
        setContactList(cloneContacts);
        // Toggle the sort order for the next click
        setSortOrderFirstName(sortOrderFirstName === 'asc' ? 'desc' : 'asc');
        setFirstNameArrow(sortOrderFirstName === 'asc' ? '↓' : '↑');
    }

    // Sort by last name, toggle
    function sortLastName() {
        const cloneContacts = [...contactList];
        cloneContacts.sort((a, b) => {
            const comparison = a.lastname.localeCompare(b.lastname);
            return sortOrderLastName === 'asc' ? comparison : -comparison;
        });
        setContactList(cloneContacts);
        // Toggle the sort order for the next click
        setSortOrderLastName(sortOrderLastName === 'asc' ? 'desc' : 'asc');
        setLastNameArrow(sortOrderLastName === 'asc' ? '↓' : '↑');
    }

    // Used to detect changes in the form field
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <div className={styles.sideBar}>
          <div className={styles.searchBar}>
            <input 
                type='text'
                placeholder='Search by name'
                value={searchQuery}
                onChange={handleSearchInputChange}
                className={styles.form}
            />
            <button className={styles.button} onClick={sortFirstName}>First Name  {firstNameArrow}</button>
            <button className={styles.button} onClick={sortLastName}>Last Name {lastNameArrow}</button>
          </div>
          <ul className={`${roboto.className} ${styles.buttonContainer}`}>
            {filteredContacts.map((contact, index) => (
                <li onClick={() => selectedContact(contact)} key={contact.contactid} className={`${styles.sideBarCard} ${index % 2 === 0 ? styles.even : styles.odd}`}>{contact.firstname} {contact.lastname}</li>
            ))}
          </ul>
        </div>
    )
}