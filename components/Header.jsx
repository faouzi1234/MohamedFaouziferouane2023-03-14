import styles from "../styles/Header.module.css"
import Link from "next/link";

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.navbar}>
            <div className={styles.navbarcontaint}>
                <ul className={styles.navbarul}>
                    <li className={styles.navbarli}><Link className={styles.navbarlink} href="/">Home</Link></li>
                    <li className={styles.navbarli}><Link className={styles.navbarlink} href="/about">About</Link></li>
                    <li className={styles.navbarli}><Link className={styles.navbarlink} href="/project">Projects</Link></li>
                    <li className={styles.navbarli}><Link className={styles.navbarlink} href="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </header>
}