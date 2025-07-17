// Type definitions for the application

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  inStock: boolean;
}

export interface Order {
  id: number;
  customer: string;
  product: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  total: string;
  createdAt: string;
}

export interface UploadedFile {
  id: number;
  name: string;
  size: string;
  type: string;
  uploadedAt: string;
  url?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ChatbotLog {
  id: number;
  sessionId: string;
  message: string;
  response: string;
  timestamp: string;
  userId?: string;
}

export interface WebhookResponse {
  success: boolean;
  message: string;
  data?: any;
}

// Supabase types (for future integration)
export interface User {
  id: string;
  email: string;
  created_at: string;
  role: 'admin' | 'customer';
}

export interface Database {
  public: {
    Tables: {
      products: {
        Row: Product;
        Insert: Omit<Product, 'id'>;
        Update: Partial<Omit<Product, 'id'>>;
      };
      orders: {
        Row: Order;
        Insert: Omit<Order, 'id'>;
        Update: Partial<Omit<Order, 'id'>>;
      };
      uploaded_files: {
        Row: UploadedFile;
        Insert: Omit<UploadedFile, 'id'>;
        Update: Partial<Omit<UploadedFile, 'id'>>;
      };
      chatbot_logs: {
        Row: ChatbotLog;
        Insert: Omit<ChatbotLog, 'id'>;
        Update: Partial<Omit<ChatbotLog, 'id'>>;
      };
    };
  };
}