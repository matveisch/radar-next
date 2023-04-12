import nodemailer from 'nodemailer';

type EmailPayload = {
  to: string;
  subject: string;
  text: string;
};

// Replace with your SMTP credentials
const smtpOptions = {
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '600138a3b1883d',
    pass: 'f2306220319316',
  },
};

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport(smtpOptions);

  return await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    ...data,
  });
};
