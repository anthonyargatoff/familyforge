import NavButton from "./NavButton";
import styles from './Navigation.module.css';

export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <NavButton name='Home' url='/' />
            <NavButton name='About' url='/about' />
            <NavButton name='Contacts' url='/contacts' />
            <NavButton name='Login' url='/login' />
        </div>

    )
}