// TODO - get user data from database (weeks, weekDay)

import { useEffect, useState } from 'react';
import styles from './mainContact.module.css'

export default function EditContacts ({ selectedContact }) {

    if (selectedContact === null) {
        return(
            <div className={styles.viewContact}>
                Select a contact
            </div>
        )
    }

    else {

        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [phoneNum, setPhoneNum] = useState('');
        const [email, setEmail] = useState('');

        useEffect(() => {
            if(selectedContact){
                setFirstName(selectedContact.firstname);
                setLastName(selectedContact.lastname);
                setPhoneNum(selectedContact.phonenum && selectedContact.phoneNum !== undefined ? selectedContact.phonenum : '');
                setEmail(selectedContact.email && selectedContact.email !== undefined ? selectedContact.email : '');
            }
        }, [selectedContact]);

        const handleFirstName = (e) => {
            setFirstName(e.target.value);
        }
        const handleLastName = (e) => {
            setLastName(e.target.value);
        }
        const handlePhoneNum = (e) => {
            setPhoneNum(e.target.value);
        }
        const handleEmail = (e) => {
            setEmail(e.target.value);
        }

    
        return (
            <form className={styles.viewContact}>
                <table>
                    <tr>
                        <th className={styles.tableRows}>
                            First Name:
                        </th>
                        <td className={styles.tableRows}>
                            <input type='text' maxlength='50' id='firstName' value={firstName} onChange={handleFirstName} required />
                        </td>
                    </tr>
                    <tr>
                        <th className={styles.tableRows}>
                            Last Name:
                        </th>
                        <td className={styles.tableRows}>
                            <input type='text' maxlength='50' id='lastname' value={lastName} onChange={handleLastName} required/>
                        </td>
                    </tr>
                    <tr>
                        <th className={styles.tableRows}>
                            Phone Number:
                        </th>
                        <td className={styles.tableRows}>
                            <input type='text' maxlength='15' id='phonenum' value={phoneNum} onChange={handlePhoneNum} />
                        </td>
                    </tr>
                    <tr>
                        <th className={styles.tableRows}>
                            Email Address:
                        </th>
                        <td className={styles.tableRows}>
                            <input type='email' maxlength='50' id='email' value={email} onChange={handleEmail} />
                        </td>
                    </tr>
                    <tr>
                        <th className={styles.tableRows}>Day of the week: </th>
                    <td className={styles.tableRows}>
                        <select className={styles.scheduleLabel} name='weekDay'>
                            <option disabled selected value=''> -- select an option -- </option>
                            <option value='sunday' >Sunday</option>
                            <option value='monday'>Monday</option>
                            <option value='tuesday'>Tuesday</option>
                            <option value='wednesday'>Wednesday</option>
                            <option value='thrusday'>Thursday</option>
                            <option value='friday'>Friday</option>
                            <option value='saturday'>Saturday</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th className={styles.tableRows}>
                        Next reminder (weeks):
                    </th>
                    <td className={styles.tableRows}>
                        <input type="number" name="contactFrequency" min="1" max="52"></input>
                    </td>
                </tr>
                </table>
                <input type='submit' value='Submit' />
            </form>
        )
    }
}