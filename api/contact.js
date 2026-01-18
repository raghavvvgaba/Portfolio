import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Input validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Message length validation
    if (message.length < 10 || message.length > 5000) {
      return res.status(400).json({ error: 'Message must be 10-5000 characters' });
    }

    // Send email via Resend with STYLED template
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['raghavvvgaba@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Message from Portfolio</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;">

          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 0 10px rgba(0,0,0,0.1);">

            <!-- Header -->
            <div style="background: linear-gradient(135deg, #000000 0%, #333333 100%); padding: 30px; text-align: center;">
              <h1 style="color: #FCEE0C; margin: 0; font-size: 28px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">
                New Message
              </h1>
              <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">
                Your portfolio contact form
              </p>
            </div>

            <!-- Content -->
            <div style="padding: 30px;">

              <!-- From Section -->
              <div style="margin-bottom: 30px;">
                <div style="display: flex; align-items: center; margin-bottom: 20px;">
                  <div style="width: 40px; height: 40px; background: #FCEE0C; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                    <span style="font-size: 20px;">👤</span>
                  </div>
                  <div>
                    <p style="margin: 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">From</p>
                    <p style="margin: 5px 0 0 0; color: #333; font-size: 18px; font-weight: bold;">${name}</p>
                  </div>
                </div>

                <div style="display: flex; align-items: center;">
                  <div style="width: 40px; height: 40px; background: #FCEE0C; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                    <span style="font-size: 20px;">✉️</span>
                  </div>
                  <div>
                    <p style="margin: 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                    <p style="margin: 5px 0 0 0; color: #333; font-size: 16px; font-weight: bold;">${email}</p>
                  </div>
                </div>
              </div>

              <!-- Message Section -->
              <div style="background-color: #f9f9f9; border-left: 4px solid #FCEE0C; padding: 20px; border-radius: 0 8px 8px 0;">
                <h3 style="margin: 0 0 15px 0; color: #333; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">
                  Message
                </h3>
                <p style="margin: 0; color: #555; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
                  ${message}
                </p>
              </div>

            </div>

            <!-- Footer -->
            <div style="background-color: #000000; padding: 20px; text-align: center;">
              <p style="margin: 0; color: #ffffff; font-size: 13px;">
                This message was sent from your portfolio contact form
              </p>
              <p style="margin: 10px 0 0 0; color: #FCEE0C; font-size: 12px;">
                You can reply directly to: ${email}
              </p>
            </div>

          </div>

        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({
      success: true,
      messageId: data.id
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({
      error: 'Failed to send message. Please try again.'
    });
  }
}
