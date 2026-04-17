import React from "react";

export default function Footer() {
    return (
        <footer style={{ padding: '60px 0', borderTop: '1px solid var(--border-glass)', background: 'var(--bg-deep)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'Unbounded', fontSize: '11px', letterSpacing: '4px', color: 'var(--gold-primary)', marginBottom: '0' }}>
                    @ {new Date().getFullYear()} VKTechie
                </p>
                <div style={{ marginTop: '20px', width: '40px', height: '1px', background: 'var(--border-glass)', margin: '20px auto' }}></div>
                <p style={{ fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '2px' }}>
                    DESIGNED & ARCHITECTED BY VISHNUKARTHICK K
                </p>
            </div>
        </footer>
    );
}
