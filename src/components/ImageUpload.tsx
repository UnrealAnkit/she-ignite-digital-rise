import React, { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Upload, X, Image as ImageIcon, Maximize2 } from 'lucide-react';
import { uploadImage, deleteImage } from '@/lib/storageService';

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  onPathChange?: (path: string) => void;
  folder?: string;
  className?: string;
  displayMode?: 'default' | 'full';
}

export default function ImageUpload({ 
  value, 
  onChange, 
  onPathChange, 
  folder = 'events',
  className = '',
  displayMode = 'default'
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      alert('File size should be less than 5MB');
      return;
    }

    setUploading(true);
    try {
      const result = await uploadImage(file, folder);
      onChange(result.url);
      if (onPathChange) {
        onPathChange(result.path);
      }
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleRemoveImage = () => {
    onChange('');
    if (onPathChange) {
      onPathChange('');
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Current Image Display */}
      {value && (
        <Card className={displayMode === 'full' ? 'border-2 border-primary/20 bg-primary/5' : ''}>
          <CardContent className="p-4">
            <div className="relative">
              {displayMode === 'full' && (
                <div className="absolute top-2 left-2 z-10 bg-primary text-white px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                  <Maximize2 className="h-3 w-3" />
                  Full Preview
                </div>
              )}
              <img 
                src={value} 
                alt="Preview" 
                className={`w-full object-cover rounded-lg transition-all duration-300 ${
                  displayMode === 'full' 
                    ? 'h-64 sm:h-80 md:h-[40vh] lg:h-[50vh] xl:h-[60vh] max-h-[600px] min-h-[250px]' 
                    : 'h-48'
                }`}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
                onClick={handleRemoveImage}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Upload Area */}
      <Card 
        className={`border-2 border-dashed transition-colors ${
          dragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'
        } ${displayMode === 'full' ? 'border-primary/50 bg-primary/5' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center">
              <ImageIcon className="h-6 w-6 text-muted-foreground" />
            </div>
            
            <div>
              <h3 className="font-medium">Upload Image</h3>
              <p className="text-sm text-muted-foreground">
                Drag and drop an image here, or click to select
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                PNG, JPG, GIF up to 5MB
                {displayMode === 'full' && (
                  <span className="block text-primary font-medium mt-1 bg-primary/10 px-2 py-1 rounded">
                    <Maximize2 className="h-3 w-3 inline mr-1" />
                    Full-size preview enabled
                  </span>
                )}
              </p>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="w-full"
            >
              <Upload className="h-4 w-4 mr-2" />
              {uploading ? 'Uploading...' : 'Choose File'}
            </Button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
              className="hidden"
            />
          </div>
        </CardContent>
      </Card>

      {/* Manual URL Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Or enter image URL manually:</label>
        <input
          type="url"
          value={value}
          onChange={handleUrlChange}
          placeholder="https://example.com/image.jpg"
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </div>
  );
} 