import styles from "./profile.module.css";
import Link from 'next/link';

export default function ChangeFirstName () {

    return (
        <form className={styles.changeFirstName}>
            <label className={styles.firstNameLabel}>Enter new first name:</label><br></br>
            <input placeholder='Enter new name' type='text' className={styles.firstNameInput}/><br></br>
            <input type='submit' className={styles.firstNameSubmit}></input><br></br>
            <Link href='/profile' className={styles.backButton}>Previous Menu</Link>

        </form>
    )
}