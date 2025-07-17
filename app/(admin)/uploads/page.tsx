'use client';

import { useState } from 'react';
import { FileUpload } from '@/components/admin/FileUpload';
import { FileList } from '@/components/admin/FileList';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function UploadsPage() {
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([
    {
      id: 1,
      name: 'flower-catalog.pdf',
      size: '2.4 MB',
      type: 'application/pdf',
      uploadedAt: new Date().toISOString(),
    },
    {
      id: 2,
      name: 'plant-care-guide.txt',
      size: '45 KB',
      type: 'text/plain',
      uploadedAt: new Date().toISOString(),
    },
  ]);

  const handleFileUploaded = (file: any) => {
    setUploadedFiles(prev => [...prev, file]);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">File Uploads</h1>
        <p className="text-gray-600 mt-2">Manage your documents and files</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upload New File</CardTitle>
          </CardHeader>
          <CardContent>
            <FileUpload onFileUploaded={handleFileUploaded} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Uploaded Files</CardTitle>
          </CardHeader>
          <CardContent>
            <FileList files={uploadedFiles} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}