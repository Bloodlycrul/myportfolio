import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.HOSTNAME,
  port: 465,
  secure: true,
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD,
  },
});

export async function main({
  firstName,
  email,
}: {
  firstName: string | "Gaurav Rana";
  email?: string;
}) {
  // Send mail with defined transport object
  const info = await transporter.sendMail({
    from: "info@ranaitconsultant.com", // Sender address
    to: `em.gauravrana@gmail.com`,
    subject: `Thank You for Reaching Out! ${firstName}`,
    text: "I am working on",
    html: ` <div style={{ backgroundColor: "#000", color: "#fff", padding: "20px" }}>
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
        <h2>Thank You for Reaching Out!</h2>
      </div>
      <div style={{ marginTop: "20px" }}>
        <p>Hi ${firstName},</p>
        <p>
          Thank you for getting in touch with us. We have received your query
          and will get back to you as soon as possible.
        </p>
        <p>
          If you have any additional information to provide, feel free to reply
          to this email.
        </p>
        <p>
          Best Regards,
          <br />
          Gaurav Rana
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
  </div>`,
  });
}

main({ firstName: "Gaurav Rana" }).catch((err) => {
  console.log(err);
});
