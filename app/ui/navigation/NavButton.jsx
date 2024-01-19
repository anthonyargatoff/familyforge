'use client';

import styles from './Navigation.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavButton(props){

    const {name, url} = props;
    const isActive = url === usePathname();
    const buttonClass = isActive ? `${styles.navButton} ${styles.active}` : styles.navButton;    
    
    return(
        <Link className={`${styles.nav} ${buttonClass}`} href={url}>
            <div>
                {name}
            </div>
        </Link>
    )
}