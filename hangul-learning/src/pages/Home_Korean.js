import React from 'react';
import SEO from '../components/SEO';
import SponsorSection from '../components/SponsorSection';
import { Link } from 'react-router-dom';
import { BookOpen, CheckSquare, Users, Headphones, PenTool, Eye, Bell, Sparkles, Chrome, Monitor, Smartphone, ExternalLink, Youtube } from 'lucide-react';
import YouTubeEmbed from '../components/YouTubeEmbed';
import OptimizedImage from '../components/OptimizedImage';

// Korean Saekdong Pattern (traditional colorful stripes from hanbok children's clothing)
const SaekdongPattern = ({ className = "", orientation = "horizontal" }) => (
  <div className={`${className} overflow-hidden`}>
    <div className={`${orientation === 'horizontal' ? 'flex' : 'flex flex-col'} h-full w-full`}>
      <div className="flex-1" style={{backgroundColor: '#5470C6'}}></div>
      <div className="flex-1" style={{backgroundColor: '#EA4335'}}></div>
      <div className="flex-1" style={{backgroundColor: '#F4B942'}}></div>
      <div className="flex-1" style={{backgroundColor: '#34C759'}}></div>
      <div className="flex-1" style={{backgroundColor: '#AF52DE'}}></div>
    </div>
  </div>
);

// Korean Taegeuk-inspired decorative shape
const KoreanDecorShape = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute opacity-20">
    <circle cx="60" cy="60" r="58" fill="none" stroke="url(#korean_gradient)" strokeWidth="4"/>
    <path d="M60 10 Q60 60 110 60 Q60 60 60 110 Q60 60 10 60 Q60 60 60 10" fill="url(#korean_gradient)" opacity="0.3"/>
    <defs>
      <linearGradient id="korean_gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5470C6"/>
        <stop offset="25%" stopColor="#EA4335"/>
        <stop offset="50%" stopColor="#F4B942"/>
        <stop offset="75%" stopColor="#5470C6"/>
        <stop offset="100%" stopColor="#EA4335"/>
      </linearGradient>
    </defs>
  </svg>
);

// Korean Paper Background (like Hanji paper)
const KoreanPaperBg = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 opacity-5">
      <div className="w-full h-full" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #5470C6 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }}></div>
    </div>
    {children}
  </div>
);

// Korean Flag mini component
const KoreanFlag = ({ className = "" }) => (
  <div className={`${className} relative inline-block`}>
    <div className="w-8 h-6 bg-white border border-gray-300 rounded-sm overflow-hidden">
      <div className="w-full h-full relative">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute top-1 left-1 w-3 h-2 rounded-full" style={{background: 'linear-gradient(45deg, #EA4335 50%, #5470C6 50%)'}}></div>
      </div>
    </div>
  </div>
);

function Home() {
  // Korean color scheme (Obangsaek - Five Traditional Colors)
  const koreanColors = {
    primary: '#5470C6',    // 청 (Blue) - Youth, hope
    secondary: '#EA4335',  // 적 (Red) - Energy, happiness
    accent: '#F4B942',     // 황 (Yellow) - Wisdom, sacredness
    success: '#34C759',    // 녹 (Green) - Growth, harmony
    purple: '#AF52DE',     // 자 (Purple) - Nobility
    white: '#FAFAFA',      // 백 (White) - Purity, simplicity
    black: '#2D3436'       // 흑 (Black) - Dignity, formality
  };

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
      date: '2025-06-29',
      type: 'HOT',
      title: 'Ra mắt kênh YouTube Hangul.online',
      description: 'Kênh YouTube chính thức với nội dung học tiếng Hàn qua Postcard. Video mới với phát âm chuẩn bản địa và phương pháp học hiệu quả.',
      link: 'https://youtube.com/@hangul.online?si=JeMuUcJvBK9MuqrJ',
      icon: Youtube,
      color: 'bg-red-100 text-red-800'
    },
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
    }
  ];

  return (
    <div className="bg-white" style={{ backgroundColor: koreanColors.white }}>
      <SEO
        title="한국어 학습 | 한국어학습 - Học Tiếng Hàn Dễ Dàng & Miễn Phí"
        description="전통적인 한국 교육 방법으로 한국어를 무료로 배우세요. 어휘, 문법, 연습문제를 통해 기초부터 고급까지 단계별 학습."
      />

      {/* Korean-style Hero Section */}
      <KoreanPaperBg className="relative overflow-hidden" style={{ backgroundColor: koreanColors.white }}>
        {/* Top Saekdong Border */}
        <SaekdongPattern className="h-3 w-full" />
        
        <div className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left relative">
              {/* Korean decorative elements */}
              <div className="absolute -top-8 -left-8 opacity-10">
                <KoreanDecorShape />
              </div>
              
              {/* Korean-style header with Hangul */}
              <div className="mb-4">
                <KoreanFlag className="mb-2" />
                <span className="text-sm font-medium" style={{ color: koreanColors.primary }}>
                  한국 문화와 함께하는 언어 학습
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter" 
                  style={{ color: koreanColors.black, fontFamily: '"Noto Sans CJK KR", system-ui, sans-serif' }}>
                한국어 학습
                <span className="mt-2 block bg-gradient-to-r bg-clip-text text-transparent" 
                      style={{ 
                        background: `linear-gradient(135deg, ${koreanColors.primary}, ${koreanColors.secondary}, ${koreanColors.accent})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                  Học tiếng Hàn dễ dàng
                </span>
              </h1>
              
              {/* Saekdong decorative separator */}
              <div className="mt-4 flex items-center justify-center md:justify-start gap-2">
                <SaekdongPattern className="h-1 w-16 rounded-full" />
                <span className="text-sm font-medium px-2" style={{ color: koreanColors.primary }}>
                  전통과 현대의 만남
                </span>
                <SaekdongPattern className="h-1 w-16 rounded-full" />
              </div>
              
              <p className="mt-6 text-lg max-w-md mx-auto md:mx-0" style={{ color: '#6C757D' }}>
                한국의 아름다운 언어와 문화를 현대적인 학습 방법으로 경험해보세요. 
                전통적인 교육 철학과 최신 기술이 결합된 체계적인 한국어 학습 프로그램입니다.
              </p>
              
              {/* Korean-style buttons */}
              <div className="mt-10 flex gap-4 justify-center md:justify-start flex-wrap">
                <Link 
                  to="/basic" 
                  className="group relative inline-block font-bold py-4 px-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  style={{ 
                    backgroundColor: koreanColors.primary,
                    color: 'white',
                    border: `2px solid ${koreanColors.primary}`
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    📚 한글 배우기 • Hangul
                  </span>
                </Link>
                
                <Link 
                  to="/vocabulary" 
                  className="inline-block font-bold py-4 px-8 rounded-2xl shadow-lg border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  style={{ 
                    backgroundColor: 'white',
                    color: koreanColors.secondary,
                    borderColor: koreanColors.secondary
                  }}
                >
                  🔤 어휘 • 단어
                </Link>
                
                <Link 
                  to="/grammar" 
                  className="inline-block font-bold py-4 px-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  style={{ 
                    backgroundColor: koreanColors.accent,
                    color: 'white'
                  }}
                >
                  📖 문법 • 규칙
                </Link>
              </div>
            </div>
            
            {/* Korean-styled image section */}
            <div className="hidden md:block relative h-96">
              <div className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden transform hover:rotate-1 hover:scale-105 transition-all duration-500" 
                   style={{ backgroundColor: 'white' }}>
                
                {/* Top Saekdong border */}
                <SaekdongPattern className="h-4 w-full" />
                
                <div className="p-8 h-full flex flex-col items-center justify-center">
                  <div className="relative">
                    <OptimizedImage src="/logo_human.png" alt="한국어 학습" className="h-64 w-64 object-contain opacity-90" />
                    
                    {/* Korean floating elements */}
                    <div className="absolute -top-4 -right-4 animate-bounce">
                      <div className="w-8 h-8 rounded-full" style={{ backgroundColor: koreanColors.primary }}></div>
                    </div>
                    <div className="absolute -bottom-2 -left-2 animate-pulse">
                      <div className="w-6 h-6 rounded-full" style={{ backgroundColor: koreanColors.secondary }}></div>
                    </div>
                    <div className="absolute top-1/2 -right-6 animate-ping">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: koreanColors.accent }}></div>
                    </div>
                  </div>
                  
                  {/* Korean text decoration */}
                  <div className="mt-4 text-center">
                    <p className="text-lg font-bold" style={{ color: koreanColors.primary }}>
                      한국어를 배워봅시다! 🇰🇷
                    </p>
                    <p className="text-sm" style={{ color: '#6C757D' }}>
                      Cùng khám phá vẻ đẹp ngôn ngữ Hàn Quốc
                    </p>
                  </div>
                </div>
                
                {/* Bottom Saekdong border */}
                <SaekdongPattern className="h-4 w-full" />
              </div>
              
              {/* Floating Korean decorative elements */}
              <div className="absolute -top-8 -left-8 animate-float">
                <KoreanDecorShape />
              </div>
              <div className="absolute -bottom-4 -right-4 animate-float" style={{ animationDelay: '1s' }}>
                <KoreanDecorShape />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Saekdong border */}
        <SaekdongPattern className="h-3 w-full" />
      </KoreanPaperBg>

      {/* Korean Traditional Learning Section */}
      <div className="py-16" style={{ backgroundColor: koreanColors.white }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: koreanColors.black }}>
              전통적인 한국 학습법 • Traditional Korean Learning
            </h2>
            <SaekdongPattern className="h-2 w-32 mx-auto rounded-full mb-4" />
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#6C757D' }}>
              수천 년간 이어져 온 한국의 교육 철학을 현대적으로 재해석한 학습 경험을 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2" style={{ borderColor: koreanColors.primary }}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: koreanColors.primary }}>
                  <span className="text-2xl">한</span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: koreanColors.black }}>
                  한글 기초 • Hangul Basics
                </h3>
                <p className="text-gray-600">
                  세종대왕이 만든 과학적인 문자 체계를 단계별로 학습하세요.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2" style={{ borderColor: koreanColors.secondary }}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: koreanColors.secondary }}>
                  <span className="text-2xl">국</span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: koreanColors.black }}>
                  한국 문화 • Korean Culture
                </h3>
                <p className="text-gray-600">
                  언어와 함께 한국의 아름다운 전통과 현대 문화를 경험하세요.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2" style={{ borderColor: koreanColors.accent }}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: koreanColors.accent }}>
                  <span className="text-2xl">어</span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: koreanColors.black }}>
                  실용 한국어 • Practical Korean
                </h3>
                <p className="text-gray-600">
                  일상생활에서 바로 사용할 수 있는 실용적인 한국어를 배우세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Section with Korean styling */}
      <div className="py-16" style={{ backgroundColor: '#FFF5F5' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-4 shadow-lg" 
                 style={{ backgroundColor: koreanColors.secondary, color: 'white' }}>
              <Youtube className="w-6 h-6" />
              <span className="font-bold text-lg">유튜브 채널 • YouTube Channel</span>
              <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-3xl font-extrabold mb-4" style={{ color: koreanColors.black }}>
              포스트카드로 배우는 한국어 
              <span style={{ color: koreanColors.secondary }}>Postcard Korean</span>
            </h2>
            <SaekdongPattern className="h-2 w-48 mx-auto rounded-full mb-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video with Korean border */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
                <SaekdongPattern className="h-2 w-full rounded-t-lg" />
                <YouTubeEmbed 
                  videoId="gIr1q8ZfQds"
                  title="Hangul.online – 한국어 학습 비디오"
                  className="aspect-video"
                />
                <SaekdongPattern className="h-2 w-full rounded-b-lg" />
              </div>
            </div>

            {/* Channel info with Korean styling */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-4" style={{ borderColor: koreanColors.primary }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" 
                       style={{ background: `linear-gradient(135deg, ${koreanColors.secondary}, ${koreanColors.primary})` }}>
                    <Youtube className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: koreanColors.black }}>
                      Hangul.online 🇰🇷
                    </h3>
                    <p style={{ color: '#6C757D' }}>한국어 학습 공식 채널</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    { title: "독창적인 포스트카드 콘텐츠", desc: "실제 상황을 담은 포스트카드로 자연스럽게 한국어 학습" },
                    { title: "원어민 발음", desc: "한국인 선생님의 정확하고 자연스러운 발음 제공" },
                    { title: "정기 업데이트", desc: "매주 새로운 콘텐츠로 지속적인 학습 지원" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" 
                           style={{ backgroundColor: koreanColors.secondary }}></div>
                      <div>
                        <h4 className="font-semibold" style={{ color: koreanColors.black }}>{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://youtube.com/@hangul.online?si=JeMuUcJvBK9MuqrJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 px-6 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    style={{ backgroundColor: koreanColors.secondary, color: 'white' }}
                  >
                    <Youtube className="w-5 h-5" />
                    구독하기 • Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Korean-style footer note */}
      <div className="py-8" style={{ backgroundColor: koreanColors.white }}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <SaekdongPattern className="h-1 w-24 mx-auto rounded-full mb-4" />
          <p className="text-sm" style={{ color: '#6C757D' }}>
            한국의 전통적인 미학과 현대적인 학습법의 조화 • Harmony of traditional Korean aesthetics and modern learning methods
          </p>
        </div>
      </div>

      <SponsorSection />
    </div>
  );
}

export default Home; 