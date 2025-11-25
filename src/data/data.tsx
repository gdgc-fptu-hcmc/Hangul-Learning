import { LearningCourse, MiniGame, Vocab } from "./types";
import speakerAAvatarUrl from "@/assets/images/lessons/speaker-A.svg";
import speakerBAvatarUrl from "@/assets/images/lessons/speaker-B.svg";
import MeoNho from "@/components/grammar/MeoNho";
import PurpleFlashCard from "@/components/grammar/PurpleFlashCard";
import TuKhoa from "@/components/grammar/TuKhoa";
import { P } from "node_modules/framer-motion/dist/types.d-BJcRxCew";

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
                        "https://firebasestorage.googleapis.com/v0/b/hangul-chat-ai-be.firebasestorage.app/o/%EB%A7%8C%EB%82%98%EC%84%9C%20%EB%B0%98%EA%B0%91%EC%8A%B5%EB%8B%88%EB%8B%A4.mp3?alt=media&token=b96b625e-a715-46cd-82c3-2aa492b3a700",
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
                        "https://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
                    },
                    {
                      text: "만나서 반갑습니다.",
                      audioUrl:
                        "https://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
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
            title: "Xưng hô và giới thiệu",
            status: "completed",
            targets: [],
            grammar: (
              <div className="text-[#202020] font-nunito text-base md:text-[18px] font-normal leading-normal">
                <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                  <span>
                    Cấu trúc giới thiệu:{" "}
                    <span className="text-[var(--custom-green)]">[Danh từ]</span>{" "}
                    + <span className="text-[var(--custom-orange)]">은/는</span>{" "}
                    + <span className="text-[var(--custom-green)]">[Danh từ]</span>{" "}
                    + <span className="text-[var(--custom-red)]">입니다</span>
                  </span>
                </h1>

                <p>Đây là cấu trúc "A là B" <span className="font-bold">cơ bản và quan trọng nhất</span> trong tiếng Hàn.</p>

                <div className="mt-4 md:mt-6">
                  <span>
                    <span className="font-bold">은 (eun) / 는 (neun)</span>: Là các{" "}
                    <span className="font-bold">tiểu từ chủ đề</span> đứng sau chủ ngữ dùng để{" "}
                    <span className="font-bold">nhấn mạnh ai hoặc cái gì</span> là chủ đề của câu.
                  </span>

                  <ul className="list-disc pl-5 md:pl-7 mt-2">
                    <li>
                      Dùng <span className="font-bold">은 (eun)</span> nếu danh từ kết thúc bằng{" "}
                      <span className="font-bold">phụ âm</span>. Ví dụ: 학생은 (học sinh)
                    </li>
                    <li>
                      Dùng <span className="font-bold">는 (neun)</span> nếu danh từ kết thúc bằng{" "}
                      <span className="font-bold">nguyên âm</span>. Ví dụ: 저는 (tôi)
                    </li>
                  </ul>

                  <div className="mt-3 md:mt-4">
                    <span>
                      <span className="font-bold">입니다 (imnida)</span>: Luôn đứng ở cuối câu, có nghĩa là "là".
                    </span>
                  </div>
                </div>

                <div className="flex p-4 md:p-5 flex-col items-start gap-3 md:gap-[10px] rounded-[10px] bg-[#F4FAEE] mt-4 md:mt-6">
                  <span className="text-green font-bold">Ví dụ:</span>

                  <div className="w-full">
                    <span className="font-medium block mb-2">저는 학생입니다. (Tôi là học sinh.)</span>
                    <ul className="list-disc pl-5 md:pl-7">
                      <li>저 (Tôi) + 는 + 학생 (học sinh) + 입니다 (là).</li>
                      <li>"저" kết thúc bằng nguyên âm "ㅓ" nên đi với "는".</li>
                    </ul>
                  </div>

                  <div className="w-full mt-3">
                    <span className="font-medium block mb-2">제 이름은 민아입니다. (Tên của tôi là Mina.)</span>
                    <ul className="list-disc pl-5 md:pl-7">
                      <li>제 이름 (Tên của tôi) + 은 + 민아 (Mina) + 입니다 (là).</li>
                      <li>"이름" kết thúc bằng phụ âm "ㅁ" nên đi với "은"</li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          },
          {
            id: 3,
            title: "Giới thiệu tên và sở thích",
            status: "available",
            targets: [],
            grammar: (
              <div className="flex flex-col text-[#202020] font-nunito gap-3 md:gap-[18px] text-base md:text-[18px] font-normal leading-normal">
                {/* Phần 1 */}
                <h1 className="text-xl md:text-2xl font-bold">
                  <span>
                    1. Câu hỏi "Cái gì?":{" "}
                    <span className="text-[var(--custom-green)]">[Danh từ]</span> +{" "}
                    <span className="text-[var(--custom-orange)]">이/가</span> +{" "}
                    <span className="text-[var(--custom-green)]">무엇</span>
                    <span className="text-[var(--custom-red)]">입니까</span>?
                  </span>
                </h1>

                <p>Đây là cấu trúc dùng để hỏi "A là cái gì?".</p>

                <div>
                  <span>
                    <span className="font-bold">이 (i) / 가 (ga):</span> Là các{" "}
                    <span className="font-bold">tiểu từ chủ ngữ.</span>
                  </span>
                  <ul className="list-disc pl-5 md:pl-7">
                    <li>
                      Dùng <span className="font-bold">이 (i)</span> nếu danh từ kết thúc bằng{" "}
                      <span className="font-bold">phụ âm</span>. Ví dụ: 이름이... (Tên là ...)
                    </li>
                    <li>
                      Dùng <span className="font-bold">가 (ga)</span> nếu danh từ kết thúc bằng{" "}
                      <span className="font-bold">nguyên âm</span>. Ví dụ: 저기가... (Chỗ kia là...)
                    </li>
                  </ul>
                  <br></br>
                  <div>
                    <span className="font-bold">무엇입니까?</span> (mueos-ibnikka) nghĩa là "Là gì?" (cách nói lịch sự, trang trọng).
                    <ul className="list-disc pl-5 md:pl-7">
                      <li>무엇 = cái gì</li>
                      <li>입니까 = là (dạng hỏi của "이다")</li>
                    </ul>
                  </div>
                </div>

                <div className="flex p-4 md:p-5 flex-col items-start gap-2 md:gap-[10px] rounded-[10px] bg-[#F4FAEE]">
                  <span className="text-green font-bold">Ví dụ:</span>
                  <ul className="list-disc pl-5 md:pl-7">
                    <li>이름이 무엇입니까? (Tên là gì?)</li>
                    <li>이것이 무엇입니까? (Cái này là cái gì?)</li>
                  </ul>
                </div>

                <hr className="my-4 border-gray-200" />

                {/* Phần 2 */}
                <h1 className="text-xl md:text-2xl font-bold">
                  <span>
                    2. Nói về điều mình thích:{" "}
                    <span className="text-[var(--custom-green)]">[Danh từ]</span> +{" "}
                    <span className="text-[var(--custom-orange)]">이/가</span> +{" "}
                    <span className="text-[var(--custom-purple)]">좋아요</span>.
                  </span>
                </h1>

                <div>
                  <p>Cấu trúc này có nghĩa là "Cái gì đó thì tốt/thích".</p>
                  <p>Chủ thể của sự "thích" ở đây là danh từ được gắn với 이/가.</p>
                </div>

                <div className="flex p-4 md:p-5 flex-col items-start gap-2 md:gap-[10px] rounded-[10px] bg-[#F4FAEE]">
                  <span className="text-green font-bold">Ví dụ:</span>
                  <ul className="list-disc pl-5 md:pl-7">
                    <li>한국어 공부가 좋아요. (Việc học tiếng Hàn thì thích.)</li>
                    <li>음악이 좋아요. (Âm nhạc thì hay/ thích.)</li>
                  </ul>
                </div>

                {/* Phần phân biệt */}
                <div className="flex flex-col items-start self-stretch gap-3 md:gap-[18px] p-4 md:p-[30px] border-2 border-gray-300 rounded-lg">
                  <span className="font-bold">Phân biệt hai cách nói thích</span>

                  <div className="w-full">
                    <span className="font-bold">1. [Sự vật] + 이/가 + 좋아요</span>
                    <ul className="list-disc pl-5 md:pl-7">
                      <li>Bình luận về sự vật.</li>
                      <li>Ví dụ: 커피가 좋아요. (Cà phê ngon.)</li>
                    </ul>

                    <div className="mt-3 md:mt-4">
                      <span className="font-bold">2. [Người] + 은/는 + [Sự vật] + 을/를 + 좋아해요</span>
                      <ul className="list-disc pl-5 md:pl-7">
                        <li>Nói về hành động của người.</li>
                        <li>Ví dụ: 저는 커피를 좋아해요. (Tôi thích cà phê.)</li>
                      </ul>
                      <p className="text-black text-sm italic font-normal leading-normal mt-2">
                        Bạn sẽ được học về cấu trúc này kỹ hơn trong bài 4 của chủ đề 8
                      </p>
                    </div>
                  </div>

                  {/* Mẹo nhỏ */}
                  <div className="font-normal text-base md:text-[18px] p-4  w-full">
                    <MeoNho>
                      <b>Mẹo nhỏ: </b>
                      <span>
                        Khi giao tiếp, dùng …
                        <span className="font-bold">이/가 좋아요</span> để khen hoặc nói bạn thích một thứ gì đó — cách nói tự nhiên và phổ biến lắm đấy!
                      </span>
                    </MeoNho>
                  </div>
                </div>
              </div>
            ),
          },
          {
            id: 4,
            title: "Động lực và câu khích lệ",
            status: "locked",
            targets: [],
            grammar: (
              <div className="flex flex-col text-[#202020] font-nunito gap-3 md:gap-[18px] text-base md:text-[18px] font-normal leading-normal">
                <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  <span>Cấu trúc thể hiện khả năng:{" "}
                    <span className="text-[var(--custom-red)]">[Động từ]</span>{" "}
                    + <span className="text-[var(--custom-orange)]">(으)ㄹ</span> {" "}
                    <span className="text-[var(--custom-green)]">수</span>{" "}
                    <span className="text-[#464394]">있다/없다</span>
                  </span>
                </h1>

                <div className="text-base sm:text-lg space-y-3">
                  <div className="text-gray-700 mb-3 sm:mb-4">
                    Đây là cấu trúc dùng để diễn tả ai đó <span className="font-bold">"có thể"</span> hoặc <span className="font-bold">"không thể"</span> làm một việc gì đó.
                  </div>

                  <span className="font-bold">(으)ㄹ 수 있다/없다</span> (eul su itda/eopda): Nghĩa là "có thể / không thể"
                  <br />

                  <div>
                    <span className="ml-2 sm:ml-4 font-bold">• -ㄹ 수 있다:</span> Dùng khi gốc động từ kết thúc bằng nguyên âm.
                    <div className="rounded-lg p-3 sm:p-4 mt-2 mb-2 bg-[#F4FAEE]">
                      <span className="text-green font-bold">Ví dụ:</span>
                      <ul className="list-disc pl-6 sm:pl-9 text-gray-700 space-y-1 sm:space-y-2 mt-2">
                        <li>가다 → 가 + ㄹ 수 있다 → 갈 수 있다 (có thể đi)</li>
                        <li>하다 → 하 + ㄹ 수 있다 → 할 수 있다 (có thể làm)</li>
                      </ul>
                    </div>

                    <span className="ml-2 sm:ml-4 font-bold">• -을 수 있다:</span> Dùng khi gốc động từ kết thúc bằng phụ âm (patchim).
                    <div className="rounded-lg p-3 sm:p-4 mt-2 mb-2 bg-[#F4FAEE]">
                      <span className="text-green font-bold">Ví dụ:</span>
                      <ul className="list-disc pl-6 sm:pl-9 text-gray-700 space-y-1 sm:space-y-2 mt-2">
                        <li>먹다 → 먹 + 을 수 있다 → 먹을 수 있다 (có thể ăn)</li>
                        <li>읽다 → 읽 + 을 수 있다 → 읽을 수 있다 (có thể đọc)</li>
                      </ul>
                    </div>
                    <hr className="my-3 sm:my-4 border-gray-200" />
                  </div>

                  <div>

                    <p>Để nói "không thể", chỉ cần thay <span className="font-bold">있다</span> (có) bằng <span className="font-bold">없다</span> (không có)</p>
                    <div className="ml-2 sm:ml-4 rounded-lg p-3 sm:p-4 mt-2 mb-2 bg-[#F4FAEE]">
                      <span className="text-green font-bold">Ví dụ:</span>
                      <ul className="list-disc pl-6 sm:pl-9 text-gray-700 space-y-1 sm:space-y-2 mt-2">
                        <li>할 수 없어요*. (Không thể làm được.)</li>
                        <li>먹을 수 없어요*. (Không thể ăn được.)</li>
                      </ul>
                    </div>

                    <p className="text-gray-600 text-sm sm:text-base italic font-normal leading-normal ml-2 sm:ml-6 mt-3">
                      *없어요 là dạng thân thiện của 없다, dùng trong hội thoại hàng ngày.
                    </p>
                  </div>
                </div>
              </div>

            ),
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
            grammar: (
              <div className="flex flex-col text-[#202020] font-nunito gap-3 md:gap-[18px] text-base md:text-[18px] font-normal leading-normal">
                <h1 className="text-xl md:text-2xl font-bold">
                  <span>Sở hữu cách với "
                    <span className="text-[var(--custom-orange)]">우리</span>" (uri) và "
                    <span className="text-[var(--custom-orange)]">제</span>" (je)
                  </span>
                </h1>

                <p>Khi muốn nói "của tôi" trong tiếng Hàn (như "tên của tôi" hay "nhà của tôi"), bạn sẽ dùng từ gì?</p>
                <p>Không giống tiếng Anh (chỉ cần một từ "my"), tiếng Hàn có hai cách nói "của tôi" rất phổ biến.
                  Việc dùng từ nào sẽ phụ thuộc vào việc bạn đang nói về thứ gì, và bạn đang nói chuyện với ai.</p>
                <p>Hãy cùng tìm hiểu sự khác biệt giữa hai từ 제 (je) và 우리 (uri) nhé.</p>

                <div className="xl:w-[100%] w-full mx-auto flex gap-16 xl:flex-row flex-col">
                  <PurpleFlashCard
                    header="제 (je)"
                    className="text-sm font-medium flex-1 h-full">
                    <div className="text-[16px] md:text-[18px] text-[#202020] font-nunito font-normal leading-normal">
                      <p>Là dạng khiêm tốn của “내 (nae)” – nghĩa là “của tôi”.</p>
                      <ul className="list-disc pl-5 md:pl-7 mt-2 space-y-4">
                        <li><b>Dùng cho:</b> vật sở hữu mang tính cá nhân.</li>
                        <li>
                          <b>Ví dụ:</b>
                          <ul className="list-disc pl-5 md:pl-7 mt-2">
                            <li>제 이름 → Tên của tôi</li>
                            <li>제 책 → Sách của tôi</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-3 md:mt-4">
                      <TuKhoa className="text-[#202020] font-nunito text-[18px] font-normal leading-normal">
                        <b>Từ khóa:</b>  Cá nhân, Khiêm tốn, Lịch sự.
                      </TuKhoa>
                    </div>
                  </PurpleFlashCard>

                  <PurpleFlashCard
                    header="우리 (uri)"
                    className="text-sm font-medium flex-1 h-full">
                    <div className="text-[16px] md:text-[18px] text-[#202020] font-nunito font-normal leading-normal">
                      <p>Nghĩa gốc là “của chúng tôi”, nhưng được dùng ngay cả khi chỉ nói về chính bản thân mình.</p>
                      <ul className="list-disc pl-5 md:pl-7 mt-2">
                        <li><b>Dùng cho: </b>các điều thân thuộc, danh từ mang tính tập thể (gia đình, nhà, trường, đất nước).</li>
                        <li><b>Ví dụ: </b>
                          <ul className="list-disc pl-5 md:pl-7 mt-2">
                            <li>우리 가족 → Gia đình tôi</li>
                            <li>우리 나라 → Đất nước tôi</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="">
                      <TuKhoa className="text-[#202020] font-nunito text-[18px] font-normal leading-normal">
                        <b>Từ khóa:</b>  Tập thể, Gắn bó, Thân thuộc
                      </TuKhoa>
                    </div>

                  </PurpleFlashCard>
                </div>

                <MeoNho className="mt-10">
                  <b>Mẹo nhỏ:</b> Khi nói về người thân, nhà, trường, ưu tiên dùng 우리.
                  Còn khi nói về đồ vật, tài sản cá nhân, dùng 제.
                  Nói "우리 어머니" (mẹ của chúng tôi/tôi) nghe sẽ tự nhiên và thân thuộc hơn là "제 어머니".
                </MeoNho>


              </div>
            ),
          },
          {
            id: 2,
            title: "Từ vựng họ hàng",
            status: "locked",
            targets: [],
            grammar: (
              <div className="flex flex-col items-start gap-[18px] p-10 self-stretch text-[#202020] font-nunito text-[18px] font-normal leading-normal">
                <h1 className="text-xl md:text-2xl font-bold">
                  <span>
                    Cấu trúc sở hữu:{" "}
                    <span className="text-[var(--custom-green)]">[Danh từ]</span>{" "}
                    + <span className="text-[var(--custom-orange)]">이/가</span>{" "}
                    <span className="text-[var(--custom-purple)]">있다/없다</span>
                  </span>
                </h1>

                <p>Đây là cấu trúc cơ bản để nói "Có/Không có cái gì đó".</p>
                <span><b>[Danh từ] + 이 있다/없다: </b>Dùng khi danh từ kết thúc bằng phụ âm (patchim).</span>
                <ul className="list-disc pl-7 mt-2">
                  <li>책이 있어요. (Tôi có sách.) <b>- 책 (chaek)</b> kết thúc bằng 'ㄱ'.</li>
                </ul>
                <span><b>[Danh từ] + 가 있다/없다: </b>Dùng khi danh từ kết thúc bằng nguyên âm.</span>
                <ul className="list-disc pl-7 mt-2">
                  <li>친구가 없어요. (Tôi không có bạn.) <b>- 친구 (chingu)</b> kết thúc bằng nguyên âm '우'.</li>
                </ul>

                <div className="flex flex-col items-start gap-[10px] p-5 w-full rounded-[10px] bg-[#F4FAEE]">
                  <span className="text-green font-bold">Ví dụ:</span>
                  <span>저는 친구가 있어요. (Tôi có bạn bè.)</span>
                  <ul className="list-disc pl-9">
                    <li>Chủ thể sở hữu: 저 (Tôi) + 는</li>
                    <li>Đối tượng bị sở hữu: 친구 (Bạn bè) + 가</li>
                    <li>Động từ sở hữu: 있어요 (Có)</li>
                  </ul>
                </div>



              </div>
            ),
          },
          {
            id: 3,
            title: "Trò chuyện hằng ngày",
            status: "locked",
            targets: [],
            grammar: (
              <div className="flex flex-col items-start gap-[18px] p-10 self-stretch text-[#202020] font-nunito text-[18px] font-normal leading-normal">
                <h1 className="text-xl md:text-2xl font-bold">
                  <span>
                    Đuôi câu thân mật, lịch sự: {" "}
                    <span className="text-[var(--custom-orange)]">-이에요 / -예요</span>{" "}
                  </span>
                </h1>

                <p>Ở Chủ đề 1, bạn đã học đuôi câu trang trọng <b>"-입니다".</b>
                  Bây giờ, chúng ta sẽ học một đuôi câu phổ biến hơn trong giao tiếp hàng ngày:
                  <b>-이에요 / -예요.</b> Cả hai đều có nghĩa là "là".</p>

                <span><b>[Danh từ] + -이에요</b> (ieyo): Dùng khi gốc danh từ kết thúc bằng phụ âm (patchim).</span>
                <ul className="list-disc pl-7">
                  <li>이것은 책이에요. (Đây là quyển sách.)</li>
                  <li>우리 가족이에요. (Đây là gia đình tôi.)</li>
                </ul>

                <span><b>[Danh từ] + -예요</b>(yeyo): Dùng khi danh từ kết thúc bằng nguyên âm.</span>
                <ul className="list-disc pl-7">
                  <li>저는 학생이에요. (Tôi là học sinh.)</li>
                  <li>우리 엄마예요. (Đây là mẹ tôi.)</li>
                </ul>

                <div className="flex flex-col items-start gap-[10px] p-5 w-full rounded-[10px] bg-[#F4FAEE]">
                  <span className="text-green font-bold">Ví dụ:</span>
                  <ul className="list-disc pl-7">
                    <li>우리 가족은 최고예요! (Gia đình chúng ta là tuyệt nhất!)</li>
                    <li>최고 (choego) kết thúc bằng nguyên âm 'ㅗ', nên kết hợp với -예요.</li>
                  </ul>
                </div>





              </div>

            ),
          },
          {
            id: 4,
            title: "Kết nối bạn bè",
            status: "locked",
            targets: [],
            grammar: (
              <div className="flex flex-col items-start gap-[18px] p-10 self-stretch text-[#202020] font-nunito text-[18px] font-normal leading-normal">
                <h1 className="text-xl md:text-2xl font-bold">
                  <span>
                    Diễn đạt lòng biết ơn với "
                    <span className="text-[var(--custom-orange)]">늘</span>
                    " (neul) và "
                    <span className="text-[var(--custom-orange)]">항상</span>
                    " (hangsang)
                  </span>
                </h1>

                <p>Khi muốn diễn đạt lòng biết ơn một cách sâu sắc,
                  thể hiện rằng đó là sự trân trọng kéo dài chứ không phải cảm xúc nhất thời,
                  bạn có thể thêm các phó từ "luôn luôn" vào trước lời cảm ơn.</p>
                <p>Trong tiếng Hàn, hai từ phổ biến nhất để làm điều này là <b>늘</b> (neul) và <b>항상</b> (hangsang).</p>

                <div className="xl:w-[100%] w-full mx-auto flex gap-16 xl:flex-row flex-col">
                  <PurpleFlashCard
                    header="늘 (neul)"
                    className="text-sm font-medium flex-1 h-full flex flex-col justify-between">
                    <div className="text-[16px] md:text-[18px] text-[#202020] font-nunito font-normal leading-normal">
                      <span>Mang nghĩa "luôn luôn".</span>
                      <ul className="list-disc pl-5 md:pl-7 mt-2 space-y-4">
                        <li><b>Nhấn mạnh: </b>trạng thái (cảm xúc) liên tục.</li>
                        <li><b>Sắc thái:</b> Tạo cảm giác tình cảm, gần gũi và có phần văn thơ. </li>
                        <li><b>Ví dụ:</b> 늘 고맙습니다 → (Em/Con) luôn biết ơn.</li>
                      </ul>
                    </div>

                    <TuKhoa className="text-[#202020] font-nunito text-[18px] font-normal leading-normal mt-[50px]">
                      <b>Từ khóa:</b>  Liên tục, Tình cảm, Gần gũi.
                    </TuKhoa>
                  </PurpleFlashCard>

                  <PurpleFlashCard
                    header="항상 (hangsang)"
                    className="text-sm font-medium flex-1 h-full flex flex-col justify-between">
                    <div className="text-[16px] md:text-[18px] text-[#202020] font-nunito font-normal leading-normal">
                      <span>Mang nghĩa "luôn luôn".</span>
                      <ul className="list-disc pl-5 md:pl-7 mt-2 space-y-4">
                        <li><b>Nhấn mạnh: </b>tần suất, sự lặp lại (thói quen). Mang nghĩa "lần nào cũng vậy".</li>
                        <li><b>Sắc thái:</b> Trung tính và đa dụng, dùng được trong mọi hoàn cảnh (cả thân mật và trang trọng).</li>
                        <li><b>Ví dụ:</b> 항상 감사합니다 → (Tôi luôn luôn [lần nào cũng] cảm ơn.)</li>
                      </ul>
                    </div>

                    <TuKhoa className="text-[#202020] font-nunito text-[18px] font-normal leading-normal">
                      <b>Từ khóa:</b>  Thói quen, Lặp lại, Đa dụng.
                    </TuKhoa>
                  </PurpleFlashCard>
                </div>

                <div className="flex p-[30px] flex-col items-start gap-[18px] self-stretch rounded-[10px] border-2 border-[#D9D9D9">

                  <b>Phân tích sâu hai ví dụ</b>
                  <span>Mặc dù cả hai đều đúng, nhưng chúng tạo ra những sắc thái khác nhau một chút:</span>
                  {/* Dùng 늘 */}
                  <ul className="list-disc pl-7">
                    <li>
                      <b>Dùng "늘" (neul):</b>
                      <ul className="list-disc pl-7">
                        <li>Câu nói: 늘 고맙습니다.</li>
                        <li>Ngụ ý: "Lòng biết ơn của tôi dành cho bạn là một trạng thái liên tục".</li>
                        <li>Trọng tâm: Nhấn mạnh vào cảm xúc (trạng thái không đổi).
                          Thường mang lại cảm giác tình cảm, gần gũi hơn.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  {/* Dùng 항상 */}
                  <ul className="list-disc pl-7">
                    <li>
                      <b>Dùng "항상" (hangsang):</b>
                      <ul className="list-disc pl-7">
                        <li>Câu nói: 항상 감사합니다.</li>
                        <li>Ngụ ý: "Lần nào bạn giúp tôi cũng cảm ơn".</li>
                        <li>Trọng tâm: Nhấn mạnh vào hành động (tần suất lặp lại).
                          Đây là cách nói phổ biến và an toàn trong hầu hết các tình huống.
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <MeoNho>
                    <b>Mẹo nhỏ:</b> Dùng <b>항상</b> khi bạn biết ơn về những lần họ giúp,
                    và dùng <b>늘</b> khi bạn biết ơn vì sự tồn tại/sự hỗ trợ liên tục của họ.
                  </MeoNho>
                </div>
              </div>

            ),
          },
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
          {
            id: 1,
            title: "Số đếm cơ bản",
            status: "locked",
            targets: [],
            grammar: (
              <div className="flex flex-col text-[#202020] font-nunito gap-3 md:gap-[18px] text-base md:text-[18px] font-normal leading-normal">
                <h1 className="text-xl md:text-2xl font-bold">
                  Quy tắc biến đổi số điểm khi có đơn vị đi kèm
                </h1>

                <p>
                  Đây là một quy tắc cực kỳ quan trọng. Khi các số 하나 (1), 둘 (2), 셋 (3), 넷 (4) đứng trước một danh từ đếm (như cái, người, giờ), chúng sẽ bị biến đổi, <b>lược bỏ phụ âm cuối.</b>
                </p>

                <p>
                  Trong tiếng Hàn, hai từ phổ biến nhất để làm điều này là <span className="font-bold">블</span> (neul) và <span className="font-bold">항상</span> (hangsang).
                </p>

                {/* Bảng quy tắc */}
                <div className="overflow-hidden rounded-lg border border-gray-300 ">
                  <table className="min-w-full divide-y divide-gray-300 items-start">
                    <thead className="text-[18px]">
                      <tr>
                        <th className="px-6 py-3 text-left font-medium border-r border-gray-300">
                          <b>Số đếm</b>
                        </th>
                        <th className="px-6 py-3 text-left font-medium">
                          <b>Số đếm đi kèm đơn vị</b>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300 text-[18px]">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium border-r border-gray-300">
                          하나 (hana)
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap ">
                          한 (han)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium  border-r border-gray-300">
                          듣 (dul)
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          두 (du)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium  border-r border-gray-300">
                          셋 (set)
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          세 (se)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrapfont-medium border-r border-gray-300">
                          빛 (net)
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          네 (ne)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium border-r border-gray-300">
                          다섯 (daseot) trở đi
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Giữ nguyên
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>


                {/* Ví dụ */}
                <div className="flex flex-col items-start gap-[10px] p-5 w-full rounded-[10px] bg-[#F4FAEE]">
                  <span className="text-green font-bold">Ví dụ:</span>
                  <ul className="list-disc pl-7">
                    <li>Một người:
                      <ul className="list-disc pl-7">
                        <li>하나 사람 (hana salam) <b className="text-[#BB3030]">(SAI)</b></li>
                        <li>한 명* (han myeong) <b className="text-[#6BA823]">(ĐÚNG)</b></li>
                      </ul>
                    </li>
                    <li>Hai giờ:
                      <ul className="list-disc pl-7">
                        <li>둘 시간 (dul sigan) <b className="text-[#BB3030]">(SAI)</b></li>
                        <li>두 시* (du si) <b className="text-[#6BA823]">(ĐÚNG)</b></li>
                      </ul>
                    </li>
                    <li>Ba cái:
                      <ul className="list-disc pl-7">
                        <li>셋 개 (set gae) <b className="text-[#BB3030]">(SAI)</b></li>
                        <li>세 개 (se gae) <b className="text-[#6BA823]">(ĐÚNG)</b></li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <p className="text-[#202020] font-nunito text-[16px] italic font-normal leading-normal">
                  * Khi đếm, một số danh từ (như "người", "giờ") phải dùng "đơn vị đếm" riêng (như 명, 시).
                </p>

                <div className="w-full h-[1px] bg-[#D9D9D9]"></div>

                <p>Bạn sẽ thấy quy tắc này được áp dụng liên tục trong các bài tiếp theo!</p>

              </div>

            ),
          },
          {
            id: 2,
            title: "Đếm giờ & phút",
            status: "locked",
            targets: [],
            grammar: (
              <div className="flex flex-col text-[#202020] font-nunito gap-3 md:gap-[18px] text-base md:text-[18px] font-normal leading-normal">
                <h1 className="text-xl md:text-2xl font-bold">
                  1. Cách nói giờ: {" "}
                  <span className="text-[var(--custom-green)]">[Số Thuần Hàn đã biến đổi]</span>{" "}
                  + <span className="text-[var(--custom-green)]">시 (si)</span>
                </h1>

                <p>Để nói về "giờ", chúng ta áp dụng quy tắc đã học ở Bài 1.</p>

                <p><b>Công thức:</b> Số Thuần Hàn (한, 두, 세, 네, 다섯...) + 시 (giờ)</p>
                <b>Ví dụ:</b>

                {/* Bảng quy tắc */}
                <div className="overflow-hidden rounded-lg border border-gray-300 ">
                  <table className="min-w-full divide-y divide-gray-300 items-start">
                    <thead className="text-[18px]">
                      <tr>
                        <th className="px-6 py-3 text-left font-medium border-r border-gray-300">
                          <b>Tiếng Việt</b>
                        </th>
                        <th className="px-6 py-3 text-left font-medium">
                          <b>Tiếng Hàn</b>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300 text-[18px]">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium border-r border-gray-300">
                          1 giờ
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap ">
                          한 시 (han si)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium  border-r border-gray-300">
                          2 giờ
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          두 시 (du si)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium  border-r border-gray-300">
                          3 giờ
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          세 시 (se si)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrapfont-medium border-r border-gray-300">
                          4 giờ
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          네 시 (ne si)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium border-r border-gray-300">
                          5 giờ
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          다섯 시 (daseot si)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* 2 */}
                <h1 className="text-xl md:text-2xl font-bold">
                  2. Câu hỏi giờ: {" "}
                  <span className="text-[var(--custom-orange)]">몇</span>{" "}
                  <span className="text-[var(--custom-green)]">시</span>
                  <span className="text-[var(--custom-orange)]">예요</span>/{" "}
                  <span className="text-[var(--custom-green)]">시</span>
                  <span className="text-[var(--custom-orange)]">입니까</span>?
                </h1>

                <p>Để hỏi "Mấy giờ rồi?", ta dùng từ để hỏi 몇 (myeot - mấy, bao nhiêu)</p>

                {/* Câu hỏi*/}
                <div>
                  <b>Câu hỏi: </b>
                  <ul className="list-disc pl-7">
                    <li>Tiếng Hàn: 지금 몇 시예요/ 시입니까?</li>
                    <li>
                      Phiên âm:
                      <ul className="list-disc pl-9">
                        <li>Jigeum myeot siyeyo?</li>
                        <li>Jigeum myeot si-imnikka?</li>
                      </ul>
                    </li>
                    <li>Dịch nghĩa: Bây giờ là mấy giờ rồi ạ? (thân mật, lịch sự)</li>
                  </ul>
                </div>

                {/* Câu trả lời*/}
                <div>
                  <b>Câu trả lời: </b>
                  <ul className="list-disc pl-7">
                    <li>Tiếng Hàn: 지금 [Số giờ] 시예요 / 시입니다.</li>
                    <li>
                      Phiên âm:
                      <ul className="list-disc pl-9">
                        <li>Jigeum ... siyeyo.</li>
                        <li>Jigeum ... si-imnida.</li>
                      </ul>
                    </li>
                    <li>Dịch nghĩa: Bây giờ là [Số giờ] giờ ạ.</li>
                  </ul>
                </div>

                {/* Ví dụ */}
                <div className="flex flex-col items-start gap-[10px] p-5 w-full rounded-[10px] bg-[#F4FAEE]">
                  <span className="text-green font-bold">Ví dụ:</span>
                  <p>A: 몇 시예요? (Bây giờ là mấy giờ vậy?)</p>
                  <p>B: 지금 세 시입니다. (Bây giờ là 3 giờ.)</p>
                </div>

                <div className="flex p-5 md:p-[30px] flex-col items-start gap-[18px] self-stretch rounded-[10px] border-2 border-[#D9D9D9]">
                  <b>Câu trả lời tương ứng với câu hỏi</b>

                  <div>
                    <p>...시예요 (siyeyo): Cách trả lời lịch sự, thân thiện (tương ứng với câu hỏi ...예요?).</p>
                    <p>...시입니다 (si-imnida): Cách trả lời trang trọng, khách sáo (tương ứng với câu hỏi ...입니까?).</p>
                  </div>

                  <MeoNho>
                    <b>Mẹo nhỏ:</b> Trong thực tế, người ta vẫn thường dùng đuôi ...입니다 (trang trọng)
                    để trả lời câu hỏi ...예요? (thân mật) như một cách để thể hiện sự tôn trọng.
                  </MeoNho>

                </div>
              </div>
            ),
          },
          {
            id: 3,
            title: "Lịch hằng ngày",
            status: "locked",
            targets: [],
            grammar: (
              <div className="flex flex-col text-[#202020] font-nunito gap-3 md:gap-[18px] text-base md:text-[18px] font-normal leading-normal">
                <h1 className="text-xl md:text-2xl font-bold">
                  Tiểu từ chỉ thời gian "
                  <span className="text-[var(--custom-orange)]">에</span>" (e)
                </h1>

                <p>Để chỉ một hành động xảy ra "vào lúc",
                  "vào" một thời điểm cụ thể, ta gắn tiểu từ "에"
                  vào sau danh từ chỉ thời gian.
                </p>

                <p><b>Công thức:</b> [Danh từ thời gian] + 에</p>

                <div className="flex flex-col items-start gap-[10px] p-5 w-full rounded-[10px] bg-[#F4FAEE]">
                  <span className="text-green font-bold">Ví dụ:</span>
                  <p><b>한 시에 </b>만나요. (Gặp nhau vào lúc 1 giờ.)</p>
                  <p><b>점심시간에 </b>밥을 먹어요. (Ăn cơm vào giờ ăn trưa.)</p>
                  <p><b>내일* </b>만나요. (Gặp nhau vào ngày mai.)</p>
                </div>

                <p className="text-[#202020] font-nunito text-[16px] italic font-normal leading-normal">
                  * Với các từ như 오늘 (hôm nay), 내일 (ngày mai), 지금 (bây giờ),
                  người Hàn thường lược bỏ "에"
                  vì bản thân các từ này đã chỉ rõ thời điểm rồi.
                </p>















              </div>
            ),
          },
          {
            id: 4,
            title: "Lập kế hoạch",
            status: "locked",
            targets: [],
            grammar: (
              <div className="flex flex-col text-[#202020] font-nunito gap-3 md:gap-[18px] text-base md:text-[18px] font-normal leading-normal">
                {/* 1 */}
                <h1 className="text-xl md:text-2xl font-bold">
                  1. Cấu trúc đếm đồ vật: {" "}
                  <span className="text-[var(--custom-green)]">[Danh từ]</span>{" "}
                  + <span className="text-[var(--custom-green)]">[Số Thuần Hàn đã biến đổi]</span>{" "}
                  + <span className="text-[var(--custom-green)]">[Đơn vị đếm]</span>
                </h1>

                <p>Đây là công thức hoàn chỉnh để nói về số lượng của một vật.</p>

                <div className="flex flex-col items-start gap-[10px] p-5 w-full rounded-[10px] bg-[#F4FAEE]">
                  <span className="text-green font-bold">Ví dụ:</span>
                  <p>사과 (táo) + 다섯 (năm) + 개 (quả) → 사과 다섯 개 (năm quả táo)</p>
                  <p>빵 (bánh mì) + 한 (một) + 개 (cái) → 빵 한 개 (một cái bánh mì)</p>
                </div>
                {/* 2 */}
                <h1 className="text-xl md:text-2xl font-bold">
                  2. Cấu trúc yêu cầu/mua hàng: {" "}
                  <span className="text-[var(--custom-green)]">[Danh từ]</span>{" "}
                  + <span className="text-[var(--custom-green)]">[Số lượng]</span>{" "}
                  + <span className="text-[var(--custom-red)]">주</span>
                  <span className="text-[var(--custom-orange)]">세요</span>.
                </h1>

                <p>Kết hợp cấu trúc đếm với <b>"주세요"</b> (juseyo) để tạo thành câu mua hàng hoàn chỉnh.</p>

                <div className="flex flex-col items-start gap-[10px] p-5 w-full rounded-[10px] bg-[#F4FAEE]">
                  <span className="text-green font-bold">Ví dụ:</span>
                  <p>사과 다섯 개 주세요. (Cho tôi năm quả táo.)</p>
                  <p>물 두 병 주세요. (Cho tôi hai chai nước.) (병-byeong: chai)</p>
                </div>
              </div>
            ),
          },
          { id: 5, title: "Bài cuối", status: "final", targets: [] },
        ],
      },
      {
        id: 4,
        title: "...",
        accent: "from-yellow-200 to-yellow-50 text-yellow-800",
        barColor: "bg-yellow-400",
        cta: { label: "...", tone: "accent" },
        lessons: [
          {
            id: 1,
            title: "...",
            status: "locked",
            targets: [],
            grammar: (
              <div className="flex flex-col text-[#202020] font-nunito gap-3 md:gap-[18px] text-base md:text-[18px] font-normal leading-normal">
                <h1 className="text-xl md:text-2xl font-bold">
                  Các đại từ chỉ định: {" "}
                  <span className="text-[var(--custom-orange)]">이거</span>,{" "}
                  <span className="text-[var(--custom-orange)]">그거</span>,{" "}
                  <span className="text-[var(--custom-orange)]">저거</span>
                </h1>

                <p>Trong tiếng Hàn, việc chỉ định vật thể được thực hiện rất chính xác,
                  dựa trên việc vật đó ở gần ai trong cuộc hội thoại (người nói hay người nghe).
                </p>

                {/* Bảng quy tắc */}
                <div className="rounded-lg border border-gray-300 overflow-hidden">
                  <table className="w-full table-auto divide-y divide-gray-300">
                    <thead className="text-[16px] md:text-[18px]">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium border-r border-gray-300">Đại từ</th>
                        <th className="px-4 py-3 text-left font-medium border-r border-gray-300">Nghĩa</th>
                        <th className="px-4 py-3 text-left font-medium border-r border-gray-300">Vị trí</th>
                        <th className="px-4 py-3 text-left font-medium">Ví dụ minh họa</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-300 text-[16px] md:text-[18px]">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap font-medium border-r border-gray-300">
                          이거 (i-geo)
                        </td>
                        <td className="px-4 py-4 font-medium border-r border-gray-300">
                          Cái này
                        </td>
                        <td className="px-4 py-4 font-medium border-r border-gray-300">
                          Vật ở <b>gần người nói</b>
                        </td>
                        <td className="px-4 py-4">
                          [Bạn cầm áo] <b>이거</b> 얼마예요?
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap font-medium border-r border-gray-300">
                          그거 (geu-geo)
                        </td>
                        <td className="px-4 py-4 font-medium border-r border-gray-300">
                          Cái đó
                        </td>
                        <td className="px-4 py-4 font-medium border-r border-gray-300">
                          Vật ở <b>gần người nghe</b>
                        </td>
                        <td className="px-4 py-4">
                          [Người bán cầm áo] <b>그거</b> 주세요.
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap font-medium border-r border-gray-300">
                          저거 (jeo-geo)
                        </td>
                        <td className="px-4 py-4 font-medium border-r border-gray-300">
                          Cái kia
                        </td>
                        <td className="px-4 py-4 font-medium border-r border-gray-300">
                          Vật ở <b>xa cả hai</b>
                        </td>
                        <td className="px-4 py-4">
                          [Chỉ vào mannequin] <b>저거</b> 예뻐요!
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>


                <MeoNho>
                  <b>Mẹo nhỏ ghi nhớ:</b> Chỉ cần nhớ âm tiết đầu.
                </MeoNho>
                <ul className="list-disc pl-7">
                  <li>이 (i-): Mọi thứ gần tôi.</li>
                  <li>그 (geu-): Mọi thứ gần bạn.</li>
                  <li>저 (jeo-): Mọi thứ xa lắc.</li>
                </ul>


              </div>
            ),
          },
          {
            id: 2,
            title: "...",
            status: "locked",
            targets: [],
            grammar: (
              <div className="flex flex-col text-[#202020] font-nunito gap-3 md:gap-[18px] text-base md:text-[18px] font-normal leading-normal">
                <h1 className="text-xl md:text-2xl font-bold">
                  Cấu trúc yêu cầu với nhiều món đồ: {" "}
                  <span className="text-[var(--custom-green)]">[Món 1]</span>{" "}
                  + -<span className="text-[var(--custom-orange)]">하고</span>{" "}
                  + <span className="text-[var(--custom-green)]">[Món 2]</span>{" "}
                  + <span className="text-[var(--custom-red)]">주</span>
                  <span className="text-[var(--custom-orange)]">세요</span>.
                </h1>

                <p>Khi bạn muốn mua nhiều hơn một món đồ,
                  bạn có thể nối các danh từ lại với nhau bằng tiểu từ <b>-하고</b> (hago).
                </p>
                <p>-하고 (hago) có nghĩa là "và", "với". Nó được dùng để nối hai danh từ với nhau.</p>

                <span><b>Công thức:</b> [Danh từ 1]하고 [Danh từ 2] 주세요.</span>

                <div className="flex flex-col items-start gap-[10px] p-5 w-full rounded-[10px] bg-[#F4FAEE]">
                  <span className="text-green font-bold">Ví dụ:</span>
                  <p>콜라 한 병하고 빵 두 개 주세요. (Cho tôi một chai Cola và hai cái bánh mì.)</p>
                  <p>가방하고 모자 주세요. (Cho tôi cái túi và cái mũ.)</p>
                </div>

                <p><b>Lưu ý:</b> "-하고" chủ yếu được dùng trong văn nói. Trong văn viết, người ta thường dùng "-와/과".</p>
              </div>
            ),
          },
          {
            id: 3,
            title: "...",
            status: "final",
            targets: [],
            grammar: (
              <div className="flex flex-col text-[#202020] font-nunito gap-3 md:gap-[18px] text-base md:text-[18px] font-normal leading-normal">
                <h1 className="text-xl md:text-2xl font-bold">
                  Cách chia tính từ đuôi {" "}
                  <span className="text-[var(--custom-orange)]">-아요/어요</span>{" "}
                </h1>

                <p>Trong tiếng Hàn, cả động từ và tính từ đều cần được chia đuôi để hoàn thành câu.
                  Đuôi <b>-아요/어요</b> là cách chia lịch sự, được sử dụng phổ biến nhất trong giao tiếp hàng ngày.
                </p>

                <b>Các bước cơ bản:</b>
                <ul className="list-disc pl-7 space-y-4">
                  <li><b>Bước 1 (Làm sạch):</b> Bỏ đuôi -다 khỏi động từ/tính từ nguyên thể để lấy gốc từ.</li>
                  <li><b>Bước 2 (Xác định):</b> Nhìn vào nguyên âm cuối cùng của gốc từ để áp dụng Quy tắc Hòa âm Nguyên âm dưới đây.</li>
                </ul>

                {/* Bảng quy tắc */}
                <div className="rounded-lg border border-gray-300 overflow-hidden">
                  <table className="w-full table-auto divide-y divide-gray-300 items-start">
                    <thead className="text-[16px] md:text-[18px]">
                      <tr>
                        <th className="px-6 py-3 text-left font-medium border-r border-gray-300">
                          <b>Nguyên tắc</b>
                        </th>
                        <th className="px-6 py-3 text-left font-medium border-r border-gray-300">
                          <b>Gốc từ có chứa nguyên âm ...</b>
                        </th>
                        <th className="px-6 py-3 text-left font-medium border-r border-gray-300">
                          <b>Kết quả</b>
                        </th>
                        <th className="px-6 py-3 text-left font-medium">
                          <b>Ví dụ minh họa</b>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-300 text-[16px] md:text-[18px]">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium border-r border-gray-300">
                          Nguyên âm sáng
                        </td>

                        <td className="px-6 py-4 font-medium border-r border-gray-300">
                          ㅏ hoặc ㅗ (như 좋, 가, 싸)
                        </td>

                        <td className="px-6 py-4 font-medium border-r border-gray-300">
                          Thêm -아요
                        </td>

                        <td className="px-6 py-4">
                          <ul className="list-disc pl-7">
                            <li>좋다 → 좋아요</li>
                            <li>싸다 → 싸요 (Vì ㅏ + 아요 được rút gọn)</li>
                          </ul>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium border-r border-gray-300">
                          Nguyên âm tối
                        </td>

                        <td className="px-6 py-4 font-medium border-r border-gray-300">
                          Các nguyên âm còn lại (như ㅓ, ㅜ, ㅡ, ㅣ, v.v.)
                        </td>

                        <td className="px-6 py-4 font-medium border-r border-gray-300">
                          Thêm -어요
                        </td>

                        <td className="px-6 py-4">
                          <ul className="list-disc pl-7">
                            <li>있다 → 있어요</li>
                            <li>예쁘다 → 예뻐요 (Quy tắc rút gọn đặc biệt)</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            ),
          },
          {
            id: 4,
            title: "...",
            status: "final",
            targets: [],
            grammar: (
              <div className="flex flex-col text-[#202020] font-nunito gap-3 md:gap-[18px] text-base md:text-[18px] font-normal leading-normal">
                <h1 className="text-xl md:text-2xl font-bold">
                  Diễn tả Nguyên nhân - Kết quả với {" "}
                  <span className="text-[var(--custom-orange)]">-아서/어서</span>{" "}
                </h1>

                <p>Để nói "Vì (làm A)... nên (cảm thấy B)", ta sử dụng cấu trúc này.
                  Cấu trúc này dùng để diễn tả nguyên nhân, kết quả,
                  hoặc một hành động xảy ra trước hành động khác.
                </p>
                <p>Quy tắc chia đuôi của nó giống hệt với quy tắc Hòa âm Nguyên âm của đuôi -아요/어요.</p>

                <b>Các bước cơ bản:</b>
                <ul className="list-disc pl-7 space-y-4">
                  <li><b>Bước 1:</b> Bỏ đuôi -다 khỏi gốc từ.</li>
                  <li className="space-y-4">
                    <b>Bước 2:</b> Áp dụng Hòa âm Nguyên âm
                    <ul className="space-y-4">
                      <li>
                        1. Gốc từ có nguyên âm sáng (ㅏ, ㅗ): Thêm -아서
                        <div className="flex flex-col items-start gap-[10px] p-5 w-full rounded-[10px] bg-[#F4FAEE] mt-3">
                          <span className="text-green font-bold">Ví dụ:</span>
                          <p>사다 (mua) → 사 + 아서 → 사서 (vì mua...)</p>
                          <p>보다 (xem) → 보 + 아서 → 봐서 (vì xem... - rút gọn)</p>
                        </div>
                      </li>
                      <li>
                        2. Gốc từ có nguyên âm tối (các nguyên âm còn lại): Thêm -어서
                        <div className="flex flex-col items-start gap-[10px] p-5 w-full rounded-[10px] bg-[#F4FAEE] mt-3">
                          <span className="text-green font-bold">Ví dụ:</span>
                          <p>먹다 (ăn) → 먹 + 어서 → 먹어서 (vì ăn...)</p>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="space-y-4">
                    <b>Bước 3:</b> Bước 3: Ngoại lệ -하다
                    <ul className="list-disc pl-7">
                      <li>Mọi động từ/tính từ có đuôi ~하다 đều được chia thành ~해서.</li>
                    </ul>

                    <div className="flex flex-col items-start gap-[10px] p-5 w-full rounded-[10px] bg-[#F4FAEE]">
                      <span className="text-green font-bold">Ví dụ:</span>
                      <p>쇼핑하다 (mua sắm) → 쇼핑해서 (vì mua sắm...)</p>
                    </div>
                  </li>

                </ul>








              </div>
            ),
          },
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
      "https://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
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
      "https://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
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
      "https://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
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
