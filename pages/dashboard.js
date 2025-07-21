import { useState } from 'react';
import Head from 'next/head';
import FileUploader from '../src/components/Dashboard/FileUploader';

export default function Dashboard() {
  const [files, setFiles] = useState([]);

  const handleUploadSuccess = (fileInfo) => {
    setFiles([...files, fileInfo]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>لوحة التحكم - CloudWeb4</title>
      </Head>

      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-indigo-700">لوحة تحكم CloudWeb4</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">رفع ملف جديد</h2>
          <FileUploader onUploadSuccess={handleUploadSuccess} />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">ملفاتك</h2>
          {files.length === 0 ? (
            <p className="text-gray-500">لا توجد ملفات بعد</p>
          ) : (
            <ul className="space-y-3">
              {files.map((file, index) => (
                <li key={index} className="flex items-center justify-between border-b pb-2">
                  <span className="truncate mr-3">{file.name}</span>
                  <a 
                    href={file.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    عرض
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}
