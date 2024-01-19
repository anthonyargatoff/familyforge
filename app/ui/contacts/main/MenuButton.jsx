import styles from './mainContact.module.css'

export default function NavButton({name, menuSelect, selectedMenu}){
    
    // const buttonClass = isActive ? `${styles.navButton} ${styles.active}` : styles.navButton;    
    
    return(
        <div onClick={() => menuSelect(name)} className={`${name === selectedMenu ? `${styles.menuButton} ${styles.active}` : `${styles.menuButton}`}`}>
            {name}
        </div>
    )
}