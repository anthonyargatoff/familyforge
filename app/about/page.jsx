import styles from './about.module.css';

export default function about(){
    return (
        <div className={styles.aboutSection}>
            <h2>Family Forge</h2>
            <p>Family Forge is a app built to help users stay connected with their family, friends and loved ones. The idea was inspired last summer when I realized I would like to stay more connected with my family and friends but I always seemed to forget to call when I had spare time.</p>
            <p>To use, a user can add the contact's information and then select a frequency with which the user will receive an email notification from the app. The email will contain the contact's information and phone number.</p>
            <p>This app is essentially a reminder app, but it has provided me with an opportunity to learn more about web development and data managing.</p>
        </div>
    )
}