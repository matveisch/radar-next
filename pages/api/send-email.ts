import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../lib/email';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await sendEmail({
    to: 'testbeetrade@gmail.com',
    subject: 'New Client Message',
    text: `
      name: ${req.body.name},
      phone: ${req.body.phone},
      email: ${req.body.email},
      message: ${req.body.message}
     `,
  });

  return res.status(200).json({ message: 'Email sent successfully' });
}
