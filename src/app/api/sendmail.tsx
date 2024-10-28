
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
// import * as sgMail from '@sendgrid/mail';
// import { NextApiRequest, NextApiResponse } from 'next';

// type EmailFormData = {
//     text: string;
//     firstName:string
//     lastName:string;
//     email: string;
//     bedrooms:number;
//     moveIn: string
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const { text, firstName,lastName,email,bedrooms,moveIn }: EmailFormData = JSON.parse(req.body);

//     sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

    

//     const msg = {
//       to: 'johnyrj97@gmail.com',
//       from: email, 
//       subject: 'You got mail',
//       text: text,
      
//     }

//     sgMail
//         .send(msg)
//         .then(() => res.status(201).json({ message: 'OK' })
//         .catch((err) => res.status(500).json({ error: err });