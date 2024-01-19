import styles from './mainContact.module.css'

export default function EditSchedule ({selectedContact}) {

    // TODO - set default values from database, weekday and weeks

    if (selectedContact === null) {
        return(
            <div className={styles.viewContact}>
                Select a contact
            </div>
        )
    }

    return (
        <form className={styles.editSchedule}>
            <label className={styles.scheduleLabel}>Day of the week: </label>
            <select className={styles.scheduleLabel} name='weekDay' >
                <option value='sunday' selected>Sunday</option>
                <option value='monday'>Monday</option>
                <option value='tuesday'>Tuesday</option>
                <option value='wednesday'>Wednesday</option>
                <option value='thrusday'>Thursday</option>
                <option value='friday'>Friday</option>
                <option value='saturday'>Saturday</option>
            </select><br></br>
            <label >How often to receive notifications (between 1 and 52 weeks inclusive): </label>
            <input type="number" name="contactFrequency" min="1" max="52"></input>
        </form>
    )
}