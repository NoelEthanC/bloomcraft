'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chatbot Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-green-600 hover:bg-green-700 shadow-lg"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chatbot iframe */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-40 w-80 h-96 bg-white rounded-lg shadow-xl border">
          <div className="h-full flex flex-col">
            <div className="bg-green-600 text-white p-4 rounded-t-lg">
              <h3 className="font-semibold">BloomCraft Assistant</h3>
              <p className="text-sm opacity-90">Ask me about flowers and plants!</p>
            </div>
            <div className="flex-1">
              <iframe
                src="https://your-n8n-instance.com/chatbot"
                className="w-full h-full border-0 rounded-b-lg"
                title="Flower Care Chatbot"
                sandbox="allow-same-origin allow-scripts allow-forms"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}