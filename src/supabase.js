import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://orvlqziexpkyxtrmldbj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ydmxxemlleHBreXh0cm1sZGJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzNzU1MDEsImV4cCI6MjAwMzk1MTUwMX0.MQG7tEjr4LzNk6P5_TM9WdMymzZJ0Yvz4bOE4v4FUuc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
