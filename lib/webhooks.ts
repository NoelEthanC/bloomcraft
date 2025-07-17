// Webhook utilities for n8n integration
const N8N_BASE_URL = process.env.NEXT_PUBLIC_N8N_URL || 'https://your-n8n-instance.com';

export async function submitContactForm(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const webhookUrl = `${N8N_BASE_URL}/webhook/contact-form`;
  
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'website'
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit contact form');
  }

  return response.json();
}

export async function submitFileUpload(formData: FormData) {
  const webhookUrl = `${N8N_BASE_URL}/webhook/file-upload`;
  
  // For demonstration, we'll simulate the webhook call
  // In production, this would actually upload the file and trigger the webhook
  const response = await fetch(webhookUrl, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload file');
  }

  return response.json();
}

export async function triggerOrderWebhook(orderData: any) {
  const webhookUrl = `${N8N_BASE_URL}/webhook/order-created`;
  
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...orderData,
      timestamp: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to trigger order webhook');
  }

  return response.json();
}

export async function getChatbotLogs() {
  const webhookUrl = `${N8N_BASE_URL}/webhook/chatbot-logs`;
  
  const response = await fetch(webhookUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch chatbot logs');
  }

  return response.json();
}