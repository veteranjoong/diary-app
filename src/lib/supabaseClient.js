
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vfbibwjzpdavllgezgnx.supabase.co'
const supabaseKey = 'api_key'
export const supabase = createClient(supabaseUrl, supabaseKey)
