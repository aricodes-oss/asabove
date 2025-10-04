export const calendarId =
  'fbc714e9d21a84a2aae6a1099fb244c25f9226e411725b8852bce9a172a137b6@group.calendar.google.com';

export async function getCalendarEvents(maxResults = 1500) {
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
  if (!apiKey) {
    throw new Error('GOOGLE_CALENDAR_API_KEY environment variable is not set');
  }

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${apiKey}&maxResults=${maxResults}`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Google Calendar API error: ${response.status} ${response.statusText}`);
  }
  
  const data = await response.json();
  return data;
}
