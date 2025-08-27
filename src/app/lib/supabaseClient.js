import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !anon) {
  // This helps you catch missing public envs during dev
  // (won't leak secrets because they're public anyway)
  // eslint-disable-next-line no-console
  console.error('[supabaseClient] missing public envs', { hasUrl: !!url, hasAnon: !!anon });
}

export const supabase = createClient(url, anon, {
  auth: { persistSession: false },
});
