import Image from 'next/image'
import Head from 'next/head'
import styles from "../styles/Index.module.css"

export default function Index() {

    return <section className={styles.index}>
        <Head>
            <title>Mohamed_Faouzi</title>
            <meta name="description" content="je me present je suis Mohamed Faouzi Ferouane un étudiant en programmation informatique." />
            <meta property="og:title" content="Mohamed_Faouzi" />
            <meta property="og:description" content="je me present je suis Mohamed Faouzi Ferouane un étudiant en programmation informatique." />
            <meta property="og:image" content="http://localhost:3000/Mohamed-Faouzi-ferouane.png" />
        </Head>
        <div className={styles.indexpart}>
            <div className={styles.indexpartali}>
                <div className={styles.indeximagepart}>
                    <div className={styles.indeximagecontainer}>
                        <div className={styles.indeximage}>
                            <Image src="/Mohamed-Faouzi-ferouane.png" layout='fill' objectFit='contain' alt="MohamedFaouziferouane" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.indexpartali}>
                <div className={styles.descindex}>
                    <div className={styles.desctext}>
                        <h1>Hi, je suis Mohamed Faouzi ferouane</h1>
                        <h3>Un étudiant en programmation informatique au college la cité a ottawa, passionné par le domaine de l&rsquo;informatique et de la programmation.</h3>
                    </div>
                </div>
            </div>

        </div>
    </section>
}
