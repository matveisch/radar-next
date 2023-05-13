import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../lib/email';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sendEmail({
      from: 'clientoffice@radardigitaly.com',
      to: 'clientoffice@radardigitaly.com',
      subject: 'New Client Message',
      text: `
      name: ${req.body.name},
      phone: ${req.body.phone},
      email: ${req.body.email},
      message: ${req.body.message}
     `,
    });
  } catch (e) {
    res.status(400).json({ message: 'Something went wrong' });
  }

  return res.status(200).json({ message: 'Email sent successfully' });
}
