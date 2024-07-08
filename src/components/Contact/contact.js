import React, { useRef, useState } from 'react';
import './contact.css';
import Fbicon from '../../assets/fb.webp';
import twittericon from '../../assets/twitter.webp';
import linkedinicon from '../../assets/linkedin.webp';
import Instaicon from '../../assets/insta.webp';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [formValues, setFormValues] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validate = () => {
        let errors = {};
        if (!formValues.from_name) {
            errors.from_name = "Name is required";
        }
        if (!formValues.from_email) {
            errors.from_email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formValues.from_email)) {
            errors.from_email = "Email address is invalid";
        }
        if (!formValues.message) {
            errors.message = "Message is required";
        }
        return errors;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            emailjs
                .sendForm('service_vqxaggc', 'template_d6fgmtc', form.current, 'mbVWskwUo9M-ApbH6')
                .then(
                    () => {
                        console.log('SUCCESS!');
                        e.target.reset();
                        setFormValues({
                            from_name: '',
                            from_email: '',
                            message: ''
                        });
                        setFormErrors({});
                        alert("Email Sent!");
                        setIsSubmitting(false);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setIsSubmitting(false);
                    },
                );
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <div id="contact" className="contact">
            <h1 className="contactpagetitle">Contact Me</h1>
            <div className="line"></div>
            <span className="contactdesc">Please fill out the form below to discuss any work related opportunity</span>
            <form className="contactform" ref={form} onSubmit={sendEmail}>
                <input
                    type="text"
                    className="name"
                    placeholder="Your Name"
                    name="from_name"
                    value={formValues.from_name}
                    onChange={handleChange}
                />
                {formErrors.from_name && <p className="error">{formErrors.from_name}</p>}
                <input
                    type="email"
                    className="email"
                    placeholder="Your Email Id"
                    name="from_email"
                    value={formValues.from_email}
                    onChange={handleChange}
                />
                {formErrors.from_email && <p className="error">{formErrors.from_email}</p>}
                <textarea
                    className="msg"
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    value={formValues.message}
                    onChange={handleChange}
                ></textarea>
                {formErrors.message && <p className="error">{formErrors.message}</p>}
                <button type="submit" className="submitbtn" disabled={isSubmitting}>Submit</button>
                <div className="links">
                    <img src={Fbicon} alt="Facebook" className="link" />
                    <img src={twittericon} alt="Twitter" className="link" />
                    <img src={linkedinicon} alt="Linkedin" className="link" />
                    <img src={Instaicon} alt="Instagram" className="link" />
                </div>
            </form>
        </div>
    );
}

export default Contact;
