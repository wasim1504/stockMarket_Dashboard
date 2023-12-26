import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://aukvloneowtiicgyalhx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1a3Zsb25lb3d0aWljZ3lhbGh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1OTEwOTQsImV4cCI6MjAxOTE2NzA5NH0.x7BViu3XT2Q8hVF_EGmpkN5ON4unmXe4QADni1H7vTk";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
