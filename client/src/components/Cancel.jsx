import React from 'react';

const Cancel = () => {
  return (
    <div style={styles.card}>
      <div style={styles.iconContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="48px"
          height="48px"
          style={styles.icon}
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.59 12.59L13.41 12l4.18-4.18c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L12 10.59 7.82 6.41a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12l-4.18 4.18c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.18 4.18c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41z" />
        </svg>
      </div>
      <h2 style={styles.title}>Payment Failed</h2>
      <p style={styles.message}>There was an issue processing your payment. Please try again.</p>
      <button style={styles.button} onClick={() => window.location.href="/cart"}>
        Try Again
      </button>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    backgroundColor: "#ffe0e0",
    color: "#d32f2f",
    fontFamily: "Arial, sans-serif",
  },
  iconContainer: {
    marginBottom: "10px",
  },
  icon: {
    color: "#d32f2f",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  message: {
    fontSize: "16px",
    margin: "10px 0",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    borderRadius: "4px",
    border: "none",
    color: "#fff",
    backgroundColor: "#d32f2f",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Cancel;
