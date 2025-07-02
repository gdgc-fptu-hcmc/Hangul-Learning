import React from 'react';
import { BookOpen, PenTool, Target, CheckSquare, Users, Lightbulb, ArrowRight, Clock, Star } from 'lucide-react';
import SEO from '../components/SEO';

function Guide() {
  const learningPath = [
    {
      step: 1,
      title: "Làm quen với Hangul",
      description: "Học bảng chữ cái Hàn Quốc, cách phát âm từng chữ cái",
      duration: "1-2 tuần",
      page: "/basic",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      title: "Từ vựng cơ bản",
      description: "Học các từ vựng thiết yếu hàng ngày theo chủ đề",
      duration: "2-4 tuần",
      page: "/vocabulary",
      icon: Users,
      color: "from-green-500 to-green-600"
    },
    {
      step: 3,
      title: "Ngữ pháp nền tảng",
      description: "Nắm vững các cấu trúc ngữ pháp cơ bản",
      duration: "4-6 tuần",
      page: "/grammar",
      icon: PenTool,
      color: "from-purple-500 to-purple-600"
    },
    {
      step: 4,
      title: "Luyện tập thực hành",
      description: "Rèn luyện kỹ năng qua các bài tập đa dạng",
      duration: "Liên tục",
      page: "/exercises",
      icon: Target,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const studyTips = [
    {
      title: "Học đều đặn mỗi ngày",
      description: "Dành ít nhất 15-30 phút mỗi ngày để học tiếng Hàn. Tính đều đặn quan trọng hơn thời gian học.",
      tips: [
        "Đặt lịch học cố định hàng ngày",
        "Bắt đầu với 15 phút, tăng dần thời gian",
        "Không học dồn vào cuối tuần"
      ]
    },
    {
      title: "Nghe và lặp lại nhiều lần",
      description: "Sử dụng tính năng phát âm để luyện nghe và nói. Tiếng Hàn có nhiều âm khác tiếng Việt.",
      tips: [
        "Nhấn nút phát âm nhiều lần",
        "Lặp lại theo giọng chuẩn",
        "Ghi âm giọng mình để so sánh"
      ]
    },
    {
      title: "Viết tay để ghi nhớ",
      description: "Viết tay giúp não bộ ghi nhớ tốt hơn. Tập viết chữ Hangul thường xuyên.",
      tips: [
        "Mua vở ô li để tập viết",
        "Viết từng nét theo đúng thứ tự",
        "Tập viết từ vựng mới học"
      ]
    },
    {
      title: "Học theo mục tiêu cụ thể",
      description: "Đặt mục tiêu rõ ràng cho từng giai đoạn học tập để có động lực.",
      tips: [
        "Mục tiêu tuần: học 20 từ vựng mới",
        "Mục tiêu tháng: hoàn thành 1 chương ngữ pháp",
        "Mục tiêu 6 tháng: đọc được đoạn văn đơn giản"
      ]
    },
    {
      title: "Thực hành với người khác",
      description: "Tìm bạn học chung hoặc tham gia cộng đồng học tiếng Hàn để thực hành.",
      tips: [
        "Tham gia các group Facebook học tiếng Hàn",
        "Tìm language exchange partner",
        "Nói chuyện với bạn bè bằng tiếng Hàn"
      ]
    },
    {
      title: "Học qua giải trí",
      description: "Kết hợp học tập với các hoạt động giải trí để tăng hứng thú.",
      tips: [
        "Xem K-drama có phụ đề",
        "Nghe K-pop và tra lời bài hát",
        "Chơi game Hàn Quốc đơn giản"
      ]
    }
  ];

  const commonMistakes = [
    {
      mistake: "Học quá nhanh, không nắm vững cơ bản",
      solution: "Dành thời gian đủ để thành thạo Hangul trước khi chuyển sang ngữ pháp phức tạp"
    },
    {
      mistake: "Chỉ học mà không ôn tập",
      solution: "Dành 30% thời gian để ôn lại những gì đã học"
    },
    {
      mistake: "Bỏ qua phát âm, chỉ tập trung vào viết",
      solution: "Luôn nghe và lặp lại phát âm chuẩn khi học từ mới"
    },
    {
      mistake: "Học thuộc lòng mà không hiểu ngữ cảnh",
      solution: "Học từ vựng kèm theo ví dụ và tình huống sử dụng"
    }
  ];

  return (
    <>
      <SEO 
        title="Hướng dẫn học tiếng Hàn hiệu quả | 한국어학습"
        description="Hướng dẫn chi tiết cách học tiếng Hàn từ A-Z cho người mới bắt đầu. Lộ trình học tập, phương pháp hiệu quả và các lưu ý quan trọng."
        keywords="hướng dẫn học tiếng hàn, lộ trình học tiếng hàn, phương pháp học hiệu quả, học hangul"
        canonical="https://hangul.online/guide"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-6">
              <Lightbulb className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="text-sm font-semibold">HƯỚNG DẪN TOÀN DIỆN</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cách học tiếng Hàn hiệu quả
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Lộ trình chi tiết từ A-Z giúp bạn thành thạo tiếng Hàn một cách khoa học và bài bản.
              Phù hợp cho người mới bắt đầu và những ai muốn cải thiện kỹ năng.
            </p>
          </div>
        </div>

        {/* Learning Path */}
        <div className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Lộ trình học tập 4 bước</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Theo dõi lộ trình này để có nền tảng vững chắc và phát triển kỹ năng tiếng Hàn một cách toàn diện.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {learningPath.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="relative">
                    {/* Connector Line */}
                    {index < learningPath.length - 1 && (
                      <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4"></div>
                    )}
                    
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-full">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full mb-3">
                          <span className="text-sm font-bold text-gray-600">{item.step}</span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                        
                        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-4">
                          <Clock className="w-4 h-4" />
                          <span>{item.duration}</span>
                        </div>
                        
                        <a
                          href={item.page}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-600 transition-all"
                        >
                          Bắt đầu
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Study Tips */}
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">6 bí quyết học hiệu quả</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Những phương pháp đã được chứng minh giúp tăng hiệu quả học tập và ghi nhớ lâu dài.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studyTips.map((tip, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{tip.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{tip.description}</p>
                  
                  <div className="space-y-2">
                    {tip.tips.map((item, tipIndex) => (
                      <div key={tipIndex} className="flex items-start gap-2">
                        <CheckSquare className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tránh những sai lầm thường gặp</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Học từ kinh nghiệm của những người đi trước để tránh những lỗi phổ biến khi học tiếng Hàn.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {commonMistakes.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold text-xl">✕</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-red-600 mb-2">Sai lầm:</h3>
                      <p className="text-gray-700 mb-4">{item.mistake}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mt-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-xl">✓</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-green-600 mb-2">Giải pháp:</h3>
                      <p className="text-gray-700">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-6">
              <Star className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="text-sm font-semibold">BẮT ĐẦU NGAY HÔM NAY</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sẵn sàng chinh phục tiếng Hàn?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Hãy bắt đầu hành trình học tập của bạn ngay hôm nay. 
              Với lộ trình rõ ràng và phương pháp đã được chứng minh, 
              bạn sẽ nhanh chóng đạt được mục tiêu của mình.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/basic"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-bold hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                <BookOpen className="w-5 h-5" />
                Bắt đầu với Hangul
              </a>
              
              <a
                href="/vocabulary"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-white hover:text-blue-600 transition-all"
              >
                <Users className="w-5 h-5" />
                Học từ vựng ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Guide; 