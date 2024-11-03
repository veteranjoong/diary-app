import { supabase } from "../lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("diaries").select();

  return {
    diaries: data
  }
}