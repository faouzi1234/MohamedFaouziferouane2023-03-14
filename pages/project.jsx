import { useState } from 'react'
import Project1 from '../components/Project1';
import Project2 from '../components/Project2';
import styles from "../styles/Project.module.css";
import Head from 'next/head'

export default function Project() {
    const [project, setProject] = useState("Project1");
    return <section className={styles.about}>
        <Head>
            <title>Mohamed_Faouzi - Project</title>
            <meta name="description" content="voici un aperçu sur les projets que j'ai realisé dans mes etudes." />
            <meta property="og:title" content="Mohamed_Faouzi - Project" />
            <meta property="og:description" content="voici un aperçu sur les projets que j'ai realisé dans mes etudes." />
            <meta property="og:image" content="http://localhost:3000/Mohamed-Faouzi-ferouane.png" />
        </Head>
        <div className={styles.title}>
            <h1>Mes Project</h1>
        </div>
        <div className={styles.partProject}>
            <div className={styles.projectselect}>
                <h2 onClick={() => { setProject("Project1") }} className={(project == "Project1") ? styles.selected : ""}>Project 1</h2>
            </div>
            <div className={styles.projectselect}>
                <h2 onClick={() => { setProject("Project2") }} className={(project == "Project2") ? styles.selected : ""}>Project 2</h2>
            </div>
        </div>
        <div className={styles.projects}>
            {project === 'Project1' ?
                <Project1 />
                : project === 'Project2' ?
                    <Project2 />
                    : <></>
            }
        </div>
    </section>
}
