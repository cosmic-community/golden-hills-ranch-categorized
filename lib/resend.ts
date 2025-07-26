import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is required');
}

export const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Send notification email to tony@cosmicjs.com
    const notificationEmail = await resend.emails.send({
      from: 'tony@cosmicjs.com',
      to: 'tony@cosmicjs.com',
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send confirmation email to user
    const confirmationEmail = await resend.emails.send({
      from: 'tony@cosmicjs.com',
      to: data.email,
      subject: 'Thank you for contacting Golden Hills Ranch',
      html: `
        <h2>Thank you for your message!</h2>
        <p>Hi ${data.name},</p>
        <p>Thank you for reaching out to Golden Hills Ranch. We have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p><em>"${data.message}"</em></p>
        <br>
        <p>Best regards,<br>
        Golden Hills Ranch Team</p>
      `,
    });

    return {
      success: true,
      notificationId: notificationEmail.data?.id,
      confirmationId: confirmationEmail.data?.id,
    };
  } catch (error) {
    console.error('Error sending emails:', error);
    throw error;
  }
}