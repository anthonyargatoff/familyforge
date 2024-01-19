import styles from './mainContact.module.css'

export default function EditContacts () {
    return (
        <form className={styles.viewContact}>
            <table>
                <tr>
                    <th className={styles.tableRows}>
                        First Name:
                    </th>
                    <td className={styles.tableRows}>
                        <input type='text' maxlength='50' id='firstName' />
                    </td>
                </tr>
                <tr>
                    <th className={styles.tableRows}>
                        Last Name:
                    </th>
                    <td className={styles.tableRows}>
                        <input type='text' maxlength='50' id='lastname' />
                    </td>
                </tr>
                <tr>
                    <th className={styles.tableRows}>
                        Phone Number:
                    </th>
                    <td className={styles.tableRows}>
                        <input type='text' maxlength='15' id='phonenum' />
                    </td>
                </tr>
                <tr>
                    <th className={styles.tableRows}>
                        Email Address:
                    </th>
                    <td className={styles.tableRows}>
                        <input type='email' maxlength='50' id='email' />
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