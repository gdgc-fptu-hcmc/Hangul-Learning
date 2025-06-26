import React, { useState, useMemo, useEffect } from 'react';
import { Volume2, ChevronLeft, ChevronRight, X, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import AdsenseAd from '../components/AdsenseAd';

// Accurate lesson titles extracted từ sách
const level1Titles = [
  '소개',
  '학교',
  '일상생활',
  '날짜와 요일',
  '하루 일과',
  '주말',
  '물건 사기 (1)',
  '음식',
  '집',
  '가족',
  '날씨',
  '전화 (1)',
  '생일',
  '취미',
  '교통 (1)'
];

const level2Titles = [
  '만남',
  '약속',
  '물건 사기 (2)',
  '병원',
  '편지',
  '교통 (2)',
  '전화 (2)',
  '영화',
  '휴일',
  '외모',
  '여행',
  '공공장소',
  '도시',
  '계획',
  '한국 생활'
];

const level3Titles = [
  '학교생활',
  '대인 관계',
  '건강',
  '쇼핑',
  '요리',
  '은행',
  '성격',
  '실수',
  '이사',
  '여행',
  '고민',
  '인터넷',
  '희망',
  '영화와 드라마',
  '예절과 규칙'
];

function Vocabulary() {
  // Level 1 (Sơ cấp 1) - Demo với 15 bài
  const vocabularyLevel1 = {};
  for (let i = 1; i <= 15; i++) {
    vocabularyLevel1[`lesson${i}`] = {
      title: level1Titles[i-1] || `Bài ${i}`,
      words: [
        { korean: "안녕하세요", pronunciation: "an-nyeong-ha-se-yo", meaning: "Xin chào", type: "인사말" },
        { korean: "고맙습니다", pronunciation: "go-map-seub-ni-da", meaning: "Cảm ơn", type: "인사말" },
        { korean: "학교", pronunciation: "hak-gyo", meaning: "Trường học", type: "명사" },
        { korean: "집", pronunciation: "jip", meaning: "Nhà", type: "명사" },
        { korean: "물", pronunciation: "mul", meaning: "Nước", type: "명사" },
        { korean: "밥", pronunciation: "bap", meaning: "Cơm", type: "명사" },
        { korean: "친구", pronunciation: "chin-gu", meaning: "Bạn", type: "명사" },
        { korean: "책", pronunciation: "chaek", meaning: "Sách", type: "명사" },
        { korean: "시간", pronunciation: "si-gan", meaning: "Thời gian", type: "명사" },
        { korean: "돈", pronunciation: "don", meaning: "Tiền", type: "명사" },
        { korean: "음식", pronunciation: "eum-sik", meaning: "Đồ ăn", type: "명사" },
        { korean: "가족", pronunciation: "ga-jok", meaning: "Gia đình", type: "명사" },
        { korean: "일", pronunciation: "il", meaning: "Công việc", type: "명사" },
        { korean: "사람", pronunciation: "sa-ram", meaning: "Người", type: "명사" },
        { korean: "날씨", pronunciation: "nal-ssi", meaning: "Thời tiết", type: "명사" },
        { korean: "운동", pronunciation: "un-dong", meaning: "Thể thao", type: "명사" },
        { korean: "여행", pronunciation: "yeo-haeng", meaning: "Du lịch", type: "명사" },
        { korean: "공부", pronunciation: "gong-bu", meaning: "Học tập", type: "명사" },
        { korean: "영화", pronunciation: "yeong-hwa", meaning: "Phim", type: "명사" },
        { korean: "음악", pronunciation: "eum-ak", meaning: "Âm nhạc", type: "명사" }
      ]
    };
  }

  // Level 2 (Sơ cấp 2) - Demo với 15 bài
  const vocabularyLevel2 = {};
  for (let i = 1; i <= 15; i++) {
    vocabularyLevel2[`lesson${i}`] = {
      title: level2Titles[i-1] || `Bài ${i}`,
      words: [
        { korean: "가져오다", pronunciation: "ga-jyeo-o-da", meaning: "mang đến", type: "동사" },
        { korean: "걱정", pronunciation: "geok-jeong", meaning: "lo lắng", type: "명사" },
        { korean: "먼저", pronunciation: "meon-jeo", meaning: "trước tiên", type: "부사" },
        { korean: "명함", pronunciation: "myeong-ham", meaning: "danh thiếp", type: "명사" },
        { korean: "사용하다", pronunciation: "sa-yong-ha-da", meaning: "sử dụng", type: "동사" },
        { korean: "상담", pronunciation: "sang-dam", meaning: "tư vấn", type: "명사" },
        { korean: "안내", pronunciation: "an-nae", meaning: "hướng dẫn", type: "명사" },
        { korean: "연락", pronunciation: "yeol-lak", meaning: "liên lạc", type: "명사" },
        { korean: "예절", pronunciation: "ye-jeol", meaning: "lễ nghi", type: "명사" },
        { korean: "일찍", pronunciation: "il-jjik", meaning: "sớm", type: "부사" },
        { korean: "정장", pronunciation: "jeong-jang", meaning: "trang phục trang trọng", type: "명사" },
        { korean: "조심하다", pronunciation: "jo-sim-ha-da", meaning: "cẩn thận", type: "동사" },
        { korean: "직원", pronunciation: "ji-gwon", meaning: "nhân viên", type: "명사" },
        { korean: "감기", pronunciation: "gam-gi", meaning: "cảm", type: "명사" },
        { korean: "갑자기", pronunciation: "gap-ja-gi", meaning: "đột nhiên", type: "부사" },
        { korean: "논문", pronunciation: "non-mun", meaning: "luận văn", type: "명사" },
        { korean: "늦다", pronunciation: "neut-da", meaning: "muộn", type: "형용사" },
        { korean: "바뀌다", pronunciation: "ba-kkwi-da", meaning: "bị thay đổi", type: "동사" },
        { korean: "변경", pronunciation: "byeon-gyeong", meaning: "thay đổi", type: "명사" },
        { korean: "확인", pronunciation: "hwa-gin", meaning: "xác nhận", type: "명사" }
      ]
    };
  }

  // Level 3 (Trung cấp 1) - Demo với 15 bài
  const vocabularyLevel3 = {};
  for (let i = 1; i <= 15; i++) {
    vocabularyLevel3[`lesson${i}`] = {
      title: level3Titles[i-1] || `Bài ${i}`,
      words: [
        { korean: "개교기념일", pronunciation: "gae-gyo-gi-nyeom-il", meaning: "ngày kỷ niệm thành lập trường", type: "명사" },
        { korean: "교류", pronunciation: "gyo-ryu", meaning: "giao lưu", type: "명사" },
        { korean: "교환학생", pronunciation: "gyo-hwan-hak-saeng", meaning: "sinh viên trao đổi", type: "명사" },
        { korean: "대기업", pronunciation: "dae-gi-eop", meaning: "doanh nghiệp lớn", type: "명사" },
        { korean: "모집하다", pronunciation: "mo-jip-ha-da", meaning: "tuyển dụng", type: "동사" },
        { korean: "문학작품", pronunciation: "mun-hak-jak-pum", meaning: "tác phẩm văn học", type: "명사" },
        { korean: "봉사활동", pronunciation: "bong-sa-hwal-dong", meaning: "hoạt động tình nguyện", type: "명사" },
        { korean: "사회", pronunciation: "sa-hoe", meaning: "xã hội", type: "명사" },
        { korean: "상금", pronunciation: "sang-geum", meaning: "tiền thưởng", type: "명사" },
        { korean: "서류심사", pronunciation: "seo-ryu-sim-sa", meaning: "xét duyệt hồ sơ", type: "명사" },
        { korean: "수강신청", pronunciation: "su-gang-sin-cheong", meaning: "đăng ký học", type: "명사" },
        { korean: "시험기간", pronunciation: "si-heom-gi-gan", meaning: "thời gian thi", type: "명사" },
        { korean: "신입생", pronunciation: "sin-ip-saeng", meaning: "sinh viên mới", type: "명사" },
        { korean: "실력", pronunciation: "sil-lyeok", meaning: "thực lực", type: "명사" },
        { korean: "인재", pronunciation: "in-jae", meaning: "nhân tài", type: "명사" },
        { korean: "장학금", pronunciation: "jang-hak-geum", meaning: "học bổng", type: "명사" },
        { korean: "지원하다", pronunciation: "ji-won-ha-da", meaning: "ứng tuyển", type: "동사" },
        { korean: "참가하다", pronunciation: "cham-ga-ha-da", meaning: "tham gia", type: "동사" },
        { korean: "취업", pronunciation: "chwi-eop", meaning: "việc làm", type: "명사" },
        { korean: "학점", pronunciation: "hak-jeom", meaning: "điểm học tập", type: "명사" }
      ]
    };
  }

  // Complete vocabulary data for all 3 levels  
  const vocabularyData = {
    level1: {
      title: "Tiếng Hàn Tổng Hợp - Sơ cấp 1",
      lessons: vocabularyLevel1
    },
    level2: {
      title: "Tiếng Hàn Tổng Hợp - Sơ cấp 2",
      lessons: vocabularyLevel2
    },
    level3: {
      title: "Tiếng Hàn Tổng Hợp - Trung cấp 1",
      lessons: vocabularyLevel3
    }
  };

  const [selectedLevel, setSelectedLevel] = useState('level1');
  const [selectedLessonKey, setSelectedLessonKey] = useState('lesson1');
  const [searchTerm, setSearchTerm] = useState('');

  const [isFlashcardMode, setIsFlashcardMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset states when changing level
  useEffect(() => {
    setSelectedLessonKey('lesson1');
    setIsFlashcardMode(false);
    setSearchTerm('');
  }, [selectedLevel]);

  // Reset flashcard when lesson changes
  useEffect(() => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
  }, [selectedLessonKey]);

  const currentLevelData = vocabularyData[selectedLevel];
  const selectedLesson = currentLevelData?.lessons[selectedLessonKey];

  const allWordsForLevel = useMemo(() => {
    if (!currentLevelData?.lessons) return [];
    return Object.values(currentLevelData.lessons).flatMap(lesson =>
      lesson.words.map(word => ({ ...word, lessonTitle: lesson.title, lessonKey: Object.keys(currentLevelData.lessons).find(key => currentLevelData.lessons[key] === lesson) }))
    );
  }, [currentLevelData]);

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return allWordsForLevel.filter(word =>
      word.korean.toLowerCase().includes(lowerCaseSearchTerm) ||
      word.meaning.toLowerCase().includes(lowerCaseSearchTerm) ||
      word.pronunciation.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm, allWordsForLevel]);

  const speakWord = (text) => {
    if (!('speechSynthesis' in window)) return;
    const synth = window.speechSynthesis;
    const speak = () => {
      const voices = synth.getVoices().filter((v) => v.lang && v.lang.startsWith('ko'));
      const preferredVoice = voices.find((v) => /Google|Microsoft|Apple|Naver|Kakao/i.test(v.name)) || voices[0];
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';
      if (preferredVoice) utterance.voice = preferredVoice;
      synth.cancel();
      synth.speak(utterance);
    };
    if (synth.getVoices().length) {
      speak();
    } else {
      synth.onvoiceschanged = speak;
    }
  };

  // Flashcard controls
  const nextCard = () => {
    if (selectedLesson && currentCardIndex < selectedLesson.words.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const prevCard = () => {
    if (selectedLesson && currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  const getHeaderText = (level = selectedLevel) => {
    switch(level) {
      case 'level1': return 'Sơ cấp 1';
      case 'level2': return 'Sơ cấp 2';
      case 'level3': return 'Trung cấp 1';
      default: return '';
    }
  };

  const buildSeo = () => {
    const title = `Từ vựng tiếng Hàn ${getHeaderText()} | Hangul Learning`;
    const description = `Học từ vựng tiếng Hàn cấp độ ${getHeaderText()} theo từng bài trong sách Tiếng Hàn Tổng Hợp.`;
    return { title, description };
  };

  const seo = buildSeo();

  // Flashcard Modal Component
  const FlashcardModal = () => {
    if (!isFlashcardMode || !selectedLesson) return null;

    const currentWord = selectedLesson.words[currentCardIndex];
    const progress = ((currentCardIndex + 1) / selectedLesson.words.length) * 100;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative transform transition-all duration-300 ease-out">
          <button onClick={() => setIsFlashcardMode(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
          
          <div className="p-6">
            <p className="text-center text-primary font-semibold">{selectedLesson.title}</p>
            <p className="text-center text-sm text-gray-500 mb-4">{getHeaderText()}</p>
          </div>

          <div 
            className="perspective-1000 w-full h-64"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div 
              className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}
            >
              {/* Front of Card */}
              <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center bg-gray-100 rounded-lg p-6">
                <h2 className="text-4xl font-bold text-gray-800 text-center">{currentWord.meaning}</h2>
                <p className="text-lg text-gray-500 mt-2">({currentWord.type})</p>
              </div>
              {/* Back of Card */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center bg-blue-100 rounded-lg p-6">
                <h2 className="text-5xl font-bold text-secondary">{currentWord.korean}</h2>
                <p className="text-lg text-gray-500 mt-2">[{currentWord.pronunciation}]</p>
                <button
                  onClick={(e) => { e.stopPropagation(); speakWord(currentWord.korean); }}
                  className="mt-4 text-primary hover:text-orange-700"
                >
                  <Volume2 size={28} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-primary h-2 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>

            <div className="flex justify-between items-center">
              <button onClick={prevCard} disabled={currentCardIndex === 0} className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50">
                <ChevronLeft />
              </button>
              <p className="font-semibold">{currentCardIndex + 1} / {selectedLesson.words.length}</p>
              <button onClick={nextCard} disabled={currentCardIndex === selectedLesson.words.length - 1} className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <SEO title={seo.title} description={seo.description} />
      <FlashcardModal />

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Từ vựng tiếng Hàn</h1>
          <p className="mt-2 text-lg text-gray-600">Học theo lộ trình Tiếng Hàn Tổng Hợp</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* --- Sidebar --- */}
          <aside className="lg:w-1/3 xl:w-1/4 lg:sticky lg:top-8 self-start bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-secondary mb-4">Lộ trình học</h2>
            
            {/* Level Selector */}
            <div className="space-y-2 mb-6">
              {Object.entries(vocabularyData).map(([key, { title }]) => (
                <button
                  key={key}
                  onClick={() => setSelectedLevel(key)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                    selectedLevel === key 
                      ? 'bg-primary text-white shadow-sm' 
                      : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-primary'
                  }`}
                >
                  {getHeaderText(key)}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Tìm từ vựng..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition"
              />
            </div>
            
            {/* Lesson List */}
            {currentLevelData && (
              <nav className="space-y-1 max-h-[50vh] overflow-y-auto">
                {Object.entries(currentLevelData.lessons).map(([key, lesson]) => (
                  <a
                    key={key}
                    href={`#${key}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedLessonKey(key);
                      setSearchTerm(''); // Clear search when a lesson is clicked
                    }}
                    className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      selectedLessonKey === key && !searchTerm
                        ? 'bg-orange-100 text-primary font-bold'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {lesson.title}
                  </a>
                ))}
              </nav>
            )}
          </aside>

          {/* --- Main Content --- */}
          <main className="flex-1 min-w-0">
            {searchTerm.trim() ? (
              // Search Results View
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Kết quả tìm kiếm cho "{searchTerm}"</h2>
                {searchResults.length > 0 ? (
                  <div className="space-y-4">
                    {searchResults.map((word, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-bold text-lg text-primary">{word.korean}</p>
                          <p className="text-gray-600">{word.meaning}</p>
                          <p className="text-sm text-gray-400">[{word.pronunciation}] - ({word.type})</p>
                          <span 
                            className="text-xs text-blue-500 cursor-pointer hover:underline"
                            onClick={() => {
                              setSelectedLevel(Object.keys(vocabularyData).find(l => vocabularyData[l].lessons[word.lessonKey]));
                              setSelectedLessonKey(word.lessonKey);
                              setSearchTerm('');
                            }}
                          >
                           Bài: {word.lessonTitle}
                          </span>
                        </div>
                        <button onClick={() => speakWord(word.korean)} className="text-gray-500 hover:text-primary">
                          <Volume2 />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">Không tìm thấy từ vựng nào phù hợp.</p>
                )}
              </div>
            ) : (
              // Lesson Detail View
              selectedLesson && (
                <div id={selectedLessonKey} className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                  <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-secondary">{selectedLesson.title}</h2>
                      <p className="mt-1 text-gray-500">
                        {getHeaderText()} - {selectedLesson.words.length} từ vựng
                      </p>
                    </div>
                    <button 
                      onClick={() => setIsFlashcardMode(true)}
                      className="mt-4 sm:mt-0 flex items-center gap-2 bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      <Zap size={18} />
                      Học với Flashcard
                    </button>
                  </header>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedLesson.words.map((word, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                        <div>
                          <p className="font-bold text-lg text-primary">{word.korean}</p>
                          <p className="text-gray-600">{word.meaning}</p>
                          <p className="text-sm text-gray-400">[{word.pronunciation}]</p>
                        </div>
                        <button onClick={() => speakWord(word.korean)} className="text-gray-500 hover:text-primary p-2">
                          <Volume2 />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
            {/* Google AdSense Banner */}
            <div className="mt-8">
              <AdsenseAd style={{ display: 'block', width: '100%' }} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Vocabulary; 