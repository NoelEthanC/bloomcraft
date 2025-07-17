import { NextRequest, NextResponse } from 'next/server';
import { submitContactForm } from '@/lib/webhooks';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Submit to n8n webhook
    const result = await submitContactForm(formData);
    
    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully', data: result },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}