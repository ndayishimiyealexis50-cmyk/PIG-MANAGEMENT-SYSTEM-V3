// src/pages/Login.jsx
import { useState } from "react";
import { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogle = async () => {
    setError("");
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e) {
      setError("Google sign-in failed. Try again.");
    }
    setLoading(false);
  };

  const handleEmail = async () => {
    if (!email || !password) return setError("Enter email and password.");
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      setError("Invalid email or password.");
    }
    setLoading(false);
  };

  return (
    <div style={styles.wrapper}>
      {/* Background pattern */}
      <div style={styles.bg} />

      <div style={styles.card}>
        {/* Logo area */}
        <div style={styles.logoArea}>
          <div style={styles.logoIcon}>🐷</div>
          <h1 style={styles.appName}>FarmIQ</h1>
          <p style={styles.tagline}>Smart Pig Farm Management</p>
        </div>

        {/* Error */}
        {error && <div style={styles.error}>{error}</div>}

        {/* Email input */}
        <input
          style={styles.input}
          type="email"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleEmail()}
        />

        {/* Password input */}
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleEmail()}
        />

        {/* Sign in button */}
        <button
          style={{ ...styles.btn, ...styles.btnPrimary, opacity: loading ? 0.7 : 1 }}
          onClick={handleEmail}
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        {/* Divider */}
        <div style={styles.divider}>
          <div style={styles.dividerLine} />
          <span style={styles.dividerText}>or</span>
          <div style={styles.dividerLine} />
        </div>

        {/* Google button */}
        <button
          style={{ ...styles.btn, ...styles.btnGoogle, opacity: loading ? 0.7 : 1 }}
          onClick={handleGoogle}
          disabled={loading}
        >
          <svg width="18" height="18" viewBox="0 0 48 48" style={{ marginRight: 8 }}>
            <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l6-6C34.5 6.5 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"/>
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.1 19 12 24 12c3 0 5.7 1.1 7.8 2.9l6-6C34.5 6.5 29.5 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"/>
            <path fill="#4CAF50" d="M24 44c5.2 0 10-1.9 13.6-5l-6.3-5.2C29.4 35.6 26.8 36 24 36c-5.2 0-9.6-3-11.3-7.3l-6.6 5.1C9.5 39.4 16.3 44 24 44z"/>
            <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.9 2.4-2.5 4.4-4.6 5.8l6.3 5.2C40.9 35.6 44 30.2 44 24c0-1.3-.1-2.7-.4-4z"/>
          </svg>
          Continue with Google
        </button>

        <p style={styles.footer}>FarmIQ v3 · Rwanda 🇷🇼</p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    padding: "20px",
    position: "relative",
    overflow: "hidden",
  },
  bg: {
    position: "absolute",
    inset: 0,
    backgroundImage: `radial-gradient(circle at 20% 80%, rgba(34,197,94,0.15) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(16,185,129,0.1) 0%, transparent 50%)`,
    pointerEvents: "none",
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "24px",
    padding: "40px 32px",
    width: "100%",
    maxWidth: "380px",
    boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
    position: "relative",
    zIndex: 1,
  },
  logoArea: {
    textAlign: "center",
    marginBottom: "32px",
  },
  logoIcon: {
    fontSize: "48px",
    marginBottom: "8px",
    display: "block",
  },
  appName: {
    color: "#ffffff",
    fontSize: "28px",
    fontWeight: "800",
    margin: "0 0 4px 0",
    letterSpacing: "-0.5px",
  },
  tagline: {
    color: "rgba(255,255,255,0.5)",
    fontSize: "13px",
    margin: 0,
  },
  error: {
    background: "rgba(239,68,68,0.15)",
    border: "1px solid rgba(239,68,68,0.3)",
    color: "#fca5a5",
    padding: "10px 14px",
    borderRadius: "10px",
    fontSize: "13px",
    marginBottom: "16px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "13px 16px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "12px",
    color: "#ffffff",
    fontSize: "14px",
    marginBottom: "12px",
    outline: "none",
    boxSizing: "border-box",
  },
  btn: {
    width: "100%",
    padding: "13px",
    borderRadius: "12px",
    border: "none",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.2s",
  },
  btnPrimary: {
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
    color: "#ffffff",
    marginBottom: "16px",
  },
  btnGoogle: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "#ffffff",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
  },
  dividerLine: {
    flex: 1,
    height: "1px",
    background: "rgba(255,255,255,0.1)",
  },
  dividerText: {
    color: "rgba(255,255,255,0.4)",
    fontSize: "12px",
  },
  footer: {
    textAlign: "center",
    color: "rgba(255,255,255,0.25)",
    fontSize: "11px",
    marginTop: "24px",
    marginBottom: 0,
  },
};
