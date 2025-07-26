
import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

export default function CarManagerPage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      const { data, error } = await supabase.from('cars').select('*');
      if (error) console.error(error);
      else setCars(data);
    }

    fetchCars();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Car Manager</h2>
      <ul className="space-y-2">
        {cars.map(car => (
          <li key={car.id} className="border p-2 rounded">
            {car.name} - {car.status} - ${car.price_per_day}/day
          </li>
        ))}
      </ul>
    </div>
  );
}
