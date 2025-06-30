import React, { useState } from 'react';
import { Volume2, BookOpen, FileText, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';
import AdsenseAd from '../components/AdsenseAd';

function Basic() {
  const [selectedSection, setSelectedSection] = useState('vowels');

  // Dữ liệu nguyên âm cơ bản
  const basicVowels = [
    { hangul: 'ㅏ', romanization: 'a', ipa: '[a]', description: 'Âm "a" như trong "cha"' },
    { hangul: 'ㅓ', romanization: 'eo', ipa: '[ʌ]', description: 'Âm "ơ" như trong "cơm"' },
    { hangul: 'ㅗ', romanization: 'o', ipa: '[o]', description: 'Âm "o" như trong "xô"' },
    { hangul: 'ㅜ', romanization: 'u', ipa: '[u]', description: 'Âm "u" như trong "bu"' },
    { hangul: 'ㅡ', romanization: 'eu', ipa: '[ɯ]', description: 'Âm "ư" không tròn môi' },
    { hangul: 'ㅣ', romanization: 'i', ipa: '[i]', description: 'Âm "i" như trong "mi"' },
    { hangul: 'ㅑ', romanization: 'ya', ipa: '[ja]', description: 'Âm "ya" như trong "ya"' },
    { hangul: 'ㅕ', romanization: 'yeo', ipa: '[jʌ]', description: 'Âm "yơ"' },
    { hangul: 'ㅛ', romanization: 'yo', ipa: '[jo]', description: 'Âm "yo" như trong "yo"' },
    { hangul: 'ㅠ', romanization: 'yu', ipa: '[ju]', description: 'Âm "yu" như trong "yu"' }
  ];

  // Dữ liệu nguyên âm phức
  const complexVowels = [
    { hangul: 'ㅐ', romanization: 'ae', ipa: '[ɛ]', description: 'Âm "e" như trong "kẹp"' },
    { hangul: 'ㅔ', romanization: 'e', ipa: '[e]', description: 'Âm "e" như trong "ke"' },
    { hangul: 'ㅒ', romanization: 'yae', ipa: '[jɛ]', description: 'Âm "ye"' },
    { hangul: 'ㅖ', romanization: 'ye', ipa: '[je]', description: 'Âm "ye"' },
    { hangul: 'ㅘ', romanization: 'wa', ipa: '[wa]', description: 'Âm "wa" như trong "qua"' },
    { hangul: 'ㅙ', romanization: 'wae', ipa: '[wɛ]', description: 'Âm "wae"' },
    { hangul: 'ㅚ', romanization: 'oe', ipa: '[ø]', description: 'Âm "we" hoặc "oe"' },
    { hangul: 'ㅝ', romanization: 'wo', ipa: '[wʌ]', description: 'Âm "wơ"' },
    { hangul: 'ㅞ', romanization: 'we', ipa: '[we]', description: 'Âm "we"' },
    { hangul: 'ㅟ', romanization: 'wi', ipa: '[wi]', description: 'Âm "wi"' },
    { hangul: 'ㅢ', romanization: 'ui', ipa: '[ɰi]', description: 'Âm "ưi" hoặc "i"' }
  ];

  // Dữ liệu phụ âm cơ bản
  const basicConsonants = [
    { hangul: 'ㄱ', romanization: 'g/k', ipa: '[k/g]', description: 'Âm "g" đầu từ, "k" cuối từ' },
    { hangul: 'ㄴ', romanization: 'n', ipa: '[n]', description: 'Âm "n" như trong "na"' },
    { hangul: 'ㄷ', romanization: 'd/t', ipa: '[t/d]', description: 'Âm "d" đầu từ, "t" cuối từ' },
    { hangul: 'ㄹ', romanization: 'r/l', ipa: '[ɾ/l]', description: 'Âm "r" đầu từ, "l" cuối từ' },
    { hangul: 'ㅁ', romanization: 'm', ipa: '[m]', description: 'Âm "m" như trong "ma"' },
    { hangul: 'ㅂ', romanization: 'b/p', ipa: '[p/b]', description: 'Âm "b" đầu từ, "p" cuối từ' },
    { hangul: 'ㅅ', romanization: 's', ipa: '[s]', description: 'Âm "s" như trong "sa"' },
    { hangul: 'ㅇ', romanization: 'ng/-', ipa: '[ŋ/-]', description: 'Âm "ng" cuối từ, câm đầu từ' },
    { hangul: 'ㅈ', romanization: 'j', ipa: '[tʃ/dʒ]', description: 'Âm "j" như trong "ja"' },
    { hangul: 'ㅊ', romanization: 'ch', ipa: '[tʃʰ]', description: 'Âm "ch" có khí' },
    { hangul: 'ㅋ', romanization: 'k', ipa: '[kʰ]', description: 'Âm "k" có khí' },
    { hangul: 'ㅌ', romanization: 't', ipa: '[tʰ]', description: 'Âm "t" có khí' },
    { hangul: 'ㅍ', romanization: 'p', ipa: '[pʰ]', description: 'Âm "p" có khí' },
    { hangul: 'ㅎ', romanization: 'h', ipa: '[h]', description: 'Âm "h" như trong "ha"' }
  ];

  // Dữ liệu phụ âm căng
  const tensedConsonants = [
    { hangul: 'ㄲ', romanization: 'kk', ipa: '[k͈]', description: 'Âm "k" căng, không khí' },
    { hangul: 'ㄸ', romanization: 'tt', ipa: '[t͈]', description: 'Âm "t" căng, không khí' },
    { hangul: 'ㅃ', romanization: 'pp', ipa: '[p͈]', description: 'Âm "p" căng, không khí' },
    { hangul: 'ㅆ', romanization: 'ss', ipa: '[s͈]', description: 'Âm "s" căng' },
    { hangul: 'ㅉ', romanization: 'jj', ipa: '[t͈ʃ]', description: 'Âm "j" căng, không khí' }
  ];

  // Dữ liệu âm cuối (받침)
  const finalConsonants = [
    { hangul: 'ㄱ, ㄲ, ㅋ', sound: '[k]', example: '악, 깎, 부엌', description: 'Tất cả đều phát âm [k]' },
    { hangul: 'ㄴ', sound: '[n]', example: '간, 손', description: 'Phát âm [n]' },
    { hangul: 'ㄷ, ㅅ, ㅆ, ㅈ, ㅊ, ㅌ, ㅎ', sound: '[t]', example: '곧, 옷, 있, 빚, 꽃, 밭, 놓', description: 'Tất cả đều phát âm [t]' },
    { hangul: 'ㄹ', sound: '[l]', example: '달, 말', description: 'Phát âm [l]' },
    { hangul: 'ㅁ', sound: '[m]', example: '봄, 김', description: 'Phát âm [m]' },
    { hangul: 'ㅂ, ㅍ', sound: '[p]', example: '밥, 앞', description: 'Tất cả đều phát âm [p]' },
    { hangul: 'ㅇ', sound: '[ŋ]', example: '강, 방', description: 'Phát âm [ŋ]' }
  ];

  // Dữ liệu số thuần Hàn
  const nativeKoreanNumbers = [
    { number: 1, hangul: '하나', pronunciation: 'hana', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 2, hangul: '둘', pronunciation: 'dul', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 3, hangul: '셋', pronunciation: 'set', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 4, hangul: '넷', pronunciation: 'net', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 5, hangul: '다섯', pronunciation: 'da-seot', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 6, hangul: '여섯', pronunciation: 'yeo-seot', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 7, hangul: '일곱', pronunciation: 'il-gop', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 8, hangul: '여덟', pronunciation: 'yeo-deol', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 9, hangul: '아홉', pronunciation: 'a-hop', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 10, hangul: '열', pronunciation: 'yeol', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 11, hangul: '열하나', pronunciation: 'yeol-hana', usage: '열 + 하나' },
    { number: 12, hangul: '열둘', pronunciation: 'yeol-dul', usage: '열 + 둘' },
    { number: 20, hangul: '스물', pronunciation: 'seu-mul', usage: 'Đặc biệt cho số 20' },
    { number: 21, hangul: '스물하나', pronunciation: 'seu-mul-hana', usage: '스물 + 하나' },
    { number: 30, hangul: '서른', pronunciation: 'seo-reun', usage: 'Đặc biệt cho số 30' },
    { number: 40, hangul: '마흔', pronunciation: 'ma-heun', usage: 'Đặc biệt cho số 40' },
    { number: 50, hangul: '쉰', pronunciation: 'swin', usage: 'Đặc biệt cho số 50' },
    { number: 60, hangul: '예순', pronunciation: 'ye-sun', usage: 'Đặc biệt cho số 60' },
    { number: 70, hangul: '일흔', pronunciation: 'il-heun', usage: 'Đặc biệt cho số 70' },
    { number: 80, hangul: '여든', pronunciation: 'yeo-deun', usage: 'Đặc biệt cho số 80' },
    { number: 90, hangul: '아흔', pronunciation: 'a-heun', usage: 'Đặc biệt cho số 90' },
    { number: 99, hangul: '아흔아홉', pronunciation: 'a-heun-a-hop', usage: '아흔 + 아홉' }
  ];

  // Dữ liệu số Hán Hàn
  const sinoKoreanNumbers = [
    { number: 0, hangul: '영/공', pronunciation: 'yeong/gong', hanja: '零/空' },
    { number: 1, hangul: '일', pronunciation: 'il', hanja: '一' },
    { number: 2, hangul: '이', pronunciation: 'i', hanja: '二' },
    { number: 3, hangul: '삼', pronunciation: 'sam', hanja: '三' },
    { number: 4, hangul: '사', pronunciation: 'sa', hanja: '四' },
    { number: 5, hangul: '오', pronunciation: 'o', hanja: '五' },
    { number: 6, hangul: '육', pronunciation: 'yuk', hanja: '六' },
    { number: 7, hangul: '칠', pronunciation: 'chil', hanja: '七' },
    { number: 8, hangul: '팔', pronunciation: 'pal', hanja: '八' },
    { number: 9, hangul: '구', pronunciation: 'gu', hanja: '九' },
    { number: 10, hangul: '십', pronunciation: 'sip', hanja: '十' },
    { number: 11, hangul: '십일', pronunciation: 'si-bil', hanja: '十一' },
    { number: 20, hangul: '이십', pronunciation: 'i-sip', hanja: '二十' },
    { number: 30, hangul: '삼십', pronunciation: 'sam-sip', hanja: '三十' },
    { number: 100, hangul: '백', pronunciation: 'baek', hanja: '百' },
    { number: 1000, hangul: '천', pronunciation: 'cheon', hanja: '千' },
    { number: 10000, hangul: '만', pronunciation: 'man', hanja: '萬' },
    { number: 100000000, hangul: '억', pronunciation: 'eok', hanja: '億' }
  ];

  // Quy tắc sử dụng số
  const numberUsageRules = [
    {
      category: 'Số thuần Hàn (고유어)',
      description: 'Sử dụng cho đếm tuổi, giờ, đồ vật, người',
      usages: [
        { context: 'Tuổi', example: '스무 살', translation: '20 tuổi' },
        { context: 'Giờ', example: '세 시', translation: '3 giờ' },
        { context: 'Đồ vật', example: '사과 다섯 개', translation: '5 quả táo' },
        { context: 'Người', example: '학생 일곱 명', translation: '7 học sinh' }
      ],
      notes: [
        'Chỉ dùng từ 1-99',
        'Từ 100 trở lên dùng số Hán Hàn',
        'Khi dùng với bộ đếm: 하나→한, 둘→두, 셋→세, 넷→네'
      ]
    },
    {
      category: 'Số Hán Hàn (한자어)',
      description: 'Sử dụng cho phút, ngày, tháng, năm, tiền, số điện thoại',
      usages: [
        { context: 'Phút', example: '삼십 분', translation: '30 phút' },
        { context: 'Ngày', example: '십일 일', translation: 'ngày 11' },
        { context: 'Tháng', example: '십이 월', translation: 'tháng 12' },
        { context: 'Năm', example: '이천이십사 년', translation: 'năm 2024' },
        { context: 'Tiền', example: '만 원', translation: '10.000 won' }
      ],
      notes: [
        'Có thể đếm vô hạn',
        'Dùng cho các đơn vị đo lường',
        'Dùng trong toán học và khoa học'
      ]
    }
  ];

  // Bộ đếm phổ biến
  const commonCounters = [
    { 
      counter: '개', 
      usage: 'Đồ vật chung chung',
      examples: ['사과 세 개', '연필 두 개']
    },
    { 
      counter: '명', 
      usage: 'Người (tôn trọng)',
      examples: ['학생 다섯 명', '선생님 한 명']
    },
    { 
      counter: '마리', 
      usage: 'Động vật',
      examples: ['강아지 두 마리', '고양이 한 마리']
    },
    { 
      counter: '장', 
      usage: 'Giấy, ảnh, thẻ',
      examples: ['사진 세 장', '종이 한 장']
    },
    { 
      counter: '권', 
      usage: 'Sách, tạp chí',
      examples: ['책 네 권', '잡지 두 권']
    },
    { 
      counter: '대', 
      usage: 'Máy móc, xe cộ',
      examples: ['자동차 한 대', '컴퓨터 두 대']
    },
    { 
      counter: '병', 
      usage: 'Chai lọ',
      examples: ['물 세 병', '맥주 두 병']
    },
    { 
      counter: '잔', 
      usage: 'Cốc, chén',
      examples: ['커피 한 잔', '차 두 잔']
    },
    { 
      counter: '벌', 
      usage: 'Quần áo (bộ)',
      examples: ['옷 한 벌', '양복 두 벌']
    },
    { 
      counter: '살', 
      usage: 'Tuổi',
      examples: ['스무 살', '서른 살']
    }
  ];

  // Dữ liệu số thuần Hàn
  const nativeKoreanNumbers = [
    { number: 1, hangul: '하나', pronunciation: 'hana', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 2, hangul: '둘', pronunciation: 'dul', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 3, hangul: '셋', pronunciation: 'set', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 4, hangul: '넷', pronunciation: 'net', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 5, hangul: '다섯', pronunciation: 'da-seot', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 6, hangul: '여섯', pronunciation: 'yeo-seot', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 7, hangul: '일곱', pronunciation: 'il-gop', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 8, hangul: '여덟', pronunciation: 'yeo-deol', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 9, hangul: '아홉', pronunciation: 'a-hop', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 10, hangul: '열', pronunciation: 'yeol', usage: 'Đếm đồ vật, tuổi, giờ' },
    { number: 11, hangul: '열하나', pronunciation: 'yeol-hana', usage: '열 + 하나' },
    { number: 12, hangul: '열둘', pronunciation: 'yeol-dul', usage: '열 + 둘' },
    { number: 20, hangul: '스물', pronunciation: 'seu-mul', usage: 'Đặc biệt cho số 20' },
    { number: 21, hangul: '스물하나', pronunciation: 'seu-mul-hana', usage: '스물 + 하나' },
    { number: 30, hangul: '서른', pronunciation: 'seo-reun', usage: 'Đặc biệt cho số 30' },
    { number: 40, hangul: '마흔', pronunciation: 'ma-heun', usage: 'Đặc biệt cho số 40' },
    { number: 50, hangul: '쉰', pronunciation: 'swin', usage: 'Đặc biệt cho số 50' },
    { number: 60, hangul: '예순', pronunciation: 'ye-sun', usage: 'Đặc biệt cho số 60' },
    { number: 70, hangul: '일흔', pronunciation: 'il-heun', usage: 'Đặc biệt cho số 70' },
    { number: 80, hangul: '여든', pronunciation: 'yeo-deun', usage: 'Đặc biệt cho số 80' },
    { number: 90, hangul: '아흔', pronunciation: 'a-heun', usage: 'Đặc biệt cho số 90' },
    { number: 99, hangul: '아흔아홉', pronunciation: 'a-heun-a-hop', usage: '아흔 + 아홉' }
  ];

  // Dữ liệu số Hán Hàn
  const sinoKoreanNumbers = [
    { number: 0, hangul: '영/공', pronunciation: 'yeong/gong', hanja: '零/空' },
    { number: 1, hangul: '일', pronunciation: 'il', hanja: '一' },
    { number: 2, hangul: '이', pronunciation: 'i', hanja: '二' },
    { number: 3, hangul: '삼', pronunciation: 'sam', hanja: '三' },
    { number: 4, hangul: '사', pronunciation: 'sa', hanja: '四' },
    { number: 5, hangul: '오', pronunciation: 'o', hanja: '五' },
    { number: 6, hangul: '육', pronunciation: 'yuk', hanja: '六' },
    { number: 7, hangul: '칠', pronunciation: 'chil', hanja: '七' },
    { number: 8, hangul: '팔', pronunciation: 'pal', hanja: '八' },
    { number: 9, hangul: '구', pronunciation: 'gu', hanja: '九' },
    { number: 10, hangul: '십', pronunciation: 'sip', hanja: '十' },
    { number: 11, hangul: '십일', pronunciation: 'si-bil', hanja: '十一' },
    { number: 20, hangul: '이십', pronunciation: 'i-sip', hanja: '二十' },
    { number: 30, hangul: '삼십', pronunciation: 'sam-sip', hanja: '三十' },
    { number: 100, hangul: '백', pronunciation: 'baek', hanja: '百' },
    { number: 1000, hangul: '천', pronunciation: 'cheon', hanja: '千' },
    { number: 10000, hangul: '만', pronunciation: 'man', hanja: '萬' },
    { number: 100000000, hangul: '억', pronunciation: 'eok', hanja: '億' }
  ];

  // Quy tắc sử dụng số
  const numberUsageRules = [
    {
      category: 'Số thuần Hàn (고유어)',
      description: 'Sử dụng cho đếm tuổi, giờ, đồ vật, người',
      usages: [
        { context: 'Tuổi', example: '스무 살', translation: '20 tuổi' },
        { context: 'Giờ', example: '세 시', translation: '3 giờ' },
        { context: 'Đồ vật', example: '사과 다섯 개', translation: '5 quả táo' },
        { context: 'Người', example: '학생 일곱 명', translation: '7 học sinh' }
      ],
      notes: [
        'Chỉ dùng từ 1-99',
        'Từ 100 trở lên dùng số Hán Hàn',
        'Khi dùng với bộ đếm: 하나→한, 둘→두, 셋→세, 넷→네'
      ]
    },
    {
      category: 'Số Hán Hàn (한자어)',
      description: 'Sử dụng cho phút, ngày, tháng, năm, tiền, số điện thoại',
      usages: [
        { context: 'Phút', example: '삼십 분', translation: '30 phút' },
        { context: 'Ngày', example: '십일 일', translation: 'ngày 11' },
        { context: 'Tháng', example: '십이 월', translation: 'tháng 12' },
        { context: 'Năm', example: '이천이십사 년', translation: 'năm 2024' },
        { context: 'Tiền', example: '만 원', translation: '10.000 won' }
      ],
      notes: [
        'Có thể đếm vô hạn',
        'Dùng cho các đơn vị đo lường',
        'Dùng trong toán học và khoa học'
      ]
    }
  ];

  // Bộ đếm phổ biến
  const commonCounters = [
    { 
      counter: '개', 
      usage: 'Đồ vật chung chung',
      examples: ['사과 세 개', '연필 두 개']
    },
    { 
      counter: '명', 
      usage: 'Người (tôn trọng)',
      examples: ['학생 다섯 명', '선생님 한 명']
    },
    { 
      counter: '마리', 
      usage: 'Động vật',
      examples: ['강아지 두 마리', '고양이 한 마리']
    },
    { 
      counter: '장', 
      usage: 'Giấy, ảnh, thẻ',
      examples: ['사진 세 장', '종이 한 장']
    },
    { 
      counter: '권', 
      usage: 'Sách, tạp chí',
      examples: ['책 네 권', '잡지 두 권']
    },
    { 
      counter: '대', 
      usage: 'Máy móc, xe cộ',
      examples: ['자동차 한 대', '컴퓨터 두 대']
    },
    { 
      counter: '병', 
      usage: 'Chai lọ',
      examples: ['물 세 병', '맥주 두 병']
    },
    { 
      counter: '잔', 
      usage: 'Cốc, chén',
      examples: ['커피 한 잔', '차 두 잔']
    },
    { 
      counter: '벌', 
      usage: 'Quần áo (bộ)',
      examples: ['옷 한 벌', '양복 두 벌']
    },
    { 
      counter: '살', 
      usage: 'Tuổi',
      examples: ['스무 살', '서른 살']
    }
  ];

  // Quy tắc ghép chữ
  const combinationRules = [
    {
      type: 'Cấu trúc cơ bản',
      rule: 'Phụ âm + Nguyên âm',
      examples: [
        { hangul: '가', breakdown: 'ㄱ + ㅏ', pronunciation: 'ga' },
        { hangul: '나', breakdown: 'ㄴ + ㅏ', pronunciation: 'na' },
        { hangul: '다', breakdown: 'ㄷ + ㅏ', pronunciation: 'da' }
      ]
    },
    {
      type: 'Có âm cuối',
      rule: 'Phụ âm + Nguyên âm + Âm cuối',
      examples: [
        { hangul: '간', breakdown: 'ㄱ + ㅏ + ㄴ', pronunciation: 'gan' },
        { hangul: '말', breakdown: 'ㅁ + ㅏ + ㄹ', pronunciation: 'mal' },
        { hangul: '밥', breakdown: 'ㅂ + ㅏ + ㅂ', pronunciation: 'bap' }
      ]
    },
    {
      type: 'Nguyên âm phức',
      rule: 'Phụ âm + Nguyên âm phức',
      examples: [
        { hangul: '과', breakdown: 'ㄱ + ㅘ', pronunciation: 'gwa' },
        { hangul: '쉬', breakdown: 'ㅅ + ㅟ', pronunciation: 'swi' },
        { hangul: '의', breakdown: 'ㅇ + ㅢ', pronunciation: 'ui' }
      ]
    }
  ];

  // Quy tắc phát âm cơ bản
  const pronunciationRules = [
    {
      rule: 'Biến âm liên thanh (연음)',
      description: 'Âm cuối + nguyên âm đầu từ tiếp theo',
      examples: [
        { written: '한국어', pronounced: '[한구거]', explanation: 'ㄱ + ㅓ → 구' },
        { written: '좋아요', pronounced: '[조아요]', explanation: 'ㅎ + ㅏ → 하' },
        { written: '먹어요', pronounced: '[머거요]', explanation: 'ㄱ + ㅓ → 거' }
      ]
    },
    {
      rule: 'Đồng hóa âm (음성 동화)',
      description: 'Âm cuối thay đổi khi gặp âm đầu từ sau',
      examples: [
        { written: '국물', pronounced: '[궁물]', explanation: 'ㄱ + ㅁ → ㅇ + ㅁ' },
        { written: '밥물', pronounced: '[밤물]', explanation: 'ㅂ + ㅁ → ㅁ + ㅁ' },
        { written: '꽃밭', pronounced: '[꼳받]', explanation: 'ㅊ + ㅂ → ㄷ + ㅂ' }
      ]
    },
    {
      rule: 'Khí hóa (기음화)',
      description: 'ㅎ + phụ âm → phụ âm có khí',
      examples: [
        { written: '좋다', pronounced: '[조타]', explanation: 'ㅎ + ㄷ → ㅌ' },
        { written: '놓고', pronounced: '[노코]', explanation: 'ㅎ + ㄱ → ㅋ' },
        { written: '않다', pronounced: '[안타]', explanation: 'ㅎ + ㄷ → ㅌ' }
      ]
    }
  ];

  // Cấu trúc câu cơ bản
  const sentenceStructure = [
    {
      type: 'Trật tự từ cơ bản',
      pattern: 'Chủ ngữ + Tân ngữ + Vị ngữ (SOV)',
      examples: [
        { korean: '저는 밥을 먹습니다.', structure: '저는 (S) + 밥을 (O) + 먹습니다 (V)', vietnamese: 'Tôi ăn cơm.' },
        { korean: '학생이 책을 읽어요.', structure: '학생이 (S) + 책을 (O) + 읽어요 (V)', vietnamese: 'Học sinh đọc sách.' }
      ]
    },
    {
      type: 'Câu có tính từ',
      pattern: 'Chủ ngữ + Tính từ',
      examples: [
        { korean: '날씨가 좋습니다.', structure: '날씨가 (S) + 좋습니다 (Adj)', vietnamese: 'Thời tiết đẹp.' },
        { korean: '이 꽃이 예뻐요.', structure: '이 꽃이 (S) + 예뻐요 (Adj)', vietnamese: 'Bông hoa này đẹp.' }
      ]
    },
    {
      type: 'Câu với danh từ',
      pattern: 'Chủ ngữ + Danh từ + 이다',
      examples: [
        { korean: '저는 학생입니다.', structure: '저는 (S) + 학생 (N) + 입니다', vietnamese: 'Tôi là học sinh.' },
        { korean: '이것은 책이에요.', structure: '이것은 (S) + 책 (N) + 이에요', vietnamese: 'Đây là sách.' }
      ]
    }
  ];

  // Tiểu từ cơ bản
  const basicParticles = [
    { particle: '은/는', function: 'Tiểu từ chủ đề', usage: '은 (sau phụ âm), 는 (sau nguyên âm)', examples: ['저는 학생이에요.', '책은 재미있어요.'] },
    { particle: '이/가', function: 'Tiểu từ chủ ngữ', usage: '이 (sau phụ âm), 가 (sau nguyên âm)', examples: ['누가 왔어요?', '비가 와요.'] },
    { particle: '을/를', function: 'Tiểu từ tân ngữ', usage: '을 (sau phụ âm), 를 (sau nguyên âm)', examples: ['책을 읽어요.', '물을 마셔요.'] },
    { particle: '에', function: 'Thời gian, địa điểm', usage: 'Chỉ thời điểm, vị trí tĩnh', examples: ['학교에 가요.', '3시에 만나요.'] },
    { particle: '에서', function: 'Nơi xảy ra hành động', usage: 'Chỉ địa điểm diễn ra hành động', examples: ['도서관에서 공부해요.', '집에서 쉬어요.'] },
    { particle: '와/과', function: 'Liên từ "và"', usage: '와 (sau nguyên âm), 과 (sau phụ âm)', examples: ['사과와 바나나', '빵과 우유'] }
  ];

  // Dữ liệu số thuần Hàn
  const nativeKoreanNumbers = [
    { number: 1, hangul: '하나', pronunciation: 'hana', usage: '한 (khi đứng trước danh từ)' },
    { number: 2, hangul: '둘', pronunciation: 'dul', usage: '두 (khi đứng trước danh từ)' },
    { number: 3, hangul: '셋', pronunciation: 'set', usage: '세 (khi đứng trước danh từ)' },
    { number: 4, hangul: '넷', pronunciation: 'net', usage: '네 (khi đứng trước danh từ)' },
    { number: 5, hangul: '다섯', pronunciation: 'daseot', usage: '다섯' },
    { number: 10, hangul: '열', pronunciation: 'yeol', usage: '열' },
    { number: 20, hangul: '스물', pronunciation: 'seumul', usage: '스무 (khi đứng trước danh từ)' },
    { number: 30, hangul: '서른', pronunciation: 'seoreun', usage: '서른' },
    { number: 99, hangul: '아흔아홉', pronunciation: 'aheun-ahop', usage: '아흔아홉' }
  ];

  // Dữ liệu số Hán Hàn
  const sinoKoreanNumbers = [
    { number: 0, hangul: '영/공', hanja: '零/空', pronunciation: 'yeong/gong' },
    { number: 1, hangul: '일', hanja: '一', pronunciation: 'il' },
    { number: 10, hangul: '십', hanja: '十', pronunciation: 'sip' },
    { number: 100, hangul: '백', hanja: '百', pronunciation: 'baek' },
    { number: 1000, hangul: '천', hanja: '千', pronunciation: 'cheon' },
    { number: 10000, hangul: '만', hanja: '萬', pronunciation: 'man' }
  ];

  // Dữ liệu số cơ bản  
  const basicNumbers = [
    { korean: '하나', sino: '일', number: 1 },
    { korean: '둘', sino: '이', number: 2 },
    { korean: '셋', sino: '삼', number: 3 },
    { korean: '넷', sino: '사', number: 4 },
    { korean: '다섯', sino: '오', number: 5 },
    { korean: '열', sino: '십', number: 10 }
  ];

  const speakHangul = (text) => {
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

  const sections = [
    { key: 'vowels', title: 'Nguyên âm', icon: BookOpen },
    { key: 'consonants', title: 'Phụ âm', icon: FileText },
    { key: 'numbers', title: 'Số', icon: FileText },
    { key: 'rules', title: 'Quy tắc', icon: MessageSquare },
    { key: 'sentence', title: 'Cấu trúc câu', icon: MessageSquare }
  ];

  const renderVowels = () => (
    <div className="space-y-8">
      {/* Nguyên âm cơ bản */}
      <section>
        <h3 className="text-2xl font-bold text-secondary mb-4">Nguyên âm cơ bản (기본 모음)</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {basicVowels.map((vowel, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{vowel.hangul}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{vowel.romanization}</div>
                <div className="text-sm text-gray-500 mb-2">{vowel.ipa}</div>
                <div className="text-xs text-gray-600 mb-3">{vowel.description}</div>
                <button
                  onClick={() => speakHangul(vowel.hangul)}
                  className="text-primary hover:text-orange-700 transition-colors"
                >
                  <Volume2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nguyên âm phức */}
      <section>
        <h3 className="text-2xl font-bold text-secondary mb-4">Nguyên âm phức (복합 모음)</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {complexVowels.map((vowel, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{vowel.hangul}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{vowel.romanization}</div>
                <div className="text-sm text-gray-500 mb-2">{vowel.ipa}</div>
                <div className="text-xs text-gray-600 mb-3">{vowel.description}</div>
                <button
                  onClick={() => speakHangul(vowel.hangul)}
                  className="text-primary hover:text-orange-700 transition-colors"
                >
                  <Volume2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const renderConsonants = () => (
    <div className="space-y-8">
      {/* Phụ âm cơ bản */}
      <section>
        <h3 className="text-2xl font-bold text-secondary mb-4">Phụ âm cơ bản (기본 자음)</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {basicConsonants.map((consonant, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{consonant.hangul}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{consonant.romanization}</div>
                <div className="text-sm text-gray-500 mb-2">{consonant.ipa}</div>
                <div className="text-xs text-gray-600 mb-3">{consonant.description}</div>
                <button
                  onClick={() => speakHangul(consonant.hangul + 'ㅏ')}
                  className="text-primary hover:text-orange-700 transition-colors"
                >
                  <Volume2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Phụ âm căng */}
      <section>
        <h3 className="text-2xl font-bold text-secondary mb-4">Phụ âm căng (된소리)</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {tensedConsonants.map((consonant, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{consonant.hangul}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{consonant.romanization}</div>
                <div className="text-sm text-gray-500 mb-2">{consonant.ipa}</div>
                <div className="text-xs text-gray-600 mb-3">{consonant.description}</div>
                <button
                  onClick={() => speakHangul(consonant.hangul + 'ㅏ')}
                  className="text-primary hover:text-orange-700 transition-colors"
                >
                  <Volume2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Âm cuối */}
      <section>
        <h3 className="text-2xl font-bold text-secondary mb-4">Âm cuối (받침)</h3>
        <div className="space-y-4">
          {finalConsonants.map((final, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-md border">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-2xl font-bold text-primary min-w-[150px]">{final.hangul}</div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-700 mb-1">Phát âm: {final.sound}</div>
                  <div className="text-sm text-gray-600 mb-2">Ví dụ: {final.example}</div>
                  <div className="text-xs text-gray-500">{final.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const renderNumbers = () => (
    <div className="space-y-8">
      {/* Số thuần Hàn */}
      <section>
        <h3 className="text-2xl font-bold text-secondary mb-4">Số thuần Hàn (고유어 수사)</h3>
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-blue-800 font-medium">
            Dùng cho đếm tuổi, giờ, đồ vật, người. Chỉ dùng từ 1-99, từ 100 trở lên dùng số Hán Hàn.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {nativeKoreanNumbers.map((num, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600 mb-1">{num.number}</div>
                <div className="text-3xl font-bold text-primary mb-2">{num.hangul}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">[{num.pronunciation}]</div>
                <div className="text-xs text-gray-600 mb-3">{num.usage}</div>
                <button
                  onClick={() => speakHangul(num.hangul)}
                  className="text-primary hover:text-orange-700 transition-colors"
                >
                  <Volume2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Số Hán Hàn */}
      <section>
        <h3 className="text-2xl font-bold text-secondary mb-4">Số Hán Hàn (한자어 수사)</h3>
        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <p className="text-green-800 font-medium">
            Dùng cho phút, ngày, tháng, năm, tiền, số điện thoại. Có thể đếm vô hạn.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sinoKoreanNumbers.map((num, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600 mb-1">{num.number.toLocaleString()}</div>
                <div className="text-3xl font-bold text-primary mb-2">{num.hangul}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">[{num.pronunciation}]</div>
                <div className="text-sm text-gray-500 mb-3">{num.hanja}</div>
                <button
                  onClick={() => speakHangul(num.hangul)}
                  className="text-primary hover:text-orange-700 transition-colors"
                >
                  <Volume2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quy tắc sử dụng */}
      <section>
        <h3 className="text-2xl font-bold text-secondary mb-4">Quy tắc sử dụng số</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {numberUsageRules.map((rule, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md border">
              <h4 className="text-xl font-bold text-gray-800 mb-2">{rule.category}</h4>
              <p className="text-gray-600 mb-4">{rule.description}</p>
              
              <div className="space-y-4 mb-6">
                <h5 className="font-semibold text-gray-700">Ví dụ sử dụng:</h5>
                {rule.usages.map((usage, usageIdx) => (
                  <div key={usageIdx} className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium text-gray-700">{usage.context}:</span>
                      <button
                        onClick={() => speakHangul(usage.example)}
                        className="text-primary hover:text-orange-700 transition-colors"
                      >
                        <Volume2 size={16} />
                      </button>
                    </div>
                    <div className="text-primary font-bold">{usage.example}</div>
                    <div className="text-sm text-gray-600">{usage.translation}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <h5 className="font-semibold text-gray-700">Ghi chú:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  {rule.notes.map((note, noteIdx) => (
                    <li key={noteIdx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bộ đếm phổ biến */}
      <section>
        <h3 className="text-2xl font-bold text-secondary mb-4">Bộ đếm phổ biến (분류사)</h3>
        <div className="bg-yellow-50 p-4 rounded-lg mb-6">
          <p className="text-yellow-800 font-medium">
            Bộ đếm được sử dụng cùng với số thuần Hàn để đếm các loại đồ vật khác nhau.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {commonCounters.map((counter, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{counter.counter}</div>
                <div className="text-sm font-semibold text-gray-700 mb-3">{counter.usage}</div>
                <div className="space-y-2">
                  {counter.examples.map((example, exIdx) => (
                    <div key={exIdx} className="bg-gray-50 p-2 rounded">
                      <div className="text-sm text-primary font-medium">{example}</div>
                      <button
                        onClick={() => speakHangul(example)}
                        className="text-xs text-primary hover:text-orange-700 transition-colors mt-1"
                      >
                        <Volume2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const renderRules = () => (
    <div className="space-y-8">
      {/* Quy tắc ghép chữ */}
      <section>
        <h3 className="text-2xl font-bold text-secondary mb-4">Quy tắc ghép chữ (조합 규칙)</h3>
        <div className="space-y-6">
          {combinationRules.map((rule, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md border">
              <h4 className="text-xl font-bold text-gray-800 mb-2">{rule.type}</h4>
              <p className="text-gray-600 mb-4">{rule.rule}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {rule.examples.map((example, exIdx) => (
                  <div key={exIdx} className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{example.hangul}</div>
                    <div className="text-sm text-gray-600 mb-1">{example.breakdown}</div>
                    <div className="text-lg font-semibold text-gray-700">[{example.pronunciation}]</div>
                    <button
                      onClick={() => speakHangul(example.hangul)}
                      className="mt-2 text-primary hover:text-orange-700 transition-colors"
                    >
                      <Volume2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quy tắc phát âm */}
      <section>
        <h3 className="text-2xl font-bold text-secondary mb-4">Quy tắc phát âm (발음 규칙)</h3>
        <div className="space-y-6">
          {pronunciationRules.map((rule, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md border">
              <h4 className="text-xl font-bold text-gray-800 mb-2">{rule.rule}</h4>
              <p className="text-gray-600 mb-4">{rule.description}</p>
              <div className="space-y-3">
                {rule.examples.map((example, exIdx) => (
                  <div key={exIdx} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                      <div className="text-lg font-bold text-primary">{example.written}</div>
                      <div className="text-gray-400">→</div>
                      <div className="text-lg font-bold text-secondary">{example.pronounced}</div>
                      <div className="text-sm text-gray-600 ml-auto">{example.explanation}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const renderSentence = () => (
    <div className="space-y-8">
      {/* Cấu trúc câu */}
      <section>
        <h3 className="text-2xl font-bold text-secondary mb-4">Cấu trúc câu cơ bản</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {sentenceStructure.map((structure, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md border flex flex-col h-full">
              <h4 className="text-xl font-bold text-gray-800 mb-2">{structure.type}</h4>
              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                <div className="font-semibold text-blue-800">{structure.pattern}</div>
              </div>
              <div className="space-y-4 flex-1">
                {structure.examples.map((example, exIdx) => (
                  <div key={exIdx} className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-bold text-primary mb-2">{example.korean}</div>
                    <div className="text-sm text-gray-600 mb-2">{example.structure}</div>
                    <div className="text-gray-700">{example.vietnamese}</div>
                    <button
                      onClick={() => speakHangul(example.korean)}
                      className="mt-2 text-primary hover:text-orange-700 transition-colors"
                    >
                      <Volume2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tiểu từ cơ bản */}
      <section>
        <h3 className="text-2xl font-bold text-secondary mb-4">Tiểu từ cơ bản (조사)</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {basicParticles.map((particle, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md border flex flex-col h-full">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-primary mb-2">{particle.particle}</div>
                <div className="font-semibold text-gray-700 mb-2">{particle.function}</div>
                <div className="text-sm text-gray-600">{particle.usage}</div>
              </div>
              <div className="space-y-2 flex-1">
                {particle.examples.map((example, exIdx) => (
                  <div key={exIdx} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                    <div className="text-lg text-primary">{example}</div>
                    <button
                      onClick={() => speakHangul(example)}
                      className="text-primary hover:text-orange-700 transition-colors"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  return (
    <>
      <SEO
        title="Cơ bản tiếng Hàn - Bảng chữ cái Hangul | Hangul Learning" 
        description="Học bảng chữ cái Hangul với nguyên âm, phụ âm, quy tắc phát âm và cấu trúc câu cơ bản trong tiếng Hàn theo lộ trình Tiếng Hàn Tổng Hợp."
      />
      <div className="min-h-screen bg-light-gray p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight">
              Cơ bản tiếng Hàn
            </h1>
            <p className="mt-3 text-lg text-text-light max-w-2xl mx-auto">
              Bảng chữ cái Hangul và quy tắc cơ bản theo lộ trình Tiếng Hàn Tổng Hợp.
            </p>
          </header>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-1/3 xl:w-1/4 lg:sticky lg:top-8 self-start bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-secondary mb-4">Mục lục</h2>
              <nav className="space-y-2">
                {sections.map(({ key, title, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setSelectedSection(key)}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors duration-200 flex items-center gap-3 ${
                      selectedSection === key 
                        ? 'bg-primary text-white shadow-sm' 
                        : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-primary'
                    }`}
                  >
                    <Icon size={20} />
                    {title}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                {selectedSection === 'vowels' && renderVowels()}
                {selectedSection === 'consonants' && renderConsonants()}
                {selectedSection === 'numbers' && renderNumbers()}
                {selectedSection === 'rules' && renderRules()}
                {selectedSection === 'sentence' && renderSentence()}
              </div>
              
              {/* Ad Section */}
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

export default Basic;