import Image from 'next/image';
import styles from "../styles/Projectpart.module.css";

export default function Project1() {
    return <section className={styles.about}>
        <div className={styles.part}>
            <div className={styles.Projectback}>
                <div className={styles.desc}>
                    <div className={styles.centre}>
                        <h2 className={styles.title}>Application android pour afficher des informations sur les pays du monde.</h2>
                        <h3 className={styles.projectdesc}>
                        J’ai créé au cours de mon programme d’étude une application Android qui ne donne des informations sur un paye donne Just en cliquons sur son nom ou drapeau.
                        </h3>
                    </div>
                </div>
                <div className={styles.imag}>
                    <div className={styles.imagecontainer}>
                        <Image src="/flags.png" layout='fill' alt="la photo est d'internet je n'ai pas la photo du project." objectFit='contain' />
                    </div>
                </div>
            </div>
        </div>
    </section>
}

