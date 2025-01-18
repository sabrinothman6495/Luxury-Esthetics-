import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../mongodb';
import Booking from '../../models/Booking';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase();

    if (req.method === 'POST') {
        const { name, service, date, email } = req.body;
        try {
            const newBooking = await Booking.create({ name, service, date, email });
            res.status(201).json({ message: 'Booking successful!', booking: newBooking });
        } catch (error) {
            res.status(500).json({ message: 'Error creating booking', error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
