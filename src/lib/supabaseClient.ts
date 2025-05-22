// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://grvzbktkzdbjtdfykbfi.supabase.co/"; // غيّرها بالرابط بتاعك
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdydnpia3RremRianRkZnlrYmZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNjIwNzEsImV4cCI6MjA2MjgzODA3MX0.0B0IS0TIudwFZ80x6aJuXJvpUKo6y7cyK5Nih9_v3ZE"; // غيّرها بالـ anon key بتاعك

export const supabase = createClient(supabaseUrl, supabaseKey);
