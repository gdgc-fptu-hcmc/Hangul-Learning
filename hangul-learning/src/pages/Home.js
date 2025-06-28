import React from 'react';
import SEO from '../components/SEO';
import SponsorSection from '../components/SponsorSection';
import { Link } from 'react-router-dom';
import { BookOpen, CheckSquare, Users, Headphones, PenTool, Eye, Megaphone, Bell, Sparkles, Chrome, Monitor, Smartphone } from 'lucide-react';

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
  // Detect browser hiện tại
  const getCurrentBrowser = () => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome') && !userAgent.includes('Edge')) return 'Chrome';
    if (userAgent.includes('Edge')) return 'Edge';
    if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari';
    if (userAgent.includes('Firefox')) return 'Firefox';
    return 'Unknown';
  };

  const currentBrowser = getCurrentBrowser();
  const isOptimalBrowser = ['Chrome', 'Edge', 'Safari'].includes(currentBrowser);

  // Dữ liệu cập nhật website
  const updates = [
    {
      date: '2025-06-19',
      type: 'NEW',
      title: 'Ra mắt trang Cơ bản tiếng Hàn',
      description: 'Bảng chữ cái Hangul hoàn chỉnh với nguyên âm, phụ âm, quy tắc phát âm và cấu trúc câu cơ bản.',
      link: '/basic',
      icon: Sparkles,
      color: 'bg-green-100 text-green-800'
    },
    {
      date: '2025-06-15',
      type: 'UPDATE',
      title: 'Cập nhật bài tập ngữ pháp',
      description: 'Thêm 15 bài tập mới cho cấp độ sơ cấp 2 với tính năng flashcard và phát âm.',
      link: '/grammar',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      date: '2025-06-10',
      type: 'FEATURE',
      title: 'Tính năng phát âm AI',
      description: 'Hỗ trợ phát âm tự động cho tất cả từ vựng và câu ví dụ với giọng đọc tiếng Hàn chuẩn.',
      link: '/vocabulary',
      icon: Megaphone,
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  const featuredVocabulary = [
    { korean: '안녕하세요', vietnamese: 'Xin chào (lịch sự)', pronunciation: 'an-nyeong-ha-se-yo' },
    { korean: '감사합니다', vietnamese: 'Cảm ơn', pronunciation: 'gam-sa-ham-ni-da' },
    { korean: '죄송합니다', vietnamese: 'Xin lỗi', pronunciation: 'joe-song-ham-ni-da' },
    { korean: '사랑해요', vietnamese: 'Tôi yêu bạn', pronunciation: 'sa-rang-hae-yo' },
    { korean: '공부하다', vietnamese: 'Học tập', pronunciation: 'gong-bu-ha-da' },
    { korean: '친구', vietnamese: 'Bạn bè', pronunciation: 'chin-gu' }
  ];

  const learningTips = [
    {
      title: "Học bảng chữ cái Hangul trước tiên",
      description: "Hangul là nền tảng của tiếng Hàn. Với 24 chữ cái cơ bản, bạn có thể đọc được hầu hết các từ tiếng Hàn."
    },
    {
      title: "Luyện tập phát âm hàng ngày",
      description: "Tiếng Hàn có nhiều âm đặc biệt. Hãy luyện tập phát âm 15-20 phút mỗi ngày để cải thiện khả năng nói."
    },
    {
      title: "Học từ vựng theo chủ đề",
      description: "Nhóm từ vựng theo chủ đề như gia đình, thức ăn, công việc sẽ giúp bạn ghi nhớ hiệu quả hơn."
    },
    {
      title: "Sử dụng flashcard và spaced repetition",
      description: "Áp dụng phương pháp lặp lại cách quãng để ghi nhớ từ vựng và ngữ pháp lâu dài."
    }
  ];

  const grammarBasics = [
    {
      title: "Cấu trúc câu cơ bản",
      description: "Tiếng Hàn theo cấu trúc SOV (Chủ ngữ - Tân ngữ - Vị ngữ), khác với tiếng Việt.",
      example: "나는 사과를 먹어요 (Tôi ăn táo)"
    },
    {
      title: "Các mức độ lịch sự",
      description: "Tiếng Hàn có 3 mức độ lịch sự chính: Casual (반말), Polite (존댓말), Formal (격식체).",
      example: "가요 / 갑니다 / 가"
    },
    {
      title: "Trợ từ (Particles)",
      description: "Trợ từ giúp xác định vai trò của từ trong câu: 은/는 (chủ đề), 이/가 (chủ ngữ), 을/를 (tân ngữ).",
      example: "학생은 책을 읽어요"
    }
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Hangul Learning | Học Tiếng Hàn Dễ Dàng & Miễn Phí"
        description="Nền tảng học tiếng Hàn miễn phí, cung cấp từ vựng, ngữ pháp và bài tập theo phương pháp giảng dạy chính quy. Hướng dẫn chi tiết từ cơ bản đến nâng cao."
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
                Một hệ thống học tập dựa trên phương pháp giảng dạy chính quy với sự trợ giúp của các tài nguyên đa dạng. Học từ cơ bản đến nâng cao với hơn 1000+ từ vựng và ngữ pháp chi tiết.
              </p>
              <div className="mt-10 flex gap-4 justify-center md:justify-start flex-wrap">
                <Link to="/basic" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-up">
                  Học bảng chữ cái
                </Link>
                <Link to="/vocabulary" className="inline-block bg-purple-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-600 border-2 border-purple-500 hover:border-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-up animation-delay-200">
                  Từ vựng
                </Link>
                <Link to="/grammar" className="inline-block bg-secondary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-up animation-delay-400">
                  Ngữ pháp
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative h-96">
              <div className="animate-pulse">
                <DecorShape />
              </div>
              <div style={{ top: '10%', left: '60%' }} className="animate-pulse animation-delay-1000">
                <DecorShape />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-orange-100 to-pink-100 rounded-2xl shadow-xl flex items-center justify-center -rotate-6 transform hover:rotate-0 hover:scale-105 transition-all duration-500 animate-bounce-slow">
                 <img src="/logo_human.png" alt="Học tiếng Hàn miễn phí" className="h-80 w-80 object-contain opacity-90 animate-float" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Updates Announcement Board */}
      <div className="py-12 bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
              <Bell className="w-5 h-5 animate-bell-swing" />
              <span className="font-bold text-sm animate-text-slide-out">TIN TỨC & CẬP NHẬT</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Những cập nhật mới nhất</h2>
            <p className="mt-2 text-gray-600">Theo dõi các tính năng và bài học mới được thêm vào website</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {updates.map((update, index) => {
              const IconComponent = update.icon;
              return (
                <Link
                  key={index}
                  to={update.link}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden flex flex-col h-full"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${update.color}`}>
                        {update.type}
                      </span>
                      <span className="text-xs text-gray-500">{update.date}</span>
                    </div>
                    
                    <div className="flex items-start gap-3 flex-1">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {update.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {update.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:text-orange-600 transition-colors">
                      <span>Khám phá ngay</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Decorative gradient border */}
                  <div className="h-1 bg-gradient-to-r from-primary via-orange-400 to-yellow-400 group-hover:h-2 transition-all"></div>
                </Link>
              );
            })}
          </div>

          {/* Call to action */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
              <span className="text-sm text-gray-700">Cập nhật tiếp theo:</span>
              <span className="text-sm font-bold text-primary">Bài tập phát âm interactive</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Browser Recommendation Section */}
      <div className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Trải nghiệm nghe giọng đọc tốt nhất
                </h3>
                <div className="mb-4">
                  <p className="text-gray-600 mb-2">
                    Để có chất lượng phát âm tiếng Hàn tốt nhất, chúng tôi khuyến nghị sử dụng các trình duyệt sau:
                  </p>
                  
                  {/* Hiển thị trạng thái browser hiện tại */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                    isOptimalBrowser 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    <span className="w-2 h-2 rounded-full bg-current"></span>
                    <span className="font-medium">
                      {isOptimalBrowser 
                        ? `Bạn đang dùng ${currentBrowser} - Tuyệt vời!` 
                        : `Bạn đang dùng ${currentBrowser} - Có thể gặp vấn đề phát âm`
                      }
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a 
                    href="https://www.google.com/chrome/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-200 hover:bg-green-100 transition-colors group"
                  >
                    <Chrome className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-semibold text-green-700">Chrome</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Tốt nhất</span>
                  </a>
                  
                  <a 
                    href="https://www.microsoft.com/edge" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors group"
                  >
                    <Monitor className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-700">Edge</span>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Rất tốt</span>
                  </a>
                  
                  <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-lg border border-purple-200">
                    <Smartphone className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-semibold text-purple-700">Safari</span>
                    <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">Có sẵn</span>
                  </div>
                </div>
                
                <div className="mt-4 text-center md:text-left">
                  <p className="text-xs text-gray-500">
                    💡 Nhấn vào Chrome hoặc Edge để tải về và cài đặt • Safari có sẵn trên macOS/iOS
                  </p>
                  {!isOptimalBrowser && (
                    <div className="mt-2 bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <p className="text-xs text-amber-800">
                        <strong>Cách chuyển browser:</strong> Sau khi tải về, mở link này bằng browser mới để có trải nghiệm tốt nhất!
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-xs">
                  <div className="flex items-start gap-2">
                    <div className="text-yellow-600 text-lg">💡</div>
                    <div>
                      <p className="text-xs text-yellow-800 font-medium mb-1">Lưu ý quan trọng:</p>
                      <p className="text-xs text-yellow-700 leading-relaxed">
                        Firefox có thể gặp vấn đề với một số giọng đọc tiếng Hàn. 
                        Nếu không nghe được âm thanh, hãy thử chuyển sang Chrome.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hangul Basics Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Bắt đầu với bảng chữ cái Hangul</h2>
            <p className="mt-4 text-lg text-gray-600">Nắm vững nền tảng với bảng chữ cái và quy tắc cơ bản của tiếng Hàn</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl font-bold text-primary mb-4">ㅏㅓㅗㅜ</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Nguyên âm cơ bản</h3>
              <p className="text-gray-600 text-sm">10 nguyên âm cơ bản và 11 nguyên âm phức</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl font-bold text-primary mb-4">ㄱㄴㄷㄹ</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phụ âm cơ bản</h3>
              <p className="text-gray-600 text-sm">14 phụ âm cơ bản và 5 phụ âm căng</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl font-bold text-primary mb-4">가나다</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quy tắc ghép chữ</h3>
              <p className="text-gray-600 text-sm">Cách kết hợp phụ âm và nguyên âm thành âm tiết</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl font-bold text-primary mb-4">SOV</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cấu trúc câu</h3>
              <p className="text-gray-600 text-sm">Trật tự từ và tiểu từ cơ bản trong tiếng Hàn</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/basic" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors">
              Học bảng chữ cái Hangul →
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-gray-600 mt-1">Từ vựng</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-gray-600 mt-1">Bài ngữ pháp</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">35+</div>
              <div className="text-sm text-gray-600 mt-1">Bài tập thực hành</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-gray-600 mt-1">Hỗ trợ</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Vocabulary Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Từ vựng cơ bản hàng ngày</h2>
            <p className="mt-4 text-lg text-gray-600">Bắt đầu với những từ vựng quan trọng nhất trong tiếng Hàn</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVocabulary.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl font-bold text-primary mb-2">{item.korean}</div>
                <div className="text-gray-600 mb-1">{item.vietnamese}</div>
                <div className="text-sm text-gray-500 italic">{item.pronunciation}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/vocabulary" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors">
              Xem thêm từ vựng →
            </Link>
          </div>
        </div>
      </div>

      {/* Grammar Basics Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Ngữ pháp cơ bản</h2>
            <p className="mt-4 text-lg text-gray-600">Nắm vững những quy tắc ngữ pháp quan trọng nhất</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {grammarBasics.map((item, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{item.description}</p>
                <div className="bg-gray-50 p-3 rounded-md mt-auto">
                  <div className="text-sm text-gray-500 mb-1">Ví dụ:</div>
                  <div className="font-mono text-primary">{item.example}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/grammar" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors">
              Học ngữ pháp chi tiết →
            </Link>
          </div>
        </div>
      </div>

      {/* Exercises Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Luyện tập kỹ năng</h2>
            <p className="mt-4 text-lg text-gray-600">Thực hành và kiểm tra kiến thức với bài tập nghe, đọc và viết</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow bg-white flex flex-col h-full">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                <Headphones className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Luyện nghe</h3>
              <p className="text-gray-600 mb-4 flex-1">Nghe từ vựng và câu ngữ pháp với giọng đọc chất lượng cao, tốc độ điều chỉnh được phù hợp cho người mới bắt đầu.</p>
              <div className="bg-gray-50 p-3 rounded-md mt-auto">
                <div className="text-sm text-gray-500 mb-1">Bao gồm:</div>
                <div className="font-mono text-primary">18 bài tập nghe</div>
              </div>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow bg-white flex flex-col h-full">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4 mx-auto">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Luyện đọc</h3>
              <p className="text-gray-600 mb-4 flex-1">Đọc hiểu từ vựng và đoạn văn tiếng Hàn, từ cơ bản đến nâng cao với câu hỏi comprehension chi tiết.</p>
              <div className="bg-gray-50 p-3 rounded-md mt-auto">
                <div className="text-sm text-gray-500 mb-1">Bao gồm:</div>
                <div className="font-mono text-primary">12 bài tập đọc</div>
              </div>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow bg-white flex flex-col h-full">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4 mx-auto">
                <PenTool className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Luyện viết</h3>
              <p className="text-gray-600 mb-4 flex-1">Dịch câu từ tiếng Việt sang tiếng Hàn và điền ngữ pháp với gợi ý chi tiết, chấp nhận nhiều đáp án đúng.</p>
              <div className="bg-gray-50 p-3 rounded-md mt-auto">
                <div className="text-sm text-gray-500 mb-1">Bao gồm:</div>
                <div className="font-mono text-primary">5 bài tập viết</div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/exercises" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors">
              Thực hành ngay →
            </Link>
          </div>
        </div>
      </div>

      {/* Learning Tips Section */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Bí quyết học tiếng Hàn hiệu quả</h2>
            <p className="mt-4 text-lg text-gray-600">Những phương pháp đã được chứng minh hiệu quả</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {learningTips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* Languages bar */}
       <div className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-500 tracking-wider uppercase">
            Nội dung được biên soạn chuẩn theo các giáo trình phổ biến như Sejong, Sogang, Yonsei
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
              <p className="mt-2 text-base text-gray-300">Biên soạn theo giáo trình uy tín như Sejong, Sogang, dễ hiểu và thực tiễn.</p>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-xl backdrop-blur-sm border border-slate-600">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary mx-auto">
                <CheckSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-6 text-white text-xl font-bold">Bài tập đa dạng</h3>
              <p className="mt-2 text-base text-gray-300">Luyện tập hiệu quả với nhiều dạng bài từ cơ bản đến nâng cao.</p>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-xl backdrop-blur-sm border border-slate-600">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary mx-auto">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-6 text-white text-xl font-bold">Cộng đồng học tập</h3>
              <p className="mt-2 text-base text-gray-300">Kết nối với hàng nghìn học viên khác để cùng học tập và chia sẻ kinh nghiệm.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Câu hỏi thường gặp</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Tôi có thể học tiếng Hàn miễn phí hoàn toàn không?</h3>
              <p className="text-gray-600">Có, tất cả nội dung trên Hangul Learning đều hoàn toàn miễn phí. Chúng tôi cung cấp từ vựng, ngữ pháp, bài tập và hướng dẫn chi tiết mà không tính phí.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Mất bao lâu để học được tiếng Hàn cơ bản?</h3>
              <p className="text-gray-600">Với việc học 1-2 giờ mỗi ngày, bạn có thể nắm vững tiếng Hàn cơ bản trong 6-12 tháng. Thời gian này phụ thuộc vào khả năng và sự kiên trì của mỗi người.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Tôi nên bắt đầu học từ đâu?</h3>
              <p className="text-gray-600">Bắt đầu với bảng chữ cái Hangul, sau đó học từ vựng cơ bản và ngữ pháp đơn giản. Trang web có lộ trình học tập rõ ràng từ cơ bản đến nâng cao.</p>
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