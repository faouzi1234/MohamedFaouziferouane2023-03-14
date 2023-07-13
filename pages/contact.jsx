import { useState } from 'react'
import styles from "../styles/Contact.module.css";
import Head from 'next/head';

export default function Contact() {
    const [formulaire, setformulaire] = useState({
        nom: { value: "", etat: true },
        email: { value: "", etat: true },
        msg: { value: "", etat: true },
    })

    const validname = (nom) => {
        if (nom.trim().length > 2) {
            return true;
        }
        return false;
    }

    const validemail = (email) => {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (email.match(validRegex)) {
            return true;
        } else {
            return false;
        }
    }

    const validmsg = (msg) => {
        if (msg.trim().split(' ').length > 5) {
            return true;
        }
        return false;
    }

    const check = () => {
        if (formulaire['nom'].value == "" || formulaire['nom'].etat == false)
            return false;
        if (formulaire['email'].value == "" || formulaire['email'].etat == false)
            return false;
        if (formulaire['msg'].value == "" || formulaire['msg'].etat == false)
            return false;
        return true;
    }

    const change = e => {
        var val = e.target.value;
        var etat = false;
        if (e.target.name == "nom") {
            if (validname(val))
                etat = true
        } else if (e.target.name == "email") {
            if (validemail(val))
                etat = true
        } else if (e.target.name == "msg") {
            if (validmsg(val))
                etat = true
        }
        const updatevalue = {
            ...formulaire,
            [e.target.name]: { value: val, etat: etat },
        };
        setformulaire(updatevalue);
    }

    const onSubmitFormulaire = e => {
        e.preventDefault();
        if (check()) {
            console.log(formulaire)
            setformulaire({
                nom: { value: "", etat: true },
                email: { value: "", etat: true },
                msg: { value: "", etat: true },
            })
        } else {
            alert("les donne entre sont incorrect ou nul!");
        }
    };

    return <section className={styles.contact}>
        <Head>
            <title>Mohamed_Faouzi - Contact</title>
            <meta name="description" content="vous pouvez me contacter a travers ce formulaire." />
            <meta property="og:title" content="Mohamed_Faouzi - Contact" />
            <meta property="og:description" content="vous pouvez me contacter a travers ce formulaire." />
            <meta property="og:image" content="http://localhost:3000/Mohamed-Faouzi-ferouane.png" />
        </Head>
        <div className={styles.title}>
            <h1>Contact</h1>
        </div>
        <div className={styles.part}>
            <div className={styles.formulaire}>
                <form className={styles.contactform} onSubmit={onSubmitFormulaire}>
                    <div className={styles.formpart}>
                        <label for="nom">Nom:</label>
                        <input type="text" id="nom" name="nom" value={formulaire['nom'].value} onChange={change} />
                        <p className={styles.error + " " + (formulaire["nom"].etat ? styles.hide : "")}>le nom doit avoir plus de 3 lettre!</p>
                    </div>
                    <div className={styles.formpart}>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" value={formulaire['email'].value} onChange={change} />
                        <p className={styles.error + " " + (formulaire["email"].etat ? styles.hide : "")}>Email invalid!</p>
                    </div>
                    <div className={styles.formpart}>
                        <label for="msg">Message:</label>
                        <textarea type="text" id="msg" name="msg" value={formulaire['msg'].value} onChange={change} />
                        <p className={styles.error + " " + (formulaire["msg"].etat ? styles.hide : "")}>le message doit avoir plus de 5 mot!</p>
                    </div>
                    <div className={styles.formpart}>
                        <input type="submit" value="Envoyer" />
                    </div>
                </form>
            </div>
        </div>
    </section>
}
