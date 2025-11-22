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

            title: "Ôn tập",
            status: "final",
            targets: [
              "Củng cố từ vựng cơ bản trong giao tiếp tiếng Hàn",
              "Luyện tập cấu trúc ngữ pháp thông dụng",
              "Phát triển khả năng giao tiếp thực tế bằng tiếng Hàn",
            ],
            vocabIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice", //1
                  question:
                    " Chọn từ phù hợp để thể hiện sự tôn trọng khi xưng'Tôi'với người mới gặp.",
                  options: ["나 ", "저?", "너"],
                  correctAnswerIndex: 1,
                  explanation:
                    "<b>저</b> (jeo) là đại từ nhân xưng ngôi thứ nhất ở dạng khiêm tốn/lịch sự. Đây là từ bạn nên dùng khi nói chuyện với người lớn tuổi hoặc người lạ (như khi mới làm quen) để thể hiện sự tôn trọng. <b>나 </b>(na) là dạng thân mật, suồng sã.",
                },
                {
                  questionType: "multipleChoice", //2
                  question:
                    "Chọn đuôi câu khẳng định trang trọng nhất (Dạng 'là')",
                  options: ["이다", "이에요", "입니다"],
                  correctAnswerIndex: 2,
                  explanation:
                    "Từ <b>'음악' </b>(âm nhạc) kết <b>입니다</b> (imnida) là đuôi câu khẳng định 'là' ở dạng trang trọng nhất (formal high). <b>이다</b> là dạng nguyên mẫu (dictionary form), còn <b>이에요/예요</b> là dạng thân mật lịch sựthúc bằng phụ âm 'ㄱ' (k), nên dùng tiểu từ '이' với tính từ <b>좋아요</b>.",
                },
                {
                  questionType: "multipleChoice", //3
                  question: "Từ nào sau đây có nghĩa là 'Hôm nay'?",
                  options: ["언제나", "지금", "오늘"],
                  correctAnswerIndex: 2,
                  explanation:
                    "<b>오늘</b> (oneul) có nghĩa là 'hôm nay'. <b>언제나</b> (eonjena) là 'luôn luôn', và <b>지금</b> (jigeum) là 'bây giờ' (ngay lúc này)",
                },
                {
                  questionType: "multipleChoice", //4
                  question:
                    "Khi bạn muốn cổ vũ một người bạn Hàn Quốc sắp thi, bạn nên nói gì?",
                  options: ["미안합니다", "감사합니다", "파이팅!"],
                  correctAnswerIndex: 2,
                  explanation:
                    "<b>파이팅!</b> (Paiting!) là lời cổ vũ phổ biến nhất trong tiếng Hàn, mang nghĩa 'Cố lên!' hoặc 'Làm tốt nhé!'. Hai đáp án còn lại là lời chào hỏi và xin lỗi",
                },

                {
                  questionType: "multipleChoice", //5
                  question: "Chọn câu diễn tả khả năng ở dạng đúng:",
                  options: ["할 수 있어요", "하다 수 있어요", "할 수 없어요"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Cấu trúc thể hiện khả năng là [Động từ gốc] + (으)ㄹ 수 있다. Gốc động từ của 'làm' là 하-. Vì 하- không có phụ âm cuối (patchim), ta dùng -ㄹ 수 있어요 (đã chia ở dạng lịch sự thân mật)",
                },
                {
                  questionType: "multipleChoice", //6
                  question: "Danh từ nào sau đây mang nghĩa là 'Học sinh'?:",
                  options: ["이름", "학생", "선생님"],
                  correctAnswerIndex: 1,
                  explanation:
                    "<b>학생</b> (haksaeng) có nghĩa là 'học sinh'. 이름 (ireum) là 'tên', và 선생님 (seonsaengnim) là 'giáo viên'",
                },
                {
                  questionType: "multipleChoice", //7
                  question:
                    "Chọn tiểu từ chủ ngữ đúng cho câu sau: Tên (____) là gì?':",
                  options: [
                    "이름이 무엇입니까",
                    "이름를 무엇입니까?",
                    "이름은 무엇입니까?",
                  ],
                  correctAnswerIndex: 0,
                  explanation:
                    "Danh từ <b>이름</b> (ireum - tên) kết thúc bằng phụ âm cuối <b>(ㅁ)</b>, nên phải đi với tiểu từ chủ ngữ <b>이 </b>(i) trong cấu trúc câu hỏi <b>'A là cái gì?'</b>.",
                },

                {
                  questionType: "fillInBlank", //8
                  question:
                    " Hoàn thành câu chào hỏi phổ biến: 안녕 ________? (Xin chào?)",
                  correctAnswer: "하세요",
                  explanation:
                    "Câu chào hỏi phổ biến là<b> 안녕하세요? </b>(Annyeonghaseyo?).",
                },
                {
                  questionType: "fillInBlank", //9
                  question:
                    " Hoàn thành câu giới thiệu: 'Tôi là Mina.' 저는 민아 ________.",
                  correctAnswer: "입니다",
                  explanation:
                    "Trong câu giới thiệu trang trọng 저는 민아입니다 (Tôi là Mina), 입니다 là đuôi câu khẳng định trang trọng.",
                },
                {
                  questionType: "fillInBlank", //10
                  question:
                    "Từ vựng nào sau đây mang nghĩa là 'Cái gì?'' ________ 무엇입니까?",
                  correctAnswer: "하세요",
                  explanation:
                    "Câu chào hỏi phổ biến là<b> 안녕하세요? </b>(Annyeonghaseyo?).",
                },
                {
                  questionType: "fillInBlank", //11
                  question:
                    "Hoàn thành câu thể hiện sự vui mừng: 'Rất vui được gặp.' 만나서 ____________.",
                  correctAnswer: "반갑습니다",
                  explanation:
                    "Cụm từ đầy đủ để bày tỏ sự vui mừng khi gặp là 만나서 반갑습니다 (Mannaseo bangapseumnida - Rất vui được gặp).",
                },
                {
                  questionType: "fillInBlank", //12
                  question:
                    "Hoàn thành câu với phó từ chỉ tần suất:  저는 ________ 노력할 거예요.'Tôi sẽ ________ cố gắng.'",
                  correctAnswer: "언제나",
                  explanation:
                    "언제나 (eonjena) là phó từ chỉ tần suất, có nghĩa là 'luôn luôn' hoặc 'lúc nào cũng', làm nổi bật ý chí cố gắng bền bỉ.",
                },
                {
                  questionType: "fillInBlank", //13
                  question:
                    " Hoàn thành câu sử dụng liên từ -서: 'Tôi thích vì ________ (gặp).' 만나**________** 반갑습니다",
                  correctAnswer: "서",
                  explanation:
                    "-서 là tiểu từ liên kết hai hành động hoặc diễn tả nguyên nhân, tạo nên cụm từ 만나서 (vì đã gặp/nhân vì gặp) trong câu 만나서 반갑습니다.",
                },
                {
                  questionType: "dropDown", //14
                  question:
                    "<<dropdown>>는 한국 사람입니다. (Tôi là người Hàn Quốc.)",
                  options: [
                    "영화를 좋아요",
                    "영화를 좋아해요",
                    "영화가 좋아해요",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "Dùng 저는 (dạng khiêm tốn của 'Tôi') để thể hiện sự lịch sự và tôn trọng với người có địa vị cao (giáo sư).Khi dùng động từ 'thích' (좋아해요), danh từ 'phim' (영화) phải là tân ngữ và đi kèm với tiểu từ tân ngữ 을/를. Vì 영화 (yeonghwa) kết thúc bằng nguyên âm nên ta dùng 를.",
                },
                {
                  questionType: "dropDown", //15
                  question:
                    "저는 영화 <<dropdown>> 좋아해요. (Tôi thích phim.)",
                  options: ["이 (i)", "를 (reul)", "은 (eun)"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Danh từ 영화 (yeonghwa - phim) kết thúc bằng nguyên âm, nên dùng tiểu từ tân ngữ 를 (reul) đi kèm với động từ 좋아해요.",
                },
                {
                  questionType: "dropDown", //16
                  question:
                    "한국어 공부<<dropdown>> 좋아요. (Việc học tiếng Hàn thì hay/tốt.)",
                  options: ["를 (reul)", "B. 이 (i)", "C. 가 (ga)"],
                  correctAnswerIndex: 2,
                  explanation:
                    "Danh từ 공부 (gongbu - việc học) kết thúc bằng nguyên âm, nên dùng tiểu từ chủ ngữ 가 (ga) khi đi với tính từ 좋아요.",
                },
                {
                  questionType: "dropDown", //17
                  question:
                    "한국어를 <<dropdown>> 수 있어요. (Có thể nói tiếng Hàn.)",
                  options: [
                    "말하 (Malha)",
                    "말할 (Malhal)",
                    "말해요 (Malhaeyo)",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "Cấu trúc là [Gốc Động từ + (으)ㄹ] + 수 있어요. Gốc động từ 말하- kết thúc bằng nguyên âm, ta dùng -ㄹ (Malhal).",
                },
                {
                  questionType: "dropDown", //18
                  question:
                    "저는 내일 일찍 <<dropdown>>(Tôi sẽ dậy sớm vào ngày mai.)",
                  options: [
                    "일어났어요 (Quá khứ)",
                    "일어날 거예요 (Tương lai)",
                    "일어나요 (Hiện tại)",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "Dùng 일어날 거예요 (sẽ dậy) với cấu trúc -(으)ㄹ 거예요 để diễn tả dự định/hành động trong tương lai.",
                },
                {
                  questionType: "dropDown", //19
                  question: "이름이 <<dropdown>>입니까?",
                  options: [
                    "언제 (Eonje - khi nào)",
                    "무엇 (Mueot - cái gì)",
                    "어디 (Eodi - ở đâu)",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "무엇 (Mueot) là đại từ nghi vấn mang nghĩa 'cái gì', phù hợp để hỏi tên.",
                },
                {
                  questionType: "dropDown", //20
                  question:
                    "학생 <<dropdown>>아닙니다. (Không phải là học sinh.)",
                  options: ["은 (eun)", "는 (neun)", ". 를 (reul)"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Danh từ 학생 (haksaeng) kết thúc bằng phụ âm (ㅇ), nên dùng tiểu từ chủ đề 은 (eun).",
                },
              ],
            },
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
            targets: [
              "Học viên nhận biết và sử dụng được các từ vựng cơ bản về gia đình: 가족, 어머니, 아버지.",
              "Phân biệt và sử dụng đúng từ xưng hô trang trọng (아버지, 어머니) và thân mật (아빠, 엄마).",
              "Hiểu văn hóa cộng đồng của người Hàn qua cách dùng '우리' (chúng tôi) thay vì '제' (của tôi).",
            ],
            vnDialogue: {
              mainRole: "B",
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Bức ảnh này là gì vậy?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "Là ảnh gia đình của tôi." }],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "À! Vị này là bố bạn phải không?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Vâng, đúng rồi." },
                    { text: "Và vị này là mẹ của chúng tôi." },
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
                      text: "이 사진은 무엇입니까?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_A1.mp3", // Thay link audio thực tế của bạn vào đây
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "제 가족 사진입니다.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "아! 이분은 아버지입니까?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_A2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "네, 맞아요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_B2_1.mp3",
                    },
                    {
                      text: "그리고 이분은 우리 어머니입니다.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_B2_2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Cách gọi 'Bố', 'Mẹ' thân thương",
              content: `
      Trong tiếng Hàn, cách gọi bố mẹ thay đổi tùy theo mức độ thân thiết và trang trọng:
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2"><b>아버지 (abeoji) & 어머니 (eomeoni):</b> Là cách gọi trang trọng. Bạn dùng khi nói về bố mẹ với người ngoài, hoặc trong hoàn cảnh nghiêm túc.</li>
        <li><b>아빠 (appa) & 엄마 (eomma):</b> Giống như "Bố/Ba", "Mẹ/Má" trong tiếng Việt. Đây là cách gọi thân mật, trẻ em và người lớn đều dùng khi nói chuyện trực tiếp với bố mẹ.</li>
      </ul>
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        💡 <b>Mẹo nhỏ:</b> Khi về nhà, đừng gọi "Abuji" mà hãy gọi "Appa" để không khí gia đình thêm ấm áp nhé!
      </div>
    `,
            },
            funQuiz: {
              question:
                "Khi bạn về nhà và thấy mẹ đang nấu ăn, bạn sẽ chào mẹ một cách tự nhiên là:",
              options: [
                "A. 어머니, 안녕하세요.",
                "B. 엄마, 저 왔어요! (Mẹ ơi, con về rồi!)",
              ],
              correctAnswerIndex: 1,
              explanation:
                "Đáp án B (엄마) là cách nói tự nhiên và thân mật hơn trong tình huống gia đình hàng ngày. '어머니' thường quá trang trọng khi dùng trực tiếp ở nhà.",
            },
            vocabIds: [14, 15, 16],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question:
                    "Từ nào sau đây mang nghĩa là 'Bố' (cách gọi trang trọng)?",
                  options: ["어머니", "아버지", "가족"],
                  correctAnswerIndex: 1,
                  explanation:
                    "'어머니' là Mẹ, '가족' là Gia đình. '아버지' là Bố.",
                },
                {
                  questionType: "fillInBlank",
                  question: "Cách gọi thân mật của '어머니' là <<blank>>.",
                  correctAnswer: "엄마",
                  explanation: "엄마 (eomma) là cách gọi mẹ thân mật, gần gũi.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Giới thiệu với người khác về đất nước của mình: 'Đây là đất nước <<dropdown>>'.",
                  options: ["제 (của tôi)", "우리 (của chúng tôi)"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Người Hàn dùng '우리' (chúng tôi) cho các khái niệm cộng đồng như gia đình, đất nước, nhà trường để thể hiện sự gắn kết.",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Tại sao nên dùng '우리 어머니' thay vì '제 어머니'?",
                  options: [
                    "Vì mẹ là của riêng tôi.",
                    "Vì ngữ pháp bắt buộc.",
                    "Để nghe tự nhiên và thể hiện sự thân thuộc kiểu Hàn Quốc.",
                  ],
                  correctAnswerIndex: 2,
                  explanation:
                    "Dù dịch là 'mẹ tôi', nhưng dùng '우리' (chúng tôi) nghe sẽ tự nhiên và mang tính văn hóa cộng đồng hơn.",
                },
              ],
            },
          },
          {
            id: 2,
            title: "Bạn bè và các mối quan hệ",
            icon: <GiThreeFriends />,
            lessonLink: "/courses/1/topics/2/lessons/2",
            miniGameLink: "/courses/1/topics/2/lessons/2/minigame",
            status: "locked",
            targets: [
              "Học viên có thể giới thiệu bạn bè và nói về việc có hay không có bạn bè.",
              "Sử dụng thành thạo cấu trúc ngữ pháp sở hữu: 있다 (có) / 없다 (không có).",
              "Hiểu văn hóa '친구' (Bạn bè) và cách xưng hô theo tuổi tác trong xã hội Hàn Quốc.",
            ],
            vnDialogue: {
              mainRole: "B", // Người học đóng vai Mina (B)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Mina ơi, bạn có bạn bè không?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Vâng, tôi có những người bạn tốt." },
                    { text: "Còn Nam thì sao?" },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Tôi có nhiều bạn lắm." },
                    { text: "Đây là bạn của tôi, Jihoon." },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "Ồ, rất vui được gặp bạn!" }],
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
                      text: "민아 씨, 친구가 있어요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_2_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "네, 저는 좋은 친구가 있어요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_2_B1_1.mp3",
                    },
                    {
                      text: "남 씨는요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_2_B1_2.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "저는 친구가 많아요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_2_A2_1.mp3",
                    },
                    {
                      text: "이 사람은 제 친구, 지훈입니다.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_2_A2_2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "아, 반갑습니다!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_2_B2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "'친구' (Bạn bè) ở Hàn Quốc",
              content: `
      Ở Hàn Quốc, khái niệm <b>"친구" (chingu)</b> rất đặc biệt và thường chỉ dùng cho những người <b>bằng tuổi nhau</b>.
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Nếu người kia lớn hơn bạn dù chỉ 1 tuổi, bạn phải gọi là:
          <ul className="list-circle list-inside ml-4 text-gray-600">
            <li><b>형 (hyeong) / 누나 (nuna)</b>: Nếu bạn là nam.</li>
            <li><b>오빠 (oppa) / 언니 (eonni)</b>: Nếu bạn là nữ.</li>
          </ul>
        </li>
        <li>Người ít tuổi hơn sẽ là <b>동생 (dongsaeng)</b>.</li>
      </ul>
      <div className="mt-4 p-3 bg-red-50 rounded-lg">
        ⚠️ <b>Lưu ý:</b> Gọi người lớn tuổi hơn là "chingu" có thể bị coi là thiếu tôn trọng. Vì vậy, câu hỏi "Bạn bao nhiêu tuổi?" là rất phổ biến khi mới làm quen để chọn cách xưng hô đúng.
      </div>
    `,
            },
            funQuiz: {
              question:
                "Nếu gặp một người Hàn Quốc lớn hơn bạn 1 tuổi, bạn có nên gọi họ là '친구' ngay lập tức không?",
              options: [
                "A. Có, vì chúng ta đều là bạn bè quốc tế.",
                "B. Không, vì ở Hàn Quốc 'bạn bè' thường chỉ những người bằng tuổi.",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "Ở Hàn Quốc, văn hóa tuổi tác rất quan trọng. Gọi người lớn tuổi hơn là 'bạn' (chingu) có thể bị coi là vô lễ. Bạn nên dùng các danh xưng tôn trọng như anh/chị.",
            },
            vocabIds: [17, 18, 19],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question: "Cấu trúc nào dùng để nói 'Có cái gì đó'?",
                  options: [
                    "[Danh từ] + 이/가 있다",
                    "[Danh từ] + 은/는 있다",
                    "[Danh từ] + 을/를 있다",
                  ],
                  correctAnswerIndex: 0,
                  explanation:
                    "Cấu trúc sở hữu hoặc tồn tại trong tiếng Hàn luôn dùng trợ từ chủ ngữ 이/가 đi với 있다.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "저는 시간<<blank>> 없어요. (Tôi không có thời gian - '시간' kết thúc bằng phụ âm 'n')",
                  correctAnswer: "이",
                  explanation:
                    "Vì '시간' (sigan) kết thúc bằng phụ âm (patchim 'ㄴ'), ta dùng trợ từ '이'.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "교실에 학생<<blank>> 있어요. (Trong lớp có học sinh - '학생' kết thúc bằng phụ âm 'ng')",
                  correctAnswer: "이",
                  explanation:
                    "Vì '학생' (haksaeng) kết thúc bằng phụ âm (patchim 'ㅇ'), ta dùng trợ từ '이'.",
                },
                {
                  questionType: "dropDown",
                  question: "Chọn trợ từ đúng: 친구<<dropdown>> 있어요.",
                  options: ["이", "가"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Vì '친구' (chingu) kết thúc bằng nguyên âm (không có patchim), ta dùng trợ từ '가'.",
                },
              ],
            },
          },
          {
            id: 3,
            title: "Biểu lộ cảm xúc với gia đình",
            status: "locked",
            icon: <MdEmojiEmotions />,
            lessonLink: "/courses/1/topics/2/lessons/3",
            miniGameLink: "/courses/1/topics/2/lessons/3/minigame",
            targets: [
              "Học viên có thể diễn đạt tình yêu, hạnh phúc và niềm tự hào về gia đình.",
              "Sử dụng thành thạo đuôi câu thân mật, lịch sự: -이에요 / -예요 (là).",
              "Tìm hiểu văn hóa 'bắn tim' (finger heart) đặc trưng của Hàn Quốc.",
            ],
            vnDialogue: {
              mainRole: "B", // Người học đóng vai Nam (B)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Nam ơi, trông bạn vui quá!" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "Vâng! Hôm nay là sinh nhật bố mình." }],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Wow, thật sao?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Vâng. Gia đình chúng mình thật sự hạnh phúc." },
                    { text: "Là một gia đình chan chứa tình yêu thương." },
                    { text: "Gia đình mình là tuyệt nhất!" },
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
                      text: "남 씨, 기분이 좋아 보여요!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_3_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "네! 오늘은 우리 아버지 생신이에요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_3_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "와, 정말요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_3_A2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "네. 우리 가족은 정말 행복해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_3_B2_1.mp3",
                    },
                    {
                      text: "사랑이 많은 가족이에요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_3_B2_2.mp3",
                    },
                    {
                      text: "우리 가족 최고!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_3_B2_3.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Thả tim kiểu Hàn Quốc!",
              content: `
      Bạn có biết cử chỉ <b>"bắn tim" (finger heart)</b> bằng ngón tay cái và ngón trỏ không? Đó là một biểu tượng văn hóa đại chúng của Hàn Quốc.
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Được các ngôi sao K-Pop lan tỏa khắp thế giới.</li>
        <li>Đây là cách nhanh chóng và đáng yêu để thể hiện <b>tình cảm, sự yêu mến (사랑)</b> hoặc sự ủng hộ.</li>
      </ul>
      <div className="mt-4 p-3 bg-pink-50 rounded-lg">
        💖 <b>Thử ngay:</b> Lần tới khi muốn nói "사랑해요" (Tôi yêu bạn), hãy thử kết hợp với hành động "bắn tim" này nhé!
      </div>
    `,
            },
            funQuiz: {
              question:
                "Hành động dùng ngón cái và ngón trỏ tạo thành hình trái tim nhỏ dùng để biểu đạt điều gì?",
              options: [
                "A. Sự tức giận",
                "B. Tình yêu và sự yêu mến (사랑)",
                "C. Số tiền phải trả",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "Đây là cử chỉ 'bắn tim' (finger heart) nổi tiếng của Hàn Quốc, dùng để thể hiện tình yêu thương.",
            },
            vocabIds: [20, 21, 22],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question: "Đuôi câu '-이에요 / -예요' có nghĩa là gì?",
                  options: ["Là (thân mật, lịch sự)", "Ăn", "Đi"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Đây là đuôi câu định nghĩa 'Là', dùng trong giao tiếp hàng ngày thân mật nhưng vẫn lịch sự.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "이 사람은 제 친구<<dropdown>>. (Người này là bạn tôi - '친구' không có patchim)",
                  options: ["이에요", "예요"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Vì '친구' (chingu) kết thúc bằng nguyên âm (không có patchim), ta dùng đuôi '-예요'.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "저의 아버지는 선생님<<dropdown>>. (Bố tôi là giáo viên - '선생님' có patchim 'm')",
                  options: ["이에요", "예요"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Vì '선생님' (seonsaengnim) kết thúc bằng phụ âm (patchim 'ㅁ'), ta dùng đuôi '-이에요'.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "우리 가족은 최고<<blank>>! (Gia đình tôi là nhất! - '최고' không có patchim)",
                  correctAnswer: "예요",
                  explanation:
                    "Vì '최고' (choego) kết thúc bằng nguyên âm 'ㅗ', ta dùng '-예요'.",
                },
              ],
            },
          },
          {
            id: 4,
            title: "Biết ơn và lời cảm ơn",
            icon: <FaHandHoldingHeart />,
            lessonLink: "/courses/1/topics/2/lessons/4",
            miniGameLink: "/courses/1/topics/2/lessons/4/minigame",
            status: "locked",
            targets: [
              "Học viên có thể nói lời cảm ơn một cách lịch sự trong các tình huống phù hợp.",
              "Phân biệt sự khác nhau về sắc thái giữa 고맙습니다 và 감사합니다.",
              "Sử dụng phó từ '늘' và '항상' để nhấn mạnh lòng biết ơn thường xuyên.",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai Con (A)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Mẹ, Bố, con luôn cảm ơn bố mẹ." }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "Con trai của mẹ, sao thế?" }],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Dạ không có gì ạ." },
                    { text: "Con luôn yêu thương bố mẹ." },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "Mẹ cũng yêu con." }],
                },
              ],
            },
            koDialogue: {
              mainRole: "A",
              hasSpeakerBox: true,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "엄마, 아버지, 늘 고맙습니다.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_4_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "우리 아들, 왜 그래?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_4_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "그냥요. 항상 사랑해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_4_A2_1.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "엄마도 사랑해.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_4_B2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Cảm ơn trang trọng và cảm ơn thân mật",
              content: `
      Trong tiếng Hàn có hai từ "cảm ơn" rất phổ biến nhưng mang sắc thái khác nhau:
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2"><b>감사합니다 (gamsahamnida):</b> Gốc Hán (Cảm Tạ). Mang sắc thái trang trọng, khách quan. Thường dùng trong công sở, thông báo chính thức hoặc với người lạ.</li>
        <li className="mb-2"><b>고맙습니다 (gomapseumnida):</b> Gốc thuần Hàn. Mang cảm giác gần gũi, ấm áp và chân thành hơn.</li>
      </ul>
      <div className="mt-4 p-3 bg-green-50 rounded-lg">
        💡 <b>Mách nhỏ:</b> Với bạn bè thân thiết, bạn chỉ cần nói ngắn gọn là <b>고마워 (gomawo)</b> là đủ nhé!
      </div>
    `,
            },
            funQuiz: {
              question:
                "Khi bạn nhận được quà từ một người bạn rất thân cùng tuổi, bạn nên nói gì cho tự nhiên nhất?",
              options: [
                "A. 감사합니다 (Trang trọng)",
                "B. 고마워 (Thân mật)",
                "C. 고맙습니다 (Lịch sự)",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "Với bạn bè thân thiết (친구), sử dụng đuôi câu thân mật (banmal) như '고마워' là tự nhiên và gần gũi nhất.",
            },
            vocabIds: [23, 24, 25],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question:
                    "Bạn muốn cảm ơn người bạn đã LUÔN LUÔN ở bên cạnh mình để nhấn mạnh sự chân thành lâu dài. Bạn sẽ nói:",
                  options: ["A. 친구, 고맙습니다.", "B. 친구, 항상 고마워요."],
                  correctAnswerIndex: 1,
                  explanation:
                    "Thêm phó từ '항상' (luôn luôn) giúp câu nói thể hiện lòng biết ơn sâu sắc và kéo dài, không chỉ là nhất thời.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền từ còn thiếu: 엄마, <<blank>> 고맙습니다. (Mẹ, con LUÔN biết ơn mẹ - dùng từ mang sắc thái tình cảm)",
                  correctAnswer: "늘",
                  explanation:
                    "'늘' mang sắc thái tình cảm, nhẹ nhàng, rất hợp để nói với người thân trong gia đình.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Trong cuộc họp công ty trang trọng, bạn nên dùng từ cảm ơn nào? <<dropdown>>",
                  options: ["고마워", "감사합니다"],
                  correctAnswerIndex: 1,
                  explanation:
                    "'감사합니다' (Cảm tạ) mang sắc thái trang trọng, khách quan, phù hợp môi trường công sở.",
                },
              ],
            },
          },
          {
            id: 5,
            title: "Ôn tập",
            icon: <FaStar />,
            lessonLink: "/courses/1/topics/2/lessons/5",
            miniGameLink: "/courses/1/topics/2/lessons/5/minigame",
            status: "final",
            targets: [
              "Vận dụng chính xác ngữ pháp về sự tồn tại và định danh:Sử dụng thành thạo cấu trúc [Danh từ] + 이/가 있다/없다 (Có/Không có) và đuôi câu thân mật 이에요/예요 (Là) dựa trên quy tắc phụ âm cuối (batchim) để giới thiệu người hoặc sự vật.",
              "<b>Phân biệt sắc thái sở hữu cách trong văn hóa Hàn:</b> Nắm vững cách dùng từ 우리 (chúng tôi/của chúng tôi) khi nói về các tập hợp cộng đồng (gia đình, nhà) và 제 (của tôi) cho đồ vật cá nhân, tránh nhầm lẫn khi xưng hô.",
              "<b>Thực hành giao tiếp biểu cảm: Kết hợp từ vựng về cảm xúc</b> (사랑, 행복) và sự biết ơn (고맙습니다) để tự viết được các câu ngắn bày tỏ tình cảm với người thân hoặc hoàn thành đoạn hội thoại giới thiệu các mối quan hệ xã hội.",
            ],

            vocabIds: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
            practiceBox: {
              questions: [
                // --- PHẦN 1: TỪ VỰNG (VOCABULARY) ---
                {
                  questionType: "multipleChoice",
                  question:
                    "Từ nào sau đây có nghĩa là 'Bố' (cách gọi thân mật)?",
                  options: ["어머니", "아빠", "가족", "친구"],
                  correctAnswerIndex: 1,
                  explanation:
                    "<b>아빠</b> (appa) là cách gọi thân mật của Bố. <b>아버지</b> là cách gọi trang trọng hơn.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Chọn từ trái nghĩa với '있다' (Có/Tồn tại)?",
                  options: ["없다", "이다", "아니다", "모르다"],
                  correctAnswerIndex: 0,
                  explanation:
                    "<b>있다</b> (có) trái nghĩa với <b>없다</b> (không có).",
                },
                {
                  questionType: "multipleChoice",
                  question: "Từ '늘' (neul) đồng nghĩa với từ nào sau đây?",
                  options: ["지금", "오늘", "항상", "내일"],
                  correctAnswerIndex: 2,
                  explanation:
                    "<b>늘</b> và <b>항상</b> đều có nghĩa là 'luôn luôn', 'lúc nào cũng'.",
                },
                {
                  questionType: "fillInBlank",
                  question: "Điền từ còn thiếu: 'Em yêu anh' -> ________해요.",
                  correctAnswer: "사랑",
                  explanation:
                    "<b>사랑해요</b> (Saranghaeyo) nghĩa là 'Yêu'. Gốc từ là <b>사랑</b>.",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Khi muốn nói 'Tuyệt nhất' hoặc 'Số 1', người Hàn dùng từ nào?",
                  options: ["행복", "최고", "고맙습니다", "우리"],
                  correctAnswerIndex: 1,
                  explanation:
                    "<b>최고</b> (Choego) có nghĩa là 'Tuyệt nhất', 'Đỉnh nhất'.",
                },

                // --- PHẦN 2: NGỮ PHÁP - ĐUÔI CÂU LÀ (이에요/예요) ---
                {
                  questionType: "dropDown",
                  question:
                    "이 사람은 제 어머니<<dropdown>>. (Người này là mẹ tôi.)",
                  options: ["예요", "이에요", "입니다"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Danh từ <b>어머니</b> kết thúc bằng nguyên âm (i), nên dùng đuôi <b>예요</b>.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "저 사람은 제 가족<<dropdown>>. (Người kia là gia đình tôi.)",
                  options: ["예요", "이에요", "있어요"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Danh từ <b>가족</b> kết thúc bằng phụ âm (k), nên dùng đuôi <b>이에요</b>.",
                },
                {
                  questionType: "dropDown",
                  question: "이름이 지훈<<dropdown>>. (Tên là Jihoon.)",
                  options: ["예요", "이에요", "가"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Tên <b>지훈</b> (Jihoon) có phụ âm cuối (n), nên đi với <b>이에요</b>.",
                },
                {
                  questionType: "dropDown",
                  question: "여기는 우리 집<<dropdown>>. (Đây là nhà tôi.)",
                  options: ["이에요", "예요", "이"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Danh từ <b>집</b> (nhà) có phụ âm cuối (p), nên dùng <b>이에요</b>.",
                },

                // --- PHẦN 3: NGỮ PHÁP - SỞ HỮU/TỒN TẠI (이/가 있다/없다) ---
                {
                  questionType: "dropDown",
                  question: "저는 친구<<dropdown>> 있어요. (Tôi có bạn bè.)",
                  options: ["이", "가", "은"],
                  correctAnswerIndex: 1,
                  explanation:
                    "<b>친구</b> kết thúc bằng nguyên âm, nên dùng tiểu từ chủ ngữ <b>가</b> đi với cấu trúc 있다.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "가족<<dropdown>> 없어요? (Bạn không có gia đình à?)",
                  options: ["이", "가", "는"],
                  correctAnswerIndex: 0,
                  explanation:
                    "<b>가족</b> kết thúc bằng phụ âm, nên dùng tiểu từ chủ ngữ <b>이</b> đi với cấu trúc 없다.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Chọn câu đúng ngữ pháp: 'Mẹ có ở nhà.'",
                  options: [
                    "어머니가 있어요.",
                    "어머니이 있어요.",
                    "어머니가 없어요.",
                  ],
                  correctAnswerIndex: 0,
                  explanation: "어머니 (nguyên âm) + 가 + 있어요 (có/ở).",
                },

                // --- PHẦN 4: CÁCH DÙNG 'CỦA TÔI' (우리 vs 제) ---
                {
                  questionType: "multipleChoice",
                  question: "Người Hàn thường nói 'Gia đình tôi' là:",
                  options: ["내 가족", "제 가족", "우리 가족"],
                  correctAnswerIndex: 2,
                  explanation:
                    "Với các danh từ tập thể như gia đình, nhà, trường học, người Hàn dùng <b>우리</b> (chúng tôi/của chúng tôi) thay vì 'của tôi' để thể hiện tính cộng đồng.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Khi giới thiệu đồ vật cá nhân: 'Đây là cặp sách CỦA TÔI'. -> 이것은 ____ 가방이에요.",
                  correctAnswer: "제",
                  explanation:
                    "Với đồ vật cá nhân sở hữu riêng, dùng <b>제</b> (của tôi - khiêm tốn).",
                },

                // --- PHẦN 5: HỘI THOẠI & TỔNG HỢP (CONTEXT) ---
                {
                  questionType: "multipleChoice",
                  question:
                    "A: '고맙습니다' (Cảm ơn). -> B nên đáp lại thế nào cho phù hợp?",
                  options: [
                    "아니에요 (Không có chi)",
                    "네, 맞아요 (Vâng, đúng rồi)",
                    "안녕히 가세요 (Tạm biệt)",
                  ],
                  correctAnswerIndex: 0,
                  explanation:
                    "Khi ai đó cảm ơn, cách đáp lại lịch sự phổ biến là <b>아니에요</b> (Không có gì đâu/Không có chi).",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Dịch câu sau sang tiếng Hàn: 'Bố mẹ tôi luôn hạnh phúc.'",
                  options: [
                    "우리 부모님은 늘 행복해요.",
                    "우리 부모님은 늘 최고예요.",
                    "제 부모님은 행복이 없어요.",
                  ],
                  correctAnswerIndex: 0,
                  explanation:
                    "늘 (luôn luôn) + 행복해요 (hạnh phúc). (부모님 = Bố mẹ).",
                },
                {
                  questionType: "dropDown",
                  question:
                    "A: 누구예요? (Ai vậy?) - B: 제 <<dropdown>>예요. (Là bạn tôi.)",
                  options: ["친구", "가족", "선생님"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Trong các lựa chọn, cả 3 đều đúng ngữ pháp, nhưng dựa vào bài học 'bạn bè' thì <b>친구</b> là đáp án phù hợp nhất để đi với đuôi '예요' (vì 가족 và 선생님 cần '이에요').",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Hoàn thành câu cảm ơn: 'Luôn luôn cảm ơn'. -> ________ 고맙습니다.",
                  correctAnswer: "항상",
                  explanation:
                    "Có thể dùng '늘' hoặc '항상'. Trong ngữ cảnh này, đáp án yêu cầu từ vựng 2 âm tiết đã học: <b>항상</b>.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Câu nào dưới đây SAI ngữ pháp?",
                  options: ["친구가 있어요.", "가족이 없어요.", "엄마이예요."],
                  correctAnswerIndex: 2,
                  explanation:
                    "Sai ở <b>엄마이예요</b>. Vì '엄마' kết thúc bằng nguyên âm, phải dùng <b>엄마예요</b>.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền vào chỗ trống: 'Gia đình là số 1!' -> 가족이 ________!",
                  correctAnswer: "최고",
                  explanation:
                    "Cụm từ phổ biến: <b>가족이 최고!</b> (Gia đình là tuyệt nhất/số 1).",
                },
              ],
            },
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
            targets: [
              "Học viên nhận biết và phát âm đúng 5 số đếm thuần Hàn đầu tiên (1-5).",
              "Hiểu và áp dụng quy tắc biến đổi đặc biệt của 하나, 둘, 셋, 넷 khi có danh từ chỉ đơn vị đi kèm.",
              "Phân biệt sơ lược mục đích sử dụng giữa số Thuần Hàn và Hán Hàn.",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai người chụp ảnh (A)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Chúng ta cùng chụp ảnh nào! Chuẩn bị!" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "Vâng, được ạ!" }],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Để mình đếm nhé." },
                    { text: "Một, hai, ba!" },
                    { text: "(Tách!)" },
                  ],
                },
              ],
            },
            koDialogue: {
              mainRole: "A",
              hasSpeakerBox: true,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "같이 사진 찍어요! 준비!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_num_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "네, 좋아요!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_num_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "제가 셀게요. 하나, 둘, 셋!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_num_A2.mp3",
                    },
                    {
                      text: "(찰칵!)",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../sfx_camera.mp3", // Âm thanh máy ảnh
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Hai hệ thống số của Hàn Quốc",
              content: `
      Điều "hại não" nhưng thú vị nhất khi học tiếng Hàn là họ dùng hai hệ thống số song song!
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2"><b>Số Thuần Hàn (하나, 둘, 셋...):</b> Dùng để đếm những thứ nhìn thấy được (cái, quả, người...), đếm tuổi, và đếm GIỜ.</li>
        <li className="mb-2"><b>Số Hán Hàn (일, 이, 삼...):</b> Dùng cho ngày tháng năm, số điện thoại, số tầng, giá tiền, và đếm PHÚT/GIÂY.</li>
      </ul>
      <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
        🕒 <b>Ví dụ kinh điển:</b> 3 giờ 10 phút = <b>세</b> 시 (Thuần Hàn) <b>십</b> 분 (Hán Hàn).
      </div>
    `,
            },
            funQuiz: {
              question:
                "Khi bạn muốn đếm số quả táo trên bàn, bạn sẽ dùng hệ thống số nào?",
              options: [
                "A. Số Thuần Hàn (하나, 둘...)",
                "B. Số Hán Hàn (일, 이...)",
              ],
              correctAnswerIndex: 0, // Đáp án A
              explanation:
                "Số Thuần Hàn dùng để đếm số lượng đồ vật cụ thể (cái, quả, con...).",
            },
            vocabIds: [26, 27, 28, 29, 30],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question:
                    "Dạng biến đổi đúng của '하나' (1) khi đi kèm với đơn vị đếm là gì?",
                  options: ["하나", "한", "하"],
                  correctAnswerIndex: 1,
                  explanation: "Quy tắc: 하나 -> 한 (Ví dụ: 한 명).",
                },
                {
                  questionType: "multipleChoice",
                  question: "Chọn cụm từ đúng để nói '4 cái':",
                  options: ["넷 개", "네 개", "너 개"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Quy tắc: 넷 -> 네 (bỏ phụ âm cuối 's/t'). Đáp án đúng là '네 개'.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền dạng đúng của số 2: <<blank>> 시 (2 giờ). (Gợi ý: 둘 -> ?)",
                  correctAnswer: "두",
                  explanation:
                    "둘 khi đứng trước đơn vị '시' (giờ) sẽ biến thành '두'.",
                },
                {
                  questionType: "dropDown",
                  question: "Có 3 người: <<dropdown>> 명.",
                  options: ["셋", "세", "삼"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Khi đếm người (명), dùng số thuần Hàn và biến đổi '셋' thành '세'.",
                },
              ],
            },
          },

          {
            id: 2,
            title: "Thời gian",
            icon: <FaClock />,
            lessonLink: "/courses/1/topics/3/lessons/2",
            miniGameLink: "/courses/1/topics/3/lessons/2/minigame",
            status: "locked",
            targets: [
              "Học viên có thể hỏi và trả lời về giờ hiện tại một cách tự nhiên.",
              "Sử dụng thành thạo số đếm thuần Hàn kết hợp với đơn vị '시' (giờ).",
              "Hiểu về văn hóa 'nhanh lên' (Palli-palli) và tầm quan trọng của thời gian ở Hàn Quốc.",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai A (người hỏi giờ)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Cho tôi hỏi, bây giờ là mấy giờ ạ?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "À, bây giờ là 3 giờ." }],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Vâng, cảm ơn bạn." },
                    { text: "Hôm nay tôi có cuộc hẹn..." },
                  ],
                },
              ],
            },
            koDialogue: {
              mainRole: "A",
              hasSpeakerBox: true,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "저기요, 지금 몇 시예요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_time_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "아, 지금 세 시입니다.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_time_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "네, 고맙습니다.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_time_A2_1.mp3",
                    },
                    {
                      text: "오늘 약속이 있는데...",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_time_A2_2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Văn hóa '빨리빨리' (Nhanh lên!)",
              content: `
      Nếu có một từ để miêu tả Hàn Quốc, đó chính là <b>"빨리빨리" (palli-palli)</b>, nghĩa là "nhanh lên, nhanh lên!".
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Mọi thứ từ internet, giao hàng, đến công việc đều diễn ra với tốc độ chóng mặt.</li>
        <li>Thời gian (시간) rất được coi trọng. Trễ hẹn là điều tối kỵ.</li>
      </ul>
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        🏃 <b>Lời khuyên:</b> Khi có hẹn với người Hàn, hãy cố gắng đến sớm hơn giờ hẹn khoảng 5-10 phút để thể hiện sự tôn trọng nhé!
      </div>
    `,
            },
            funQuiz: {
              question:
                "Đặc điểm nổi bật nhất trong văn hóa thời gian của người Hàn Quốc là gì?",
              options: [
                "A. Từ từ, chậm rãi (천천히)",
                "B. Nhanh lên, nhanh lên (빨리빨리)",
                "C. Không quan trọng giờ giấc",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "'빨리빨리' (Nhanh lên) là nét văn hóa đặc trưng, phản ánh nhịp sống năng động và coi trọng hiệu quả thời gian của người Hàn.",
            },
            vocabIds: [31, 32, 33],
            practiceBox: {
              questions: [
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền dạng đúng để nói '1 giờ': 지금 <<blank>> 시예요.",
                  correctAnswer: "한",
                  explanation:
                    "Số 1 (하나) biến đổi thành '한' khi đi với đơn vị '시'.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền dạng đúng để nói '4 giờ': 지금 <<blank>> 시입니다.",
                  correctAnswer: "네",
                  explanation:
                    "Số 4 (넷) biến đổi thành '네' khi đi với đơn vị '시'.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Cách nói '5 giờ' nào sau đây là ĐÚNG?",
                  options: ["다섯 시", "오 시", "다섯 개"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Khi nói giờ, dùng số thuần Hàn (다섯) + 시. Số 5 không bị biến đổi hình thái.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Câu hỏi 'Bây giờ là mấy giờ?' là: <<dropdown>> 몇 시예요?",
                  options: ["오늘", "지금", "시간"],
                  correctAnswerIndex: 1,
                  explanation: "'지금' nghĩa là 'bây giờ'.",
                },
              ],
            },
          },
          {
            id: 3,
            title: "Hẹn lịch",
            icon: <FaCalendarAlt />,
            lessonLink: "/courses/1/topics/3/lessons/3",
            miniGameLink: "/courses/1/topics/3/lessons/3/minigame",
            status: "locked",
            targets: [
              "Học viên có thể hẹn giờ cho một kế hoạch trong tương lai (ngày mai, giờ ăn trưa).",
              "Sử dụng đúng tiểu từ chỉ thời gian '에' để xác định thời điểm.",
              "Hiểu văn hóa 'Giờ ăn trưa' (점심시간) của dân công sở Hàn Quốc.",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai người mời (A)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Jihoon ơi, ngày mai bạn có thời gian không?" },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "Có, mình rảnh." }, { text: "Sao vậy?" }],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "Ngày mai vào giờ ăn trưa chúng mình cùng đi ăn nhé.",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Được đó!" },
                    { text: "Vậy hẹn gặp lúc 1 giờ nhé." },
                  ],
                },
              ],
            },
            koDialogue: {
              mainRole: "A",
              hasSpeakerBox: true,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "지훈 씨, 내일 시간 있어요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_appt_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "네, 괜찮아요. 왜요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_appt_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "우리 내일 점심시간에 같이 밥 먹어요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_appt_A2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "좋아요! 그럼 한 시에 만나요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_appt_B2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Giờ ăn trưa của dân công sở Hàn",
              content: `
      <b>점심시간 (Giờ ăn trưa)</b>, thường từ 12h-1h, là một "khoảng trời riêng" cực kỳ quan trọng đối với dân công sở Hàn Quốc.
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Đây là lúc để xả stress, đi cà phê ☕, hoặc thậm chí là chợp mắt một chút.</li>
        <li>Rất nhiều nhà hàng có thực đơn <b>"bữa trưa công sở" (점심특선)</b> với giá ưu đãi.</li>
      </ul>
      <div className="mt-4 p-3 bg-orange-50 rounded-lg">
        🍱 <b>Văn hóa:</b> Hẹn ai đó vào giờ ăn trưa là một lời mời rất phổ biến và tự nhiên để xây dựng mối quan hệ đồng nghiệp.
      </div>
    `,
            },
            funQuiz: {
              question:
                "Tại sao '점심시간' (giờ ăn trưa) lại quan trọng với người đi làm ở Hàn Quốc?",
              options: [
                "A. Vì bắt buộc phải họp vào giờ này.",
                "B. Vì đây là thời gian để xả stress, nghỉ ngơi và giao lưu.",
                "C. Vì các nhà hàng chỉ mở cửa vào giờ trưa.",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "Giờ ăn trưa là khoảng thời gian quý báu để nghỉ ngơi, nạp năng lượng và thư giãn giữa giờ làm việc căng thẳng.",
            },
            vocabIds: [34, 35],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question: "Tiểu từ '에' được dùng để làm gì trong câu?",
                  options: [
                    "Chỉ chủ ngữ",
                    "Chỉ thời điểm xảy ra hành động",
                    "Chỉ tân ngữ",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "'에' gắn vào sau danh từ chỉ thời gian để chỉ thời điểm hành động diễn ra (vào lúc...).",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền từ phù hợp: 저는 다섯 시<<blank>> 집에 가요. (Tôi về nhà lúc 5 giờ)",
                  correctAnswer: "에",
                  explanation:
                    "Vì '다섯 시' là thời điểm cụ thể, cần thêm '에'.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền từ phù hợp (nhập X nếu không cần): 우리 오늘<<blank>> 영화 봐요. (Hôm nay xem phim nhé)",
                  correctAnswer: "X",
                  explanation:
                    "Với các từ như '오늘' (hôm nay), '내일' (ngày mai), '지금' (bây giờ), người Hàn thường lược bỏ '에'.",
                },
                {
                  questionType: "dropDown",
                  question: "한 시<<dropdown>> 만나요. (Gặp nhau lúc 1 giờ)",
                  options: ["가", "에", "는"],
                  correctAnswerIndex: 1,
                  explanation: "Thời gian cụ thể (1 giờ) cần tiểu từ '에'.",
                },
              ],
            },
          },
          {
            id: 4,
            title: "Tình huống thực tế về số đếm",
            icon: <TbCoins />,
            lessonLink: "/courses/1/topics/3/lessons/4",
            miniGameLink: "/courses/1/topics/3/lessons/4/minigame",
            status: "locked",
            targets: [
              "Học viên có thể sử dụng số đếm và đơn vị đếm để mua một số lượng đồ vật cụ thể.",
              "Nắm vững cấu trúc 'Danh từ + Số lượng + Đơn vị đếm' (Ví dụ: Táo 5 quả).",
              "Sử dụng thành thạo câu thần chú mua sắm '주세요' (Hãy cho tôi...).",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai Khách hàng (A)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Chào bác chủ ạ!" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "Xin mời vào!" }],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Táo này bao nhiêu tiền ạ?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "Ba quả năm nghìn won ạ." }],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Vậy thì, cho tôi năm quả táo ạ." }],
                },
              ],
            },
            koDialogue: {
              mainRole: "A",
              hasSpeakerBox: true,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "사장님, 안녕하세요!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_shop_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "어서 오세요!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_shop_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "이 사과 얼마예요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_shop_A2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "세 개에 오천 원입니다.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_shop_B2.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "그럼, 사과 다섯 개 주세요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_shop_A3.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "'주세요!' - Câu thần chú khi mua sắm",
              content: `
      <b>주세요 (juseyo)</b> là một trong những cụm từ hữu ích nhất bạn có thể học. Nó có nghĩa là "Hãy cho tôi...".
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Tại quán cà phê: <b>커피 한 잔 주세요</b> (Cho tôi 1 ly cà phê).</li>
        <li className="mb-2">Tại cửa hàng quần áo: <b>이거 보여 주세요</b> (Cho tôi xem cái này).</li>
        <li>Trên taxi: <b>서울역으로 가 주세요</b> (Hãy đi đến ga Seoul).</li>
      </ul>
      <div className="mt-4 p-3 bg-green-50 rounded-lg">
        🛍️ <b>Mẹo:</b> Chỉ cần chỉ vào món đồ bạn muốn và nói "이거 주세요" (Cho tôi cái này) là bạn đã có thể mua sắm dễ dàng!
      </div>
    `,
            },
            funQuiz: {
              question:
                "Câu '주세요' (Juseyo) thường được dùng trong tình huống nào?",
              options: [
                "A. Chào hỏi khi gặp mặt.",
                "B. Yêu cầu hoặc mua sắm (Hãy cho tôi...)",
                "C. Xin lỗi vì đến muộn.",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "'주세요' xuất phát từ động từ '주다' (cho), dùng để yêu cầu người khác đưa hoặc làm gì đó cho mình một cách lịch sự.",
            },
            vocabIds: [36, 37],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question:
                    "Thứ tự đúng của cụm từ '5 quả táo' trong tiếng Hàn là gì?",
                  options: [
                    "A. 사과 다섯 개 (Danh từ - Số - Đơn vị)",
                    "B. 다섯 개 사과 (Số - Đơn vị - Danh từ)",
                    "C. 개 다섯 사과 (Đơn vị - Số - Danh từ)",
                  ],
                  correctAnswerIndex: 0,
                  explanation:
                    "Trong tiếng Hàn, danh từ đứng trước, sau đó đến số lượng và cuối cùng là đơn vị đếm (사과 + 다섯 + 개).",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền từ còn thiếu: 사과 다섯 <<blank>> 주세요. (Cho tôi 5 quả táo)",
                  correctAnswer: "개",
                  explanation:
                    "Đơn vị đếm cho táo (trái cây nói chung) là '개'.",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Bạn muốn mua 2 quả cam (오렌지). Bạn sẽ nói thế nào?",
                  options: [
                    "A. 오렌지 둘 개 주세요.",
                    "B. 오렌지 두 개 주세요.",
                    "C. 오렌지 이 개 주세요.",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "Số 2 (둘) khi đi với đơn vị đếm (개) phải đổi thành '두'. Câu đúng: 오렌지 두 개 주세요.",
                },
                {
                  questionType: "dropDown",
                  question: "커피 한 잔 <<dropdown>>. (Cho tôi một ly cà phê)",
                  options: ["있어요", "주세요", "없어요"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Khi gọi món hoặc yêu cầu, dùng '주세요' (Hãy cho tôi).",
                },
              ],
            },
          },
          {
            id: 5,
            title: "Ôn tập",
            icon: <FaStar />,
            lessonLink: "/courses/1/topics/3/lessons/5",
            miniGameLink: "/courses/1/topics/3/lessons/5/minigame",
            status: "final",
            targets: [],
            sdgvdv,
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
            targets: [
              "Học viên có thể chỉ vào một món đồ và hỏi giá một cách lịch sự.",
              "Phân biệt và sử dụng đúng các đại từ chỉ định: 이거 (cái này), 그거 (cái đó), 저거 (cái kia).",
              "Hiểu văn hóa mua sắm khác biệt giữa Chợ truyền thống và Trung tâm thương mại tại Hàn Quốc.",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai Khách hàng (A)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Cho tôi hỏi!" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Vâng thưa quý khách." },
                    { text: "Quý khách tìm gì ạ?" },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Cái này bao nhiêu tiền ạ?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "À, bộ quần áo đó giá 30,000 won ạ." }],
                },
              ],
            },
            koDialogue: {
              mainRole: "A",
              hasSpeakerBox: true,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "저기요!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_shop_basic_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "네, 손님. 무엇을 찾으세요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_shop_basic_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "이거 얼마예요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_shop_basic_A2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "아, 그 옷은 삼만 원입니다.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_shop_basic_B2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Mua sắm ở đâu? Chợ vs. TTTM",
              content: `
      Khi mua sắm ở Hàn Quốc, có sự khác biệt lớn về giá cả và văn hóa giữa hai nơi:
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2"><b>Trung tâm thương mại (백화점):</b> Giá niêm yết cố định (정찰제). Không thể mặc cả, nhưng đảm bảo chất lượng và dịch vụ.</li>
        <li className="mb-2"><b>Chợ truyền thống (시장):</b> "Thiên đường" trả giá! Người bán thân thiện và thường giảm giá (깎아 주세요) nếu bạn mua nhiều hoặc trả tiền mặt.</li>
      </ul>
      <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
        💡 <b>Ghi nhớ:</b> Câu hỏi <b>"얼마예요?"</b> (Bao nhiêu tiền?) là chìa khóa để bắt đầu mọi cuộc giao dịch!
      </div>
    `,
            },
            funQuiz: {
              question:
                "Bạn có thể thoải mái mặc cả (trả giá) nhất ở địa điểm nào sau đây?",
              options: [
                "A. Trung tâm thương mại (백화점)",
                "B. Chợ truyền thống (시장)",
                "C. Cửa hàng tiện lợi (편의점)",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "Ở chợ truyền thống (Sijang), việc hỏi giá và mặc cả là một phần thú vị của văn hóa mua sắm Hàn Quốc.",
            },
            vocabIds: [38, 39],
            practiceBox: {
              questions: [
                {
                  questionType: "fillInBlank",
                  question:
                    "(Vật ở xa cả bạn và người bán) <<blank>> 모자 정말 예뻐요. (Chiếc mũ kia thật đẹp)",
                  correctAnswer: "저",
                  explanation:
                    "Khi vật ở xa cả người nói và người nghe, ta dùng '저' (kia) đứng trước danh từ.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "(Bạn đang cầm món đồ trên tay) <<blank>> 주세요. (Cho tôi cái này)",
                  correctAnswer: "이거",
                  explanation:
                    "Khi vật ở gần người nói (trên tay bạn), dùng đại từ '이거' (cái này).",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Khi người bán hàng đang cầm chiếc áo (xa bạn, gần người bán), bạn sẽ gọi chiếc áo đó là gì?",
                  options: [
                    "이거 (Cái này)",
                    "그거 (Cái đó)",
                    "저거 (Cái kia)",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "Dùng '그거' (cái đó) khi vật nằm gần người nghe (người bán) nhưng xa người nói (bạn).",
                },
                {
                  questionType: "dropDown",
                  question: "Câu hỏi giá tiền: 이거 <<dropdown>>?",
                  options: ["얼마예요", "몇 시예요", "누구예요"],
                  correctAnswerIndex: 0,
                  explanation: "'얼마예요?' nghĩa là 'Bao nhiêu tiền?'.",
                },
              ],
            },
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
  14: {
    text: "가족",
    transcription: "gajok",
    meaning: "Gia đình",
    usage:
      "Dùng để chỉ các thành viên trong nhà hoặc tập thể gia đình nói chung.",
    description: "Danh từ chỉ tập hợp những người thân thiết cùng chung sống.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_gajok.mp3", // Thay link
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2990/2990432.png", // Icon gia đình
    wordType: "noun",
    subdescription: "Bắt nguồn từ Hán tự 家族 (Gia tộc).",
    parts: [
      {
        text: "가",
        color: "--custom-blue",
        description: "Gia (nhà)",
      },
      {
        text: "족",
        color: "--custom-green",
        description: "Tộc (nhóm người)",
      },
    ],
    examples: [
      "제 가족은 4명입니다. (Gia đình tôi có 4 người.)",
      "가족 사진. (Ảnh gia đình.)",
    ],
  },
  15: {
    text: "어머니",
    transcription: "eomeoni",
    meaning: "Mẹ (trang trọng)",
    usage:
      "Dùng khi giới thiệu mẹ với người lạ hoặc trong văn viết, hoàn cảnh trang trọng.",
    description: "Danh từ chỉ người mẹ, mang sắc thái kính trọng.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_eomeoni.mp3", // Thay link
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png", // Icon mẹ
    wordType: "noun",
    subdescription: "Cách gọi thân mật hàng ngày là <b>엄마 (eomma)</b>.",
    parts: [
      {
        text: "어",
        color: "--custom-orange",
        description: "âm tiết 1",
      },
      {
        text: "머",
        color: "--custom-orange",
        description: "âm tiết 2",
      },
      {
        text: "니",
        color: "--custom-orange",
        description: "âm tiết 3",
      },
    ],
    examples: [
      "우리 어머니입니다. (Đây là mẹ tôi.)",
      "어머니, 사랑해요. (Mẹ ơi, con yêu mẹ - trang trọng)",
    ],
  },
  16: {
    text: "아버지",
    transcription: "abeoji",
    meaning: "Bố (trang trọng)",
    usage: "Dùng khi giới thiệu bố với người lạ hoặc thể hiện sự kính trọng.",
    description: "Danh từ chỉ người cha, mang sắc thái kính trọng.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_abeoji.mp3", // Thay link
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png", // Icon bố
    wordType: "noun",
    subdescription: "Cách gọi thân mật hàng ngày là <b>아빠 (appa)</b>.",
    parts: [
      {
        text: "아",
        color: "--custom-blue",
        description: "âm tiết 1",
      },
      {
        text: "버",
        color: "--custom-blue",
        description: "âm tiết 2",
      },
      {
        text: "지",
        color: "--custom-blue",
        description: "âm tiết 3",
      },
    ],
    examples: [
      "아버지는 의사입니다. (Bố tôi là bác sĩ.)",
      "아버지, 건강하세요. (Chúc bố mạnh khỏe.)",
    ],
  },

  17: {
    text: "친구",
    transcription: "chingu",
    meaning: "Bạn bè",
    usage:
      "Dùng để chỉ những người bạn cùng tuổi hoặc mối quan hệ bạn bè xã giao thân thiết (nếu đã thỏa thuận).",
    description: "Danh từ chỉ người bạn.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_chingu.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3002/3002655.png", // Icon bạn bè
    wordType: "noun",
    subdescription: "Bắt nguồn từ Hán tự 親舊 (Thân Cựu).",
    parts: [
      {
        text: "친",
        color: "--custom-blue",
        description: "Thân (thân thiết)",
      },
      {
        text: "구",
        color: "--custom-green",
        description: "Cựu (cũ/lâu năm)",
      },
    ],
    examples: [
      "제 친구입니다. (Đây là bạn tôi.)",
      "친구가 있어요. (Tôi có bạn.)",
    ],
  },
  18: {
    text: "있다",
    transcription: "itta",
    meaning: "Có / Ở",
    usage:
      "Dùng để diễn tả sự sở hữu hoặc sự tồn tại của người/vật tại một địa điểm.",
    description: "Động từ chỉ sự tồn tại.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_itta.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/10692/10692797.png", // Icon dấu tích/có
    wordType: "verb",
    subdescription:
      "Khi chia đuôi câu thân mật lịch sự (-어요) sẽ thành <b>있어요 (isseoyo)</b>.",
    parts: [
      {
        text: "있",
        color: "--custom-orange",
        description: "gốc từ",
      },
      {
        text: "다",
        color: "--custom-gray",
        description: "đuôi từ điển",
      },
    ],
    examples: ["친구가 있어요. (Tôi có bạn.)", "돈이 있어요. (Tôi có tiền.)"],
  },
  19: {
    text: "없다",
    transcription: "eopda",
    meaning: "Không có / Không ở",
    usage: "Là dạng phủ định của 있다.",
    description: "Động từ chỉ sự vắng mặt hoặc không sở hữu.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_eopda.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1828/1828843.png", // Icon dấu X/không có
    wordType: "verb",
    subdescription:
      "Khi chia đuôi câu thân mật lịch sự (-어요) sẽ thành <b>없어요 (eopseoyo)</b>.",
    parts: [
      {
        text: "없",
        color: "--custom-red",
        description: "gốc từ",
      },
      {
        text: "다",
        color: "--custom-gray",
        description: "đuôi từ điển",
      },
    ],
    examples: [
      "시간이 없어요. (Tôi không có thời gian.)",
      "친구가 없어요. (Tôi không có bạn.)",
    ],
  },
  20: {
    text: "사랑",
    transcription: "sarang",
    meaning: "Tình yêu",
    usage:
      "Dùng để nói về tình cảm yêu thương giữa người với người, hoặc sự yêu thích một vật gì đó.",
    description: "Danh từ chỉ tình yêu thương.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_sarang.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2589/2589175.png", // Icon trái tim
    wordType: "noun",
    subdescription:
      "Động từ là <b>사랑하다 (saranghada)</b>. Khi nói 'Tôi yêu bạn' thân mật: <b>사랑해요</b>.",
    parts: [
      {
        text: "사",
        color: "--custom-red",
        description: "âm tiết 1",
      },
      {
        text: "랑",
        color: "--custom-pink",
        description: "âm tiết 2",
      },
    ],
    examples: [
      "사랑해요. (Tôi yêu bạn.)",
      "사랑이 많은 가족. (Gia đình giàu tình yêu thương.)",
    ],
  },
  21: {
    text: "행복",
    transcription: "haengbok",
    meaning: "Hạnh phúc",
    usage: "Dùng để diễn tả trạng thái vui vẻ, mãn nguyện.",
    description: "Danh từ chỉ sự hạnh phúc.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_haengbok.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/742/742751.png", // Icon mặt cười hạnh phúc
    wordType: "noun",
    subdescription:
      "Bắt nguồn từ Hán tự 幸福 (Hạnh Phúc). Tính từ là <b>행복하다 (haengbokhada)</b>.",
    parts: [
      {
        text: "행",
        color: "--custom-blue",
        description: "Hạnh (may mắn)",
      },
      {
        text: "복",
        color: "--custom-green",
        description: "Phúc (phước lành)",
      },
    ],
    examples: [
      "우리 가족은 행복해요. (Gia đình tôi hạnh phúc.)",
      "행복한 하루 되세요! (Chúc một ngày hạnh phúc!)",
    ],
  },
  22: {
    text: "최고",
    transcription: "choego",
    meaning: "Tuyệt nhất / Số 1",
    usage: "Dùng để khen ngợi ai đó hoặc cái gì đó là đỉnh nhất, tốt nhất.",
    description: "Danh từ chỉ mức độ cao nhất.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_choego.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1628/1628931.png", // Icon ngón tay cái (Like/Best)
    wordType: "noun",
    subdescription:
      "Bắt nguồn từ Hán tự 最高 (Tối Cao). Thường đi kèm cử chỉ giơ ngón cái 👍.",
    parts: [
      {
        text: "최",
        color: "--custom-orange",
        description: "Tối (nhất)",
      },
      {
        text: "고",
        color: "--custom-purple",
        description: "Cao (cao)",
      },
    ],
    examples: [
      "우리 아빠 최고! (Bố tôi là số 1!)",
      "맛이 최고예요. (Vị ngon tuyệt vời.)",
    ],
  },
  23: {
    text: "고맙습니다",
    transcription: "gomapseumnida",
    meaning: "Cảm ơn (Lịch sự)",
    usage:
      "Dùng để cảm ơn một cách chân thành, ấm áp với người lớn hoặc trong giao tiếp lịch sự.",
    description: "Từ cảm ơn gốc thuần Hàn, mang sắc thái tình cảm.",
    audioUrl:
      "https://firebasestorage.googleapis.com/.../vocab_gomapseumnida.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1067/1067357.png", // Icon bắt tay/cảm ơn
    wordType: "phrase",
    subdescription:
      "Lưu ý phát âm: Chữ 'ㅂ' gặp 'ㄴ' đọc thành 'm'. Đọc là [go-map-seum-ni-da].",
    parts: [
      {
        text: "고맙",
        color: "--custom-blue",
        description: "gốc từ: biết ơn",
      },
      {
        text: "습니다",
        color: "--custom-gray",
        description: "đuôi câu trang trọng",
      },
    ],
    examples: [
      "도와주셔서 고맙습니다. (Cảm ơn vì đã giúp đỡ.)",
      "늘 고맙습니다. (Luôn biết ơn bạn.)",
    ],
  },
  24: {
    text: "늘",
    transcription: "neul",
    meaning: "Luôn luôn (Văn thơ)",
    usage:
      "Phó từ chỉ tần suất, mang sắc thái tình cảm, thường dùng trong văn viết hoặc lời nói chân thành.",
    description: "Phó từ chỉ sự liên tục, bền bỉ.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_neul.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2089/2089678.png", // Icon vô cực/đồng hồ
    wordType: "adverb",
    subdescription: "Đồng nghĩa với '항상' nhưng nghe nhẹ nhàng hơn.",
    parts: [
      {
        text: "늘",
        color: "--custom-purple",
        description: "luôn luôn",
      },
    ],
    examples: [
      "늘 건강하세요. (Chúc bạn luôn mạnh khỏe.)",
      "늘 고맙습니다. (Luôn biết ơn bạn.)",
    ],
  },
  25: {
    text: "항상",
    transcription: "hangsang",
    meaning: "Luôn luôn (Thường dùng)",
    usage: "Phó từ chỉ tần suất phổ biến nhất trong giao tiếp hàng ngày.",
    description: "Phó từ chỉ sự thường xuyên, lúc nào cũng vậy.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_hangsang.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2328/2328525.png", // Icon lịch/thời gian
    wordType: "adverb",
    subdescription: "Bắt nguồn từ Hán tự 恒常 (Hằng Thường).",
    parts: [
      {
        text: "항",
        color: "--custom-red",
        description: "Hằng (mãi mãi)",
      },
      {
        text: "상",
        color: "--custom-orange",
        description: "Thường (thường xuyên)",
      },
    ],
    examples: [
      "항상 행복하세요. (Chúc bạn luôn hạnh phúc.)",
      "저는 항상 아침을 먹어요. (Tôi luôn ăn sáng.)",
    ],
  },
  26: {
    text: "하나",
    transcription: "hana",
    meaning: "Một (1)",
    usage:
      "Dùng đếm số lượng. Biến đổi thành '한' khi đứng trước danh từ đơn vị (ví dụ: 한 명).",
    description: "Số đếm thuần Hàn số 1.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_hana.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3570/3570095.png", // Icon số 1
    wordType: "number",
    subdescription:
      "⚠️ Quy tắc biến đổi: <b>하나</b> → <b>한</b> (Ví dụ: 한 시 - 1 giờ).",
    parts: [
      { text: "하", color: "--custom-blue", description: "âm 1" },
      { text: "나", color: "--custom-blue", description: "âm 2" },
    ],
    examples: ["사과 하나 (1 quả táo)", "한 개 (1 cái)"],
  },
  27: {
    text: "둘",
    transcription: "dul",
    meaning: "Hai (2)",
    usage:
      "Dùng đếm số lượng. Biến đổi thành '두' khi đứng trước danh từ đơn vị.",
    description: "Số đếm thuần Hàn số 2.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_dul.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3570/3570098.png", // Icon số 2
    wordType: "number",
    subdescription:
      "⚠️ Quy tắc biến đổi: <b>둘</b> → <b>두</b> (Ví dụ: 두 시 - 2 giờ).",
    parts: [
      { text: "둘", color: "--custom-green", description: "âm tiết duy nhất" },
    ],
    examples: ["둘이서 (hai người cùng làm)", "두 명 (2 người)"],
  },
  28: {
    text: "셋",
    transcription: "set",
    meaning: "Ba (3)",
    usage:
      "Dùng đếm số lượng. Biến đổi thành '세' khi đứng trước danh từ đơn vị.",
    description: "Số đếm thuần Hàn số 3.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_set.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3570/3570100.png", // Icon số 3
    wordType: "number",
    subdescription:
      "⚠️ Quy tắc biến đổi: <b>셋</b> → <b>세</b> (Ví dụ: 세 개 - 3 cái).",
    parts: [
      { text: "셋", color: "--custom-orange", description: "âm tiết duy nhất" },
    ],
    examples: ["하나, 둘, 셋! (1, 2, 3!)", "세 번 (3 lần)"],
  },
  29: {
    text: "넷",
    transcription: "net",
    meaning: "Bốn (4)",
    usage:
      "Dùng đếm số lượng. Biến đổi thành '네' khi đứng trước danh từ đơn vị.",
    description: "Số đếm thuần Hàn số 4.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_net.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3570/3570103.png", // Icon số 4
    wordType: "number",
    subdescription:
      "⚠️ Quy tắc biến đổi: <b>넷</b> → <b>네</b> (Ví dụ: 네 명 - 4 người).",
    parts: [
      { text: "넷", color: "--custom-red", description: "âm tiết duy nhất" },
    ],
    examples: ["네 시 (4 giờ)", "네 살 (4 tuổi)"],
  },
  30: {
    text: "다섯",
    transcription: "daseot",
    meaning: "Năm (5)",
    usage: "Dùng đếm số lượng. KHÔNG biến đổi hình thái.",
    description: "Số đếm thuần Hàn số 5.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_daseot.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3570/3570106.png", // Icon số 5
    wordType: "number",
    subdescription:
      "Từ số 5 trở đi (다섯, 여섯...) thường không bị biến đổi khi ghép với đơn vị đếm.",
    parts: [
      { text: "다", color: "--custom-purple", description: "âm 1" },
      { text: "섯", color: "--custom-purple", description: "âm 2" },
    ],
    examples: ["다섯 개 (5 cái)", "다섯 시 (5 giờ)"],
  },
  31: {
    text: "시간",
    transcription: "sigan",
    meaning: "Thời gian / Giờ",
    usage:
      "Dùng để nói về khái niệm thời gian nói chung hoặc đơn vị đếm tiếng (ví dụ: 2 tiếng đồng hồ).",
    description: "Danh từ chỉ thời gian.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_sigan.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2928/2928750.png", // Icon đồng hồ cát/thời gian
    wordType: "noun",
    subdescription: "Bắt nguồn từ Hán tự 時間 (Thời Gian).",
    parts: [
      {
        text: "시",
        color: "--custom-blue",
        description: "Thời (thời giờ)",
      },
      {
        text: "간",
        color: "--custom-green",
        description: "Gian (khoảng cách)",
      },
    ],
    examples: [
      "시간이 있어요? (Bạn có thời gian không?)",
      "두 시간 (2 tiếng đồng hồ).",
    ],
  },
  32: {
    text: "지금",
    transcription: "jigeum",
    meaning: "Bây giờ",
    usage:
      "Phó từ chỉ thời điểm hiện tại, thường đứng đầu câu hoặc trước động từ.",
    description: "Từ chỉ thời điểm ngay lúc nói.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_jigeum.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2088/2088617.png", // Icon 'Now' hoặc chỉ tay xuống đất
    wordType: "adverb",
    subdescription: "Bắt nguồn từ Hán tự 只今 (Chỉ Kim).",
    parts: [
      {
        text: "지",
        color: "--custom-orange",
        description: "Chỉ (chỉ có)",
      },
      {
        text: "금",
        color: "--custom-red",
        description: "Kim (nay/hiện tại)",
      },
    ],
    examples: [
      "지금 몇 시예요? (Bây giờ là mấy giờ?)",
      "지금 가요. (Tôi đi ngay đây.)",
    ],
  },
  33: {
    text: "오늘",
    transcription: "oneul",
    meaning: "Hôm nay",
    usage: "Danh từ chỉ ngày hiện tại.",
    description: "Từ chỉ ngày hôm nay.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_oneul.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2693/2693507.png", // Icon lịch ngày hôm nay
    wordType: "noun",
    subdescription:
      "Là từ thuần Hàn. Hôm qua là <b>어제 (eoje)</b>, ngày mai là <b>내일 (naeil)</b>.",
    parts: [
      {
        text: "오",
        color: "--custom-purple",
        description: "âm tiết 1",
      },
      {
        text: "늘",
        color: "--custom-purple",
        description: "âm tiết 2",
      },
    ],
    examples: [
      "오늘 약속이 있어요. (Hôm nay tôi có hẹn.)",
      "오늘 날씨가 좋아요. (Hôm nay thời tiết đẹp.)",
    ],
  },
  34: {
    text: "내일",
    transcription: "naeil",
    meaning: "Ngày mai",
    usage:
      "Danh từ chỉ ngày ngay sau hôm nay. Thường đứng đầu câu hoặc làm trạng ngữ chỉ thời gian.",
    description: "Từ chỉ ngày mai.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_naeil.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2693/2693633.png", // Icon lịch ngày tiếp theo
    wordType: "noun",
    subdescription: "Bắt nguồn từ Hán tự 來日 (Lai Nhật - Ngày sắp đến).",
    parts: [
      {
        text: "내",
        color: "--custom-blue",
        description: "Lai (đến)",
      },
      {
        text: "일",
        color: "--custom-green",
        description: "Nhật (ngày)",
      },
    ],
    examples: [
      "내일 만나요. (Mai gặp nhé.)",
      "내일 시간 있어요? (Mai bạn rảnh không?)",
    ],
  },
  35: {
    text: "점심시간",
    transcription: "jeomsimsigan",
    meaning: "Giờ ăn trưa",
    usage: "Dùng để chỉ khoảng thời gian nghỉ trưa để ăn uống.",
    description: "Danh từ ghép chỉ giờ nghỉ trưa.",
    audioUrl:
      "https://firebasestorage.googleapis.com/.../vocab_jeomsimsigan.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2771/2771401.png", // Icon hộp cơm trưa/đồng hồ
    wordType: "noun",
    subdescription:
      "Ghép từ <b>점심</b> (bữa trưa) và <b>시간</b> (thời gian).",
    parts: [
      {
        text: "점심",
        color: "--custom-orange",
        description: "bữa trưa",
      },
      {
        text: "시간",
        color: "--custom-purple",
        description: "thời gian",
      },
    ],
    examples: [
      "점심시간에 뭐 해요? (Giờ trưa bạn làm gì?)",
      "점심시간이 12시예요. (Giờ ăn trưa là 12 giờ.)",
    ],
  },
  36: {
    text: "개",
    transcription: "gae",
    meaning: "Cái / Quả",
    usage:
      "Đơn vị đếm phổ biến nhất, dùng cho hầu hết các đồ vật nhỏ, trái cây, bánh kẹo...",
    description: "Lượng từ (đơn vị đếm) phổ biến.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_gae.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/415/415682.png", // Icon quả táo/đồ vật
    wordType: "counter",
    subdescription: "Luôn đứng sau số đếm Thuần Hàn (Ví dụ: 한 개, 두 개).",
    parts: [
      {
        text: "개",
        color: "--custom-blue",
        description: "cái/quả",
      },
    ],
    examples: [
      "사과 한 개 (1 quả táo).",
      "몇 개 드릴까요? (Tôi đưa bạn mấy cái ạ?)",
    ],
  },
  37: {
    text: "주세요",
    transcription: "juseyo",
    meaning: "Hãy cho tôi",
    usage:
      "Dùng để yêu cầu ai đó đưa vật gì đó hoặc làm gì đó cho mình một cách lịch sự.",
    description: "Câu yêu cầu lịch sự.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_juseyo.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1001/1001100.png", // Icon bàn tay đưa/nhận
    wordType: "phrase",
    subdescription: "Kết hợp: [Danh từ] + [Số lượng] + <b>주세요</b>.",
    parts: [
      {
        text: "주",
        color: "--custom-orange",
        description: "gốc từ: cho",
      },
      {
        text: "세요",
        color: "--custom-gray",
        description: "đuôi yêu cầu lịch sự",
      },
    ],
    examples: ["이거 주세요. (Cho tôi cái này.)", "물 주세요. (Cho tôi nước.)"],
  },
  39: {
    text: "이거",
    transcription: "igeo",
    meaning: "Cái này",
    usage: "Dùng để chỉ vật đang ở gần người nói.",
    description: "Đại từ chỉ định (gần người nói).",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_igeo.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3523/3523887.png", // Icon ngón tay chỉ vật gần
    wordType: "pronoun",
    subdescription: "Là dạng rút gọn của <b>이것 (igeot)</b>.",
    parts: [
      {
        text: "이",
        color: "--custom-blue",
        description: "này (gần)",
      },
      {
        text: "거",
        color: "--custom-green",
        description: "cái",
      },
    ],
    examples: [
      "이거 주세요. (Cho tôi cái này.)",
      "이거 뭐예요? (Cái này là gì?)",
    ],
  },
  40: {
    text: "얼마예요",
    transcription: "eolmayeyo",
    meaning: "Bao nhiêu tiền?",
    usage: "Câu hỏi giá cả phổ biến và lịch sự nhất.",
    description: "Cụm từ hỏi giá.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_eolmayeyo.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2454/2454282.png", // Icon tag giá tiền/dấu hỏi
    wordType: "phrase",
    subdescription: "Gồm <b>얼마</b> (bao nhiêu) + <b>예요</b> (là).",
    parts: [
      {
        text: "얼마",
        color: "--custom-orange",
        description: "bao nhiêu",
      },
      {
        text: "예요",
        color: "--custom-gray",
        description: "là (đuôi câu)",
      },
    ],
    examples: [
      "이거 얼마예요? (Cái này bao nhiêu tiền?)",
      "모두 얼마예요? (Tất cả bao nhiêu tiền?)",
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
