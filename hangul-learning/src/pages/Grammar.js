import React, { useState, useMemo } from 'react';
import AdsenseAd from '../components/AdsenseAd';
// import { sc2Raw } from './Basic2';
import SEO from '../components/SEO';

function Grammar() {
  const [selectedLevel, setSelectedLevel] = useState('level1');
  const [selectedLesson, setSelectedLesson] = useState('lesson1');
  const [searchTerm, setSearchTerm] = useState('');

  // Grammar data for Sơ cấp 1 lessons
  const grammarData = {
        lesson1: {
          title: 'Bài 01: Giới thiệu (소개)',
          grammar: [
            {
              rule: '입니다',
              description: 'Cấu trúc: N + 입니다. Ý nghĩa: "là ...". Đuôi câu trần thuật lịch sự/trang trọng, dùng khi xác nhận thông tin hoặc giới thiệu bản thân, đồ vật, địa điểm.',
              examples: [
                { korean: '저는 베트남 사람입니다.', vietnamese: 'Tôi là người Việt Nam.', note: 'Giới thiệu quốc tịch' },
                { korean: '여기는 교실입니다.', vietnamese: 'Đây là lớp học.', note: 'Xác định địa điểm' },
                { korean: '이 책은 한국어 교재입니다.', vietnamese: 'Cuốn sách này là giáo trình tiếng Hàn.', note: 'Giới thiệu tính chất của vật' }
              ]
            },
            {
              rule: '입니까?',
              description: 'Cấu trúc: N + 입니까? Ý nghĩa: "có phải là ... không?" Đuôi câu nghi vấn lịch sự/trang trọng nhằm xác nhận hoặc hỏi thông tin.',
              examples: [
                { korean: '선생님입니까?', vietnamese: 'Anh/chị có phải là giáo viên không?', note: 'Hỏi nghề nghiệp' },
                { korean: '거기가 역입니까?', vietnamese: 'Kia có phải là ga tàu không?', note: 'Hỏi địa điểm' },
                { korean: '이것이 펜입니까?', vietnamese: 'Đây có phải bút không?', note: 'Hỏi đồ vật' }
              ]
            },
            {
              rule: '은/는',
              description: 'Tiểu từ chủ đề (topic). Dùng để nhấn mạnh hoặc so sánh chủ đề với phần còn lại của câu, thường xuất hiện cùng 정보 đã biết hoặc để tạo đối lập.',
              examples: [
                { korean: '저는 학생입니다.', vietnamese: 'Tôi (thì) là sinh viên.', note: 'Giới thiệu chủ đề "tôi"' },
                { korean: '오늘은 날씨가 좋아요.', vietnamese: 'Hôm nay (thì) thời tiết đẹp.', note: 'So sánh "hôm nay" với những ngày khác' },
                { korean: '이 음식은 맵습니다.', vietnamese: 'Món này thì cay.', note: 'Nhấn mạnh món ăn hiện tại' }
              ]
            }
          ]
        },
        lesson2: {
          title: 'Bài 02: Trường học (학교)',
          grammar: [
            {
              rule: '여기/거기/저기',
              description: 'Đại từ chỉ vị trí – 여기 (ở đây, gần người nói), 거기 (ở đó, gần người nghe), 저기 (ở kia, xa cả hai).',
              examples: [
                { korean: '여기가 도서관입니다.', vietnamese: 'Đây là thư viện.', note: 'Gần người nói' },
                { korean: '거기가 회사예요?', vietnamese: 'Đó có phải công ty không?', note: 'Gần người nghe' },
                { korean: '화장실은 저기입니다.', vietnamese: 'Nhà vệ sinh ở kia.', note: 'Xa cả hai' }
              ]
            },
            {
              rule: '이것/그것/저것',
              description: 'Đại từ chỉ vật – 이것 (cái này), 그것 (cái đó), 저것 (cái kia). Thường đi với 이/그/저 khi kết hợp danh từ.',
              examples: [
                { korean: '이것은 무엇입니까?', vietnamese: 'Đây là cái gì?', note: 'Vật gần người nói' },
                { korean: '그것은 제 가방이에요.', vietnamese: 'Đó là cặp của tôi.', note: 'Vật gần người nghe' },
                { korean: '저것은 빵입니다.', vietnamese: 'Kia là bánh mì.', note: 'Vật xa cả hai' }
              ]
            },
            {
              rule: '이/가',
              description: 'Tiểu từ chủ ngữ. Dùng để giới thiệu thông tin mới hoặc nhấn mạnh chủ thể hành động/trạng thái.',
              examples: [
                { korean: '사과가 맛있어요.', vietnamese: 'Táo (thì) ngon.', note: 'Nhấn mạnh "táo"' },
                { korean: '누가 왔어요?', vietnamese: 'Ai đã đến?', note: 'Khi chưa biết chủ ngữ' },
                { korean: '비가 와요.', vietnamese: 'Trời mưa.', note: 'Chủ ngữ là hiện tượng tự nhiên' }
              ]
            },
            {
              rule: '에 있습니다/없습니다',
              description: 'Cấu trúc tồn tại: N + 에 있습니다 (có ở ...) / 없습니다 (không có ở ...). Dùng để nói sự hiện diện hoặc vắng mặt của người/vật.',
              examples: [
                { korean: '책이 책상 위에 있습니다.', vietnamese: 'Sách ở trên bàn.', note: 'Chỉ vị trí' },
                { korean: '교실에 학생이 없습니다.', vietnamese: 'Không có học sinh trong lớp.', note: 'Phủ định sự tồn tại' }
              ]
            },
            {
              rule: '이/가 아닙니다',
              description: 'Phủ định của "이다": N1 + 이/가 아닙니다 (không phải là ...).',
              examples: [
                { korean: '저는 중국 사람이 아닙니다.', vietnamese: 'Tôi không phải người Trung Quốc.', note: 'Phủ định quốc tịch' },
                { korean: '여기는 사무실이 아닙니다.', vietnamese: 'Đây không phải là văn phòng.', note: 'Phủ định địa điểm' }
              ]
            }
          ]
        },
        lesson3: {
          title: 'Bài 03: Sinh hoạt hằng ngày (일상생활)',
          grammar: [
            {
              rule: '-ㅂ/습니다',
              description: 'Cấu trúc: (gốc V/A) + ㅂ니다/습니다. Đuôi trần thuật trang trọng dùng trong thông báo, phát biểu, hội nghị.',
              examples: [
                { korean: '저는 매일 한국어를 공부합니다.', vietnamese: 'Tôi học tiếng Hàn mỗi ngày.', note: 'Trình bày thói quen' },
                { korean: '이 식당은 매우 맛있습니다.', vietnamese: 'Nhà hàng này rất ngon.', note: 'Miêu tả tính chất' },
                { korean: '지금 회의가 시작됩니다.', vietnamese: 'Cuộc họp bắt đầu ngay bây giờ.', note: 'Thông báo sự kiện' }
              ]
            },
            {
              rule: '-ㅂ/습니까?',
              description: 'Cấu trúc: (gốc V/A) + ㅂ니까/습니까? Đuôi nghi vấn trang trọng dùng khi phỏng vấn, hỏi khách hàng, phát thanh.',
              examples: [
                { korean: '어디에서 오셨습니까?', vietnamese: 'Anh/chị đến từ đâu?', note: 'Hỏi xuất xứ' },
                { korean: '점심을 드셨습니까?', vietnamese: 'Anh/chị đã ăn trưa chưa?', note: 'Hỏi trạng thái hoàn thành' },
                { korean: '가격이 얼마입니까?', vietnamese: 'Giá bao nhiêu?', note: 'Hỏi giá' }
              ]
            },
            {
              rule: '을/를',
              description: 'Tiểu từ tân ngữ. Gắn sau danh từ chịu tác động của động từ.',
              examples: [
                { korean: '책을 읽습니다.', vietnamese: 'Đọc sách.', note: 'Tân ngữ trực tiếp' },
                { korean: '커피를 마십니다.', vietnamese: 'Uống cà phê.', note: 'Tân ngữ đồ uống' },
                { korean: '한국어를 배웁니다.', vietnamese: 'Học tiếng Hàn.', note: 'Tân ngữ ngôn ngữ' }
              ]
            },
            {
              rule: '에서',
              description: 'Tiểu từ chỉ nơi xảy ra hành động: N + 에서 + V.',
              examples: [
                { korean: '집에서 쉬어요.', vietnamese: 'Nghỉ ở nhà.', note: 'Hành động tại địa điểm' },
                { korean: '학교에서 친구를 만났어요.', vietnamese: 'Gặp bạn ở trường.', note: 'Gặp gỡ' },
                { korean: '카페에서 공부했어요.', vietnamese: 'Học tại quán cà phê.', note: 'Học tập' }
              ]
            }
          ]
        },
        lesson4: {
          title: 'Bài 04: Ngày tháng & Thứ (날짜와 요일)',
          grammar: [
            {
              rule: '한자어 수사',
              description: 'Số đếm Hán Hàn – dùng khi nói ngày, tháng, năm, phút, giây, tiền tệ, nhiệt độ, số điện thoại.',
              examples: [
                { korean: '3월 5일입니다.', vietnamese: 'Ngày 5 tháng 3.', note: 'Ngày tháng' },
                { korean: '십오 분이에요.', vietnamese: '15 phút.', note: 'Phút' },
                { korean: '010-1234-5678입니다.', vietnamese: 'Là số 010-1234-5678.', note: 'Số điện thoại' }
              ]
            },
            {
              rule: '와/과',
              description: 'Liên từ "và" nối danh từ; dùng "와" sau nguyên âm, "과" sau phụ âm.',
              examples: [
                { korean: '사과와 바나나를 샀습니다.', vietnamese: 'Đã mua táo và chuối.', note: 'Sau nguyên âm' },
                { korean: '빵과 우유를 먹었습니다.', vietnamese: 'Đã ăn bánh và sữa.', note: 'Sau phụ âm' }
              ]
            },
            {
              rule: '에 (thời gian)',
              description: 'Tiểu từ chỉ thời điểm "vào, lúc". Không dùng với từ chỉ thời gian đặc biệt như 오늘, 내일, 지금.',
              examples: [
                { korean: '8시에 수업이 시작합니다.', vietnamese: 'Lớp học bắt đầu lúc 8 giờ.', note: 'Chỉ giờ' },
                { korean: '월요일에 만나요.', vietnamese: 'Gặp nhau vào thứ hai.', note: 'Chỉ ngày trong tuần' },
                { korean: '2000년에 태어났어요.', vietnamese: 'Sinh năm 2000.', note: 'Chỉ năm' }
              ]
            }
          ]
        },
        lesson5: {
          title: 'Bài 05: Công việc hằng ngày (하루 일과)',
          grammar: [
            {
              rule: '고유어 수사',
              description: 'Số đếm thuần Hàn – dùng cho giờ (thời gian), tuổi, số lượng đồ vật (dưới 100) cùng đơn vị đếm thuần.',
              examples: [
                { korean: '세 시입니다.', vietnamese: 'Ba giờ.', note: 'Giờ đồng hồ' },
                { korean: '한 살이에요.', vietnamese: 'Một tuổi.', note: 'Tuổi' },
                { korean: '컵 세 개를 샀어요.', vietnamese: 'Mua ba cái cốc.', note: 'Số lượng đồ vật' }
              ]
            },
            {
              rule: '에 (thời gian)',
              description: 'Tiểu từ "에" chỉ thời điểm diễn ra hành động.',
              examples: [
                { korean: '아침에 일어나요.', vietnamese: 'Thức dậy vào buổi sáng.', note: 'Thời điểm trong ngày' },
                { korean: '밤 11시에 자요.', vietnamese: 'Ngủ lúc 11 giờ đêm.', note: 'Giờ cụ thể' }
              ]
            },
            {
              rule: '에서 (địa điểm)',
              description: 'Tiểu từ "에서" chỉ địa điểm diễn ra hành động.',
              examples: [
                { korean: '회사에서 일해요.', vietnamese: 'Làm việc ở công ty.', note: 'Công việc' },
                { korean: '도서관에서 책을 읽어요.', vietnamese: 'Đọc sách ở thư viện.', note: 'Đọc' }
              ]
            },
            {
              rule: '-아/어요',
              description: 'Đuôi câu thân mật-lịch sự. Gắn sau gốc động/tính từ để diễn tả hiện tại hoặc tương lai gần.',
              examples: [
                { korean: '영화를 봐요.', vietnamese: 'Xem phim.', note: 'Hành động thường ngày' },
                { korean: '맛있어요.', vietnamese: 'Ngon.', note: 'Miêu tả tính chất' },
                { korean: '같이 갈까요?', vietnamese: 'Cùng đi nhé?', note: 'Dạng nghi vấn nhẹ nhàng' }
              ]
            }
          ]
        },
        lesson6: {
          title: 'Bài 06: Cuối tuần (주말)',
          grammar: [
            { rule: '-았/었-', description: 'Đuôi quá khứ, diễn tả hành động đã xảy ra', examples: [
              { korean: '먹었어요.', vietnamese: 'Tôi đã ăn.', note: 'Diễn tả quá khứ' },
              { korean: '어제 친구를 만났어요.', vietnamese: 'Hôm qua tôi đã gặp bạn.', note: 'Sự kiện trong quá khứ' }
            ] },
            { rule: '하고', description: 'Liên từ "và", "cùng với". Dùng để nối hai danh từ, thường dùng trong văn nói.', examples: [
              { korean: '친구하고 영화를 봤어요.', vietnamese: 'Tôi đã xem phim cùng với bạn.', note: 'Hành động cùng người khác' },
              { korean: '빵하고 우유를 먹었어요.', vietnamese: 'Tôi đã ăn bánh mì và sữa.', note: 'Liệt kê các danh từ' }
            ] },
            { rule: '-(으)시다', description: 'Yếu tố kính ngữ, gắn vào sau gốc động từ/tính từ để thể hiện sự tôn trọng với chủ ngữ.', examples: [
              { korean: '선생님께서 오십니다.', vietnamese: 'Thầy giáo đến ạ.', note: 'Kính ngữ chủ ngữ' },
              { korean: '아버지는 신문을 읽으세요.', vietnamese: 'Bố đang đọc báo ạ.', note: 'Kính ngữ trong gia đình' }
            ] }
          ]
        },
        lesson7: {
          title: 'Bài 07: Mua sắm (1) (물건 사기 (1))',
          grammar: [
            { rule: '와/과', description: 'Liên từ "và", "với". Dùng để nối hai danh từ. 와 đi sau nguyên âm, 과 đi sau phụ âm. Trang trọng hơn 하고.', examples: [
              { korean: '가방과 모자를 샀어요.', vietnamese: 'Tôi đã mua cặp và mũ.', note: 'Nối danh từ (phụ âm)' }
            ] },
            { rule: '-고 싶다', description: 'Cấu trúc V + -고 싶다. Ý nghĩa "muốn...", diễn tả mong muốn, hy vọng của người nói.', examples: [
              { korean: '한국에 가고 싶어요.', vietnamese: 'Tôi muốn đi Hàn Quốc.', note: 'Diễn tả mong muốn' },
              { korean: '이 옷을 입어 보고 싶어요.', vietnamese: 'Tôi muốn mặc thử cái áo này.', note: 'Mong muốn thử làm gì đó' }
            ] },
            { rule: '-(으)로', description: 'Tiểu từ chỉ phương hướng "về phía...", hoặc phương tiện/cách thức "bằng...".', examples: [
              { korean: '버스로 갑니다.', vietnamese: 'Đi bằng xe buýt.', note: 'Chỉ phương tiện' },
              { korean: '오른쪽으로 가세요.', vietnamese: 'Hãy đi về phía bên phải.', note: 'Chỉ phương hướng' }
            ] },
            { rule: '에게', description: 'Tiểu từ chỉ đối tượng tiếp nhận hành động, có nghĩa là "cho...". Thường dùng với người hoặc động vật. (한테 là dạng thân mật hơn).', examples: [
              { korean: '친구에게 선물을 줬어요.', vietnamese: 'Tôi đã tặng quà cho bạn.', note: 'Chỉ người nhận' },
              { korean: '동생에게 전화했어요.', vietnamese: 'Tôi đã gọi điện cho em.', note: 'Đối tượng của hành động' }
            ] }
          ]
        },
        lesson8: {
          title: 'Bài 08: Đồ ăn (음식)',
          grammar: [
            { rule: '-(으)ㄹ래요?', description: 'Đuôi câu hỏi ý định một cách thân mật, "có muốn... không?", "nhé?". Chỉ dùng với bạn bè hoặc người nhỏ hơn.', examples: [
              { korean: '같이 영화 볼래요?', vietnamese: 'Cùng nhau xem phim nhé?', note: 'Hỏi ý định, rủ rê' },
              { korean: '저는 비빔밥을 먹을래요.', vietnamese: 'Tôi sẽ ăn bibimbap.', note: 'Thể hiện ý chí của người nói' }
            ] },
            { rule: '-지 않다', description: 'Dạng phủ định dài của động từ/tính từ, có nghĩa là "không...". Gắn sau gốc động từ/tính từ.', examples: [
              { korean: '오늘은 춥지 않아요.', vietnamese: 'Hôm nay trời không lạnh.', note: 'Phủ định của tính từ' },
              { korean: '저는 김치를 먹지 않아요.', vietnamese: 'Tôi không ăn kim chi.', note: 'Phủ định của động từ' }
            ] },
            { rule: '-(으)세요', description: 'Đuôi câu mệnh lệnh hoặc yêu cầu một cách lịch sự, có nghĩa là "hãy...", "mời...".', examples: [
              { korean: '여기에 앉으세요.', vietnamese: 'Mời ngồi ở đây.', note: 'Mệnh lệnh lịch sự' },
              { korean: '책을 읽으세요.', vietnamese: 'Hãy đọc sách đi.', note: 'Yêu cầu' }
            ] }
          ]
        },
        lesson9: {
          title: 'Bài 09: Nhà cửa (집)',
          grammar: [
            { rule: '-(으)로 (phương hướng)', description: 'Tiểu từ chỉ phương hướng di chuyển, có nghĩa là "về phía...".', examples: [
              { korean: '왼쪽으로 가세요.', vietnamese: 'Hãy đi về phía bên trái.', note: 'Chỉ hướng đi' },
              { korean: '위로 올라가세요.', vietnamese: 'Hãy đi lên trên.', note: 'Chỉ hướng lên' }
            ] },
            { rule: '-(으)ㅂ시다', description: 'Đuôi câu đề nghị, rủ rê cùng làm gì đó, có nghĩa là "chúng ta hãy cùng...". Dạng trang trọng.', examples: [
              { korean: '같이 공부합시다.', vietnamese: 'Chúng ta hãy cùng học nào.', note: 'Đề nghị trang trọng' },
              { korean: '영화를 봅시다.', vietnamese: 'Chúng ta cùng xem phim đi.', note: 'Rủ rê' }
            ] },
            { rule: '도', description: 'Tiểu từ có nghĩa là "cũng", "kể cả". Đứng sau danh từ để thể hiện sự tương đồng hoặc bao gồm.', examples: [
              { korean: '저도 학생입니다.', vietnamese: 'Tôi cũng là học sinh.', note: 'Chỉ sự tương đồng' },
              { korean: '비가 와요. 바람도 불어요.', vietnamese: 'Trời mưa. Gió cũng thổi nữa.', note: 'Bổ sung thêm thông tin' }
            ] }
          ]
        },
        lesson10: {
          title: 'Bài 10: Gia đình (가족)',
          grammar: [
            { rule: '께서', description: 'Dạng kính ngữ của tiểu từ chủ ngữ 이/가. Dùng khi chủ ngữ là người cần được tôn trọng.', examples: [
              { korean: '선생님께서 말씀하십니다.', vietnamese: 'Thầy giáo đang nói ạ.', note: 'Kính ngữ cho giáo viên' },
              { korean: '할머니께서 오셨어요.', vietnamese: 'Bà đã đến ạ.', note: 'Kính ngữ cho người lớn tuổi' }
            ] },
            { rule: '-(으)시-', description: 'Yếu tố kính ngữ được chèn vào giữa gốc động từ/tính từ và đuôi câu để thể hiện sự tôn trọng chủ ngữ.', examples: [
              { korean: '사장님은 지금 주무십니다.', vietnamese: 'Giám đốc bây giờ đang ngủ ạ.', note: 'Kính ngữ động từ (자다 -> 주무시다)' },
              { korean: '부모님께서는 한국에 가십니다.', vietnamese: 'Bố mẹ đi Hàn Quốc ạ.', note: 'Kính ngữ động từ (가다 -> 가시다)' }
            ] },
            { rule: '의', description: 'Tiểu từ sở hữu, có nghĩa là "của". Nối hai danh từ để chỉ mối quan hệ sở hữu.', examples: [
              { korean: '이것은 저의 책입니다.', vietnamese: 'Đây là sách của tôi.', note: 'Chỉ sở hữu' },
              { korean: '친구의 집은 아주 큽니다.', vietnamese: 'Nhà của bạn tôi rất to.', note: 'Sở hữu của người khác' }
            ] }
          ]
        },
        lesson11: {
          title: 'Bài 11: Thời tiết (날씨)',
          grammar: [
            { rule: '-고', description: 'Liên từ nối hai mệnh đề theo thứ tự thời gian hoặc liệt kê, có nghĩa là "và", "rồi".', examples: [
              { korean: '밥을 먹고 공부해요.', vietnamese: 'Tôi ăn cơm rồi học bài.', note: 'Nối hành động theo thứ tự' },
              { korean: '이 사과는 크고 맛있어요.', vietnamese: 'Quả táo này vừa to vừa ngon.', note: 'Liệt kê tính chất' }
            ] },
            { rule: '부터 ~ 까지', description: 'Cấu trúc chỉ khoảng thời gian hoặc không gian, có nghĩa là "từ ~ đến ~".', examples: [
              { korean: '9시부터 5시까지 일해요.', vietnamese: 'Tôi làm việc từ 9 giờ đến 5 giờ.', note: 'Chỉ khoảng thời gian' },
              { korean: '집에서 학교까지 멀어요.', vietnamese: 'Từ nhà đến trường xa.', note: 'Chỉ khoảng cách' }
            ] },
            { rule: '-(으)ㄹ 거예요', description: 'Đuôi câu thể hiện sự phỏng đoán hoặc một kế hoạch trong tương lai, có nghĩa là "sẽ...".', examples: [
              { korean: '내일은 비가 올 거예요.', vietnamese: 'Ngày mai chắc trời sẽ mưa.', note: 'Dự đoán tương lai' },
              { korean: '저는 주말에 영화를 볼 거예요.', vietnamese: 'Tôi sẽ xem phim vào cuối tuần.', note: 'Kế hoạch tương lai' }
            ] },
            { rule: 'ㅂ 불규칙', description: 'Bất quy tắc của ㅂ: Khi gốc động từ/tính từ kết thúc bằng ㅂ gặp nguyên âm, ㅂ sẽ biến thành 오/우.', examples: [
              { korean: '덥다 + 어요 → 더워요.', vietnamese: 'Nóng + 어요 → nóng.', note: 'Bất quy tắc ㅂ -> 우' },
              { korean: '돕다 + 아요 → 도와요.', vietnamese: 'Giúp đỡ + 아요 → giúp đỡ.', note: 'Bất quy tắc ㅂ -> 오' }
            ] }
          ]
        },
        lesson12: {
          title: 'Bài 12: Điện thoại (1) (전화 (1))',
          grammar: [
            { rule: '에게/한테', description: 'Tiểu từ chỉ đối tượng tiếp nhận hành động, "cho...". 에게 trang trọng hơn 한테 (văn nói).', examples: [
              { korean: '친구한테 전화했어요.', vietnamese: 'Tôi đã gọi điện cho bạn.', note: 'Dùng trong văn nói' },
              { korean: '선생님께 이메일을 보냈어요.', vietnamese: 'Tôi đã gửi email cho giáo viên.', note: '께 là dạng kính ngữ của 에게' }
            ] },
            { rule: '-지만', description: 'Liên từ nối hai mệnh đề có ý nghĩa trái ngược, tương phản, có nghĩa là "nhưng".', examples: [
              { korean: '한국어는 재미있지만 어려워요.', vietnamese: 'Tiếng Hàn thú vị nhưng khó.', note: 'Nối hai mệnh đề trái nghĩa' },
              { korean: '비가 오지만 날씨가 춥지 않아요.', vietnamese: 'Trời mưa nhưng thời tiết không lạnh.', note: 'Sự tương phản' }
            ] },
            { rule: '-(으)려고 하다', description: 'Cấu trúc thể hiện ý định hoặc kế hoạch sẽ làm gì, có nghĩa là "định...".', examples: [
              { korean: '오후에 도서관에 가려고 해요.', vietnamese: 'Tôi định đi thư viện vào buổi chiều.', note: 'Dự định, kế hoạch' },
              { korean: '김치찌개를 만들려고 해요.', vietnamese: 'Tôi định nấu canh kim chi.', note: 'Ý định' }
            ] }
          ]
        },
        lesson13: {
          title: 'Bài 13: Sinh nhật (생일)',
          grammar: [
            { rule: '-아/어서', description: 'Liên từ chỉ nguyên nhân, kết quả, có nghĩa là "vì... nên...". Mệnh đề sau không dùng dạng mệnh lệnh, rủ rê.', examples: [
              { korean: '배가 아파서 병원에 갔어요.', vietnamese: 'Vì đau bụng nên tôi đã đến bệnh viện.', note: 'Chỉ nguyên nhân' },
              { korean: '늦어서 죄송합니다.', vietnamese: 'Vì đến muộn nên tôi xin lỗi.', note: 'Lý do cho hành động' }
            ] },
            { rule: '-(으)ㄹ까요?', description: 'Đuôi câu dùng để hỏi ý kiến người nghe ("...nhỉ?", "...nhé?") hoặc rủ rê cùng làm gì đó.', examples: [
              { korean: '창문을 닫을까요?', vietnamese: 'Tôi đóng cửa sổ nhé?', note: 'Hỏi ý kiến' },
              { korean: '우리 같이 저녁을 먹을까요?', vietnamese: 'Chúng ta cùng ăn tối nhé?', note: 'Rủ rê' }
            ] },
            { rule: '못', description: 'Phó từ phủ định, đứng trước động từ, có nghĩa là "không thể...". Diễn tả sự thiếu khả năng hoặc có một yếu tố bên ngoài ngăn cản.', examples: [
              { korean: '수영을 못 해요.', vietnamese: 'Tôi không thể bơi.', note: 'Không có khả năng' },
              { korean: '바빠서 친구를 못 만났어요.', vietnamese: 'Vì bận nên tôi đã không thể gặp bạn.', note: 'Do hoàn cảnh' }
            ] }
          ]
        },
        lesson14: {
          title: 'Bài 14: Sở thích (취미)',
          grammar: [
            { rule: '-(으)ㄹ 수 있다/없다', description: 'Cấu trúc diễn tả khả năng, có nghĩa là "có thể / không thể" làm gì đó.', examples: [
              { korean: '저는 한국어를 할 수 있어요.', vietnamese: 'Tôi có thể nói tiếng Hàn.', note: 'Có khả năng' },
              { korean: '오늘은 바빠서 갈 수 없어요.', vietnamese: 'Hôm nay vì bận nên không thể đi được.', note: 'Không có khả năng do hoàn cảnh' }
            ] },
            { rule: '-기 / -는 것', description: 'Cách biến động từ thành danh từ (danh từ hóa). -기 thường dùng trong các cấu trúc cố định, -는 것 phổ biến hơn trong văn nói.', examples: [
              { korean: '제 취미는 영화 보기입니다.', vietnamese: 'Sở thích của tôi là xem phim.', note: 'Danh từ hóa với -기' },
              { korean: '저는 운동하는 것을 좋아해요.', vietnamese: 'Tôi thích việc tập thể dục.', note: 'Danh từ hóa với -는 것' }
            ] },
            { rule: 'ㄷ 불규칙', description: 'Bất quy tắc của ㄷ: Khi gốc động từ kết thúc bằng ㄷ gặp nguyên âm, ㄷ sẽ biến thành ㄹ.', examples: [
              { korean: '듣다 + 어요 → 들어요.', vietnamese: 'Nghe + 어요 → nghe.', note: 'ㄷ → ㄹ' },
              { korean: '걷다 + 었어요 → 걸었어요.', vietnamese: 'Đi bộ + 었어요 → đã đi bộ.', note: 'ㄷ → ㄹ' }
            ] }
          ]
        },
        lesson15: {
          title: 'Bài 15: Giao thông (1) (교통 (1))',
          grammar: [
            { rule: '에서 ~ 까지', description: 'Cấu trúc chỉ điểm bắt đầu và kết thúc của một khoảng không gian, có nghĩa là "từ ~ đến ~".', examples: [
              { korean: '서울에서 부산까지 기차로 갔어요.', vietnamese: 'Tôi đã đi từ Seoul đến Busan bằng tàu hỏa.', note: 'Chỉ điểm đầu và cuối' },
              { korean: '여기서 저기까지 걸어서 10분 걸려요.', vietnamese: 'Từ đây đến kia đi bộ mất 10 phút.', note: 'Chỉ khoảng cách' }
            ] },
            { rule: '-(으)로 (phương tiện)', description: 'Tiểu từ chỉ phương tiện, cách thức thực hiện hành động, có nghĩa là "bằng...".', examples: [
              { korean: '비행기로 제주도에 갔어요.', vietnamese: 'Tôi đã đi đảo Jeju bằng máy bay.', note: 'Chỉ phương tiện giao thông' },
              { korean: '이메일로 서류를 보내주세요.', vietnamese: 'Xin hãy gửi tài liệu bằng email.', note: 'Chỉ cách thức' }
            ] },
            { rule: '-(으)러 가다/오다', description: 'Cấu trúc chỉ mục đích của sự di chuyển, có nghĩa là "đi/đến để...".', examples: [
              { korean: '공부하러 도서관에 갔어요.', vietnamese: 'Tôi đã đến thư viện để học.', note: 'Chỉ mục đích' },
              { korean: '친구를 만나러 시내에 왔어요.', vietnamese: 'Tôi đã đến trung tâm thành phố để gặp bạn.', note: 'Mục đích của việc đến' }
            ] }
          ]
        }
  };

  const sc2Raw = {
      lesson1: {
        title: 'Bài 01: 만남 (Gặp gỡ)',
        grammar: [
          {
            rule: '의',
            description: 'Cấu trúc: N의 N. Ý nghĩa: "của". Tiểu từ sở hữu chỉ mối quan hệ giữa hai danh từ.',
            examples: [
              { korean: '저의 책입니다.', vietnamese: 'Là sách của tôi.', note: 'Sở hữu cá nhân' },
              { korean: '한국의 수도는 서울입니다.', vietnamese: 'Thủ đô của Hàn Quốc là Seoul.', note: 'Sở hữu địa lý' },
              { korean: '친구의 가방이에요.', vietnamese: 'Là cặp sách của bạn tôi.', note: 'Sở hữu người khác' }
            ]
          },
          {
            rule: '-(으)ㄹ 때',
            description: 'Cấu trúc: V/A + -(으)ㄹ 때. Ý nghĩa: "khi...". Dùng để chỉ thời điểm một hành động hoặc trạng thái xảy ra.',
            examples: [
              { korean: '한국에 갈 때 선물을 사겠습니다.', vietnamese: 'Khi đi Hàn Quốc tôi sẽ mua quà.', note: 'Thời điểm tương lai' },
              { korean: '어려울 때 도와주세요.', vietnamese: 'Hãy giúp đỡ khi khó khăn.', note: 'Thời điểm khó khăn' },
              { korean: '학생일 때 한국어를 배웠어요.', vietnamese: 'Khi là học sinh tôi đã học tiếng Hàn.', note: 'Thời điểm trong quá khứ' }
            ]
          },
          {
            rule: '-아/어 주다',
            description: 'Cấu trúc: V + -아/어 주다. Ý nghĩa: "làm gì đó cho ai". Dạng kính ngữ là -아/어 드리다.',
            examples: [
              { korean: '도와주세요.', vietnamese: 'Hãy giúp tôi.', note: 'Yêu cầu giúp đỡ' },
              { korean: '설명해 드리겠습니다.', vietnamese: 'Tôi sẽ giải thích cho anh/chị.', note: 'Kính ngữ' },
              { korean: '문을 열어 줬어요.', vietnamese: 'Tôi đã mở cửa giúp.', note: 'Hành động giúp đỡ' }
            ]
          }
        ]
      },
      lesson2: {
        title: 'Bài 02: 약속 (Hẹn gặp)',
        grammar: [
          {
            rule: '만',
            description: 'Cấu trúc: N + 만. Ý nghĩa: "chỉ". Dùng để xác định giới hạn về số lượng hoặc đối tượng.',
            examples: [
              { korean: '천 원만 있어요.', vietnamese: 'Chỉ có 1000 won.', note: 'Giới hạn số lượng' },
              { korean: '나만 알아요.', vietnamese: 'Chỉ tôi biết.', note: 'Giới hạn người' },
              { korean: '이것만 주세요.', vietnamese: 'Xin hãy đưa cho tôi cái này thôi.', note: 'Giới hạn lựa chọn' }
            ]
          },
          {
            rule: '-(으)니까',
            description: 'Cấu trúc: V/A + -(으)니까. Ý nghĩa: "vì ... nên ...". Dùng để nêu lý do hoặc đưa lời khuyên.',
            examples: [
              { korean: '바쁘니까 못 가요.', vietnamese: 'Vì bận nên không đi được.', note: 'Lý do không thể' },
              { korean: '비가 오니까 우산을 가져가세요.', vietnamese: 'Vì trời mưa nên hãy mang ô.', note: 'Lời khuyên' },
              { korean: '오늘 늦으니까 먼저 시작하세요.', vietnamese: 'Hôm nay muộn rồi nên hãy bắt đầu trước.', note: 'Đưa lời khuyên' }
            ]
          },
          {
            rule: '-지 말다',
            description: 'Cấu trúc: V + -지 말다. Ý nghĩa: "đừng...". Dùng để thể hiện sự cấm đoán.',
            examples: [
              { korean: '여기서 담배 피우지 마세요.', vietnamese: 'Đừng hút thuốc ở đây.', note: 'Cấm hút thuốc' },
              { korean: '늦지 마.', vietnamese: 'Đừng đến muộn.', note: 'Lời nhắc nhở' },
              { korean: '문을 닫지 마세요.', vietnamese: 'Đừng đóng cửa.', note: 'Yêu cầu nhẹ nhàng' }
            ]
          },
          {
            rule: '-아/어도 되다',
            description: 'Cấu trúc: V + -아/어도 되다. Ý nghĩa: "... cũng được". Dùng để cho phép hoặc xin phép.',
            examples: [
              { korean: '사진을 찍어도 돼요?', vietnamese: 'Tôi có thể chụp hình không?', note: 'Xin phép' },
              { korean: '먼저 가도 돼요.', vietnamese: 'Bạn có thể đi trước.', note: 'Cho phép' },
              { korean: '여기 앉아도 돼요?', vietnamese: 'Tôi ngồi đây được không?', note: 'Xin phép' }
            ]
          }
        ]
      },
      lesson3: {
        title: 'Bài 03: 물건 사기 (2) (Mua sắm (2))',
        grammar: [
          {
            rule: '보다',
            description: 'Cấu trúc: A 보다 B. Ý nghĩa: "hơn". Dùng để so sánh mức độ giữa hai đối tượng.',
            examples: [
              { korean: '이것이 저것보다 비싸요.', vietnamese: 'Cái này đắt hơn cái kia.', note: 'So sánh giá cả' },
              { korean: '오늘이 어제보다 더워요.', vietnamese: 'Hôm nay nóng hơn hôm qua.', note: 'So sánh thời tiết' },
              { korean: '저 사람이 나보다 키가 커요.', vietnamese: 'Người kia cao hơn tôi.', note: 'So sánh chiều cao' }
            ]
          },
          {
            rule: '-(으)ㄴ (tính từ)',
            description: 'Cấu trúc: A + -(으)ㄴ N. Ý nghĩa: vĩ tố định từ dùng với tính từ để bổ nghĩa cho danh từ.',
            examples: [
              { korean: '저는 싼 집을 찾고 있어요.', vietnamese: 'Tôi đang tìm một ngôi nhà rẻ.', note: 'Bổ nghĩa cho danh từ' },
              { korean: '예쁜 옷을 사고 싶어요.', vietnamese: 'Tôi muốn mua quần áo đẹp.', note: 'Bổ nghĩa cho danh từ' },
              { korean: '좋은 사람을 만났어요.', vietnamese: 'Tôi đã gặp được người tốt.', note: 'Bổ nghĩa cho danh từ' }
            ]
          },
          {
            rule: '-는 (động từ)',
            description: 'Cấu trúc: V + -는 N. Ý nghĩa: vĩ tố định từ thì hiện tại, dùng với động từ để bổ nghĩa cho danh từ.',
            examples: [
              { korean: '지금 읽는 책이 재미있어요.', vietnamese: 'Cuốn sách tôi đang đọc rất thú vị.', note: 'Hành động đang diễn ra' },
              { korean: '노래하는 사람이 누구예요?', vietnamese: 'Người đang hát là ai vậy?', note: 'Mô tả người' },
              { korean: '제가 사는 곳은 서울이에요.', vietnamese: 'Nơi tôi sống là Seoul.', note: 'Mô tả địa điểm' }
            ]
          }
        ]
      },
      lesson4: {
        title: 'Bài 04: 병원 (Bệnh viện)',
        grammar: [
          {
            rule: '-(으)ㄴ (động từ)',
            description: 'Cấu trúc: V + -(으)ㄴ N. Ý nghĩa: vĩ tố định từ chỉ quá khứ, bổ nghĩa cho danh từ.',
            examples: [
              { korean: '어제 먹은 음식이 뭐예요?', vietnamese: 'Món ăn bạn đã ăn hôm qua là gì?', note: 'Hành động đã kết thúc' },
              { korean: '작년에 한국에 간 친구가 있어요.', vietnamese: 'Tôi có một người bạn đã đi Hàn Quốc năm ngoái.', note: 'Mô tả kinh nghiệm' },
              { korean: '제가 읽은 책이에요.', vietnamese: 'Đây là cuốn sách tôi đã đọc.', note: 'Sự việc trong quá khứ' }
            ]
          },
          {
            rule: '마다',
            description: 'Cấu trúc: N + 마다. Ý nghĩa: "mọi, mỗi". Gắn sau danh từ để chỉ sự lặp lại của một đơn vị.',
            examples: [
              { korean: '날마다 운동해요.', vietnamese: 'Tôi tập thể dục mỗi ngày.', note: 'Chỉ tần suất' },
              { korean: '나라마다 문화가 달라요.', vietnamese: 'Mỗi quốc gia có văn hóa khác nhau.', note: 'Chỉ sự đa dạng' },
              { korean: '사람마다 성격이 달라요.', vietnamese: 'Mỗi người có một tính cách khác nhau.', note: 'Chỉ sự khác biệt cá nhân' }
            ]
          },
          {
            rule: '-아/어야 하다',
            description: 'Cấu trúc: V/A + -아/어야 하다/되다. Ý nghĩa: "phải...". Biểu hiện sự cần thiết hoặc nghĩa vụ.',
            examples: [
              { korean: '약을 먹어야 해요.', vietnamese: 'Phải uống thuốc.', note: 'Sự cần thiết' },
              { korean: '내일 일찍 일어나야 돼요.', vietnamese: 'Ngày mai phải dậy sớm.', note: 'Nghĩa vụ' },
              { korean: '숙제를 다 해야 합니다.', vietnamese: 'Phải làm hết bài tập.', note: 'Yêu cầu' }
            ]
          }
        ]
      },
      lesson5: {
        title: 'Bài 05: 편지 (Thư tín)',
        grammar: [
          {
            rule: '-지 못하다',
            description: 'Cấu trúc: V + -지 못하다. Ý nghĩa: "không thể...". Thể hiện sự không có khả năng thực hiện một hành động.',
            examples: [
              { korean: '바빠서 가지 못해요.', vietnamese: 'Vì bận nên tôi không thể đi.', note: 'Lý do khách quan' },
              { korean: '매운 음식을 먹지 못해요.', vietnamese: 'Tôi không thể ăn đồ cay.', note: 'Thiếu khả năng' },
              { korean: '아직 한국말을 잘하지 못합니다.', vietnamese: 'Tôi vẫn chưa thể nói giỏi tiếng Hàn.', note: 'Trình độ chưa đạt' }
            ]
          },
          {
            rule: '-(으)면',
            description: 'Cấu trúc: V/A + -(으)면. Ý nghĩa: "nếu". Dùng khi giả định một sự việc chưa xảy ra hoặc một điều kiện.',
            examples: [
              { korean: '시간이 있으면 영화를 볼 거예요.', vietnamese: 'Nếu có thời gian tôi sẽ xem phim.', note: 'Điều kiện' },
              { korean: '돈이 많으면 집을 살 거예요.', vietnamese: 'Nếu có nhiều tiền tôi sẽ mua nhà.', note: 'Giả định' },
              { korean: '날씨가 좋으면 놀러 갑시다.', vietnamese: 'Nếu thời tiết đẹp chúng ta hãy đi chơi.', note: 'Đề nghị' }
            ]
          },
          {
            rule: '-(으)ㄹ (động từ)',
            description: 'Cấu trúc: V + -(으)ㄹ N. Ý nghĩa: vĩ tố định từ thì tương lai, bổ nghĩa cho danh từ theo sau.',
            examples: [
              { korean: '내일 먹을 음식을 준비했어요.', vietnamese: 'Tôi đã chuẩn bị đồ ăn cho ngày mai.', note: 'Hành động tương lai' },
              { korean: '제가 살 집이에요.', vietnamese: 'Đây là ngôi nhà tôi sẽ ở.', note: 'Kế hoạch' },
              { korean: '회의 때 발표할 자료입니다.', vietnamese: 'Đây là tài liệu sẽ phát biểu trong cuộc họp.', note: 'Dự định' }
            ]
          }
        ]
      },
      lesson6: {
        title: 'Bài 06: 교통 (2) (Giao thông (2))',
        grammar: [
          {
            rule: '-아/어서',
            description: 'Cấu trúc: V + -아/어서. Ý nghĩa: "rồi". Chỉ quan hệ lần lượt trước sau về mặt thời gian.',
            examples: [
              { korean: '학교에 가서 공부해요.', vietnamese: 'Tôi đến trường rồi học.', note: 'Thứ tự hành động' },
              { korean: '친구를 만나서 영화를 봤어요.', vietnamese: 'Tôi gặp bạn rồi xem phim.', note: 'Hành động liên tiếp' },
              { korean: '집에 와서 바로 잤어요.', vietnamese: 'Tôi về nhà rồi ngủ ngay.', note: 'Hành động nối tiếp' }
            ]
          },
          {
            rule: '-지요?',
            description: 'Cấu trúc: V/A + -지요? (hoặc -죠?). Ý nghĩa: "...đúng không?". Dùng để xác nhận lại thông tin người nói đã biết.',
            examples: [
              { korean: '오늘 날씨가 춥지요?', vietnamese: 'Hôm nay thời tiết lạnh đúng không?', note: 'Xác nhận thông tin chung' },
              { korean: '한국 음식이 맛있지요?', vietnamese: 'Đồ ăn Hàn Quốc ngon phải không?', note: 'Hỏi ý kiến đã biết' },
              { korean: '그 사람 이름이 김민수 씨지요?', vietnamese: 'Người đó tên là Kim Min-su phải không?', note: 'Xác nhận sự thật' }
            ]
          },
          {
            rule: 'Số thứ tự (첫째, 둘째, ... / 제-)',
            description: 'Cấu trúc: Dùng 첫째, 둘째... (thuần Hàn) hoặc 제 + số Hán Hàn để diễn đạt số thứ tự.',
            examples: [
              { korean: '첫째 아들은 의사입니다.', vietnamese: 'Con trai đầu lòng là bác sĩ.', note: 'Số thuần Hàn' },
              { korean: '둘째 딸은 학생이에요.', vietnamese: 'Con gái thứ hai là học sinh.', note: 'Số thuần Hàn' },
              { korean: '지금은 제3과를 공부하고 있어요.', vietnamese: 'Bây giờ đang học bài số 3.', note: 'Số Hán Hàn' }
            ]
          }
        ]
      },
      lesson7: {
        title: 'Bài 07: 전화 (2) (Điện thoại (2))',
        grammar: [
          {
            rule: '-(으)려고',
            description: 'Cấu trúc: V + -(으)려고 하다. Ý nghĩa: "để...", "định...". Chỉ mục đích hoặc ý định của hành động.',
            examples: [
              { korean: '한국에 가려고 한국어를 배워요.', vietnamese: 'Tôi học tiếng Hàn để đi Hàn Quốc.', note: 'Chỉ mục đích' },
              { korean: '친구를 만나려고 시내에 가요.', vietnamese: 'Tôi ra trung tâm thành phố để gặp bạn.', note: 'Ý định' },
              { korean: '살을 빼려고 운동을 시작했어요.', vietnamese: 'Tôi đã bắt đầu tập thể dục để giảm cân.', note: 'Mục tiêu' }
            ]
          },
          {
            rule: '-기 전에',
            description: 'Cấu trúc: V + -기 전에. Ý nghĩa: "Trước khi...". Diễn tả một hành động xảy ra trước một hành động khác.',
            examples: [
              { korean: '자기 전에 책을 읽어요.', vietnamese: 'Tôi đọc sách trước khi ngủ.', note: 'Thói quen' },
              { korean: '식사하기 전에 손을 씻으세요.', vietnamese: 'Hãy rửa tay trước khi ăn.', note: 'Lời khuyên' },
              { korean: '한국에 오기 전에 뭘 했어요?', vietnamese: 'Bạn đã làm gì trước khi đến Hàn Quốc?', note: 'Hỏi về quá khứ' }
            ]
          },
          {
            rule: '-(으)ㄹ게요',
            description: 'Cấu trúc: V + -(으)ㄹ게요. Ý nghĩa: "sẽ...". Thể hiện ý chí, lời hứa của người nói (ngôi thứ nhất) và có liên quan đến người nghe.',
            examples: [
              { korean: '제가 할게요.', vietnamese: 'Để tôi làm cho.', note: 'Thể hiện ý chí' },
              { korean: '내일 전화할게요.', vietnamese: 'Ngày mai tôi sẽ gọi điện.', note: 'Lời hứa' },
              { korean: '먼저 갈게요.', vietnamese: 'Tôi đi trước nhé.', note: 'Thông báo hành động' }
            ]
          }
        ]
      },
      lesson8: {
        title: 'Bài 08: 영화 (Phim ảnh)',
        grammar: [
          {
            rule: '-겠-',
            description: 'Cấu trúc: V/A + -겠-. Ý nghĩa: "chắc là...". Thể hiện sự phỏng đoán của người nói.',
            examples: [
              { korean: '비가 오겠어요.', vietnamese: 'Chắc là trời sẽ mưa.', note: 'Phỏng đoán thời tiết' },
              { korean: '음식이 맛있겠어요.', vietnamese: 'Món ăn này chắc là ngon lắm.', note: 'Phỏng đoán dựa trên quan sát' },
              { korean: '그 사람은 키가 크겠어요.', vietnamese: 'Người đó chắc là cao lắm.', note: 'Suy đoán' }
            ]
          },
          {
            rule: '-네요',
            description: 'Cấu trúc: V/A + -네요. Ý nghĩa: Đuôi từ cảm thán, thể hiện sự ngạc nhiên hoặc cảm nhận mới của người nói về một sự thật.',
            examples: [
              { korean: '한국말을 잘하시네요.', vietnamese: 'Ồ, bạn nói tiếng Hàn giỏi thật đấy!', note: 'Ngạc nhiên, khen ngợi' },
              { korean: '눈이 오네요.', vietnamese: 'A, tuyết rơi kìa!', note: 'Phát hiện mới' },
              { korean: '이 영화가 정말 재미있네요.', vietnamese: 'Bộ phim này thật sự thú vị ghê.', note: 'Bày tỏ cảm nhận' }
            ]
          },
          {
            rule: '-아/어 보다',
            description: 'Cấu trúc: V + -아/어 보다. Ý nghĩa: "Thử làm gì đó". Diễn tả sự trải nghiệm, kinh nghiệm.',
            examples: [
              { korean: '김치를 먹어 봤어요?', vietnamese: 'Bạn đã ăn thử kim chi chưa?', note: 'Hỏi về kinh nghiệm' },
              { korean: '한복을 입어 보고 싶어요.', vietnamese: 'Tôi muốn mặc thử Hanbok.', note: 'Bày tỏ mong muốn trải nghiệm' },
              { korean: '제주도에 가 보세요. 아주 아름다워요.', vietnamese: 'Hãy thử đến đảo Jeju đi. Rất đẹp đấy.', note: 'Gợi ý, đề xuất' }
            ]
          }
        ]
      },
      lesson9: {
        title: 'Bài 09: 휴일 (Ngày nghỉ)',
        grammar: [
          {
            rule: '(이)나',
            description: 'Cấu trúc: N + (이)나. Ý nghĩa: "hoặc". Chỉ sự lựa chọn một trong hai hoặc nhiều hơn.',
            examples: [
              { korean: '주말에 영화나 볼까요?', vietnamese: 'Cuối tuần chúng ta xem phim hay gì đó nhé?', note: 'Lựa chọn giữa các hoạt động' },
              { korean: '커피나 주스를 주세요.', vietnamese: 'Cho tôi cà phê hoặc nước trái cây.', note: 'Lựa chọn đồ uống' },
              { korean: '버스로나 지하철로나 갈 수 있어요.', vietnamese: 'Có thể đi bằng xe buýt hoặc tàu điện ngầm.', note: 'Lựa chọn phương tiện' }
            ]
          },
          {
            rule: '-(으)면 좋겠다',
            description: 'Cấu trúc: V/A + -(으)면 좋겠다. Ý nghĩa: "nếu... thì tốt", "ước gì...". Thể hiện mong ước của người nói.',
            examples: [
              { korean: '돈이 많았으면 좋겠어요.', vietnamese: 'Ước gì tôi có nhiều tiền.', note: 'Mong ước' },
              { korean: '내일 날씨가 좋으면 좋겠어요.', vietnamese: 'Mong là ngày mai thời tiết sẽ đẹp.', note: 'Hy vọng' },
              { korean: '빨리 방학을 했으면 좋겠다.', vietnamese: 'Ước gì được nghỉ hè nhanh.', note: 'Mong muốn' }
            ]
          },
          {
            rule: '-기 위해서',
            description: 'Cấu trúc: V + -기 위해서. Ý nghĩa: "để...", "vì...". Chỉ mục đích của hành động.',
            examples: [
              { korean: '건강을 지키기 위해서 매일 운동해요.', vietnamese: 'Tôi tập thể dục mỗi ngày để giữ gìn sức khỏe.', note: 'Mục đích hành động' },
              { korean: '한국에서 공부하기 위해서 왔어요.', vietnamese: 'Tôi đến đây để học tập tại Hàn Quốc.', note: 'Lý do' },
              { korean: '좋은 대학에 가기 위해서 열심히 공부해야 해요.', vietnamese: 'Phải học chăm chỉ để vào được trường đại học tốt.', note: 'Mục tiêu' }
            ]
          }
        ]
      },
      lesson10: {
        title: 'Bài 10: 외모 (Ngoại hình)',
        grammar: [
          {
            rule: '-아/어지다',
            description: 'Cấu trúc: A + -아/어지다. Ý nghĩa: "trở nên...". Gắn sau tính từ để chỉ sự thay đổi trạng thái.',
            examples: [
              { korean: '날씨가 따뜻해졌어요.', vietnamese: 'Thời tiết đã trở nên ấm áp.', note: 'Thay đổi trạng thái' },
              { korean: '운동을 해서 건강해졌어요.', vietnamese: 'Nhờ tập thể dục nên tôi đã trở nên khỏe mạnh hơn.', note: 'Kết quả của hành động' },
              { korean: '점점 예뻐져요.', vietnamese: 'Ngày càng trở nên xinh đẹp.', note: 'Quá trình thay đổi' }
            ]
          },
          {
            rule: '-기 때문에',
            description: 'Cấu trúc: V/A + -기 때문에. Ý nghĩa: "vì...nên...". Chỉ lý do, nguyên nhân.',
            examples: [
              { korean: '비가 오기 때문에 집에 있었어요.', vietnamese: 'Vì trời mưa nên tôi đã ở nhà.', note: 'Nguyên nhân' },
              { korean: '시험이 있기 때문에 도서관에 가요.', vietnamese: 'Vì có kỳ thi nên tôi đến thư viện.', note: 'Lý do' },
              { korean: '그 사람은 착하기 때문에 친구가 많아요.', vietnamese: 'Vì người đó tốt bụng nên có nhiều bạn.', note: 'Lý do' }
            ]
          },
          {
            rule: '르 불규칙 (Bất quy tắc 르)',
            description: 'Khi một số động từ/tính từ kết thúc bằng ‘르’ gặp nguyên âm (아/어), thì ‘ㅡ’ sẽ bị lược bỏ, và một phụ âm ‘ㄹ’ được thêm vào âm tiết phía trước.',
            examples: [
              { korean: '노래를 불러요. (부르다)', vietnamese: 'Tôi hát một bài hát.', note: '르 + 어요 -> ㄹ러요' },
              { korean: '잘 몰라요. (모르다)', vietnamese: 'Tôi không biết rõ.', note: '르 + 아요 -> ㄹ라요' },
              { korean: '배가 불러요. (부르다)', vietnamese: 'Tôi no rồi.', note: '르 + 어요 -> ㄹ러요' }
            ]
          }
        ]
      },
      lesson11: {
        title: 'Bài 11: 여행 (Du lịch)',
        grammar: [
          {
            rule: '-거나',
            description: 'Cấu trúc: V/A + -거나. Ý nghĩa: "hoặc là". Nối hai động từ hoặc tính từ, thể hiện sự lựa chọn.',
            examples: [
              { korean: '주말에 청소를 하거나 빨래를 해요.', vietnamese: 'Cuối tuần tôi dọn dẹp hoặc giặt giũ.', note: 'Lựa chọn hành động' },
              { korean: '심심할 때 책을 읽거나 영화를 봐요.', vietnamese: 'Khi buồn chán, tôi đọc sách hoặc xem phim.', note: 'Lựa chọn hoạt động' },
              { korean: '맵거나 짠 음식을 좋아하지 않아요.', vietnamese: 'Tôi không thích đồ ăn cay hoặc mặn.', note: 'Lựa chọn tính chất' }
            ]
          },
          {
            rule: '-고 있다',
            description: 'Cấu trúc: V + -고 있다. Ý nghĩa: "đang...". Diễn tả hành động đang diễn ra (thì hiện tại tiếp diễn).',
            examples: [
              { korean: '지금 음악을 듣고 있어요.', vietnamese: 'Bây giờ tôi đang nghe nhạc.', note: 'Hành động đang xảy ra' },
              { korean: '민수 씨는 자고 있어요.', vietnamese: 'Min-su đang ngủ.', note: 'Trạng thái tiếp diễn' },
              { korean: '무엇을 하고 있어요?', vietnamese: 'Bạn đang làm gì vậy?', note: 'Câu hỏi về hành động hiện tại' }
            ]
          },
          {
            rule: '-(으)ㄴ 적이 있다/없다',
            description: 'Cấu trúc: V + -(으)ㄴ 적이 있다/없다. Ý nghĩa: "đã từng / chưa từng...". Dùng để nói về kinh nghiệm trong quá khứ.',
            examples: [
              { korean: '한국에 가 본 적이 있어요.', vietnamese: 'Tôi đã từng thử đi Hàn Quốc.', note: 'Kinh nghiệm đã có' },
              { korean: '그런 말을 들은 적이 없어요.', vietnamese: 'Tôi chưa từng nghe nói điều đó.', note: 'Chưa có kinh nghiệm' },
              { korean: '김치를 만들어 본 적이 있어요?', vietnamese: 'Bạn đã từng thử làm kim chi chưa?', note: 'Hỏi về kinh nghiệm' }
            ]
          }
        ]
      },
      lesson12: {
        title: 'Bài 12: 공공장소 (Nơi công cộng)',
        grammar: [
          {
            rule: '-(으)면서',
            description: 'Cấu trúc: V + -(으)면서. Ý nghĩa: "vừa...vừa...". Diễn tả hai hành động xảy ra đồng thời.',
            examples: [
              { korean: '음악을 들으면서 공부해요.', vietnamese: 'Tôi vừa nghe nhạc vừa học bài.', note: 'Hành động đồng thời' },
              { korean: '커피를 마시면서 신문을 읽어요.', vietnamese: 'Tôi vừa uống cà phê vừa đọc báo.', note: 'Hai hành động cùng lúc' },
              { korean: '운전하면서 전화하면 안 돼요.', vietnamese: 'Không được vừa lái xe vừa nghe điện thoại.', note: 'Hành động bị cấm' }
            ]
          },
          {
            rule: '-요',
            description: 'Cấu trúc: N + -(이)요. Ý nghĩa: Đuôi câu thân mật, lịch sự. Dùng để kết thúc câu một cách nhẹ nhàng hoặc trả lời câu hỏi.',
            examples: [
              { korean: 'A: 이름이 뭐예요? B: 김민수요.', vietnamese: 'A: Tên bạn là gì? B: Là Kim Min-su ạ.', note: 'Trả lời câu hỏi' },
              { korean: 'A: 뭘 드릴까요? B: 커피요.', vietnamese: 'A: Tôi lấy cho bạn gì ạ? B: Cà phê ạ.', note: 'Yêu cầu' },
              { korean: '저는 학생이요, 이분은 선생님이세요.', vietnamese: 'Tôi là học sinh, còn vị này là giáo viên ạ.', note: 'Giới thiệu' }
            ]
          },
          {
            rule: '-(으)면 안 되다',
            description: 'Cấu trúc: V + -(으)면 안 되다. Ý nghĩa: "không được làm gì đó". Thể hiện sự cấm đoán.',
            examples: [
              { korean: '여기에서 담배를 피우면 안 돼요.', vietnamese: 'Không được hút thuốc ở đây.', note: 'Cấm đoán' },
              { korean: '박물관에서 사진을 찍으면 안 됩니다.', vietnamese: 'Không được chụp ảnh trong bảo tàng.', note: 'Quy định' },
              { korean: '수업 시간에 떠들면 안 돼요.', vietnamese: 'Không được làm ồn trong giờ học.', note: 'Nội quy' }
            ]
          }
        ]
      },
      lesson13: {
        title: 'Bài 13: 도시 (Đô thị)',
        grammar: [
          {
            rule: '(이)나',
            description: 'Cấu trúc: N + (이)나. Ý nghĩa: "những", "đến tận". Dùng để nhấn mạnh số lượng nhiều hơn mong đợi.',
            examples: [
              { korean: '어제 책을 다섯 권이나 읽었어요.', vietnamese: 'Hôm qua tôi đã đọc đến tận 5 cuốn sách.', note: 'Nhấn mạnh số lượng' },
              { korean: '맥주를 열 병이나 마셨어요.', vietnamese: 'Tôi đã uống tới 10 chai bia.', note: 'Nhiều hơn dự kiến' },
              { korean: '친구가 30분이나 늦었어요.', vietnamese: 'Bạn tôi đã muộn đến 30 phút.', note: 'Nhấn mạnh thời gian' }
            ]
          },
          {
            rule: '-(으)ㅂ시다',
            description: 'Cấu trúc: V + -(으)ㅂ시다. Ý nghĩa: "chúng ta hãy cùng...". Đuôi câu rủ rê, đề nghị cùng làm gì đó một cách trang trọng.',
            examples: [
              { korean: '같이 갑시다.', vietnamese: 'Chúng ta cùng đi nào.', note: 'Đề nghị trang trọng' },
              { korean: '한국어를 열심히 공부합시다.', vietnamese: 'Chúng ta hãy cùng học tiếng Hàn chăm chỉ.', note: 'Khích lệ' },
              { korean: '이제 시작합시다.', vietnamese: 'Bây giờ chúng ta hãy bắt đầu.', note: 'Kêu gọi hành động' }
            ]
          },
          {
            rule: 'ㅎ 불규칙 (Bất quy tắc ㅎ)',
            description: 'Khi một số tính từ có gốc kết thúc bằng ‘ㅎ’ gặp nguyên âm (으), thì ‘ㅎ’ và ‘으’ đều bị lược bỏ.',
            examples: [
              { korean: '얼굴이 하얘요. (하얗다)', vietnamese: 'Mặt trắng.', note: 'ㅎ + 아/어 -> 얘/애' },
              { korean: '날씨가 어때요? (어떻다)', vietnamese: 'Thời tiết thế nào?', note: 'ㅎ + 어요 -> 때요' },
              { korean: '그렇군요. (그렇다)', vietnamese: 'Thì ra là vậy.', note: 'ㅎ + 군요 -> 쿠뇨' }
            ]
          }
        ]
      },
      lesson14: {
        title: 'Bài 14: 계획 (Kế hoạch)',
        grammar: [
          {
            rule: '-(으)ㄴ지',
            description: 'Cấu trúc: V + -(으)ㄴ지 + thời gian + 되다. Ý nghĩa: Diễn tả khoảng thời gian đã trôi qua kể từ khi một hành động xảy ra.',
            examples: [
              { korean: '한국에 온 지 1년이 되었어요.', vietnamese: 'Tôi đến Hàn Quốc đã được 1 năm rồi.', note: 'Khoảng thời gian' },
              { korean: '이 회사에서 일한 지 3개월 됐어요.', vietnamese: 'Tôi làm việc ở công ty này đã được 3 tháng rồi.', note: 'Thời gian làm việc' },
              { korean: '그 사람을 만난 지 얼마나 됐어요?', vietnamese: 'Bạn gặp người đó được bao lâu rồi?', note: 'Hỏi về khoảng thời gian' }
            ]
          },
          {
            rule: '-는 동안',
            description: 'Cấu trúc: V + -는 동안. Ý nghĩa: "trong khi...". Diễn tả khoảng thời gian mà một hành động nào đó đang diễn ra.',
            examples: [
              { korean: '여행하는 동안 사진을 많이 찍었어요.', vietnamese: 'Tôi đã chụp nhiều ảnh trong khi đi du lịch.', note: 'Trong suốt một khoảng thời gian' },
              { korean: '제가 없는 동안 무슨 일 있었어요?', vietnamese: 'Có chuyện gì xảy ra trong khi tôi vắng mặt không?', note: 'Khoảng thời gian vắng mặt' },
              { korean: '기다리는 동안 책을 읽으세요.', vietnamese: 'Hãy đọc sách trong khi chờ đợi.', note: 'Lời khuyên' }
            ]
          },
          {
            rule: '-기로 하다',
            description: 'Cấu trúc: V + -기로 하다. Ý nghĩa: "quyết định làm gì đó". Thể hiện một quyết định, kế hoạch.',
            examples: [
              { korean: '내일부터 운동하기로 했어요.', vietnamese: 'Tôi đã quyết định sẽ tập thể dục từ ngày mai.', note: 'Quyết định' },
              { korean: '우리는 주말에 만나기로 했어요.', vietnamese: 'Chúng tôi đã quyết định sẽ gặp nhau vào cuối tuần.', note: 'Kế hoạch chung' },
              { korean: '담배를 끊기로 했어요.', vietnamese: 'Tôi đã quyết định bỏ thuốc lá.', note: 'Sự quyết tâm' }
            ]
          }
        ]
      },
      lesson15: {
        title: 'Bài 15: 한국 생활 (Cuộc sống tại Hàn Quốc)',
        grammar: [
          {
            rule: '에게서 / 한테서',
            description: 'Cấu trúc: N(người) + 에게서/한테서. Ý nghĩa: "từ (ai đó)". Chỉ điểm xuất phát của hành động. 에게서 trang trọng hơn 한테서.',
            examples: [
              { korean: '친구한테서 선물을 받았어요.', vietnamese: 'Tôi đã nhận được quà từ bạn.', note: 'Nguồn gốc (thân mật)' },
              { korean: '선생님에게서 칭찬을 들었어요.', vietnamese: 'Tôi đã nhận được lời khen từ giáo viên.', note: 'Nguồn gốc (trang trọng)' },
              { korean: '누구한테서 그 이야기를 들었어요?', vietnamese: 'Bạn đã nghe chuyện đó từ ai vậy?', note: 'Hỏi về nguồn gốc' }
            ]
          },
          {
            rule: '-(으)ㄴ/는/을 것 같다',
            description: 'Cấu trúc: V/A + -(으)ㄴ/는/을 것 같다. Ý nghĩa: "hình như...", "có vẻ như...". Diễn tả sự phỏng đoán một cách mềm mại.',
            examples: [
              { korean: '밖에 비가 오는 것 같아요.', vietnamese: 'Hình như ngoài trời đang mưa.', note: 'Phỏng đoán hiện tại (V)' },
              { korean: '이 옷은 좀 작은 것 같아요.', vietnamese: 'Cái áo này có vẻ hơi nhỏ.', note: 'Phỏng đoán hiện tại (A)' },
              { korean: '내일은 날씨가 좋을 것 같아요.', vietnamese: 'Có vẻ như ngày mai thời tiết sẽ tốt.', note: 'Phỏng đoán tương lai' }
            ]
          },
          {
            rule: 'ㅅ 불규칙 (Bất quy tắc ㅅ)',
            description: 'Khi một số động từ/tính từ có gốc kết thúc bằng ‘ㅅ’ gặp nguyên âm, thì ‘ㅅ’ sẽ bị lược bỏ.',
            examples: [
              { korean: '감기가 다 나았어요. (낫다)', vietnamese: 'Cảm đã khỏi hẳn rồi.', note: 'ㅅ + 아요 -> 아요' },
              { korean: '이 선을 그으세요. (긋다)', vietnamese: 'Hãy kẻ đường này.', note: 'ㅅ + 으세요 -> 으세요' },
              { korean: '집을 지어요. (짓다)', vietnamese: 'Tôi xây nhà.', note: 'ㅅ + 어요 -> 어요' }
            ]
          }
        ]
      }
  };
  const sc3Raw = {
    lesson1: {
      title: 'Bài 01: 학교생활 (Sinh hoạt ở trường)',
      grammar: [
        {
          rule: '밖에',
          description: 'Cấu trúc: N + 밖에 + V(phủ định). Ý nghĩa: "Chỉ...", "ngoài ra không còn". Thường đi với câu phủ định để nhấn mạnh giới hạn.',
          examples: [
            { korean: '한국어를 1년밖에 공부하지 않았어요.', vietnamese: 'Chỉ học tiếng Hàn được 1 năm thôi.', note: 'Nhấn mạnh thời gian ngắn' },
            { korean: '돈이 천 원밖에 없어요.', vietnamese: 'Chỉ có 1000 won thôi.', note: 'Số lượng ít' },
            { korean: '이 문제는 저밖에 못 풀어요.', vietnamese: 'Chỉ có tôi mới giải được bài này.', note: 'Duy nhất một người' }
          ]
        },
        {
          rule: '(이)라고 하다',
          description: 'Cấu trúc: N + (이)라고 하다. Ý nghĩa: "Là...", "được gọi là...". Dùng để giới thiệu tên người hoặc sự vật.',
          examples: [
            { korean: '제 이름은 김민수라고 해요.', vietnamese: 'Tên tôi là Kim Min Su.', note: 'Giới thiệu tên' },
            { korean: '이것을 김치라고 해요.', vietnamese: 'Cái này được gọi là kimchi.', note: 'Giới thiệu món ăn' },
            { korean: '여기를 광화문이라고 합니다.', vietnamese: 'Nơi này được gọi là Gwanghwamun.', note: 'Giới thiệu địa danh' }
          ]
        },
        {
          rule: '-게 되다',
          description: 'Cấu trúc: V + 게 되다. Ý nghĩa: "Được, bị, trở nên...". Diễn tả sự thay đổi trạng thái do hoàn cảnh khách quan.',
          examples: [
            { korean: '한국에서 살게 되었어요.', vietnamese: 'Tôi đã đến sống ở Hàn Quốc.', note: 'Thay đổi nơi ở' },
            { korean: '회사를 그만두게 되었습니다.', vietnamese: 'Tôi đã phải nghỉ việc.', note: 'Thay đổi công việc' },
            { korean: '한국어를 잘하게 되었어요.', vietnamese: 'Tôi đã trở nên giỏi tiếng Hàn.', note: 'Tiến bộ kỹ năng' }
          ]
        },
        {
          rule: '-(으)ㄹ 생각이다',
          description: 'Cấu trúc: V + (으)ㄹ 생각이다. Ý nghĩa: "Định", "có ý định...". Diễn tả kế hoạch hoặc ý định.',
          examples: [
            { korean: '내년에 대학원에 갈 생각이에요.', vietnamese: 'Tôi định lên cao học năm sau.', note: 'Kế hoạch học tập' },
            { korean: '이번 주말에 부모님을 뵐 생각입니다.', vietnamese: 'Tôi định thăm bố mẹ cuối tuần này.', note: 'Kế hoạch thăm viếng' },
            { korean: '한국 문화를 더 배울 생각이에요.', vietnamese: 'Tôi định học thêm về văn hóa Hàn Quốc.', note: 'Ý định học tập' }
          ]
        }
      ]
    },
    lesson2: {
      title: 'Bài 02: 대인 관계 (Quan hệ con người)',
      grammar: [
        {
          rule: '-는 길이다',
          description: 'Cấu trúc: V + 는 길이다. Ý nghĩa: "Đang trên đường...". Diễn tả hành động đang trong quá trình thực hiện.',
          examples: [
            { korean: '집에 가는 길에 마트에 들렀어요.', vietnamese: 'Trên đường về nhà đã ghé siêu thị.', note: 'Hành động trên đường' },
            { korean: '학교에 오는 길이에요.', vietnamese: 'Tôi đang trên đường đến trường.', note: 'Đang di chuyển' },
            { korean: '회사에서 돌아오는 길에 친구를 만났어요.', vietnamese: 'Trên đường từ công ty về đã gặp bạn.', note: 'Gặp gỡ bất ngờ' }
          ]
        },
        {
          rule: '-(으)ㄴ 덕분에',
          description: 'Cấu trúc: V/A + (으)ㄴ 덕분에. Ý nghĩa: "Nhờ vào...", "nhờ có...". Dùng khi kết quả là tích cực.',
          examples: [
            { korean: '선생님의 도움 덕분에 합격했어요.', vietnamese: 'Nhờ sự giúp đỡ của thầy mà đậu rồi.', note: 'Kết quả tích cực' },
            { korean: '친구 덕분에 한국어를 빨리 배웠어요.', vietnamese: 'Nhờ bạn mà học tiếng Hàn nhanh.', note: 'Tiến bộ nhờ ai đó' },
            { korean: '운동 덕분에 건강해졌어요.', vietnamese: 'Nhờ tập thể dục mà khỏe mạnh hơn.', note: 'Cải thiện sức khỏe' }
          ]
        },
        {
          rule: '-나요/-(으)ㄴ가요?',
          description: 'Cấu trúc: V/A + 나요/(으)ㄴ가요? Ý nghĩa: Đuôi câu hỏi một cách lịch sự, tôn trọng người nghe.',
          examples: [
            { korean: '괜찮은가요?', vietnamese: 'Có ổn không ạ?', note: 'Hỏi tình trạng lịch sự' },
            { korean: '어떻게 생각하시나요?', vietnamese: 'Anh/chị nghĩ thế nào ạ?', note: 'Hỏi ý kiến' },
            { korean: '시간이 있으신가요?', vietnamese: 'Anh/chị có thời gian không ạ?', note: 'Hỏi về thời gian' }
          ]
        }
      ]
    },
    lesson3: {
      title: 'Bài 03: 건강 (Sức khỏe)',
      grammar: [
        {
          rule: '-는 게 좋다',
          description: 'Cấu trúc: V + 는 게 좋다. Ý nghĩa: "Làm gì... thì tốt". Dùng để đưa ra lời khuyên.',
          examples: [
            { korean: '매일 운동하는 게 좋아요.', vietnamese: 'Tập thể dục hàng ngày thì tốt.', note: 'Lời khuyên về sức khỏe' },
            { korean: '일찍 자는 게 좋겠어요.', vietnamese: 'Ngủ sớm thì tốt.', note: 'Khuyên về thói quen' },
            { korean: '병원에 가서 검사받는 게 좋을 것 같아요.', vietnamese: 'Đi bệnh viện khám thì có vẻ tốt.', note: 'Lời khuyên khám bệnh' }
          ]
        },
        {
          rule: '-아/어 보이다',
          description: 'Cấu trúc: A + 아/어 보이다. Ý nghĩa: "Trông có vẻ...". Dùng để phán đoán về ngoại hình, trạng thái.',
          examples: [
            { korean: '피곤해 보여요.', vietnamese: 'Trông có vẻ mệt.', note: 'Quan sát trạng thái' },
            { korean: '건강해 보이네요.', vietnamese: 'Trông có vẻ khỏe mạnh.', note: 'Đánh giá sức khỏe' },
            { korean: '맛있어 보여요.', vietnamese: 'Trông có vẻ ngon.', note: 'Đánh giá về món ăn' }
          ]
        },
        {
          rule: '-(으)ㄴ/는 것 같다',
          description: 'Cấu trúc: V/A + (으)ㄴ/는 것 같다. Ý nghĩa: "Hình như...", "dường như...". Dùng để diễn tả sự suy đoán.',
          examples: [
            { korean: '감기에 걸린 것 같아요.', vietnamese: 'Hình như bị cảm.', note: 'Suy đoán bệnh tình' },
            { korean: '날씨가 좋아질 것 같아요.', vietnamese: 'Thời tiết có vẻ sẽ đẹp.', note: 'Dự đoán thời tiết' },
            { korean: '그 사람이 의사인 것 같아요.', vietnamese: 'Người đó có vẻ là bác sĩ.', note: 'Suy đoán nghề nghiệp' }
          ]
        }
      ]
    },
    lesson4: {
      title: 'Bài 04: 쇼핑 (Mua sắm)',
      grammar: [
        {
          rule: '대신(에)',
          description: 'Cấu trúc: N + 대신(에). Ý nghĩa: "Thay vì...", "thay cho...". Diễn tả sự thay thế.',
          examples: [
            { korean: '버스 대신 지하철을 타요.', vietnamese: 'Thay vì xe buýt thì đi tàu điện ngầm.', note: 'Thay đổi phương tiện' },
            { korean: '고기 대신 야채를 먹어요.', vietnamese: 'Thay vì thịt thì ăn rau.', note: 'Thay đổi thực phẩm' },
            { korean: '선생님 대신 학생이 발표했어요.', vietnamese: 'Thay vì thầy giáo thì học sinh thuyết trình.', note: 'Thay đổi người thực hiện' }
          ]
        },
        {
          rule: '-(으)ㄴ/는 대신(에)',
          description: 'Cấu trúc: V + (으)ㄴ/는 대신(에). Ý nghĩa: "Thay vì làm gì...", cũng có nghĩa là "bù lại...".',
          examples: [
            { korean: '비싼 대신 품질이 좋아요.', vietnamese: 'Thay vì đắt thì chất lượng tốt.', note: 'Đối lập tích cực' },
            { korean: '공부하는 대신 운동했어요.', vietnamese: 'Thay vì học thì đi tập thể dục.', note: 'Thay đổi hoạt động' },
            { korean: '요리하는 대신 주문했어요.', vietnamese: 'Thay vì nấu thì đặt món.', note: 'Thay đổi cách thức' }
          ]
        },
        {
          rule: '-기는 하다',
          description: 'Cấu trúc: V/A + 기는 하다. Ý nghĩa: "...thì cũng có nhưng...". Thể hiện sự đồng tình một phần rồi đưa ra ý kiến khác.',
          examples: [
            { korean: '맛있기는 하지만 너무 비싸요.', vietnamese: 'Ngon thì ngon nhưng quá đắt.', note: 'Đồng ý một phần' },
            { korean: '공부하기는 하지만 열심히 안 해요.', vietnamese: 'Học thì có học nhưng không chăm chỉ.', note: 'Làm nhưng không đủ nỗ lực' },
            { korean: '알기는 알지만 잘 못해요.', vietnamese: 'Biết thì biết nhưng làm không tốt.', note: 'Hiểu biết hạn chế' }
          ]
        }
      ]
    },
    lesson5: {
      title: 'Bài 05: 요리 (Nấu ăn)',
      grammar: [
        {
          rule: '-고 나서',
          description: 'Cấu trúc: V + 고 나서. Ý nghĩa: "Sau khi... rồi thì...". Nhấn mạnh sự hoàn thành của hành động trước.',
          examples: [
            { korean: '숙제를 하고 나서 TV를 봤어요.', vietnamese: 'Sau khi làm bài tập xong thì xem TV.', note: 'Trình tự hành động' },
            { korean: '밥을 먹고 나서 이를 닦아요.', vietnamese: 'Sau khi ăn cơm xong thì đánh răng.', note: 'Thói quen sau ăn' },
            { korean: '회의가 끝나고 나서 집에 갔어요.', vietnamese: 'Sau khi họp xong thì về nhà.', note: 'Kết thúc công việc' }
          ]
        },
        {
          rule: '(으)로',
          description: 'Cấu trúc: N + (으)로. Ý nghĩa: "Bằng...". Chỉ phương tiện, công cụ, nguyên liệu.',
          examples: [
            { korean: '칼로 야채를 썰어요.', vietnamese: 'Dùng dao thái rau.', note: 'Công cụ nấu ăn' },
            { korean: '쌀로 밥을 만들어요.', vietnamese: 'Dùng gạo nấu cơm.', note: 'Nguyên liệu chính' },
            { korean: '기름으로 볶아요.', vietnamese: 'Dùng dầu để xào.', note: 'Phương thức nấu' }
          ]
        },
        {
          rule: '-다가',
          description: 'Cấu trúc: V + 다가. Ý nghĩa: Diễn tả hành động đang diễn ra thì bị xen vào bởi một hành động khác.',
          examples: [
            { korean: '요리하다가 손가락을 베었어요.', vietnamese: 'Đang nấu ăn thì bị đứt tay.', note: 'Tai nạn khi nấu' },
            { korean: 'TV를 보다가 잠들었어요.', vietnamese: 'Đang xem TV thì ngủ thiếp đi.', note: 'Hành động bị gián đoạn' },
            { korean: '걷다가 친구를 만났어요.', vietnamese: 'Đang đi bộ thì gặp bạn.', note: 'Gặp gỡ bất ngờ' }
          ]
        },
        {
          rule: '-게',
          description: 'Cấu trúc: A + 게. Ý nghĩa: Biến tính từ thành trạng từ, có nghĩa "một cách...".',
          examples: [
            { korean: '소금을 짜게 넣었어요.', vietnamese: 'Cho muối mặn quá.', note: 'Mức độ gia vị' },
            { korean: '음식을 맛있게 만들어요.', vietnamese: 'Nấu món ăn ngon.', note: 'Cách thức nấu ăn' },
            { korean: '빨리 끝내게 도와주세요.', vietnamese: 'Hãy giúp để hoàn thành nhanh.', note: 'Yêu cầu hỗ trợ' }
          ]
        }
      ]
    },
    lesson6: {
      title: 'Bài 06: 은행 (Ngân hàng)',
      grammar: [
        {
          rule: '-기 쉽다',
          description: 'Cấu trúc: V + 기 쉽다. Ý nghĩa: "Dễ...". Diễn tả khả năng thực hiện dễ dàng.',
          examples: [
            { korean: '이 ATM은 사용하기 쉬워요.', vietnamese: 'ATM này dễ sử dụng.', note: 'Dễ sử dụng thiết bị' },
            { korean: '비밀번호를 잊어버리기 쉬워요.', vietnamese: 'Dễ quên mật khẩu.', note: 'Khả năng quên' },
            { korean: '이 길은 찾기 쉬워요.', vietnamese: 'Con đường này dễ tìm.', note: 'Dễ định hướng' }
          ]
        },
        {
          rule: '-는 동안',
          description: 'Cấu trúc: V + 는 동안. Ý nghĩa: "Trong khi...", "trong suốt thời gian...". Chỉ thời gian song song.',
          examples: [
            { korean: '기다리는 동안 신문을 읽었어요.', vietnamese: 'Trong khi chờ đã đọc báo.', note: 'Hoạt động song song' },
            { korean: '일하는 동안 음악을 들어요.', vietnamese: 'Trong khi làm việc nghe nhạc.', note: 'Làm việc và giải trí' },
            { korean: '공부하는 동안 전화를 끄세요.', vietnamese: 'Trong khi học hãy tắt điện thoại.', note: 'Tập trung học tập' }
          ]
        },
        {
          rule: '-(으)려면',
          description: 'Cấu trúc: V + (으)려면. Ý nghĩa: "Nếu muốn... thì...". Diễn tả điều kiện để đạt mục đích.',
          examples: [
            { korean: '돈을 찾으려면 카드가 필요해요.', vietnamese: 'Nếu muốn rút tiền thì cần thẻ.', note: 'Điều kiện giao dịch' },
            { korean: '계좌를 만들려면 신분증을 가져오세요.', vietnamese: 'Nếu muốn mở tài khoản thì mang CMND.', note: 'Thủ tục ngân hàng' },
            { korean: '성공하려면 열심히 해야 해요.', vietnamese: 'Nếu muốn thành công thì phải cố gắng.', note: 'Điều kiện thành công' }
          ]
        },
        {
          rule: '-기(가) 무섭게',
          description: 'Cấu trúc: V + 기(가) 무섭게. Ý nghĩa: "Ngay sau khi...". Diễn tả hành động xảy ra liên tiếp.',
          examples: [
            { korean: '월급을 받기가 무섭게 썼어요.', vietnamese: 'Ngay sau khi nhận lương đã tiêu hết.', note: 'Tiêu tiền nhanh' },
            { korean: '문을 열기가 무섭게 들어왔어요.', vietnamese: 'Ngay sau khi mở cửa đã xông vào.', note: 'Hành động tức thì' },
            { korean: '시험이 끝나기가 무섭게 놀러 갔어요.', vietnamese: 'Ngay sau khi thi xong đã đi chơi.', note: 'Giải tỏa sau căng thẳng' }
          ]
        }
      ]
    },
    lesson7: {
      title: 'Bài 07: 성격 (Tính cách)',
      grammar: [
        {
          rule: '처럼',
          description: 'Cấu trúc: N + 처럼. Ý nghĩa: "Giống như...". Dùng để so sánh hoặc ví von.',
          examples: [
            { korean: '아이처럼 순진해요.', vietnamese: 'Ngây thơ như trẻ con.', note: 'So sánh tính cách' },
            { korean: '어머니처럼 친절해요.', vietnamese: 'Tử tế như mẹ.', note: 'Ví von về lòng tốt' },
            { korean: '물처럼 투명한 마음이에요.', vietnamese: 'Có tâm hồn trong suốt như nước.', note: 'Ví von về tính cách' }
          ]
        },
        {
          rule: '-군요/구나',
          description: 'Cấu trúc: V/A + 군요/구나. Ý nghĩa: Đuôi câu cảm thán diễn tả sự nhận ra hoặc ấn tượng.',
          examples: [
            { korean: '정말 착하군요!', vietnamese: 'Thật là tốt bụng!', note: 'Cảm thán về tính cách' },
            { korean: '한국어를 잘하는군요!', vietnamese: 'Giỏi tiếng Hàn thật!', note: 'Ngạc nhiên về khả năng' },
            { korean: '생각보다 어려운 일이군요.', vietnamese: 'Việc này khó hơn tưởng.', note: 'Nhận ra thực tế' }
          ]
        },
        {
          rule: '-(으)ㄴ 편이다',
          description: 'Cấu trúc: A + (으)ㄴ 편이다. Ý nghĩa: "Thuộc loại...", "thuộc dạng...". Diễn tả khuynh hướng.',
          examples: [
            { korean: '조용한 편이에요.', vietnamese: 'Thuộc dạng yên lặng.', note: 'Tính cách nội tâm' },
            { korean: '키가 큰 편입니다.', vietnamese: 'Thuộc dạng cao.', note: 'Ngoại hình' },
            { korean: '성격이 급한 편이에요.', vietnamese: 'Thuộc tính nóng tính.', note: 'Đặc điểm tính cách' }
          ]
        },
        {
          rule: '-는다고요?',
          description: 'Cấu trúc: V + 는다고요? Ý nghĩa: Dùng để hỏi lại, xác nhận điều vừa nghe.',
          examples: [
            { korean: '결혼한다고요?', vietnamese: 'Kết hôn á?', note: 'Xác nhận tin tức' },
            { korean: '이사간다고요?', vietnamese: 'Chuyển nhà á?', note: 'Ngạc nhiên về quyết định' },
            { korean: '그만둔다고요?', vietnamese: 'Nghỉ việc á?', note: 'Xác nhận thông tin' }
          ]
        }
      ]
    },
    lesson8: {
      title: 'Bài 08: 실수 (Sai sót)',
      grammar: [
        {
          rule: '-는 바람에',
          description: 'Cấu trúc: V + 는 바람에. Ý nghĩa: "Vì..." (chỉ nguyên nhân dẫn đến kết quả tiêu cực).',
          examples: [
            { korean: '길이 막히는 바람에 늦었어요.', vietnamese: 'Vì đường tắc nên đến muộn.', note: 'Nguyên nhân giao thông' },
            { korean: '비가 오는 바람에 소풍을 못 갔어요.', vietnamese: 'Vì trời mưa nên không đi dã ngoại được.', note: 'Thời tiết cản trở' },
            { korean: '전화를 받는 바람에 실수했어요.', vietnamese: 'Vì nghe điện thoại nên sai lầm.', note: 'Bị phân tâm' }
          ]
        },
        {
          rule: '-는 중이다',
          description: 'Cấu trúc: V + 는 중이다. Ý nghĩa: "Đang trong lúc...". Diễn tả hành động đang tiến hành.',
          examples: [
            { korean: '회의 중이에요.', vietnamese: 'Đang trong cuộc họp.', note: 'Trạng thái bận rộn' },
            { korean: '수업 중입니다.', vietnamese: 'Đang trong giờ học.', note: 'Không được làm phiền' },
            { korean: '식사 중이니까 나중에 얘기해요.', vietnamese: 'Đang ăn nên nói chuyện sau.', note: 'Yêu cầu chờ đợi' }
          ]
        },
        {
          rule: '-도록 하다',
          description: 'Cấu trúc: V + 도록 하다. Ý nghĩa: "Để...", "làm cho...". Diễn tả mục đích hoặc chỉ dẫn.',
          examples: [
            { korean: '실수하지 않도록 주의하세요.', vietnamese: 'Hãy cẩn thận để không sai lầm.', note: 'Lời khuyên phòng tránh' },
            { korean: '모든 사람이 참석하도록 연락하세요.', vietnamese: 'Hãy liên lạc để mọi người tham dự.', note: 'Yêu cầu thông báo' },
            { korean: '건강하도록 운동하세요.', vietnamese: 'Hãy tập thể dục để khỏe mạnh.', note: 'Lời khuyên sức khỏe' }
          ]
        },
        {
          rule: '-(으)ㄴ/는/(으)ㄹ 줄 알다/모르다',
          description: 'Cấu trúc: V/A + (으)ㄴ/는/(으)ㄹ 줄 알다/모르다. Ý nghĩa: "Biết/không biết là...", "tưởng là/không ngờ là...".',
          examples: [
            { korean: '이렇게 어려운 줄 몰랐어요.', vietnamese: 'Không ngờ khó thế này.', note: 'Nhận ra khó khăn' },
            { korean: '그 사람이 올 줄 알았어요.', vietnamese: 'Tưởng người đó sẽ đến.', note: 'Dự đoán sai' },
            { korean: '이런 실수를 할 줄 몰랐어요.', vietnamese: 'Không ngờ mình sai lầm như vậy.', note: 'Tự nhận ra lỗi' }
          ]
        }
      ]
    },
    lesson9: {
      title: 'Bài 09: 이사 (Chuyển nhà)',
      grammar: [
        {
          rule: '-(으)ㄹ 테니(까)',
          description: 'Cấu trúc: V + (으)ㄹ 테니(까). Ý nghĩa: "Vì sẽ... nên...". Diễn tả ý định của người nói để làm cơ sở cho lời đề nghị.',
          examples: [
            { korean: '제가 도와드릴 테니까 걱정하지 마세요.', vietnamese: 'Tôi sẽ giúp nên đừng lo.', note: 'Hứa hẹn giúp đỡ' },
            { korean: '내일 갈 테니까 기다리세요.', vietnamese: 'Ngày mai tôi sẽ đi nên hãy chờ.', note: 'Thông báo kế hoạch' },
            { korean: '이사할 테니까 미리 준비하자.', vietnamese: 'Sẽ chuyển nhà nên chuẩn bị trước.', note: 'Chuẩn bị cho sự kiện' }
          ]
        },
        {
          rule: '-거든요',
          description: 'Cấu trúc: V/A + 거든요. Ý nghĩa: "Vì...". Dùng để giải thích lý do mà người nghe chưa biết.',
          examples: [
            { korean: '못 가거든요. 일이 있어서요.', vietnamese: 'Không đi được. Vì có việc.', note: 'Giải thích nguyên nhân' },
            { korean: '비싸거든요. 그래서 안 샀어요.', vietnamese: 'Vì đắt. Nên không mua.', note: 'Lý do không mua' },
            { korean: '재미있거든요. 한 번 봐보세요.', vietnamese: 'Vì thú vị. Hãy xem thử.', note: 'Giới thiệu lý do' }
          ]
        },
        {
          rule: '-(으)ㄴ 지 … 되다',
          description: 'Cấu trúc: V + (으)ㄴ 지 + 시간 + 되다. Ý nghĩa: "Từ khi... đã được (bao lâu)". Chỉ khoảng thời gian từ quá khứ đến hiện tại.',
          examples: [
            { korean: '이사한 지 한 달이 됐어요.', vietnamese: 'Chuyển nhà được một tháng rồi.', note: 'Thời gian từ khi chuyển' },
            { korean: '결혼한 지 5년이 되었습니다.', vietnamese: 'Kết hôn được 5 năm rồi.', note: 'Thời gian hôn nhân' },
            { korean: '한국에 온 지 얼마나 됐어요?', vietnamese: 'Đến Hàn Quốc được bao lâu rồi?', note: 'Hỏi thời gian cư trú' }
          ]
        }
      ]
    },
    lesson10: {
      title: 'Bài 10: 여행 (Du lịch)',
      grammar: [
        {
          rule: '-다고 하다 (trần thuật gián tiếp)',
          description: 'Cấu trúc: V/A + 다고 하다. Ý nghĩa: "nói rằng...". Truyền đạt lời nói của người khác.',
          examples: [
            { korean: '친구가 여행을 간다고 했어요.', vietnamese: 'Bạn nói rằng sẽ đi du lịch.', note: 'Truyền đạt kế hoạch' },
            { korean: '날씨가 좋다고 하네요.', vietnamese: 'Họ nói thời tiết đẹp.', note: 'Thông tin thời tiết' },
            { korean: '그 곳이 유명하다고 들었어요.', vietnamese: 'Nghe nói nơi đó nổi tiếng.', note: 'Thông tin du lịch' }
          ]
        },
        {
          rule: '-냐고 하다 (nghi vấn gián tiếp)',
          description: 'Cấu trúc: V/A + 냐고 하다. Ý nghĩa: "hỏi rằng...". Truyền đạt câu hỏi của người khác.',
          examples: [
            { korean: '언제 떠나냐고 물어봤어요.', vietnamese: 'Hỏi rằng khi nào khởi hành.', note: 'Truyền đạt câu hỏi' },
            { korean: '어디로 가냐고 했어요.', vietnamese: 'Hỏi đi đâu.', note: 'Hỏi về điểm đến' },
            { korean: '재미있냐고 묻더라고요.', vietnamese: 'Hỏi có vui không.', note: 'Hỏi về cảm nhận' }
          ]
        },
        {
          rule: '-(으)ㄹ까 하다',
          description: 'Cấu trúc: V + (으)ㄹ까 하다. Ý nghĩa: "Đang nghĩ là sẽ...", "đang định...". Diễn tả ý định chưa chắc chắn.',
          examples: [
            { korean: '제주도에 갈까 해요.', vietnamese: 'Đang nghĩ sẽ đi Jeju.', note: 'Ý định chưa chắc' },
            { korean: '오늘 떠날까 합니다.', vietnamese: 'Đang định hôm nay sẽ đi.', note: 'Kế hoạch tạm thời' },
            { korean: '기차로 갈까 생각 중이에요.', vietnamese: 'Đang nghĩ sẽ đi bằng tàu.', note: 'Cân nhắc phương tiện' }
          ]
        },
        {
          rule: '-아/어 가지고',
          description: 'Cấu trúc: V + 아/어 가지고. Ý nghĩa: "Vì... nên...", "sau khi... rồi thì...". Chỉ nguyên nhân hoặc trình tự.',
          examples: [
            { korean: '표를 예약해 가지고 안심이에요.', vietnamese: 'Vì đặt vé rồi nên yên tâm.', note: 'Hoàn thành chuẩn bị' },
            { korean: '돈을 모아 가지고 여행을 가요.', vietnamese: 'Tiết kiệm tiền rồi đi du lịch.', note: 'Trình tự chuẩn bị' },
            { korean: '정보를 찾아 가지고 계획을 세웠어요.', vietnamese: 'Tìm thông tin rồi lập kế hoạch.', note: 'Nghiên cứu trước' }
          ]
        }
      ]
    },
    lesson11: {
      title: 'Bài 11: 고민 (Lo lắng)',
      grammar: [
        {
          rule: '반말 (cách nói suồng sã)',
          description: 'Cách nói thân mật: -아/어 (trần thuật), -니 (nghi vấn), -군 (cảm thán). Dùng với người thân, bạn bè.',
          examples: [
            { korean: '뭐 해?', vietnamese: 'Làm gì thế?', note: 'Hỏi thân mật' },
            { korean: '괜찮아.', vietnamese: 'Ổn mà.', note: 'Trấn an thân mật' },
            { korean: '정말 좋구나!', vietnamese: 'Thật tuyệt!', note: 'Cảm thán thân mật' }
          ]
        },
        {
          rule: '-다(가) 보면',
          description: 'Cấu trúc: V + 다(가) 보면. Ý nghĩa: "Nếu cứ tiếp tục làm gì đó thì sẽ...". Diễn tả kết quả tự nhiên.',
          examples: [
            { korean: '계속 노력하다 보면 성공할 거예요.', vietnamese: 'Cứ tiếp tục cố gắng thì sẽ thành công.', note: 'Kết quả của nỗ lực' },
            { korean: '많이 듣다 보면 이해하게 될 거예요.', vietnamese: 'Nghe nhiều thì sẽ hiểu.', note: 'Quá trình học tập' },
            { korean: '살다 보면 좋은 일도 있어요.', vietnamese: 'Sống mà thì cũng có điều tốt.', note: 'Triết lý sống' }
          ]
        },
        {
          rule: '-더니',
          description: 'Cấu trúc: V/A + 더니. Ý nghĩa: Diễn tả sự đối chiếu giữa quá khứ và hiện tại, thường mang sắc thái bất ngờ.',
          examples: [
            { korean: '아프더니 병원에 갔네요.', vietnamese: 'Đau đớn quá nên đi viện.', note: 'Kết quả của tình trạng' },
            { korean: '공부하더니 성적이 올랐어요.', vietnamese: 'Học chăm chỉ nên điểm tăng.', note: 'Kết quả tích cực' },
            { korean: '비가 오더니 시원해졌어요.', vietnamese: 'Mưa xong nên mát mẻ.', note: 'Thay đổi thời tiết' }
          ]
        }
      ]
    },
    lesson12: {
      title: 'Bài 12: 인터넷 (Internet)',
      grammar: [
        {
          rule: '-(으)라고 하다 (mệnh lệnh gián tiếp)',
          description: 'Cấu trúc: V + (으)라고 하다. Ý nghĩa: "bảo rằng hãy...". Truyền đạt lời yêu cầu của người khác.',
          examples: [
            { korean: '선생님이 숙제를 하라고 했어요.', vietnamese: 'Thầy bảo làm bài tập.', note: 'Truyền đạt yêu cầu' },
            { korean: '빨리 오라고 전화했어요.', vietnamese: 'Gọi điện bảo đến nhanh.', note: 'Tin nhắn khẩn cấp' },
            { korean: '조용히 하라고 했습니다.', vietnamese: 'Bảo im lặng.', note: 'Yêu cầu trật tự' }
          ]
        },
        {
          rule: '-자고 하다 (thỉnh dụ gián tiếp)',
          description: 'Cấu trúc: V + 자고 하다. Ý nghĩa: "nói rằng hãy cùng...". Truyền đạt lời mời hoặc đề nghị.',
          examples: [
            { korean: '같이 영화를 보자고 했어요.', vietnamese: 'Nói rằng cùng xem phim.', note: 'Lời mời giải trí' },
            { korean: '내일 만나자고 하네요.', vietnamese: 'Nói mai gặp nhau.', note: 'Hẹn gặp' },
            { korean: '저녁을 먹자고 제안했어요.', vietnamese: 'Đề nghị cùng ăn tối.', note: 'Lời mời ăn uống' }
          ]
        },
        {
          rule: '-는 김에',
          description: 'Cấu trúc: V + 는 김에. Ý nghĩa: "Nhân tiện...". Diễn tả việc làm thêm khi đã làm việc khác.',
          examples: [
            { korean: '인터넷 하는 김에 이메일도 확인해요.', vietnamese: 'Nhân tiện lên mạng cũng kiểm tra email.', note: 'Làm thêm việc khác' },
            { korean: '나가는 김에 우편물도 부쳐주세요.', vietnamese: 'Nhân tiện ra ngoài cũng gửi thư giúp.', note: 'Nhờ vả thêm' },
            { korean: '가는 김에 들러요.', vietnamese: 'Nhân tiện đi qua cũng ghé.', note: 'Thăm viếng thêm' }
          ]
        }
      ]
    },
    lesson13: {
      title: 'Bài 13: 희망 (Hy vọng)',
      grammar: [
        {
          rule: '-아/어 가다/오다',
          description: 'Cấu trúc: V + 아/어 가다/오다. Ý nghĩa: Diễn tả hành động đang tiến triển theo hướng tích cực hoặc tiêu cực.',
          examples: [
            { korean: '한국어가 늘어가고 있어요.', vietnamese: 'Tiếng Hàn đang tiến bộ.', note: 'Sự phát triển' },
            { korean: '건강이 좋아지고 있어요.', vietnamese: 'Sức khỏe đang được cải thiện.', note: 'Tình trạng tích cực' },
            { korean: '상황이 나빠져 가고 있어요.', vietnamese: 'Tình hình đang xấu đi.', note: 'Xu hướng tiêu cực' }
          ]
        },
        {
          rule: '-아/어야겠다',
          description: 'Cấu trúc: V + 아/어야겠다. Ý nghĩa: "Phải... thôi". Thể hiện quyết định hoặc ý định mạnh mẽ.',
          examples: [
            { korean: '이제 그만 가야겠어요.', vietnamese: 'Bây giờ phải đi thôi.', note: 'Quyết định rời đi' },
            { korean: '열심히 공부해야겠어요.', vietnamese: 'Phải học chăm chỉ thôi.', note: 'Quyết tâm học tập' },
            { korean: '운동을 시작해야겠어요.', vietnamese: 'Phải bắt đầu tập thể dục thôi.', note: 'Quyết định sức khỏe' }
          ]
        },
        {
          rule: '-았/었으면 좋겠다',
          description: 'Cấu trúc: V/A + 았/었으면 좋겠다. Ý nghĩa: "Ước gì...", "nếu... thì tốt biết mấy". Diễn tả mong muốn.',
          examples: [
            { korean: '꿈이 이루어졌으면 좋겠어요.', vietnamese: 'Ước gì ước mơ thành hiện thực.', note: 'Mong muốn thành công' },
            { korean: '비가 그쳤으면 좋겠어요.', vietnamese: 'Ước gì trời tạnh mưa.', note: 'Mong muốn thời tiết' },
            { korean: '모든 사람이 행복했으면 좋겠어요.', vietnamese: 'Ước gì mọi người đều hạnh phúc.', note: 'Lòng từ thiện' }
          ]
        }
      ]
    },
    lesson14: {
      title: 'Bài 14: 영화와 드라마 (Phim và Phim truyền hình)',
      grammar: [
        {
          rule: '(아무리) -아/어도',
          description: 'Cấu trúc: (아무리) V/A + 아/어도. Ý nghĩa: "Dù... thế nào đi nữa thì...". Diễn tả sự nhượng bộ.',
          examples: [
            { korean: '아무리 바빠도 영화는 봐야죠.', vietnamese: 'Dù bận thế nào cũng phải xem phim.', note: 'Dành thời gian giải trí' },
            { korean: '재미없어도 끝까지 봤어요.', vietnamese: 'Dù chán cũng xem hết.', note: 'Kiên trì xem phim' },
            { korean: '아무리 늦어도 기다리겠어요.', vietnamese: 'Dù muộn thế nào cũng đợi.', note: 'Quyết tâm chờ đợi' }
          ]
        },
        {
          rule: '-거든(요)',
          description: 'Cấu trúc: V/A + 거든(요). Ý nghĩa: "Nếu... thì...". Giải thích điều kiện hoặc lý do.',
          examples: [
            { korean: '시간이 있거든 같이 봐요.', vietnamese: 'Nếu có thời gian thì cùng xem.', note: 'Điều kiện tham gia' },
            { korean: '재미있거든 추천해 주세요.', vietnamese: 'Nếu hay thì giới thiệu cho.', note: 'Yêu cầu gợi ý' },
            { korean: '슬프거든 울어도 돼요.', vietnamese: 'Nếu buồn thì khóc cũng được.', note: 'Cho phép cảm xúc' }
          ]
        },
        {
          rule: '-던데요',
          description: 'Cấu trúc: V/A + 던데요. Ý nghĩa: Đuôi câu hồi tưởng, "thấy rằng...". Chia sẻ kinh nghiệm đã trải qua.',
          examples: [
            { korean: '그 영화 재미있던데요.', vietnamese: 'Phim đó hay mà.', note: 'Chia sẻ cảm nhận' },
            { korean: '배우가 잘생겼던데요.', vietnamese: 'Diễn viên đẹp trai mà.', note: 'Nhận xét ngoại hình' },
            { korean: '줄거리가 복잡하던데요.', vietnamese: 'Cốt truyện phức tạp mà.', note: 'Đánh giá nội dung' }
          ]
        }
      ]
    },
    lesson15: {
      title: 'Bài 15: 예절과 규칙 (Lễ nghĩa và Quy tắc)',
      grammar: [
        {
          rule: '-대로',
          description: 'Cấu trúc: N + 대로 / V + 는 대로. Ý nghĩa: "Theo như...". Diễn tả việc làm theo một cách nào đó.',
          examples: [
            { korean: '규칙대로 해야 해요.', vietnamese: 'Phải làm theo quy tắc.', note: 'Tuân thủ quy định' },
            { korean: '말한 대로 했어요.', vietnamese: 'Làm theo như đã nói.', note: 'Thực hiện theo lời' },
            { korean: '계획대로 진행됩니다.', vietnamese: 'Tiến hành theo kế hoạch.', note: 'Theo đúng dự tính' }
          ]
        },
        {
          rule: '-지 않으면 안 되다',
          description: 'Cấu trúc: V + 지 않으면 안 되다. Ý nghĩa: "Không... thì không được" (phải...). Diễn tả sự bắt buộc.',
          examples: [
            { korean: '예의를 지키지 않으면 안 돼요.', vietnamese: 'Phải giữ lễ phép.', note: 'Bắt buộc lịch sự' },
            { korean: '시간을 지키지 않으면 안 됩니다.', vietnamese: 'Phải đúng giờ.', note: 'Quy tắc thời gian' },
            { korean: '법을 지키지 않으면 안 돼요.', vietnamese: 'Phải tuân thủ pháp luật.', note: 'Nghĩa vụ công dân' }
          ]
        },
        {
          rule: '-(으)려던 참이다',
          description: 'Cấu trúc: V + (으)려던 참이다. Ý nghĩa: "Đúng lúc đang định...". Diễn tả việc sắp làm đúng thời điểm.',
          examples: [
            { korean: '전화하려던 참이었어요.', vietnamese: 'Đúng lúc định gọi điện.', note: 'Trùng hợp về thời gian' },
            { korean: '나가려던 참에 비가 왔어요.', vietnamese: 'Đúng lúc định ra ngoài thì trời mưa.', note: 'Tình huống bất ngờ' },
            { korean: '말하려던 참이었는데.', vietnamese: 'Đúng lúc định nói mà.', note: 'Chuẩn bị phát biểu' }
          ]
        }
      ]
    }
  };

  const grammarLevels = {
    level1: {
      title: 'Tiếng Hàn Tổng Hợp - Sơ cấp 1',
      lessons: grammarData,
    },
    level2: {
      title: 'Tiếng Hàn Tổng Hợp - Sơ cấp 2',
      lessons: sc2Raw,
    },
    level3: {
      title: 'Tiếng Hàn Tổng Hợp - Trung cấp 1',
      lessons: sc3Raw,
    },
  };

  const currentLevelData = grammarLevels[selectedLevel];
  const selectedLessonData = currentLevelData?.lessons[selectedLesson];

  const allGrammarForLevel = useMemo(() => {
    if (!currentLevelData?.lessons) return [];
    return Object.entries(currentLevelData.lessons).flatMap(([lessonKey, lesson]) => {
      if (!lesson || !Array.isArray(lesson.grammar)) return [];
      return lesson.grammar.map(rule => ({
        ...rule,
        lessonTitle: lesson.title,
        lessonKey: lessonKey,
      }));
    });
  }, [currentLevelData]);

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) {
      return [];
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return allGrammarForLevel.filter(
      (item) =>
        item.rule.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.examples.some(ex => ex.korean.toLowerCase().includes(lowerCaseSearchTerm) || ex.vietnamese.toLowerCase().includes(lowerCaseSearchTerm))
    );
  }, [searchTerm, allGrammarForLevel]);

  // eslint-disable-next-line no-unused-vars
  const getHeaderText = (levelKey) => {
    return grammarLevels[levelKey]?.title || '';
  };

  const seo = {
    title: 'Ngữ pháp Tiếng Hàn theo Giáo trình Tiếng Hàn Tổng hợp | Hangul Learning',
    description: 'Học và tra cứu ngữ pháp tiếng Hàn theo từng bài của bộ giáo trình Tiếng Hàn Tổng Hợp (Sơ cấp 1, 2 và Trung cấp 1). Giải thích chi tiết, ví dụ rõ ràng.',
  };

  const handleLessonClick = (key) => {
    setSelectedLesson(key);
    setSearchTerm('');
    const element = document.getElementById('grammar-main-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <div className="min-h-screen bg-light-gray p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight">
              Ngữ pháp Tiếng Hàn
            </h1>
            <p className="mt-3 text-lg text-text-light max-w-2xl mx-auto">
              Tra cứu và học ngữ pháp theo lộ trình sách Tiếng Hàn Tổng Hợp.
            </p>
          </header>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* --- Sidebar --- */}
            <aside className="lg:w-1/3 xl:w-1/4 lg:sticky lg:top-8 self-start bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-secondary mb-4">Lộ trình học</h2>
              
              {/* Level Selector */}
              <div className="space-y-2 mb-6">
                {Object.entries(grammarLevels).map(([key, { title }]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedLevel(key);
                      setSelectedLesson('lesson1');
                    }}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                      selectedLevel === key 
                        ? 'bg-primary text-white shadow-sm' 
                        : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-primary'
                    }`}
                  >
                    {key === 'level1' ? 'Sơ cấp 1' : key === 'level2' ? 'Sơ cấp 2' : 'Trung cấp 1'}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Tìm ngữ pháp..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
                        handleLessonClick(key);
                      }}
                      className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        selectedLesson === key && !searchTerm
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
            <main id="grammar-main-content" className="flex-1 min-w-0">
              {searchTerm.trim() ? (
                // Search View
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                   <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Kết quả cho: <span className="text-primary">"{searchTerm}"</span>
                  </h2>
                  {searchResults.length > 0 ? (
                    <div className="space-y-6">
                      {searchResults.map((item, index) => (
                         <div key={index} className="border-b border-gray-200 pb-6">
                           <h3 className="text-xl font-bold text-secondary">{item.rule}</h3>
                           <p className="mt-2 text-text-light">{item.description}</p>
                           <div className="mt-3 space-y-2">
                             {item.examples.map((ex, i) => (
                               <div key={i} className="p-3 bg-light-gray rounded-md">
                                 <p className="font-semibold text-text-dark">{ex.korean}</p>
                                 <p className="text-sm text-text-light">{ex.vietnamese}</p>
                               </div>
                             ))}
                           </div>
                           <button
                              onClick={() => {
                                setSelectedLevel(Object.keys(grammarLevels).find(l => grammarLevels[l].lessons[item.lessonKey]));
                                handleLessonClick(item.lessonKey)
                              }}
                              className="mt-3 text-xs text-primary hover:underline"
                            >
                              Xem trong {item.lessonTitle}
                           </button>
                         </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-text-light py-10">
                      Không tìm thấy ngữ pháp phù hợp.
                    </p>
            )}
          </div>
        ) : (
                // Lesson View
                selectedLessonData && (
                  <div id={selectedLesson} className="bg-white p-6 rounded-2xl shadow-lg space-y-8">
                    <h2 className="text-3xl font-bold text-secondary border-b-2 border-primary pb-3">
                      {selectedLessonData.title}
                    </h2>
                    {selectedLessonData.grammar.map((item, index) => (
                      <div key={index} className="pt-4">
                        <h3 className="text-2xl font-semibold text-primary mb-2">{item.rule}</h3>
                        <p className="text-base text-text-light mb-4">{item.description}</p>
                        <div className="space-y-3">
                          {item.examples.map((ex, i) => (
                            <div key={i} className="border-l-4 border-orange-200 pl-4 py-2 bg-light-gray rounded-r-md">
                              <p className="font-medium text-text-dark">{ex.korean}</p>
                              <p className="text-text-light">{ex.vietnamese}</p>
                              {ex.note && <p className="text-xs text-gray-400 mt-1 italic">({ex.note})</p>}
                </div>
              ))}
            </div>
                      </div>
                    ))}
                  </div>
                )
              )}
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

export default Grammar; 