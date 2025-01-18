import { useState } from 'react';

const BookingForm = () => {
    const [formData, setFormData] = useState({ name: '', service: '', date: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('/api/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            alert('Booking successful!');
            setFormData({ name: '', service: '', date: '' });
        } else {
            alert('Error booking service');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            />
            <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
            <button type="submit">Book Now</button>
        </form>
    );
};

export default BookingForm;
