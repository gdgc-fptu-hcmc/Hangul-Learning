import React, { useState, useMemo, useEffect, useCallback } from 'react';
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

// Sample words for demo - in real app this would come from API/database
const sampleWords = {
  level1: [
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
  ],
  level2: [
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
  ],
  level3: [
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

// Cache for generated lesson data to avoid recreating
const lessonDataCache = new Map();

// Function to generate vocabulary for a level lazily
const generateVocabularyLevel = (level, titles, baseWords) => {
  const cacheKey = `${level}_vocabulary`;
  
  if (lessonDataCache.has(cacheKey)) {
    return lessonDataCache.get(cacheKey);
  }

  const vocabularyLevel = {};
  for (let i = 1; i <= 15; i++) {
    vocabularyLevel[`lesson${i}`] = {
      title: titles[i-1] || `Bài ${i}`,
      words: baseWords
    };
  }
  
  lessonDataCache.set(cacheKey, vocabularyLevel);
  return vocabularyLevel;
};

// Lazy vocabulary data generator
const getVocabularyData = () => {
  const cacheKey = 'complete_vocabulary_data';
  
  if (lessonDataCache.has(cacheKey)) {
    return lessonDataCache.get(cacheKey);
  }

  const data = {
    level1: {
      title: "Tiếng Hàn Tổng Hợp - Sơ cấp 1",
      lessons: generateVocabularyLevel('level1', level1Titles, sampleWords.level1)
    },
    level2: {
      title: "Tiếng Hàn Tổng Hợp - Sơ cấp 2",
      lessons: generateVocabularyLevel('level2', level2Titles, sampleWords.level2)
    },
    level3: {
      title: "Tiếng Hàn Tổng Hợp - Trung cấp 1",
      lessons: generateVocabularyLevel('level3', level3Titles, sampleWords.level3)
    }
  };

  lessonDataCache.set(cacheKey, data);
  return data;
};

function Vocabulary() {
  const [selectedLevel, setSelectedLevel] = useState('level1');
  const [selectedLessonKey, setSelectedLessonKey] = useState('lesson1');
  const [searchTerm, setSearchTerm] = useState('');

  const [isFlashcardMode, setIsFlashcardMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isSpeechReady, setIsSpeechReady] = useState(false);
  const [speechCache, setSpeechCache] = useState({ voices: [], preferredVoice: null });
  const [isFlipping, setIsFlipping] = useState(false);

  // Get vocabulary data with memoization - this prevents recreating data on every render
  const vocabularyData = useMemo(() => {
    const data = getVocabularyData();
    setIsDataLoaded(true);
    return data;
  }, []);

  // Preload speech synthesis voices and initialize TTS engine
  useEffect(() => {
    const initializeSpeech = () => {
      if (!('speechSynthesis' in window)) {
        console.warn('Speech synthesis not supported');
        return;
      }

      const synth = window.speechSynthesis;
      
      const loadVoices = () => {
        const allVoices = synth.getVoices();
        const koreanVoices = allVoices.filter((v) => v.lang && v.lang.startsWith('ko'));
        
        // Find the best Korean voice
        const preferredVoice = koreanVoices.find((v) => 
          /Google|Microsoft|Apple|Naver|Kakao/i.test(v.name)
        ) || koreanVoices[0];

        setSpeechCache({
          voices: koreanVoices,
          preferredVoice: preferredVoice
        });

        // Initialize TTS engine with a silent utterance to "warm up" the system
        if (preferredVoice) {
          const warmUpUtterance = new SpeechSynthesisUtterance('');
          warmUpUtterance.lang = 'ko-KR';
          warmUpUtterance.voice = preferredVoice;
          warmUpUtterance.volume = 0; // Silent
          warmUpUtterance.onend = () => {
            setIsSpeechReady(true);
          };
          warmUpUtterance.onerror = () => {
            setIsSpeechReady(true); // Set ready even on error
          };
          
          synth.speak(warmUpUtterance);
        } else {
          setIsSpeechReady(true);
        }
      };

      // Load voices immediately if available
      if (synth.getVoices().length > 0) {
        loadVoices();
      } else {
        // Wait for voices to be loaded
        synth.onvoiceschanged = loadVoices;
      }
    };

    // Initialize speech after component mounts
    const timer = setTimeout(initializeSpeech, 100);
    return () => clearTimeout(timer);
  }, []);

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

  const currentLevelData = useMemo(() => 
    vocabularyData[selectedLevel], [vocabularyData, selectedLevel]
  );
  
  const selectedLesson = useMemo(() => 
    currentLevelData?.lessons[selectedLessonKey], [currentLevelData, selectedLessonKey]
  );

  const allWordsForLevel = useMemo(() => {
    if (!currentLevelData?.lessons) return [];
    return Object.entries(currentLevelData.lessons).flatMap(([lessonKey, lesson]) =>
      lesson.words.map(word => ({ ...word, lessonTitle: lesson.title, lessonKey }))
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

  const speakWord = useCallback((text) => {
    if (!('speechSynthesis' in window) || !text.trim()) return;
    
    const synth = window.speechSynthesis;
    
    // Cancel any ongoing speech
    synth.cancel();
    
    // Use cached voice for instant speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.9; // Slightly slower for better pronunciation
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    // Use cached preferred voice if available
    if (speechCache.preferredVoice) {
      utterance.voice = speechCache.preferredVoice;
    }
    
    // Add error handling
    utterance.onerror = (event) => {
      console.warn('Speech synthesis error:', event.error);
    };
    
    synth.speak(utterance);
  }, [speechCache.preferredVoice]);

  // Enhanced 3D card flip - Smooth and natural for both directions
  const handleCardFlip = useCallback((event) => {
    // Check if click is on audio button - don't flip if so
    if (event.target.closest('button[title*="Phát âm"]') || 
        event.target.closest('button[disabled]')) {
      return;
    }
    
    if (isFlipping) return; // Prevent multiple clicks during animation
    
    setIsFlipping(true);
    
    // 3D flip with direction-specific animation
    setIsFlipped(prevFlipped => !prevFlipped);
    
    // Reset flipping state after animation completes
    setTimeout(() => {
      setIsFlipping(false);
    }, 600); // Match CSS animation duration (0.6s)
  }, [isFlipping]);

  // Flashcard controls - Simple navigation
  const nextCard = useCallback(() => {
    if (selectedLesson && currentCardIndex < selectedLesson.words.length - 1 && !isFlipping) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  }, [selectedLesson, currentCardIndex, isFlipping]);

  const prevCard = useCallback(() => {
    if (selectedLesson && currentCardIndex > 0 && !isFlipping) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  }, [selectedLesson, currentCardIndex, isFlipping]);

  // Reset flip state when changing cards via navigation
  useEffect(() => {
    // Small delay to ensure this only affects navigation, not user clicks
    const timer = setTimeout(() => {
      setIsFlipped(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [currentCardIndex]);

  const getHeaderText = useCallback((level = selectedLevel) => {
    switch(level) {
      case 'level1': return 'Sơ cấp 1';
      case 'level2': return 'Sơ cấp 2';
      case 'level3': return 'Trung cấp 1';
      default: return '';
    }
  }, [selectedLevel]);

  const buildSeo = useMemo(() => {
    const title = `Từ vựng tiếng Hàn ${getHeaderText()} | Hangul Learning`;
    const description = `Học từ vựng tiếng Hàn cấp độ ${getHeaderText()} theo từng bài trong sách Tiếng Hàn Tổng Hợp.`;
    return { title, description };
  }, [getHeaderText]);

  const seo = buildSeo;

  // Enhanced Flashcard Modal Component with Beautiful Design
  const FlashcardModal = () => {
    if (!isFlashcardMode || !selectedLesson) return null;

    const currentWord = selectedLesson.words[currentCardIndex];
    const progress = ((currentCardIndex + 1) / selectedLesson.words.length) * 100;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-start justify-center z-50 pt-4 pb-4 px-4 backdrop-blur-sm">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden relative mt-8">
          {/* Close Button */}
          <button 
            onClick={() => setIsFlashcardMode(false)} 
            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-red-500 hover:rotate-90 transition-all duration-300 p-2 rounded-full hover:bg-red-50"
          >
            <X size={28} />
          </button>
          
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-primary via-orange-500 to-orange-600 rounded-t-3xl text-white">
            <div className="text-center">
              <h3 className="font-bold text-xl mb-1">{selectedLesson.title}</h3>
              <p className="text-sm opacity-90">{getHeaderText()}</p>
              <div className="mt-3 flex items-center justify-center gap-2 text-sm">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  {currentCardIndex + 1} / {selectedLesson.words.length}
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced 3D Card Container */}
          <div className="p-6">
            <div 
              className={`card-flip-container w-full h-80 ${isFlipping ? 'pointer-events-none cursor-wait' : 'cursor-pointer'}`}
              onClick={handleCardFlip}
            >
              <div className={`card-flip-inner ${isFlipped ? 'flipped' : ''} ${isFlipping ? (isFlipped ? 'flipping-forward' : 'flipping-backward') : ''}`}>
                {/* Front of Card - Vietnamese Meaning */}
                <div className="card-face card-face-front flex flex-col justify-between p-6 shadow-2xl">
                  <div className="text-center">
                    <span className="text-sm text-primary bg-primary bg-opacity-10 px-4 py-2 rounded-full font-semibold inline-block">
                      Nghĩa tiếng Việt
                    </span>
                  </div>
                  
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">{currentWord.meaning}</h2>
                    <div className="text-xl text-gray-600 bg-gray-50 px-6 py-3 rounded-2xl inline-block">
                      ({currentWord.type})
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-xl flex items-center justify-center gap-2 inline-flex">
                      {isFlipping ? 'Đang xoay thẻ...' : 'Nhấn để xem tiếng Hàn'}
                    </p>
                  </div>
                </div>

                {/* Back of Card - Korean Word */}
                <div className="card-face card-face-back flex flex-col justify-between p-6 shadow-2xl">
                  <div className="text-center">
                    <span className="text-xs text-blue-700 bg-blue-100 px-3 py-1 rounded-full font-medium inline-block">
                      한국어
                    </span>
                  </div>
                  
                  <div className="text-center flex-1 flex flex-col justify-center space-y-6">
                    <h2 className="text-6xl font-bold text-blue-800 tracking-wide leading-tight">{currentWord.korean}</h2>
                    <div className="flex justify-center">
                      <p className="text-lg text-blue-600 font-mono bg-blue-50 px-3 py-2 rounded-xl inline-block">
                        {currentWord.pronunciation}
                      </p>
                    </div>
                    
                    {/* Enhanced Audio Button */}
                    <div className="flex justify-center">
                      <button
                        onClick={(e) => { e.stopPropagation(); speakWord(currentWord.korean); }}
                        className={`group px-5 py-2 rounded-xl font-semibold text-sm transition-all duration-300 inline-flex items-center gap-2 ${
                          isSpeechReady 
                            ? 'bg-gradient-to-r from-primary to-orange-600 text-white hover:scale-105 shadow-md hover:shadow-lg active:scale-95 transform' 
                            : 'bg-gray-300 text-gray-500 cursor-wait'
                        }`}
                        disabled={!isSpeechReady}
                        title={isSpeechReady ? 'Phát âm từ này' : 'Đang tải giọng đọc...'}
                      >
                        {isSpeechReady ? (
                          <>
                            <Volume2 size={20} className="group-hover:animate-pulse" />
                            <span>Phát âm</span>
                          </>
                        ) : (
                          <>
                            <div className="relative">
                              <Volume2 size={20} className="opacity-50" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-primary"></div>
                              </div>
                            </div>
                            <span>Đang tải...</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xs text-blue-600 bg-blue-50 px-3 py-2 rounded-lg inline-flex items-center gap-1">
                      <span></span> Nhấn để xoay lại
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Progress and Enhanced Controls */}
          <div className="px-6 pb-6">
            {/* Enhanced Progress Bar with Glow Effect */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">Tiến độ học</span>
                <span className="text-sm font-bold text-primary">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                <div 
                  className="bg-gradient-to-r from-primary via-orange-500 to-orange-600 h-3 rounded-full transition-all duration-500 ease-out animate-progress-glow"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Simple Navigation Controls */}
            <div className="flex justify-between items-center">
              <button 
                onClick={prevCard} 
                disabled={currentCardIndex === 0} 
                className={`group flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-base transition-all duration-300 ${
                  currentCardIndex === 0 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-primary hover:to-orange-600 hover:text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transform'
                }`}
              >
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">Trước</span>
              </button>
              
              {/* Center instruction */}
              <div className="text-center px-4">
                <p className="text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded-lg inline-block">
                  <span className="hidden sm:inline">Nhấn vào thẻ để lật</span>
                  <span className="sm:hidden">Nhấn thẻ</span>
                </p>
              </div>
              
              <button 
                onClick={nextCard} 
                disabled={currentCardIndex === selectedLesson.words.length - 1} 
                className={`group flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-base transition-all duration-300 ${
                  currentCardIndex === selectedLesson.words.length - 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-primary hover:to-orange-600 hover:text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transform'
                }`}
              >
                <span className="hidden sm:inline">Tiếp theo</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Stats */}
            <div className="mt-4 flex justify-center">
              <div className="bg-gray-50 rounded-xl px-4 py-2 inline-block">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-gray-600">
                    <strong className="text-gray-800">{currentCardIndex + 1}</strong> / {selectedLesson.words.length}
                  </span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-600">
                    <strong className="text-primary">{selectedLesson.title}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Show loading indicator if data is not loaded yet
  if (!isDataLoaded) {
    return (
      <div className="min-h-screen bg-light-gray flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-lg text-text-light">Đang tải từ vựng...</p>
          {isSpeechReady ? (
            <p className="mt-2 text-sm text-green-600">Giọng đọc đã sẵn sàng</p>
          ) : (
            <p className="mt-2 text-sm text-gray-500">Đang tải giọng đọc...</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <div className="min-h-screen bg-light-gray p-4 sm:p-6 lg:p-8">
        <FlashcardModal />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight">
              Từ vựng tiếng Hàn
            </h1>
            <p className="mt-3 text-lg text-text-light max-w-2xl mx-auto">
              Học theo lộ trình Tiếng Hàn Tổng Hợp.
            </p>
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
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Kết quả tìm kiếm cho "{searchTerm}"</h2>
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
                          <button 
                            onClick={() => speakWord(word.korean)} 
                            className={`transition-colors duration-200 ${
                              isSpeechReady 
                                ? 'text-gray-500 hover:text-primary cursor-pointer' 
                                : 'text-gray-300 cursor-wait'
                            }`}
                            disabled={!isSpeechReady}
                            title={isSpeechReady ? 'Phát âm từ này' : 'Đang tải giọng đọc...'}
                          >
                            {isSpeechReady ? (
                              <Volume2 />
                            ) : (
                              <div className="relative">
                                <Volume2 className="opacity-50" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-primary"></div>
                                </div>
                              </div>
                            )}
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
                  <div id={selectedLessonKey} className="bg-white p-6 rounded-2xl shadow-lg">
                    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                      <div>
                        <h2 className="text-3xl font-bold text-secondary">{selectedLesson.title}</h2>
                        <p className="mt-1 text-gray-500">
                          {getHeaderText()} - {selectedLesson.words.length} từ vựng
                        </p>
                      </div>
                      <button 
                        onClick={() => {
                          setIsFlashcardMode(true);
                          setIsFlipped(false); // Reset to front when opening flashcard
                          setCurrentCardIndex(0); // Start from first card
                        }}
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
                          <button 
                            onClick={() => speakWord(word.korean)} 
                            className={`p-2 transition-colors duration-200 ${
                              isSpeechReady 
                                ? 'text-gray-500 hover:text-primary cursor-pointer' 
                                : 'text-gray-300 cursor-wait'
                            }`}
                            disabled={!isSpeechReady}
                            title={isSpeechReady ? 'Phát âm từ này' : 'Đang tải giọng đọc...'}
                          >
                            {isSpeechReady ? (
                              <Volume2 />
                            ) : (
                              <div className="relative">
                                <Volume2 className="opacity-50" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-primary"></div>
                                </div>
                              </div>
                            )}
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
    </>
  );
}

export default Vocabulary; 