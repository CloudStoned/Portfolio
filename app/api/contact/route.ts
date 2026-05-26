import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, business, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields (name, email, message)' },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = parseInt(process.env.SMTP_PORT || '587');
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_RECEIVER_EMAIL || 'bcloudneo@gmail.com';

    // If SMTP credentials aren't configured yet, log the email to console and warn the client
    if (!user || user === 'bcloudneo@gmail.com' && pass === 'your-gmail-app-password') {
      console.warn('SMTP credentials are not configured in .env. Logging inquiry to console:');
      console.log({ name, email, business, message });
      
      return NextResponse.json({
        success: true,
        warning: 'Inquiry received, but SMTP credentials are not configured in your .env file yet. The message was logged to the console.',
      });
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${user}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Inquiry from ${name} (${business || 'No Business'})`,
      text: `Name: ${name}\nEmail: ${email}\nBusiness: ${business || 'Not specified'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e5e2; border-radius: 8px; background-color: #f9f9f7;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #4a6fa5; padding-bottom: 10px; margin-top: 0;">New Portfolio Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555555; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #1a1a1a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555555;">Email:</td>
              <td style="padding: 8px 0; color: #1a1a1a;"><a href="mailto:${email}" style="color: #4a6fa5; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555555;">Business/Role:</td>
              <td style="padding: 8px 0; color: #1a1a1a;">${business || 'Not specified'}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #ffffff; border: 1px solid #e5e5e2; border-radius: 4px;">
            <h3 style="margin-top: 0; color: #1a1a1a; font-size: 14px; border-bottom: 1px solid #e5e5e2; padding-bottom: 5px;">Message:</h3>
            <p style="color: #555555; font-size: 14px; line-height: 1.5; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          <p style="font-size: 11px; color: #888888; margin-top: 25px; text-align: center; border-top: 1px solid #e5e5e2; padding-top: 15px;">
            Sent automatically from your Portfolio website.
          </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error: any) {
    console.error('Error in contact form API:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry: ' + (error.message || error) },
      { status: 500 }
    );
  }
}
