import {useEffect, useState} from "react";
import {sendEmail} from "../../utils/contactFormService";

export const ContactForm = () => {

    const [email, setEmail] = useState({
        name:'',
        email:'',
        message:''
    });

    const handleChange  = (e) => {

        setEmail({
            ...email,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await sendEmail(email).then(e => console.log(e));

        } catch (error) {
            console.log(error)
        }

    };

    return (
        <form id='contact-form' className="contactForm" onSubmit={handleSubmit}>
            <input type="text"  name="name" onChange={handleChange} value={email.name}/>
            <input type="text" name="email" onChange={handleChange} value={email.email}/>
            <textarea name="message" onChange={handleChange} value={email.message}/>
            <button>Submit</button>
        </form>
    )


}