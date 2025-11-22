import { LearningCourse, MiniGame, Vocab } from "./types";
import speakerAAvatarUrl from "@/assets/images/lessons/speaker-A.svg";
import speakerBAvatarUrl from "@/assets/images/lessons/speaker-B.svg";
import MeoNho from "@/components/grammar/MeoNho";
import PurpleFlashCard from "@/components/grammar/PurpleFlashCard";
import TuKhoa from "@/components/grammar/TuKhoa";
import BorderedGrammarBox from "../components/grammar/BorderedGrammarBox.jsx";
import GreenExampleBox from "@/components/grammar/GreenExampleBox";
import { BsPersonBoundingBox } from "react-icons/bs";
import {
  FaAppleAlt,
  FaBalanceScale,
  FaBus,
  FaCalendarAlt,
  FaCarSide,
  FaClock,
  FaCloudSun,
  FaCompass,
  FaDollarSign,
  FaHandHoldingHeart,
  FaHeart,
  FaHeartbeat,
  FaRegSmile,
  FaRoad,
  FaRuler,
  FaRunning,
  FaShoppingCart,
  FaStar,
  FaUtensils,
} from "react-icons/fa";
import { FaCloudShowersWater, FaHandshakeSimple } from "react-icons/fa6";
import { GiClothes, GiPartyFlags, GiThreeFriends } from "react-icons/gi";
import { GoNumber } from "react-icons/go";
import { IoHomeSharp } from "react-icons/io5";
import { MdEmojiEmotions, MdOutlineSportsEsports } from "react-icons/md";
import { TbCoins } from "react-icons/tb";
import { WiDaySunnyOvercast } from "react-icons/wi";

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
        topicTitleClassName:
          "bg-[#fff1c9] border-[var(--custom-orange)] text-[var(--custom-orange)]",
        mainColor: "--custom-orange",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Fman-wave-hand-and-box.png?alt=media&token=9a7966c3-364f-49f1-9e23-43e9bee744c6",
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Fman-thinking-and-box.png?alt=media&token=e0be2422-b7c4-4a73-bb4a-491ce3f2d444",
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Fman-louding.png?alt=media&token=6e8d4ab2-5d47-42e9-8f45-9a067b2c43ce",
        ],
        cta: { label: "Tiếp tục", tone: "neutral" },
        lessons: [
          {
            id: 1,
            title: "Chào hỏi cơ bản",
            icon: <FaHandshakeSimple />,
            lessonLink: "/courses/1/topics/1/lessons/1",
            miniGameLink: "/courses/1/topics/1/lessons/1/minigame",
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
                        "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94%20.m4a?alt=media",
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
            minigameQuantity: 9,
          },
          {
            id: 2,
            title: "Xưng hô và giới thiệu",
            icon: <BsPersonBoundingBox />,
            lessonLink: "/courses/1/topics/1/lessons/2",
            miniGameLink: "/courses/1/topics/1/lessons/2/minigame",
            status: "completed",
            targets: [
              "Giới thiệu tên và nghề nghiệp (học sinh) của mình một cách lịch sự.",
              "Hiểu và sử dụng đúng cấu trúc câu: 'A là B'.",
              "Phân biệt và sử dụng hai cách xưng 'Tôi' là 저 (jeo) và 나 (na).",
            ],
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
            grammar: (
              <>
                <p className="font-semibold text-xl" data-node-id="751:5766">
                  <span>Cấu trúc giới thiệu: </span>
                  <span className="text-[var(--custom-green)]">[Danh từ]</span>
                  <span> + </span>
                  <span className="text-[var(--custom-orange)]">은/는</span>
                  <span> + </span>
                  <span className="text-[var(--custom-green)]">[Danh từ]</span>
                  <span> + </span>
                  <span className="text-[var(--custom-red)]">입니다.</span>
                </p>
                <p className="font-medium text-[18px] my-3">
                  Đây là cấu trúc "A là B" <b>cơ bản và quan trọng nhất</b>{" "}
                  trong tiếng Hàn.
                </p>
                <p className="font-medium text-[18px] my-3">
                  <b>은 (eun) / 는 (neun):</b> Là <b>các tiểu từ chủ đề</b> đứng
                  sau chủ ngữ dùng để <b>nhấn mạnh ai hoặc cái gì</b> là chủ đề
                  của câu.
                  <ul className="list-disc list-inside">
                    <li className="font-medium text-[18px] my-3">
                      Dùng <b>은 (eun)</b> nếu danh từ kết thúc bằng{" "}
                      <b>phụ âm</b>. Ví dụ: 학생은 (học sinh)
                    </li>
                    <li className="font-medium text-[18px] my-3">
                      Dùng <b>는 (neun)</b> nếu danh từ kết thúc bằng{" "}
                      <b>nguyên âm</b>. Ví dụ: 저는 (tôi)
                    </li>
                  </ul>
                  <p className="font-medium text-[18px] my-3">
                    <b>입니다 (imnida):</b> Luôn đứng ở cuối câu, có nghĩa là
                    "là".
                  </p>
                  <GreenExampleBox className="my-4">
                    <p className="">저는 학생입니다. (Tôi là học sinh.)</p>
                    <ul className="list-disc list-inside ml-4 mb-3">
                      <li className="">
                        저 (Tôi) + 는 + 학생 (học sinh) + 입니다 (là).
                      </li>
                      <li className="">
                        "저" kết thúc bằng nguyên âm "ㅓ" nên đi với "는".
                      </li>
                    </ul>
                    <p className="">
                      제 이름은 민아입니다. (Tên của tôi là Mina.)
                    </p>
                    <ul className="list-disc list-inside ml-4 mb-3">
                      <li className="">
                        제 이름 (Tên của tôi) + 은 + 민아 (Mina) + 입니다 (là).
                      </li>
                      <li className="">
                        "이름" kết thúc bằng phụ âm "ㅁ" nên đi với "은"
                      </li>
                    </ul>
                  </GreenExampleBox>
                </p>
              </>
            ),
          },
          {
            id: 3,
            title: "Giới thiệu tên và sở thích",
            icon: <MdOutlineSportsEsports />,
            lessonLink: "/courses/1/topics/1/lessons/3",
            miniGameLink: "/courses/1/topics/1/lessons/3/minigame",
            status: "available",
            targets: [
              "Hỏi tên của người khác một cách lịch sự.",
              "Hỏi và trả lời những câu đơn giản về sở thích.",
              "Sử dụng thành thạo câu nghi vấn 'A là B 'phải không?",
              "Hiểu và dùng đúng tiểu từ tân ngữ 을/를.",
            ],
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
                        "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94%20%EC%9D%B4%EB%A6%84%EC%9D%B4%20%EB%AC%B4%EC%97%87%EC%9E%85%EB%8B%88%EA%B9%8C%20.mp3?alt=media&token=5e06de31-f278-494c-a879-e97c44a2b27b",
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
                        "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94%20%EC%9D%B4%EB%A6%84%EC%9D%B4%20%EB%AC%B4%EC%97%87%EC%9E%85%EB%8B%88%EA%B9%8C%20.mp3?alt=media&token=5e06de31-f278-494c-a879-e97c44a2b27b",
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
                        "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F%EC%A0%80%EB%8A%94%20%EB%82%A8%EC%9E%85%EB%8B%88%EB%8B%A4%20%EB%AC%B4%EC%97%87%EC%9D%84%20%EC%A2%8B%EC%95%84%ED%95%98%EC%84%B8%EC%9A%94.m4a?alt=media&token=a29dfd4d-0a7e-4fb1-a82a-2c5da9f22d95",
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
                        "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F%EC%A0%80%EB%8A%94%20%ED%95%9C%EA%B5%AD%EC%96%B4%20%EA%B3%B5%EB%B6%80%EA%B0%80%20%EC%A2%8B%EC%95%84%EC%9A%94%20.m4a?alt=media&token=42352134-effe-412e-9cb9-8b2d776691a2",
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
              correctAnswerIndex: 0,
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
            targets: [],
            grammar: (
              <div className="flex flex-col text-[#202020] font-nunito gap-3 md:gap-[18px] text-base md:text-[18px] font-normal leading-normal">
                {/* Phần 1 */}
                <h1 className="text-xl md:text-2xl font-bold">
                  <span>
                    1. Câu hỏi "Cái gì?":{" "}
                    <span className="text-[var(--custom-green)]">
                      [Danh từ]
                    </span>{" "}
                    + <span className="text-[var(--custom-orange)]">이/가</span>{" "}
                    + <span className="text-[var(--custom-green)]">무엇</span>
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
                      Dùng <span className="font-bold">이 (i)</span> nếu danh từ
                      kết thúc bằng <span className="font-bold">phụ âm</span>.
                      Ví dụ: 이름이... (Tên là ...)
                    </li>
                    <li>
                      Dùng <span className="font-bold">가 (ga)</span> nếu danh
                      từ kết thúc bằng{" "}
                      <span className="font-bold">nguyên âm</span>. Ví dụ:
                      저기가... (Chỗ kia là...)
                    </li>
                  </ul>
                  <br></br>
                  <div>
                    <span className="font-bold">무엇입니까?</span>{" "}
                    (mueos-ibnikka) nghĩa là "Là gì?" (cách nói lịch sự, trang
                    trọng).
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
                    <span className="text-[var(--custom-green)]">
                      [Danh từ]
                    </span>{" "}
                    + <span className="text-[var(--custom-orange)]">이/가</span>{" "}
                    +{" "}
                    <span className="text-[var(--custom-purple)]">좋아요</span>.
                  </span>
                </h1>

                <div>
                  <p>Cấu trúc này có nghĩa là "Cái gì đó thì tốt/thích".</p>
                  <p>
                    Chủ thể của sự "thích" ở đây là danh từ được gắn với 이/가.
                  </p>
                </div>

                <div className="flex p-4 md:p-5 flex-col items-start gap-2 md:gap-[10px] rounded-[10px] bg-[#F4FAEE]">
                  <span className="text-green font-bold">Ví dụ:</span>
                  <ul className="list-disc pl-5 md:pl-7">
                    <li>
                      한국어 공부가 좋아요. (Việc học tiếng Hàn thì thích.)
                    </li>
                    <li>음악이 좋아요. (Âm nhạc thì hay/ thích.)</li>
                  </ul>
                </div>

                {/* Phần phân biệt */}
                <div className="flex flex-col items-start self-stretch gap-3 md:gap-[18px] p-4 md:p-[30px] border-2 border-gray-300 rounded-lg">
                  <span className="font-bold">
                    Phân biệt hai cách nói thích
                  </span>

                  <div className="w-full">
                    <span className="font-bold">
                      1. [Sự vật] + 이/가 + 좋아요
                    </span>
                    <ul className="list-disc pl-5 md:pl-7">
                      <li>Bình luận về sự vật.</li>
                      <li>Ví dụ: 커피가 좋아요. (Cà phê ngon.)</li>
                    </ul>

                    <div className="mt-3 md:mt-4">
                      <span className="font-bold">
                        2. [Người] + 은/는 + [Sự vật] + 을/를 + 좋아해요
                      </span>
                      <ul className="list-disc pl-5 md:pl-7">
                        <li>Nói về hành động của người.</li>
                        <li>
                          Ví dụ: 저는 커피를 좋아해요. (Tôi thích cà phê.)
                        </li>
                      </ul>
                      <p className="text-black text-sm italic font-normal leading-normal mt-2">
                        Bạn sẽ được học về cấu trúc này kỹ hơn trong bài 4 của
                        chủ đề 8
                      </p>
                    </div>
                  </div>

                  {/* Mẹo nhỏ */}
                  <div className="font-normal text-base md:text-[18px] p-4  w-full">
                    <MeoNho>
                      <b>Mẹo nhỏ: </b>
                      <span>
                        Khi giao tiếp, dùng …
                        <span className="font-bold">이/가 좋아요</span> để khen
                        hoặc nói bạn thích một thứ gì đó — cách nói tự nhiên và
                        phổ biến lắm đấy!
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
            icon: <FaHandshakeSimple />,
            lessonLink: "/courses/1/topics/1/lessons/4",
            miniGameLink: "/courses/1/topics/1/lessons/4/minigame",
            status: "locked",
            targets: [
              "Học viên có thể nói câu thể hiện khả năng và tự khích lệ bản thân",
              "Học viên có thể sử dụng cấu trúc tương lai",
              "Học viên có thể sử dụng các phó từ chỉ thời gian",
            ],
            highlight: true,
            vnDialogue: {
              mainRole: "B",
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Việc học tiếng Hàn khó quá" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "KHÔNG! Bạn có thể làm được điều đó!" }],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Thật không?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "Vâng! Tôi sẽ luôn cố gắng! Cố lên!" }],
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
                      text: "한국어 공부, 어려워요",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94%20.m4a?alt=media",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "아니에요! 할 수 있어요!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F%EC%95%84%EB%8B%88%EC%97%90%EC%9A%94%20%ED%95%A0%20%EC%88%98%20%EC%9E%88%EC%96%B4%EC%9A%94%20.m4a?alt=media",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "정말요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F%EC%A0%95%EB%A7%90%EC%9A%94%20.m4a?alt=media",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "네! 언제나 노력할 거예요! 파이팅!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F%EB%84%A4%20%EC%96%B8%EC%A0%9C%EB%82%98%20%EB%85%B8%EB%A0%A5%ED%95%A0%20%EA%B1%B0%EC%98%88%EC%9A%94%20%ED%8C%8C%EC%9D%B4%ED%8C%85%20.m4a?alt=media&token=09532f1a-8253-4e10-bfa8-06ddcc675a84",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "파이팅! (Fighting!) - Lời cổ vũ quốc dân",

              content: `
    Bạn có nghe thấy từ <b>Fighting!</b> (phát âm kiểu Hàn là<b> 파이팅!</b> - paiting!) trong phim ảnh hay các show giải trí Hàn Quốc không? 
    <li>Đây là một từ vay mượn từ tiếng Anh nhưng đã trở thành một nét văn hóa đặc trưng.</li>
     <li><b>파이팅!</b> được dùng để cổ vũ, khích lệ tinh thần người khác hoặc chính bản thân mình trong mọi tình huống:<b> trước một kỳ thi, một trận đấu, một buổi phỏng vấn, hay đơn giản là khi bắt đầu một ngày mới. 
Nó không mang nghĩa "đánh nhau", mà là "Cố lên!", "Làm tốt nhé!".</b></li>

  `,
            },
            funQuiz: {
              question:
                "Bạn của bạn sắp có bài kiểm tra tiếng Hàn. Bạn sẽ nói gì để cổ vũ họ?",
              options: ["안녕하세요!", "미안합니다", "파이팅!"],
              correctAnswerIndex: 2,
              explanation:
                " 파이팅! là một từ mượn từ tiếng Anh fighting, nhưng trong tiếng Hàn nó không mang nghĩa 'chiến đấu' mà được dùng như một khẩu hiệu khích lệ, cổ vũ tinh thần. Người Hàn thường nói '파이팅!' để động viên ai đó trước khi làm việc khó khăn, thi cử, hoặc khi cần thêm năng lượng tinh thần.",
            },
            vocabIds: [10, 11, 12, 13],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question: "Câu nào thể hiện khả năng làm việc gì đó?",
                  options: ["할 수 있어요", "노력할 거예요", "오늘", "언제나"],
                  correctAnswerIndex: 0,
                  explanation:
                    "'할 수 있어요' có nghĩa là 'có thể làm được', dùng để diễn tả khả năng thực hiện hành động.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Từ nào dùng để chỉ thời điểm hiện tại?",
                  options: ["언제나", "오늘", "노력할 거예요", "할 수 있어요"],
                  correctAnswerIndex: 1,
                  explanation:
                    "'오늘' có nghĩa là 'hôm nay', là danh từ chỉ thời gian hiện tại.",
                },
                {
                  questionType: "fillInBlank",
                  question: "저는 더 <<blank>>. (Tôi sẽ cố gắng hơn.)",
                  correctAnswer: "노력할 거예요",
                  explanation:
                    "'노력할 거예요' là cách nói lịch sự ở thì tương lai của '노력하다' (nỗ lực, cố gắng).",
                },
                {
                  questionType: "dropDown",
                  question: "<<dropdown>> 수 있어요. (Có thể làm được.)",
                  options: ["할", "하", "하겠"],
                  correctAnswerIndex: 0,
                  explanation:
                    "'할 수 있어요' là cấu trúc diễn tả khả năng làm việc gì đó.",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Từ nào mang nghĩa 'luôn luôn' hoặc 'lúc nào cũng'?",
                  options: ["오늘", "할 수 있어요", "언제나", "노력할 거예요"],
                  correctAnswerIndex: 2,
                  explanation:
                    "'언제나' là phó từ chỉ tần suất, mang nghĩa 'luôn luôn', 'mọi lúc'.",
                },
              ],
            },
            grammar: (
              <ul className="list-decimal list-inside">
                <li className="font-semibold text-xl">
                  <span className="font-semibold text-xl mb-3">
                    Câu hỏi "Cái gì?":{" "}
                    <span className="text-[var(--custom-green)]">
                      [Danh từ]
                    </span>
                    <span> + </span>
                    <span className="text-[var(--custom-orange)]">이/가</span>
                    <span> + </span>
                    <span className="text-[var(--custom-orange)]">무엇</span>
                    <span className="text-[var(--custom-red)]">입니까</span>?
                  </span>
                  <p className="font-medium text-[18px] my-3">
                    Đây là cấu trúc dùng để hỏi "A là cái gì?".
                  </p>
                  <p className="font-medium text-[18px]">
                    <b>이 (i) / 가 (ga):</b> Là các <b>tiểu từ chủ ngữ</b>.
                    <ul className="list-disc list-inside mb-3">
                      <li className="font-medium text-[18px]">
                        Dùng <b>이 (i)</b> nếu danh từ kết thúc bằng{" "}
                        <b>phụ âm</b>. Ví dụ: 이름이... (Tên là ...)
                      </li>
                      <li className="font-medium text-[18px]">
                        Dùng <b>가 (ga)</b> nếu danh từ kết thúc bằng{" "}
                        <b>nguyên âm</b>. Ví dụ: 저기가... (Chỗ kia là...)
                      </li>
                    </ul>
                    <p className="font-medium text-[18px]">
                      <b>무엇입니까?</b> (mueos-ibnikka) nghĩa là "Là gì?" (cách
                      nói lịch sự, trang trọng).
                    </p>
                    <ul className="list-disc list-inside mb-3">
                      <li className="font-medium text-[18px]">무엇 = cái gì</li>
                      <li className="font-medium text-[18px]">
                        입니까 = là (dạng hỏi của "이다")
                      </li>
                    </ul>
                  </p>

                  <GreenExampleBox className="my-3">
                    <ul className="list-disc list-inside ml-4 mb-3">
                      <li className="">이름이 무엇입니까? (Tên là gì?).</li>
                      <li className="">
                        이것이 무엇입니까? (Cái này là cái gì?)
                      </li>
                    </ul>
                  </GreenExampleBox>
                </li>

                <hr className="h-[2px] w-full rounded bg-[#D9D9D9] my-3" />
                <li className="font-semibold text-xl">
                  <span className="font-semibold text-xl mb-3">
                    Nói về điều mình thích:{" "}
                    <span className="text-[var(--custom-green)]">
                      [Danh từ]
                    </span>
                    <span> + </span>
                    <span className="text-[var(--custom-orange)]">이/가</span>
                    <span> + </span>
                    <span className="text-[var(--custom-purple)]">좋아요</span>.
                  </span>

                  <p className="font-medium text-[18px] my-3">
                    Cấu trúc này có nghĩa là "Cái gì đó thì tốt/thích". <br />
                    Chủ thể của sự "thích" ở đây là danh từ được gắn với 이/가.
                  </p>
                  <GreenExampleBox className="my-3">
                    <ul className="list-disc list-inside ml-4 mb-3">
                      <li className="">
                        한국어 공부가 좋아요. (Việc học tiếng Hàn thì thích.)
                      </li>
                      <li className="">
                        음악이 좋아요. (Âm nhạc thì hay/ thích.)
                      </li>
                    </ul>
                  </GreenExampleBox>
                  <BorderedGrammarBox
                    title="Phân biệt hai cách nói thích"
                    className="mb-3"
                  >
                    <ul className="list-decimal list-inside mb-3">
                      <li className="font-semibold text-[18px]">
                        [Sự vật] + 이/가 + 좋아요
                        <ul className="list-disc list-inside">
                          <li className="font-medium text-[18px]">
                            Bình luận về sự vật.
                          </li>
                          <li className="font-medium text-[18px] mb-3">
                            Ví dụ: 커피가 좋아요. (Cà phê ngon.)
                          </li>
                        </ul>
                      </li>

                      <li className="font-semibold text-[18px]">
                        [Người] + 은/는 + [Sự vật] + 을/를 + 좋아해요
                        <ul className="list-disc list-inside">
                          <li className="font-medium text-[18px]">
                            Nói về hành động của người.
                          </li>
                          <li className="font-medium text-[18px]">
                            Ví dụ: 저는 커피를 좋아해요. (Tôi thích cà phê.)
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <MeoNho className="font-medium text-[18px]">
                      <p>
                        <b>Mẹo nhỏ:</b> Khi giao tiếp, dùng …<b>이/가 좋아요</b>{" "}
                        để khen hoặc nói bạn thích một thứ gì đó
                        <br />— cách nói tự nhiên và phổ biến lắm đấy!
                      </p>
                    </MeoNho>
                  </BorderedGrammarBox>
                </li>
              </ul>
            ),
          },
          {
            id: 5,
            icon: <FaStar />,
            miniGameLink: "/courses/1/topics/2/lessons/5/minigame",
            lessonLink: "/courses/1/topics/2/lessons/5",
            title: "Ôn tập",
            status: "final",
            targets: [],
            grammar: (
              <div className="flex flex-col text-[#202020] font-nunito gap-3 md:gap-[18px] text-base md:text-[18px] font-normal leading-normal">
                <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  <span>
                    Cấu trúc thể hiện khả năng:{" "}
                    <span className="text-[var(--custom-red)]">[Động từ]</span>{" "}
                    +{" "}
                    <span className="text-[var(--custom-orange)]">(으)ㄹ</span>{" "}
                    <span className="text-[var(--custom-green)]">수</span>{" "}
                    <span className="text-[#464394]">있다/없다</span>
                  </span>
                </h1>

                <div className="text-base sm:text-lg space-y-3">
                  <div className="text-gray-700 mb-3 sm:mb-4">
                    Đây là cấu trúc dùng để diễn tả ai đó{" "}
                    <span className="font-bold">"có thể"</span> hoặc{" "}
                    <span className="font-bold">"không thể"</span> làm một việc
                    gì đó.
                  </div>
                  <span className="font-bold">(으)ㄹ 수 있다/없다</span> (eul su
                  itda/eopda): Nghĩa là "có thể / không thể"
                  <br />
                  <div>
                    <span className="ml-2 sm:ml-4 font-bold">
                      • -ㄹ 수 있다:
                    </span>{" "}
                    Dùng khi gốc động từ kết thúc bằng nguyên âm.
                    <div className="rounded-lg p-3 sm:p-4 mt-2 mb-2 bg-[#F4FAEE]">
                      <span className="text-green font-bold">Ví dụ:</span>
                      <ul className="list-disc pl-6 sm:pl-9 text-gray-700 space-y-1 sm:space-y-2 mt-2">
                        <li>가다 → 가 + ㄹ 수 있다 → 갈 수 있다 (có thể đi)</li>
                        <li>
                          하다 → 하 + ㄹ 수 있다 → 할 수 있다 (có thể làm)
                        </li>
                      </ul>
                    </div>
                    <span className="ml-2 sm:ml-4 font-bold">
                      • -을 수 있다:
                    </span>{" "}
                    Dùng khi gốc động từ kết thúc bằng phụ âm (patchim).
                    <div className="rounded-lg p-3 sm:p-4 mt-2 mb-2 bg-[#F4FAEE]">
                      <span className="text-green font-bold">Ví dụ:</span>
                      <ul className="list-disc pl-6 sm:pl-9 text-gray-700 space-y-1 sm:space-y-2 mt-2">
                        <li>
                          먹다 → 먹 + 을 수 있다 → 먹을 수 있다 (có thể ăn)
                        </li>
                        <li>
                          읽다 → 읽 + 을 수 있다 → 읽을 수 있다 (có thể đọc)
                        </li>
                      </ul>
                    </div>
                    <hr className="my-3 sm:my-4 border-gray-200" />
                  </div>
                  <div>
                    <p>
                      Để nói "không thể", chỉ cần thay{" "}
                      <span className="font-bold">있다</span> (có) bằng{" "}
                      <span className="font-bold">없다</span> (không có)
                    </p>
                    <div className="ml-2 sm:ml-4 rounded-lg p-3 sm:p-4 mt-2 mb-2 bg-[#F4FAEE]">
                      <span className="text-green font-bold">Ví dụ:</span>
                      <ul className="list-disc pl-6 sm:pl-9 text-gray-700 space-y-1 sm:space-y-2 mt-2">
                        <li>할 수 없어요*. (Không thể làm được.)</li>
                        <li>먹을 수 없어요*. (Không thể ăn được.)</li>
                      </ul>
                    </div>

                    <p className="text-gray-600 text-sm sm:text-base italic font-normal leading-normal ml-2 sm:ml-6 mt-3">
                      *없어요 là dạng thân thiện của 없다, dùng trong hội thoại
                      hàng ngày.
                    </p>
                  </div>
                </div>
              </div>
            ),
          },
        ],
      },
      {
        id: 2,
        title: "Gia đình & Bạn bè",
        topicTitleClassName:
          "bg-[#e3f2d2] border-[var(--custom-green)] text-[var(--custom-green)]",
        mainColor: "--custom-green",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Ftwo-man-hi-5.png?alt=media&token=8950cf99-2df2-4bac-9088-f19d199b5e18",
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Ffamily-waving.png?alt=media&token=326fc5ff-949d-4a43-a924-598c95fe83a4",
        ],
        cta: { label: "Học vượt?", tone: "neutral" },
        lessons: [
          {
            id: 1,
            title: "Giới thiệu gia đình",
            icon: <IoHomeSharp />,
            lessonLink: "/courses/1/topics/2/lessons/1",
            miniGameLink: "/courses/1/topics/2/lessons/1/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 2,
            title: "Bạn bè và các mối quan hệ",
            icon: <GiThreeFriends />,
            lessonLink: "/courses/1/topics/2/lessons/2",
            miniGameLink: "/courses/1/topics/2/lessons/2/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 3,
            title: "Biểu lộ cảm xúc với gia đình",
            status: "locked",
            icon: <MdEmojiEmotions />,
            lessonLink: "/courses/1/topics/2/lessons/3",
            miniGameLink: "/courses/1/topics/2/lessons/3/minigame",
            targets: [],
          },
          {
            id: 4,
            title: "Biết ơn và lời cảm ơn",
            icon: <FaHandHoldingHeart />,
            lessonLink: "/courses/1/topics/2/lessons/4",
            miniGameLink: "/courses/1/topics/2/lessons/4/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 5,
            title: "Ôn tập",
            icon: <FaStar />,
            lessonLink: "/courses/1/topics/2/lessons/5",
            miniGameLink: "/courses/1/topics/2/lessons/5/minigame",
            status: "final",
            targets: [],
          },
        ],
      },
      {
        id: 3,
        title: "Số đếm & Thời gian",
        topicTitleClassName:
          "text-[var(--custom-purple)] bg-[#eeedff] border-[var(--custom-purple)]",
        mainColor: "--custom-purple",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Fman-count-time.png?alt=media&token=b8ba6dfa-3bc1-40e2-92fa-0d3579c9801f",
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Fman-show-calendar.png?alt=media&token=b2bee328-011f-4e7d-9235-cf6a244df518",
        ],
        cta: { label: "Học vượt?", tone: "topicTitleClassName" },
        lessons: [
          {
            id: 1,
            title: "Số đếm cơ bản",
            icon: <GoNumber />,
            lessonLink: "/courses/1/topics/3/lessons/1",
            miniGameLink: "/courses/1/topics/3/lessons/1/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 2,
            title: "Thời gian",
            icon: <FaClock />,
            lessonLink: "/courses/1/topics/3/lessons/2",
            miniGameLink: "/courses/1/topics/3/lessons/2/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 3,
            title: "Hẹn lịch",
            icon: <FaCalendarAlt />,
            lessonLink: "/courses/1/topics/3/lessons/3",
            miniGameLink: "/courses/1/topics/3/lessons/3/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 4,
            title: "Tình huống thực tế về số đếm",
            icon: <TbCoins />,
            lessonLink: "/courses/1/topics/3/lessons/4",
            miniGameLink: "/courses/1/topics/3/lessons/4/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 5,
            title: "Ôn tập",
            icon: <FaStar />,
            lessonLink: "/courses/1/topics/3/lessons/5",
            miniGameLink: "/courses/1/topics/3/lessons/5/minigame",
            status: "final",
            targets: [],
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
    topics: [
      {
        id: 4,
        title: "Mua sắm",
        topicTitleClassName:
          "text-[var(--custom-red)] bg-[#ffebeb] border-[var(--custom-red)]",
        mainColor: "--custom-red",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Fman-buy-apple.png?alt=media&token=01efb961-7777-48f3-9321-d72942492a46",
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Fman-luandry.png?alt=media&token=62279745-9b46-4692-ab23-436581d3d5f5",
        ],
        lessons: [
          {
            id: 1,
            title: "Hỏi giá",
            icon: <FaDollarSign />,
            lessonLink: "/courses/2/topics/4/lessons/1",
            miniGameLink: "/courses/2/topics/4/lessons/1/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 2,
            title: "Chọn mua các mặt hàng",
            icon: <FaShoppingCart />,
            lessonLink: "/courses/2/topics/4/lessons/2",
            miniGameLink: "/courses/2/topics/4/lessons/2/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 3,
            title: "So sánh giá cả",
            icon: <FaBalanceScale />,
            lessonLink: "/courses/2/topics/4/lessons/3",
            miniGameLink: "/courses/2/topics/4/lessons/3/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 4,
            title: "Thương lượng giá cả",
            icon: <FaHandHoldingHeart />,
            lessonLink: "/courses/2/topics/4/lessons/4",
            miniGameLink: "/courses/2/topics/4/lessons/4/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 5,
            title: "Ôn tập",
            icon: <FaStar />,
            lessonLink: "/courses/2/topics/4/lessons/5",
            miniGameLink: "/courses/2/topics/4/lessons/5/minigame",
            status: "final",
            targets: [],
          },
        ],
      },
      {
        id: 5,
        title: "Ăn uống",
        topicTitleClassName:
          "text-[var(--custom-orange)] bg-[#fff1c9] border-[var(--custom-orange)]",
        mainColor: "--custom-orange",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Fman-thinking-pizza.png?alt=media&token=aa89cd64-eb7a-4ab3-bfa9-e20b2c936f1a",
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Fman-thinking-pizza.png?alt=media&token=aa89cd64-eb7a-4ab3-bfa9-e20b2c936f1a",
        ],
        lessons: [
          {
            id: 1,
            title: "Gọi món",
            icon: <FaUtensils />,
            lessonLink: "/courses/2/topics/5/lessons/1",
            miniGameLink: "/courses/2/topics/5/lessons/1/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 2,
            title: "Chuyện ăn uống",
            icon: <FaShoppingCart />,
            lessonLink: "/courses/2/topics/5/lessons/2",
            miniGameLink: "/courses/2/topics/5/lessons/2/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 3,
            title: "Nói về món ăn yêu thích",
            icon: <FaHeart />,
            lessonLink: "/courses/2/topics/5/lessons/3",
            miniGameLink: "/courses/2/topics/5/lessons/3/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 4,
            title: "Nói về ăn uống lành mạnh",
            icon: <FaAppleAlt />,
            lessonLink: "/courses/2/topics/5/lessons/4",
            miniGameLink: "/courses/2/topics/5/lessons/4/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 5,
            title: "Ôn tập",
            icon: <FaStar />,
            lessonLink: "/courses/2/topics/5/lessons/5",
            miniGameLink: "/courses/2/topics/5/lessons/5/minigame",
            status: "final",
            targets: [],
          },
        ],
      },
      {
        id: 6,
        title: "Giao thông & Chỉ đường",
        topicTitleClassName:
          "text-[var(--custom-blue)] bg-[#d8f9ff] border-[var(--custom-blue)]",
        mainColor: "--custom-blue",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Fman-map-guide.png?alt=media&token=ba3e40e5-e8c3-4bd8-9d2d-f8034dabec90",
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Fman-taxi.png?alt=media&token=803bddf6-f724-403f-ba27-a03a44c66a63",
        ],
        lessons: [
          {
            id: 1,
            title: "Phương tiện giao thông phổ biến",
            icon: <FaBus />,
            lessonLink: "/courses/2/topics/6/lessons/1",
            miniGameLink: "/courses/2/topics/6/lessons/1/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 2,
            title: "Hỏi đường",
            icon: <FaRoad />,
            lessonLink: "/courses/2/topics/6/lessons/2",
            miniGameLink: "/courses/2/topics/6/lessons/2/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 3,
            title: "Phương hướng",
            icon: <FaCompass />,
            lessonLink: "/courses/2/topics/6/lessons/3",
            miniGameLink: "/courses/2/topics/6/lessons/3/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 4,
            title: "Phương tiện di chuyển an toàn",
            icon: <FaCarSide />,
            lessonLink: "/courses/2/topics/6/lessons/4",
            miniGameLink: "/courses/2/topics/6/lessons/4/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 5,
            title: "Ôn tập",
            icon: <FaStar />,
            lessonLink: "/courses/2/topics/6/lessons/5",
            miniGameLink: "/courses/2/topics/6/lessons/5/minigame",
            status: "final",
            targets: [],
          },
        ],
      },
    ],
  },
  // Course 3: Cấp độ Cao cấp
  {
    id: 3,
    level: "Cấp độ 3: Cao cấp",
    title: "Hội thoại & Cảm xúc",
    topics: [
      {
        id: 7,
        title: "Thời tiết và sức khỏe",
        topicTitleClassName:
          "text-[var(--custom-blue)] bg-[#d8f9ff] border-[var(--custom-blue)]",
        mainColor: "--custom-blue",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Fman-hot-undersun.png?alt=media&token=70cbcd19-ca82-4070-8f88-11018956a83e",
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Fman-coughing.png?alt=media&token=f64dfd1c-b0ae-4923-8e88-a4a986b031ca",
        ],
        lessons: [
          {
            id: 1,
            title: "Thời tiết",
            icon: <FaCloudSun />,
            lessonLink: "/courses/2/topics/7/lessons/1",
            miniGameLink: "/courses/2/topics/7/lessons/1/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 2,
            title: "Miêu tả cảm nhận về thời tiết",
            icon: <WiDaySunnyOvercast />,
            lessonLink: "/courses/2/topics/7/lessons/2",
            miniGameLink: "/courses/2/topics/7/lessons/2/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 3,
            title: "Sức khỏe",
            icon: <FaHeartbeat />,
            lessonLink: "/courses/2/topics/7/lessons/3",
            miniGameLink: "/courses/2/topics/7/lessons/3/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 4,
            title: "Trạng thái tinh thần tích cực",
            icon: <FaRegSmile />,
            lessonLink: "/courses/2/topics/7/lessons/4",
            miniGameLink: "/courses/2/topics/7/lessons/4/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 5,
            title: "Ôn tập",
            icon: <FaStar />,
            lessonLink: "/courses/2/topics/7/lessons/5",
            miniGameLink: "/courses/2/topics/7/lessons/5/minigame",
            status: "final",
            targets: [],
          },
        ],
      },
      {
        id: 8,
        title: "Giải trí & Sở thích",
        topicTitleClassName:
          "text-[var(--custom-red)] bg-[#ffebeb] border-[var(--custom-red)]",
        mainColor: "--custom-red",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Fman-paiting.png?alt=media&token=085ca85a-a919-489d-8906-5df7638719c2",
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Fman-music.png?alt=media&token=78f26875-049f-4fe0-9ae6-76d74fe80399",
        ],
        lessons: [
          {
            id: 1,
            title: "Hỏi và giới thiệu sở thích",
            icon: <FaHeart />,
            lessonLink: "/courses/2/topics/8/lessons/1",
            miniGameLink: "/courses/2/topics/8/lessons/1/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 2,
            title: "Hoạt động vào cuối tuần",
            icon: <FaRunning />,
            lessonLink: "/courses/2/topics/8/lessons/2",
            miniGameLink: "/courses/2/topics/8/lessons/2/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 3,
            title: "Miêu tả cảm xúc",
            icon: <FaRegSmile />,
            lessonLink: "/courses/2/topics/8/lessons/3",
            miniGameLink: "/courses/2/topics/8/lessons/3/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 4,
            title: "Nói về điều mình yêu thích",
            icon: <FaHeart />,
            lessonLink: "/courses/2/topics/8/lessons/4",
            miniGameLink: "/courses/2/topics/8/lessons/4/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 5,
            title: "Ôn tập",
            icon: <FaStar />,
            lessonLink: "/courses/2/topics/8/lessons/5",
            miniGameLink: "/courses/2/topics/8/lessons/5/minigame",
            status: "final",
            targets: [],
          },
        ],
      },
      {
        id: 9,
        title: "Văn hóa & Phong tục",
        topicTitleClassName:
          "text-[var(--custom-purple)] bg-[#eeedff] border-[var(--custom-purple)]",
        mainColor: "--custom-purple",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Fgirl-in-custom.png?alt=media&token=f4e94d7b-677b-476e-9825-d9e23f74566f",
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Fboy-cultule.png?alt=media&token=63e3eb4a-9c2e-4929-95e3-7ff6b60ff8b5",
        ],
        lessons: [
          {
            id: 1,
            title: "Văn hóa cơ bản",
            icon: <FaHeart />,
            lessonLink: "/courses/2/topics/9/lessons/1",
            miniGameLink: "/courses/2/topics/9/lessons/1/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 2,
            title: "Lễ nghi và phép tắc quan trọng",
            icon: <FaRuler />,
            lessonLink: "/courses/2/topics/9/lessons/2",
            miniGameLink: "/courses/2/topics/9/lessons/2/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 3,
            title: "Ẩm thực và trang phục",
            icon: <GiClothes />,
            lessonLink: "/courses/2/topics/9/lessons/3",
            miniGameLink: "/courses/2/topics/9/lessons/3/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 4,
            title: "Ý nghĩa đa dạng văn hóa",
            icon: <GiPartyFlags />,
            lessonLink: "/courses/2/topics/9/lessons/4",
            miniGameLink: "/courses/2/topics/9/lessons/4/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 5,
            title: "Ôn tập",
            icon: <FaStar />,
            lessonLink: "/courses/2/topics/9/lessons/5",
            miniGameLink: "/courses/2/topics/9/lessons/5/minigame",
            status: "final",
            targets: [],
          },
        ],
      },
    ],
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
    meaning:
      "Nghĩa: 1. Tôi, em, con... (khiêm tốn) 2. Kia, đó (chỉ vật ở xa) 3. À, ờ, ừm... (từ đệm)",
    usage:
      "Dùng để xưng hô ngôi thứ nhất một cách khiêm tốn. Sử dụng khi nói với người lớn tuổi, người có địa vị cao hơn, hoặc trong các tình huống trang trọng, lịch sự.",
    description:
      "Là đại từ nhân xưng ngôi thứ nhất, dạng khiêm tốn của '나' (na).",
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
      "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F%EB%AC%B4%EC%97%87.m4a?alt=media&token=47142660-9d98-4496-9ea6-78a3972bacfe",
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
      "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F%EC%A2%8B%EB%8B%A4%20%EC%95%84%EC%9A%94.m4a?alt=media&token=35d904c2-1b08-4824-9296-6b9a1f25dc63",
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
  10: {
    text: " 할 수 있어요",
    transcription: "hal su isseoyo",
    meaning: "tôi có thể làm được",
    usage:
      "Được dùng để khích lệ bản thân hoặc người khác, thể hiện sự tự tin và khả năng thực hiện một việc.",
    description:
      "Câu khẳng định phổ biến trong tiếng Hàn, mang ý nghĩa động viên và khích lệ.",
    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F%EC%95%84%EB%8B%88%EC%97%90%EC%9A%94%20%ED%95%A0%20%EC%88%98%20%EC%9E%88%EC%96%B4%EC%9A%94%20.m4a?alt=media",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
    wordType: "phrase",
    subdescription: `<b>Sự thật thú vị:</b> Nghĩa gốc là “Bạn có khỏe không?” nhưng dịch tự nhiên là “Xin chào!”.`,
    parts: [
      {
        text: "할",
        color: "--custom-red",
        description: "động từ: làm",
      },
      {
        text: "수",
        color: "--custom-red",
        description: "danh từ: khả năng, năng lực",
      },
      {
        text: "있어요",
        color: "--custom-orange",
        description: "cấu trúc: có, tồn tại (dạng lịch sự)",
      },
    ],
    examples: [
      "네, 할 수 있어요! (Vâng, tôi có thể làm được!)",
      "걱정하지 마세요. 당신은 할 수 있어요! (Đừng lo, bạn có thể làm được!)",
    ],
  },
  11: {
    text: "오늘",
    transcription: "oneul",
    meaning: "hôm nay",
    usage:
      "Từ dùng để chỉ ngày hiện tại, thường xuất hiện trong các câu nói về thời gian hoặc kế hoạch trong ngày.",
    description:
      "Từ chỉ thời điểm hiện tại trong ngày, thường được dùng để nói về các hoạt động, cảm xúc hoặc sự kiện xảy ra trong ngày hôm nay.",
    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F%EC%98%A4%EB%8A%98.m4a?alt=media",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
    wordType: "phrase",
    parts: [
      {
        text: "오",
        color: "--custom-blue",
        description: "gốc từ chỉ 'ngày' hoặc 'buổi sáng'",
      },
      {
        text: "늘",
        color: "--custom-green",
        description: "gốc từ chỉ 'hiện tại' hoặc 'bây giờ'",
      },
    ],
    examples: ["오늘 날씨가 정말 좋아요.", "오늘은 친구를 만날 거예요."],
  },

  12: {
    text: "반갑습니다 ",
    transcription: "ban-gap-seum-ni-da",
    meaning:
      "Luôn luôn, bất cứ lúc nào — diễn tả hành động hoặc trạng thái xảy ra thường xuyên, không thay đổi theo thời gian.",
    usage:
      "Được dùng để nhấn mạnh sự lặp lại hoặc tính liên tục của hành động trong mọi thời điểm. Thường xuất hiện trong các câu thể hiện thói quen, cảm xúc hoặc lời hứa.",

    description:
      "'언제나' là phó từ mang nghĩa 'luôn luôn', 'mọi lúc', dùng để chỉ sự việc xảy ra liên tục hoặc không thay đổi bất kể thời gian. Từ này thường được dùng trong cả văn nói và viết để thể hiện sự kiên định hoặc tình cảm bền vững.",

    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F%EB%B0%98%EA%B0%91%EC%8A%B5%EB%8B%88%EB%8B%A4.mp3?alt=media",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
    wordType: "phrase",
    subdescription: `"<b>Mẹo nhỏ:</b> '언제나' thường đi kèm với các biểu hiện tích cực như <b>고맙습니다</b> (cảm ơn), <b>사랑해요</b> (yêu), hoặc <b>행복하세요</b> (chúc hạnh phúc) để nhấn mạnh sự chân thành và thường xuyên."
.`,
    parts: [
      {
        text: "반갑",
        color: "--custom-purple",
        description: "gốc tính từ 'vui mừng, hân hoan khi gặp ai đó'",
      },
      {
        text: "습니다",
        color: "--custom-teal",
        description:
          "đuôi câu trang trọng, biểu thị sự lịch sự trong giao tiếp",
      },
    ],
    examples: [
      "안녕하세요! 만나서 반갑습니다.",
      "처음 뵙겠습니다. 정말 반갑습니다!",
    ],
  },
  13: {
    text: "노력할 거예요",
    transcription: "no-ryeok-hal-geo-ye-yo",
    meaning:
      "Tôi sẽ cố gắng, tôi sẽ nỗ lực — biểu hiện ý chí thực hiện điều gì đó trong tương lai.",
    usage:
      "Dùng để thể hiện quyết tâm hoặc cam kết sẽ cố gắng làm một việc gì đó. Thường xuất hiện trong các câu nói về mục tiêu, lời hứa hoặc khi muốn thể hiện sự nỗ lực với người khác.",
    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/uploads%2Fhangul-audio%2Ftopic-1%2F1%2Fvocab%2F%EB%85%B8%EB%A0%A5%ED%95%A0%20%EA%B1%B0%EC%98%88%EC%9A%94.m4a?alt=media",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/330px-Flag_of_South_Korea.svg.png",
    wordType: "phrase",
    subdescription:
      "<b>Mẹo nhỏ:</b> Bạn có thể dùng '노력할 거예요' sau khi nhận lời khuyên hoặc lời động viên để thể hiện sự quyết tâm, ví dụ: <b>더 열심히 노력할 거예요</b> (Tôi sẽ cố gắng chăm chỉ hơn).",

    parts: [
      {
        text: "노력",
        color: "--custom-orange",
        description: "danh từ gốc mang nghĩa 'nỗ lực, cố gắng'",
      },
      {
        text: "할",
        color: "--custom-green",
        description:
          "dạng liên kết của động từ '하다' (làm), biểu thị hành động sẽ thực hiện",
      },
      {
        text: "거예요",
        color: "--custom-blue",
        description:
          "cấu trúc tương lai lịch sự, dùng để nói về việc sẽ xảy ra",
      },
    ],
    examples: ["앞으로 더 노력할 거예요.", "시험을 위해 노력할 거예요."],
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
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Fman-wave-his-hand.png?alt=media&token=7690d6a5-455d-41e7-a729-f61e4c51854d",
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
          "https://firebasestorage.googleapis.com/v0/b/nguyenductuan-bf7a1.firebasestorage.app/o/images%2Fman-wave-his-hand.png?alt=media&token=7690d6a5-455d-41e7-a729-f61e4c51854d",
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
