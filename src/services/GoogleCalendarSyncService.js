
export async function syncBookingToGoogleCalendar(booking, calendarAccessToken) {
  const event = {
    summary: "Car Booking",
    description: `Car ID: ${booking.car_id}`,
    start: {
      date: booking.start_date,
      timeZone: "Indian/Mauritius"
    },
    end: {
      date: booking.end_date,
      timeZone: "Indian/Mauritius"
    }
  };

  const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${calendarAccessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(event)
  });

  if (!response.ok) {
    const error = await response.json();
    console.error("Google Calendar Error:", error);
  } else {
    console.log("Booking synced to Google Calendar.");
  }
}
