
# React Admin CMS for Car Booking Platform

This is a full-featured Admin CMS built in React, connected to Supabase and Google Calendar. It is designed to manage car bookings, car availability, and automatically sync with your frontend car booking system.

---

## ✅ Features

- Car Management (Add/Edit/Delete)
- Booking Management (Approve/Cancel)
- Google Calendar Integration (Sync availability)
- Supabase database integration
- Deployment-ready on Render

---

## 🛠️ Setup Instructions

### 1. Clone this repository

Upload to your GitHub account and then connect to [Render.com](https://render.com) for deployment.

### 2. Environment Variables

Add the following on Render under **Environment > Environment Variables**:

| Variable | Description |
|----------|-------------|
| `REACT_APP_SUPABASE_URL` | Your Supabase project URL |
| `REACT_APP_SUPABASE_ANON_KEY` | Your Supabase anon key |
| `GOOGLE_CLIENT_ID` | From Google Cloud Console |
| `GOOGLE_CLIENT_SECRET` | From Google Cloud Console |
| `REACT_APP_GOOGLE_REDIRECT_URI` | Your Render domain + `/auth/callback` |

---

## 🗃️ Supabase SQL Schema

Use the following schema to create your tables:

```sql
-- Cars table
CREATE TABLE cars (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  image_url TEXT,
  price_per_day DECIMAL,
  status TEXT DEFAULT 'available',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Bookings table
CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  car_id uuid REFERENCES cars(id),
  start_date DATE,
  end_date DATE,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Availability table
CREATE TABLE car_availability (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  car_id uuid REFERENCES cars(id),
  date DATE NOT NULL,
  is_available BOOLEAN DEFAULT TRUE
);
```

---

## 🔄 CMS Sync with Website

When a booking is created on the frontend:
- It writes to the `bookings` table in Supabase
- The CMS reads from the same `bookings` table
- The CMS syncs blocked dates with Google Calendar via OAuth
- Availability (`car_availability`) is updated automatically

No separate sync is needed — both systems use the **same Supabase database** as a source of truth.

---

## ✅ Deployment

1. Push this code to GitHub
2. Link the repo to Render
3. Set the build command: `npm run build`
4. Set the start command: `serve -s build` or use auto-detected settings
5. Add environment variables as described above

---
