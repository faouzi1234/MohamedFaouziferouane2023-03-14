import Header from "./Header";
import styles from "../styles/Header.module.css"

export default function Layout(props) {
    return <>
        <div className={styles.main}>
            <Header />
            <div>
                {props.children}
            </div>
        </div>
    </>
}