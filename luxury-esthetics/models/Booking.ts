import mongoose, { Schema, Document, model } from 'mongoose';

export interface IBooking extends Document {
    name: string;
    service: string;
    date: Date;
    email?: string;
}

const BookingSchema: Schema = new Schema({
    name: { type: String, required: true },
    service: { type: String, required: true },
    date: { type: Date, required: true },
    email: { type: String }
});

export default mongoose.models.Booking || model<IBooking>('Booking', BookingSchema);
