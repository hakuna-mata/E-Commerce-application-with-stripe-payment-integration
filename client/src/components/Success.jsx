import React from 'react';

const Success = () => {
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
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.13 15L6.6 12.73a1.01 1.01 0 0 1 1.41-1.43L11 14.15l4.99-5a1.01 1.01 0 0 1 1.41 1.43L11.87 17z" />
        </svg>
      </div>
      <h2 style={styles.title}>Payment Successful!</h2>
      <p style={styles.message}>Thank you for your purchase.</p>
      <button style={styles.button} onClick={() => window.location.href = "/"}>
        Go to Home
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
    backgroundColor: "#e0ffe1",
    color: "#2e7d32",
    fontFamily: "Arial, sans-serif",
  },
  iconContainer: {
    marginBottom: "10px",
  },
  icon: {
    color: "#2e7d32",
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
    backgroundColor: "#2e7d32",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Success;
