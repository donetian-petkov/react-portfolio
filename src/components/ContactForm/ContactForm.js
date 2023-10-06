import {sendEmail} from "../../utils/contactFormService";
import styles from "./ContactForm.module.css"
import {useState} from "react";
import {toast, Toaster} from "react-hot-toast";

const ContactForm = () => {

    const [email, setEmail] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {

        setEmail({
            ...email,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await sendEmail(email);

            const result = await response.json();

            if (result.status === "success") {
                toast.success(result.message);
            } else if (result.status === "failure") {
                toast.error(result.message);
            }

        } catch (error) {
            console.log(error);
        }

    };

    return (
            <form id='contact-form' className={styles.contactForm} onSubmit={handleSubmit}>
                <h2>Contact Form: </h2>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={handleChange} value={email.name}
                       className={styles.contactForm__input}/>
                <label htmlFor="email">Email Address: </label>
                <input type="text" name="email" onChange={handleChange} value={email.email}
                       className={styles.contactForm__input}/>
                <label htmlFor="email">Message: </label>
                <textarea name="message" onChange={handleChange} value={email.message}
                          className={styles.contactForm__textArea}/>
                <button className={styles.contactForm__btn}>Submit</button>
            </form>
    )


}

export default ContactForm;