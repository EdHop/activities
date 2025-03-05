// Initialise Supabase

const SUPABASE_URL = "https://byloapdbopokklazbpmc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5bG9hcGRib3Bva2tsYXpicG1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNjIyODcsImV4cCI6MjA1NTczODI4N30.W2i_uOcbF39wj2tR4UIOrn1g64rxPytbxMOfxBHfHiQ";


const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
