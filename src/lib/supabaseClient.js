
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vfbibwjzpdavllgezgnx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmYmlid2p6cGRhdmxsZ2V6Z254Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2Mjc2ODYsImV4cCI6MjA0NjIwMzY4Nn0.vkUe7qH6REIsu2YQU0Y4glD3NvCMh1OUAm1vhUI4jWw'
export const supabase = createClient(supabaseUrl, supabaseKey)