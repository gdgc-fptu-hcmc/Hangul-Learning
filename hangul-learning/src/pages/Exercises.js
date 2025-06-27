import React, { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import AdsenseAd from '../components/AdsenseAd';
import { Volume2, VolumeX, Headphones, BookOpen, PenTool, CheckCircle, XCircle, RotateCcw, Pause, SkipForward, Award } from 'lucide-react';

function Exercises() {
  // Exercise types
  const EXERCISE_TYPES = {
    LISTENING: 'listening',
    READING: 'reading', 
    WRITING: 'writing'
  };

  // Vocabulary data for exercises (from Vocabulary.js)
  const vocabularyData = useMemo(() => ({
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
      { korean: "날씨", pronunciation: "nal-ssi", meaning: "Thời tiết", type: "명사" }
    ],
    level2: [
      { korean: "가져오다", pronunciation: "ga-jyeo-o-da", meaning: "mang đến", type: "동사" },
      { korean: "걱정", pronunciation: "geok-jeong", meaning: "lo lắng", type: "명사" },
      { korean: "먼저", pronunciation: "meon-jeo", meaning: "trước tiên", type: "부사" },
      { korean: "명함", pronunciation: "myeong-ham", meaning: "danh thiếp", type: "명사" },
      { korean: "사용하다", pronunciation: "sa-yong-ha-da", meaning: "sử dụng", type: "동사" }
    ]
  }), []);

  // Grammar examples for exercises (from Grammar.js)
  const grammarData = useMemo(() => ({
    basic: [
      { korean: "저는 베트남 사람입니다.", vietnamese: "Tôi là người Việt Nam.", grammar: "입니다" },
      { korean: "여기는 교실입니다.", vietnamese: "Đây là lớp học.", grammar: "입니다" },
      { korean: "선생님입니까?", vietnamese: "Anh/chị có phải là giáo viên không?", grammar: "입니까" },
      { korean: "거기가 역입니까?", vietnamese: "Kia có phải là ga tàu không?", grammar: "입니까" },
      { korean: "저는 학생입니다.", vietnamese: "Tôi là sinh viên.", grammar: "은/는" },
      { korean: "오늘은 날씨가 좋아요.", vietnamese: "Hôm nay thời tiết đẹp.", grammar: "은/는" },
      { korean: "여기가 도서관입니다.", vietnamese: "Đây là thư viện.", grammar: "여기/거기/저기" },
      { korean: "거기가 회사예요?", vietnamese: "Đó có phài công ty không?", grammar: "여기/거기/저기" },
      { korean: "이것은 무엇입니까?", vietnamese: "Đây là cái gì?", grammar: "이것/그것/저것" },
      { korean: "그것은 제 가방이에요.", vietnamese: "Đó là cặp của tôi.", grammar: "이것/그것/저것" }
    ]
  }), []);

  // Exercise data structure
  const exerciseData = useMemo(() => ({
    // LISTENING EXERCISES
    listening_basic: {
      title: 'Luyện nghe từ vựng cơ bản',
      type: EXERCISE_TYPES.LISTENING,
      level: 'Sơ cấp 1',
      description: 'Nghe và chọn nghĩa đúng của từ vựng',
      questions: vocabularyData.level1.slice(0, 10).map(word => ({
        id: `listen_${word.korean}`,
        audioText: word.korean,
        question: `Từ bạn vừa nghe có nghĩa là gì?`,
        options: [
          word.meaning,
          vocabularyData.level1[Math.floor(Math.random() * vocabularyData.level1.length)].meaning,
          vocabularyData.level1[Math.floor(Math.random() * vocabularyData.level1.length)].meaning,
          vocabularyData.level1[Math.floor(Math.random() * vocabularyData.level1.length)].meaning
        ].filter((option, index, arr) => arr.indexOf(option) === index).slice(0, 4),
        correctAnswer: 0,
        explanation: `"${word.korean}" có nghĩa là "${word.meaning}"`
      }))
    },

    listening_grammar: {
      title: 'Luyện nghe câu ngữ pháp',
      type: EXERCISE_TYPES.LISTENING,
      level: 'Sơ cấp 1',
      description: 'Nghe câu và chọn bản dịch đúng',
      questions: grammarData.basic.slice(0, 8).map((sentence, index) => ({
        id: `listen_grammar_${index}`,
        audioText: sentence.korean,
        question: `Câu bạn vừa nghe có nghĩa là gì?`,
        options: [
          sentence.vietnamese,
          grammarData.basic[Math.floor(Math.random() * grammarData.basic.length)].vietnamese,
          grammarData.basic[Math.floor(Math.random() * grammarData.basic.length)].vietnamese,
          grammarData.basic[Math.floor(Math.random() * grammarData.basic.length)].vietnamese
        ].filter((option, index, arr) => arr.indexOf(option) === index).slice(0, 4),
        correctAnswer: 0,
        explanation: `"${sentence.korean}" có nghĩa là "${sentence.vietnamese}"`
      }))
    },

    // READING EXERCISES
    reading_vocabulary: {
      title: 'Đọc hiểu từ vựng',
      type: EXERCISE_TYPES.READING,
      level: 'Sơ cấp 1',
      description: 'Đọc từ tiếng Hàn và chọn nghĩa đúng',
      questions: vocabularyData.level1.slice(5, 15).map(word => ({
        id: `read_vocab_${word.korean}`,
        passage: word.korean,
        question: `Từ "${word.korean}" có nghĩa là gì?`,
        options: [
          word.meaning,
          vocabularyData.level1[Math.floor(Math.random() * vocabularyData.level1.length)].meaning,
          vocabularyData.level1[Math.floor(Math.random() * vocabularyData.level1.length)].meaning,
          vocabularyData.level1[Math.floor(Math.random() * vocabularyData.level1.length)].meaning
        ].filter((option, index, arr) => arr.indexOf(option) === index).slice(0, 4),
        correctAnswer: 0,
        explanation: `"${word.korean}" nghĩa là "${word.meaning}"`
      }))
    },

    reading_comprehension: {
      title: 'Đọc hiểu đoạn văn',
      type: EXERCISE_TYPES.READING,
      level: 'Sơ cấp 1',
      description: 'Đọc đoạn văn và trả lời câu hỏi',
      questions: [
        {
          id: 'read_comp_1',
          passage: '저는 김민수입니다. 한국 사람이에요. 서울에 살아요. 대학생이에요. 한국어를 공부해요.',
          question: 'Kim Min-su là ai?',
          options: [
            'Sinh viên đại học người Hàn sống ở Seoul',
            'Giáo viên người Nhật sống ở Tokyo', 
            'Bác sĩ người Trung Quốc sống ở Bắc Kinh',
            'Kỹ sư người Việt sống ở Hà Nội'
          ],
          correctAnswer: 0,
          explanation: 'Trong đoạn văn có: "한국 사람이에요" (là người Hàn), "서울에 살아요" (sống ở Seoul), "대학생이에요" (là sinh viên đại học)'
        },
        {
          id: 'read_comp_2',
          passage: '오늘은 날씨가 좋아요. 친구와 공원에 가요. 공원에서 음식을 먹어요. 정말 즐거워요.',
          question: 'Hôm nay họ làm gì?',
          options: [
            'Đi công viên với bạn và ăn uống',
            'Ở nhà xem phim',
            'Đi học ở trường',
            'Đi làm ở công ty'
          ],
          correctAnswer: 0,
          explanation: '"친구와 공원에 가요" (đi công viên với bạn), "공원에서 음식을 먹어요" (ăn ở công viên)'
        }
      ]
    },

    // WRITING EXERCISES
    writing_translation: {
      title: 'Dịch từ tiếng Việt sang tiếng Hàn',
      type: EXERCISE_TYPES.WRITING,
      level: 'Sơ cấp 1',
      description: 'Dịch câu tiếng Việt sang tiếng Hàn',
      questions: [
        {
          id: 'write_trans_1',
          prompt: 'Dịch câu sau sang tiếng Hàn: "Tôi là sinh viên"',
          correctAnswers: ['저는 학생입니다', '저는 학생이에요', '나는 학생이다'],
          hints: ['Sử dụng "저는" hoặc "나는" cho "tôi"', 'Sử dụng "학생" cho "sinh viên"', 'Kết thúc với "입니다", "이에요" hoặc "이다"'],
          explanation: 'Câu trả lời đúng: "저는 학생입니다" (trang trọng) hoặc "저는 학생이에요" (thân mật-lịch sự)'
        },
        {
          id: 'write_trans_2', 
          prompt: 'Dịch câu: "Đây là trường học"',
          correctAnswers: ['여기는 학교입니다', '여기가 학교입니다', '이곳은 학교입니다'],
          hints: ['Sử dụng "여기" cho "đây"', 'Sử dụng "학교" cho "trường học"', 'Có thể dùng "는" hoặc "가"'],
          explanation: 'Câu trả lời đúng: "여기는 학교입니다" hoặc "여기가 학교입니다"'
        },
        {
          id: 'write_trans_3',
          prompt: 'Dịch câu: "Cảm ơn bạn"',
          correctAnswers: ['고맙습니다', '감사합니다', '고마워요', '감사해요'],
          hints: ['Có nhiều cách nói "cảm ơn"', '"고맙습니다" hoặc "감사합니다" trang trọng', '"고마워요" hoặc "감사해요" thân mật'],
          explanation: 'Các cách nói cảm ơn: "고맙습니다", "감사합니다" (trang trọng), "고마워요", "감사해요" (thân mật)'
        }
      ]
    },

    writing_grammar: {
      title: 'Luyện viết ngữ pháp',
      type: EXERCISE_TYPES.WRITING,
      level: 'Sơ cấp 1', 
      description: 'Điền ngữ pháp vào chỗ trống',
      questions: [
        {
          id: 'write_grammar_1',
          prompt: 'Điền vào chỗ trống: "저___ 학생입니다" (Tôi là sinh viên)',
          correctAnswers: ['는', '는'],
          hints: ['Đây là trợ từ chủ đề', 'Sau "저" dùng trợ từ gì?'],
          explanation: 'Đáp án: "저는 학생입니다". "는" là trợ từ chủ đề đi sau "저"'
        },
        {
          id: 'write_grammar_2',
          prompt: 'Điền vào chỗ trống: "이것___ 무엇입니까?" (Đây là cái gì?)',
          correctAnswers: ['은', '은'],
          hints: ['Đây là trợ từ chủ đề', '"이것" kết thúc bằng phụ âm'],
          explanation: 'Đáp án: "이것은 무엇입니까?". "은" dùng sau từ kết thúc bằng phụ âm'
        }
      ]
    }
  }), [vocabularyData, grammarData, EXERCISE_TYPES.LISTENING, EXERCISE_TYPES.READING, EXERCISE_TYPES.WRITING]);

  // States
  const [selectedExerciseType, setSelectedExerciseType] = useState('listening_basic');
  const [gameState, setGameState] = useState('menu'); // 'menu', 'active', 'results'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioSpeed, setAudioSpeed] = useState(0.7); // Slow speed for beginners

  const currentExercise = exerciseData[selectedExerciseType];
  const currentQuestion = currentExercise?.questions[currentQuestionIndex];

  // Enhanced Text-to-Speech function with high-quality Korean voices
  const speakText = (text, speed = audioSpeed) => {
    if (!('speechSynthesis' in window)) return;
    
    const synth = window.speechSynthesis;
    
    const speak = () => {
      // Cancel any ongoing speech
      synth.cancel();
      
      // Get all Korean voices and prioritize high-quality ones
      const voices = synth.getVoices().filter((v) => v.lang && v.lang.startsWith('ko'));
      
      // Prioritize premium voices from Google, Microsoft, Apple, Naver, Kakao
      const preferredVoice = voices.find((v) => 
        /Google|Microsoft|Apple|Naver|Kakao|Samsung/i.test(v.name)
      ) || voices[0];
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set Korean language explicitly
      utterance.lang = 'ko-KR';
      
      // Use the best available Korean voice
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      // Set speech parameters optimized for learning
      utterance.rate = speed; // Adjustable speed for beginners
      utterance.pitch = 1.0; // Natural pitch
      utterance.volume = 1.0; // Full volume
      
      // Set up event handlers
      utterance.onstart = () => setIsAudioPlaying(true);
      utterance.onend = () => setIsAudioPlaying(false);
      utterance.onerror = () => {
        setIsAudioPlaying(false);
        console.warn('Speech synthesis error occurred');
      };
      
      synth.speak(utterance);
    };
    
    // Handle voices loading asynchronously
    if (synth.getVoices().length) {
      speak();
    } else {
      synth.onvoiceschanged = speak;
    }
  };

  // Stop audio with proper cleanup
  const stopAudio = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsAudioPlaying(false);
    }
  };



  // Start exercise
  const startExercise = (exerciseKey) => {
    setSelectedExerciseType(exerciseKey);
    setGameState('active');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setUserAnswer('');
    setShowExplanation(false);
  };

  // Handle answer selection (for multiple choice)
  const handleAnswerSelect = (selectedIndex) => {
    const isCorrect = selectedIndex === currentQuestion.correctAnswer;
    const newAnswer = {
      questionId: currentQuestion.id,
      userAnswer: selectedIndex,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect
    };
    setAnswers([...answers, newAnswer]);
    setShowExplanation(true);
  };

  // Handle text input (for writing exercises)
  const handleTextSubmit = () => {
    if (!userAnswer.trim()) return;
    
    const isCorrect = currentQuestion.correctAnswers.some(answer => 
      userAnswer.trim().toLowerCase() === answer.toLowerCase()
    );
    
    const newAnswer = {
      questionId: currentQuestion.id,
      userAnswer: userAnswer.trim(),
      correctAnswer: currentQuestion.correctAnswers[0],
      isCorrect
    };
    setAnswers([...answers, newAnswer]);
    setShowExplanation(true);
  };

  // Next question
  const nextQuestion = () => {
    if (currentQuestionIndex < currentExercise.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
      setShowExplanation(false);
      stopAudio();
    } else {
      setGameState('results');
      stopAudio();
    }
  };

  // Reset exercise
  const resetExercise = () => {
    setGameState('menu');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setUserAnswer('');
    setShowExplanation(false);
    stopAudio();
  };

  // Calculate score
  const getScore = () => {
    const correctCount = answers.filter(a => a.isCorrect).length;
    const totalCount = answers.length;
    return { correct: correctCount, total: totalCount, percentage: Math.round((correctCount / totalCount) * 100) };
  };

  // Render main menu
  const renderMenu = () => (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
          Luyện tập kỹ năng
        </h1>
        <p className="text-lg text-text-light max-w-2xl mx-auto">
          Luyện tập 3 kỹ năng quan trọng: Nghe, Đọc và Viết với nội dung từ Grammar và Vocabulary
        </p>
      </div>

      {/* Exercise Categories */}
      <div className="grid gap-8 mb-8">
        {/* Listening Exercises */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Headphones className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Luyện nghe</h2>
              <p className="text-gray-600">Cải thiện kỹ năng nghe với tốc độ chậm</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => startExercise('listening_basic')}
              className="p-4 border-2 border-blue-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 text-left"
            >
              <h3 className="font-semibold text-blue-800 mb-2">Nghe từ vựng cơ bản</h3>
              <p className="text-sm text-gray-600 mb-2">Nghe và chọn nghĩa đúng của từ vựng</p>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">10 câu hỏi</span>
            </button>
            <button
              onClick={() => startExercise('listening_grammar')}
              className="p-4 border-2 border-blue-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 text-left"
            >
              <h3 className="font-semibold text-blue-800 mb-2">Nghe câu ngữ pháp</h3>
              <p className="text-sm text-gray-600 mb-2">Nghe câu và chọn bản dịch đúng</p>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">8 câu hỏi</span>
            </button>
          </div>
        </div>

        {/* Reading Exercises */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="w-8 h-8 text-green-600 mr-3" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Luyện đọc</h2>
              <p className="text-gray-600">Phát triển kỹ năng đọc hiểu</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => startExercise('reading_vocabulary')}
              className="p-4 border-2 border-green-200 rounded-xl hover:border-green-400 hover:bg-green-50 transition-all duration-200 text-left"
            >
              <h3 className="font-semibold text-green-800 mb-2">Đọc hiểu từ vựng</h3>
              <p className="text-sm text-gray-600 mb-2">Đọc từ tiếng Hàn và chọn nghĩa đúng</p>
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">10 câu hỏi</span>
            </button>
            <button
              onClick={() => startExercise('reading_comprehension')}
              className="p-4 border-2 border-green-200 rounded-xl hover:border-green-400 hover:bg-green-50 transition-all duration-200 text-left"
            >
              <h3 className="font-semibold text-green-800 mb-2">Đọc hiểu đoạn văn</h3>
              <p className="text-sm text-gray-600 mb-2">Đọc đoạn văn và trả lời câu hỏi</p>
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">2 câu hỏi</span>
            </button>
          </div>
        </div>

        {/* Writing Exercises */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <PenTool className="w-8 h-8 text-purple-600 mr-3" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Luyện viết</h2>
              <p className="text-gray-600">Rèn luyện kỹ năng viết tiếng Hàn</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => startExercise('writing_translation')}
              className="p-4 border-2 border-purple-200 rounded-xl hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 text-left"
            >
              <h3 className="font-semibold text-purple-800 mb-2">Dịch câu</h3>
              <p className="text-sm text-gray-600 mb-2">Dịch từ tiếng Việt sang tiếng Hàn</p>
              <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">3 câu hỏi</span>
            </button>
            <button
              onClick={() => startExercise('writing_grammar')}
              className="p-4 border-2 border-purple-200 rounded-xl hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 text-left"
            >
              <h3 className="font-semibold text-purple-800 mb-2">Luyện viết ngữ pháp</h3>
              <p className="text-sm text-gray-600 mb-2">Điền ngữ pháp vào chỗ trống</p>
              <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">2 câu hỏi</span>
            </button>
          </div>
        </div>
      </div>

      {/* Audio Settings */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">Cài đặt âm thanh</h3>
        
        {/* Speed Control */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Tốc độ phát</span>
            <span className="text-sm font-medium text-primary">{audioSpeed}x</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Chậm</span>
            <input
              type="range"
              min="0.5"
              max="1.5"
              step="0.1"
              value={audioSpeed}
              onChange={(e) => setAudioSpeed(parseFloat(e.target.value))}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm text-gray-600">Nhanh</span>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">Tốc độ chậm hơn giúp người mới bắt đầu dễ nghe và hiểu</p>
        </div>

        
      </div>
    </div>
  );

  // Render active exercise
  const renderActiveExercise = () => {
    if (!currentQuestion) return null;

    const isListening = currentExercise.type === EXERCISE_TYPES.LISTENING;
    const isReading = currentExercise.type === EXERCISE_TYPES.READING;
    const isWriting = currentExercise.type === EXERCISE_TYPES.WRITING;

    return (
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{currentExercise.title}</h2>
              <p className="text-gray-600">{currentExercise.description}</p>
            </div>
            <button
              onClick={resetExercise}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
          
          {/* Progress */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Câu hỏi {currentQuestionIndex + 1} / {currentExercise.questions.length}</span>
            <span>{currentExercise.level}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / currentExercise.questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Listening Exercise */}
          {isListening && (
            <div className="text-center mb-8">
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <Headphones className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <p className="text-lg text-gray-800 mb-6">{currentQuestion.question}</p>
                
                {/* Audio Controls */}
                <div className="flex items-center justify-center gap-4 mb-4">
                  <button
                    onClick={() => speakText(currentQuestion.audioText)}
                    disabled={isAudioPlaying}
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                  >
                    {isAudioPlaying ? (
                      <>
                        <VolumeX className="w-5 h-5" />
                        Đang phát...
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-5 h-5" />
                        Nghe
                      </>
                    )}
                  </button>
                  
                  {isAudioPlaying && (
                    <button
                      onClick={stopAudio}
                      className="flex items-center gap-2 bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Pause className="w-5 h-5" />
                      Dừng
                    </button>
                  )}
                </div>
                
                                 <p className="text-sm text-blue-600 font-medium">Tốc độ: {audioSpeed}x (Tối ưu cho người mới bắt đầu)</p>
              </div>
            </div>
          )}

          {/* Reading Exercise */}
          {isReading && (
            <div className="mb-8">
              <div className="bg-green-50 rounded-xl p-6 mb-6">
                <BookOpen className="w-8 h-8 text-green-600 mb-4" />
                {currentQuestion.passage && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Đọc đoạn văn sau:</h4>
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <p className="text-xl font-medium text-gray-800 leading-relaxed">
                        {currentQuestion.passage}
                      </p>
                    </div>
                  </div>
                )}
                <p className="text-lg text-gray-800">{currentQuestion.question}</p>
              </div>
            </div>
          )}

          {/* Writing Exercise */}
          {isWriting && (
            <div className="mb-8">
              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <PenTool className="w-8 h-8 text-purple-600 mb-4" />
                <p className="text-lg text-gray-800 mb-4">{currentQuestion.prompt}</p>
                
                {/* Hints */}
                {currentQuestion.hints && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                    <h5 className="text-sm font-medium text-yellow-800 mb-2">💡 Gợi ý:</h5>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      {currentQuestion.hints.map((hint, index) => (
                        <li key={index}>• {hint}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Text Input */}
                <div className="space-y-4">
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Nhập câu trả lời của bạn..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-lg"
                    disabled={showExplanation}
                  />
                  
                  {!showExplanation && (
                    <button
                      onClick={handleTextSubmit}
                      disabled={!userAnswer.trim()}
                      className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Kiểm tra đáp án
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Multiple Choice Options (for listening and reading) */}
          {(isListening || isReading) && !showExplanation && (
            <div className="grid gap-3 mb-6">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className="p-4 text-left border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-orange-50 transition-all duration-200"
                >
                  <span className="font-medium">{String.fromCharCode(65 + index)}. </span>
                  {option}
                </button>
              ))}
            </div>
          )}

          {/* Explanation */}
          {showExplanation && (
            <div className="space-y-4">
              {/* Result */}
              <div className={`p-4 rounded-lg flex items-center gap-3 ${
                answers[answers.length - 1]?.isCorrect 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                {answers[answers.length - 1]?.isCorrect ? (
                  <>
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="font-medium text-green-800">Chính xác!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6 text-red-600" />
                    <span className="font-medium text-red-800">Chưa chính xác</span>
                  </>
                )}
              </div>

              {/* Explanation */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-2">Giải thích:</h4>
                <p className="text-blue-700">{currentQuestion.explanation}</p>
              </div>

              {/* Next Button */}
              <div className="text-center">
                <button
                  onClick={nextQuestion}
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                >
                  {currentQuestionIndex < currentExercise.questions.length - 1 ? (
                    <>
                      Câu tiếp theo
                      <SkipForward className="w-5 h-5 ml-2 inline" />
                    </>
                  ) : (
                    'Xem kết quả'
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render results
  const renderResults = () => {
    const score = getScore();
    const isGoodScore = score.percentage >= 70;

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          {/* Score Display */}
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 ${
            isGoodScore ? 'bg-green-100' : 'bg-orange-100'
          }`}>
            <Award className={`w-12 h-12 ${isGoodScore ? 'text-green-600' : 'text-orange-600'}`} />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Kết quả luyện tập
          </h2>
          
          <div className="text-6xl font-bold mb-4">
            <span className={isGoodScore ? 'text-green-600' : 'text-orange-600'}>
              {score.percentage}%
            </span>
          </div>
          
          <p className="text-xl text-gray-600 mb-8">
            Bạn đã trả lời đúng {score.correct}/{score.total} câu
          </p>

          {/* Performance Message */}
          <div className={`p-4 rounded-lg mb-8 ${
            isGoodScore ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'
          }`}>
            <p className={`font-medium ${isGoodScore ? 'text-green-800' : 'text-orange-800'}`}>
              {isGoodScore 
                ? '🎉 Xuất sắc! Bạn đã làm rất tốt!' 
                : '💪 Hãy tiếp tục luyện tập để cải thiện!'
              }
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => startExercise(selectedExerciseType)}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              <RotateCcw className="w-5 h-5 mr-2 inline" />
              Làm lại
            </button>
            <button
              onClick={resetExercise}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              Chọn bài khác
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <SEO 
        title="Luyện tập kỹ năng Tiếng Hàn - Nghe, Đọc, Viết" 
        description="Luyện tập 3 kỹ năng quan trọng: Nghe, Đọc và Viết với nội dung từ Grammar và Vocabulary. Có âm thanh chậm cho người mới bắt đầu."
      />
      
      <div className="min-h-screen bg-light-gray py-8">
        <div className="container mx-auto px-4">
          {gameState === 'menu' && renderMenu()}
          {gameState === 'active' && renderActiveExercise()}
          {gameState === 'results' && renderResults()}
          
          {/* AdSense */}
          <div className="mt-12">
            <AdsenseAd style={{ display: 'block', width: '100%' }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Exercises; 