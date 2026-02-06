import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Alert, Snackbar } from "@mui/material";
import emailjs from "@emailjs/browser";

emailjs.init("9H0OJtpyr7W9ot8bh");

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});


    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: false });
    };

    const isFormValid = () => {
        return (
            form.name.trim() &&
            form.email.trim() &&
            form.subject.trim() &&
            form.message.trim()
        );
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid()) {
            setSuccess(false);
            setLoading(false);

            setErrors({
                name: !form.name.trim(),
                email: !form.email.trim(),
                subject: !form.subject.trim(),
                message: !form.message.trim(),
            });

            return; // ⛔ API STOPPED HERE
        }

        setErrors({});
        setError(false);
        setLoading(true);

        emailjs
            .send(
                "service_4kgo3cv",
                "template_pscb2al",
                {
                    name: form.name,
                    email: form.email,
                    title: form.subject,
                    message: form.message,
                    to_email: "vishnukarthick1012@gmail.com"
                },
                "fLAb-BSeYEEAuF13y"
            )
            .then(() => {
                setLoading(false);
                setSuccess(true);
                setError(false);

                setForm({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            })
            .catch((err) => {
                console.error("EmailJS error:", err);
                setLoading(false);
                setError(true);
                setSuccess(false);
            });
    };

    return (
        <section id="contact" className="contact">
            <h2 className="section-title">
                Let’s <span>Connect</span>
            </h2>

            <div className="contact-wrapper">
                {/* LEFT */}
                <div className="contact-info">
                    <a href="tel:+919361762268" className="info-card">
                        <div className="icon-box">
                            <PhoneIcon />
                        </div>
                        <div>
                            <h4>Phone</h4>
                            <p>+91 9361762268</p>
                        </div>
                    </a>

                    <a
                        href="mailto:vishnukarthick1012@gmail.com"
                        className="info-card"
                    >
                        <div className="icon-box">
                            <EmailIcon />
                        </div>
                        <div>
                            <h4>Email</h4>
                            <p>vishnukarthick1012@gmail.com</p>
                        </div>
                    </a>

                    <a
                        href="https://www.instagram.com/vish_nuu.frr"
                        target="_blank"
                        rel="noreferrer"
                        className="info-card"
                    >
                        <div className="icon-box">
                            <InstagramIcon />
                        </div>
                        <div>
                            <h4>Instagram</h4>
                            <p>@vish_nuu.frr</p>
                        </div>
                    </a>

                    <div className="info-card no-hover">
                        <div className="icon-box">
                            <LocationOnIcon />
                        </div>
                        <div>
                            <h4>Location</h4>
                            <p>Bengaluru, India</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h3>Send a Message</h3>

                    <input
                        name="name"
                        placeholder="Your Name *"
                        value={form.name}
                        onChange={handleChange}
                        className={errors.name ? "error" : ""}
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Your Email *"
                        value={form.email}
                        onChange={handleChange}
                        className={errors.email ? "error" : ""}
                    />

                    <input
                        name="subject"
                        placeholder="Subject *"
                        value={form.subject || ""}
                        onChange={handleChange}
                        className={errors.subject ? "error" : ""}
                    />

                    <textarea
                        name="message"
                        placeholder="Please enter your message *"
                        value={form.message}
                        onChange={handleChange}
                        className={errors.message ? "error" : ""}
                    />

                    <button type="submit" className="btn primary" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
                <Snackbar
                    open={success}
                    autoHideDuration={4000}
                    onClose={() => setSuccess(false)}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                    <Alert severity="success" variant="filled">
                         Your message sent successfully. I will look into that.
                    </Alert>
                </Snackbar>
                <Snackbar
                    open={error}
                    autoHideDuration={4000}
                    onClose={() => setError(false)}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                    <Alert severity="error" variant="filled">
                        Failed to send message. Please try again.
                    </Alert>
                </Snackbar>


            </div>
        </section>
    );
}
