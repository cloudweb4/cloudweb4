import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>CloudWeb4 - التخزين السحابي اللامركزي</title>
        <meta name="description" content="منصة التخزين السحابي اللامركزي" />
      </Head>

      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-indigo-700">CloudWeb4</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-xl font-semibold mb-6">مرحبًا بك في CloudWeb4</h2>
          <p className="mb-6">
            منصة التخزين السحابي اللامركزي التابعة لمشروع One World
          </p>
          
          <div className="space-y-4">
            <Link href="/dashboard">
              <a className="block w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
                الانتقال إلى لوحة التحكم
              </a>
            </Link>
            
            <a 
              href="https://wa.me/20123456789" 
              className="block w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
              target="_blank"
              rel="noreferrer"
            >
              التواصل عبر واتساب
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} CloudWeb4 - أحد مشاريع One World</p>
          <p className="mt-2">الدعم: support@cloudweb4.oneworld</p>
        </div>
      </footer>
    </div>
  );
}
