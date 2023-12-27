import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tccqpfvggkpbozoftbbz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjY3FwZnZnZ2twYm96b2Z0YmJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2Njg2MDAsImV4cCI6MjAxOTI0NDYwMH0.e8LOQ_BMX5yj5q9rdcuWztBMoxEGlYaMOKMk0qE7wIM";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
