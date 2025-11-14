import { LearningCourse, MiniGame, Vocab } from "./types";
import speakerAAvatarUrl from "@/assets/images/lessons/speaker-A.svg";
import speakerBAvatarUrl from "@/assets/images/lessons/speaker-B.svg";
import MeoNho from "@/components/grammar/MeoNho";
import PurpleFlashCard from "@/components/grammar/PurpleFlashCard";
import TuKhoa from "@/components/grammar/TuKhoa";

export const learningCourses: LearningCourse[] = [
  // Course 1: Cấp độ Sơ cấp
  {
    id: 1,
    level: "Cấp độ 1: Sơ cấp",
    title: "Giới thiệu về tiếng Hàn",
    topics: [
      {
        id: 1,
        title: "Làm quen & Giới thiệu bản thân",
        accent: "from-amber-200 to-amber-50 text-amber-700",
        barColor: "bg-amber-400",
        cta: { label: "Tiếp tục", tone: "neutral" },
        lessons: [
          {
            id: 1,
            title: "Chào hỏi cơ bản",
            targets: [
              "Chào hỏi và đáp lại lời chào một cách lịch sự.",
              "Bày tỏ sự vui mừng khi gặp ai đó lần đầu.",
              "Phân biệt hai mức độ lịch sự phổ biến trong giao tiếp.",
            ],
            status: "available",
            highlight: true,
            vnDialogue: {
              mainRole: "B",
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Xin chào!" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Chào bạn!" },
                    { text: "Rất vui được gặp bạn." },
                  ],
                },
              ],
            },
            koDialogue: {
              mainRole: "B",
              hasSpeakerBox: true,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "안녕하세요!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F안녕하세요.mp3?alt=media",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "안녕하세요!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F안녕하세요.mp3?alt=media",
                    },
                    {
                      text: "만나서 반갑습니다.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F5%2Fvocab%2F만나서%20반갑습니다.mp3?alt=media",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Chào hỏi",
              content: `
    Ở Hàn Quốc, câu <b>안녕하세요</b> (Annyeonghaseyo) không chỉ là “Xin chào”, 
    mà còn thể hiện sự tôn trọng và lịch sự.
    <ul className="list-disc list-inside ml-2">
      <li>Với bạn bè, bạn chỉ cần nói <b>안녕</b> (Annyeong) thôi là đủ thân mật rồi!</li>
      <li>Còn khi gặp người quan trọng, hãy dùng <b>안녕하십니까</b> (Annyeonghasimnikka) để thật trang trọng nhé~</li>
    </ul>
    <div className="mt-5">Nhớ <b>cúi nhẹ đầu khi chào</b>, đó là cách thể hiện lễ phép rất “chuẩn Hàn” đó.</div>
  `,
            },
            funQuiz: {
              question: "Khi gặp giáo viên, bạn nên chào như thế nào?",
              options: ["안녕", "안녕하세요", "안녕하십니까"],
              correctAnswerIndex: 1,
              explanation:
                "Khi gặp giáo viên, bạn nên sử dụng câu chào trang trọng để thể hiện sự tôn trọng.",
            },
            vocabIds: [1, 2, 3],
            grammar: (
              <ul className="list-decimal list-inside">
                <li className="font-semibold text-xl">
                  <span className="font-semibold text-xl mb-3">
                    Đuôi lịch sự{" "}
                    <span className="text-[var(--custom-orange)]">-요</span> và{" "}
                    <span className="text-[var(--custom-orange)]">-습니다</span>
                  </span>
                  <p className="font-medium text-[18px] my-3">
                    Trong tiếng Hàn, cách bạn kết thúc một câu nói sẽ thể hiện
                    mức độ lịch sự của bạn. Trong bài này, chúng ta đã gặp hai
                    đuôi câu lịch sự phổ biến nhất:
                  </p>

                  <div className="xl:w-[90%] w-full mx-auto flex justify-between gap-10 2xl:flex-row flex-col">
                    <PurpleFlashCard
                      header="Đuôi câu -요"
                      className="text-sm font-medium"
                    >
                      <p>
                        Phổ biến nhất, có thể dùng trong hầu hết các trường hợp.
                        Tạo cảm giác thân thiện, gần gũi.
                      </p>
                      <ul className="my-2 list-disc list-inside ">
                        <li>
                          <b>Dùng khi:</b> Giao tiếp hàng ngày, nói với người
                          lớn tuổi, nhân viên cửa hàng, đồng nghiệp quen biết.
                        </li>
                        <li>
                          <b>Ví dụ:</b> 안녕하세요? (Xin chào?), 맛있어요. (Ngon
                          ạ.)
                        </li>
                      </ul>
                      <TuKhoa>
                        <b>Từ khóa:</b> Hàng ngày, Thân mật, Tự nhiên.
                      </TuKhoa>
                    </PurpleFlashCard>
                    <PurpleFlashCard
                      header="Đuôi câu -요"
                      className="text-sm font-medium"
                    >
                      <p>
                        Phổ biến nhất, có thể dùng trong hầu hết các trường hợp.
                        Tạo cảm giác thân thiện, gần gũi.
                      </p>
                      <ul className="my-2 list-disc list-inside">
                        <li>
                          <b>Dùng khi:</b> Giao tiếp hàng ngày, nói với người
                          lớn tuổi, nhân viên cửa hàng, đồng nghiệp quen biết.
                        </li>
                        <li>
                          <b>Ví dụ:</b> 안녕하세요? (Xin chào?), 맛있어요. (Ngon
                          ạ.)
                        </li>
                      </ul>
                      <TuKhoa>
                        <b>Từ khóa:</b> Hàng ngày, Thân mật, Tự nhiên.
                      </TuKhoa>
                    </PurpleFlashCard>
                  </div>
                  <MeoNho className="font-medium text-[16px] mt-5">
                    <b>Mẹo nhỏ:</b> Khi mới học, chỉ cần nhớ rằng câu kết thúc
                    bằng -요 hoặc -습니다 luôn là câu lịch sự!
                  </MeoNho>
                </li>
                <li className="font-semibold mt-5 text-xl">
                  <span className="font-semibold text-xl mb-3">
                    Liên từ{" "}
                    <span className="text-[var(--custom-orange)]">-서</span>
                  </span>
                  <ul className="list-disc list-inside">
                    <li className="font-medium text-[18px] my-3">
                      Dùng để nối hai hành động hoặc diễn tả nguyên nhân – kết
                      quả.
                    </li>
                    <li className="font-medium text-[18px] my-3">
                      만나서 반갑습니다 → Rất vui vì được gặp bạn
                    </li>
                  </ul>
                </li>
              </ul>
            ),
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question: "Chọn cách chào phù hợp khi gặp bạn cùng lớp:",
                  options: ["안녕", "안녕하세요", "안녕하십니까"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Khi gặp bạn cùng lớp, sử dụng câu chào thân mật nhưng vẫn lịch sự là phù hợp nhất.",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Bạn nên sử dụng đuôi câu nào khi nói chuyện với nhân viên cửa hàng?",
                  options: ["-요", "-습니다", "-해요"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Khi nói chuyện với nhân viên cửa hàng, sử dụng đuôi câu -요 là phù hợp nhất.",
                },
                {
                  questionType: "fillInBlank",
                  question: "안녕<<blank>>? (Xin chào?)",
                  correctAnswer: "하세요",
                  explanation: "안녕하세요? (Xin chào?)",
                },
                {
                  questionType: "dropDown",
                  question: "만나<<dropdown>> 반갑습니다.",
                  options: ["서", "고", "지만"],
                  correctAnswerIndex: 0,
                  explanation: "만나서 반갑습니다. (Rất vui vì được gặp bạn.)",
                },
              ],
            },
            minigameIds: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            minigameQuantity: 6, // random pick 6 câu trong danh sách miniGameIds trên
          },
          {
            id: 2,
            title: "Xưng hô và giới thiệu bản thân",
            targets: [
              "Giới thiệu tên và nghề nghiệp (học sinh) của mình một cách lịch sự.",
              "Hiểu và sử dụng đúng cấu trúc câu: 'A là B'.",
              "Phân biệt và sử dụng hai cách xưng 'Tôi' là 저 (jeo) và 나 (na).",
            ],
            status: "available",
            highlight: true,
            vnDialogue: {
              mainRole: "B",
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Tôi là sinh viên" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "À, xin chào. Tên tôi là Mina." },
                    { text: "Tôi là một sinh viên." },
                  ],
                },
              ],
            },
            koDialogue: {
              mainRole: "B",
              hasSpeakerBox: true,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "저는 학생입니다.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F5%2Fvocab%2F저는%20...입니다.mp3?alt=media",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "아, 안녕하세요. 저는 민아입니다. ",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F안녕하세요.mp3?alt=media", //chưa fix link
                    },
                    {
                      text: "저는 학생입니다.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F5%2Fvocab%2F만나서%20반갑습니다.mp3?alt=media", //chưa fix link
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Tôi",
              content: `Ở <b>Việt Nam</b>, chúng ta có rất nhiều từ để xưng "tôi" (em, con, cháu, mình...). 
              Trong tiếng Hàn cũng vậy 
              <b>!저 (jeo)</b>: Là cách xưng "tôi" khiêm tốn, dùng khi nói chuyện với người lớn tuổi hoặc trong các tình huống trang trọng, lịch sự. 
              Đây là từ bạn nên dùng khi mới làm quen.
            <ul className="list-disc list-inside ml-2">
              <li> <b>"나"</b> (na): Cũng có nghĩa là "tôi", nhưng dùng với bạn bè thân thiết, người nhỏ tuổi hơn hoặc trong các mối quan hệ suồng sã. </li>
              <li>Dùng <b>"나"</b> với người lớn sẽ bị coi là thiếu lễ phép đó!</li> 
            </ul>`,
            },
            funQuiz: {
              question:
                "Bạn đang nói chuyện với giáo viên của mình. Bạn nên dùng từ nào để xưng hô?",
              options: ["내가", "저", "나"],
              correctAnswerIndex: 1,
              explanation:
                "Chính xác! Khi bạn nói chuyện với giáo viên, bạn nên sử dụng từ 저 để thể hiện sự tôn trọng.",
            },

            vocabIds: [4, 5, 6, 7],
          },

          {
            id: 3,
            title: "Hỏi tên và sở thích",
            targets: [
              "Hỏi tên của người khác một cách lịch sự.",
              "Hỏi và trả lời những câu đơn giản về sở thích.",
              "Sử dụng thành thạo câu nghi vấn 'A là B 'phải không?",
              "Hiểu và dùng đúng tiểu từ tân ngữ 을/를.",
            ],
            status: "available",
            highlight: true,
            vnDialogue: {
              mainRole: "B",
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Xin chào. Tên bạn là gì?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "Tên tôi là Mina. Tên bạn là gì?" }],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Tôi là một người lạ. Bạn thích gì?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "Tôi thích học tiếng Hàn" }],
                },
              ],
            },
            koDialogue: {
              mainRole: "B",
              hasSpeakerBox: true,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "안녕하세요. 이름이 무엇입니까?.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F5%2Fvocab%2F저는%20...입니다.mp3?alt=media",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "저는 민아입니다. 이름이 무엇입니까? ",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F안녕하세요.mp3?alt=media", //chưa fix link
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "저는 남입니다. 무엇을 좋아하세요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F5%2Fvocab%2F저는%20...입니다.mp3?alt=media",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "저는 한국어 공부가 좋아요. ",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F안녕하세요.mp3?alt=media", //chưa fix link
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "'Bạn thích gì?' - Câu hỏi mở đầu thân thiện",
              content: `Khi làm quen với người Hàn, sau khi hỏi tên, thay vì hỏi tuổi (đây là một câu hỏi khá phổ biến nhưng đôi khi nhạy cảm), hỏi về sở thích <b>"무엇을 좋아하세요?"</b> là một cách tuyệt vời để kéo dài cuộc trò chuyện. 
              Người Hàn rất cởi mở khi chia sẻ về sở thích như nghe nhạc K-Pop, xem phim, leo núi hay đi quán cà phê đẹp. Thử hỏi câu này trong lần tới gặp bạn người Hàn nhé!`,
            },
            funQuiz: {
              question:
                "Trong đoạn hội thoại, khi Nam và Mina giới thiệu bản thân ('Tôi là Nam', 'Tôi là Mina'), họ đã dùng đại từ xưng 'Tôi' ở dạng nào?",
              options: ["저는", "나는", "내가"],
              correctAnswerIndex: 1,
              explanation:
                "Đáp án đúng là A) 저는 (jeo-neun). Trong đoạn hội thoại, cả hai đều nói '저는 민아입니다' (Tôi là Mina) và '저는 남입니다' (Tôi là Nam). Đây là cách nói 'Tôi' một cách lịch sự, khiêm tốn (dùng '저'), phù hợp khi nói chuyện với người mới gặp.",
            },

            vocabIds: [8, 9],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question:
                    "Khi bạn muốn hỏi 'Tên là gì?' bằng cấu trúc ngữ pháp đã học, bạn sẽ điền tiểu từ nào vào chỗ trống: '이름__ 무엇입니까?'",
                  options: ["가 ", "을?", "이"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Danh từ '이름' (tên) kết thúc bằng phụ âm 'ㅁ' (m), vì vậy nó phải đi với tiểu từ chủ ngữ '이'.",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Bạn muốn nói 'Tôi thích âm nhạc' (Âm nhạc thì hay) bằng cấu trúc tính từ '...이/가 좋아요'. Bạn sẽ chọn câu nào?",
                  options: [
                    "음악가 좋아요",
                    "음악을 좋아해요",
                    "음악이 좋아요",
                  ],
                  correctAnswerIndex: 0,
                  explanation:
                    "Từ '음악' (âm nhạc) kết thúc bằng phụ âm 'ㄱ' (k), nên dùng tiểu từ '이' với tính từ '좋아요'.",
                },
                {
                  questionType: "fillInBlank",
                  question: "음악___ 좋아요.",
                  correctAnswer: "이",
                  explanation:
                    "Từ '음악' (eumak - âm nhạc) kết thúc bằng một phụ âm ('ㄱ'), vì vậy bạn phải dùng tiểu từ chủ ngữ '이'.",
                },
                {
                  questionType: "dropDown",
                  question: "저는 <<dropdown>>",
                  options: [
                    "영화를 좋아요",
                    "영화를 좋아해요",
                    "영화가 좋아해요",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "Khi dùng động từ 'thích' (좋아해요), danh từ 'phim' (영화) phải là tân ngữ và đi kèm với tiểu từ tân ngữ 을/를. Vì 영화 (yeonghwa) kết thúc bằng nguyên âm nên ta dùng 를.",
                },
              ],
            },
          },
          {
            id: 4,
            title: "Động lực và câu khích lệ",
            status: "locked",
            targets: [],
          },
          { id: 5, title: "Ôn tập", status: "final", targets: [] },
        ],
      },
      {
        id: 2,
        title: "Gia đình & Bạn bè",
        accent: "from-lime-200 to-lime-50 text-lime-800",
        barColor: "bg-lime-400",
        cta: { label: "Học vượt?", tone: "neutral" },
        lessons: [
          {
            id: 1,
            title: "Giới thiệu gia đình",
            status: "locked",
            targets: [],
          },
          { id: 2, title: "Từ vựng họ hàng", status: "locked", targets: [] },
          {
            id: 3,
            title: "Trò chuyện hằng ngày",
            status: "locked",
            targets: [],
          },
          { id: 4, title: "Kết nối bạn bè", status: "locked", targets: [] },
          { id: 5, title: "Bài cuối", status: "final", targets: [] },
        ],
      },
      {
        id: 3,
        title: "Số đếm & Thời gian",
        accent: "from-indigo-200 to-indigo-50 text-indigo-800",
        barColor: "bg-indigo-400",
        cta: { label: "Học vượt?", tone: "accent" },
        lessons: [
          { id: 1, title: "Số đếm cơ bản", status: "locked", targets: [] },
          { id: 2, title: "Đếm giờ & phút", status: "locked", targets: [] },
          { id: 3, title: "Lịch hằng ngày", status: "locked", targets: [] },
          { id: 4, title: "Lập kế hoạch", status: "locked", targets: [] },
          { id: 5, title: "Bài cuối", status: "final", targets: [] },
        ],
      },
    ],
  },
  // Course 2: Cấp độ Trung cấp
  {
    id: 2,
    level: "Cấp độ 2: Trung cấp",
    title: "Mở rộng giao tiếp",
    topics: [],
  },
  // Course 3: Cấp độ Cao cấp
  {
    id: 3,
    level: "Cấp độ 3: Cao cấp",
    title: "Hội thoại & Cảm xúc",
    topics: [],
  },
];

// THƯ VIỆN TỪ VỰNG --------------------------------------
export const vocabList: Record<number, Vocab> = {
  1: {
    text: "안녕하세요",
    transcription: "annyeonghaseyo",
    meaning: "xin chào",
    usage:
      "Câu chào hỏi phổ biến trong tiếng Hàn, sử dụng trong các tình huống trang trọng và lịch sự.",
    description:
      "Câu chào hỏi phổ biến trong tiếng Hàn, thể hiện sự lịch sự và tôn trọng.",
    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F5%2Fvocab%2F안녕하세요.mp3?alt=media",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
    wordType: "phrase",
    subdescription: `<b>Sự thật thú vị:</b> Nghĩa gốc là “Bạn có khỏe không?” nhưng dịch tự nhiên là “Xin chào!”.`,
    parts: [
      {
        text: "안녕",
        color: "--custom-green",
        description: "danh từ: bình an",
      },
      {
        text: "하",
        color: "--custom-red",
        description: "động từ: làm",
      },
      {
        text: "세요",
        color: "--custom-orange",
        description: "đuôi lịch sự thân mật",
      },
    ],
    examples: [
      "안녕하세요! 만나서 반갑습니다.",
      "안녕하세요! 오늘 기분이 어때요?",
    ],
  },
  2: {
    text: "만나서",
    transcription: "mannaseo",
    meaning: "gặp gỡ (rồi)",
    usage:
      "Cụm từ dùng để diễn tả việc đã gặp ai đó, thường xuất hiện trong câu chào hỏi.",
    description:
      "Cụm từ dùng để diễn tả việc đã gặp ai đó, thể hiện sự vui mừng khi gặp gỡ.",
    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F만나서.mp3?alt=media",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
    wordType: "phrase",
    parts: [
      {
        text: "만나다",
        color: "--custom-red",
        description: "động từ: gặp",
      },
      {
        text: "서",
        color: "--custom-orange",
        description: 'kết nối: "vì/ nhân vì"',
      },
    ],
    examples: [
      "안녕하세요! 만나서 반갑습니다.",
      "안녕하세요! 오늘 기분이 어때요?",
    ],
  },
  3: {
    text: "반갑습니다",
    transcription: "bangapseumnida",
    meaning: "rất vui được gặp",
    usage: "Cụm từ dùng để diễn tả sự vui mừng khi gặp gỡ ai đó.",
    description:
      "Cụm từ dùng để diễn tả sự vui mừng khi gặp gỡ ai đó, thường sử dụng trong các tình huống trang trọng.",
    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F반갑습니다.mp3?alt=media",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
    wordType: "phrase",
    parts: [
      {
        text: "반갑다",
        color: "--custom-purple",
        description: "động từ: vui mừng khi gặp",
      },
      {
        text: "습니다",
        color: "--custom-orange",
        description: "đuôi lịch sự",
      },
    ],
    examples: [
      "안녕하세요! 만나서 반갑습니다.",
      "처음 뵙겠습니다. 반갑습니다.",
    ],
  },
  4: {
    text: "저",
    transcription: "jeo",
    meaning: "Nghĩa: Tôi, em, con... (khiêm tốn)",
    usage:
      "Câu chào hỏi phổ biến trong tiếng Hàn, sử dụng trong các tình huống trang trọng và lịch sự.",
    description:
      "Câu chào hỏi phổ biến trong tiếng Hàn, thể hiện sự lịch sự và tôn trọng.",
    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F5%2Fvocab%2F안녕하세요.mp3?alt=media",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
    wordType: "phrase",
    subdescription: `<b>Mẹo nhỏ:</b> Khi giới thiệu tên, người Hàn thường dùng <b>제 이름</b>
     (je ireum, tên của tôi là) thay vì <b>저의 이름 (jeo ireum)</b>. 제 (je) là dạng sở hữu của 저 (jeo).”.`,
    parts: [
      {
        text: "안녕",
        color: "--custom-green",
        description: "danh từ: bình an",
      },
      {
        text: "하",
        color: "--custom-red",
        description: "động từ: làm",
      },
      {
        text: "세요",
        color: "--custom-orange",
        description: "đuôi lịch sự thân mật",
      },
    ],
    examples: [
      "안녕하세요! 만나서 반갑습니다.",
      "안녕하세요! 오늘 기분이 어때요?",
    ],
  },
  5: {
    text: "이름",
    transcription: "ireum",
    meaning: "Tên",
    usage:
      "Câu chào hỏi phổ biến trong tiếng Hàn, sử dụng trong các tình huống trang trọng và lịch sự.",
    description:
      "Câu chào hỏi phổ biến trong tiếng Hàn, thể hiện sự lịch sự và tôn trọng.",
    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F5%2Fvocab%2F안녕하세요.mp3?alt=media",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
    wordType: "phrase",

    parts: [
      {
        text: "안녕",
        color: "--custom-green",
        description: "danh từ: bình an",
      },
      {
        text: "하",
        color: "--custom-red",
        description: "động từ: làm",
      },
      {
        text: "세요",
        color: "--custom-orange",
        description: "đuôi lịch sự thân mật",
      },
    ],
    examples: [
      "안녕하세요! 만나서 반갑습니다.",
      "안녕하세요! 오늘 기분이 어때요?",
    ],
  },
  6: {
    text: "입니다",
    transcription: "imnida",
    meaning: "Là",
    usage:
      "Câu chào hỏi phổ biến trong tiếng Hàn, sử dụng trong các tình huống trang trọng và lịch sự.",
    description:
      "Câu chào hỏi phổ biến trong tiếng Hàn, thể hiện sự lịch sự và tôn trọng.",
    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F5%2Fvocab%2F안녕하세요.mp3?alt=media",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
    wordType: "phrase",
    subdescription: `<b>Lưu ý</b>: <b>"입니다" </b>luôn được viết dính liền với danh từ đứng trước nó. Ví dụ: <b>학생입니다</b> (đúng), <b>학생 입니다</b> (sai)..`,
    parts: [
      {
        text: "안녕",
        color: "--custom-green",
        description: "danh từ: bình an",
      },
      {
        text: "하",
        color: "--custom-red",
        description: "động từ: làm",
      },
      {
        text: "세요",
        color: "--custom-orange",
        description: "đuôi lịch sự thân mật",
      },
    ],
    examples: [
      "안녕하세요! 만나서 반갑습니다.",
      "안녕하세요! 오늘 기분이 어때요?",
    ],
  },
  7: {
    text: "학생",
    transcription: "haksaeng",
    meaning: "Học sinh",
    usage:
      "Câu chào hỏi phổ biến trong tiếng Hàn, sử dụng trong các tình huống trang trọng và lịch sự.",
    description:
      "Câu chào hỏi phổ biến trong tiếng Hàn, thể hiện sự lịch sự và tôn trọng.",
    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F5%2Fvocab%2F안녕하세요.mp3?alt=media",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
    wordType: "phrase",

    parts: [
      {
        text: "안녕",
        color: "--custom-green",
        description: "danh từ: bình an",
      },
      {
        text: "하",
        color: "--custom-red",
        description: "động từ: làm",
      },
      {
        text: "세요",
        color: "--custom-orange",
        description: "đuôi lịch sự thân mật",
      },
    ],
    examples: [
      "안녕하세요! 만나서 반갑습니다.",
      "안녕하세요! 오늘 기분이 어때요?",
    ],
  },
  8: {
    text: " 무엇",
    transcription: "mu-eot",
    meaning: "Gì",
    usage:
      "Câu chào hỏi phổ biến trong tiếng Hàn, sử dụng trong các tình huống trang trọng và lịch sự.",
    description:
      "Câu chào hỏi phổ biến trong tiếng Hàn, thể hiện sự lịch sự và tôn trọng.",
    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F5%2Fvocab%2F안녕하세요.mp3?alt=media",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
    wordType: "phrase",
    subdescription: `<b>Mẹo nhỏ</b>: Trong văn nói, <b>"무엇"</b> thường được rút gọn thành <b>뭐</b> (mwo). 
    Ví dụ: <b>이름이 뭐예요?</b>  (Tên bạn là gì? - dạng thân mật lịch sự).`,
    parts: [
      {
        text: "무엇",
        color: "--custom",
        description: "Đại từ nghi vấn.",
      },
    ],
    examples: [
      "안녕하세요! 만나서 반갑습니다.",
      "안녕하세요! 오늘 기분이 어때요?",
    ],
  },
  9: {
    text: "좋아요",
    transcription: "jo-a-yo",
    meaning: "Tuyệt",
    usage:
      "Câu chào hỏi phổ biến trong tiếng Hàn, sử dụng trong các tình huống trang trọng và lịch sự.",
    description:
      "Câu chào hỏi phổ biến trong tiếng Hàn, thể hiện sự lịch sự và tôn trọng.",
    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F5%2Fvocab%2F안녕하세요.mp3?alt=media",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
    wordType: "phrase",
    subdescription:
      "<b>Sự thật thú vị</b>: Khi bạn bấm 'Like' trên Facebook hoặc Instagram phiên bản tiếng Hàn, nút đó sẽ hiện chữ <b>좋아요!<b/>.",
    parts: [
      {
        text: "좋다",
        color: "--custom-green",
        description: "tính từ gốc: tốt, thích",
      },
      {
        text: "-아요",
        color: "--custom-organge",
        description: "đuôi câu thân mật lịch sự",
      },
    ],
    examples: [
      "안녕하세요! 만나서 반갑습니다.",
      "안녕하세요! 오늘 기분이 어때요?",
    ],
  },
};

// THƯ VIỆN MINI GAME:--------------------------------------
export const miniGames: Record<number, MiniGame> = {
  1: {
    title: "Hãy chọn nghĩa chính xác cho từ sau",
    type: "multipleChoice",
    content: {
      displayType: 1,
      question: {
        // câu này cần có cả từ vựng, phiên âm, ảnh minh họa và audio
        text: {
          main: "안녕하세요",
          sub: "annyeonghaseyo",
        },
        audio:
          "https://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
      },
      options: [
        {
          value: "A",
          text: {
            main: "Xin chào",
          },
        },
        {
          value: "B",
          text: {
            main: "Rất vui được gặp",
          },
        },
        {
          value: "C",
          text: {
            main: "Gặp gỡ (rồi...)",
          },
        },
      ],
      correctValue: "A",
    },
  },
  2: {
    title: "Hãy chọn đáp án mà bạn nghe được",
    type: "multipleChoice",
    content: {
      displayType: 2,
      question: {
        // câu này chỉ cần ảnh minh họa và audio
        audio:
          "https://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
      },
      options: [
        {
          value: "A",
          text: {
            main: "안녕하세요",
            sub: "annyeonghaseyo",
          },
        },
        {
          value: "B",
          text: {
            main: "만나서",
            sub: "mannaseo",
          },
        },
        {
          value: "C",
          text: {
            main: "반갑습니다",
            sub: "bangapseumnida",
          },
        },
      ],
      correctValue: "A",
    },
  },
  3: {
    title: "Từ nào sau đây là `Rất vui khi gặp`?",
    type: "multipleChoice",
    content: {
      // câu này chỉ cần options hiển thị là được, ko cần câu hỏi cx đc
      displayType: 3,
      options: [
        // các đáp án cần có thêm ảnh minh họa
        {
          value: "A",
          text: {
            main: "안녕하세요",
            sub: "annyeonghaseyo",
          },
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
        },
        {
          value: "B",
          text: {
            main: "만나서",
            sub: "mannaseo",
          },
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
        },
        {
          value: "C",
          text: {
            main: "반갑습니다",
            sub: "bangapseumnida",
          },
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
        },
      ],
      correctValue: "C",
    },
  },
  4: {
    title: "Hãy chọn nghĩa tương ứng với từ",
    type: "multipleChoice",
    content: {
      displayType: 4,
      question: {
        text: {
          main: "만나서",
          sub: "mannaseo",
        },
      },
      options: [
        // các đáp án cần có thêm ảnh minh họa
        {
          value: "A",
          text: {
            main: "Xin chào",
          },
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
        },
        {
          value: "B",
          text: {
            main: "Rất vui được gặp",
          },
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
        },
        {
          value: "C",
          text: {
            main: "Gặp gỡ (rồi...)",
          },
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
        },
      ],
      correctValue: "C",
    },
  },
  5: {
    title: "Hãy viết câu này bằng Tiếng Việt",
    type: "phraseOrder",
    content: {
      displayType: 1,
      question: {
        audio:
          "https://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
        text: {
          main: "만나서 반갑습니다",
          sub: "mannaseo bangapseumnida",
        },
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
      },
      texts: [
        { main: "Xin chào!" }, // 0
        { main: "Rất vui" }, // 1
        { main: "vì được" }, // 2
        { main: "gặp" }, // 3
        { main: "bạn" }, // 4
      ],
      rightOrder: [1, 2, 3, 4],
    },
  },
  6: {
    title: "Hãy viết câu này bằng Tiếng Hàn",
    type: "phraseOrder",
    content: {
      displayType: 2,
      question: {
        text: {
          main: "Xin chào",
        },
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
      },
      texts: [
        { main: "만", sub: "man" }, // 0
        { main: "하", sub: "ha" }, // 1
        { main: "나서", sub: "naseo" }, // 2
        { main: "안녕", sub: "annyeong" }, // 3
        { main: "(으)셔요", sub: "(eu)syeyo" }, // 4
      ],
      rightOrder: [3, 4],
    },
  },
  7: {
    title: "Hãy viết câu bạn nghe được",
    type: "phraseOrder",
    content: {
      displayType: 3,
      question: {
        audio:
          "https://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
      },
      texts: [
        { main: "만", sub: "man" }, // 0
        { main: "하", sub: "ha" }, // 1
        { main: "나서", sub: "naseo" }, // 2
        { main: "안녕", sub: "annyeong" }, // 3
        { main: "(으)셔요", sub: "(eu)syeyo" }, // 4
      ],
      rightOrder: [3, 4],
    },
  },
  8: {
    title: "Nối các cặp từ dựa trên nghĩa",
    type: "matching",
    content: {
      displayType: 1,
      firstPhraseList: [
        { main: "만나서", sub: "mannaseo" },
        { main: "안녕하세요", sub: "annyeonghaseyo" },
        { main: "반갑습니다", sub: "bangapseumnida" },
      ],
      secondPhraseList: [
        { main: "Xin chào" },
        { main: "Gặp gỡ (rồi...)" },
        { main: "Rất vui được gặp" },
      ],
    },
  },
  9: {
    title: "Nối các cặp từ dựa trên phiên âm",
    type: "matching",
    content: {
      displayType: 2,
      firstPhraseList: [
        { main: "만나서" },
        { main: "안녕하세요" },
        { main: "반갑습니다" },
      ],
      secondPhraseList: [
        { main: "mannaseo" },
        { main: "annyeonghaseyo" },
        { main: "bangapseumnida" },
      ],
    },
  },
};

// THƯ VIỆN MÀU:--------------------------------------
/**
 * --custom-red dùng cho động từ
 * --custom-green  dung cho màu từ vựng danh từ
 * --custom-purple dùng cho tính từ
 * --custom-orange dùng cho đuôi lịch sự thân mật, phó từ, trợ từ...
 */
