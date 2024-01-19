import styles from './mainContact.module.css'

export default function ViewContact ({ selectedContact }) {

    if (selectedContact === null) {
        return(
            <div className={styles.viewContact}>
                Select a contact
            </div>
        )
    }
    else return (
        <div className={styles.viewContact}>
            <table>
                <tr>
                    <th className={styles.tableRows}>
                        First Name:
                    </th>
                    <td className={styles.tableRows}>
                        {selectedContact.firstname}
                    </td>
                </tr>
                <tr>
                    <th className={styles.tableRows}>
                        Last Name:
                    </th>
                    <td className={styles.tableRows}>
                        {selectedContact.lastname}
                    </td>
                </tr>
                <tr>
                    <th className={styles.tableRows}>
                        Phone Number:
                    </th>
                    <td className={styles.tableRows}>
                        {selectedContact.phonenum && selectedContact.phonenum !== undefined ? selectedContact.phonenum : 'Not Entered'}
                    </td>
                </tr>
                <tr>
                    <th className={styles.tableRows}>
                        Email Address:
                    </th>
                    <td className={styles.tableRows}>
                        {selectedContact.email && selectedContact.email !== undefined ? selectedContact.email : 'Not Entered'}
                    </td>
                </tr>
                <tr>
                    <th className={styles.tableRows}>
                        Weekday: 
                    </th>
                    <td className={styles.tableRows}>
                        {selectedContact.weekday && selectedContact.weekday !== undefined ? selectedContact.email : 'Not Entered'}
                    </td>
                </tr>
                <tr>
                    <th className={styles.tableRows}>
                        Reminder frequency: 
                    </th>
                    <td className={styles.tableRows}>
                        {selectedContact.frequency && selectedContact!== undefined ? selectedContact.email : 'Not Entered'}
                    </td>
                </tr>
            </table>
        </div>
    )
}