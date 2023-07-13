import Image from 'next/image';
import styles from "../styles/Projectpart.module.css";

export default function Project2() {
    return <section className={styles.about}>
        <div className={styles.part}>
            <div className={styles.Projectback}>
                <div className={styles.desc}>
                    <div className={styles.centre}>
                        <h2 className={styles.title}>Application C# pour gerer une bibliothèque de livre.</h2>
                        <h3 className={styles.projectdesc}>
                            l&rsquo;application sert a ajouter des livre a une base de donner et faire une recherche sur un livre ou ajouter un autre ou le supprimer ou le modifier
                        </h3>
                    </div>
                </div>
                <div className={styles.imag}>
                    <div className={styles.imagecontainer}>
                        <Image src="/csharpproject.jpg" layout='fill' alt="la photo est d'internet je n'ai pas la photo du project." objectFit='contain' />
                    </div>
                </div>
            </div>
        </div>
    </section>
}

