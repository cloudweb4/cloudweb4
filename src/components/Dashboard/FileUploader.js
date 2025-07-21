import { useState } from 'react';
import { uploadFile } from '../../services/storage';

export default function FileUploader({ onUploadSuccess }) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsUploading(true);
      setError('');
      
      const fileData = {
        name: file.name,
        buffer: await file.arrayBuffer(),
        mimetype: file.type,
        size: file.size
      };
      
      const result = await uploadFile(fileData);
      
      if (result.success) {
        onUploadSuccess({
          name: file.name,
          size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
          url: result.url
        });
      } else {
        setError(result.error || 'حدث خطأ أثناء الرفع');
      }
    } catch (err) {
      setError(err.message || 'حدث خطأ غير متوقع');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
      <input 
        type="file" 
        id="file-upload"
        className="hidden"
        onChange={handleUpload}
        disabled={isUploading}
      />
      
      {isUploading ? (
        <div className="space-y-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-indigo-600 h-2.5 rounded-full" 
              style={{ width: '50%' }}
            ></div>
          </div>
          <p>جاري الرفع إلى شبكة Filecoin...</p>
        </div>
      ) : (
        <label 
          htmlFor="file-upload" 
          className="cursor-pointer flex flex-col items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="mt-2 text-sm text-gray-600">
            <span className="font-medium text-indigo-600">انقر لرفع ملف</span> أو اسحبه هنا
          </p>
        </label>
      )}
      
      {error && (
        <div className="mt-4 text-red-500 text-sm">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
