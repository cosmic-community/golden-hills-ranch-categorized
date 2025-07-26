import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail, ContactFormData } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, subject, message }: ContactFormData = body;
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Send emails using Resend
    const result = await sendContactEmail({
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json({
      message: 'Email sent successfully',
      success: true,
      ...result,
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}