import React, { useState, useMemo } from 'react';
import { Search, Volume2, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

function Vocabulary() {
  // Complete Level 1 Data - Sơ cấp 1 (15 bài đầy đủ)
  const level1Lessons = {
    lesson1: {
      title: "Bài 1: 안녕하세요 (Xin chào)",
      words: [
        { korean: "안녕하세요", pronunciation: "an-nyeong-ha-se-yo", meaning: "Xin chào (lịch sự)", type: "인사말" },
        { korean: "안녕", pronunciation: "an-nyeong", meaning: "Chào (thân mật)", type: "인사말" },
        { korean: "만나서 반갑습니다", pronunciation: "man-na-seo ban-gap-seup-ni-da", meaning: "rất vui được gặp", type: "인사말" },
        { korean: "이름", pronunciation: "i-reum", meaning: "tên", type: "명사" },
        { korean: "저", pronunciation: "jeo", meaning: "tôi (khiêm nhường)", type: "대명사" },
        { korean: "나", pronunciation: "na", meaning: "tôi (thân mật)", type: "대명사" },
        { korean: "입니다", pronunciation: "ip-ni-da", meaning: "là (tôn kính)", type: "동사" },
        { korean: "이에요/예요", pronunciation: "i-e-yo/ye-yo", meaning: "là (thân thiện)", type: "동사" },
        { korean: "네", pronunciation: "ne", meaning: "vâng, có", type: "부사" },
        { korean: "아니요", pronunciation: "a-ni-yo", meaning: "không", type: "부사" },
        { korean: "감사합니다", pronunciation: "gam-sa-ham-ni-da", meaning: "cảm ơn", type: "인사말" },
        { korean: "고맙습니다", pronunciation: "go-map-seup-ni-da", meaning: "cảm ơn (thân thiện)", type: "인사말" },
        { korean: "죄송합니다", pronunciation: "joe-song-ham-ni-da", meaning: "xin lỗi", type: "인사말" },
        { korean: "미안합니다", pronunciation: "mi-an-ham-ni-da", meaning: "xin lỗi (thân thiện)", type: "인사말" },
        { korean: "처음 뵙겠습니다", pronunciation: "cheo-eum boep-get-seup-ni-da", meaning: "lần đầu được gặp", type: "인사말" },
        { korean: "학생", pronunciation: "hak-saeng", meaning: "học sinh", type: "명사" },
        { korean: "선생님", pronunciation: "seon-saeng-nim", meaning: "giáo viên", type: "명사" },
        { korean: "회사", pronunciation: "hoe-sa", meaning: "công ty", type: "명사" },
        { korean: "학교", pronunciation: "hak-gyo", meaning: "trường học", type: "명사" },
        { korean: "만나다", pronunciation: "man-na-da", meaning: "gặp", type: "동사" }
      ]
    },
    lesson2: {
      title: "Bài 2: 소개 (Giới thiệu)",
      words: [
        { korean: "국적", pronunciation: "guk-jeok", meaning: "quốc tịch", type: "명사" },
        { korean: "나이", pronunciation: "na-i", meaning: "tuổi", type: "명사" },
        { korean: "살", pronunciation: "sal", meaning: "tuổi", type: "명사" },
        { korean: "몇", pronunciation: "myeot", meaning: "mấy", type: "수사" },
        { korean: "어디", pronunciation: "eo-di", meaning: "đâu", type: "부사" },
        { korean: "어느", pronunciation: "eo-neu", meaning: "nào", type: "관형사" },
        { korean: "무엇", pronunciation: "mu-eot", meaning: "gì", type: "대명사" },
        { korean: "누구", pronunciation: "nu-gu", meaning: "ai", type: "대명사" },
        { korean: "언제", pronunciation: "eon-je", meaning: "khi nào", type: "부사" },
        { korean: "어떻게", pronunciation: "eo-tteo-ke", meaning: "như thế nào", type: "부사" },
        { korean: "왜", pronunciation: "wae", meaning: "tại sao", type: "부사" },
        { korean: "직업", pronunciation: "ji-geop", meaning: "nghề nghiệp", type: "명사" },
        { korean: "의사", pronunciation: "ui-sa", meaning: "bác sĩ", type: "명사" },
        { korean: "간호사", pronunciation: "gan-ho-sa", meaning: "y tá", type: "명사" },
        { korean: "요리사", pronunciation: "yo-ri-sa", meaning: "đầu bếp", type: "명사" },
        { korean: "운전사", pronunciation: "un-jeon-sa", meaning: "tài xế", type: "명사" },
        { korean: "경찰", pronunciation: "gyeong-chal", meaning: "cảnh sát", type: "명사" },
        { korean: "소방관", pronunciation: "so-bang-gwan", meaning: "lính cứu hỏa", type: "명사" },
        { korean: "사업가", pronunciation: "sa-eop-ga", meaning: "doanh nhân", type: "명사" },
        { korean: "주부", pronunciation: "ju-bu", meaning: "nội trợ", type: "명사" }
      ]
    },
    lesson3: {
      title: "Bài 3: 가족 (Gia đình)",
      words: [
        { korean: "가족", pronunciation: "ga-jok", meaning: "gia đình", type: "명사" },
        { korean: "부모님", pronunciation: "bu-mo-nim", meaning: "bố mẹ", type: "명사" },
        { korean: "아버지", pronunciation: "a-beo-ji", meaning: "bố", type: "명사" },
        { korean: "어머니", pronunciation: "eo-meo-ni", meaning: "mẹ", type: "명사" },
        { korean: "아빠", pronunciation: "a-ppa", meaning: "ba", type: "명사" },
        { korean: "엄마", pronunciation: "eom-ma", meaning: "má", type: "명사" },
        { korean: "아들", pronunciation: "a-deul", meaning: "con trai", type: "명사" },
        { korean: "딸", pronunciation: "ttal", meaning: "con gái", type: "명사" },
        { korean: "형", pronunciation: "hyeong", meaning: "anh trai (nam gọi)", type: "명사" },
        { korean: "누나", pronunciation: "nu-na", meaning: "chị gái (nam gọi)", type: "명사" },
        { korean: "오빠", pronunciation: "o-ppa", meaning: "anh trai (nữ gọi)", type: "명사" },
        { korean: "언니", pronunciation: "eon-ni", meaning: "chị gái (nữ gọi)", type: "명사" },
        { korean: "남동생", pronunciation: "nam-dong-saeng", meaning: "em trai", type: "명사" },
        { korean: "여동생", pronunciation: "yeo-dong-saeng", meaning: "em gái", type: "명사" },
        { korean: "할아버지", pronunciation: "ha-ra-beo-ji", meaning: "ông", type: "명사" },
        { korean: "할머니", pronunciation: "hal-meo-ni", meaning: "bà", type: "명사" },
        { korean: "삼촌", pronunciation: "sam-chon", meaning: "chú", type: "명사" },
        { korean: "이모", pronunciation: "i-mo", meaning: "dì", type: "명사" },
        { korean: "고모", pronunciation: "go-mo", meaning: "cô", type: "명사" },
        { korean: "사촌", pronunciation: "sa-chon", meaning: "anh em họ", type: "명사" }
      ]
    },
    lesson4: {
      title: "Bài 4: 집 (Nhà)",
      words: [
        { korean: "집", pronunciation: "jip", meaning: "nhà", type: "명사" },
        { korean: "방", pronunciation: "bang", meaning: "phòng", type: "명사" },
        { korean: "거실", pronunciation: "geo-sil", meaning: "phòng khách", type: "명사" },
        { korean: "침실", pronunciation: "chim-sil", meaning: "phòng ngủ", type: "명사" },
        { korean: "부엌", pronunciation: "bu-eok", meaning: "nhà bếp", type: "명사" },
        { korean: "화장실", pronunciation: "hwa-jang-sil", meaning: "nhà vệ sinh", type: "명사" },
        { korean: "현관", pronunciation: "hyeon-gwan", meaning: "lối vào", type: "명사" },
        { korean: "베란다", pronunciation: "be-ran-da", meaning: "ban công", type: "명사" },
        { korean: "계단", pronunciation: "gye-dan", meaning: "cầu thang", type: "명사" },
        { korean: "문", pronunciation: "mun", meaning: "cửa", type: "명사" },
        { korean: "창문", pronunciation: "chang-mun", meaning: "cửa sổ", type: "명사" },
        { korean: "침대", pronunciation: "chim-dae", meaning: "giường", type: "명사" },
        { korean: "책상", pronunciation: "chaek-sang", meaning: "bàn học", type: "명사" },
        { korean: "의자", pronunciation: "ui-ja", meaning: "ghế", type: "명사" },
        { korean: "소파", pronunciation: "so-pa", meaning: "ghế sofa", type: "명사" },
        { korean: "냉장고", pronunciation: "naeng-jang-go", meaning: "tủ lạnh", type: "명사" },
        { korean: "세탁기", pronunciation: "se-tak-gi", meaning: "máy giặt", type: "명사" },
        { korean: "텔레비전", pronunciation: "tel-le-bi-jeon", meaning: "tivi", type: "명사" },
        { korean: "컴퓨터", pronunciation: "keom-pyu-teo", meaning: "máy tính", type: "명사" },
        { korean: "전화기", pronunciation: "jeon-hwa-gi", meaning: "điện thoại", type: "명사" }
      ]
    },
    lesson5: {
      title: "Bài 5: 시간 (Thời gian)",
      words: [
        { korean: "시간", pronunciation: "si-gan", meaning: "thời gian", type: "명사" },
        { korean: "시", pronunciation: "si", meaning: "giờ", type: "명사" },
        { korean: "분", pronunciation: "bun", meaning: "phút", type: "명사" },
        { korean: "초", pronunciation: "cho", meaning: "giây", type: "명사" },
        { korean: "오전", pronunciation: "o-jeon", meaning: "buổi sáng", type: "명사" },
        { korean: "오후", pronunciation: "o-hu", meaning: "buổi chiều", type: "명사" },
        { korean: "아침", pronunciation: "a-chim", meaning: "sáng", type: "명사" },
        { korean: "낮", pronunciation: "nat", meaning: "trưa", type: "명사" },
        { korean: "저녁", pronunciation: "jeo-nyeok", meaning: "tối", type: "명사" },
        { korean: "밤", pronunciation: "bam", meaning: "đêm", type: "명사" },
        { korean: "어제", pronunciation: "eo-je", meaning: "hôm qua", type: "명사" },
        { korean: "오늘", pronunciation: "o-neul", meaning: "hôm nay", type: "명사" },
        { korean: "내일", pronunciation: "nae-il", meaning: "ngày mai", type: "명사" },
        { korean: "지난주", pronunciation: "ji-nan-ju", meaning: "tuần trước", type: "명사" },
        { korean: "이번 주", pronunciation: "i-beon ju", meaning: "tuần này", type: "명사" },
        { korean: "다음 주", pronunciation: "da-eum ju", meaning: "tuần sau", type: "명사" },
        { korean: "지난달", pronunciation: "ji-nan-dal", meaning: "tháng trước", type: "명사" },
        { korean: "이번 달", pronunciation: "i-beon dal", meaning: "tháng này", type: "명사" },
        { korean: "다음 달", pronunciation: "da-eum dal", meaning: "tháng sau", type: "명사" },
        { korean: "작년", pronunciation: "jang-nyeon", meaning: "năm ngoái", type: "명사" }
      ]
    }
  };

  // Level 2 Data - Sơ cấp 2 (15 bài đầy đủ từ file.txt)
  const level2Lessons = {
    lesson1: {
      title: "Bài 1: 만남 (Gặp gỡ)",
      words: [
        { korean: "가져오다", pronunciation: "ga-jyeo-o-da", meaning: "mang đến", type: "동사" },
        { korean: "걱정", pronunciation: "geok-jeong", meaning: "lo lắng", type: "명사" },
        { korean: "닫다", pronunciation: "dat-da", meaning: "đóng", type: "동사" },
        { korean: "댁", pronunciation: "daek", meaning: "nhà (kính ngữ)", type: "명사" },
        { korean: "들다", pronunciation: "deul-da", meaning: "cầm, xách", type: "동사" },
        { korean: "들어가다", pronunciation: "deu-reo-ga-da", meaning: "đi vào", type: "동사" },
        { korean: "만지다", pronunciation: "man-ji-da", meaning: "sờ, chạm vào", type: "동사" },
        { korean: "먼저", pronunciation: "meon-jeo", meaning: "trước tiên", type: "부사" },
        { korean: "명함", pronunciation: "myeong-ham", meaning: "danh thiếp", type: "명사" },
        { korean: "벗다", pronunciation: "beot-da", meaning: "cởi ra", type: "동사" },
        { korean: "비슷하다", pronunciation: "bi-seu-ta-da", meaning: "tương tự", type: "형용사" },
        { korean: "사용하다", pronunciation: "sa-yong-ha-da", meaning: "sử dụng", type: "동사" },
        { korean: "상담", pronunciation: "sang-dam", meaning: "tư vấn", type: "명사" },
        { korean: "상담소", pronunciation: "sang-dam-so", meaning: "văn phòng tư vấn", type: "명사" },
        { korean: "설탕", pronunciation: "seol-tang", meaning: "đường", type: "명사" },
        { korean: "소리를 내다", pronunciation: "so-ri-reul nae-da", meaning: "phát ra tiếng", type: "동사" },
        { korean: "심심하다", pronunciation: "sim-sim-ha-da", meaning: "buồn chán", type: "형용사" },
        { korean: "씻다", pronunciation: "ssit-da", meaning: "rửa", type: "동사" },
        { korean: "악수하다", pronunciation: "ak-su-ha-da", meaning: "bắt tay", type: "동사" },
        { korean: "안내", pronunciation: "an-nae", meaning: "hướng dẫn", type: "명사" },
        { korean: "연락", pronunciation: "yeol-lak", meaning: "liên lạc", type: "명사" },
        { korean: "예절", pronunciation: "ye-jeol", meaning: "lễ nghi", type: "명사" },
        { korean: "올림", pronunciation: "ol-lim", meaning: "kính thư", type: "명사" },
        { korean: "일찍", pronunciation: "il-jjik", meaning: "sớm", type: "부사" },
        { korean: "정장", pronunciation: "jeong-jang", meaning: "trang phục trang trọng", type: "명사" },
        { korean: "조심하다", pronunciation: "jo-sim-ha-da", meaning: "cẩn thận", type: "동사" },
        { korean: "직원", pronunciation: "ji-gwon", meaning: "nhân viên", type: "명사" },
        { korean: "찍다", pronunciation: "jjik-da", meaning: "chụp ảnh", type: "동사" },
        { korean: "켜다", pronunciation: "kyeo-da", meaning: "bật", type: "동사" },
        { korean: "크림", pronunciation: "keu-rim", meaning: "kem", type: "명사" }
      ]
    },
    lesson2: {
      title: "Bài 2: 약속 (Hẹn gặp)",
      words: [
        { korean: "감기", pronunciation: "gam-gi", meaning: "cảm", type: "명사" },
        { korean: "갑자기", pronunciation: "gap-ja-gi", meaning: "đột nhiên", type: "부사" },
        { korean: "고치다", pronunciation: "go-chi-da", meaning: "sửa, chữa", type: "동사" },
        { korean: "과 사무실", pronunciation: "gwa sa-mu-sil", meaning: "văn phòng khoa", type: "명사" },
        { korean: "광장", pronunciation: "gwang-jang", meaning: "quảng trường", type: "명사" },
        { korean: "길", pronunciation: "gil", meaning: "con đường", type: "명사" },
        { korean: "나가다", pronunciation: "na-ga-da", meaning: "đi ra đón", type: "동사" },
        { korean: "나오다", pronunciation: "na-o-da", meaning: "đi ra đón", type: "동사" },
        { korean: "논문", pronunciation: "non-mun", meaning: "luận văn", type: "명사" },
        { korean: "늦다", pronunciation: "neut-da", meaning: "muộn", type: "형용사" },
        { korean: "늦잠", pronunciation: "neut-jam", meaning: "ngủ dậy muộn", type: "명사" },
        { korean: "담배", pronunciation: "dam-bae", meaning: "thuốc lá", type: "명사" },
        { korean: "대다", pronunciation: "dae-da", meaning: "chạm tay", type: "동사" },
        { korean: "등산화", pronunciation: "deung-san-hwa", meaning: "giày leo núi", type: "명사" },
        { korean: "떠들다", pronunciation: "tteo-deul-da", meaning: "làm ồn", type: "동사" },
        { korean: "라이터", pronunciation: "ra-i-teo", meaning: "hộp quẹt", type: "명사" },
        { korean: "문제가 있다", pronunciation: "mun-je-ga it-da", meaning: "có vấn đề", type: "동사" },
        { korean: "물세탁", pronunciation: "mul-se-tak", meaning: "giặt bằng nước", type: "명사" },
        { korean: "바뀌다", pronunciation: "ba-kkwi-da", meaning: "bị thay đổi", type: "동사" },
        { korean: "변경", pronunciation: "byeon-gyeong", meaning: "thay đổi", type: "명사" },
        { korean: "뷔페", pronunciation: "bwi-pe", meaning: "ăn tự chọn", type: "명사" },
        { korean: "빠지다", pronunciation: "ppa-ji-da", meaning: "sót", type: "동사" },
        { korean: "알다", pronunciation: "al-da", meaning: "biết", type: "동사" },
        { korean: "외출하다", pronunciation: "oe-chul-ha-da", meaning: "đi ra ngoài", type: "동사" },
        { korean: "유의 사항", pronunciation: "yu-ui sa-hang", meaning: "điểm cần lưu ý", type: "명사" },
        { korean: "잊다", pronunciation: "it-da", meaning: "quên", type: "동사" },
        { korean: "절대", pronunciation: "jeol-dae", meaning: "tuyệt đối", type: "부사" },
        { korean: "점검하다", pronunciation: "jeom-geom-ha-da", meaning: "kiểm tra", type: "동사" },
        { korean: "정각", pronunciation: "jeong-gak", meaning: "giờ chính xác", type: "명사" },
        { korean: "준비물", pronunciation: "jun-bi-mul", meaning: "vật chuẩn bị", type: "명사" },
        { korean: "피우다", pronunciation: "pi-u-da", meaning: "hút thuốc lá", type: "동사" },
        { korean: "확인", pronunciation: "hwa-gin", meaning: "xác nhận", type: "명사" },
        { korean: "회비", pronunciation: "hoe-bi", meaning: "hội phí", type: "명사" },
        { korean: "회의실", pronunciation: "hoe-ui-sil", meaning: "phòng họp", type: "명사" },
        { korean: "휴게실", pronunciation: "hyu-ge-sil", meaning: "phòng nghỉ", type: "명사" }
      ]
    }
  };

  // Complete vocabulary data for all 3 levels
  const vocabularyData = {
    level1: {
      title: "Tiếng Hàn Tổng Hợp - Sơ cấp 1",
      lessons: level1Lessons
    },
    level2: {
      title: "Tiếng Hàn Tổng Hợp - Sơ cấp 2", 
      lessons: level2Lessons
    },
    level3: {
      title: "Tiếng Hàn Tổng Hợp - Trung cấp 1",
      lessons: {
        lesson1: {
          title: "Bài 1: 학교생활 (Đời sống học đường)",
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
        }
      }
    }
  };

  const [selectedLevel, setSelectedLevel] = useState('level1');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlashcardMode, setIsFlashcardMode] = useState(false);

  const currentLevelData = vocabularyData[selectedLevel];
  const filteredLessons = useMemo(() => {
    if (!currentLevelData?.lessons) return [];
    
    const lessons = Object.entries(currentLevelData.lessons).map(([key, lesson]) => ({
      key,
      ...lesson
    }));

    if (!searchTerm) return lessons;

    return lessons.filter(lesson => 
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.words.some(word => 
        word.korean.includes(searchTerm) ||
        word.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.pronunciation.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [currentLevelData, searchTerm]);

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

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const speakWord = (text) => {
    if (!('speechSynthesis' in window)) return;

    const synth = window.speechSynthesis;

    const speak = () => {
      const voices = synth.getVoices().filter((v) => v.lang && v.lang.startsWith('ko'));

      const preferredVoice =
        voices.find((v) => /Google|Microsoft|Apple|Naver|Kakao/i.test(v.name)) || voices[0];

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      synth.cancel();
      synth.speak(utterance);
    };

    if (synth.getVoices().length === 0) {
      synth.addEventListener('voiceschanged', speak, { once: true });
    } else {
      speak();
    }
  };

  if (isFlashcardMode && selectedLesson) {
    const currentWord = selectedLesson.words[currentCardIndex];
    
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => setIsFlashcardMode(false)}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 flex items-center gap-2"
          >
            <ChevronLeft size={20} />
            Quay lại
          </button>
          <div className="text-lg font-semibold">
            {currentCardIndex + 1} / {selectedLesson.words.length}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-2">{selectedLesson.title}</h2>
          <div className="text-center text-gray-600">Chế độ Flashcard</div>
        </div>

        <div className="flex justify-center mb-8">
          <div 
            className="relative w-80 h-48 cursor-pointer"
            onClick={flipCard}
            style={{ perspective: '1000px' }}
          >
            <div 
              className="absolute inset-0 w-full h-full transition-transform duration-500"
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}
            >
              {/* Front */}
              <div 
                className="absolute inset-0 w-full h-full bg-blue-500 text-white rounded-lg shadow-lg flex flex-col items-center justify-center"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="text-3xl font-bold mb-2">{currentWord.korean}</div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speakWord(currentWord.korean);
                  }}
                  className="text-white hover:text-blue-200"
                >
                  <Volume2 size={24} />
                </button>
              </div>
              
              {/* Back */}
              <div 
                className="absolute inset-0 w-full h-full bg-green-500 text-white rounded-lg shadow-lg flex flex-col items-center justify-center"
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <div className="text-xl mb-2">{currentWord.pronunciation}</div>
                <div className="text-2xl font-bold mb-2">{currentWord.meaning}</div>
                <div className="text-sm bg-white bg-opacity-20 px-2 py-1 rounded">{currentWord.type}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={prevCard}
            disabled={currentCardIndex === 0}
            className="px-6 py-3 bg-blue-500 text-white rounded disabled:bg-gray-300 flex items-center gap-2"
          >
            <ChevronLeft size={20} />
            Trước
          </button>
          
          <button
            onClick={flipCard}
            className="px-6 py-3 bg-purple-500 text-white rounded flex items-center gap-2"
          >
            <RotateCcw size={20} />
            Lật thẻ
          </button>
          
          <button
            onClick={nextCard}
            disabled={currentCardIndex === selectedLesson.words.length - 1}
            className="px-6 py-3 bg-blue-500 text-white rounded disabled:bg-gray-300 flex items-center gap-2"
          >
            Sau
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  const getHeaderText = () => {
    switch(selectedLevel) {
      case 'level1':
        return 'Sơ cấp 1';
      case 'level2':
        return 'Sơ cấp 2';
      case 'level3':
        return 'Trung cấp 1';
      default:
        return 'Từ vựng';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Từ vựng tiếng Hàn</h1>
        <p className="text-xl text-gray-600">Tiếng Hàn Tổng Hợp - {getHeaderText()}</p>
      </div>

      {/* Level Selection */}
      <div className="mb-8 flex justify-center gap-4">
        {['level1', 'level2', 'level3'].map((level) => (
          <button
            key={level}
            onClick={() => {
              setSelectedLevel(level);
              setSelectedLesson(null);
              setSearchTerm('');
            }}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              selectedLevel === level
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {level === 'level1' ? 'Sơ cấp 1' : level === 'level2' ? 'Sơ cấp 2' : 'Trung cấp 1'}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Tìm kiếm từ vựng..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map((lesson) => (
          <div
            key={lesson.key}
            className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedLesson(lesson)}
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{lesson.title}</h3>
              <p className="text-gray-600 mb-4">{lesson.words.length} từ vựng</p>
              
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedLesson(lesson);
                  }}
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center gap-2"
                >
                  <Search size={16} />
                  Xem
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedLesson(lesson);
                    setCurrentCardIndex(0);
                    setIsFlipped(false);
                    setIsFlashcardMode(true);
                  }}
                  className="flex-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center justify-center gap-2"
                >
                  <RotateCcw size={16} />
                  Flashcard
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lesson Detail Modal */}
      {selectedLesson && !isFlashcardMode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{selectedLesson.title}</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setCurrentCardIndex(0);
                      setIsFlipped(false);
                      setIsFlashcardMode(true);
                    }}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center gap-2"
                  >
                    <RotateCcw size={16} />
                    Flashcard
                  </button>
                  <button
                    onClick={() => setSelectedLesson(null)}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Đóng
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedLesson.words.map((word, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-xl font-bold text-blue-600">{word.korean}</div>
                      <button
                        onClick={() => speakWord(word.korean)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <Volume2 size={20} />
                      </button>
                    </div>
                    <div className="text-gray-600 mb-1">{word.pronunciation}</div>
                    <div className="text-gray-800 mb-2">{word.meaning}</div>
                    <div className="inline-block px-2 py-1 bg-blue-100 text-blue-600 text-sm rounded">
                      {word.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Vocabulary; 