import styles from './mainContact.module.css'
import MenuButton from '@/ui/contacts/main/MenuButton'

export default function ContactMenu ({menuSelect, selectedMenu}) {

    return (
        <nav className={styles.menu}>
            <MenuButton menuSelect={menuSelect} name='Contact Information' selectedMenu={selectedMenu}/>
            <MenuButton menuSelect={menuSelect} name='Edit Contact Information' selectedMenu={selectedMenu}/>
            {/* <MenuButton menuSelect={menuSelect} name='Edit Contact Schedule' selectedMenu={selectedMenu}/> */}
            <MenuButton menuSelect={menuSelect} name='Add New Contact' selectedMenu={selectedMenu}/>
        </nav>
    )
}