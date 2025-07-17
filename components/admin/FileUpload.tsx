'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, FileText, AlertCircle } from 'lucide-react';
import { submitFileUpload } from '@/lib/webhooks';
import { toast } from 'sonner';

interface FileUploadProps {
  onFileUploaded: (file: any) => void;
}

export function FileUpload({ onFileUploaded }: FileUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const file = files[0];
    
    // Check file type
    if (!file.type.includes('pdf') && !file.type.includes('text')) {
      toast.error('Only PDF and TXT files are allowed');
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      // Simulate file upload and webhook trigger
      await submitFileUpload(formData);

      const uploadedFile = {
        id: Date.now(),
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        type: file.type,
        uploadedAt: new Date().toISOString(),
      };

      onFileUploaded(uploadedFile);
      toast.success('File uploaded successfully!');
    } catch (error) {
      toast.error('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  return (
    <div className="space-y-4">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragOver 
            ? 'border-green-400 bg-green-50' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
      >
        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-lg font-medium text-gray-900 mb-2">
          Drop files here or click to browse
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Supports PDF and TXT files up to 10MB
        </p>
        <Input
          type="file"
          accept=".pdf,.txt"
          onChange={(e) => handleFileUpload(e.target.files)}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload">
          <Button variant="outline" className="cursor-pointer" disabled={isUploading}>
            {isUploading ? 'Uploading...' : 'Choose File'}
          </Button>
        </label>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-blue-900">Upload Guidelines</p>
            <ul className="text-sm text-blue-700 mt-1 space-y-1">
              <li>• Only PDF and TXT files are supported</li>
              <li>• Maximum file size: 10MB</li>
              <li>• Files will be processed automatically</li>
              <li>• Webhook notifications will be sent to n8n</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}