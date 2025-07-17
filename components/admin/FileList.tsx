import { FileText, Download, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface FileListProps {
  files: Array<{
    id: number;
    name: string;
    size: string;
    type: string;
    uploadedAt: string;
  }>;
}

export function FileList({ files }: FileListProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getFileIcon = (type: string) => {
    return <FileText className="h-5 w-5 text-gray-400" />;
  };

  const getFileTypeColor = (type: string) => {
    if (type.includes('pdf')) return 'bg-red-100 text-red-800';
    if (type.includes('text')) return 'bg-blue-100 text-blue-800';
    return 'bg-gray-100 text-gray-800';
  };

  if (files.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
        <p>No files uploaded yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {files.map((file) => (
        <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            {getFileIcon(file.type)}
            <div>
              <p className="font-medium text-gray-900">{file.name}</p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>{file.size}</span>
                <span>•</span>
                <span>{formatDate(file.uploadedAt)}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className={getFileTypeColor(file.type)}>
              {file.type.includes('pdf') ? 'PDF' : 'TXT'}
            </Badge>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}