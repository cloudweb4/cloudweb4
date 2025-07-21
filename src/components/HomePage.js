import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-100">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-indigo-700">CloudWeb4</h1>
              <p className="mt-2 text-gray-600">التخزين السحابي اللامركزي - أحد مشاريع One World</p>
            </div>
            
            {isLogin ? (
              <LoginForm />
            ) : (
              <RegisterForm />
            )}
            
            <div className="mt-6">
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-indigo-600 hover:underline w-full text-center"
              >
                {isLogin ? 'إنشاء حساب جديد' : 'لديك حساب؟ سجل الدخول'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const LoginForm = () => (
  <form>
    <input type="text" placeholder="اسم المستخدم" className="w-full p-2 border rounded mb-3" />
    <input type="password" placeholder="كلمة المرور" className="w-full p-2 border rounded mb-3" />
    <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded">تسجيل الدخول</button>
  </form>
);

const RegisterForm = () => (
  <form>
    <input type="text" placeholder="الاسم الكامل" className="w-full p-2 border rounded mb-3" />
    <input type="email" placeholder="البريد الإلكتروني" className="w-full p-2 border rounded mb-3" />
    <input type="password" placeholder="كلمة المرور" className="w-full p-2 border rounded mb-3" />
    <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded">تسجيل</button>
  </form>
);
