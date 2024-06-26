import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://kfmnalcjgsrirzgrynvh.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmbW5hbGNqZ3NyaXJ6Z3J5bnZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MTUyNDcsImV4cCI6MjAzMjk5MTI0N30.ZPfIL6V5IEroUaGnrZz2koqexfjyGMhNtLjsCRCBUqQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
