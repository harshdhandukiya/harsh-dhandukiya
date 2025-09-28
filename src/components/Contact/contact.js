import React, { useRef, useState } from 'react';
import './contact.css';
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
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors({ ...formErrors, [name]: '' });
        }
    };

    const validate = () => {
        let errors = {};
        if (!formValues.from_name.trim()) {
            errors.from_name = "Name is required";
        } else if (formValues.from_name.trim().length < 2) {
            errors.from_name = "Name must be at least 2 characters";
        }

        if (!formValues.from_email.trim()) {
            errors.from_email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.from_email)) {
            errors.from_email = "Please enter a valid email address";
        }

        if (!formValues.message.trim()) {
            errors.message = "Message is required";
        } else if (formValues.message.trim().length < 10) {
            errors.message = "Message must be at least 10 characters";
        }

        return errors;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const errors = validate();

        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            setSubmitStatus('sending');

            emailjs
                .sendForm('service_vqxaggc', 'template_d6fgmtc', form.current, 'mbVWskwUo9M-ApbH6')
                .then(
                    () => {
                        setSubmitStatus('success');
                        setFormValues({
                            from_name: '',
                            from_email: '',
                            message: ''
                        });
                        setFormErrors({});
                        setIsSubmitting(false);

                        // Reset success message after 5 seconds
                        setTimeout(() => setSubmitStatus(null), 5000);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setSubmitStatus('error');
                        setIsSubmitting(false);

                        // Reset error message after 5 seconds
                        setTimeout(() => setSubmitStatus(null), 5000);
                    },
                );
        } else {
            setFormErrors(errors);
        }
    };

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: '💼',
            url: 'https://www.linkedin.com/in/harsh-dhandukiya-b460081ab/',
            color: '#00ffff'
        },
        {
            name: 'GitHub',
            icon: '⚡',
            url: 'https://github.com/harshdhandukiya',
            color: '#ff00ff'
        },
        {
            name: 'Twitter',
            icon: '🐦',
            url: '#',
            color: '#ffff00'
        },
        {
            name: 'Instagram',
            icon: '📸',
            url: '#',
            color: '#00ff00'
        }
    ];

    return (
        <div id="contact" className="contact">
            <div className="contactContainer">
                <div className="contactHeader">
                    <h1 className="contactTitle">Let's Build Something Amazing</h1>
                    <div className="cyberLine"></div>
                    <p className="contactDescription">
                        Have a project in mind or need expert data analysis? I'm here to help transform your ideas into reality.
                        Let's discuss how we can work together to achieve your goals.
                    </p>
                </div>

                <div className="contactContent">
                    <div className="contactInfo">
                        <h2 className="infoTitle">Get In Touch</h2>
                        <div className="infoCards">
                            <div className="infoCard">
                                <div className="infoIcon">📧</div>
                                <div className="infoContent">
                                    <h3>Email Me</h3>
                                    <p>harshdhandukiya@gmail.com</p>
                                </div>
                            </div>
                            <div className="infoCard">
                                <div className="infoIcon">📍</div>
                                <div className="infoContent">
                                    <h3>Location</h3>
                                    <p>Mumbai, India</p>
                                </div>
                            </div>
                            <div className="infoCard">
                                <div className="infoIcon">⚡</div>
                                <div className="infoContent">
                                    <h3>Quick Response</h3>
                                    <p>Within 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contactFormContainer">
                        <h2 className="formTitle">Send a Message</h2>
                        <form className="contactForm" ref={form} onSubmit={sendEmail}>
                            <div className="formGroup">
                                <div className="inputContainer">
                                    <input
                                        type="text"
                                        className={`inputField ${formErrors.from_name ? 'error' : ''}`}
                                        placeholder="Your Full Name"
                                        name="from_name"
                                        value={formValues.from_name}
                                        onChange={handleChange}
                                    />
                                    <div className="inputGlow"></div>
                                </div>
                                {formErrors.from_name && <span className="errorMessage">{formErrors.from_name}</span>}
                            </div>

                            <div className="formGroup">
                                <div className="inputContainer">
                                    <input
                                        type="email"
                                        className={`inputField ${formErrors.from_email ? 'error' : ''}`}
                                        placeholder="your.email@example.com"
                                        name="from_email"
                                        value={formValues.from_email}
                                        onChange={handleChange}
                                    />
                                    <div className="inputGlow"></div>
                                </div>
                                {formErrors.from_email && <span className="errorMessage">{formErrors.from_email}</span>}
                            </div>

                            <div className="formGroup">
                                <div className="inputContainer">
                                    <textarea
                                        className={`inputField textarea ${formErrors.message ? 'error' : ''}`}
                                        name="message"
                                        rows="6"
                                        placeholder="Tell me about your project, ideas, or how I can help you..."
                                        value={formValues.message}
                                        onChange={handleChange}
                                    ></textarea>
                                    <div className="inputGlow"></div>
                                </div>
                                {formErrors.message && <span className="errorMessage">{formErrors.message}</span>}
                            </div>

                            <button
                                type="submit"
                                className={`submitBtn ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="loadingSpinner"></div>
                                        Sending Message...
                                    </>
                                ) : (
                                    <>
                                        <span className="btnIcon">🚀</span>
                                        Send Message
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="statusMessage success">
                                    <span className="statusIcon">✅</span>
                                    Message sent successfully! I'll get back to you within 24 hours.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="statusMessage error">
                                    <span className="statusIcon">❌</span>
                                    Failed to send message. Please try again or contact me directly.
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                <div className="socialSection">
                    <h3>Connect With Me</h3>
                    <div className="socialLinks">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="socialLink"
                                style={{'--link-color': link.color}}
                            >
                                <div className="socialIcon">{link.icon}</div>
                                <span className="socialName">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
