import { google } from 'googleapis';

export const calendar = google.calendar({
  version: 'v3',
  auth: process.env.GOOGLE_CALENDAR_API_KEY,
});

export const calendarId =
  'fbc714e9d21a84a2aae6a1099fb244c25f9226e411725b8852bce9a172a137b6@group.calendar.google.com';
