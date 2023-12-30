import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zxfxqutbkiozjfhwthzf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4ZnhxdXRia2lvempmaHd0aHpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5MjA4MDMsImV4cCI6MjAxOTQ5NjgwM30.8OJCtI1vaEy9MKPhJmGSiKKoj8Aq9hwWGsLYjLaTxfc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
