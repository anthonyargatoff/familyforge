
import Contacts from '@/ui/contacts/Contacts';
import { fetchContacts } from '/app/lib/queries';

// Gets data from db
const contacts = await fetchContacts();

// Sorts by firstname for initial load
const sortedContacts = [...contacts].sort((a, b) => a.firstname.localeCompare(b.firstname));

export default async function page(){

    return(
        <Contacts contacts={sortedContacts}/>
    )
};