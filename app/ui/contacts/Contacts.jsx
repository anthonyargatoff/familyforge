'use client';
import styles from "./contacts.module.css"
import SideBar from "./sideBar/sideBar"
import React, { useState} from 'react'
import ContactMenu from "./main/ContactMenu";
import ViewContact from "./main/ViewContact";
import EditContacts from "./main/EditContacts";
import AddNewContact from "./main/AddNewContact"
// import EditSchedule from './main/EditSchedule'

export default function Contacts (props) {
    
    // Loads the contacts from page
    const sortedContacts = props.contacts;
    const [selectedContact, setSelectedContact] = useState(null);
    const [selectMenu, setSelectedMenu] = useState('Contact Information');

    const handleContactSelect = (contact) => {
        setSelectedContact(contact);
    }
    const handleMenuSelection = (menu) => {
        setSelectedMenu(menu);
    }

    function changeView (selectMenu) {
        switch (selectMenu) {
            case 'Contact Information':
                return <ViewContact selectedContact={selectedContact}/>;
            case 'Edit Contact Information':
                return <EditContacts selectedContact={selectedContact}/>;
            case 'Add New Contact':
                return <AddNewContact />;
            // case 'Edit Contact Schedule':
            //     return <EditSchedule selectedContact={selectedContact}/>;
            default:
                return <ViewContact selectedContact={selectedContact}/>;
        }
    }

    return(
        <div className={styles.pageContainer}>
            <SideBar contacts={sortedContacts} onContactSelect={handleContactSelect}/>
            <div className={styles.mainContent}>
                <ContactMenu menuSelect={handleMenuSelection} selectedMenu={selectMenu}/>
                <div className={styles.viewContacts}>
                    {changeView(selectMenu)}
                </div>
            </div>
        </div>
    )
}