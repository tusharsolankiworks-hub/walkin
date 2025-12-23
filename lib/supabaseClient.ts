import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dopsqperpkmselhrabhe.supabase.co';
const supabaseKey = 'sb_publishable_qAxRJYnz4H4hAgEPhFgBfA_MMh9YBmi';

export const supabase = createClient(supabaseUrl, supabaseKey);