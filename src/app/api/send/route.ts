// src/pages/api/sendEmail/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '@/email/emailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { firstName, email, message } = await request.json();
    
    if (!firstName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['max.murakamimoses24@gmail.com'],
      subject: `New Message from ${firstName}`,
      react: EmailTemplate({ firstName, email, message }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
