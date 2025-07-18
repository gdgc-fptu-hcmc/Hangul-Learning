import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Volume2, ChevronLeft, ChevronRight, X, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import AdsenseAd from '../components/AdsenseAd';

// Accurate lesson titles extracted từ sách
const level1Titles = [
  'Bài 1: 소개',
  'Bài 2: 학교',
  'Bài 3: 일상생활',
  'Bài 4: 날짜와 요일',
  'Bài 5: 하루 일과',
  'Bài 6: 주말',
  'Bài 7: 물건 사기 (1)',
  'Bài 8: 음식',
  'Bài 9: 집',
  'Bài 10: 가족',
  'Bài 11: 날씨',
  'Bài 12: 전화 (1)',
  'Bài 13: 생일',
  'Bài 14: 취미',
  'Bài 15: 교통 (1)'
];

const level2Titles = [
  'Bài 1: 만남',
  'Bài 2: 약속',
  'Bài 3: 물건 사기 (2)',
  'Bài 4: 병원',
  'Bài 5: 편지',
  'Bài 6: 교통 (2)',
  'Bài 7: 전화 (2)',
  'Bài 8: 영화',
  'Bài 9: 휴일',
  'Bài 10: 외모',
  'Bài 11: 여행',
  'Bài 12: 공공장소',
  'Bài 13: 도시',
  'Bài 14: 계획',
  'Bài 15: 한국 생활'
];

const level3Titles = [
  'Bài 1: 학교생활',
  'Bài 2: 대인 관계',
  'Bài 3: 건강',
  'Bài 4: 쇼핑',
  'Bài 5: 요리',
  'Bài 6: 은행',
  'Bài 7: 성격',
  'Bài 8: 실수',
  'Bài 9: 이사',
  'Bài 10: 여행',
  'Bài 11: 고민',
  'Bài 12: 인터넷',
  'Bài 13: 희망',
  'Bài 14: 영화와 드라마',
  'Bài 15: 예절과 규칙'
];

// Vocabulary data organized by lessons with topic-specific words
const vocabularyByLesson = {
  level1: {
    lesson1: [ // 소개 (Giới thiệu)
        { korean: "안녕하세요", pronunciation: "an-nyeong-ha-se-yo", meaning: "Xin chào", type: "인사말" },
      { korean: "저", pronunciation: "jeo", meaning: "Tôi (khiêm tốn)", type: "대명사" },
      { korean: "이름", pronunciation: "i-reum", meaning: "Tên", type: "명사" },
      { korean: "학생", pronunciation: "hak-saeng", meaning: "Học sinh", type: "명사" },
      { korean: "선생님", pronunciation: "seon-saeng-nim", meaning: "Thầy/cô giáo", type: "명사" },
      { korean: "만나다", pronunciation: "man-na-da", meaning: "Gặp", type: "동사" },
      { korean: "반갑다", pronunciation: "ban-gap-da", meaning: "Vui mừng", type: "형용사" },
      { korean: "처음", pronunciation: "cheo-eum", meaning: "Lần đầu", type: "명사" },
      { korean: "나이", pronunciation: "na-i", meaning: "Tuổi", type: "명사" },
      { korean: "몇 살", pronunciation: "myeot sal", meaning: "Mấy tuổi", type: "의문사" },
      { korean: "한국 사람", pronunciation: "han-guk sa-ram", meaning: "Người Hàn Quốc", type: "명사" },
      { korean: "베트남 사람", pronunciation: "be-teu-nam sa-ram", meaning: "Người Việt Nam", type: "명사" },
      { korean: "어디", pronunciation: "eo-di", meaning: "Đâu", type: "의문사" },
      { korean: "어느 나라", pronunciation: "eo-neu na-ra", meaning: "Nước nào", type: "의문사" },
      { korean: "살다", pronunciation: "sal-da", meaning: "Sống", type: "동사" },
      { korean: "오다", pronunciation: "o-da", meaning: "Đến", type: "동사" },
      { korean: "잘 부탁합니다", pronunciation: "jal bu-tak-ham-ni-da", meaning: "Xin chăm sóc", type: "인사말" },
      { korean: "고맙습니다", pronunciation: "go-map-seum-ni-da", meaning: "Cảm ơn", type: "인사말" },
      { korean: "죄송합니다", pronunciation: "joe-song-ham-ni-da", meaning: "Xin lỗi", type: "인사말" },
      { korean: "네", pronunciation: "ne", meaning: "Vâng", type: "감탄사" },
      { korean: "아니요", pronunciation: "a-ni-yo", meaning: "Không", type: "감탄사" }
    ],
    lesson2: [ // 학교 (Trường học)
        { korean: "학교", pronunciation: "hak-gyo", meaning: "Trường học", type: "명사" },
      { korean: "교실", pronunciation: "gyo-sil", meaning: "Lớp học", type: "명사" },
        { korean: "책", pronunciation: "chaek", meaning: "Sách", type: "명사" },
      { korean: "연필", pronunciation: "yeon-pil", meaning: "Bút chì", type: "명사" },
      { korean: "펜", pronunciation: "pen", meaning: "Bút", type: "명사" },
      { korean: "공부하다", pronunciation: "gong-bu-ha-da", meaning: "Học", type: "동사" },
      { korean: "숙제", pronunciation: "suk-je", meaning: "Bài tập về nhà", type: "명사" },
      { korean: "시험", pronunciation: "si-heom", meaning: "Bài kiểm tra", type: "명사" },
      { korean: "칠판", pronunciation: "chil-pan", meaning: "Bảng đen", type: "명사" },
      { korean: "의자", pronunciation: "ui-ja", meaning: "Ghế", type: "명사" },
      { korean: "책상", pronunciation: "chaek-sang", meaning: "Bàn", type: "명사" },
      { korean: "노트", pronunciation: "no-teu", meaning: "Vở", type: "명사" },
      { korean: "지우개", pronunciation: "ji-u-gae", meaning: "Tẩy", type: "명사" },
      { korean: "가방", pronunciation: "ga-bang", meaning: "Cặp", type: "명사" },
      { korean: "읽다", pronunciation: "ik-da", meaning: "Đọc", type: "동사" },
      { korean: "쓰다", pronunciation: "sseu-da", meaning: "Viết", type: "동사" },
      { korean: "듣다", pronunciation: "deut-da", meaning: "Nghe", type: "동사" },
      { korean: "말하다", pronunciation: "mal-ha-da", meaning: "Nói", type: "동사" },
      { korean: "질문", pronunciation: "jil-mun", meaning: "Câu hỏi", type: "명사" },
      { korean: "대답", pronunciation: "dae-dap", meaning: "Câu trả lời", type: "명사" },
      { korean: "한국어", pronunciation: "han-gu-geo", meaning: "Tiếng Hàn", type: "명사" }
    ],
    lesson3: [ // 일상생활 (Đời sống hàng ngày)
      { korean: "아침", pronunciation: "a-chim", meaning: "Buổi sáng", type: "명사" },
      { korean: "점심", pronunciation: "jeom-sim", meaning: "Buổi trưa", type: "명사" },
      { korean: "저녁", pronunciation: "jeo-nyeok", meaning: "Buổi tối", type: "명사" },
      { korean: "밥", pronunciation: "bap", meaning: "Cơm", type: "명사" },
      { korean: "물", pronunciation: "mul", meaning: "Nước", type: "명사" },
      { korean: "먹다", pronunciation: "meok-da", meaning: "Ăn", type: "동사" },
      { korean: "마시다", pronunciation: "ma-si-da", meaning: "Uống", type: "동사" },
      { korean: "자다", pronunciation: "ja-da", meaning: "Ngủ", type: "동사" },
      { korean: "일어나다", pronunciation: "i-reo-na-da", meaning: "Thức dậy", type: "동사" },
      { korean: "씻다", pronunciation: "ssit-da", meaning: "Rửa", type: "동사" },
      { korean: "요리하다", pronunciation: "yo-ri-ha-da", meaning: "Nấu ăn", type: "동사" },
      { korean: "청소하다", pronunciation: "cheong-so-ha-da", meaning: "Dọn dẹp", type: "동사" },
      { korean: "휴식하다", pronunciation: "hyu-sik-ha-da", meaning: "Nghỉ ngơi", type: "동사" },
      { korean: "텔레비전", pronunciation: "tel-le-bi-jeon", meaning: "Ti vi", type: "명사" },
      { korean: "보다", pronunciation: "bo-da", meaning: "Xem", type: "동사" },
      { korean: "음식", pronunciation: "eum-sik", meaning: "Đồ ăn", type: "명사" },
      { korean: "빵", pronunciation: "ppang", meaning: "Bánh mì", type: "명사" },
      { korean: "우유", pronunciation: "u-yu", meaning: "Sữa", type: "명사" },
      { korean: "커피", pronunciation: "keo-pi", meaning: "Cà phê", type: "명사" },
      { korean: "차", pronunciation: "cha", meaning: "Trà", type: "명사" },
      { korean: "매일", pronunciation: "mae-il", meaning: "Hàng ngày", type: "부사" }
    ],
    lesson4: [ // 날짜와 요일 (Ngày tháng và thứ)
      { korean: "오늘", pronunciation: "o-neul", meaning: "Hôm nay", type: "명사" },
      { korean: "어제", pronunciation: "eo-je", meaning: "Hôm qua", type: "명사" },
      { korean: "내일", pronunciation: "nae-il", meaning: "Ngày mai", type: "명사" },
      { korean: "월요일", pronunciation: "wo-ryo-il", meaning: "Thứ hai", type: "명사" },
      { korean: "화요일", pronunciation: "hwa-yo-il", meaning: "Thứ ba", type: "명사" },
      { korean: "수요일", pronunciation: "su-yo-il", meaning: "Thứ tư", type: "명사" },
      { korean: "목요일", pronunciation: "mo-gyo-il", meaning: "Thứ năm", type: "명사" },
      { korean: "금요일", pronunciation: "geu-myo-il", meaning: "Thứ sáu", type: "명사" },
      { korean: "토요일", pronunciation: "to-yo-il", meaning: "Thứ bảy", type: "명사" },
      { korean: "일요일", pronunciation: "i-ryo-il", meaning: "Chủ nhật", type: "명사" },
      { korean: "일주일", pronunciation: "il-ju-il", meaning: "Một tuần", type: "명사" },
      { korean: "날짜", pronunciation: "nal-jja", meaning: "Ngày tháng", type: "명사" },
        { korean: "시간", pronunciation: "si-gan", meaning: "Thời gian", type: "명사" },
      { korean: "분", pronunciation: "bun", meaning: "Phút", type: "명사" },
      { korean: "초", pronunciation: "cho", meaning: "Giây", type: "명사" },
      { korean: "년", pronunciation: "nyeon", meaning: "Năm", type: "명사" },
      { korean: "월", pronunciation: "wol", meaning: "Tháng", type: "명사" },
      { korean: "일", pronunciation: "il", meaning: "Ngày", type: "명사" },
      { korean: "몇 시", pronunciation: "myeot si", meaning: "Mấy giờ", type: "의문사" },
      { korean: "언제", pronunciation: "eon-je", meaning: "Khi nào", type: "의문사" },
      { korean: "지금", pronunciation: "ji-geum", meaning: "Bây giờ", type: "명사" }
    ],
    lesson5: [ // 하루 일과 (Lịch trình một ngày)
      { korean: "일어나다", pronunciation: "i-reo-na-da", meaning: "Dậy, thức dậy", type: "동사" },
      { korean: "씻다", pronunciation: "ssit-da", meaning: "Rửa", type: "동사" },
      { korean: "운동하다", pronunciation: "un-dong-ha-da", meaning: "Tập thể dục", type: "동사" },
      { korean: "회사", pronunciation: "hoe-sa", meaning: "Công ty", type: "명사" },
      { korean: "집", pronunciation: "jip", meaning: "Nhà", type: "명사" },
      { korean: "가다", pronunciation: "ga-da", meaning: "Đi", type: "동사" },
      { korean: "오다", pronunciation: "o-da", meaning: "Đến", type: "동사" },
      { korean: "시간", pronunciation: "si-gan", meaning: "Thời gian", type: "명사" },
      { korean: "일과", pronunciation: "il-gwa", meaning: "Công việc hàng ngày", type: "명사" },
      { korean: "출근하다", pronunciation: "chul-geun-ha-da", meaning: "Đi làm", type: "동사" },
      { korean: "퇴근하다", pronunciation: "toe-geun-ha-da", meaning: "Tan làm", type: "동사" },
      { korean: "점심시간", pronunciation: "jeom-sim-si-gan", meaning: "Giờ ăn trưa", type: "명사" },
      { korean: "회의", pronunciation: "hoe-ui", meaning: "Họp", type: "명사" },
      { korean: "일하다", pronunciation: "il-ha-da", meaning: "Làm việc", type: "동사" },
      { korean: "늦다", pronunciation: "neut-da", meaning: "Muộn", type: "형용사" },
      { korean: "빠르다", pronunciation: "ppa-reu-da", meaning: "Nhanh", type: "형용사" },
      { korean: "바쁘다", pronunciation: "ba-ppeu-da", meaning: "Bận", type: "형용사" },
      { korean: "한가하다", pronunciation: "han-ga-ha-da", meaning: "Rảnh", type: "형용사" },
      { korean: "계획", pronunciation: "gye-hoek", meaning: "Kế hoạch", type: "명사" },
      { korean: "약속", pronunciation: "yak-sok", meaning: "Hẹn", type: "명사" },
      { korean: "수업", pronunciation: "su-eop", meaning: "Lớp học", type: "명사" }
    ],
    lesson6: [ // 주말 (Cuối tuần)
      { korean: "주말", pronunciation: "ju-mal", meaning: "Cuối tuần", type: "명사" },
      { korean: "토요일", pronunciation: "to-yo-il", meaning: "Thứ bảy", type: "명사" },
      { korean: "일요일", pronunciation: "i-ryo-il", meaning: "Chủ nhật", type: "명사" },
      { korean: "쉬다", pronunciation: "swi-da", meaning: "Nghỉ", type: "동사" },
      { korean: "놀다", pronunciation: "nol-da", meaning: "Chơi", type: "동사" },
      { korean: "친구를 만나다", pronunciation: "chin-gu-reul man-na-da", meaning: "Gặp bạn", type: "표현" },
      { korean: "집에서 쉬다", pronunciation: "ji-be-seo swi-da", meaning: "Nghỉ ở nhà", type: "표현" },
      { korean: "여행하다", pronunciation: "yeo-haeng-ha-da", meaning: "Du lịch", type: "동사" },
      { korean: "휴일", pronunciation: "hyu-il", meaning: "Ngày nghỉ", type: "명사" },
      { korean: "계획", pronunciation: "gye-hoek", meaning: "Kế hoạch", type: "명사" },
      { korean: "공원", pronunciation: "gong-won", meaning: "Công viên", type: "명사" },
      { korean: "산책하다", pronunciation: "san-chaek-ha-da", meaning: "Đi dạo", type: "동사" },
      { korean: "영화관", pronunciation: "yeong-hwa-gwan", meaning: "Rạp phim", type: "명사" },
      { korean: "카페", pronunciation: "ka-pe", meaning: "Quán cà phê", type: "명사" },
      { korean: "식당", pronunciation: "sik-dang", meaning: "Nhà hàng", type: "명사" },
      { korean: "게임하다", pronunciation: "ge-im-ha-da", meaning: "Chơi game", type: "동사" },
      { korean: "음악 듣다", pronunciation: "eum-ak deut-da", meaning: "Nghe nhạc", type: "표현" },
      { korean: "독서하다", pronunciation: "dok-seo-ha-da", meaning: "Đọc sách", type: "동사" },
      { korean: "요리하다", pronunciation: "yo-ri-ha-da", meaning: "Nấu ăn", type: "동사" },
      { korean: "청소하다", pronunciation: "cheong-so-ha-da", meaning: "Dọn dẹp", type: "동사" },
      { korean: "빨래하다", pronunciation: "ppal-lae-ha-da", meaning: "Giặt giũ", type: "동사" }
    ],
    lesson7: [ // 물건 사기 (1) (Mua sắm 1)
      { korean: "가게", pronunciation: "ga-ge", meaning: "Cửa hàng", type: "명사" },
      { korean: "사다", pronunciation: "sa-da", meaning: "Mua", type: "동사" },
      { korean: "팔다", pronunciation: "pal-da", meaning: "Bán", type: "동사" },
        { korean: "돈", pronunciation: "don", meaning: "Tiền", type: "명사" },
      { korean: "얼마", pronunciation: "eol-ma", meaning: "Bao nhiều", type: "의문사" },
      { korean: "비싸다", pronunciation: "bi-ssa-da", meaning: "Đắt", type: "형용사" },
      { korean: "싸다", pronunciation: "ssa-da", meaning: "Rẻ", type: "형용사" },
      { korean: "주세요", pronunciation: "ju-se-yo", meaning: "Cho tôi", type: "표현" },
      { korean: "계산", pronunciation: "gye-san", meaning: "Tính tiền", type: "명사" },
      { korean: "영수증", pronunciation: "yeong-su-jeung", meaning: "Hóa đơn", type: "명사" },
      { korean: "카드", pronunciation: "ka-deu", meaning: "Thẻ", type: "명사" },
      { korean: "현금", pronunciation: "hyeon-geum", meaning: "Tiền mặt", type: "명사" },
      { korean: "거스름돈", pronunciation: "geo-seu-reum-don", meaning: "Tiền thối", type: "명사" },
      { korean: "크다", pronunciation: "keu-da", meaning: "To", type: "형용사" },
      { korean: "작다", pronunciation: "jak-da", meaning: "Nhỏ", type: "형용사" },
      { korean: "색깔", pronunciation: "saek-kkal", meaning: "Màu sắc", type: "명사" },
      { korean: "빨간색", pronunciation: "ppal-gan-saek", meaning: "Màu đỏ", type: "명사" },
      { korean: "파란색", pronunciation: "pa-ran-saek", meaning: "Màu xanh", type: "명사" },
      { korean: "검은색", pronunciation: "geo-meun-saek", meaning: "Màu đen", type: "명사" },
      { korean: "흰색", pronunciation: "huin-saek", meaning: "Màu trắng", type: "명사" },
      { korean: "좋다", pronunciation: "jo-ta", meaning: "Tốt", type: "형용사" }
    ],
    lesson8: [ // 음식 (Đồ ăn)
        { korean: "음식", pronunciation: "eum-sik", meaning: "Đồ ăn", type: "명사" },
      { korean: "김치", pronunciation: "gim-chi", meaning: "Kim chi", type: "명사" },
      { korean: "불고기", pronunciation: "bul-go-gi", meaning: "Bulgogi", type: "명사" },
      { korean: "비빔밥", pronunciation: "bi-bim-bap", meaning: "Bibimbap", type: "명사" },
      { korean: "맛있다", pronunciation: "ma-sit-da", meaning: "Ngon", type: "형용사" },
      { korean: "맵다", pronunciation: "maep-da", meaning: "Cay", type: "형용사" },
      { korean: "달다", pronunciation: "dal-da", meaning: "Ngọt", type: "형용사" },
      { korean: "짜다", pronunciation: "jja-da", meaning: "Mặn", type: "형용사" },
      { korean: "국", pronunciation: "guk", meaning: "Canh", type: "명사" },
      { korean: "찌개", pronunciation: "jji-gae", meaning: "Canh chua", type: "명사" },
      { korean: "라면", pronunciation: "ra-myeon", meaning: "Mì tôm", type: "명사" },
      { korean: "냉면", pronunciation: "naeng-myeon", meaning: "Mì lạnh", type: "명사" },
      { korean: "갈비", pronunciation: "gal-bi", meaning: "Sườn nướng", type: "명사" },
      { korean: "삼겹살", pronunciation: "sam-gyeop-sal", meaning: "Thịt ba chỉ", type: "명사" },
      { korean: "치킨", pronunciation: "chi-kin", meaning: "Gà", type: "명사" },
      { korean: "피자", pronunciation: "pi-ja", meaning: "Pizza", type: "명사" },
      { korean: "햄버거", pronunciation: "haem-beo-geo", meaning: "Hamburger", type: "명사" },
      { korean: "맥주", pronunciation: "maek-ju", meaning: "Bia", type: "명사" },
      { korean: "소주", pronunciation: "so-ju", meaning: "Soju", type: "명사" },
      { korean: "주문하다", pronunciation: "ju-mun-ha-da", meaning: "Gọi món", type: "동사" },
      { korean: "배고프다", pronunciation: "bae-go-peu-da", meaning: "Đói", type: "형용사" }
    ],
    lesson9: [ // 집 (Nhà)
      { korean: "방", pronunciation: "bang", meaning: "Phòng", type: "명사" },
      { korean: "부엌", pronunciation: "bu-eok", meaning: "Bếp", type: "명사" },
      { korean: "화장실", pronunciation: "hwa-jang-sil", meaning: "Phòng tắm", type: "명사" },
      { korean: "거실", pronunciation: "geo-sil", meaning: "Phòng khách", type: "명사" },
      { korean: "침실", pronunciation: "chim-sil", meaning: "Phòng ngủ", type: "명사" },
      { korean: "크다", pronunciation: "keu-da", meaning: "To", type: "형용사" },
      { korean: "작다", pronunciation: "jak-da", meaning: "Nhỏ", type: "형용사" },
      { korean: "깨끗하다", pronunciation: "kkae-kkeut-ha-da", meaning: "Sạch", type: "형용사" }
    ],
    lesson10: [ // 가족 (Gia đình)
        { korean: "가족", pronunciation: "ga-jok", meaning: "Gia đình", type: "명사" },
      { korean: "아버지", pronunciation: "a-beo-ji", meaning: "Bố", type: "명사" },
      { korean: "어머니", pronunciation: "eo-meo-ni", meaning: "Mẹ", type: "명사" },
      { korean: "형", pronunciation: "hyeong", meaning: "Anh trai (nam gọi)", type: "명사" },
      { korean: "누나", pronunciation: "nu-na", meaning: "Chị gái (nam gọi)", type: "명사" },
      { korean: "오빠", pronunciation: "o-ppa", meaning: "Anh trai (nữ gọi)", type: "명사" },
      { korean: "언니", pronunciation: "eon-ni", meaning: "Chị gái (nữ gọi)", type: "명사" },
      { korean: "동생", pronunciation: "dong-saeng", meaning: "Em", type: "명사" }
    ],
    lesson11: [ // 날씨 (Thời tiết)
        { korean: "날씨", pronunciation: "nal-ssi", meaning: "Thời tiết", type: "명사" },
      { korean: "맑다", pronunciation: "mal-da", meaning: "Quang đãng", type: "형용사" },
      { korean: "흐리다", pronunciation: "heu-ri-da", meaning: "U ám", type: "형용사" },
      { korean: "비", pronunciation: "bi", meaning: "Mưa", type: "명사" },
      { korean: "눈", pronunciation: "nun", meaning: "Tuyết", type: "명사" },
      { korean: "덥다", pronunciation: "deop-da", meaning: "Nóng", type: "형용사" },
      { korean: "춥다", pronunciation: "chup-da", meaning: "Lạnh", type: "형용사" },
      { korean: "바람", pronunciation: "ba-ram", meaning: "Gió", type: "명사" }
    ],
    lesson12: [ // 전화 (1) (Điện thoại 1)
      { korean: "전화", pronunciation: "jeon-hwa", meaning: "Điện thoại", type: "명사" },
      { korean: "전화하다", pronunciation: "jeon-hwa-ha-da", meaning: "Gọi điện", type: "동사" },
      { korean: "전화번호", pronunciation: "jeon-hwa-beon-ho", meaning: "Số điện thoại", type: "명사" },
      { korean: "핸드폰", pronunciation: "haen-deu-pon", meaning: "Điện thoại di động", type: "명사" },
      { korean: "여보세요", pronunciation: "yeo-bo-se-yo", meaning: "Xin chào (điện thoại)", type: "인사말" },
      { korean: "잠깐만요", pronunciation: "jam-kkan-man-yo", meaning: "Xin chờ một chút", type: "표현" },
      { korean: "끊다", pronunciation: "kkeun-da", meaning: "Cúp máy", type: "동사" },
      { korean: "받다", pronunciation: "bat-da", meaning: "Nhận", type: "동사" }
    ],
    lesson13: [ // 생일 (Sinh nhật)
      { korean: "생일", pronunciation: "saeng-il", meaning: "Sinh nhật", type: "명사" },
      { korean: "축하하다", pronunciation: "chuk-ha-ha-da", meaning: "Chúc mừng", type: "동사" },
      { korean: "선물", pronunciation: "seon-mul", meaning: "Quà", type: "명사" },
      { korean: "케이크", pronunciation: "ke-i-keu", meaning: "Bánh kem", type: "명사" },
      { korean: "촛불", pronunciation: "chot-bul", meaning: "Nến", type: "명사" },
      { korean: "파티", pronunciation: "pa-ti", meaning: "Tiệc", type: "명사" },
      { korean: "나이", pronunciation: "na-i", meaning: "Tuổi", type: "명사" },
      { korean: "몇 살", pronunciation: "myeot sal", meaning: "Mấy tuổi", type: "의문사" }
    ],
    lesson14: [ // 취미 (Sở thích)
      { korean: "취미", pronunciation: "chwi-mi", meaning: "Sở thích", type: "명사" },
      { korean: "영화", pronunciation: "yeong-hwa", meaning: "Phim", type: "명사" },
      { korean: "음악", pronunciation: "eum-ak", meaning: "Âm nhạc", type: "명사" },
      { korean: "책", pronunciation: "chaek", meaning: "Sách", type: "명사" },
        { korean: "여행", pronunciation: "yeo-haeng", meaning: "Du lịch", type: "명사" },
      { korean: "요리", pronunciation: "yo-ri", meaning: "Nấu ăn", type: "명사" },
      { korean: "좋아하다", pronunciation: "jo-a-ha-da", meaning: "Thích", type: "동사" },
      { korean: "싫어하다", pronunciation: "si-reo-ha-da", meaning: "Không thích", type: "동사" }
    ],
    lesson15: [ // 교통 (1) (Giao thông 1)
      { korean: "교통", pronunciation: "gyo-tong", meaning: "Giao thông", type: "명사" },
      { korean: "버스", pronunciation: "beo-seu", meaning: "Xe bus", type: "명사" },
      { korean: "지하철", pronunciation: "ji-ha-cheol", meaning: "Tàu điện ngầm", type: "명사" },
      { korean: "택시", pronunciation: "taek-si", meaning: "Taxi", type: "명사" },
      { korean: "자동차", pronunciation: "ja-dong-cha", meaning: "Ô tô", type: "명사" },
      { korean: "역", pronunciation: "yeok", meaning: "Nhà ga", type: "명사" },
      { korean: "타다", pronunciation: "ta-da", meaning: "Đi (phương tiện)", type: "동사" },
      { korean: "내리다", pronunciation: "nae-ri-da", meaning: "Xuống (phương tiện)", type: "동사" }
    ]
  },
  level2: {
    lesson1: [ // 만남 (Gặp gỡ)
      { korean: "처음 뵙겠습니다", pronunciation: "cheo-eum boep-get-seum-ni-da", meaning: "Rất vui được gặp lần đầu", type: "인사말" },
      { korean: "소개하다", pronunciation: "so-gae-ha-da", meaning: "Giới thiệu", type: "동사" },
      { korean: "친구", pronunciation: "chin-gu", meaning: "Bạn bè", type: "명사" },
      { korean: "동료", pronunciation: "dong-ryo", meaning: "Đồng nghiệp", type: "명사" },
      { korean: "직업", pronunciation: "ji-geop", meaning: "Nghề nghiệp", type: "명사" },
      { korean: "회사원", pronunciation: "hoe-sa-won", meaning: "Nhân viên công ty", type: "명사" },
      { korean: "의사", pronunciation: "ui-sa", meaning: "Bác sĩ", type: "명사" },
      { korean: "간호사", pronunciation: "gan-ho-sa", meaning: "Y tá", type: "명사" },
      { korean: "교사", pronunciation: "gyo-sa", meaning: "Giáo viên", type: "명사" },
      { korean: "학생", pronunciation: "hak-saeng", meaning: "Học sinh", type: "명사" },
      { korean: "엔지니어", pronunciation: "en-ji-ni-eo", meaning: "Kỹ sư", type: "명사" },
      { korean: "변호사", pronunciation: "byeon-ho-sa", meaning: "Luật sư", type: "명사" },
      { korean: "요리사", pronunciation: "yo-ri-sa", meaning: "Đầu bếp", type: "명사" },
      { korean: "가수", pronunciation: "ga-su", meaning: "Ca sĩ", type: "명사" },
      { korean: "경찰관", pronunciation: "gyeong-chal-gwan", meaning: "Cảnh sát", type: "명사" },
      { korean: "소방관", pronunciation: "so-bang-gwan", meaning: "Lính cứu hỏa", type: "명사" },
      { korean: "운전사", pronunciation: "un-jeon-sa", meaning: "Tài xế", type: "명사" },
      { korean: "판매원", pronunciation: "pan-mae-won", meaning: "Nhân viên bán hàng", type: "명사" },
      { korean: "디자이너", pronunciation: "di-ja-i-neo", meaning: "Nhà thiết kế", type: "명사" },
      { korean: "프로그래머", pronunciation: "peu-ro-geu-rae-meo", meaning: "Lập trình viên", type: "명사" },
      { korean: "기자", pronunciation: "gi-ja", meaning: "Phóng viên", type: "명사" }
    ],
    lesson2: [ // 약속 (Hẹn gặp)
      { korean: "약속", pronunciation: "yak-sok", meaning: "Hẹn", type: "명사" },
      { korean: "만나다", pronunciation: "man-na-da", meaning: "Gặp", type: "동사" },
      { korean: "시간이 되다", pronunciation: "si-ga-ni doe-da", meaning: "Có thời gian", type: "표현" },
      { korean: "바쁘다", pronunciation: "ba-ppeu-da", meaning: "Bận", type: "형용사" },
      { korean: "괜찮다", pronunciation: "gwaen-chan-ta", meaning: "Không sao", type: "형용사" },
      { korean: "미안하다", pronunciation: "mi-an-ha-da", meaning: "Xin lỗi", type: "형용사" },
      { korean: "늦다", pronunciation: "neut-da", meaning: "Muộn", type: "형용사" },
      { korean: "빠르다", pronunciation: "ppa-reu-da", meaning: "Nhanh", type: "형용사" },
      { korean: "일찍", pronunciation: "il-jjik", meaning: "Sớm", type: "부사" },
      { korean: "정확하다", pronunciation: "jeong-hwak-ha-da", meaning: "Chính xác", type: "형용사" },
      { korean: "기다리다", pronunciation: "gi-da-ri-da", meaning: "Đợi", type: "동사" },
      { korean: "취소하다", pronunciation: "chwi-so-ha-da", meaning: "Hủy", type: "동사" },
      { korean: "연기하다", pronunciation: "yeon-gi-ha-da", meaning: "Hoãn lại", type: "동사" },
      { korean: "확인하다", pronunciation: "hwa-gin-ha-da", meaning: "Xác nhận", type: "동사" },
      { korean: "장소", pronunciation: "jang-so", meaning: "Địa điểm", type: "명사" },
      { korean: "시간", pronunciation: "si-gan", meaning: "Thời gian", type: "명사" },
      { korean: "일정", pronunciation: "il-jeong", meaning: "Lịch trình", type: "명사" },
      { korean: "계획", pronunciation: "gye-hoek", meaning: "Kế hoạch", type: "명사" },
      { korean: "변경", pronunciation: "byeon-gyeong", meaning: "Thay đổi", type: "명사" },
      { korean: "연락", pronunciation: "yeol-lak", meaning: "Liên lạc", type: "명사" },
      { korean: "통지", pronunciation: "tong-ji", meaning: "Thông báo", type: "명사" }
    ],
    lesson3: [ // 물건 사기 (2) (Mua sắm 2)
      { korean: "백화점", pronunciation: "baek-hwa-jeom", meaning: "Cửa hàng bách hóa", type: "명사" },
      { korean: "시장", pronunciation: "si-jang", meaning: "Chợ", type: "명사" },
      { korean: "옷", pronunciation: "ot", meaning: "Quần áo", type: "명사" },
      { korean: "신발", pronunciation: "sin-bal", meaning: "Giày", type: "명사" },
      { korean: "가방", pronunciation: "ga-bang", meaning: "Túi xách", type: "명사" },
      { korean: "입어보다", pronunciation: "i-beo-bo-da", meaning: "Thử mặc", type: "동사" },
      { korean: "마음에 들다", pronunciation: "ma-eum-e deul-da", meaning: "Ưng ý", type: "표현" },
      { korean: "계산하다", pronunciation: "gye-san-ha-da", meaning: "Tính tiền", type: "동사" },
      { korean: "셔츠", pronunciation: "syeo-cheu", meaning: "Áo sơ mi", type: "명사" },
      { korean: "바지", pronunciation: "ba-ji", meaning: "Quần", type: "명사" },
      { korean: "치마", pronunciation: "chi-ma", meaning: "Chân váy", type: "명사" },
      { korean: "원피스", pronunciation: "won-pi-seu", meaning: "Váy liền", type: "명사" },
      { korean: "모자", pronunciation: "mo-ja", meaning: "Mũ", type: "명사" },
      { korean: "양말", pronunciation: "yang-mal", meaning: "Tất", type: "명사" },
      { korean: "장갑", pronunciation: "jang-gap", meaning: "Găng tay", type: "명사" },
      { korean: "시계", pronunciation: "si-gye", meaning: "Đồng hồ", type: "명사" },
      { korean: "반지", pronunciation: "ban-ji", meaning: "Nhẫn", type: "명사" },
      { korean: "목걸이", pronunciation: "mok-geo-ri", meaning: "Dây chuyền", type: "명사" },
      { korean: "귀걸이", pronunciation: "gwi-geo-ri", meaning: "Bông tai", type: "명사" },
      { korean: "팔찌", pronunciation: "pal-ji", meaning: "Vòng tay", type: "명사" },
      { korean: "안경", pronunciation: "an-gyeong", meaning: "Kính mắt", type: "명사" }
    ],
    lesson4: [ // 병원 (Bệnh viện)
      { korean: "병원", pronunciation: "byeong-won", meaning: "Bệnh viện", type: "명사" },
      { korean: "의사", pronunciation: "ui-sa", meaning: "Bác sĩ", type: "명사" },
      { korean: "간호사", pronunciation: "gan-ho-sa", meaning: "Y tá", type: "명사" },
      { korean: "아프다", pronunciation: "a-peu-da", meaning: "Đau, ốm", type: "형용사" },
      { korean: "열", pronunciation: "yeol", meaning: "Sốt", type: "명사" },
      { korean: "감기", pronunciation: "gam-gi", meaning: "Cảm lạnh", type: "명사" },
      { korean: "약", pronunciation: "yak", meaning: "Thuốc", type: "명사" },
      { korean: "주사", pronunciation: "ju-sa", meaning: "Tiêm", type: "명사" },
      { korean: "두통", pronunciation: "du-tong", meaning: "Đau đầu", type: "명사" },
      { korean: "배가 아프다", pronunciation: "bae-ga a-peu-da", meaning: "Đau bụng", type: "표현" },
      { korean: "목이 아프다", pronunciation: "mo-gi a-peu-da", meaning: "Đau họng", type: "표현" },
      { korean: "기침", pronunciation: "gi-chim", meaning: "Ho", type: "명사" },
      { korean: "재채기", pronunciation: "jae-chae-gi", meaning: "Hắt hơi", type: "명사" },
      { korean: "진료", pronunciation: "jin-ryo", meaning: "Khám bệnh", type: "명사" },
      { korean: "진단", pronunciation: "jin-dan", meaning: "Chẩn đoán", type: "명사" },
      { korean: "치료", pronunciation: "chi-ryo", meaning: "Điều trị", type: "명사" },
      { korean: "수술", pronunciation: "su-sul", meaning: "Phẫu thuật", type: "명사" },
      { korean: "응급실", pronunciation: "eung-geup-sil", meaning: "Phòng cấp cứu", type: "명사" },
      { korean: "입원", pronunciation: "i-bwon", meaning: "Nhập viện", type: "명사" },
      { korean: "퇴원", pronunciation: "toe-won", meaning: "Xuất viện", type: "명사" },
      { korean: "건강하다", pronunciation: "geon-gang-ha-da", meaning: "Khỏe mạnh", type: "형용사" }
    ],
    lesson5: [ // 편지 (Thư)
      { korean: "편지", pronunciation: "pyeon-ji", meaning: "Thư", type: "명사" },
      { korean: "쓰다", pronunciation: "sseu-da", meaning: "Viết", type: "동사" },
      { korean: "받다", pronunciation: "bat-da", meaning: "Nhận", type: "동사" },
      { korean: "보내다", pronunciation: "bo-nae-da", meaning: "Gửi", type: "동사" },
      { korean: "우체국", pronunciation: "u-che-guk", meaning: "Bưu điện", type: "명사" },
      { korean: "우표", pronunciation: "u-pyo", meaning: "Tem", type: "명사" },
      { korean: "주소", pronunciation: "ju-so", meaning: "Địa chỉ", type: "명사" },
      { korean: "이메일", pronunciation: "i-me-il", meaning: "Email", type: "명사" },
      { korean: "소포", pronunciation: "so-po", meaning: "Bưu kiện", type: "명사" },
      { korean: "휴대폰", pronunciation: "hyu-dae-pon", meaning: "Điện thoại di động", type: "명사" },
      { korean: "메시지", pronunciation: "me-si-ji", meaning: "Tin nhắn", type: "명사" },
      { korean: "카카오톡", pronunciation: "ka-ka-o-tok", meaning: "KakaoTalk", type: "명사" },
      { korean: "문자", pronunciation: "mun-ja", meaning: "Tin nhắn văn bản", type: "명사" },
      { korean: "인편", pronunciation: "in-pyeon", meaning: "Gửi qua người", type: "명사" },
      { korean: "엽서", pronunciation: "yeop-seo", meaning: "Bưu thiếp", type: "명사" },
      { korean: "봉투", pronunciation: "bong-tu", meaning: "Phong bì", type: "명사" },
      { korean: "수신인", pronunciation: "su-sin-in", meaning: "Người nhận", type: "명사" },
      { korean: "발신인", pronunciation: "bal-sin-in", meaning: "Người gửi", type: "명사" },
      { korean: "우편번호", pronunciation: "u-pyeon-beon-ho", meaning: "Mã bưu điện", type: "명사" },
      { korean: "기록", pronunciation: "gi-rok", meaning: "Ghi chép", type: "명사" },
      { korean: "연락처", pronunciation: "yeol-lak-cheo", meaning: "Thông tin liên lạc", type: "명사" }
    ],
    lesson6: [ // 교통 (2) (Giao thông 2)
      { korean: "공항", pronunciation: "gong-hang", meaning: "Sân bay", type: "명사" },
      { korean: "기차", pronunciation: "gi-cha", meaning: "Tàu hỏa", type: "명사" },
      { korean: "비행기", pronunciation: "bi-haeng-gi", meaning: "Máy bay", type: "명사" },
      { korean: "표", pronunciation: "pyo", meaning: "Vé", type: "명사" },
      { korean: "예약하다", pronunciation: "ye-yak-ha-da", meaning: "Đặt trước", type: "동사" },
      { korean: "출발하다", pronunciation: "chul-bal-ha-da", meaning: "Khởi hành", type: "동사" },
      { korean: "도착하다", pronunciation: "do-chak-ha-da", meaning: "Đến nơi", type: "동사" },
      { korean: "늦다", pronunciation: "neut-da", meaning: "Muộn", type: "형용사" },
      { korean: "지하철", pronunciation: "ji-ha-cheol", meaning: "Tàu điện ngầm", type: "명사" },
      { korean: "버스", pronunciation: "beo-seu", meaning: "Xe buýt", type: "명사" },
      { korean: "택시", pronunciation: "taek-si", meaning: "Taxi", type: "명사" },
      { korean: "자동차", pronunciation: "ja-dong-cha", meaning: "Ô tô", type: "명사" },
      { korean: "자전거", pronunciation: "ja-jeon-geo", meaning: "Xe đạp", type: "명사" },
      { korean: "오토바이", pronunciation: "o-to-ba-i", meaning: "Xe máy", type: "명사" },
      { korean: "교통카드", pronunciation: "gyo-tong-ka-deu", meaning: "Thẻ giao thông", type: "명사" },
      { korean: "환승", pronunciation: "hwan-seung", meaning: "Chuyển tuyến", type: "명사" },
      { korean: "교통비", pronunciation: "gyo-tong-bi", meaning: "Tiền xe", type: "명사" },
      { korean: "정류장", pronunciation: "jeong-ryu-jang", meaning: "Trạm dừng", type: "명사" },
      { korean: "승강장", pronunciation: "seung-gang-jang", meaning: "Sân ga", type: "명사" },
      { korean: "시간표", pronunciation: "si-gan-pyo", meaning: "Thời gian biểu", type: "명사" },
      { korean: "교통체증", pronunciation: "gyo-tong-che-jeung", meaning: "Kẹt xe", type: "명사" }
    ],
    lesson7: [ // 전화 (2) (Điện thoại 2)
      { korean: "국제전화", pronunciation: "guk-je-jeon-hwa", meaning: "Điện thoại quốc tế", type: "명사" },
      { korean: "통화하다", pronunciation: "tong-hwa-ha-da", meaning: "Nói chuyện điện thoại", type: "동사" },
      { korean: "메시지", pronunciation: "me-si-ji", meaning: "Tin nhắn", type: "명사" },
      { korean: "음성메일", pronunciation: "eum-seong-me-il", meaning: "Thư thoại", type: "명사" },
      { korean: "연결되다", pronunciation: "yeon-gyeol-doe-da", meaning: "Được kết nối", type: "동사" },
      { korean: "통화 중", pronunciation: "tong-hwa jung", meaning: "Đang bận", type: "표현" },
      { korean: "다시 걸다", pronunciation: "da-si geol-da", meaning: "Gọi lại", type: "표현" },
      { korean: "잘못 걸다", pronunciation: "jal-mot geol-da", meaning: "Gọi nhầm", type: "표현" },
      { korean: "스마트폰", pronunciation: "seu-ma-teu-pon", meaning: "Điện thoại thông minh", type: "명사" },
      { korean: "화상통화", pronunciation: "hwa-sang-tong-hwa", meaning: "Gọi video", type: "명사" },
      { korean: "전화번호", pronunciation: "jeon-hwa-beon-ho", meaning: "Số điện thoại", type: "명사" },
      { korean: "전화기", pronunciation: "jeon-hwa-gi", meaning: "Máy điện thoại", type: "명사" },
      { korean: "수화기", pronunciation: "su-hwa-gi", meaning: "Ống nghe", type: "명사" },
      { korean: "다이얼", pronunciation: "da-i-eol", meaning: "Quay số", type: "명사" },
      { korean: "벨소리", pronunciation: "bel-so-ri", meaning: "Tiếng chuông", type: "명사" },
      { korean: "무음", pronunciation: "mu-eum", meaning: "Im lặng", type: "명사" },
      { korean: "진동", pronunciation: "jin-dong", meaning: "Rung", type: "명사" },
      { korean: "부재중 전화", pronunciation: "bu-jae-jung jeon-hwa", meaning: "Cuộc gọi nhỡ", type: "명사" },
      { korean: "끊다", pronunciation: "kkeun-ta", meaning: "Cúp máy", type: "동사" },
      { korean: "받다", pronunciation: "bat-da", meaning: "Nhấc máy", type: "동사" },
      { korean: "기다리다", pronunciation: "gi-da-ri-da", meaning: "Chờ", type: "동사" }
    ],
    lesson8: [ // 영화 (Phim)
      { korean: "영화관", pronunciation: "yeong-hwa-gwan", meaning: "Rạp chiếu phim", type: "명사" },
      { korean: "티켓", pronunciation: "ti-ket", meaning: "Vé", type: "명사" },
      { korean: "상영시간", pronunciation: "sang-yeong-si-gan", meaning: "Giờ chiếu", type: "명사" },
      { korean: "액션", pronunciation: "aek-syeon", meaning: "Hành động", type: "명사" },
      { korean: "로맨스", pronunciation: "ro-maen-seu", meaning: "Lãng mạn", type: "명사" },
      { korean: "코미디", pronunciation: "ko-mi-di", meaning: "Hài kịch", type: "명사" },
      { korean: "재미있다", pronunciation: "jae-mi-it-da", meaning: "Thú vị", type: "형용사" },
      { korean: "지루하다", pronunciation: "ji-ru-ha-da", meaning: "Chán", type: "형용사" },
      { korean: "스릴러", pronunciation: "seu-ril-leo", meaning: "Kinh dị", type: "명사" },
      { korean: "드라마", pronunciation: "deu-ra-ma", meaning: "Phim truyền hình", type: "명사" },
      { korean: "다큐멘터리", pronunciation: "da-kyu-men-teo-ri", meaning: "Phim tài liệu", type: "명사" },
      { korean: "애니메이션", pronunciation: "ae-ni-me-i-syeon", meaning: "Hoạt hình", type: "명사" },
      { korean: "배우", pronunciation: "bae-u", meaning: "Diễn viên", type: "명사" },
      { korean: "감독", pronunciation: "gam-dok", meaning: "Đạo diễn", type: "명사" },
      { korean: "주인공", pronunciation: "ju-in-gong", meaning: "Nhân vật chính", type: "명사" },
      { korean: "줄거리", pronunciation: "jul-geo-ri", meaning: "Cốt truyện", type: "명사" },
      { korean: "예고편", pronunciation: "ye-go-pyeon", meaning: "Trailer", type: "명사" },
      { korean: "자막", pronunciation: "ja-mak", meaning: "Phụ đề", type: "명사" },
      { korean: "더빙", pronunciation: "deo-bing", meaning: "Lồng tiếng", type: "명사" },
      { korean: "스크린", pronunciation: "seu-keu-rin", meaning: "Màn hình", type: "명사" },
      { korean: "팝콘", pronunciation: "pop-kon", meaning: "Bỏng ngô", type: "명사" }
    ],
    lesson9: [ // 휴일 (Ngày nghỉ)
      { korean: "휴일", pronunciation: "hyu-il", meaning: "Ngày nghỉ", type: "명사" },
      { korean: "방학", pronunciation: "bang-hak", meaning: "Kỳ nghỉ", type: "명사" },
      { korean: "여가", pronunciation: "yeo-ga", meaning: "Thời gian rảnh", type: "명사" },
      { korean: "피크닉", pronunciation: "pi-keu-nik", meaning: "Dã ngoại", type: "명사" },
      { korean: "해변", pronunciation: "hae-byeon", meaning: "Bãi biển", type: "명사" },
      { korean: "산", pronunciation: "san", meaning: "Núi", type: "명사" },
      { korean: "등산하다", pronunciation: "deung-san-ha-da", meaning: "Leo núi", type: "동사" },
      { korean: "수영하다", pronunciation: "su-yeong-ha-da", meaning: "Bơi lội", type: "동사" },
      { korean: "캠핑", pronunciation: "kaem-ping", meaning: "Cắm trại", type: "명사" },
      { korean: "낚시", pronunciation: "nak-si", meaning: "Câu cá", type: "명사" },
      { korean: "바비큐", pronunciation: "ba-bi-kyu", meaning: "BBQ", type: "명사" },
      { korean: "야외", pronunciation: "ya-oe", meaning: "Ngoài trời", type: "명사" },
      { korean: "여행", pronunciation: "yeo-haeng", meaning: "Du lịch", type: "명사" },
      { korean: "쉬다", pronunciation: "swi-da", meaning: "Nghỉ ngơi", type: "동사" },
      { korean: "놀다", pronunciation: "nol-da", meaning: "Chơi", type: "동사" },
      { korean: "축제", pronunciation: "chuk-je", meaning: "Lễ hội", type: "명사" },
      { korean: "공연", pronunciation: "gong-yeon", meaning: "Biểu diễn", type: "명사" },
      { korean: "취미", pronunciation: "chwi-mi", meaning: "Sở thích", type: "명사" },
      { korean: "스포츠", pronunciation: "seu-po-cheu", meaning: "Thể thao", type: "명사" },
      { korean: "운동", pronunciation: "un-dong", meaning: "Tập thể dục", type: "명사" },
      { korean: "게임", pronunciation: "ge-im", meaning: "Trò chơi", type: "명사" }
    ],
    lesson10: [ // 외모 (Ngoại hình)
      { korean: "외모", pronunciation: "oe-mo", meaning: "Ngoại hình", type: "명사" },
      { korean: "키", pronunciation: "ki", meaning: "Chiều cao", type: "명사" },
      { korean: "몸무게", pronunciation: "mom-mu-ge", meaning: "Cân nặng", type: "명사" },
      { korean: "머리", pronunciation: "meo-ri", meaning: "Tóc", type: "명사" },
      { korean: "눈", pronunciation: "nun", meaning: "Mắt", type: "명사" },
      { korean: "코", pronunciation: "ko", meaning: "Mũi", type: "명사" },
      { korean: "입", pronunciation: "ip", meaning: "Miệng", type: "명사" },
      { korean: "예쁘다", pronunciation: "ye-ppeu-da", meaning: "Đẹp", type: "형용사" },
      { korean: "잘생기다", pronunciation: "jal-saeng-gi-da", meaning: "Đẹp trai", type: "형용사" },
      { korean: "귀엽다", pronunciation: "gwi-yeop-da", meaning: "Dễ thương", type: "형용사" },
      { korean: "못생기다", pronunciation: "mot-saeng-gi-da", meaning: "Xấu", type: "형용사" },
      { korean: "크다", pronunciation: "keu-da", meaning: "To", type: "형용사" },
      { korean: "작다", pronunciation: "jak-da", meaning: "Nhỏ", type: "형용사" },
      { korean: "높다", pronunciation: "nop-da", meaning: "Cao", type: "형용사" },
      { korean: "낮다", pronunciation: "nat-da", meaning: "Thấp", type: "형용사" },
      { korean: "뚱뚱하다", pronunciation: "ttung-ttung-ha-da", meaning: "Béo", type: "형용사" },
      { korean: "마르다", pronunciation: "ma-reu-da", meaning: "Gầy", type: "형용사" },
      { korean: "검다", pronunciation: "geom-da", meaning: "Đen", type: "형용사" },
      { korean: "희다", pronunciation: "hui-da", meaning: "Trắng", type: "형용사" },
      { korean: "길다", pronunciation: "gil-da", meaning: "Dài", type: "형용사" },
      { korean: "짧다", pronunciation: "jjalp-da", meaning: "Ngắn", type: "형용사" }
    ],
    lesson11: [ // 여행 (Du lịch)
      { korean: "여행사", pronunciation: "yeo-haeng-sa", meaning: "Công ty du lịch", type: "명사" },
      { korean: "관광", pronunciation: "gwan-gwang", meaning: "Tham quan", type: "명사" },
      { korean: "호텔", pronunciation: "ho-tel", meaning: "Khách sạn", type: "명사" },
      { korean: "예약", pronunciation: "ye-yak", meaning: "Đặt phòng", type: "명사" },
      { korean: "체크인", pronunciation: "che-keu-in", meaning: "Nhận phòng", type: "명사" },
      { korean: "체크아웃", pronunciation: "che-keu-a-ut", meaning: "Trả phòng", type: "명사" },
      { korean: "기념품", pronunciation: "gi-nyeom-pum", meaning: "Quà lưu niệm", type: "명사" },
      { korean: "사진", pronunciation: "sa-jin", meaning: "Ảnh", type: "명사" },
      { korean: "가이드", pronunciation: "ga-i-deu", meaning: "Hướng dẫn viên", type: "명사" },
      { korean: "지도", pronunciation: "ji-do", meaning: "Bản đồ", type: "명사" },
      { korean: "여권", pronunciation: "yeo-gwon", meaning: "Hộ chiếu", type: "명사" },
      { korean: "비자", pronunciation: "bi-ja", meaning: "Visa", type: "명사" },
      { korean: "항공료", pronunciation: "hang-gong-ryo", meaning: "Tiền vé máy bay", type: "명사" },
      { korean: "숙박", pronunciation: "suk-bak", meaning: "Chỗ ở", type: "명사" },
      { korean: "펜션", pronunciation: "pen-syeon", meaning: "Pension", type: "명사" },
      { korean: "모텔", pronunciation: "mo-tel", meaning: "Motel", type: "명사" },
      { korean: "패키지", pronunciation: "pae-ki-ji", meaning: "Tour trọn gói", type: "명사" },
      { korean: "자유여행", pronunciation: "ja-yu-yeo-haeng", meaning: "Du lịch tự túc", type: "명사" },
      { korean: "국내여행", pronunciation: "gung-nae-yeo-haeng", meaning: "Du lịch trong nước", type: "명사" },
      { korean: "해외여행", pronunciation: "hae-oe-yeo-haeng", meaning: "Du lịch nước ngoài", type: "명사" },
      { korean: "관광지", pronunciation: "gwan-gwang-ji", meaning: "Địa điểm du lịch", type: "명사" }
    ],
    lesson12: [ // 공공장소 (Nơi công cộng)
      { korean: "공공장소", pronunciation: "gong-gong-jang-so", meaning: "Nơi công cộng", type: "명사" },
      { korean: "도서관", pronunciation: "do-seo-gwan", meaning: "Thư viện", type: "명사" },
      { korean: "박물관", pronunciation: "bang-mul-gwan", meaning: "Bảo tàng", type: "명사" },
      { korean: "공원", pronunciation: "gong-won", meaning: "Công viên", type: "명사" },
      { korean: "은행", pronunciation: "eun-haeng", meaning: "Ngân hàng", type: "명사" },
      { korean: "시청", pronunciation: "si-cheong", meaning: "Tòa thị chính", type: "명사" },
      { korean: "경찰서", pronunciation: "gyeong-chal-seo", meaning: "Đồn cảnh sát", type: "명사" },
      { korean: "소방서", pronunciation: "so-bang-seo", meaning: "Trạm cứu hỏa", type: "명사" },
      { korean: "우체국", pronunciation: "u-che-guk", meaning: "Bưu điện", type: "명사" },
      { korean: "병원", pronunciation: "byeong-won", meaning: "Bệnh viện", type: "명사" },
      { korean: "약국", pronunciation: "yak-guk", meaning: "Hiệu thuốc", type: "명사" },
      { korean: "학교", pronunciation: "hak-gyo", meaning: "Trường học", type: "명사" },
      { korean: "대학교", pronunciation: "dae-hak-gyo", meaning: "Đại học", type: "명사" },
      { korean: "지하철역", pronunciation: "ji-ha-cheol-yeok", meaning: "Ga tàu điện ngầm", type: "명사" },
      { korean: "버스정류장", pronunciation: "beo-seu-jeong-ryu-jang", meaning: "Trạm xe buýt", type: "명사" },
      { korean: "공항", pronunciation: "gong-hang", meaning: "Sân bay", type: "명사" },
      { korean: "기차역", pronunciation: "gi-cha-yeok", meaning: "Ga tàu", type: "명사" },
      { korean: "시장", pronunciation: "si-jang", meaning: "Chợ", type: "명사" },
      { korean: "마트", pronunciation: "ma-teu", meaning: "Siêu thị", type: "명사" },
      { korean: "편의점", pronunciation: "pyeon-ui-jeom", meaning: "Cửa hàng tiện lợi", type: "명사" },
      { korean: "카페", pronunciation: "ka-pe", meaning: "Quán cà phê", type: "명사" }
    ],
    lesson13: [ // 도시 (Thành phố)
      { korean: "도시", pronunciation: "do-si", meaning: "Thành phố", type: "명사" },
      { korean: "시내", pronunciation: "si-nae", meaning: "Trung tâm thành phố", type: "명사" },
      { korean: "교외", pronunciation: "gyo-oe", meaning: "Ngoại ô", type: "명사" },
      { korean: "건물", pronunciation: "geon-mul", meaning: "Tòa nhà", type: "명사" },
      { korean: "거리", pronunciation: "geo-ri", meaning: "Đường phố", type: "명사" },
      { korean: "광장", pronunciation: "gwang-jang", meaning: "Quảng trường", type: "명사" },
      { korean: "다리", pronunciation: "da-ri", meaning: "Cây cầu", type: "명사" },
      { korean: "강", pronunciation: "gang", meaning: "Sông", type: "명사" },
      { korean: "고층빌딩", pronunciation: "go-cheung-bil-ding", meaning: "Nhà cao tầng", type: "명사" },
      { korean: "아파트", pronunciation: "a-pa-teu", meaning: "Căn hộ", type: "명사" },
      { korean: "오피스텔", pronunciation: "o-pi-seu-tel", meaning: "Officetel", type: "명사" },
      { korean: "주택", pronunciation: "ju-taek", meaning: "Nhà ở", type: "명사" },
      { korean: "상가", pronunciation: "sang-ga", meaning: "Khu thương mại", type: "명사" },
      { korean: "백화점", pronunciation: "baek-hwa-jeom", meaning: "Cửa hàng bách hóa", type: "명사" },
      { korean: "쇼핑몰", pronunciation: "syo-ping-mol", meaning: "Trung tâm mua sắm", type: "명사" },
      { korean: "공장", pronunciation: "gong-jang", meaning: "Nhà máy", type: "명사" },
      { korean: "주차장", pronunciation: "ju-cha-jang", meaning: "Bãi đỗ xe", type: "명사" },
      { korean: "교통", pronunciation: "gyo-tong", meaning: "Giao thông", type: "명사" },
      { korean: "신호등", pronunciation: "sin-ho-deung", meaning: "Đèn giao thông", type: "명사" },
      { korean: "횡단보도", pronunciation: "hoeng-dan-bo-do", meaning: "Vạch sang đường", type: "명사" },
      { korean: "인도", pronunciation: "in-do", meaning: "Vỉa hè", type: "명사" }
    ],
    lesson14: [ // 계획 (Kế hoạch)
      { korean: "계획", pronunciation: "gye-hoek", meaning: "Kế hoạch", type: "명사" },
      { korean: "목표", pronunciation: "mok-pyo", meaning: "Mục tiêu", type: "명사" },
      { korean: "꿈", pronunciation: "kkum", meaning: "Ước mơ", type: "명사" },
      { korean: "미래", pronunciation: "mi-rae", meaning: "Tương lai", type: "명사" },
      { korean: "준비하다", pronunciation: "jun-bi-ha-da", meaning: "Chuẩn bị", type: "동사" },
      { korean: "노력하다", pronunciation: "no-ryeok-ha-da", meaning: "Nỗ lực", type: "동사" },
      { korean: "성공하다", pronunciation: "seong-gong-ha-da", meaning: "Thành công", type: "동사" },
      { korean: "실패하다", pronunciation: "sil-pae-ha-da", meaning: "Thất bại", type: "동사" },
      { korean: "일정", pronunciation: "il-jeong", meaning: "Lịch trình", type: "명사" },
      { korean: "스케줄", pronunciation: "seu-ke-jul", meaning: "Lịch", type: "명사" },
      { korean: "시간표", pronunciation: "si-gan-pyo", meaning: "Thời gian biểu", type: "명사" },
      { korean: "약속", pronunciation: "yak-sok", meaning: "Hẹn", type: "명사" },
      { korean: "회의", pronunciation: "hoe-ui", meaning: "Cuộc họp", type: "명사" },
      { korean: "프로젝트", pronunciation: "peu-ro-jek-teu", meaning: "Dự án", type: "명사" },
      { korean: "업무", pronunciation: "eom-mu", meaning: "Công việc", type: "명사" },
      { korean: "일", pronunciation: "il", meaning: "Việc", type: "명사" },
      { korean: "과제", pronunciation: "gwa-je", meaning: "Bài tập", type: "명사" },
      { korean: "시험", pronunciation: "si-heom", meaning: "Kỳ thi", type: "명사" },
        { korean: "공부", pronunciation: "gong-bu", meaning: "Học tập", type: "명사" },
      { korean: "취업", pronunciation: "chwi-eop", meaning: "Tìm việc", type: "명사" },
      { korean: "은퇴", pronunciation: "eun-toe", meaning: "Nghỉ hưu", type: "명사" }
    ],
    lesson15: [ // 한국 생활 (Đời sống Hàn Quốc)
      { korean: "한국 생활", pronunciation: "han-guk saeng-hwal", meaning: "Đời sống Hàn Quốc", type: "명사" },
      { korean: "문화", pronunciation: "mun-hwa", meaning: "Văn hóa", type: "명사" },
      { korean: "전통", pronunciation: "jeon-tong", meaning: "Truyền thống", type: "명사" },
      { korean: "현대", pronunciation: "hyeon-dae", meaning: "Hiện đại", type: "명사" },
      { korean: "습관", pronunciation: "seup-gwan", meaning: "Thói quen", type: "명사" },
      { korean: "예의", pronunciation: "ye-ui", meaning: "Lễ phép", type: "명사" },
      { korean: "적응하다", pronunciation: "jeog-eung-ha-da", meaning: "Thích nghi", type: "동사" },
      { korean: "경험하다", pronunciation: "gyeong-heom-ha-da", meaning: "Trải nghiệm", type: "동사" },
      { korean: "한국어", pronunciation: "han-gu-geo", meaning: "Tiếng Hàn", type: "명사" },
      { korean: "한국인", pronunciation: "han-gu-gin", meaning: "Người Hàn", type: "명사" },
      { korean: "외국인", pronunciation: "oe-gu-gin", meaning: "Người nước ngoài", type: "명사" },
      { korean: "김치", pronunciation: "gim-chi", meaning: "Kim chi", type: "명사" },
      { korean: "불고기", pronunciation: "bul-go-gi", meaning: "Bulgogi", type: "명사" },
      { korean: "비빔밥", pronunciation: "bi-bim-bap", meaning: "Bibimbap", type: "명사" },
      { korean: "한복", pronunciation: "han-bok", meaning: "Hanbok", type: "명사" },
      { korean: "태권도", pronunciation: "tae-gwon-do", meaning: "Taekwondo", type: "명사" },
      { korean: "K-pop", pronunciation: "ke-i-pop", meaning: "K-pop", type: "명사" },
      { korean: "드라마", pronunciation: "deu-ra-ma", meaning: "Phim truyền hình", type: "명사" },
      { korean: "절", pronunciation: "jeol", meaning: "Lễ", type: "명사" },
      { korean: "설날", pronunciation: "seol-nal", meaning: "Tết Nguyên đán", type: "명사" },
      { korean: "추석", pronunciation: "chu-seok", meaning: "Tết Trung thu", type: "명사" }
    ]
  },
  level3: {
    lesson1: [ // 학교생활 (Đời sống trường học)
      { korean: "학교생활", pronunciation: "hak-gyo-saeng-hwal", meaning: "Đời sống trường học", type: "명사" },
      { korean: "동아리", pronunciation: "dong-a-ri", meaning: "Câu lạc bộ", type: "명사" },
      { korean: "활동", pronunciation: "hwal-dong", meaning: "Hoạt động", type: "명사" },
      { korean: "참가하다", pronunciation: "cham-ga-ha-da", meaning: "Tham gia", type: "동사" },
      { korean: "대학교", pronunciation: "dae-hak-gyo", meaning: "Đại học", type: "명사" },
      { korean: "전공", pronunciation: "jeon-gong", meaning: "Chuyên ngành", type: "명사" },
      { korean: "수업", pronunciation: "su-eop", meaning: "Buổi học", type: "명사" },
      { korean: "교수님", pronunciation: "gyo-su-nim", meaning: "Giáo sư", type: "명사" },
      { korean: "학과", pronunciation: "hak-gwa", meaning: "Khoa", type: "명사" },
      { korean: "학기", pronunciation: "hak-gi", meaning: "Học kỳ", type: "명사" },
      { korean: "학점", pronunciation: "hak-jeom", meaning: "Điểm tín chỉ", type: "명사" },
      { korean: "시험", pronunciation: "si-heom", meaning: "Kỳ thi", type: "명사" },
      { korean: "과제", pronunciation: "gwa-je", meaning: "Bài tập", type: "명사" },
      { korean: "발표", pronunciation: "bal-pyo", meaning: "Thuyết trình", type: "명사" },
      { korean: "토론", pronunciation: "to-ron", meaning: "Thảo luận", type: "명사" },
      { korean: "연구", pronunciation: "yeon-gu", meaning: "Nghiên cứu", type: "명사" },
      { korean: "논문", pronunciation: "non-mun", meaning: "Luận văn", type: "명사" },
      { korean: "도서관", pronunciation: "do-seo-gwan", meaning: "Thư viện", type: "명사" },
      { korean: "실험실", pronunciation: "sil-heom-sil", meaning: "Phòng thí nghiệm", type: "명사" },
      { korean: "강의실", pronunciation: "gang-ui-sil", meaning: "Phòng giảng", type: "명사" },
      { korean: "캠퍼스", pronunciation: "kaem-peo-seu", meaning: "Khuôn viên", type: "명사" }
    ],
    lesson2: [ // 대인 관계 (Quan hệ con người)
      { korean: "대인관계", pronunciation: "dae-in-gwan-gye", meaning: "Quan hệ con người", type: "명사" },
      { korean: "성격", pronunciation: "seong-gyeok", meaning: "Tính cách", type: "명사" },
      { korean: "친절하다", pronunciation: "chin-jeol-ha-da", meaning: "Tử tế", type: "형용사" },
      { korean: "활발하다", pronunciation: "hwal-bal-ha-da", meaning: "Hoạt bát", type: "형용사" },
      { korean: "조용하다", pronunciation: "jo-yong-ha-da", meaning: "Yên tĩnh", type: "형용사" },
      { korean: "외향적", pronunciation: "oe-hyang-jeok", meaning: "Hướng ngoại", type: "명사" },
      { korean: "내향적", pronunciation: "nae-hyang-jeok", meaning: "Hướng nội", type: "명사" },
      { korean: "소통하다", pronunciation: "so-tong-ha-da", meaning: "Giao tiếp", type: "동사" },
      { korean: "인간관계", pronunciation: "in-gan-gwan-gye", meaning: "Quan hệ nhân gian", type: "명사" },
      { korean: "우정", pronunciation: "u-jeong", meaning: "Tình bạn", type: "명사" },
      { korean: "사랑", pronunciation: "sa-rang", meaning: "Tình yêu", type: "명사" },
      { korean: "가족", pronunciation: "ga-jok", meaning: "Gia đình", type: "명사" },
      { korean: "동료", pronunciation: "dong-ryo", meaning: "Đồng nghiệp", type: "명사" },
      { korean: "선배", pronunciation: "seon-bae", meaning: "Tiền bối", type: "명사" },
      { korean: "후배", pronunciation: "hu-bae", meaning: "Hậu bối", type: "명사" },
      { korean: "이웃", pronunciation: "i-ut", meaning: "Hàng xóm", type: "명사" },
      { korean: "신뢰", pronunciation: "sin-roe", meaning: "Lòng tin", type: "명사" },
      { korean: "존중", pronunciation: "jon-jung", meaning: "Tôn trọng", type: "명사" },
      { korean: "이해", pronunciation: "i-hae", meaning: "Hiểu biết", type: "명사" },
      { korean: "갈등", pronunciation: "gal-deung", meaning: "Xung đột", type: "명사" },
      { korean: "화해", pronunciation: "hwa-hae", meaning: "Hòa giải", type: "명사" }
    ],
    lesson3: [ // 건강 (Sức khỏe)
      { korean: "건강", pronunciation: "geon-gang", meaning: "Sức khỏe", type: "명사" },
      { korean: "건강하다", pronunciation: "geon-gang-ha-da", meaning: "Khỏe mạnh", type: "형용사" },
      { korean: "운동", pronunciation: "un-dong", meaning: "Tập thể dục", type: "명사" },
      { korean: "다이어트", pronunciation: "da-i-eo-teu", meaning: "Ăn kiêng", type: "명사" },
      { korean: "영양", pronunciation: "yeong-yang", meaning: "Dinh dưỡng", type: "명사" },
      { korean: "비타민", pronunciation: "bi-ta-min", meaning: "Vitamin", type: "명사" },
      { korean: "스트레스", pronunciation: "seu-teu-re-seu", meaning: "Căng thẳng", type: "명사" },
      { korean: "휴식", pronunciation: "hyu-sik", meaning: "Nghỉ ngơi", type: "명사" },
      { korean: "체력", pronunciation: "che-ryeok", meaning: "Thể lực", type: "명사" },
      { korean: "근력", pronunciation: "geun-ryeok", meaning: "Sức mạnh cơ bắp", type: "명사" },
      { korean: "지구력", pronunciation: "ji-gu-ryeok", meaning: "Sức bền", type: "명사" },
      { korean: "유연성", pronunciation: "yu-yeon-seong", meaning: "Sự linh hoạt", type: "명사" },
      { korean: "헬스장", pronunciation: "hel-seu-jang", meaning: "Phòng gym", type: "명사" },
      { korean: "요가", pronunciation: "yo-ga", meaning: "Yoga", type: "명사" },
      { korean: "필라테스", pronunciation: "pil-la-te-seu", meaning: "Pilates", type: "명사" },
      { korean: "마라톤", pronunciation: "ma-ra-ton", meaning: "Marathon", type: "명사" },
      { korean: "수면", pronunciation: "su-myeon", meaning: "Giấc ngủ", type: "명사" },
      { korean: "금연", pronunciation: "geum-yeon", meaning: "Cai thuốc", type: "명사" },
      { korean: "금주", pronunciation: "geum-ju", meaning: "Cai rượu", type: "명사" },
      { korean: "균형", pronunciation: "gyun-hyeong", meaning: "Cân bằng", type: "명사" },
      { korean: "예방", pronunciation: "ye-bang", meaning: "Phòng ngừa", type: "명사" }
    ],
    lesson4: [ // 쇼핑 (Mua sắm)
      { korean: "쇼핑", pronunciation: "syo-ping", meaning: "Mua sắm", type: "명사" },
      { korean: "온라인", pronunciation: "on-la-in", meaning: "Trực tuyến", type: "명사" },
      { korean: "오프라인", pronunciation: "o-peu-la-in", meaning: "Ngoại tuyến", type: "명사" },
      { korean: "할인", pronunciation: "ha-rin", meaning: "Giảm giá", type: "명사" },
      { korean: "세일", pronunciation: "se-il", meaning: "Khuyến mãi", type: "명사" },
      { korean: "배송", pronunciation: "bae-song", meaning: "Giao hàng", type: "명사" },
      { korean: "교환", pronunciation: "gyo-hwan", meaning: "Đổi", type: "명사" },
      { korean: "환불", pronunciation: "hwan-bul", meaning: "Hoàn tiền", type: "명사" },
      { korean: "상품", pronunciation: "sang-pum", meaning: "Sản phẩm", type: "명사" },
      { korean: "브랜드", pronunciation: "beu-raen-deu", meaning: "Thương hiệu", type: "명사" },
      { korean: "가격", pronunciation: "ga-gyeok", meaning: "Giá cả", type: "명사" },
      { korean: "품질", pronunciation: "pum-jil", meaning: "Chất lượng", type: "명사" },
      { korean: "사이즈", pronunciation: "sa-i-jeu", meaning: "Kích cỡ", type: "명사" },
      { korean: "색깔", pronunciation: "saek-kkal", meaning: "Màu sắc", type: "명사" },
      { korean: "디자인", pronunciation: "di-ja-in", meaning: "Thiết kế", type: "명사" },
      { korean: "재료", pronunciation: "jae-ryo", meaning: "Chất liệu", type: "명사" },
      { korean: "고객", pronunciation: "go-gaek", meaning: "Khách hàng", type: "명사" },
      { korean: "판매원", pronunciation: "pan-mae-won", meaning: "Nhân viên bán hàng", type: "명사" },
      { korean: "영수증", pronunciation: "yeong-su-jeung", meaning: "Hóa đơn", type: "명사" },
      { korean: "회원카드", pronunciation: "hoe-won-ka-deu", meaning: "Thẻ thành viên", type: "명사" },
      { korean: "결제", pronunciation: "gyeol-je", meaning: "Thanh toán", type: "명사" }
    ],
    lesson5: [ // 요리 (Nấu ăn)
      { korean: "요리", pronunciation: "yo-ri", meaning: "Nấu ăn", type: "명사" },
      { korean: "재료", pronunciation: "jae-ryo", meaning: "Nguyên liệu", type: "명사" },
      { korean: "조리법", pronunciation: "jo-ri-beop", meaning: "Cách nấu", type: "명사" },
      { korean: "볶다", pronunciation: "bok-da", meaning: "Xào", type: "동사" },
      { korean: "끓이다", pronunciation: "kkeul-chi-da", meaning: "Luộc", type: "동사" },
      { korean: "굽다", pronunciation: "gup-da", meaning: "Nướng", type: "동사" },
      { korean: "튀기다", pronunciation: "twi-gi-da", meaning: "Chiên", type: "동사" },
      { korean: "조미료", pronunciation: "jo-mi-ryo", meaning: "Gia vị", type: "명사" },
      { korean: "레시피", pronunciation: "re-si-pi", meaning: "Công thức", type: "명사" },
      { korean: "주방", pronunciation: "ju-bang", meaning: "Nhà bếp", type: "명사" },
      { korean: "냄비", pronunciation: "naem-bi", meaning: "Nồi", type: "명사" },
      { korean: "팬", pronunciation: "paen", meaning: "Chảo", type: "명사" },
      { korean: "칼", pronunciation: "kal", meaning: "Dao", type: "명사" },
      { korean: "도마", pronunciation: "do-ma", meaning: "Thớt", type: "명사" },
      { korean: "젓가락", pronunciation: "jeot-ga-rak", meaning: "Đũa", type: "명사" },
      { korean: "숟가락", pronunciation: "sut-ga-rak", meaning: "Muỗng", type: "명사" },
      { korean: "맛", pronunciation: "mat", meaning: "Vị", type: "명사" },
      { korean: "짜다", pronunciation: "jja-da", meaning: "Mặn", type: "형용사" },
      { korean: "달다", pronunciation: "dal-da", meaning: "Ngọt", type: "형용사" },
      { korean: "시다", pronunciation: "si-da", meaning: "Chua", type: "형용사" },
      { korean: "쓰다", pronunciation: "sseu-da", meaning: "Đắng", type: "형용사" }
    ],
    lesson6: [ // 은행 (Ngân hàng)
      { korean: "은행", pronunciation: "eun-haeng", meaning: "Ngân hàng", type: "명사" },
      { korean: "계좌", pronunciation: "gye-jwa", meaning: "Tài khoản", type: "명사" },
      { korean: "예금", pronunciation: "ye-geum", meaning: "Tiền gửi", type: "명사" },
      { korean: "대출", pronunciation: "dae-chul", meaning: "Vay tiền", type: "명사" },
      { korean: "이자", pronunciation: "i-ja", meaning: "Lãi suất", type: "명사" },
      { korean: "송금", pronunciation: "song-geum", meaning: "Chuyển tiền", type: "명사" },
      { korean: "ATM", pronunciation: "ei-ti-em", meaning: "Máy ATM", type: "명사" },
      { korean: "신용카드", pronunciation: "sin-yong-ka-deu", meaning: "Thẻ tín dụng", type: "명사" },
      { korean: "체크카드", pronunciation: "che-keu-ka-deu", meaning: "Thẻ ghi nợ", type: "명사" },
      { korean: "현금", pronunciation: "hyeon-geum", meaning: "Tiền mặt", type: "명사" },
      { korean: "입금", pronunciation: "ip-geum", meaning: "Gửi tiền", type: "명사" },
      { korean: "출금", pronunciation: "chul-geum", meaning: "Rút tiền", type: "명사" },
      { korean: "잔액", pronunciation: "jan-aek", meaning: "Số dư", type: "명사" },
      { korean: "통장", pronunciation: "tong-jang", meaning: "Sổ tiết kiệm", type: "명사" },
      { korean: "지점", pronunciation: "ji-jeom", meaning: "Chi nhánh", type: "명사" },
      { korean: "은행원", pronunciation: "eun-haeng-won", meaning: "Nhân viên ngân hàng", type: "명사" },
      { korean: "비밀번호", pronunciation: "bi-mil-beon-ho", meaning: "Mật khẩu", type: "명사" },
      { korean: "인터넷뱅킹", pronunciation: "in-teo-net-baeng-king", meaning: "Internet banking", type: "명사" },
      { korean: "수수료", pronunciation: "su-su-ryo", meaning: "Phí", type: "명사" },
      { korean: "환율", pronunciation: "hwan-ryul", meaning: "Tỷ giá", type: "명사" },
      { korean: "투자", pronunciation: "tu-ja", meaning: "Đầu tư", type: "명사" }
    ],
    lesson7: [ // 성격 (Tính cách)
      { korean: "성격", pronunciation: "seong-gyeok", meaning: "Tính cách", type: "명사" },
      { korean: "긍정적", pronunciation: "geung-jeong-jeok", meaning: "Tích cực", type: "명사" },
      { korean: "부정적", pronunciation: "bu-jeong-jeok", meaning: "Tiêu cực", type: "명사" },
      { korean: "낙관적", pronunciation: "nak-gwan-jeok", meaning: "Lạc quan", type: "명사" },
      { korean: "비관적", pronunciation: "bi-gwan-jeok", meaning: "Bi quan", type: "명사" },
      { korean: "꼼꼼하다", pronunciation: "kkom-kkom-ha-da", meaning: "Tỉ mỉ", type: "형용사" },
      { korean: "대충", pronunciation: "dae-chung", meaning: "Đại khái", type: "부사" },
      { korean: "솔직하다", pronunciation: "sol-jik-ha-da", meaning: "Thành thật", type: "형용사" },
      { korean: "신중하다", pronunciation: "sin-jung-ha-da", meaning: "Thận trọng", type: "형용사" },
      { korean: "성급하다", pronunciation: "seong-geup-ha-da", meaning: "Vội vàng", type: "형용사" },
      { korean: "참을성", pronunciation: "cha-meul-seong", meaning: "Kiên nhẫn", type: "명사" },
      { korean: "고집", pronunciation: "go-jip", meaning: "Bướng bỉnh", type: "명사" },
      { korean: "겸손하다", pronunciation: "gyeom-son-ha-da", meaning: "Khiêm tốn", type: "형용사" },
      { korean: "자신감", pronunciation: "ja-sin-gam", meaning: "Tự tin", type: "명사" },
      { korean: "용기", pronunciation: "yong-gi", meaning: "Can đảm", type: "명사" },
      { korean: "겁쟁이", pronunciation: "geop-jaeng-i", meaning: "Người nhút nhát", type: "명사" },
      { korean: "관대하다", pronunciation: "gwan-dae-ha-da", meaning: "Rộng lượng", type: "형용사" },
      { korean: "인색하다", pronunciation: "in-saek-ha-da", meaning: "Keo kiệt", type: "형용사" },
      { korean: "유머", pronunciation: "yu-meo", meaning: "Hài hước", type: "명사" },
      { korean: "진지하다", pronunciation: "jin-ji-ha-da", meaning: "Nghiêm túc", type: "형용사" },
      { korean: "호기심", pronunciation: "ho-gi-sim", meaning: "Tò mò", type: "명사" }
    ],
    lesson8: [ // 실수 (Lỗi lầm)
      { korean: "실수", pronunciation: "sil-su", meaning: "Lỗi lầm", type: "명사" },
      { korean: "실수하다", pronunciation: "sil-su-ha-da", meaning: "Phạm lỗi", type: "동사" },
      { korean: "잘못", pronunciation: "jal-mot", meaning: "Sai lầm", type: "명사" },
      { korean: "문제", pronunciation: "mun-je", meaning: "Vấn đề", type: "명사" },
      { korean: "해결하다", pronunciation: "hae-gyeol-ha-da", meaning: "Giải quyết", type: "동사" },
      { korean: "사과하다", pronunciation: "sa-gwa-ha-da", meaning: "Xin lỗi", type: "동사" },
      { korean: "용서하다", pronunciation: "yong-seo-ha-da", meaning: "Tha thứ", type: "동사" },
      { korean: "반성하다", pronunciation: "ban-seong-ha-da", meaning: "Hối cải", type: "동사" },
      { korean: "후회하다", pronunciation: "hu-hoe-ha-da", meaning: "Hối hận", type: "동사" },
      { korean: "책임", pronunciation: "chaek-im", meaning: "Trách nhiệm", type: "명사" },
      { korean: "변명", pronunciation: "byeon-myeong", meaning: "Lời bào chữa", type: "명사" },
      { korean: "핑계", pronunciation: "ping-gye", meaning: "Cớ", type: "명사" },
      { korean: "실패", pronunciation: "sil-pae", meaning: "Thất bại", type: "명사" },
      { korean: "과실", pronunciation: "gwa-sil", meaning: "Lỗi lầm", type: "명사" },
      { korean: "부주의", pronunciation: "bu-ju-ui", meaning: "Bất cẩn", type: "명사" },
      { korean: "조심하다", pronunciation: "jo-sim-ha-da", meaning: "Cẩn thận", type: "동사" },
      { korean: "주의하다", pronunciation: "ju-ui-ha-da", meaning: "Chú ý", type: "동사" },
      { korean: "개선하다", pronunciation: "gae-seon-ha-da", meaning: "Cải thiện", type: "동사" },
      { korean: "고치다", pronunciation: "go-chi-da", meaning: "Sửa chữa", type: "동사" },
      { korean: "경험", pronunciation: "gyeong-heom", meaning: "Kinh nghiệm", type: "명사" },
      { korean: "교훈", pronunciation: "gyo-hun", meaning: "Bài học", type: "명사" }
    ],
          lesson9: [ // 이사 (Chuyển nhà)
      { korean: "이사", pronunciation: "i-sa", meaning: "Chuyển nhà", type: "명사" },
      { korean: "이사하다", pronunciation: "i-sa-ha-da", meaning: "Dọn nhà", type: "동사" },
      { korean: "새집", pronunciation: "sae-jip", meaning: "Nhà mới", type: "명사" },
      { korean: "포장", pronunciation: "po-jang", meaning: "Đóng gói", type: "명사" },
      { korean: "짐", pronunciation: "jim", meaning: "Đồ đạc", type: "명사" },
      { korean: "이삿짐", pronunciation: "i-sat-jim", meaning: "Đồ chuyển nhà", type: "명사" },
      { korean: "상자", pronunciation: "sang-ja", meaning: "Hộp", type: "명사" },
      { korean: "포장지", pronunciation: "po-jang-ji", meaning: "Giấy gói", type: "명사" },
      { korean: "운반", pronunciation: "un-ban", meaning: "Vận chuyển", type: "명사" },
      { korean: "청소", pronunciation: "cheong-so", meaning: "Dọn dẹp", type: "명사" },
      { korean: "정리", pronunciation: "jeong-ri", meaning: "Sắp xếp", type: "명사" },
      { korean: "임대", pronunciation: "im-dae", meaning: "Cho thuê", type: "명사" },
      { korean: "전세", pronunciation: "jeon-se", meaning: "Thuê nguyên căn", type: "명사" },
      { korean: "월세", pronunciation: "wol-se", meaning: "Thuê theo tháng", type: "명사" },
      { korean: "보증금", pronunciation: "bo-jeung-geum", meaning: "Tiền đặt cọc", type: "명사" },
      { korean: "계약", pronunciation: "gye-yak", meaning: "Hợp đồng", type: "명사" },
      { korean: "부동산", pronunciation: "bu-dong-san", meaning: "Bất động sản", type: "명사" },
      { korean: "집주인", pronunciation: "jip-ju-in", meaning: "Chủ nhà", type: "명사" },
      { korean: "이웃", pronunciation: "i-ut", meaning: "Hàng xóm", type: "명사" },
      { korean: "동네", pronunciation: "dong-ne", meaning: "Khu phố", type: "명사" },
      { korean: "편의시설", pronunciation: "pyeon-ui-si-seol", meaning: "Tiện ích", type: "명사" }
    ],
    lesson10: [ // 여행 (Du lịch)
      { korean: "관광지", pronunciation: "gwan-gwang-ji", meaning: "Địa điểm du lịch", type: "명사" },
      { korean: "명소", pronunciation: "myeong-so", meaning: "Danh lam thắng cảnh", type: "명사" },
      { korean: "문화재", pronunciation: "mun-hwa-jae", meaning: "Di sản văn hóa", type: "명사" },
      { korean: "가이드", pronunciation: "ga-i-deu", meaning: "Hướng dẫn viên", type: "명사" },
      { korean: "일정", pronunciation: "il-jeong", meaning: "Lịch trình", type: "명사" },
      { korean: "패키지", pronunciation: "pae-ki-ji", meaning: "Gói tour", type: "명사" },
      { korean: "자유여행", pronunciation: "ja-yu-yeo-haeng", meaning: "Du lịch tự túc", type: "명사" },
      { korean: "단체여행", pronunciation: "dan-che-yeo-haeng", meaning: "Du lịch đoàn", type: "명사" },
      { korean: "항공료", pronunciation: "hang-gong-ryo", meaning: "Vé máy bay", type: "명사" },
      { korean: "숙박비", pronunciation: "suk-bak-bi", meaning: "Tiền phòng", type: "명사" },
      { korean: "여행경비", pronunciation: "yeo-haeng-gyeong-bi", meaning: "Chi phí du lịch", type: "명사" },
      { korean: "환전", pronunciation: "hwan-jeon", meaning: "Đổi tiền", type: "명사" },
      { korean: "여행보험", pronunciation: "yeo-haeng-bo-heom", meaning: "Bảo hiểm du lịch", type: "명사" },
      { korean: "출입국", pronunciation: "chul-ip-guk", meaning: "Xuất nhập cảnh", type: "명사" },
      { korean: "세관", pronunciation: "se-gwan", meaning: "Hải quan", type: "명사" },
      { korean: "면세점", pronunciation: "myeon-se-jeom", meaning: "Cửa hàng miễn thuế", type: "명사" },
      { korean: "기념품", pronunciation: "gi-nyeom-pum", meaning: "Quà lưu niệm", type: "명사" },
      { korean: "사진촬영", pronunciation: "sa-jin-chal-yeong", meaning: "Chụp ảnh", type: "명사" },
      { korean: "탐험", pronunciation: "tam-heom", meaning: "Khám phá", type: "명사" },
      { korean: "휴양지", pronunciation: "hyu-yang-ji", meaning: "Khu nghỉ dưỡng", type: "명사" },
      { korean: "바캉스", pronunciation: "ba-kang-seu", meaning: "Kỳ nghỉ", type: "명사" }
    ],
    lesson11: [ // 고민 (Nỗi lo)
      { korean: "고민", pronunciation: "go-min", meaning: "Nỗi lo", type: "명사" },
      { korean: "고민하다", pronunciation: "go-min-ha-da", meaning: "Lo lắng", type: "동사" },
      { korean: "걱정", pronunciation: "geok-jeong", meaning: "Sự lo lắng", type: "명사" },
      { korean: "스트레스", pronunciation: "seu-teu-re-seu", meaning: "Căng thẳng", type: "명사" },
      { korean: "상담", pronunciation: "sang-dam", meaning: "Tư vấn", type: "명사" },
      { korean: "조언", pronunciation: "jo-eon", meaning: "Lời khuyên", type: "명사" },
      { korean: "결정", pronunciation: "gyeol-jeong", meaning: "Quyết định", type: "명사" },
      { korean: "선택", pronunciation: "seon-taek", meaning: "Lựa chọn", type: "명사" },
      { korean: "불안", pronunciation: "bu-ran", meaning: "Bất an", type: "명사" },
      { korean: "우울", pronunciation: "u-ul", meaning: "Buồn bã", type: "명사" },
      { korean: "압박", pronunciation: "ap-bak", meaning: "Áp lực", type: "명사" },
      { korean: "부담", pronunciation: "bu-dam", meaning: "Gánh nặng", type: "명사" },
      { korean: "해결책", pronunciation: "hae-gyeol-chaek", meaning: "Giải pháp", type: "명사" },
      { korean: "대안", pronunciation: "dae-an", meaning: "Phương án", type: "명사" },
      { korean: "방향", pronunciation: "bang-hyang", meaning: "Hướng", type: "명사" },
      { korean: "기로", pronunciation: "gi-ro", meaning: "Ngã ba đường", type: "명사" },
      { korean: "딜레마", pronunciation: "dil-le-ma", meaning: "Tình thế khó xử", type: "명사" },
      { korean: "망설이다", pronunciation: "mang-seo-ri-da", meaning: "Do dự", type: "동사" },
      { korean: "혼란", pronunciation: "hon-ran", meaning: "Hỗn loạn", type: "명사" },
      { korean: "심각하다", pronunciation: "sim-gak-ha-da", meaning: "Nghiêm trọng", type: "형용사" },
      { korean: "의논", pronunciation: "ui-non", meaning: "Bàn bạc", type: "명사" }
    ],
    lesson12: [ // 인터넷 (Internet)
      { korean: "인터넷", pronunciation: "in-teo-net", meaning: "Internet", type: "명사" },
      { korean: "홈페이지", pronunciation: "hom-pe-i-ji", meaning: "Trang web", type: "명사" },
      { korean: "블로그", pronunciation: "beul-lo-geu", meaning: "Blog", type: "명사" },
      { korean: "SNS", pronunciation: "e-seu-en-e-seu", meaning: "Mạng xã hội", type: "명사" },
      { korean: "검색", pronunciation: "geom-saek", meaning: "Tìm kiếm", type: "명사" },
      { korean: "다운로드", pronunciation: "da-un-lo-deu", meaning: "Tải xuống", type: "명사" },
      { korean: "업로드", pronunciation: "eop-lo-deu", meaning: "Tải lên", type: "명사" },
      { korean: "온라인쇼핑", pronunciation: "on-la-in-syo-ping", meaning: "Mua sắm trực tuyến", type: "명사" },
      { korean: "웹사이트", pronunciation: "wep-sa-i-teu", meaning: "Website", type: "명사" },
      { korean: "이메일", pronunciation: "i-me-il", meaning: "Email", type: "명사" },
      { korean: "게시판", pronunciation: "ge-si-pan", meaning: "Diễn đàn", type: "명사" },
      { korean: "댓글", pronunciation: "daet-geul", meaning: "Bình luận", type: "명사" },
      { korean: "좋아요", pronunciation: "jo-a-yo", meaning: "Like", type: "명사" },
      { korean: "공유", pronunciation: "gong-yu", meaning: "Chia sẻ", type: "명사" },
      { korean: "팔로우", pronunciation: "pal-lo-u", meaning: "Follow", type: "명사" },
      { korean: "태그", pronunciation: "tae-geu", meaning: "Tag", type: "명사" },
      { korean: "해시태그", pronunciation: "hae-si-tae-geu", meaning: "Hashtag", type: "명사" },
      { korean: "링크", pronunciation: "ring-keu", meaning: "Link", type: "명사" },
      { korean: "클릭", pronunciation: "keul-lik", meaning: "Click", type: "명사" },
      { korean: "접속", pronunciation: "jeop-sok", meaning: "Truy cập", type: "명사" },
      { korean: "가입", pronunciation: "ga-ip", meaning: "Đăng ký", type: "명사" }
    ],
    lesson13: [ // 희망 (Hy vọng)
      { korean: "희망", pronunciation: "hui-mang", meaning: "Hy vọng", type: "명사" },
      { korean: "꿈", pronunciation: "kkum", meaning: "Ước mơ", type: "명사" },
      { korean: "목표", pronunciation: "mok-pyo", meaning: "Mục tiêu", type: "명사" },
      { korean: "포기하다", pronunciation: "po-gi-ha-da", meaning: "Từ bỏ", type: "동사" },
      { korean: "노력하다", pronunciation: "no-ryeok-ha-da", meaning: "Nỗ lực", type: "동사" },
      { korean: "인내", pronunciation: "in-nae", meaning: "Kiên nhẫn", type: "명사" },
      { korean: "극복하다", pronunciation: "geuk-bok-ha-da", meaning: "Vượt qua", type: "동사" },
      { korean: "성취", pronunciation: "seong-chwi", meaning: "Thành tựu", type: "명사" },
      { korean: "이루다", pronunciation: "i-ru-da", meaning: "Đạt được", type: "동사" },
      { korean: "성공", pronunciation: "seong-gong", meaning: "Thành công", type: "명사" },
      { korean: "실패", pronunciation: "sil-pae", meaning: "Thất bại", type: "명사" },
      { korean: "도전", pronunciation: "do-jeon", meaning: "Thách thức", type: "명사" },
      { korean: "기회", pronunciation: "gi-hoe", meaning: "Cơ hội", type: "명사" },
      { korean: "가능성", pronunciation: "ga-neung-seong", meaning: "Khả năng", type: "명사" },
      { korean: "확신", pronunciation: "hwak-sin", meaning: "Tin tưởng", type: "명사" },
      { korean: "믿음", pronunciation: "mid-eum", meaning: "Lòng tin", type: "명사" },
      { korean: "용기", pronunciation: "yong-gi", meaning: "Can đảm", type: "명사" },
      { korean: "의지", pronunciation: "ui-ji", meaning: "Ý chí", type: "명사" },
      { korean: "동기", pronunciation: "dong-gi", meaning: "Động lực", type: "명사" },
      { korean: "열정", pronunciation: "yeol-jeong", meaning: "Nhiệt huyết", type: "명사" },
      { korean: "결심", pronunciation: "gyeol-sim", meaning: "Quyết tâm", type: "명사" }
    ],
    lesson14: [ // 영화와 드라마 (Phim và phim truyền hình)
      { korean: "드라마", pronunciation: "deu-ra-ma", meaning: "Phim truyền hình", type: "명사" },
      { korean: "시리즈", pronunciation: "si-ri-jeu", meaning: "Loạt phim", type: "명사" },
      { korean: "배우", pronunciation: "bae-u", meaning: "Diễn viên", type: "명사" },
      { korean: "감독", pronunciation: "gam-dok", meaning: "Đạo diễn", type: "명사" },
      { korean: "시나리오", pronunciation: "si-na-ri-o", meaning: "Kịch bản", type: "명사" },
      { korean: "장르", pronunciation: "jang-reu", meaning: "Thể loại", type: "명사" },
      { korean: "스릴러", pronunciation: "seu-ril-leo", meaning: "Phim gay cấn", type: "명사" },
      { korean: "다큐멘터리", pronunciation: "da-kyu-men-teo-ri", meaning: "Phim tài liệu", type: "명사" },
      { korean: "예능", pronunciation: "ye-neung", meaning: "Chương trình giải trí", type: "명사" },
      { korean: "토크쇼", pronunciation: "to-keu-syo", meaning: "Talk show", type: "명사" },
      { korean: "뉴스", pronunciation: "nyu-seu", meaning: "Tin tức", type: "명사" },
      { korean: "광고", pronunciation: "gwang-go", meaning: "Quảng cáo", type: "명사" },
      { korean: "영화관", pronunciation: "yeong-hwa-gwan", meaning: "Rạp chiếu phim", type: "명사" },
      { korean: "상영시간", pronunciation: "sang-yeong-si-gan", meaning: "Giờ chiếu", type: "명사" },
      { korean: "예매", pronunciation: "ye-mae", meaning: "Đặt vé trước", type: "명사" },
      { korean: "줄거리", pronunciation: "jul-geo-ri", meaning: "Cốt truyện", type: "명사" },
      { korean: "주인공", pronunciation: "ju-in-gong", meaning: "Nhân vật chính", type: "명사" },
      { korean: "악역", pronunciation: "ak-yeok", meaning: "Vai phản diện", type: "명사" },
      { korean: "조연", pronunciation: "jo-yeon", meaning: "Vai phụ", type: "명사" },
      { korean: "연출", pronunciation: "yeon-chul", meaning: "Đạo diễn", type: "명사" },
      { korean: "제작", pronunciation: "je-jak", meaning: "Sản xuất", type: "명사" }
    ],
    lesson15: [ // 예절과 규칙 (Lễ nghi và quy tắc)
      { korean: "예절", pronunciation: "ye-jeol", meaning: "Lễ nghi", type: "명사" },
      { korean: "규칙", pronunciation: "gyu-chik", meaning: "Quy tắc", type: "명사" },
      { korean: "매너", pronunciation: "mae-neo", meaning: "Phép lịch sự", type: "명사" },
      { korean: "질서", pronunciation: "jil-seo", meaning: "Trật tự", type: "명사" },
      { korean: "준수하다", pronunciation: "jun-su-ha-da", meaning: "Tuân thủ", type: "동사" },
      { korean: "위반하다", pronunciation: "wi-ban-ha-da", meaning: "Vi phạm", type: "동사" },
      { korean: "공중도덕", pronunciation: "gong-jung-do-deok", meaning: "Đạo đức công cộng", type: "명사" },
      { korean: "사회적 예의", pronunciation: "sa-hoe-jeok ye-ui", meaning: "Phép xã giao", type: "명사" },
      { korean: "법률", pronunciation: "beop-ryul", meaning: "Pháp luật", type: "명사" },
      { korean: "제도", pronunciation: "je-do", meaning: "Chế độ", type: "명사" },
      { korean: "원칙", pronunciation: "won-chik", meaning: "Nguyên tắc", type: "명사" },
      { korean: "기준", pronunciation: "gi-jun", meaning: "Tiêu chuẩn", type: "명사" },
      { korean: "벌금", pronunciation: "beol-geum", meaning: "Tiền phạt", type: "명사" },
      { korean: "처벌", pronunciation: "cheo-beol", meaning: "Hình phạt", type: "명사" },
      { korean: "금지", pronunciation: "geum-ji", meaning: "Cấm", type: "명사" },
      { korean: "허용", pronunciation: "heo-yong", meaning: "Cho phép", type: "명사" },
      { korean: "의무", pronunciation: "ui-mu", meaning: "Nghĩa vụ", type: "명사" },
      { korean: "권리", pronunciation: "gwon-ri", meaning: "Quyền lợi", type: "명사" },
      { korean: "예외", pronunciation: "ye-oe", meaning: "Ngoại lệ", type: "명사" },
      { korean: "일반적", pronunciation: "il-ban-jeok", meaning: "Chung", type: "명사" },
      { korean: "공식적", pronunciation: "gong-sik-jeok", meaning: "Chính thức", type: "명사" }
    ]
  }
};

// Cache for generated lesson data to avoid recreating
const lessonDataCache = new Map();

// Function to generate vocabulary for a level with topic-specific words
const generateVocabularyLevel = (level, titles) => {
  const cacheKey = `${level}_vocabulary`;
  
  if (lessonDataCache.has(cacheKey)) {
    return lessonDataCache.get(cacheKey);
  }

  const vocabularyLevel = {};
  for (let i = 1; i <= 15; i++) {
    const lessonKey = `lesson${i}`;
    vocabularyLevel[lessonKey] = {
      title: titles[i-1] || `Bài ${i}`,
      words: vocabularyByLesson[level]?.[lessonKey] || generateDefaultWords(level, i)
    };
  }
  
  lessonDataCache.set(cacheKey, vocabularyLevel);
  return vocabularyLevel;
};

// Generate default words for lessons not yet defined
const generateDefaultWords = (level, lessonNumber) => {
  // Generate 20 default vocabulary words based on level and lesson number
  const baseWords = {
    level1: [
      { korean: "예시", pronunciation: "ye-si", meaning: "Ví dụ", type: "명사" },
      { korean: "단어", pronunciation: "da-neo", meaning: "Từ vựng", type: "명사" },
      { korean: "문장", pronunciation: "mun-jang", meaning: "Câu", type: "명사" },
      { korean: "연습", pronunciation: "yeon-seup", meaning: "Luyện tập", type: "명사" },
      { korean: "배우다", pronunciation: "bae-u-da", meaning: "Học", type: "동사" },
      { korean: "하다", pronunciation: "ha-da", meaning: "Làm", type: "동사" },
      { korean: "있다", pronunciation: "it-da", meaning: "Có", type: "동사" },
      { korean: "없다", pronunciation: "eop-da", meaning: "Không có", type: "동사" },
      { korean: "가다", pronunciation: "ga-da", meaning: "Đi", type: "동사" },
      { korean: "오다", pronunciation: "o-da", meaning: "Đến", type: "동사" },
      { korean: "보다", pronunciation: "bo-da", meaning: "Xem", type: "동사" },
      { korean: "말하다", pronunciation: "mal-ha-da", meaning: "Nói", type: "동사" },
      { korean: "먹다", pronunciation: "meok-da", meaning: "Ăn", type: "동사" },
      { korean: "마시다", pronunciation: "ma-si-da", meaning: "Uống", type: "동사" },
      { korean: "좋다", pronunciation: "jo-ta", meaning: "Tốt", type: "형용사" },
      { korean: "나쁘다", pronunciation: "na-ppeu-da", meaning: "Xấu", type: "형용사" },
      { korean: "크다", pronunciation: "keu-da", meaning: "To", type: "형용사" },
      { korean: "작다", pronunciation: "jak-da", meaning: "Nhỏ", type: "형용사" },
      { korean: "많다", pronunciation: "man-ta", meaning: "Nhiều", type: "형용사" },
      { korean: "적다", pronunciation: "jeok-da", meaning: "Ít", type: "형용사" }
    ],
    level2: [
      { korean: "경험", pronunciation: "gyeong-heom", meaning: "Kinh nghiệm", type: "명사" },
      { korean: "준비하다", pronunciation: "jun-bi-ha-da", meaning: "Chuẩn bị", type: "동사" },
      { korean: "계획", pronunciation: "gye-hoek", meaning: "Kế hoạch", type: "명사" },
      { korean: "중요하다", pronunciation: "jung-yo-ha-da", meaning: "Quan trọng", type: "형용사" },
      { korean: "필요하다", pronunciation: "pi-ryo-ha-da", meaning: "Cần thiết", type: "형용사" },
      { korean: "사용하다", pronunciation: "sa-yong-ha-da", meaning: "Sử dụng", type: "동사" },
      { korean: "생각하다", pronunciation: "saeng-gak-ha-da", meaning: "Nghĩ", type: "동사" },
      { korean: "이해하다", pronunciation: "i-hae-ha-da", meaning: "Hiểu", type: "동사" },
      { korean: "설명하다", pronunciation: "seol-myeong-ha-da", meaning: "Giải thích", type: "동사" },
      { korean: "도움", pronunciation: "do-um", meaning: "Giúp đỡ", type: "명사" },
      { korean: "문제", pronunciation: "mun-je", meaning: "Vấn đề", type: "명사" },
      { korean: "해결", pronunciation: "hae-gyeol", meaning: "Giải quyết", type: "명사" },
      { korean: "방법", pronunciation: "bang-beop", meaning: "Phương pháp", type: "명사" },
      { korean: "기회", pronunciation: "gi-hoe", meaning: "Cơ hội", type: "명사" },
      { korean: "상황", pronunciation: "sang-hwang", meaning: "Tình huống", type: "명사" },
      { korean: "관심", pronunciation: "gwan-sim", meaning: "Quan tâm", type: "명사" },
      { korean: "노력", pronunciation: "no-ryeok", meaning: "Nỗ lực", type: "명사" },
      { korean: "결정", pronunciation: "gyeol-jeong", meaning: "Quyết định", type: "명사" },
      { korean: "발표", pronunciation: "bal-pyo", meaning: "Thuyết trình", type: "명사" },
      { korean: "토론", pronunciation: "to-ron", meaning: "Thảo luận", type: "명사" }
    ],
    level3: [
      { korean: "분석하다", pronunciation: "bun-seok-ha-da", meaning: "Phân tích", type: "동사" },
      { korean: "개념", pronunciation: "gae-nyeom", meaning: "Khái niệm", type: "명사" },
      { korean: "방법", pronunciation: "bang-beop", meaning: "Phương pháp", type: "명사" },
      { korean: "결과", pronunciation: "gyeol-gwa", meaning: "Kết quả", type: "명사" },
      { korean: "발전하다", pronunciation: "bal-jeon-ha-da", meaning: "Phát triển", type: "동사" },
      { korean: "연구", pronunciation: "yeon-gu", meaning: "Nghiên cứu", type: "명사" },
      { korean: "조사", pronunciation: "jo-sa", meaning: "Điều tra", type: "명사" },
      { korean: "검토", pronunciation: "geom-to", meaning: "Xem xét", type: "명사" },
      { korean: "평가", pronunciation: "pyeong-ga", meaning: "Đánh giá", type: "명사" },
      { korean: "비교", pronunciation: "bi-gyo", meaning: "So sánh", type: "명사" },
      { korean: "차이", pronunciation: "cha-i", meaning: "Sự khác biệt", type: "명사" },
      { korean: "특징", pronunciation: "teuk-jing", meaning: "Đặc điểm", type: "명사" },
      { korean: "장점", pronunciation: "jang-jeom", meaning: "Ưu điểm", type: "명사" },
      { korean: "단점", pronunciation: "dan-jeom", meaning: "Nhược điểm", type: "명사" },
      { korean: "효과", pronunciation: "hyo-gwa", meaning: "Hiệu quả", type: "명사" },
      { korean: "영향", pronunciation: "yeong-hyang", meaning: "Ảnh hưởng", type: "명사" },
      { korean: "원인", pronunciation: "won-in", meaning: "Nguyên nhân", type: "명사" },
      { korean: "목적", pronunciation: "mok-jeok", meaning: "Mục đích", type: "명사" },
      { korean: "과정", pronunciation: "gwa-jeong", meaning: "Quá trình", type: "명사" },
      { korean: "체계", pronunciation: "che-gye", meaning: "Hệ thống", type: "명사" }
    ]
  };
  
  return baseWords[level] || baseWords.level1;
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
      lessons: generateVocabularyLevel('level1', level1Titles)
    },
    level2: {
      title: "Tiếng Hàn Tổng Hợp - Sơ cấp 2",
      lessons: generateVocabularyLevel('level2', level2Titles)
    },
    level3: {
      title: "Tiếng Hàn Tổng Hợp - Trung cấp 1",
      lessons: generateVocabularyLevel('level3', level3Titles)
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

  const [isFlipping, setIsFlipping] = useState(false);

  // Get vocabulary data with memoization - this prevents recreating data on every render
  const vocabularyData = useMemo(() => {
    const data = getVocabularyData();
    setIsDataLoaded(true);
    return data;
  }, []);

  // Simplified speech initialization - voice selection is now handled in speakWord function (matching Exercises)
  useEffect(() => {
    if ('speechSynthesis' in window) {
      setIsSpeechReady(true);
      console.log('Speech synthesis ready - using dynamic voice selection (same as Exercises)');
    } else {
      console.warn('Speech synthesis not supported');
      setIsSpeechReady(false);
    }
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
    if (!text?.trim()) return;
    
    // Fallback for unsupported browsers
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported in this browser');
      return;
    }
    
    const synth = window.speechSynthesis;
    
    const speak = () => {
      // Cancel any ongoing speech
      synth.cancel();
      
      // Get all Korean voices and prioritize highest quality ones (same as Exercises page)
      const voices = synth.getVoices().filter((v) => v.lang && v.lang.startsWith('ko'));
      
      // Enhanced voice prioritization for maximum quality (matching Exercises.js algorithm)
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
        console.log('🎯 Using high-quality voice (matching Exercises):', preferredVoice.name);
      }
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set Korean language explicitly
      utterance.lang = 'ko-KR';
      
      // Use the best available Korean voice
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      // Optimized speech parameters for high-quality Korean learning (matching Exercises)
      utterance.rate = 0.8 * 0.95; // Slightly slower for better clarity 
      utterance.pitch = 1.0; // Natural, authentic pitch
      utterance.volume = 1.0; // Full volume for clarity
      
      // Set up enhanced event handlers
      utterance.onstart = () => {
        console.log('🎵 Started premium Korean voice playback (same as Exercises)');
      };
      
      utterance.onend = () => {
        console.log('🔇 Finished premium voice playback');
      };
      
      utterance.onerror = (event) => {
        console.error('❌ Speech synthesis error:', event.error);
      };
      
      synth.speak(utterance);
    };
    
    // Handle voices loading asynchronously
    if (synth.getVoices().length) {
      speak();
    } else {
      synth.onvoiceschanged = speak;
    }
  }, []);

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
    const title = `Từ vựng tiếng Hàn ${getHeaderText()} | 한국어학습`;
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
                    {/* Enhanced Audio Button with Quality Indicator */}
                    <div className="flex flex-col items-center gap-2">
                <button
                  onClick={(e) => { e.stopPropagation(); speakWord(currentWord.korean); }}
                        className={`group px-5 py-2 rounded-xl font-semibold text-sm transition-all duration-300 inline-flex items-center gap-2 ${
                          isSpeechReady 
                            ? 'bg-gradient-to-r from-primary to-orange-600 text-white hover:scale-105 shadow-md hover:shadow-lg active:scale-95 transform' 
                            : 'bg-gray-300 text-gray-500 cursor-wait'
                        }`}
                        disabled={!isSpeechReady}
                        title={isSpeechReady ? 'Phát âm từ này với giọng nam chất lượng cao' : 'Đang tải giọng đọc...'}
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
            <div className="mt-2 space-y-1">
              <p className="text-sm text-green-600">Premium Korean Voice Ready</p>
            </div>
          ) : (
            <p className="mt-2 text-sm text-gray-500">Đang tải giọng tiếng Hàn...</p>
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
          <aside className="w-full lg:w-1/3 xl:w-1/4 lg:sticky lg:top-8 self-start bg-white p-4 sm:p-6 rounded-lg shadow-md">
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
                          <div className="flex flex-col items-center gap-1">
                            <button 
                              onClick={() => speakWord(word.korean)} 
                              className="text-gray-500 hover:text-primary cursor-pointer transition-all duration-200 hover:scale-110 active:scale-95 p-2 rounded-lg hover:bg-white"
                              title="Premium Korean Voice (same as Exercises)"
                            >
                              <Volume2 className="hover:animate-pulse" />
                        </button>
                          </div>
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
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedLesson.words.map((word, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                        <div>
                          <p className="font-bold text-lg text-primary">{word.korean}</p>
                          <p className="text-gray-600">{word.meaning}</p>
                          <p className="text-sm text-gray-400">[{word.pronunciation}]</p>
                        </div>
                          <div className="flex flex-col items-center gap-1">
                            <button 
                              onClick={() => speakWord(word.korean)} 
                              className="p-2 text-gray-500 hover:text-primary cursor-pointer transition-all duration-200 hover:scale-110 active:scale-95 rounded-lg hover:bg-white"
                              title="Premium Korean Voice (same as Exercises)"
                            >
                              <Volume2 className="hover:animate-pulse" />
                        </button>
                          </div>
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