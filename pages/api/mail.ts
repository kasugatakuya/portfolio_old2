import { createTransport } from 'nodemailer';

export default async (req, res) => {
  const transporter = createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: "112069.va@gmail.com",
      pass: "tsiydckqbagvxrud",
    },
  });
  await transporter.sendMail({
    from: '112069.va@gmail.com',
    to: '112069.va@gmail.com',
    subject: 'Kasuga Portfolioからのお問い合わせ',
    text: req.body,
  });

  res.status(200).json({
    success: true,
  });
};