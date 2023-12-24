import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://uctsunplidjtolpyggxa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjdHN1bnBsaWRqdG9scHlnZ3hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4MjIxMzcsImV4cCI6MjAxODM5ODEzN30.bOh602YMb9qL-Px1lLHsnfL6gS3Ivg7caN_bLInjReI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
