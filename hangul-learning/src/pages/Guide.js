import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Lightbulb, ArrowRight, Clock, Star, CheckCircle2, Sparkles, Brain, BarChart, GraduationCap, Book, Rocket, Award, Calendar, Film, Smartphone, Coffee } from 'lucide-react';
import SEO from '../components/SEO';

// Component PlacementTest: hiển thị bài kiểm tra đầu vào
const PlacementTest = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  
  // Câu hỏi kiểm tra đầu vào
  const questions = [
    {
      id: 'alphabet',
      question: 'Bạn đã biết bảng chữ cái Hangul chưa?',
      options: [
        { value: 0, label: 'Chưa biết gì' },
        { value: 1, label: 'Biết một vài chữ cái' },
        { value: 2, label: 'Biết hết nhưng chưa thành thạo' },
        { value: 3, label: 'Thành thạo bảng chữ cái' }
      ]
    },
    {
      id: 'vocabulary',
      question: 'Khả năng từ vựng của bạn thế nào?',
      options: [
        { value: 0, label: 'Chưa biết từ nào' },
        { value: 1, label: 'Biết vài từ cơ bản' },
        { value: 2, label: 'Biết khoảng 500-1000 từ' },
        { value: 3, label: 'Biết trên 1000 từ' }
      ]
    },
    {
      id: 'grammar',
      question: 'Trình độ ngữ pháp của bạn?',
      options: [
        { value: 0, label: 'Chưa biết gì' },
        { value: 1, label: 'Biết vài cấu trúc cơ bản' },
        { value: 2, label: 'Hiểu và dùng được nhiều cấu trúc' },
        { value: 3, label: 'Thành thạo hầu hết ngữ pháp' }
      ]
    },
    {
      id: 'speaking',
      question: 'Khả năng giao tiếp của bạn?',
      options: [
        { value: 0, label: 'Chưa nói được' },
        { value: 1, label: 'Nói được vài câu đơn giản' },
        { value: 2, label: 'Giao tiếp cơ bản được' },
        { value: 3, label: 'Giao tiếp tốt nhiều chủ đề' }
      ]
    },
    {
      id: 'goal',
      question: 'Mục tiêu học tiếng Hàn của bạn?',
      options: [
        { value: 'basic', label: 'Giao tiếp cơ bản' },
        { value: 'intermediate', label: 'Đạt TOPIK trung cấp' },
        { value: 'advanced', label: 'Thành thạo tiếng Hàn' },
        { value: 'professional', label: 'Sử dụng trong công việc' }
      ]
    }
  ];

  const handleAnswer = (value) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: value
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      const results = calculateResults(answers);
      onComplete(results);
    }
  };

  const calculateResults = (answers) => {
    const scores = {
      alphabet: answers.alphabet || 0,
      vocabulary: answers.vocabulary || 0,
      grammar: answers.grammar || 0,
      speaking: answers.speaking || 0
    };

    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    const averageScore = totalScore / 4;

    let level;
    if (averageScore < 1) level = 'beginner';
    else if (averageScore < 2) level = 'intermediate';
    else if (averageScore < 3) level = 'advanced';
    else level = 'expert';

    return {
      scores,
      level,
      goal: answers.goal || 'basic'
    };
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto px-4">
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-8">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 mx-1 rounded-full transition-all duration-300 ${
              index === currentQuestion
                ? 'bg-primary'
                : index < currentQuestion
                ? 'bg-green-400'
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Question */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {currentQ.question}
        </h3>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {currentQ.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.value)}
            className="w-full p-4 text-left border-2 rounded-lg hover:border-primary hover:bg-orange-50 transition-all duration-200"
          >
            <span className="font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Component TestResults: hiển thị kết quả kiểm tra
const TestResults = ({ results }) => {
  const { scores, level, goal } = results;

  const getScoreDescription = (score) => {
    switch (true) {
      case score === 0:
        return 'Chưa biết';
      case score === 1:
        return 'Cơ bản';
      case score === 2:
        return 'Khá tốt';
      case score === 3:
        return 'Thành thạo';
      default:
        return 'Không xác định';
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Kết quả đánh giá trình độ
        </h3>

        {/* Score breakdown */}
        <div className="space-y-4 mb-8">
          {Object.entries(scores).map(([skill, score]) => (
            <div key={skill} className="flex items-center justify-between">
              <div>
                <p className="font-medium capitalize">{skill}</p>
                <p className="text-sm text-gray-500">{getScoreDescription(score)}</p>
              </div>
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i < score ? 'bg-green-400' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Overall level */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Trình độ tổng quát</p>
              <h4 className="text-xl font-bold text-gray-900 capitalize">{level}</h4>
            </div>
            <div className={`
              rounded-full p-2
              ${level === 'beginner' && 'bg-blue-100 text-blue-600'}
              ${level === 'intermediate' && 'bg-green-100 text-green-600'}
              ${level === 'advanced' && 'bg-purple-100 text-purple-600'}
              ${level === 'expert' && 'bg-orange-100 text-orange-600'}
            `}>
              {level === 'beginner' && <BookOpen className="w-6 h-6" />}
              {level === 'intermediate' && <Target className="w-6 h-6" />}
              {level === 'advanced' && <Star className="w-6 h-6" />}
              {level === 'expert' && <CheckCircle2 className="w-6 h-6" />}
            </div>
          </div>
        </div>

        {/* Recommended path */}
        <div>
          <h4 className="font-bold text-gray-900 mb-4">Lộ trình học đề xuất</h4>
          <div className="space-y-3">
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-3 text-gray-400" />
              <span>3-6 tháng để đạt mục tiêu</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Target className="w-5 h-5 mr-3 text-gray-400" />
              <span>Tập trung vào {goal === 'basic' ? 'giao tiếp cơ bản' : 'luyện TOPIK'}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Lightbulb className="w-5 h-5 mr-3 text-gray-400" />
              <span>Học 30-60 phút mỗi ngày</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component StudyTips: hiển thị các tips học tiếng Hàn hiệu quả
const StudyTips = () => {
  const tips = [
    {
      icon: Brain,
      title: "Học theo phương pháp SRS",
      description: "Sử dụng phương pháp Spaced Repetition System để ghi nhớ từ vựng và ngữ pháp lâu dài.",
      link: "/vocabulary"
    },
    {
      icon: Sparkles,
      title: "Luyện phát âm mỗi ngày",
      description: "Dành 15-20 phút mỗi ngày để luyện phát âm với audio chuẩn.",
      link: "/basic"
    },
    {
      icon: BarChart,
      title: "Học theo chủ đề",
      description: "Tập trung học từ vựng và ngữ pháp theo từng chủ đề cụ thể.",
      link: "/vocabulary"
    },
    {
      icon: GraduationCap,
      title: "Làm bài tập thường xuyên",
      description: "Củng cố kiến thức thông qua các bài tập đa dạng.",
      link: "/exercises"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Tips học tiếng Hàn hiệu quả
      </h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {tips.map((tip, index) => {
          const IconComponent = tip.icon;
          return (
            <Link
              key={index}
              to={tip.link}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover:border-primary/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{tip.title}</h4>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

// Component LearningPath: hiển thị lộ trình học tập theo từng cấp độ
const LearningPath = () => {
  const levels = [
    {
      title: "Sơ cấp",
      duration: "2-3 tháng",
      description: "Nắm vững bảng chữ cái và giao tiếp cơ bản",
      icon: BookOpen,
      color: "blue",
      modules: [
        {
          title: "Bảng chữ cái Hangul",
          description: "Học cách đọc và viết 24 chữ cái cơ bản",
          icon: Book,
          link: "/basic"
        },
        {
          title: "Từ vựng cơ bản 500 từ",
          description: "Từ vựng thiết yếu cho giao tiếp hàng ngày",
          icon: Brain,
          link: "/vocabulary"
        },
        {
          title: "Ngữ pháp cơ bản",
          description: "Cấu trúc câu và ngữ pháp căn bản",
          icon: GraduationCap,
          link: "/grammar"
        }
      ]
    },
    {
      title: "Trung cấp",
      duration: "3-4 tháng",
      description: "Phát triển kỹ năng giao tiếp và từ vựng",
      icon: Target,
      color: "orange",
      modules: [
        {
          title: "Từ vựng nâng cao",
          description: "Mở rộng vốn từ vựng lên 1500+ từ",
          icon: Book,
          link: "/vocabulary"
        },
        {
          title: "Ngữ pháp trung cấp",
          description: "Các cấu trúc ngữ pháp phức tạp hơn",
          icon: Brain,
          link: "/grammar"
        },
        {
          title: "Luyện tập tổng hợp",
          description: "Bài tập và thực hành giao tiếp",
          icon: Target,
          link: "/exercises"
        }
      ]
    },
    {
      title: "Cao cấp",
      duration: "4-6 tháng",
      description: "Chinh phục TOPIK và giao tiếp thành thạo",
      icon: Award,
      color: "green",
      modules: [
        {
          title: "Từ vựng chuyên ngành",
          description: "Từ vựng học thuật và chuyên môn",
          icon: Book,
          link: "/vocabulary"
        },
        {
          title: "Ngữ pháp cao cấp",
          description: "Ngữ pháp nâng cao và thành ngữ",
          icon: Brain,
          link: "/grammar"
        },
        {
          title: "Luyện thi TOPIK",
          description: "Ôn luyện và đề thi thử TOPIK",
          icon: Award,
          link: "/exercises"
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
        Lộ trình học tập chi tiết
      </h2>

      <div className="space-y-8 sm:space-y-12">
        {levels.map((level, index) => {
          const IconComponent = level.icon;
          const isLast = index === levels.length - 1;
          
          return (
            <div key={level.title} className="relative">
              {/* Timeline connector */}
              {!isLast && (
                <div className="absolute left-6 sm:left-8 top-20 sm:top-24 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-primary to-transparent"></div>
              )}
              
              {/* Level header */}
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-${level.color}-100 flex items-center justify-center shadow-lg`}>
                  <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 text-${level.color}-600`} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{level.title}</h3>
                  <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{level.duration}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">{level.description}</p>
                </div>
              </div>

              {/* Modules grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pl-12 sm:pl-20">
                {level.modules.map((module, moduleIndex) => {
                  const ModuleIcon = module.icon;
                  return (
                    <div key={moduleIndex} className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden group">
                      <div className="p-4 sm:p-6">
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <ModuleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                          <h4 className="font-semibold text-sm sm:text-base text-gray-900">{module.title}</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{module.description}</p>
                        <Link
                          to={module.link}
                          className="inline-flex items-center text-xs sm:text-sm text-primary hover:text-primary-dark"
                        >
                          Bắt đầu học
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Component LearningContent: hiển thị nội dung học tập theo từng cấp độ
const LearningContent = () => {
  const learningContent = [
    {
      level: "Sơ cấp",
      icon: Book,
      description: "Nắm vững nền tảng tiếng Hàn trong 2-3 tháng đầu tiên",
      content: [
        {
          title: "Bảng chữ cái Hangul",
          description: "Học cách đọc và viết 24 chữ cái cơ bản của tiếng Hàn",
          features: [
            "Nguyên âm và phụ âm cơ bản",
            "Quy tắc ghép chữ",
            "Luyện phát âm chuẩn",
            "Bài tập thực hành"
          ],
          link: "/basic",
          duration: "2-3 tuần",
          progress: 100, // Phần trăm hoàn thành
          color: "blue"
        },
        {
          title: "Từ vựng cơ bản 500 từ",
          description: "Học 500 từ vựng thông dụng nhất trong giao tiếp hàng ngày",
          features: [
            "Từ vựng theo chủ đề",
            "Ví dụ thực tế",
            "Audio phát âm chuẩn",
            "Flashcard học tập"
          ],
          link: "/vocabulary",
          duration: "1-2 tháng",
          progress: 80,
          color: "green"
        },
        {
          title: "Ngữ pháp cơ bản",
          description: "Nắm vững các cấu trúc ngữ pháp cơ bản để bắt đầu giao tiếp",
          features: [
            "20 cấu trúc thông dụng",
            "Bài tập áp dụng",
            "Ví dụ thực tế",
            "Kiểm tra sau mỗi bài"
          ],
          link: "/grammar",
          duration: "2-3 tháng",
          progress: 60,
          color: "purple"
        }
      ]
    },
    {
      level: "Trung cấp",
      icon: Rocket,
      description: "Phát triển kỹ năng giao tiếp và mở rộng vốn từ vựng trong 3-4 tháng tiếp theo",
      content: [
        {
          title: "Từ vựng nâng cao",
          description: "Mở rộng vốn từ với 1000+ từ vựng đa dạng",
          features: [
            "Từ vựng theo ngành nghề",
            "Thành ngữ, tục ngữ",
            "Từ Hán Hàn",
            "Bài tập ứng dụng"
          ],
          link: "/vocabulary",
          duration: "2-3 tháng",
          progress: 40,
          color: "orange"
        },
        {
          title: "Ngữ pháp trung cấp",
          description: "Học các cấu trúc phức tạp hơn để giao tiếp lưu loát",
          features: [
            "30 cấu trúc nâng cao",
            "Phân tích ngữ pháp",
            "Bài tập tổng hợp",
            "Luyện nói theo tình huống"
          ],
          link: "/grammar",
          duration: "3-4 tháng",
          progress: 30,
          color: "pink"
        },
        {
          title: "Luyện tập tổng hợp",
          description: "Rèn luyện kỹ năng nghe, nói, đọc, viết",
          features: [
            "Bài tập theo chủ đề",
            "Luyện nghe hiểu",
            "Tập viết đoạn văn",
            "Thực hành giao tiếp"
          ],
          link: "/exercises",
          duration: "2-3 tháng",
          progress: 20,
          color: "indigo"
        }
      ]
    },
    {
      level: "Cao cấp",
      icon: Award,
      description: "Chinh phục TOPIK và giao tiếp thành thạo trong 4-6 tháng cuối",
      content: [
        {
          title: "Từ vựng chuyên ngành",
          description: "Từ vựng học thuật và chuyên ngành TOPIK",
          features: [
            "2000+ từ vựng nâng cao",
            "Thuật ngữ chuyên ngành",
            "Cụm từ học thuật",
            "Bài tập TOPIK"
          ],
          link: "/vocabulary",
          duration: "3-4 tháng",
          progress: 10,
          color: "red"
        },
        {
          title: "Ngữ pháp cao cấp",
          description: "Nắm vững ngữ pháp phức tạp cho TOPIK",
          features: [
            "50 cấu trúc cao cấp",
            "Phân tích câu phức",
            "Văn phong học thuật",
            "Đề thi TOPIK mẫu"
          ],
          link: "/grammar",
          duration: "4-5 tháng",
          progress: 5,
          color: "yellow"
        },
        {
          title: "Luyện thi TOPIK",
          description: "Ôn tập và luyện đề thi TOPIK các cấp độ",
          features: [
            "Đề thi thử TOPIK",
            "Chiến thuật làm bài",
            "Bài giải chi tiết",
            "Mẹo làm bài thi"
          ],
          link: "/exercises",
          duration: "3-4 tháng",
          progress: 0,
          color: "teal"
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {learningContent.map((level, levelIndex) => {
        const IconComponent = level.icon;
        return (
          <div key={levelIndex} className="mb-8 sm:mb-16">
            {/* Level header with icon and description */}
            <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{level.level}</h2>
                <p className="text-sm sm:text-base text-gray-600">{level.description}</p>
              </div>
            </div>
            
            {/* Content grid with progression arrows */}
            <div className="relative">
              {/* Progression line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 sm:h-1 bg-gray-200 -translate-y-1/2 hidden md:block" />
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative">
                {level.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden group">
                    {/* Progress bar */}
                    <div className="w-full h-0.5 sm:h-1 bg-gray-100">
                      <div 
                        className={`h-full transition-all duration-500 bg-${item.color}-500`}
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                    
                    <div className="p-4 sm:p-6">
                      {/* Title and duration */}
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-xs sm:text-sm text-primary font-medium bg-primary/5 px-2 sm:px-3 py-1 rounded-full">
                          {item.duration}
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{item.description}</p>
                      
                      {/* Features with checkmarks */}
                      <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600">
                            <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Action button */}
                      <Link
                        to={item.link}
                        className="inline-flex items-center justify-center w-full px-3 sm:px-4 py-2 bg-gray-50 text-primary text-xs sm:text-sm font-medium rounded-lg hover:bg-primary hover:text-white transition-all duration-300 group-hover:bg-primary/10"
                      >
                        {item.progress === 0 ? 'Bắt đầu học' : item.progress === 100 ? 'Ôn tập lại' : 'Tiếp tục học'}
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Component UsefulInfo: hiển thị thông tin hữu ích về học tiếng Hàn
const UsefulInfo = () => {
  const sections = [
    {
      title: "Thời gian học tập hiệu quả",
      icon: Calendar,
      items: [
        "Học 30-60 phút mỗi ngày tốt hơn 3-4 tiếng cuối tuần",
        "Thời điểm tốt nhất: 5-7 giờ sáng hoặc 8-10 giờ tối",
        "Chia nhỏ bài học thành 25 phút học, 5 phút nghỉ",
        "Ôn tập kiến thức cũ 10 phút trước mỗi bài học mới"
      ]
    },
    {
      title: "Phương pháp học đa giác quan",
      icon: Brain,
      items: [
        "Kết hợp nghe, nói, đọc, viết trong mỗi bài học",
        "Sử dụng flashcard kèm hình ảnh và âm thanh",
        "Viết tay từ vựng và ngữ pháp mới học",
        "Luyện nói to khi học phát âm và từ vựng"
      ]
    },
    {
      title: "Học qua giải trí",
      icon: Film,
      items: [
        "Xem phim Hàn Quốc có phụ đề song ngữ",
        "Nghe và hát theo nhạc K-pop có lời",
        "Xem các show thực tế Hàn Quốc",
        "Đọc truyện tranh tiếng Hàn có phiên âm"
      ]
    },
    {
      title: "Ứng dụng hỗ trợ học tập",
      icon: Smartphone,
      items: [
        "Duolingo: Học cơ bản miễn phí",
        "Anki: Ôn tập từ vựng theo SRS",
        "HelloTalk: Kết nối người bản xứ",
        "Naver Dictionary: Từ điển chuyên sâu"
      ]
    },
    {
      title: "Mẹo ghi nhớ từ vựng",
      icon: Lightbulb,
      items: [
        "Tạo câu chuyện liên kết với từ mới",
        "Nhóm từ theo chủ đề hoặc ngữ cảnh",
        "Sử dụng phương pháp liên tưởng",
        "Ôn tập theo chu kỳ tăng dần"
      ]
    },
    {
      title: "Thói quen học tập",
      icon: Coffee,
      items: [
        "Tạo môi trường học tập yên tĩnh",
        "Đặt mục tiêu học tập rõ ràng",
        "Theo dõi tiến độ học tập",
        "Thưởng cho bản thân sau mỗi mục tiêu"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        Thông tin hữu ích cho người học tiếng Hàn
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{section.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function Guide() {
  const [showTest, setShowTest] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [hasTestedLevel, setHasTestedLevel] = useState(false);

  useEffect(() => {
    const tested = localStorage.getItem('hasTestedLevel') === 'true';
    const savedResults = localStorage.getItem('testResults');
    
    setHasTestedLevel(tested);
    if (tested && savedResults) {
      setTestResults(JSON.parse(savedResults));
    }
  }, []);

  const handleTestComplete = (results) => {
    setTestResults(results);
    setHasTestedLevel(true);
    localStorage.setItem('hasTestedLevel', 'true');
    localStorage.setItem('testResults', JSON.stringify(results));
  };

  const startNewTest = () => {
    setShowTest(true);
    setTestResults(null);
    setHasTestedLevel(false);
    localStorage.removeItem('hasTestedLevel');
    localStorage.removeItem('testResults');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Hướng dẫn học tiếng Hàn | Kiểm tra trình độ và lộ trình học"
        description="Kiểm tra trình độ tiếng Hàn của bạn và nhận lộ trình học phù hợp. Tìm hiểu các phương pháp học hiệu quả và bắt đầu hành trình chinh phục tiếng Hàn."
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hướng dẫn học tiếng Hàn
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Kiểm tra trình độ, nhận lộ trình học phù hợp và khám phá các phương pháp học hiệu quả
          </p>
          
          {!showTest && !hasTestedLevel && (
            <button
              onClick={() => setShowTest(true)}
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-orange-50 transition-colors"
            >
              <Target className="w-6 h-6 mr-2" />
              Kiểm tra trình độ ngay
            </button>
          )}

          {hasTestedLevel && (
            <button
              onClick={startNewTest}
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-colors"
            >
              <Target className="w-6 h-6 mr-2" />
              Kiểm tra lại trình độ
            </button>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hiển thị bài kiểm tra nếu người dùng chưa làm hoặc muốn làm lại */}
        {showTest && !testResults && (
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Kiểm tra trình độ tiếng Hàn
            </h2>
            <PlacementTest onComplete={handleTestComplete} />
          </div>
        )}

        {/* Hiển thị kết quả nếu đã làm bài kiểm tra */}
        {testResults && (
          <div className="mb-12">
            <TestResults results={testResults} />
          </div>
        )}

        {/* Hiển thị nội dung học tập */}
        <div className={testResults ? 'mt-8' : ''}>
          <StudyTips />
          <LearningPath />
          <LearningContent />
          <UsefulInfo />
        </div>
      </div>
    </div>
  );
}

export default Guide; 