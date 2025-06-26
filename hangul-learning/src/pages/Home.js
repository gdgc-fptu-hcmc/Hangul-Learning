import React from 'react';
import SEO from '../components/SEO';
import SponsorSection from '../components/SponsorSection';
import { Link } from 'react-router-dom';
import { BookOpen, CheckSquare, MessageSquare } from 'lucide-react';

// A simple decorative SVG shape
const DecorShape = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute opacity-10">
    <circle cx="50" cy="50" r="50" fill="url(#paint0_linear_1_2)"/>
    <defs>
      <linearGradient id="paint0_linear_1_2" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F97316"/>
        <stop offset="1" stopColor="#EAB308"/>
      </linearGradient>
    </defs>
  </svg>
);

function Home() {
  return (
    <div className="bg-white">
      <SEO
        title="Hangul Learning | Học Tiếng Hàn Dễ Dàng & Miễn Phí"
        description="Nền tảng học tiếng Hàn miễn phí, cung cấp từ vựng, ngữ pháp và bài tập theo phương pháp giảng dạy chính quy."
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-light-gray">
        <div className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark tracking-tighter">
                Học tiếng Hàn
                <span className="mt-2 block text-primary">Dễ dàng & Miễn phí</span>
              </h1>
              <p className="mt-6 text-lg text-text-light max-w-md mx-auto md:mx-0">
                Một hệ thống học tập dựa trên phương pháp giảng dạy chính quy với sự trợ giúp của các tài nguyên đa dạng.
              </p>
              <div className="mt-10 flex gap-4 justify-center md:justify-start">
                <Link to="/vocabulary" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
                  Bắt đầu học
                </Link>
                <Link to="/grammar" className="inline-block bg-gray-200 text-text-dark font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-300 transition-all duration-300 transform hover:scale-105">
                  Xem ngữ pháp
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative h-96">
              <DecorShape />
              <div style={{ top: '10%', left: '60%' }}><DecorShape /></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-orange-100 to-pink-100 rounded-2xl shadow-xl flex items-center justify-center -rotate-6 transform hover:rotate-0 hover:scale-105 transition-transform duration-500">
                 <img src="/logo_human.png" alt="Hero Illustration" className="h-80 w-80 object-contain opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Languages bar */}
       <div className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-500 tracking-wider uppercase">
            Nội dung được biên soạn chuẩn theo các giáo trình phổ biến
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-secondary py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white">Tại sao nên chọn Hangul Learning?</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Chúng tôi cung cấp một lộ trình học tập rõ ràng, tài liệu chất lượng và hoàn toàn miễn phí, giúp bạn chinh phục tiếng Hàn một cách hiệu quả.
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="bg-slate-700/50 p-8 rounded-xl backdrop-blur-sm border border-slate-600">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary mx-auto">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-6 text-white text-xl font-bold">Tài liệu chất lượng</h3>
              <p className="mt-2 text-base text-gray-300">Biên soạn theo giáo trình uy tín, dễ hiểu.</p>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-xl backdrop-blur-sm border border-slate-600">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary mx-auto">
                <CheckSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-6 text-white text-xl font-bold">Bài tập đa dạng</h3>
              <p className="mt-2 text-base text-gray-300">Luyện tập hiệu quả với nhiều dạng bài.</p>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-xl backdrop-blur-sm border border-slate-600">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary mx-auto">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-6 text-white text-xl font-bold">Hỗ trợ 24/7</h3>
              <p className="mt-2 text-base text-gray-300">Luôn sẵn sàng giải đáp thắc mắc của bạn.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor Section */}
      <SponsorSection />
    </div>
  );
}

export default Home; 