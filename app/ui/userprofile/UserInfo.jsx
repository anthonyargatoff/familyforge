import Link from 'next/link';
import styles from './profile.module.css';

export default function UserInfo () {
    
    return (
        <table className={styles.table}>
            <tr className={styles.tableRow}>
                <th className={styles.tableData}>
                    First Name:
                </th>
                <td className={styles.tableData}>
                    Anthony
                </td>
                <td className={styles.tableData}>
                    <Link href='/profile' className={styles.button}>Edit</Link>
                </td>
            </tr>
            <tr className={styles.tableRow}>
                <th className={styles.tableData}>
                    Last Name:
                </th>
                <td className={styles.tableData}>
                    Argatoff
                </td>
                <td className={styles.tableData}>
                    <Link href='/profile' className={styles.button}>Edit</Link>
                </td>
            </tr>
            <tr className={styles.tableRow}>
                <th className={styles.tableData}>
                    Username:
                </th>
                <td className={styles.tableData}>
                    test1
                </td>
                <td className={styles.tableData}>
                    <Link href='/profile' className={styles.button}>Edit</Link>
                </td>
            </tr>
            <tr className={styles.tableRow}>
                <th className={styles.tableData}>
                    Email:
                </th>
                <td className={styles.tableData}>
                    test@whatever.com
                </td>
                <td className={styles.tableData}>
                    <Link href='/profile' className={styles.button}>Edit</Link>
                </td>
            </tr>
            <tr className={styles.tableRow}>
                <th className={styles.tableData}>
                    Password:
                </th>
                <td className={styles.tableData}>
                    Hidden
                </td>
                <td className={styles.tableData}>
                    <Link href='/profile' className={styles.button}>Edit</Link>
                </td>
            </tr>
        </table>
    )
};