import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Alert, Snackbar } from "@mui/material";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "General Inquiry", // Default for the simplified form
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
            form.message.trim()
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormValid()) {
            setErrors({
                name: !form.name.trim(),
                email: !form.email.trim(),
                message: !form.message.trim(),
            });
            return;
        }

        setLoading(true);
        setError(false);

        try {
            const params = new URLSearchParams({
                name: form.name,
                email: form.email,
                subject: form.subject,
                message: form.message,
            });

            await fetch(
                `https://script.google.com/macros/s/AKfycbyJ2MQJmOaBnvHgbyCHxuuESX-s7G97aZFvxBTeF1fvD7tFqXjlbUFtDqUkQuUmYnJW/exec?${params}`,
                {
                    method: "GET",
                    mode: "no-cors",
                }
            );

            setSuccess(true);
            setForm({
                name: "",
                email: "",
                subject: "General Inquiry",
                message: "",
            });

        } catch (err) {
            console.error(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section id="contact">
                <div className="container">
                    <h2 className="kinetic-text section-title">
                        Initiate <span>Contact</span>
                    </h2>

                    <div className="bento-grid">
                        {/* Info Section */}
                        <div className="bento-side stagger-container" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <a href="tel:+919361762268" className="bento-card reveal-text" style={{ padding: '30px', display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none' }}>
                                <PhoneIcon style={{ color: 'var(--gold-primary)' }} />
                                <div>
                                    <p style={{ color: 'var(--gold-primary)', fontSize: '10px', letterSpacing: '2px', fontWeight: 700 }}>DIRECT_LINE</p>
                                    <p style={{ fontSize: '16px', fontWeight: 500 }}>+91 9361762268</p>
                                </div>
                            </a>
                            
                            <a href="mailto:vishnukarthick1012@gmail.com" className="bento-card reveal-text" style={{ padding: '30px', display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none' }}>
                                <EmailIcon style={{ color: 'var(--gold-primary)' }} />
                                <div>
                                    <p style={{ color: 'var(--gold-primary)', fontSize: '10px', letterSpacing: '2px', fontWeight: 700 }}>MAIL_ENDPOINT</p>
                                    <p style={{ fontSize: '16px', fontWeight: 500 }}>vishnukarthick1012@gmail.com</p>
                                </div>
                            </a>

                            <div className="bento-card reveal-text" style={{ padding: '30px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <LocationOnIcon style={{ color: 'var(--gold-primary)' }} />
                                <div>
                                    <p style={{ color: 'var(--gold-primary)', fontSize: '10px', letterSpacing: '2px', fontWeight: 700 }}>HUB_LOCATION</p>
                                    <p style={{ fontSize: '16px', fontWeight: 500 }}>Bengaluru, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="bento-main bento-card reveal-text" style={{ padding: '50px' }}>
                            <h3 style={{ fontFamily: 'Unbounded', fontSize: '20px', marginBottom: '40px' }}>TRANSMIT_DATA</h3>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                <div className="form-group">
                                    <input
                                        name="name"
                                        placeholder="IDENTIFICATION_NAME"
                                        value={form.name}
                                        onChange={handleChange}
                                        className={errors.name ? "error" : ""}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="ENCRYPTION_MAIL"
                                        value={form.email}
                                        onChange={handleChange}
                                        className={errors.email ? "error" : ""}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        placeholder="INQUIRY_BRIEF..."
                                        value={form.message}
                                        onChange={handleChange}
                                        className={errors.message ? "error" : ""}
                                        rows="6"
                                    />
                                </div>
                                <button type="submit" className="btn-gold" disabled={loading} style={{ width: '100%', height: '60px' }}>
                                    {loading ? "TRANSMITTING..." : "DISPATCH_MESSAGE"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Snackbar
                open={success}
                autoHideDuration={4000}
                onClose={() => setSuccess(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert severity="success" variant="filled">
                    Dispatch received. I will review and respond.
                </Alert>
            </Snackbar>
            <Snackbar
                open={error}
                autoHideDuration={4000}
                onClose={() => setError(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert severity="error" variant="filled">
                    Link failure. Please re-initiate.
                </Alert>
            </Snackbar>
        </>
    );
}
