
import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      const { data, error } = await supabase
        .from('bookings')
        .select('id, car_id, start_date, end_date, status')
        .order('start_date', { ascending: true });

      if (error) console.error(error);
      else setBookings(data);
    }

    fetchBookings();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Bookings</h2>
      <ul className="space-y-2">
        {bookings.map(booking => (
          <li key={booking.id} className="border p-2 rounded">
            Car: {booking.car_id} | {booking.start_date} → {booking.end_date} | Status: {booking.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
