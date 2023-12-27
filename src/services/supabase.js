import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vnbsaieczcapbwnykcvx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuYnNhaWVjemNhcGJ3bnlrY3Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NzgxMjgsImV4cCI6MjAxOTI1NDEyOH0.DJ4UodzC58UpWWGCw2UCldXHdywq21RdMvosKPyDK28";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
