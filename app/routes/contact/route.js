import { json } from '@remix-run/node';

export async function action({ request }) {
  const formData = await request.formData();
  const honeypot = formData.get('name');
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();

  // Silently succeed for bots that fill the honeypot field
  if (honeypot) {
    return json({ status: 'success' });
  }

  if (!email || !message) {
    return json({ status: 'error', error: 'Please fill in all fields.' }, { status: 400 });
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? 'Portfolio Contact <onboarding@resend.dev>',
      to: 'heyyitskhushboo@gmail.com',
      replyTo: email,
      subject: `New message from your portfolio`,
      text: `From: ${email}\n\n${message}`,
      html: `<p><strong>From:</strong> ${email}</p><p>${message.replace(/\n/g, '<br>')}</p>`,
    });

    return json({ status: 'success' });
  } catch (error) {
    console.error('Contact form error:', error);
    return json(
      { status: 'error', error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

export { Contact as default, meta } from './contact';
