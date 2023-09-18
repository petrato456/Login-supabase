import { createClient } from "@supabase/supabase-js";


export const supabase = createClient(
    "https://yrneizlmspwhzzwvgsvc.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlybmVpemxtc3B3aHp6d3Znc3ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ2Mjc4MzksImV4cCI6MjAxMDIwMzgzOX0.Jc-Y-MiptPlzsN2LddW9_s-S4c0SrNr9v0M4fK-u3b8"
);