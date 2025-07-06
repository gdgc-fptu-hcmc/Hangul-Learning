import React, { useState, useMemo, useEffect, useCallback } from 'react';
import SEO from '../components/SEO';
import AdsenseAd from '../components/AdsenseAd';
import { Volume2, VolumeX, Headphones, BookOpen, PenTool, CheckCircle, XCircle, RotateCcw, Pause, SkipForward, Award } from 'lucide-react';

// Thư mục: src/pages/Exercises.js
// Component Exercises: trang luyện tập các kỹ năng Nghe, Đọc, Viết, Chính tả với giao diện tương tác và phản hồi âm thanh
function Exercises() {
  // Exercise types
  const EXERCISE_TYPES = {
    LISTENING: 'listening',
    READING: 'reading', 
    WRITING: 'writing',
    DICTATION: 'dictation'
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



  // Exercise data structure
  const exerciseData = useMemo(() => ({
    // LISTENING EXERCISES
    listening_basic: {
      title: 'Nghe hiểu cơ bản',
      type: EXERCISE_TYPES.LISTENING,
      level: 'Sơ cấp 1',
      description: 'Nghe postcard với từ vựng và ngữ pháp cơ bản',
      speed: 0.7, // Slower for beginners
      questions: [
        {
          id: 'listen_basic_1',
          audioText: '안녕하세요. 저는 김민수입니다. 저는 베트남 사람입니다. 지금 한국 학교에서 한국어를 공부합니다. 매일 9시에 학교에 갑니다. 친구와 함께 한국어 책을 읽습니다. 오늘은 날씨가 좋습니다. 고맙습니다.',
          question: '김민수에 대한 정보로 맞는 것은?',
          options: [
            '베트남 사람이고 한국에서 한국어를 공부한다',
            '한국 사람이고 베트남에서 영어를 공부한다',
            '중국 사람이고 한국에서 일한다',
            '일본 사람이고 집에서 쉰다'
          ],
          correctAnswer: 0,
          explanation: '민수는 "저는 베트남 사람입니다. 한국 학교에서 한국어를 공부합니다"라고 했습니다.'
        },
        {
          id: 'listen_basic_2',
          audioText: '여기는 우리 집입니다. 이것은 제 방입니다. 저는 여기에서 매일 공부합니다. 이 책상 위에 한국어 책이 있습니다. 그 책은 저의 한국어 교재입니다. 저는 이 책으로 한국어를 배웁니다.',
          question: '방에 있는 것은?',
          options: [
            '책상과 한국어 책',
            '컴퓨터와 음악',
            '음식과 물',
            '영화와 친구'
          ],
          correctAnswer: 0,
          explanation: '"책상 위에 한국어 책이 있습니다"라고 했습니다.'
        },
        {
          id: 'listen_basic_3',
          audioText: '저는 매일 학교에 갑니다. 학교에서 친구들을 만납니다. 우리는 함께 한국어를 공부합니다. 점심시간에는 학교 식당에서 밥을 먹습니다. 그 음식이 맛있습니다. 오후에는 도서관에서 책을 읽습니다.',
          question: '하루 일과로 틀린 것은?',
          options: [
            '집에서 영화를 봅니다',
            '학교에서 친구들을 만납니다',
            '식당에서 밥을 먹습니다',
            '도서관에서 책을 읽습니다'
          ],
          correctAnswer: 0,
          explanation: '집에서 영화 보기는 언급되지 않았습니다.'
        }
      ]
    },

    listening_daily: {
      title: 'Nghe hiểu đời thường',
      type: EXERCISE_TYPES.LISTENING,
      level: 'Sơ cấp 1',
      description: 'Nghe về cuộc sống hàng ngày với ngữ pháp đã học',
      speed: 0.8, // Slower for beginners
      questions: [
        {
          id: 'listen_daily_1',
          audioText: '저는 매일 7시에 일어납니다. 먼저 물을 마시고 아침 운동을 합니다. 8시에 아침밥을 먹습니다. 어머니가 음식을 만들어 주십니다. 그 음식이 맛있습니다. 9시에 집에서 학교에 갑니다. 학교는 집에서 가깝습니다.',
          question: '아침에 하는 일은?',
          options: [
            '7시에 일어나서 물을 마시고 운동을 한다',
            '8시에 일어나서 친구와 공부를 한다',
            '9시에 일어나서 음악을 듣는다',
            '10시에 일어나서 영화를 본다'
          ],
          correctAnswer: 0,
          explanation: '"7시에 일어납니다. 먼저 물을 마시고 아침 운동을 합니다"라고 했습니다.'
        },
        {
          id: 'listen_daily_2',
          audioText: '오늘은 주말입니다. 저는 친구와 함께 시장에 갑니다. 거기에서 과일과 야채를 삽니다. 이 사과가 맛있어 보입니다. 저 바나나도 좋습니다. 우리는 집에 돌아가서 음식을 만듭니다. 그리고 함께 먹습니다.',
          question: '주말에 무엇을 합니까?',
          options: [
            '친구와 시장에 가서 과일과 야채를 산다',
            '혼자 집에서 책을 읽는다',
            '가족과 영화관에 간다',
            '학교에 가서 공부한다'
          ],
          correctAnswer: 0,
          explanation: '"친구와 함께 시장에 갑니다. 거기에서 과일과 야채를 삽니다"라고 했습니다.'
        },
        {
          id: 'listen_daily_3',
          audioText: '이곳은 우리 학교입니다. 학교가 크고 깨끗합니다. 교실이 많습니다. 도서관도 있습니다. 저는 도서관에서 자주 책을 읽습니다. 운동장에서 친구들과 운동을 합니다. 학교 식당의 음식도 맛있습니다.',
          question: '학교에 없는 것은?',
          options: [
            '영화관',
            '교실',
            '도서관',
            '운동장'
          ],
          correctAnswer: 0,
          explanation: '영화관은 언급되지 않았고, 교실, 도서관, 운동장은 모두 있다고 했습니다.'
        }
      ]
    },

    listening_story: {
      title: 'Nghe hiểu câu chuyện',
      type: EXERCISE_TYPES.LISTENING,
      level: 'Sơ cấp 2',
      description: 'Nghe câu chuyện đơn giản với ngữ pháp nâng cao',
      speed: 0.9, // Normal speed for intermediate
      questions: [
        {
          id: 'listen_story_1',
          audioText: '저는 어제 친구와 함께 공원에 갔습니다. 그 공원이 우리 집에서 가깝습니다. 공원에 나무가 많습니다. 꽃도 예쁩니다. 우리는 거기에서 사진을 찍었습니다. 그 사진들이 아주 예쁩니다. 그리고 벤치에 앉아서 이야기를 했습니다. 날씨가 좋아서 기분이 좋았습니다.',
          question: '공원에서 하지 않은 일은?',
          options: [
            '음악을 들었다',
            '사진을 찍었다',
            '벤치에 앉아서 이야기했다',
            '꽃을 보았다'
          ],
          correctAnswer: 0,
          explanation: '음악 듣기는 언급되지 않았습니다.'
        },
        {
          id: 'listen_story_2',
          audioText: '이것은 우리 가족 사진입니다. 아버지, 어머니, 저, 그리고 동생이 있습니다. 아버지는 회사에서 일하십니다. 어머니는 집에서 요리를 잘 하십니다. 저는 학교에서 한국어를 배웁니다. 동생은 아직 어려서 유치원에 다닙니다. 우리 가족은 주말에 함께 시간을 보냅니다.',
          question: '가족에 대한 설명으로 맞는 것은?',
          options: [
            '아버지는 회사에서 일하고 동생은 유치원에 다닌다',
            '어머니는 학교에서 일하고 동생은 중학교에 다닌다',
            '아버지는 집에서 쉬고 동생은 고등학교에 다닌다',
            '어머니는 병원에서 일하고 동생은 대학교에 다닌다'
          ],
          correctAnswer: 0,
          explanation: '"아버지는 회사에서 일하십니다"와 "동생은 유치원에 다닙니다"라고 했습니다.'
        },
        {
          id: 'listen_story_3',
          audioText: '저는 오늘 시장에 갔습니다. 어머니와 함께 갔습니다. 시장이 크고 사람이 많았습니다. 우리는 과일과 야채를 샀습니다. 그 과일이 신선했습니다. 야채도 좋았습니다. 집에 돌아와서 어머니가 음식을 만드셨습니다. 저도 도와드렸습니다. 그 음식이 정말 맛있었습니다.',
          question: '시장에서 산 것은?',
          options: [
            '과일과 야채',
            '옷과 신발',
            '책과 펜',
            '음악과 영화'
          ],
          correctAnswer: 0,
          explanation: '"우리는 과일과 야채를 샀습니다"라고 했습니다.'
        }
      ]
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
    },

    // DICTATION EXERCISES - NEW
    dictation_beginner: {
      title: 'Chính tả câu cơ bản',
      type: EXERCISE_TYPES.DICTATION,
      level: 'Sơ cấp 1',
      description: 'Nghe và viết lại câu cơ bản tiếng Hàn',
      speed: 0.6, // Very slow for beginners
      questions: [
        {
          id: 'dict_begin_1',
          audioText: '안녕하세요.',
          correctAnswers: ['안녕하세요.', '안녕하세요'],
          meaning: 'Xin chào.',
          hints: ['Lời chào cơ bản', 'Kết thúc bằng dấu chấm', 'Bắt đầu bằng "안"'],
          explanation: '"안녕하세요." là câu chào trang trọng và phổ biến nhất trong tiếng Hàn'
        },
        {
          id: 'dict_begin_2',
          audioText: '저는 학생입니다.',
          correctAnswers: ['저는 학생입니다.', '저는 학생입니다'],
          meaning: 'Tôi là sinh viên.',
          hints: ['Câu giới thiệu bản thân', 'Sử dụng "저는" cho tôi', 'Kết thúc bằng "입니다"'],
          explanation: '"저는 학생입니다." - câu cơ bản để giới thiệu nghề nghiệp của bản thân'
        },
        {
          id: 'dict_begin_3',
          audioText: '이것은 책입니다.',
          correctAnswers: ['이것은 책입니다.', '이것은 책입니다'],
          meaning: 'Đây là quyển sách.',
          hints: ['Chỉ vật gần mình', 'Sử dụng "이것은"', '"책" là sách'],
          explanation: '"이것은 책입니다." - cách chỉ và giới thiệu đồ vật ở gần'
        },
        {
          id: 'dict_begin_4',
          audioText: '오늘 날씨가 좋아요.',
          correctAnswers: ['오늘 날씨가 좋아요.', '오늘 날씨가 좋아요'],
          meaning: 'Hôm nay thời tiết đẹp.',
          hints: ['Nói về thời tiết', '"오늘" là hôm nay', '"좋아요" là tốt/đẹp'],
          explanation: '"오늘 날씨가 좋아요." - cách nói về thời tiết tốt hôm nay'
        },
        {
          id: 'dict_begin_5',
          audioText: '감사합니다.',
          correctAnswers: ['감사합니다.', '감사합니다'],
          meaning: 'Cảm ơn.',
          hints: ['Lời cảm ơn trang trọng', 'Bắt đầu bằng "감"', 'Câu thể hiện lòng biết ơn'],
          explanation: '"감사합니다." là cách nói cảm ơn trang trọng và lịch sự nhất'
        }
      ]
    },

    dictation_elementary: {
      title: 'Chính tả câu đơn giản',
      type: EXERCISE_TYPES.DICTATION,
      level: 'Sơ cấp 1',
      description: 'Nghe và viết lại câu đơn giản',
      speed: 0.7, // Slow for elementary
      questions: [
        {
          id: 'dict_elem_1',
          audioText: '저는 학생입니다',
          correctAnswers: ['저는 학생입니다', '저는 학생이에요'],
          meaning: 'Tôi là sinh viên',
          hints: ['Câu giới thiệu bản thân', 'Sử dụng "저는" và "학생"'],
          explanation: '"저는 학생입니다" - câu cơ bản để giới thiệu nghề nghiệp'
        },
        {
          id: 'dict_elem_2',
          audioText: '오늘 날씨가 좋아요',
          correctAnswers: ['오늘 날씨가 좋아요', '오늘 날씨가 좋습니다'],
          meaning: 'Hôm nay thời tiết đẹp',
          hints: ['Nói về thời tiết', '"오늘" là hôm nay'],
          explanation: '"오늘 날씨가 좋아요" - cách nói về thời tiết tốt'
        },
        {
          id: 'dict_elem_3',
          audioText: '이것은 책입니다',
          correctAnswers: ['이것은 책입니다', '이것은 책이에요'],
          meaning: 'Đây là quyển sách',
          hints: ['Chỉ vật gần', 'Sử dụng "이것은"'],
          explanation: '"이것은 책입니다" - cách chỉ và giới thiệu đồ vật gần'
        },
        {
          id: 'dict_elem_4',
          audioText: '내일 친구를 만나요',
          correctAnswers: ['내일 친구를 만나요', '내일 친구를 만납니다'],
          meaning: 'Ngày mai gặp bạn',
          hints: ['Nói về kế hoạch tương lai', '"내일" là ngày mai'],
          explanation: '"내일 친구를 만나요" - diễn tả kế hoạch gặp gỡ'
        },
        {
          id: 'dict_elem_5',
          audioText: '어디에서 공부해요?',
          correctAnswers: ['어디에서 공부해요?', '어디에서 공부합니까?'],
          meaning: 'Học ở đâu?',
          hints: ['Câu hỏi về địa điểm', 'Bắt đầu bằng "어디"'],
          explanation: '"어디에서 공부해요?" - câu hỏi về nơi học tập'
        }
      ]
    },

    dictation_intermediate: {
      title: 'Chính tả câu phức tạp',
      type: EXERCISE_TYPES.DICTATION,
      level: 'Sơ cấp 2',
      description: 'Nghe và viết lại câu có ngữ pháp phức tạp hơn',
      speed: 0.8, // Normal speed for intermediate
      questions: [
        {
          id: 'dict_inter_1',
          audioText: '저는 한국어를 공부하고 있어요',
          correctAnswers: ['저는 한국어를 공부하고 있어요', '저는 한국어를 공부하고 있습니다'],
          meaning: 'Tôi đang học tiếng Hàn',
          hints: ['Thì hiện tại tiếp diễn', 'Sử dụng "고 있어요"'],
          explanation: '"저는 한국어를 공부하고 있어요" - thì hiện tại tiếp diễn trong tiếng Hàn'
        },
        {
          id: 'dict_inter_2',
          audioText: '어제 영화를 보러 극장에 갔어요',
          correctAnswers: ['어제 영화를 보러 극장에 갔어요', '어제 영화를 보러 극장에 갔습니다'],
          meaning: 'Hôm qua đi rạp xem phim',
          hints: ['Thì quá khứ', '"어제" là hôm qua', 'Mục đích "보러"'],
          explanation: '"어제 영화를 보러 극장에 갔어요" - diễn tả hành động trong quá khứ với mục đích'
        },
        {
          id: 'dict_inter_3',
          audioText: '한국 음식이 매우 맛있어서 자주 먹어요',
          correctAnswers: ['한국 음식이 매우 맛있어서 자주 먹어요', '한국 음식이 매우 맛있어서 자주 먹습니다'],
          meaning: 'Đồ ăn Hàn rất ngon nên thường xuyên ăn',
          hints: ['Nguyên nhân kết quả', 'Sử dụng "아서/어서"'],
          explanation: '"한국 음식이 매우 맛있어서 자주 먹어요" - câu biểu thị nguyên nhân và kết quả'
        },
        {
          id: 'dict_inter_4',
          audioText: '시간이 없어서 숙제를 못 했어요',
          correctAnswers: ['시간이 없어서 숙제를 못 했어요', '시간이 없어서 숙제를 못 했습니다'],
          meaning: 'Không có thời gian nên không làm được bài tập',
          hints: ['Biểu thị không thể', 'Sử dụng "못"'],
          explanation: '"시간이 없어서 숙제를 못 했어요" - diễn tả việc không thể thực hiện do nguyên nhân'
        },
        {
          id: 'dict_inter_5',
          audioText: '주말에 부모님과 함께 여행을 갈 예정이에요',
          correctAnswers: ['주말에 부모님과 함께 여행을 갈 예정이에요', '주말에 부모님과 함께 여행을 갈 예정입니다'],
          meaning: 'Cuối tuần dự định đi du lịch cùng bố mẹ',
          hints: ['Kế hoạch tương lai', 'Sử dụng "을/ㄹ 예정"'],
          explanation: '"주말에 부모님과 함께 여행을 갈 예정이에요" - diễn tả kế hoạch trong tương lai'
        }
      ]
    }
  }), [vocabularyData, EXERCISE_TYPES.LISTENING, EXERCISE_TYPES.READING, EXERCISE_TYPES.WRITING, EXERCISE_TYPES.DICTATION]);

  // States
  const [selectedExerciseType, setSelectedExerciseType] = useState('listening_postcard');
  const [gameState, setGameState] = useState('menu'); // 'menu', 'active', 'results'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioSpeed, setAudioSpeed] = useState(0.7); // Slow speed for beginners

  const currentExercise = exerciseData[selectedExerciseType];
  const currentQuestion = currentExercise?.questions[currentQuestionIndex];

  // Enhanced Text-to-Speech function with natural pauses for dictation
  const speakText = (text, speed = audioSpeed) => {
    if (!('speechSynthesis' in window)) return;
    
    const synth = window.speechSynthesis;
    
    const speak = () => {
      // Cancel any ongoing speech
      synth.cancel();
      
      // Get all Korean voices and prioritize highest quality ones
      const voices = synth.getVoices().filter((v) => v.lang && v.lang.startsWith('ko'));
      // Enhanced voice prioritization for maximum quality
      const preferredVoice = 
        // 1st Priority: Premium Neural/Cloud voices
        voices.find((v) => 
          /Google.*Neural|Microsoft.*Neural|Apple.*Premium|Naver.*Premium|Kakao.*Neural/i.test(v.name)
        ) ||
        // 2nd Priority: High-quality brand voices  
        voices.find((v) => 
          /Google|Microsoft|Apple|Naver|Kakao|Samsung|LG/i.test(v.name) &&
          /Neural|Premium|HD|Enhanced|Pro|Quality|Natural/i.test(v.name)
        ) ||
        // 3rd Priority: Cloud-based voices (non-local)
        voices.find((v) => 
          /ko-KR/i.test(v.lang) && v.localService === false
        ) ||
        // 4th Priority: Any premium brand voice
        voices.find((v) => 
          /Google|Microsoft|Apple|Naver|Kakao|Samsung/i.test(v.name)
        ) ||
        // Fallback: First Korean voice
        voices[0];
      
      if (preferredVoice) {
        console.log('🎯 Using high-quality voice:', preferredVoice.name);
      }
      
      // Add natural pauses for dictation - split by spaces and punctuation
      let processedText = text;
      
      // Add natural pauses for different exercise types
      if (currentExercise && currentExercise.type === EXERCISE_TYPES.DICTATION) {
        // Add slight pause after each word (represented by commas in speech synthesis)
        processedText = text
          // Add pause after punctuation
          .replace(/([?.!])/g, '$1, ')
          // Add small pause between words for better dictation
          .replace(/\s+/g, ', ')
          // Clean up multiple commas
          .replace(/,\s*,/g, ',')
          // Add pause at the end
          .trim() + '.';
      } else if (currentExercise && currentExercise.type === EXERCISE_TYPES.LISTENING) {
        // Add natural pauses for listening comprehension
        processedText = text
          // Add longer pause between dialogue speakers
          .replace(/(A:|B:|C:)/g, ', $1 ')
          // Add pause after sentences
          .replace(/([.!?])\s+/g, '$1, ')
          // Add pause after clauses
          .replace(/([,:])\s+/g, '$1, ')
          // Clean up multiple commas
          .replace(/,\s*,/g, ',');
      }
      
      const utterance = new SpeechSynthesisUtterance(processedText);
      
      // Set Korean language explicitly
      utterance.lang = 'ko-KR';
      
      // Use the best available Korean voice
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      // Optimized speech parameters for high-quality Korean learning
      utterance.rate = speed * 0.95; // Slightly slower for better clarity 
      utterance.pitch = 1.0; // Natural, authentic pitch
      utterance.volume = 1.0; // Full volume for clarity
      
      // Set up enhanced event handlers
      utterance.onstart = () => setIsAudioPlaying(true);
      utterance.onend = () => setIsAudioPlaying(false);
      utterance.onerror = (event) => {
        setIsAudioPlaying(false);
        console.error('Speech synthesis error:', event.error);
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

  // Play feedback audio for correct/incorrect answers
  const playFeedbackAudio = useCallback((isCorrect) => {
    if (!('speechSynthesis' in window)) return;
    
    const synth = window.speechSynthesis;
    synth.cancel(); // Stop any ongoing speech
    
    // Korean feedback phrases
    const feedbackText = isCorrect ? '정답입니다!' : '다시 해보세요.';
    
    const speak = () => {
      const voices = synth.getVoices().filter((v) => v.lang && v.lang.startsWith('ko'));
      const preferredVoice = voices.find((v) => 
        /Google|Microsoft|Apple|Naver|Kakao|Samsung|LG|Hyundai|SK|KT/i.test(v.name) ||
        /Neural|Premium|HD|Enhanced|Pro/i.test(v.name)
      ) || voices.find((v) => 
        /ko-KR/i.test(v.lang) && v.localService === false
      ) || voices[0];
      
      const utterance = new SpeechSynthesisUtterance(feedbackText);
      utterance.lang = 'ko-KR';
      utterance.rate = 0.9;
      utterance.pitch = isCorrect ? 1.2 : 0.8; // Higher pitch for correct, lower for incorrect
      utterance.volume = 0.8;
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      // Add a slight delay for better user experience
      setTimeout(() => {
        synth.speak(utterance);
      }, 500);
    };
    
    if (synth.getVoices().length) {
      speak();
    } else {
      synth.onvoiceschanged = speak;
    }
  }, []);



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
    
    // Play feedback audio for enhanced user experience
    playFeedbackAudio(isCorrect);
  };

  // Handle text input (for writing and dictation exercises)
  const handleTextSubmit = () => {
    if (!userAnswer.trim()) return;
    
    let isCorrect = false;
    
    // Enhanced comparison for dictation exercises
    if (currentExercise.type === EXERCISE_TYPES.DICTATION) {
      const userInput = userAnswer.trim();
      isCorrect = currentQuestion.correctAnswers.some(answer => {
        // Direct exact match
        if (userInput === answer) return true;
        
        // Case-insensitive match
        if (userInput.toLowerCase() === answer.toLowerCase()) return true;
        
        // Remove common punctuation and spaces for more flexible matching
        const normalizeText = (text) => text
          .replace(/[?.!,\s]/g, '')
          .toLowerCase();
        
        return normalizeText(userInput) === normalizeText(answer);
      });
    } else {
      // Regular comparison for writing exercises
      isCorrect = currentQuestion.correctAnswers.some(answer => 
        userAnswer.trim().toLowerCase() === answer.toLowerCase()
      );
    }
    
    const newAnswer = {
      questionId: currentQuestion.id,
      userAnswer: userAnswer.trim(),
      correctAnswer: currentQuestion.correctAnswers[0],
      isCorrect
    };
    setAnswers([...answers, newAnswer]);
    setShowExplanation(true);
    
    // Play feedback audio for enhanced user experience
    playFeedbackAudio(isCorrect);
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
  const getScore = useCallback(() => {
    const correctCount = answers.filter(a => a.isCorrect).length;
    const totalCount = answers.length;
    return { correct: correctCount, total: totalCount, percentage: Math.round((correctCount / totalCount) * 100) };
  }, [answers]);

  // Render main menu
  const renderMenu = () => (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
          Luyện tập kỹ năng
        </h1>
        <p className="text-lg text-text-light max-w-2xl mx-auto">
          Luyện tập 4 kỹ năng quan trọng: Nghe, Đọc, Viết và Chính tả với nội dung từ Grammar và Vocabulary
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
              <p className="text-gray-600">Nghe hiểu postcard, truyện ngắn và cuộc sống hàng ngày với giọng chất lượng cao</p>
      </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
                  <button
              onClick={() => startExercise('listening_basic')}
              className="p-4 border-2 border-blue-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 text-left"
            >
              <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                Nghe hiểu cơ bản
              </h3>
              <p className="text-sm text-gray-600 mb-2">Postcard và thư ngắn - Giọng chất lượng cao</p>
              <div className="flex items-center justify-between">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">3 thư ngắn</span>
                <span className="text-xs text-gray-500">0.7x</span>
              </div>
                  </button>
            <button
              onClick={() => startExercise('listening_daily')}
              className="p-4 border-2 border-blue-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 text-left"
            >
              <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                Nghe hiểu đời thường
              </h3>
              <p className="text-sm text-gray-600 mb-2">Cuộc sống hàng ngày - Giọng bản địa</p>
              <div className="flex items-center justify-between">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">3 đoạn văn</span>
                <span className="text-xs text-gray-500">0.8x</span>
              </div>
            </button>
            <button
              onClick={() => startExercise('listening_story')}
              className="p-4 border-2 border-blue-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 text-left"
            >
              <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                Nghe hiểu truyện ngắn
              </h3>
              <p className="text-sm text-gray-600 mb-2">Truyện và kể chuyện - Sơ cấp 2</p>
              <div className="flex items-center justify-between">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">3 câu chuyện</span>
                <span className="text-xs text-gray-500">0.9x</span>
              </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
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

        {/* Dictation Exercises - NEW */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Headphones className="w-8 h-8 text-orange-600 mr-3" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Luyện chính tả</h2>
              <p className="text-gray-600">Nghe và viết chính xác tiếng Hàn với tốc độ phù hợp</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <button
              onClick={() => startExercise('dictation_beginner')}
              className="p-4 border-2 border-orange-200 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-all duration-200 text-left"
            >
              <h3 className="font-semibold text-orange-800 mb-2">Chính tả câu cơ bản</h3>
              <p className="text-sm text-gray-600 mb-2">Câu đơn giản, tốc độ rất chậm</p>
              <div className="flex items-center justify-between">
                <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">5 câu</span>
                <span className="text-xs text-gray-500">Tốc độ: 0.6x</span>
              </div>
            </button>
            <button
              onClick={() => startExercise('dictation_elementary')}
              className="p-4 border-2 border-orange-200 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-all duration-200 text-left"
            >
              <h3 className="font-semibold text-orange-800 mb-2">Chính tả câu đơn</h3>
              <p className="text-sm text-gray-600 mb-2">Câu đơn giản, tốc độ chậm</p>
              <div className="flex items-center justify-between">
                <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">5 câu hỏi</span>
                <span className="text-xs text-gray-500">Tốc độ: 0.7x</span>
              </div>
            </button>
            <button
              onClick={() => startExercise('dictation_intermediate')}
              className="p-4 border-2 border-orange-200 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-all duration-200 text-left"
            >
              <h3 className="font-semibold text-orange-800 mb-2">Chính tả nâng cao</h3>
              <p className="text-sm text-gray-600 mb-2">Câu phức tạp, tốc độ bình thường</p>
              <div className="flex items-center justify-between">
                <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">5 câu hỏi</span>
                <span className="text-xs text-gray-500">Tốc độ: 0.8x</span>
              </div>
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
    const isDictation = currentExercise.type === EXERCISE_TYPES.DICTATION;

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
                    onClick={() => {

                      
                      // Use high-quality speech for all listening exercises
                      speakText(currentQuestion.audioText, currentExercise.speed || audioSpeed);
                    }}
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
                        Nghe đoạn văn
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
                
                <p className="text-sm text-blue-600 font-medium">Tốc độ: {currentExercise.speed || audioSpeed}x (Tối ưu cho {currentExercise.level})</p>
                
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
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !showExplanation && userAnswer.trim()) {
                        handleTextSubmit();
                      }
                    }}
                    placeholder="Nhập câu trả lời của bạn..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-lg"
                    disabled={showExplanation}
                  />
                  
                  {!showExplanation && (
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handleTextSubmit}
                        disabled={!userAnswer.trim()}
                        className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        Kiểm tra đáp án
                      </button>
                      <span className="text-sm text-gray-500">hoặc nhấn <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd></span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Dictation Exercise */}
          {isDictation && (
            <div className="mb-8">
              <div className="bg-orange-50 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <Headphones className="w-8 h-8 text-orange-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-orange-800">Chính tả tiếng Hàn</h3>
                    <p className="text-sm text-orange-600">Nghe và viết chính xác từ/câu tiếng Hàn</p>
                  </div>
                </div>
                
                {/* Audio Controls with Enhanced Features */}
                <div className="bg-white rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <button
                      onClick={() => speakText(currentQuestion.audioText, currentExercise.speed)}
                      disabled={isAudioPlaying}
                      className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 disabled:opacity-50 transition-colors"
                    >
                      {isAudioPlaying ? (
                        <>
                          <VolumeX className="w-5 h-5" />
                          Đang phát...
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-5 h-5" />
                          Nghe ({currentExercise.speed}x)
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
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Ý nghĩa:</strong> {currentQuestion.meaning}
                    </p>
                    <p className="text-xs text-orange-600 font-medium">
                      Tốc độ: {currentExercise.speed}x - Tối ưu cho level {currentExercise.level}
                    </p>
                  </div>
                </div>

                {/* Hints */}
                {currentQuestion.hints && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <h5 className="text-sm font-medium text-yellow-800 mb-2">💡 Gợi ý:</h5>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      {currentQuestion.hints.map((hint, index) => (
                        <li key={index}>• {hint}</li>
                      ))}
                    </ul>
                  </div>
                )}

                                 {/* Korean Input */}
                 <div className="space-y-4">
                   <label className="block text-sm font-medium text-gray-700 mb-2">
                     Viết lại những gì bạn nghe được:
                   </label>
                   <input
                     type="text"
                     value={userAnswer}
                     onChange={(e) => setUserAnswer(e.target.value)}
                     onKeyDown={(e) => {
                       if (e.key === 'Enter' && !showExplanation && userAnswer.trim()) {
                         handleTextSubmit();
                       }
                     }}
                     placeholder="Nhập tiếng Hàn..."
                     className="w-full px-4 py-4 border-2 border-orange-200 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-xl font-medium text-center placeholder-gray-400"
                     disabled={showExplanation}
                     style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                   />
                   
                   {!showExplanation && (
                     <div className="space-y-3">
                       <div className="flex justify-center gap-3">
                         <button
                           onClick={() => speakText(currentQuestion.audioText, currentExercise.speed)}
                           disabled={isAudioPlaying}
                           className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 disabled:opacity-50 transition-colors"
                         >
                           <Volume2 className="w-4 h-4" />
                           Nghe lại
                         </button>
                         <button
                           onClick={handleTextSubmit}
                           disabled={!userAnswer.trim()}
                           className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                         >
                           Kiểm tra chính tả
                         </button>
                       </div>
                       <p className="text-center text-sm text-gray-500">
                         💡 Nhấn <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd> để kiểm tra nhanh
                       </p>
                     </div>
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
              {/* Result with Enhanced Visual Feedback */}
              <div className={`p-4 rounded-lg flex items-center gap-3 transition-all duration-500 ${
                answers[answers.length - 1]?.isCorrect 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                {answers[answers.length - 1]?.isCorrect ? (
                  <>
                    <CheckCircle className="w-6 h-6 text-green-600 animate-bounce" />
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-green-800">🎉 Chính xác!</span>
                      <span className="text-sm text-green-600">(정답입니다!)</span>
          </div>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6 text-red-600 animate-pulse" />
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-red-800">💪 Chưa chính xác</span>
                      <span className="text-sm text-red-600">(다시 해보세요)</span>
                    </div>
                  </>
                )}
              </div>

              {/* Explanation */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-2">Giải thích:</h4>
                <p className="text-blue-700">{currentQuestion.explanation}</p>
                
                {/* Show correct answer for dictation */}
                {isDictation && !answers[answers.length - 1]?.isCorrect && (
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <h5 className="font-medium text-blue-800 mb-2">Đáp án đúng:</h5>
                    <div className="bg-white p-3 rounded-lg border border-blue-200">
                      <p className="text-xl font-medium text-gray-800 text-center" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                        {currentQuestion.correctAnswers[0]}
                      </p>
                    </div>
                    <button
                      onClick={() => speakText(currentQuestion.correctAnswers[0], currentExercise.speed)}
                      className="mt-2 flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mx-auto"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span className="text-sm">Nghe đáp án đúng</span>
                    </button>
                  </div>
                )}
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

  // Play congratulatory audio when showing results
  useEffect(() => {
    if (gameState === 'results') {
      const score = getScore();
      const isGoodScore = score.percentage >= 70;
      
      if (isGoodScore) {
        setTimeout(() => {
          playFeedbackAudio(true);
        }, 1000);
      }
    }
  }, [gameState]); // eslint-disable-line react-hooks/exhaustive-deps

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
        title="Luyện tập kỹ năng Tiếng Hàn - Nghe, Đọc, Viết, Chính tả" 
        description="Luyện tập 4 kỹ năng quan trọng: Nghe, Đọc, Viết và Chính tả với nội dung từ Grammar và Vocabulary. Có âm thanh chậm và tự nhiên cho người mới bắt đầu."
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