import { NextRequest, NextResponse } from 'next/server';
import { submitFileUpload } from '@/lib/webhooks';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.includes('pdf') && !file.type.includes('text')) {
      return NextResponse.json(
        { error: 'Only PDF and TXT files are allowed' },
        { status: 400 }
      );
    }

    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size exceeds 10MB limit' },
        { status: 400 }
      );
    }

    // Submit to n8n webhook
    const result = await submitFileUpload(formData);
    
    return NextResponse.json(
      { success: true, message: 'File uploaded successfully', data: result },
      { status: 200 }
    );
  } catch (error) {
    console.error('File upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}