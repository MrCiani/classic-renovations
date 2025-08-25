import { NextResponse } from 'next/server'
import { getServiceClient } from '../../lib/supabase' 

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}))
    const {
      name = '',
      email = '',
      phone = '',
      property = '',
      message = '',
      company = '',
    } = body || {}

    if (company) return NextResponse.json({ ok: true }) // honeypot

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // 👇 helpful logs server-side
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const keyPresent = !!process.env.SUPABASE_SERVICE_ROLE_KEY
    console.log('[contact] env check:', { url, keyPresent })

    const supabase = getServiceClient()

    const ua = req.headers.get('user-agent') || null
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      null

    const { error } = await supabase.from('contact_messages').insert({
      name, email, phone, property, message, user_agent: ua, ip,
    })

    if (error) {
      console.error('[contact] supabase insert error:', error)
      // return the real DB error to the client so we can see it
      return NextResponse.json(
        { error: `Database insert failed: ${error.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    // surface the real error message to the client
    console.error('[contact] unexpected error:', err)
    return NextResponse.json(
      { error: `Unexpected error: ${err?.message || 'no message'}` },
      { status: 500 }
    )
  }
}
