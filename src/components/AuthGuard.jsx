// src/components/AuthGuard.jsx
import { useState, useEffect } from "react";
import { auth, onAuthStateChanged } from "../firebase";
import Login from "../pages/Login";

export default function AuthGuard({ children }) {
  const [user, setUser] = useState(undefined); // undefined = loading

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  // Loading state
  if (user === undefined) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0f2027",
        color: "#22c55e",
        fontSize: "24px",
      }}>
        🐷 Loading...
      </div>
    );
  }

  // Not logged in → show Login
  if (!user) return <Login />;

  // Logged in → show the app
  return children;
}
