import React from "react";

export const SelfEmailTemplate = ({
  firstName,
  lastName,
  userEmail,
  userMessage,
}: {
  firstName: string;
  lastName: string;
  userEmail: string;
  userMessage: string;
}) => (
  <div style={{ backgroundColor: "#000", color: "#fff", padding: "20px" }}>
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        backgroundColor: "#333",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
      }}
    >
      <div
        style={{
          backgroundColor: "#000",
          padding: "10px",
          borderRadius: "10px 10px 0 0",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2>New Query Received</h2>
      </div>
      <div style={{ marginTop: "20px" }}>
        <p>Hello Gaurav,</p>
        <p>
          You have received a new query from {firstName} {lastName}. Here are
          the details:
        </p>
        <p>
          <strong>Email:</strong> {userEmail}
        </p>
        <p>
          <strong>Message:</strong> {userMessage}
        </p>
        <p>Make sure to respond promptly!</p>
        <p>
          Best,
          <br />
          Your Portfolio Website
        </p>
      </div>
      <div
        style={{
          marginTop: "20px",
          fontSize: "12px",
          color: "#bbb",
          textAlign: "center",
        }}
      >
        <p>RANA IT Consultant | Full Stack Web Developer</p>
      </div>
    </div>
  </div>
);
