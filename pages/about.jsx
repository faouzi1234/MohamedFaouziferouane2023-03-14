import styles from "../styles/About.module.css"
import Head from 'next/head'

export default function About() {

    return <section className={styles.about}>
        <Head>
            <title>Mohamed_Faouzi - A Propos</title>
            <meta name="description" content="Des information a propos des mes etudes et mes experience de travaille." />
            <meta property="og:title" content="Mohamed_Faouzi - A Propos" />
            <meta property="og:description" content="Des information a propos des mes etudes et mes experience de travaille." />
            <meta property="og:image" content="http://localhost:3000/Mohamed-Faouzi-ferouane.png" />
        </Head>
        <div className={styles.part}>
            <div className={styles.student}>
                <h1 className={styles.textcentre}>Mes Etudes</h1>
                <div className={styles.etude}>
                    <h1 className={styles.ecolename}>DEC programmation informatique</h1>
                    <h2 className={styles.ecolepro}>La Cité, Ottawa</h2>
                    <h2 className={styles.ecoledate}>2021-?</h2>
                </div>
                <div className={styles.etude}>
                    <h1 className={styles.ecolename}>Diplôme d’études baccalauréat économique</h1>
                    <h2 className={styles.ecolepro}>Groupe scolaire AL MAKRIZI</h2>
                    <h2 className={styles.ecoledate}>2018-2020</h2>
                </div>
            </div>
        </div>
        <div className={styles.part}>
            <div className={styles.experience}>
                <h1 className={styles.textcentre}>Mon Expérience</h1>
                <div className={styles.etude}>
                    <h1 className={styles.ecolename}>Centre des cours de soutiens (Maroc)</h1>
                    <h2 className={styles.ecolepro}>Commis – Service à la clientèle</h2>
                    <ul className={styles.exper}>
                        <li className={styles.experli}><h3>Accueillir et diriger les clients</h3></li>
                        <li className={styles.experli}><h3>Entre les informations des clients</h3></li>
                    </ul>
                    <h2 className={styles.ecoledate}>2019-2020</h2>
                </div>
                <div className={styles.etude}>
                    <h1 className={styles.ecolename}>Laboratoire, Rabat (Maroc)</h1>
                    <h2 className={styles.ecolepro}>Commis</h2>
                    <ul className={styles.exper}>
                        <li className={styles.experli}><h3>Mettre les produit chimie dans leur ranger </h3></li>
                        <li className={styles.experli}><h3>Ranger les livres et documents sur les rayons</h3></li>
                        <li className={styles.experli}><h3>Classer les produits par ordre de alphabétique</h3></li>
                    </ul>
                    <h2 className={styles.ecoledate}>2019</h2>
                </div>
            </div>
        </div>
    </section>
}
