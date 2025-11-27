import { LearningCourse, MiniGame, Vocab } from "./types";
import speakerAAvatarUrl from "@/assets/images/lessons/speaker-A.svg";
import speakerBAvatarUrl from "@/assets/images/lessons/speaker-B.svg";
import MeoNho from "@/components/grammar/MeoNho";
import PurpleFlashCard from "@/components/grammar/PurpleFlashCard";
import TuKhoa from "@/components/grammar/TuKhoa";
import { P } from "node_modules/framer-motion/dist/types.d-BJcRxCew";
import BorderedGrammarBox from "../components/grammar/BorderedGrammarBox.jsx";
import GreenExampleBox from "@/components/grammar/GreenExampleBox";
import GrammarTable from "@/components/grammar/GrammarTable";
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
          {
            id: 5,
            title: "Ôn tập",
            icon: <FaStar />,
            lessonLink: "/courses/1/topics/2/lessons/5",
            miniGameLink: "/courses/1/topics/2/lessons/5/minigame",
            status: "final",
            targets: [
              "Hệ thống hóa từ vựng chủ đề: Ghi nhớ và sử dụng chính xác nhóm từ vựng về các thành viên trong Gia đình (가족), Mối quan hệ xã hội (친구) và các từ vựng biểu đạt Cảm xúc/Lòng biết ơn (사랑, 행복, 고맙습니다).",
              "Vận dụng linh hoạt ngữ pháp căn bản: Thành thạo cách chia đuôi câu giới thiệu (이에요/예요), cấu trúc diễn tả sự sở hữu/tồn tại (이/가 있다/없다) và phân biệt rõ ràng cách dùng đại từ sở hữu văn hóa Hàn Quốc (우리 dùng cho tập thể/gia đình vs 제 dùng cho cá nhân).",
              "Kỹ năng biểu đạt thực tế: Có khả năng viết được các câu hoàn chỉnh để giới thiệu về người thân hoặc viết những lời nhắn gửi yêu thương, cảm ơn ngắn gọn trong các dịp đặc biệt (như viết thiệp, nhắn tin).",
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
                        <th className="px-4 py-3 text-left font-bold border-r border-gray-300">Đại từ</th>
                        <th className="px-4 py-3 text-left font-bold border-r border-gray-300">Nghĩa</th>
                        <th className="px-4 py-3 text-left font-bold border-r border-gray-300">Vị trí</th>
                        <th className="px-4 py-3 text-left font-bold">Ví dụ minh họa</th>
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
            targets: [
              "Học viên có thể yêu cầu người bán đưa một món đồ cụ thể.",
              "Sử dụng thành thạo cấu trúc nối danh từ '-하고' (và) để mua nhiều món đồ.",
              "Hiểu văn hóa 'Service' (đồ tặng kèm) hào phóng của người Hàn Quốc.",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai Khách hàng (A)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Xin chào." }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "Xin mời vào." }],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "Ừm... cho tôi một chai Cola và hai cái bánh mì ạ.",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "Vâng. Của quý khách đây ạ." }],
                },
              ],
            },

            // 3. Hội thoại tiếng Hàn
            koDialogue: {
              mainRole: "A",
              hasSpeakerBox: true,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "안녕하세요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_shop_req_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "어서 오세요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_shop_req_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "저기... 콜라 한 병하고 빵 두 개 주세요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_shop_req_A2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "네. 여기 있습니다.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_shop_req_B2.mp3",
                    },
                  ],
                },
              ],
            },

            culturalStory: {
              title: "'서비스' (Service) - Nét văn hóa hào phóng",
              content: `
      Khi mua sắm tại Hàn Quốc (đặc biệt là chợ hoặc cửa hàng mỹ phẩm), nếu người bán đưa thêm đồ và nói <b>"이건 서비스예요"</b>, đừng ngạc nhiên!
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2"><b>Service (서비스)</b> là văn hóa tặng quà kèm miễn phí (free gift).</li>
        <li>Đây là cách người bán thể hiện lòng hiếu khách và cảm ơn khách hàng. Ví dụ: mua giày tặng tất, mua mỹ phẩm tặng mẫu thử.</li>
      </ul>
      <div className="mt-4 p-3 bg-pink-50 rounded-lg">
        🎁 <b>Lời khuyên:</b> Hãy vui vẻ đón nhận và nói "Cảm ơn" (감사합니다) nhé!
      </div>
    `,
            },

            funQuiz: {
              question:
                "Nếu người bán hàng nói 'Đây là Service (서비스)', điều đó có nghĩa là gì?",
              options: [
                "A. Bạn phải trả thêm phí dịch vụ.",
                "B. Đây là đồ tặng kèm miễn phí.",
                "C. Món đồ này cần được bảo hành.",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "'Service' trong văn hóa mua sắm Hàn Quốc có nghĩa là quà tặng kèm miễn phí để tri ân khách hàng.",
            },

            vocabIds: [40, 41, 42],

            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question:
                    "Từ nào dùng để nối hai danh từ với nghĩa là 'và/với' trong văn nói?",
                  options: ["-하고", "-에서", "-부터"],
                  correctAnswerIndex: 0,
                  explanation:
                    "-하고 (hago) dùng để nối hai danh từ, có nghĩa là 'và'.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Đơn vị đếm dùng cho chai, lọ (ví dụ: chai nước, chai rượu) là gì? (Nhập tiếng Hàn)",
                  correctAnswer: "병",
                  explanation:
                    "병 (byeong) là lượng từ dùng để đếm vật chứa trong chai, lọ.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền từ nối: 책 한 권<<blank>> 펜 한 개 주세요. (Cho tôi 1 quyển sách VÀ 1 cây bút)",
                  correctAnswer: "하고",
                  explanation: "Dùng '하고' để nối 'quyển sách' và 'cây bút'.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Cấu trúc mua nhiều món: Món 1 <<dropdown>> Món 2 주세요.",
                  options: ["하고", "이", "을"],
                  correctAnswerIndex: 0,
                  explanation: "Cấu trúc: [Danh từ 1]하고 [Danh từ 2] 주세요.",
                },
              ],
            },
          },
          {
            id: 3,
            title: "So sánh giá cả",
            icon: <FaBalanceScale />,
            lessonLink: "/courses/2/topics/4/lessons/3",
            miniGameLink: "/courses/2/topics/4/lessons/3/minigame",
            status: "locked",
            targets: [
              "Học viên có thể nhận xét về giá của một món đồ là đắt hay rẻ.",
              "Nắm vững quy tắc chia tính từ đuôi '-아요/어요' (Ví dụ: 싸요, 비싸요).",
              "Hiểu văn hóa mặc cả '깎아주세요' (Giảm giá đi ạ) tại các chợ truyền thống.",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai Khách hàng (A)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Cái quần này bao nhiêu tiền ạ?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "Cái đó 40,000 won." }],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Wow... hơi đắt ạ." }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Không đâu ạ." },
                    { text: "Kiểu dáng rất đẹp." },
                    { text: "Không đắt đâu." },
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
                      text: "이 바지 얼마예요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_price_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "그건 사만 원이에요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_price_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "와... 조금 비싸요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_price_A2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "아니에요. 디자인이 정말 예뻐요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_price_B2_1.mp3",
                    },
                    {
                      text: "비싸지 않아요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_price_B2_2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "'깎아주세요!' - Nghệ thuật mặc cả",
              content: `
      Khi mua sắm tại chợ (시장), nếu thấy một món đồ hơi đắt (비싸요), bạn hãy thử vận may với câu thần chú này nhé:
      <div className="my-3 font-bold text-center text-blue-600">
        "사장님, 조금만 깎아주세요."<br/>
        (Bác chủ ơi, giảm giá cho con một chút đi ạ.)
      </div>
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2"><b>깎다 (kkakda)</b>: Nghĩa gốc là cắt/gọt, ở đây là "cắt bớt giá".</li>
        <li><b>Mẹo nhỏ:</b> Hãy cười thật tươi và trả bằng tiền mặt (현금), khả năng được giảm giá sẽ cao hơn đấy!</li>
      </ul>
      <div className="mt-4 p-3 bg-red-50 rounded-lg">
        🚫 <b>Lưu ý:</b> Đừng mặc cả ở Trung tâm thương mại hoặc nơi đã niêm yết giá (Price tag) nhé!
      </div>
    `,
            },
            funQuiz: {
              question:
                "Câu nói nào sau đây dùng để xin giảm giá khi mua hàng ở chợ?",
              options: [
                "A. 이거 주세요. (Cho tôi cái này.)",
                "B. 깎아주세요. (Giảm giá cho tôi đi.)",
                "C. 얼마예요? (Bao nhiêu tiền?)",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "'깎아주세요' (Kkakkajuseyo) là câu nói phổ biến để mặc cả giá tiền.",
            },
            vocabIds: [43, 44],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question:
                    "Quy tắc chia đuôi '-아요' áp dụng cho những gốc từ có nguyên âm nào?",
                  options: ["ㅏ hoặc ㅗ", "ㅓ hoặc ㅜ", "ㅣ hoặc ㅡ"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Nếu nguyên âm cuối của gốc từ là 'ㅏ' hoặc 'ㅗ', ta cộng với '-아요' (Ví dụ: 싸다 -> 싸요).",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Chia tính từ '싸다' (Rẻ) sang đuôi câu thân mật: 이 옷은 정말 <<blank>>.",
                  correctAnswer: "싸요",
                  explanation: "싸다 -> 싸 + 아요 -> 싸요.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Chia tính từ '비싸다' (Đắt): 그 가방은 조금 <<blank>>.",
                  correctAnswer: "비싸요",
                  explanation: "비싸다 -> 비싸 + 아요 -> 비싸요.",
                },
                {
                  questionType: "dropDown",
                  question: "예쁘다 (Đẹp) -> 디자인이 정말 <<dropdown>>.",
                  options: ["예뻐요", "예빠요", "예쁘요"],
                  correctAnswerIndex: 0,
                  explanation:
                    "예쁘다 (nguyên âm 'ㅡ') -> cộng với '어요' và lược bỏ 'ㅡ' -> 예뻐요.",
                },
                {
                  questionType: "fillInBlank",
                  question: "많다 (Nhiều) -> 사람이 <<blank>>.",
                  correctAnswer: "많아요",
                  explanation: "많다 (nguyên âm 'ㅏ') -> 많아요.",
                },
              ],
            },
          },

          {
            id: 4,
            title: "Thương lượng giá cả",
            icon: <FaHandHoldingHeart />,
            lessonLink: "/courses/2/topics/4/lessons/4",
            miniGameLink: "/courses/2/topics/4/lessons/4/minigame",
            status: "locked",
            targets: [
              "Học viên có thể yêu cầu giảm giá (할인해 주세요) một cách tự nhiên.",
              "Biết cách bày tỏ cảm xúc vui vẻ, hạnh phúc khi mua được món đồ ưng ý.",
              "Sử dụng cấu trúc nguyên nhân - kết quả '-아서/어서' (Vì... nên...).",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai Khách hàng (A)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Đôi giày này đẹp quá!" },
                    { text: "Bao nhiêu tiền ạ?" },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "50,000 won ạ." }],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Đắt quá ạ..." },
                    { text: "Xin hãy giảm giá cho tôi." },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "Ừm... vậy đưa tôi 45,000 won thôi." }],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Wow! Cảm ơn ạ!" },
                    { text: "Tôi thực sự hạnh phúc vì mua được đôi giày này!" },
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
                      text: "이 신발 너무 예뻐요! 얼마예요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_emo_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "오만 원입니다.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_emo_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "너무 비싸요... 할인해 주세요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_emo_A2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "음... 그럼 사만 오천 원 주세요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_emo_B2.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "와! 고맙습니다!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_emo_A3_1.mp3",
                    },
                    {
                      text: "이 신발을 사서 정말 행복해요!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_emo_A3_2.mp3",
                    },
                  ],
                },
              ],
            },

            culturalStory: {
              title: "Tax Refund - Quyền lợi hấp dẫn",
              content: `
      Khi mua sắm tại Hàn Quốc, đừng quên quyền lợi <b>Tax Refund (Hoàn thuế)</b> dành cho khách du lịch nhé!
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Nếu bạn mua đơn hàng từ <b>30,000 KRW</b> trở lên tại các cửa hàng có logo "Tax Free", bạn sẽ được hoàn lại thuế GTGT.</li>
        <li>Nhiều cửa hàng hiện nay áp dụng <b>Immediate Tax Refund</b> (hoàn thuế ngay lập tức), tức là bạn sẽ được trừ trực tiếp tiền thuế vào giá thanh toán luôn. Rất tiện lợi và tiết kiệm!</li>
      </ul>
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        ✈️ <b>Mẹo:</b> Luôn mang theo Hộ chiếu (Passport) khi đi mua sắm để được hưởng ưu đãi này nhé.
      </div>
    `,
            },
            funQuiz: {
              question:
                "Để được hoàn thuế (Tax Refund) khi mua sắm ở Hàn Quốc, bạn cần mang theo giấy tờ gì?",
              options: [
                "A. Thẻ sinh viên",
                "B. Hộ chiếu (Passport)",
                "C. Vé máy bay",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "Hộ chiếu là giấy tờ bắt buộc để xác minh bạn là khách du lịch nước ngoài và đủ điều kiện hoàn thuế.",
            },
            vocabIds: [47, 48],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question:
                    "Cấu trúc '-아서/어서' dùng để diễn tả mối quan hệ gì?",
                  options: [
                    "Tương phản (Tuy... nhưng)",
                    "Nguyên nhân - Kết quả (Vì... nên)",
                    "Lựa chọn (Hoặc... hay)",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "'-아서/어서' gắn vào động từ/tính từ vế trước để chỉ nguyên nhân dẫn đến kết quả ở vế sau.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Nối câu: 날씨가 좋다 (Thời tiết tốt) + 기분이 좋아요 (Tâm trạng tốt) -> 날씨가 <<blank>> 기분이 좋아요.",
                  correctAnswer: "좋아서",
                  explanation:
                    "좋다 (kết thúc bằng 'ㅗ') -> cộng với '아서' -> 좋아서.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Chia động từ: 이 신발을 <<blank>> 행복해요. (Vì MUA đôi giày này nên hạnh phúc)",
                  correctAnswer: "사서",
                  explanation:
                    "사다 (kết thúc bằng 'ㅏ') -> cộng với '아서' -> 사 + 아서 -> 사서.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "쇼핑하다 (Mua sắm) -> 쇼핑<<dropdown>> 돈이 없어요. (Vì mua sắm nên hết tiền)",
                  options: ["하서", "해서", "해라서"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Động từ đuôi '하다' luôn biến đổi thành '해서'.",
                },
              ],
            },
          },
          {
            id: 5,
            title: "Ôn tập",
            icon: <FaStar />,
            lessonLink: "/courses/2/topics/4/lessons/5",
            miniGameLink: "/courses/2/topics/4/lessons/5/minigame",
            status: "final",
            targets: [
              "Tổng hợp và kiểm tra kỹ năng giao tiếp trong tình huống mua sắm thực tế.",
              "Ôn tập các từ vựng và ngữ pháp trọng tâm: Hỏi giá, Yêu cầu, Mặc cả, Cảm xúc.",
              "Hoàn thành hội thoại mua áo phông tại khu chợ dưới lòng đất.",
            ],
            vocabIds: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
            practiceBox: {
              questions: [
                // --- PHẦN 1: ĐẠI TỪ CHỈ ĐỊNH (DEMONSTRATIVES) ---
                {
                  questionType: "multipleChoice",
                  question: "Vật ở gần người nói (tôi), dùng từ nào?",
                  options: [
                    "저거 (Cái kia)",
                    "그거 (Cái đó)",
                    "이거 (Cái này)",
                  ],
                  correctAnswerIndex: 2,
                  explanation:
                    "<b>이거</b> (I-geo) dùng chỉ vật nằm gần người nói (Cái này).",
                },
                {
                  questionType: "multipleChoice",
                  question: "Vật ở xa cả người nói và người nghe, dùng từ nào?",
                  options: ["이거", "그거", "저거"],
                  correctAnswerIndex: 2,
                  explanation:
                    "<b>저거</b> (Jeo-geo) dùng chỉ vật ở xa cả hai người (Cái kia).",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Người nghe đang cầm một cái áo. Bạn muốn hỏi giá cái áo đó: '____ bao nhiêu tiền?'",
                  correctAnswer: "그거",
                  explanation:
                    "Vật nằm gần người nghe (xa người nói), ta dùng <b>그거</b> (Cái đó).",
                },

                // --- PHẦN 2: TỪ VỰNG MUA SẮM & GIÁ CẢ ---
                {
                  questionType: "fillInBlank",
                  question: "Hoàn thành câu hỏi giá tiền: 이거 ________예요?",
                  correctAnswer: "얼마",
                  explanation:
                    "<b>얼마예요?</b> (Eol-ma-ye-yo) là câu hỏi phổ biến nhất: 'Bao nhiêu tiền?'.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Trái nghĩa với '싸다' (Rẻ) là gì?",
                  options: ["예쁘다 (Đẹp)", "비싸다 (Đắt)", "좋다 (Tốt)"],
                  correctAnswerIndex: 1,
                  explanation: "<b>비싸다</b> (Bi-ssa-da) nghĩa là Đắt.",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Khi thấy giá đắt, bạn muốn xin bớt tiền, bạn nói từ nào?",
                  options: [
                    "주세요 (Cho tôi)",
                    "할인 (Giảm giá)",
                    "가세요 (Đi đi)",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "<b>할인</b> (Hal-in) nghĩa là giảm giá (Discount).",
                },

                // --- PHẦN 3: NGỮ PHÁP - CHIA TÍNH TỪ (ADJECTIVE CONJUGATION) ---
                {
                  questionType: "dropDown",
                  question: "Cái này đắt quá. -> 이거 너무 <<dropdown>>.",
                  options: ["비싸요", "비싸어요", "비싸해요"],
                  correctAnswerIndex: 0,
                  explanation:
                    "비싸다 (nguyên thể) -> bỏ 다, còn nguyên âm 'ㅏ' nên cộng với '아요' -> gộp thành <b>비싸요</b>.",
                },
                {
                  questionType: "dropDown",
                  question: "Cái áo này đẹp. -> 이 티셔츠가 <<dropdown>>.",
                  options: ["예쁘요", "예뻐요", "예빠요"],
                  correctAnswerIndex: 1,
                  explanation:
                    "예쁘다 (nguyên thể) -> bỏ 다, âm cuối là 'ㅡ' (ư), khi gặp nguyên âm sẽ mất 'ư' và biến đổi theo nguyên âm trước nó (hoặc mặc định '어'). -> <b>예뻐요</b>.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Chọn dạng chia đúng của '싸다' (Rẻ):",
                  options: ["써요", "싸요", "싸오"],
                  correctAnswerIndex: 1,
                  explanation: "싸다 -> <b>싸요</b> (Ssa-yo).",
                },

                // --- PHẦN 4: CẤU TRÚC NGUYÊN NHÂN - KẾT QUẢ (-아서/어서) ---
                {
                  questionType: "multipleChoice",
                  question: "Chọn câu đúng: 'Vì rẻ nên tôi mua.'",
                  options: ["싸서 샀어요.", "싸고 샀어요.", "싸지만 샀어요."],
                  correctAnswerIndex: 0,
                  explanation:
                    "Cấu trúc <b>-아서/어서</b> diễn tả nguyên nhân - kết quả. 싸다 -> 싸서 (Vì rẻ).",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Vì đẹp nên tôi hạnh phúc. -> <<dropdown>> 행복해요.",
                  options: ["예뻐서", "예쁘서", "예뻐고"],
                  correctAnswerIndex: 0,
                  explanation: "예쁘다 -> <b>예뻐서</b> (Vì đẹp).",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền đuôi câu nối (vì...): Hôm nay tôi gặp bạn nên vui. -> 친구를 만나____ 좋아요.",
                  correctAnswer: "서",
                  explanation: "만나다 (Gặp) -> 만나서 (Vì gặp...).",
                },

                // --- PHẦN 5: ĐƠN VỊ ĐẾM & LIÊN TỪ 'VÀ' ---
                {
                  questionType: "multipleChoice",
                  question: "Đơn vị đếm dùng cho 'chai/lọ' (nước, rượu) là gì?",
                  options: ["개 (cái)", "명 (người)", "병 (bình/chai)"],
                  correctAnswerIndex: 2,
                  explanation:
                    "<b>병</b> (Byeong) là lượng từ dùng cho chai, lọ, bình.",
                },
                {
                  questionType: "fillInBlank",
                  question: "Táo VÀ lê. -> 사과____ 배.",
                  correctAnswer: "하고",
                  explanation:
                    "<b>하고</b> (Ha-go) nghĩa là 'và' hoặc 'với', dùng để nối danh từ.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Câu nào đúng: 'Cho tôi táo và nước.'",
                  options: [
                    "사과가 물 주세요.",
                    "사과하고 물 주세요.",
                    "사과는 물 주세요.",
                  ],
                  correctAnswerIndex: 1,
                  explanation: "Dùng <b>하고</b> để nối hai danh từ cần mua.",
                },

                // --- PHẦN 6: TÌNH HUỐNG HỘI THOẠI (CONTEXT: SEOUL MARKET) ---
                {
                  questionType: "multipleChoice",
                  question:
                    "Người bán: '어서 오세요!' (Xin chào quý khách). Bạn nên đáp lại hoặc làm gì?",
                  options: [
                    "Chào lại: 안녕?",
                    "Hỏi: 안녕히 가세요.",
                    "Mỉm cười hoặc hỏi giá: 이거 얼마예요?",
                  ],
                  correctAnswerIndex: 2,
                  explanation:
                    "Trong tình huống mua sắm, sau lời chào mời, bạn có thể bắt đầu hỏi giá.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Bạn chê đắt và muốn giảm giá. Bạn nói:",
                  options: [
                    "좀 싸요. (Hơi rẻ)",
                    "좀 비싸요. 깎아 주세요/할인해 주세요. (Hơi đắt, giảm giá đi ạ)",
                    "돈이 있어요. (Tôi có tiền)",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "Cụm từ chuẩn để mặc cả là: <b>좀 비싸요. 할인해 주세요.</b>",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Sau khi người bán đồng ý giảm giá, bạn quyết định mua. -> 네, ____ 주세요. (Vâng, cho tôi cái này).",
                  correctAnswer: "이거",
                  explanation:
                    "Quyết định mua món đồ trước mặt: <b>이거 주세요</b>.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Người bán: 20,000 won ạ. -> <<dropdown>> 원이에요.",
                  options: ["이만 (2 vạn)", "이천 (2 ngàn)", "이백 (2 trăm)"],
                  correctAnswerIndex: 0,
                  explanation:
                    "20,000 trong tiếng Hàn là 2 vạn (man) -> <b>이만</b>.",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Sắp xếp hội thoại đúng:\n(1) 이거 얼마예요?\n(2) 이만 원이에요.\n(3) 어서 오세요!",
                  options: ["3 - 1 - 2", "1 - 2 - 3", "3 - 2 - 1"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Trình tự: Chào khách (3) -> Khách hỏi giá (1) -> Báo giá (2).",
                },
              ],
            },
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
            targets: [
              "Học viên có thể yêu cầu thực đơn và gọi món một cách tự tin.",
              "Hiểu văn hóa 'Banchan' (đồ ăn kèm) và văn hóa 'Refill' tại nhà hàng Hàn Quốc.",
              "Sử dụng cấu trúc thể hiện ý chí/dự định '-(으)ㄹ게요' (Tôi sẽ...).",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai Khách hàng (A)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Cho tôi hỏi, cho tôi xem thực đơn một chút ạ." },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Vâng, của quý khách đây ạ." },
                    { text: "Quý khách có muốn gọi món bây giờ không?" },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Vâng, cho tôi một suất bibimbap." },
                    { text: "Món này ngon thật sự!" },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Tôi hiểu rồi ạ." },
                    { text: "Xin quý khách vui lòng đợi một lát." },
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
                      text: "저기요, 메뉴 좀 주세요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_dining_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "네, 여기 있습니다. 주문하시겠어요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_dining_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "네, 비빔밥 하나 주세요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_dining_A2_1.mp3",
                    },
                    {
                      text: "이 음식 정말 맛있어요!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_dining_A2_2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "알겠습니다. 잠시만 기다려주세요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_dining_B2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "'Banchan' (반찬) - Tinh hoa bữa ăn Hàn",
              content: `
      Khi vào nhà hàng Hàn Quốc, bạn sẽ thấy nhân viên dọn ra rất nhiều đĩa thức ăn nhỏ (kim chi, củ cải, rau xào...) dù bạn không gọi. Đó chính là <b>Banchan (반찬)</b>!
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Đây là các món ăn phụ được phục vụ <b>miễn phí</b>.</li>
        <li>Hầu hết các nhà hàng đều cho phép bạn xin thêm (<b>리필 - ripil</b>) banchan miễn phí bao nhiêu lần tùy thích.</li>
      </ul>
      <div className="mt-4 p-3 bg-orange-50 rounded-lg">
        🥗 <b>Văn hóa:</b> Đừng ngại gọi thêm kim chi nếu bạn ăn hết nhé, đó là sự hào phóng của người Hàn đấy!
      </div>
    `,
            },
            funQuiz: {
              question:
                "Điều nào sau đây là ĐÚNG về Banchan (đồ ăn kèm) tại nhà hàng Hàn Quốc?",
              options: [
                "A. Bạn phải trả tiền cho từng đĩa.",
                "B. Được phục vụ miễn phí và có thể xin thêm (refill).",
                "C. Bạn phải tự mang theo từ nhà.",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "Banchan là nét văn hóa đặc trưng, thường được phục vụ miễn phí và không giới hạn số lần xin thêm tại hầu hết các nhà hàng.",
            },
            vocabIds: [49, 50, 51],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question: "Đuôi câu '-(으)ㄹ게요' dùng để diễn đạt điều gì?",
                  options: [
                    "Một sự thật hiển nhiên",
                    "Ý định hoặc quyết định ngay lúc nói",
                    "Quá khứ",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "'-(으)ㄹ게요' thể hiện ý chí, quyết định hoặc lời hứa của người nói thực hiện hành động nào đó (Tôi sẽ...).",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Chuyển sang dạng ý chí: 지금 갈 거예요. -> 지금 <<blank>>. (Tôi sẽ đi ngay)",
                  correctAnswer: "갈게요",
                  explanation: "가다 (không có patchim) + ㄹ게요 -> 갈게요.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Chuyển sang dạng ý chí: 책을 읽을 거예요. -> 책을 <<blank>>. (Tôi sẽ đọc sách)",
                  correctAnswer: "읽을게요",
                  explanation: "읽다 (có patchim) + 을게요 -> 읽을게요.",
                },
                {
                  questionType: "dropDown",
                  question: "주문하다 (Gọi món) -> 제가 <<dropdown>>.",
                  options: ["주문할게요", "주문해요", "주문했어요"],
                  correctAnswerIndex: 0,
                  explanation:
                    "주문하다 -> 주문하 + ㄹ게요 -> 주문할게요 (Tôi sẽ gọi món).",
                },
              ],
            },
            grammar: (
              <>
                <p className="font-semibold text-xl">
                  <span>Cấu trúc thể hiện ý chí/dự định: </span>
                  <span className="text-[var(--custom-orange)]">-(으)ㄹ게요</span>
                </p>
                <p className="font-medium text-[18px] my-3">
                  Khi bạn đã <b>quyết định xong</b> món mình muốn gọi hoặc muốn thông báo một hành động sẽ làm ngay,
                  bạn có thể dùng đuôi câu “<b>-(으)ㄹ게요</b>”. Cấu trúc này thể hiện ý chí <b>chủ động</b>, lịch sự và
                  <b>rất được ưa chuộng khi gọi món</b> hoặc trả lời nhân viên phục vụ.
                </p>
                <p className="font-medium text-[18px] my-3">
                  <b>Cách chia đuôi:</b>
                </p>
                <p className="font-medium text-[18px] my-3">
                  Quy tắc chia đuôi dựa vào việc gốc động từ (sau khi bỏ -다) kết thúc bằng nguyên âm hay phụ âm.
                </p>
                <ul className="list-decimal list-inside">
                  <li className="font-semibold text-[18px] my-3">
                    Trường hợp gốc từ kết thúc bằng nguyên âm:
                    <ul className="list-disc list-inside">
                      <li className="font-medium text-[18px] my-3">Thêm: -ㄹ게요</li>
                    </ul>
                    <GreenExampleBox className="my-3">
                      <ul className="list-disc list-inside ml-4 mb-3">
                        <li className="">
                          주문하다 (gọi món) → 주문할게요 (Tôi sẽ gọi món.)
                        </li>
                        <li className="">
                          보다 (xem) → 볼게요 (Tôi sẽ xem.)
                        </li>
                      </ul>
                    </GreenExampleBox>
                  </li>

                  <li className="font-semibold text-[18px] my-3">
                    Trường hợp gốc từ kết thúc bằng phụ âm:
                    <ul className="list-disc list-inside">
                      <li className="font-medium text-[18px] my-3">Thêm: -을게요</li>
                    </ul>
                    <GreenExampleBox className="my-3">
                      <ul className="list-disc list-inside ml-4 mb-3">
                        <li className="">
                          먹다 (ăn) → 먹을게요 (Tôi sẽ ăn.)
                        </li>
                        <li className="">
                          앉다 (ngồi) → 앉을게요 (Tôi sẽ ngồi.)
                        </li>
                      </ul>
                    </GreenExampleBox>
                    <MeoNho className="font-medium text-[18px]">
                      <p>
                        <b>Mẹo nhỏ:</b> So với câu tường thuật "비빔밥 하나 주문<b>해요</b>",
                        câu "비빔밥 하나 주문<b>할게요</b>" nghe tự nhiên và chủ động hơn hẳn, vì nó
                        thể hiện bạn đang thông báo quyết định gọi món của mình cho nhân viên phục vụ.
                      </p>
                    </MeoNho>
                  </li>
                </ul>
              </>
            )
          },
          {
            id: 2,
            title: "Chuyện ăn uống",
            icon: <FaShoppingCart />,
            lessonLink: "/courses/2/topics/5/lessons/2",
            miniGameLink: "/courses/2/topics/5/lessons/2/minigame",
            status: "locked",
            targets: [
              "Nhận biết các từ vựng cơ bản về đồ ăn (밥), thức uống (물).",
              "Sử dụng thành thạo động từ 'ăn' (먹다) và 'uống' (마시다).",
              "Hiểu và sử dụng thì quá khứ (-았/었-) để kể về bữa ăn đã qua.",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai A (người hỏi)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Bạn ăn trưa chưa?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Rồi, mình ăn rồi." },
                    { text: "Mình đã ăn canh kim chi." },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Ngon không?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Có, rất ngon." },
                    { text: "Mình cũng đã uống nhiều nước mát nữa." },
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
                      text: "점심 먹었어요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_food_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "네, 먹었어요. 김치찌개를 먹었어요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_food_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "맛있었어요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_food_A2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "네, 아주 맛있었어요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_food_B2_1.mp3",
                    },
                    {
                      text: "시원한 물도 많이 마셨어요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_food_B2_2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "'밥 먹었어요?' - Lời chào thân thương",
              content: `
      Ở Hàn Quốc, câu hỏi <b>"밥 먹었어요?"</b> (Bạn ăn cơm chưa?) không chỉ đơn thuần là hỏi về bữa ăn.
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Nó là một <b>lời chào</b>, thể hiện sự quan tâm chân thành đến sức khỏe và cuộc sống của đối phương, giống như "How are you?".</li>
        <li>Câu chào này xuất phát từ quá khứ khó khăn, khi việc có đủ cơm ăn là điều quan trọng nhất.</li>
      </ul>
      <div className="mt-4 p-3 bg-green-50 rounded-lg">
        🍚 <b>Giao tiếp:</b> Nếu ai đó hỏi bạn câu này, hãy hiểu là họ đang quan tâm đến bạn nhé!
      </div>
    `,
            },
            funQuiz: {
              question:
                "Khi một người bạn Hàn Quốc hỏi '밥 먹었어요?' (Bạn ăn cơm chưa?), ý nghĩa thường thấy nhất là gì?",
              options: [
                "A. Họ muốn mời bạn đi ăn ngay lập tức.",
                "B. Một lời chào hỏi thăm sức khỏe và quan tâm.",
                "C. Họ đang kiểm tra xem bạn có đói không.",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "Đây là một nét văn hóa đặc trưng, dùng việc hỏi thăm bữa ăn để thay lời chào hỏi ân cần.",
            },
            vocabIds: [52, 53, 54, 55],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question:
                    "Động từ có nguyên âm cuối là 'ㅏ' hoặc 'ㅗ' sẽ cộng với đuôi quá khứ nào?",
                  options: ["-았어요", "-었어요", "-했어요"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Quy tắc: Gốc từ có nguyên âm ㅏ, ㅗ -> cộng với -았어요 (Ví dụ: 가다 -> 갔어요).",
                },
                {
                  questionType: "fillInBlank",
                  question: "Chuyển sang quá khứ: 가다 (đi) -> <<blank>>.",
                  correctAnswer: "갔어요",
                  explanation: "가다 -> 가 + 았어요 -> 갔어요.",
                },
                {
                  questionType: "fillInBlank",
                  question: "Chuyển sang quá khứ: 보다 (xem) -> <<blank>>.",
                  correctAnswer: "봤어요",
                  explanation: "보다 -> 보 + 았어요 -> 봤어요.",
                },
                {
                  questionType: "fillInBlank",
                  question: "Chuyển sang quá khứ: 만들다 (làm) -> <<blank>>.",
                  correctAnswer: "만들었어요",
                  explanation:
                    "만들다 (nguyên âm 'ㅡ') -> cộng với '었어요' -> 만들었어요.",
                },
                {
                  questionType: "dropDown",
                  question: "마시다 (uống) -> 어제 물을 많이 <<dropdown>>.",
                  options: ["마시었어요", "마셨어요", "마셔요"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Trường hợp đặc biệt: 마시다 -> 마시 + 었어요 -> 마셨어요.",
                },
              ],
            },
            grammar: (
              <>
                <p className="font-semibold text-xl">
                  Thì quá khứ: <span className="text-[var(--custom-orange)]">-았/었-</span>
                </p>
                <p className="font-medium text-[18px] my-3">
                  Cấu trúc này dùng để diễn tả một hành động đã xảy ra và kết thúc trong quá khứ. Ta thêm trung tố quá khứ (-았 hoặc -었) vào gốc từ, sau đó chia đuôi câu lịch sự ~어요 (tạo thành -았어요 hoặc -었어요).
                </p>
                <p className="font-semibold text-[18px] my-3">
                  Cách chia đuôi:
                  <ul className="list-disc list-inside">
                    <li className="font-medium text-[18px] my-3"><b>Bước 1:</b> Bỏ đuôi -다 khỏi gốc từ.</li>
                    <li className="font-medium text-[18px] my-3"><b>Bước 2:</b> Áp dụng hòa âm, nhìn vào nguyên âm cuối của gốc từ để xác định trung tố quá khứ:</li>
                  </ul>
                </p>
                <GrammarTable
                  headers={["Gốc từ có chứa nguyên âm ...", "Trung tố Quá khứ", "Ví dụ"]}
                  rows={[
                    {
                      col1: "Sáng (十 hoặc +)",
                      col2: "-았어요",
                      col3: "좋다 (tốt) → 좋았어요 (Đã tốt)"
                    },
                    {
                      col1: "Tối (các nguyên âm còn lại)",
                      col2: "-았어요",
                      col3: "먹다 (ăn) → 먹었어요 (Đã ăn)"
                    }
                  ]}
                />
                <p className="font-semibold text-[18px] my-3">
                  Các Trường hợp Đặc biệt (Ngoại lệ & Rút gọn)
                </p>
                <p className="font-medium text-[18px] my-3">
                  Đây là những trường hợp thường gặp khi các âm tiết bị gộp lại:
                </p>
                <div className="mx-5">
                  <p className="font-semibold text-[18px] my-3">
                    1. Ngoại lệ 하다:
                  </p>
                  <li className="list-disc list-inside text-[18px] my-3">Mọi động từ kết thúc bằng -하다 đều đổi thành -했어요.</li>
                  <GreenExampleBox className="my-3">
                    <p>주문하다 (gọi món) → 주문했어요 (Đã gọi món)</p>
                  </GreenExampleBox>

                  <p className="font-semibold text-[18px] my-3">
                    2. Hợp nhất Nguyên âm:
                  </p>
                  <li className="list-disc list-inside text-[18px] my-3">Khi gốc từ kết thúc bằng một nguyên âm, gốc từ và trung tố quá khứ sẽ tự động hợp nhất.</li>
                  <GreenExampleBox className="my-3">
                    <p>마시다 (uống) → 마시 + 었어요 → 마셨어요 (Đã uống)<br />
                      가다 (đi) → 가 + 았어요 → 갔어요 (Đã đi)</p>
                  </GreenExampleBox>
                </div>
              </>
            )
          },
          {
            id: 3,
            title: "Nói về món ăn yêu thích",
            icon: <FaHeart />,
            lessonLink: "/courses/2/topics/5/lessons/3",
            miniGameLink: "/courses/2/topics/5/lessons/3/minigame",
            status: "locked",
            targets: [
              "Học viên có thể nói về món ăn mình thích (좋아하다) và không thích.",
              "Sử dụng thành thạo tiểu từ tân ngữ '-을/를' để chỉ đối tượng của hành động.",
              "Phân biệt cách dùng giữa '좋다' (tính từ) và '좋아하다' (động từ).",
            ],
            vnDialogue: {
              mainRole: "B", // Người học đóng vai Mina (B)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Mina thích món ăn gì?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Tôi thích đồ ăn cay." },
                    { text: "Đặc biệt là món tteokbokki." },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Thật sao? Tôi không thích đồ ăn cay." },
                    { text: "Tôi thích món bulgogi." },
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
                      text: "민아 씨는 무슨 음식을 좋아해요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_pref_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "저는 매운 음식을 좋아해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_pref_B1_1.mp3",
                    },
                    {
                      text: "특히 떡볶이를 좋아해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_pref_B1_2.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "정말요? 저는 매운 음식을 안 좋아해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_pref_A2_1.mp3",
                    },
                    {
                      text: "저는 불고기를 좋아해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_pref_A2_2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Tại sao người Hàn thích ăn cay?",
              content: `
      Trong đoạn hội thoại, Mina nói thích đồ ăn cay (매운 음식). Đây là một nét đặc trưng của ẩm thực Hàn Quốc.
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Người Hàn tin rằng vị cay giúp <b>giải tỏa căng thẳng (stress)</b> hiệu quả.</li>
        <li>Màu đỏ của ớt cũng kích thích vị giác, làm món ăn trông ngon miệng hơn.</li>
      </ul>
      <div className="mt-4 p-3 bg-red-50 rounded-lg">
        🌶️ <b>Thử thách:</b> Nếu bạn không ăn được cay, hãy nói <b>"안 맵게 해 주세요"</b> (Làm ơn đừng làm cay) khi gọi món nhé!
      </div>
    `,
            },
            funQuiz: {
              question: "Tại sao người Hàn Quốc thường thích ăn các món cay?",
              options: [
                "A. Để giải nhiệt mùa hè.",
                "B. Để giải tỏa căng thẳng (stress).",
                "C. Vì ớt rẻ hơn các gia vị khác.",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "Vị cay kích thích cơ thể tiết ra endorphin, giúp tâm trạng sảng khoái và giảm bớt căng thẳng.",
            },
            vocabIds: [56, 57, 58],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question:
                    "Tiểu từ '-을' được dùng khi danh từ kết thúc bằng gì?",
                  options: ["Nguyên âm", "Phụ âm (Patchim)", "Chữ '하'"],
                  correctAnswerIndex: 1,
                  explanation:
                    "'-을' gắn sau danh từ có phụ âm cuối (Patchim). Ví dụ: 밥을 (cơm).",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền tiểu từ thích hợp: 저는 한국 영화<<blank>> 좋아해요. (Phim Hàn Quốc - kết thúc bằng nguyên âm)",
                  correctAnswer: "를",
                  explanation:
                    "영화 (Yeonghwa) kết thúc bằng nguyên âm 'ㅏ' -> dùng '를'.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền tiểu từ thích hợp: 동생은 책<<blank>> 읽어요. (Sách - kết thúc bằng phụ âm)",
                  correctAnswer: "을",
                  explanation:
                    "책 (Chaek) kết thúc bằng phụ âm 'ㄱ' -> dùng '을'.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Câu nào sau đây ĐÚNG ngữ pháp?",
                  options: [
                    "A. 저는 불고기가 좋아해요.",
                    "B. 저는 불고기를 좋아해요.",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "Động từ '좋아하다' (thích) tác động lên đối tượng, nên đối tượng phải đi kèm tiểu từ tân ngữ '을/를'.",
                },
              ],
            },
            grammar: (
              <>
                <p className="font-semibold text-xl my">
                  Tiểu từ tân ngữ: <span className="text-[var(--custom-orange)]">-을/를-</span>
                </p>
                <p className="font-medium text-[18px] my-3">Đây là một trong những ngữ pháp cơ bản và quan trọng nhất. -을/를 được gắn sau danh từ để đánh dấu danh từ đó là Tân ngữ (đối tượng chịu sự tác động của hành động trong câu).</p>
                <GrammarTable className="my-3"
                  headers={["Dùng", "Gắn vào sau danh từ kết thúc bằng", "Ví dụ"]}
                  rows={[
                    {
                      col1: "-를 (reul)",
                      col2: "Nguyên âm",
                      col3: "저는 콜라를 마셔요. (Tôi uống cola.)"
                    },
                    {
                      col1: "-을 (eul)",
                      col2: "Phụ âm",
                      col3: "저는 밥을 먹어요. (Tôi ăn cơm.)"
                    }
                  ]}
                />
                <hr className="my-3 sm:my-4 border-gray-200" />
                <p className="font-semibold text-[18px] my-3">
                  Áp dụng Tiểu từ Tân ngữ: Phân biệt Tính từ (좋다) và Động từ (좋아하다)
                </p>
                <p className="font-medium text-[18px] my-3">
                  Mối liên hệ giữa -을/를 và 좋아하다 nằm ở sự thay đổi từ loại:
                </p>
                <ul className="list-disc list-inside my-3">
                  <li className="font-medium text-[18px]">
                    <b>Tính từ (좋다):</b> Diễn tả một trạng thái.
                  </li>
                  <li className="mx-6 font-medium text-[18px]">
                    Nên: Danh từ đứng trước nó là Chủ ngữ, dùng -이/가.
                  </li>
                </ul>

                <ul className="list-disc list-inside my-3">
                  <li className="font-medium text-[18px]">
                    <b>Động từ (좋아하다):</b> Về mặt cấu trúc, nó đúng là <b>좋다 + 하</b>. Việc thêm '하' đã biến từ Tính từ (trạng thái) thành Động từ (hành động).
                  </li>
                  <li className="mx-6 font-medium text-[18px]">
                    Nên: Khi có hành động, sẽ có Tân ngữ (đối tượng chịu tác động), và ta phải dùng -을/를 (tiểu từ tân ngữ bạn vừa học).
                  </li>
                </ul>
                <GrammarTable
                  className="my-3"
                  headers={["Từ", "Loại từ", "Cấu trúc cơ bản", "Tiểu từ cần dùng", "Ví dụ"]}
                  rows={[
                    {
                      col1: "좋다 (jota)",
                      col2: "Tính từ (Tốt/Ngon)",
                      col3: "Trạng thái",
                      col4: "-이/가",
                      col5: "불고기가 좋아요. (Món Bulgogi thì ngon/tuyệt.)"
                    },
                    {
                      col1: "좋아하다\n(joahada)",
                      col2: "Động từ (Thích)",
                      col3: "Hành động (좋다 + 하)",
                      col4: "-을/를",
                      col5: "저는 불고기를 좋아해요. (Tôi thích món Bulgogi.)"
                    }
                  ]}
                />
                <p className="font-medium text-[18px] my-3">
                  <b>Tổng kết:</b> Quy tắc cốt lõi là: Khi một Tính từ được chuyển thành Động từ hành động (thường bằng cách thêm -하), nó luôn yêu cầu Tân ngữ và bắt buộc phải dùng tiểu từ -을/를 để chỉ đối tượng tác động.
                </p>
              </>
            )
          },
          {
            id: 4,
            title: "Nói về ăn uống lành mạnh",
            icon: <FaAppleAlt />,
            lessonLink: "/courses/2/topics/5/lessons/4",
            miniGameLink: "/courses/2/topics/5/lessons/4/minigame",
            status: "locked",
            targets: [
              "Sử dụng các từ vựng về sức khỏe (건강, 힘) để giao tiếp.",
              "Đưa ra lời khuyên hoặc yêu cầu lịch sự bằng cấu trúc '-(으)세요'.",
              "Tìm hiểu về món ăn tẩm bổ nổi tiếng của Hàn Quốc: Samgyetang (Gà hầm sâm).",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai A (người mệt mỏi)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Dạo này tôi mệt quá." },
                    { text: "Không có chút sức lực nào." },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Vậy thì hãy ăn những món tốt cho sức khỏe đi." },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Món nào thì tốt ạ?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Hãy thử ăn món gà hầm sâm xem." },
                    { text: "Ăn vào là có sức lực ngay." },
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
                      text: "요즘 너무 피곤해요. 힘이 없어요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_health_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "그럼 건강에 좋은 음식을 드세요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_health_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "어떤 음식이 좋아요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_health_A2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "삼계탕을 드셔보세요. 먹으면 힘이 생겨요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_health_B2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Samgyetang - Món ăn tẩm bổ quốc dân",
              content: `
      <b>Samgyetang (삼계탕 - Gà hầm sâm)</b> là món ăn nổi tiếng nhất để bồi bổ sức khỏe (Boyangshik) tại Hàn Quốc.
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Người Hàn thường ăn món nóng này vào những ngày <b>nóng nhất mùa hè (Sambok)</b>.</li>
        <li>Triết lý ở đây là "Lấy nhiệt trị nhiệt" (이열치열), giúp cơ thể toát mồ hôi để giải nhiệt và phục hồi năng lượng.</li>
      </ul>
      <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
        🍗 <b>Thành phần:</b> Gà nguyên con nhồi gạo nếp, nhân sâm, táo tàu và tỏi. Rất bổ dưỡng!
      </div>
    `,
            },
            funQuiz: {
              question:
                "Tại sao người Hàn Quốc lại ăn món Gà hầm sâm nóng hổi vào mùa hè?",
              options: [
                "A. Vì mùa hè gà rẻ hơn.",
                "B. Để 'lấy nhiệt trị nhiệt', giải độc và bồi bổ cơ thể.",
                "C. Vì không có món nào khác để ăn.",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "Đây là phong tục '이열치열' (Dĩ nhiệt trị nhiệt), giúp cơ thể thải độc qua mồ hôi và nạp lại năng lượng đã mất do nắng nóng.",
            },
            vocabIds: [59, 60, 61],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question: "Cấu trúc '-(으)세요' dùng để làm gì?",
                  options: [
                    "Kể chuyện quá khứ",
                    "Ra lệnh hoặc đưa ra lời khuyên lịch sự",
                    "Hỏi ý kiến",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "'-(으)세요' là đuôi câu mệnh lệnh/khuyên nhủ trang trọng: Hãy làm gì đó.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Chuyển sang câu khuyên nhủ: 운동하다 (tập thể dục) -> 운동<<blank>>.",
                  correctAnswer: "하세요",
                  explanation:
                    "운동하다 (kết thúc bằng nguyên âm/ha) -> cộng '-세요' -> 운동하세요.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Chuyển sang câu khuyên nhủ: 책을 읽다 (đọc sách) -> 책을 <<blank>>.",
                  correctAnswer: "읽으세요",
                  explanation:
                    "읽다 (kết thúc bằng phụ âm) -> cộng '-으세요' -> 읽으세요.",
                },
                {
                  questionType: "dropDown",
                  question: "Dạng kính ngữ khuyên nhủ của '먹다' (ăn) là gì?",
                  options: ["먹으세요", "드세요", "잡수세요"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Kính ngữ của 먹다/마시다 là '드시다', nên khi khuyên nhủ sẽ là '드세요' (Mời ăn/uống).",
                },
              ],
            },
            grammar: (
              <>
                <p className="font-semibold text-xl my">
                  Cấu trúc Yêu cầu/Mời gọi lịch sự: <span className="text-[var(--custom-orange)]">-(으)세요</span>
                </p>
                <p className="font-medium text-[18px] my-3">
                  Cấu trúc này dùng để ra lệnh, yêu cầu, hoặc mời gọi một người nào đó làm gì, với mức độ lịch sự và trang trọng.
                </p>
                <p className="font-semibold text-[18px] my-3">
                  1. Gốc từ kết thúc bằng nguyên âm (hoặc gốc từ kết thúc bằng phụ âm ㄹ):
                </p>
                <ul className="list-disc list-inside">
                  <li className="font-medium text-[18px] my-3">Thêm: -세요 (Trong trường hợp ㄹ, ta sẽ bỏ ㄹ đi rồi thêm -세요).</li>
                </ul>
                <GreenExampleBox className="my-3">
                  <ul className="list-disc list-inside">
                    <li className="font-medium text-[18px]">가다 (đi) → 가세요 (Hãy đi đi.)</li>
                    <li className="font-medium text-[18px]">만들다 (làm) → 만드 + 세요 → 만드세요 (Hãy làm đi ạ.)</li>
                  </ul>
                </GreenExampleBox>
                <p className="font-semibold text-[18px] my-3">
                  2. Gốc từ kết thúc bằng phụ âm (Trừ ㄹ):
                </p>
                <ul className="list-disc list-inside">
                  <li className="font-medium text-[18px] my-3">Thêm: -으세요</li>
                </ul>
                <GreenExampleBox className="my-3">
                  <ul className="list-disc list-inside">
                    <li className="font-medium text-[18px]">앉다 (ngồi) → 앉으세요 (Xin mời ngồi ạ.)</li>
                  </ul>
                </GreenExampleBox>

                <BorderedGrammarBox
                  title="Trường hợp Đặc biệt (Kính ngữ của Động từ)"
                  className="mb-3"
                >
                  <p className="font-medium text-[18px]">
                    Trong tiếng Hàn, một số động từ thông thường có dạng từ riêng biệt (gọi là Kính ngữ từ vựng) để thể hiện sự tôn trọng đối với Chủ ngữ (người được mời).
                  </p>
                  <p className="font-medium text-[18px]">
                    <b>Tại sao phải đổi?</b>
                    <ul className="list-disc list-inside">
                      <li className="font-medium text-[18px]">먹다 (ăn) và 마시다 (uống) là các động từ thông thường.</li>
                      <li className="font-medium text-[18px]">Khi bạn dùng -(으)세요 để mời người lớn tuổi hoặc cấp trên, bạn phải dùng dạng kính ngữ của động từ đó: 드시다.</li>
                    </ul>
                  </p>

                  <p className="font-medium text-[18px]">
                    <b>Quy tắc chia:</b>
                    <ul className="list-disc list-inside">
                      <li className="font-medium text-[18px]">Sau khi đổi thành 드시다, ta chia theo quy tắc bình thường:</li>
                      <li className="font-medium text-[18px]">드시다 → 드 + 세요 → 드세요 (Xin mời ăn/uống ạ.)</li>
                    </ul>
                  </p>
                  <MeoNho className="font-medium text-[16px]">
                    <b>Mẹo nhỏ:</b> Bạn Chỉ cần nhớ ăn (mời), uống (mời) đều là 드세요
                  </MeoNho>
                </BorderedGrammarBox>
              </>
            )
          },
          {
            id: 5,
            title: "Ôn tập",
            icon: <FaStar />,
            lessonLink: "/courses/2/topics/5/lessons/5",
            miniGameLink: "/courses/2/topics/5/lessons/5/minigame",
            status: "final",
            targets: [
              "Tổng hợp kiến thức và kiểm tra khả năng giao tiếp trong tình huống nhà hàng thực tế.",
              "Ôn tập các từ vựng và ngữ pháp trọng tâm: Gọi món, Vị giác, Sức khỏe.",
              "Hoàn thành đoạn hội thoại: Gọi món và nhận xét về món ăn.",
            ],
            vocabIds: [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61],
            practiceBox: {
              questions: [
                // --- PHẦN 1: TỪ VỰNG NHÀ HÀNG (VOCABULARY) ---
                {
                  questionType: "multipleChoice",
                  question:
                    "Từ nào dùng để gọi nhân viên phục vụ trong nhà hàng?",
                  options: [
                    "안녕하세요 (Xin chào)",
                    "저기요 (Anh/Chị ơi)",
                    "고맙습니다 (Cảm ơn)",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "<b>저기요</b> (Jeo-gi-yo) là từ dùng để gây sự chú ý hoặc gọi nhân viên tại quán ăn.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Động từ '주문' (Ju-mun) có nghĩa là gì?",
                  options: ["Nấu ăn", "Gọi món (Order)", "Tính tiền"],
                  correctAnswerIndex: 1,
                  explanation:
                    "<b>주문하다</b> nghĩa là gọi món hoặc đặt hàng.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền từ còn thiếu: Món ăn này rất ngon. -> 이 음식은 정말 ________.",
                  correctAnswer: "맛있어요",
                  explanation:
                    "<b>맛있어요</b> (Ma-si-sseo-yo) nghĩa là 'Ngon'.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Trái nghĩa với 'Thích' (좋아하다) là gì?",
                  options: ["싫어하다 (Ghét)", "사랑하다 (Yêu)", "먹다 (Ăn)"],
                  correctAnswerIndex: 0,
                  explanation:
                    "<b>싫어하다</b> (Si-reo-ha-da) nghĩa là Ghét/Không thích.",
                },

                // --- PHẦN 2: NGỮ PHÁP - Ý CHÍ TƯƠNG LAI (-(으)ㄹ게요) ---
                {
                  questionType: "dropDown",
                  question: "Tôi sẽ gọi món. -> 저는 <<dropdown>>.",
                  options: ["주문할게요", "주문해요", "주문했어요"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Cấu trúc <b>-(으)ㄹ게요</b> diễn tả ý định của người nói sẽ làm gì ngay lúc đó. -> 주문할게요.",
                },
                {
                  questionType: "dropDown",
                  question: "Tôi sẽ ăn món này. -> 이거 <<dropdown>>.",
                  options: ["먹을게요", "먹ㄹ게요", "먹으세요"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Động từ <b>먹다</b> có phụ âm cuối (k), nên cộng với <b>을게요</b> -> 먹을게요.",
                },
                {
                  questionType: "fillInBlank",
                  question: "Tôi sẽ uống nước. -> 물을 ________게요. (마시다)",
                  correctAnswer: "마실",
                  explanation:
                    "Động từ <b>마시다</b> không có phụ âm cuối, cộng trực tiếp với <b>ㄹ게요</b> -> 마실게요.",
                },

                // --- PHẦN 3: NGỮ PHÁP - THÌ QUÁ KHỨ (-았/었어요) ---
                {
                  questionType: "multipleChoice",
                  question: "Chuyển sang quá khứ: '먹다' (Ăn).",
                  options: ["먹었어요", "먹았어요", "먹였어요"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Nguyên âm của 먹다 là 'ㅓ' (eo), nên cộng với <b>었어요</b> -> 먹었어요 (Đã ăn).",
                },
                {
                  questionType: "multipleChoice",
                  question: "Câu nào đúng: 'Hôm qua tôi đã gặp bạn.'",
                  options: [
                    "어제 친구를 만나요.",
                    "어제 친구를 만났어요.",
                    "내일 친구를 만났어요.",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "Trạng từ '어제' (Hôm qua) đòi hỏi thì quá khứ. 만나다 + 았어요 -> <b>만났어요</b>.",
                },
                {
                  questionType: "dropDown",
                  question: "Món ăn (đã) rất ngon. -> 정말 <<dropdown>>.",
                  options: ["맛있어요", "맛있었어요", "맛없었어요"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Nhận xét về bữa ăn đã kết thúc, dùng thì quá khứ: <b>맛있었어요</b> (Đã rất ngon).",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Hôm qua bạn đã làm gì? -> 어제 뭐 ________? (하다)",
                  correctAnswer: "했어요",
                  explanation: "Dạng quá khứ của 하다 là <b>했어요</b>.",
                },

                // --- PHẦN 4: SỞ THÍCH & TIỂU TỪ TÂN NGỮ (을/를) ---
                {
                  questionType: "dropDown",
                  question:
                    "Tôi thích Bulgogi. -> 저는 불고기<<dropdown>> 좋아해요.",
                  options: ["를", "을", "가"],
                  correctAnswerIndex: 0,
                  explanation:
                    "<b>불고기</b> kết thúc bằng nguyên âm, dùng tiểu từ tân ngữ <b>를</b> đi với động từ 좋아해요.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Tôi thích cơm trộn (Bibimbap). -> 비빔밥<<dropdown>> 좋아해요.",
                  options: ["를", "을", "이"],
                  correctAnswerIndex: 1,
                  explanation:
                    "<b>비빔밥</b> kết thúc bằng phụ âm (p), dùng tiểu từ tân ngữ <b>을</b>.",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Chọn câu đúng: 'Tôi thích sức khỏe.' (Nghe hơi lạ nhưng đúng ngữ pháp)",
                  options: [
                    "건강이 좋아해요.",
                    "건강을 좋아해요.",
                    "건강은 좋아해요.",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "Động từ <b>좋아하다</b> (Thích cái gì đó) luôn đi với tiểu từ tân ngữ <b>을/를</b>.",
                },

                // --- PHẦN 5: KHUYÊN NHỦ/MỜI MỌC (-(으)세요) ---
                {
                  questionType: "multipleChoice",
                  question: "Mời ngồi. -> 앉다 (Ngồi) + (으)세요.",
                  options: ["앉으세요", "앉세요", "앉아세요"],
                  correctAnswerIndex: 0,
                  explanation:
                    "앉다 có phụ âm cuối, cộng với <b>으세요</b> -> 앉으세요.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Kính ngữ của '먹다' (Ăn) khi mời người lớn dùng bữa là: ____세요.",
                  correctAnswer: "드",
                  explanation:
                    "Kính ngữ đặc biệt của 먹다 là <b>드시다</b> -> Mời ăn là <b>드세요</b>.",
                },

                // --- PHẦN 6: TÌNH HUỐNG HỘI THOẠI ---
                {
                  questionType: "multipleChoice",
                  question: "Bạn muốn xem thực đơn. Bạn nói:",
                  options: [
                    "메뉴 주세요. (Cho tôi thực đơn)",
                    "메뉴 있어요? (Có thực đơn không?)",
                    "Cả A và B đều được.",
                  ],
                  correctAnswerIndex: 2,
                  explanation:
                    "Cả hai cách đều tự nhiên, nhưng '메뉴 좀 주세요' là phổ biến nhất để yêu cầu.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Gọi món: Cho tôi Bulgogi VÀ nước. -> 불고기____ 물 주세요.",
                  correctAnswer: "하고",
                  explanation:
                    "Dùng <b>하고</b> để nối hai danh từ trong câu gọi món.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Nhân viên hỏi: Quý khách dùng gì ạ? -> 뭐 <<dropdown>>?",
                  options: ["주세요", "드릴까요", "먹어요"],
                  correctAnswerIndex: 1,
                  explanation:
                    "<b>드릴까요?</b> (Tôi làm ... cho bạn nhé?) là cách nhân viên hỏi khách hàng lịch sự.",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Sắp xếp hội thoại:\n(1) 네, 여기 있습니다. (Vâng, đây ạ)\n(2) 저기요! 메뉴 좀 주세요. (Em ơi, cho xin menu)\n(3) 주문할게요. (Tôi gọi món nhé)",
                  options: ["2 - 1 - 3", "3 - 2 - 1", "1 - 2 - 3"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Trình tự: Gọi lấy menu (2) -> Nhân viên đưa (1) -> Khách xem xong và gọi món (3).",
                },
              ],
            },
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
            targets: [
              "Học viên có thể nhận biết và nói về việc sử dụng các phương tiện giao thông công cộng phổ biến.",
              "Sử dụng thành thạo động từ 'đi/lên' phương tiện giao thông: 타다 (tada).",
              "Tìm hiểu về văn hóa sử dụng thẻ giao thông T-money tại Hàn Quốc.",
            ],
            vnDialogue: {
              mainRole: "B", // Người học đóng vai Mina (B)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Mina đi đến công ty bằng gì vậy?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "Tôi thường đi bằng tàu điện ngầm." }],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Bạn không đi xe buýt à?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Vâng, tàu điện ngầm nhanh hơn xe buýt." },
                    { text: "Còn Nam thì sao?" },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Tôi đi taxi." },
                    { text: "Taxi là thoải mái nhất." },
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
                      text: "민아 씨는 회사에 어떻게 가요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_trans_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "저는 보통 지하철을 타요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_trans_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "버스는 안 타요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_trans_A2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "네, 버스보다 지하철이 더 빨라요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_trans_B2_1.mp3",
                    },
                    {
                      text: "남 씨는요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_trans_B2_2.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "저는 택시를 타요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_trans_A3_1.mp3",
                    },
                    {
                      text: "택시가 제일 편해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_trans_A3_2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Thẻ T-money - 'Phép thuật' giao thông Hàn",
              content: `
      Khi di chuyển ở Hàn Quốc, bạn sẽ hiếm khi thấy ai dùng tiền mặt. Mọi người đều dùng chiếc thẻ "thần kỳ" gọi là <b>T-money</b>.
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Đây là thẻ giao thông đa năng, nạp tiền được tại các cửa hàng tiện lợi (GS25, CU...) và ga tàu.</li>
        <li>Chỉ cần "bíp" (quẹt thẻ) khi lên và xuống xe.</li>
        <li><b>Ưu điểm lớn nhất:</b> Cho phép chuyển đổi (transfer) giữa xe buýt và tàu điện ngầm miễn phí hoặc giảm giá trong khoảng thời gian nhất định!</li>
      </ul>
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        💳 <b>Mẹo du lịch:</b> Bạn có thể mua thẻ T-money in hình các Idol K-pop yêu thích tại các cửa hàng tiện lợi đấy!
      </div>
    `,
            },
            funQuiz: {
              question:
                "Lợi ích lớn nhất khi sử dụng thẻ T-money so với tiền mặt là gì?",
              options: [
                "A. Thẻ đẹp hơn tiền mặt.",
                "B. Được giảm giá hoặc miễn phí khi chuyển đổi phương tiện (Transfer).",
                "C. Có thể dùng để gọi điện thoại.",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "Hệ thống giao thông công cộng Hàn Quốc khuyến khích dùng thẻ bằng cách miễn phí hoặc giảm giá khi bạn chuyển từ xe buýt sang tàu điện ngầm (và ngược lại) trong vòng 30 phút.",
            },
            vocabIds: [62, 63, 64],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question:
                    "Động từ '타다' (tada) có nghĩa là gì khi dùng với phương tiện giao thông?",
                  options: ["Mua xe", "Lên xe / Đi xe", "Lái xe"],
                  correctAnswerIndex: 1,
                  explanation:
                    "'타다' nghĩa là lên tàu xe, cưỡi (ngựa, xe đạp), hoặc sử dụng phương tiện để di chuyển.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền tiểu từ thích hợp: 저는 버스<<blank>> 타요. (Tôi đi xe buýt - không có patchim)",
                  correctAnswer: "를",
                  explanation:
                    "버스 (Beoseu) kết thúc bằng nguyên âm 'ㅡ' -> dùng tiểu từ tân ngữ '를'.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền tiểu từ thích hợp: 저는 지하철<<blank>> 타요. (Tôi đi tàu điện ngầm - có patchim)",
                  correctAnswer: "을",
                  explanation:
                    "지하철 (Jihacheol) kết thúc bằng phụ âm 'ㄹ' -> dùng tiểu từ tân ngữ '을'.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Hoàn thành câu: 택시를 <<dropdown>>. (Tôi đi taxi)",
                  options: ["가요", "타요", "와요"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Với phương tiện giao thông (làm hành khách), ta dùng động từ '타요'.",
                },
              ],
            },
            grammar: (
              <>
                <p className="font-semibold text-xl my-3">
                  Cách nói "Đi/Sử dụng phương tiện":{" "}
                  <span className="text-[var(--custom-green)]">[Phương tiện]</span>{" "}
                  +{" "}
                  <span className="text-[var(--custom-orange)]">-을/를</span>{" "}
                  <span className="text-[var(--custom-red)]">타다</span>
                </p>
                <p className="font-medium text-[18px] my-3">
                  Để diễn tả hành động "đi" hoặc "lên" một phương tiện giao thông nào đó, người Hàn sử dụng động từ <b>타다</b> (tada).
                </p>
                <p className="font-medium text-[18px] my-3">
                  <b>Công thức:</b> [Danh từ phương tiện] + -을/를 타다.
                </p>
                <GreenExampleBox className="my-3">
                  <ul className="list-disc list-inside">
                    <li className="font-medium text-[18px]">지하철을 타요. (Tôi đi tàu điện ngầm.)</li>
                    <li className="font-medium text-[18px]">버스를 타요. (Tôi đi xe buýt.)</li>
                  </ul>
                </GreenExampleBox>
              </>
            )
          },
          {
            id: 2,
            title: "Hỏi đường",
            icon: <FaRoad />,
            lessonLink: "/courses/2/topics/6/lessons/2",
            miniGameLink: "/courses/2/topics/6/lessons/2/minigame",
            status: "locked",
            targets: [
              "Học viên có thể hỏi vị trí của một địa điểm cụ thể (어디예요?).",
              "Phân biệt và sử dụng đúng cặp động từ di chuyển cơ bản: 가다 (đi) - 오다 (đến).",
              "Nắm vững cấu trúc hỏi đường lịch sự '실례합니다' (Xin lỗi/Làm phiền).",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai Khách du lịch (A)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Xin lỗi ạ." },
                    { text: "Cho tôi hỏi ga Myeongdong ở đâu ạ?" },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "À, cô hãy đi thẳng về phía kia." },
                    { text: "Nó ở cạnh ngân hàng ạ." },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Cảm ơn ạ." },
                    { text: "Bây giờ tôi sẽ đi về phía đó." },
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
                      text: "실례합니다. 명동역이 어디에 있어요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_loc_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "아, 저쪽으로 쭉 가세요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_loc_B1_1.mp3",
                    },
                    {
                      text: "은행 옆에 있어요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_loc_B1_2.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "감사합니다. 지금 그쪽으로 갈게요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_loc_A2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Google Maps hay Naver Map?",
              content: `
      Khi tìm đường ở Hàn Quốc, bạn có thể sẽ bất ngờ vì <b>Google Maps không hoạt động tốt lắm</b> (do luật bảo mật dữ liệu). Thay vào đó, người Hàn sử dụng "bản đồ quốc dân":
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2"><b>Naver Map</b> hoặc <b>Kakao Map</b>: Cập nhật cực kỳ chi tiết từng ngõ ngách, cửa ra tàu điện ngầm và thời gian xe buýt chạy.</li>
        <li>Hầu hết các ứng dụng này đều đã hỗ trợ tiếng Anh, nên hãy tải ngay khi đến Hàn nhé!</li>
      </ul>
      <div className="mt-4 p-3 bg-green-50 rounded-lg">
        🗺️ <b>Mẹo:</b> Khi hỏi đường, nếu không biết nói, bạn chỉ cần đưa màn hình bản đồ Naver Map ra, người Hàn sẽ chỉ dẫn rất nhiệt tình.
      </div>
    `,
            },
            funQuiz: {
              question:
                "Ứng dụng bản đồ nào phổ biến và chính xác nhất để tìm đường tại Hàn Quốc?",
              options: [
                "A. Google Maps",
                "B. Naver Map / Kakao Map",
                "C. Apple Maps",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "Do quy định bảo mật, Google Maps bị hạn chế tính năng tại Hàn Quốc. Naver Map và Kakao Map là lựa chọn tốt nhất.",
            },
            vocabIds: [65, 66, 67],
            practiceBox: {
              questions: [
                {
                  questionType: "fillInBlank",
                  question:
                    "Hoàn thành câu hỏi: 화장실이 <<blank>>에 있어요? (Nhà vệ sinh ở đâu?)",
                  correctAnswer: "어디",
                  explanation: "'어디' nghĩa là ở đâu, chỗ nào.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Động từ '가다' (gada) mang nghĩa gì?",
                  options: [
                    "Đến (hướng về phía người nói)",
                    "Đi (ra xa người nói)",
                    "Ở lại",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "가다 (Đi) diễn tả hành động di chuyển rời xa vị trí hiện tại hoặc đích đến không phải là chỗ người nói đang đứng.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Động từ '오다' (oda) mang nghĩa gì?",
                  options: [
                    "Đến (hướng về phía người nói)",
                    "Đi (ra xa người nói)",
                    "Ngủ",
                  ],
                  correctAnswerIndex: 0,
                  explanation:
                    "오다 (Đến) diễn tả hành động di chuyển lại gần phía người nói.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Bạn đang ở trường, bạn rủ bạn mình: 'Về nhà thôi!'. Bạn dùng từ nào? 집에 <<dropdown>>.",
                  options: ["가요", "와요"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Vì nhà là đích đến (rời xa trường học hiện tại), nên dùng '가요' (Đi về nhà).",
                },
              ],
            },
            grammar: (
              <>
                <p className="font-semibold text-xl my-3">
                  Câu hỏi vị trí: [Địa điểm] + -이/가 어디예요? / 어디에 있어요?
                </p>
                <p className="font-semibold text-[18px] my-3">
                  Hỏi một [Địa điểm] là ở đâu?
                </p>
                <p className="font-medium text-[18px] my-3">
                  [Địa điểm] + -이/가 어디예요? (Địa điểm là ở đâu?)
                </p>
                <GreenExampleBox className="my-3">
                  <p className="font-medium text-[18px] my-3">
                    명동역이 어디예요? (Ga Myeongdong là ở đâu?)
                  </p>
                </GreenExampleBox>

                <p className="font-semibold text-[18px] my-3">
                  Hỏi một [Địa điểm] là ở đâu?
                </p>
                <p className="font-medium text-[18px] my-3">
                  [Địa điểm] + -이/가 어디에 있어요? (Địa điểm có ở đâu?)
                </p>
                <GreenExampleBox className="my-3">
                  <p className="font-medium text-[18px] my-3">
                    화장실이 어디에 있어요? (Nhà vệ sinh có ở đâu ạ?)
                  </p>
                </GreenExampleBox>
              </>
            )
          },
          {
            id: 3,
            title: "Phương hướng",
            icon: <FaCompass />,
            lessonLink: "/courses/2/topics/6/lessons/3",
            miniGameLink: "/courses/2/topics/6/lessons/3/minigame",
            status: "locked",
            targets: [
              "Học viên có thể hiểu và đưa ra chỉ dẫn đơn giản về hướng đi (trái, phải).",
              "Sử dụng thành thạo tiểu từ chỉ phương hướng '-(으)로' (Về phía...).",
              "Phân biệt rõ hai hướng cơ bản: 왼쪽 (Trái) và 오른쪽 (Phải).",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai Người hỏi đường (A)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Cho tôi hỏi, hiệu thuốc ở đâu ạ?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Anh hãy đi thẳng con đường này." },
                    { text: "Rồi ở ngã tư thì rẽ về phía bên phải." },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Không phải bên trái, mà là bên phải ạ?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Vâng, đúng rồi." },
                    { text: "Nếu đi về bên phải là sẽ thấy ngay ạ." },
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
                      text: "저기요, 약국이 어디에 있어요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_dir_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "이 길로 쭉 가세요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_dir_B1_1.mp3",
                    },
                    {
                      text: "그리고 사거리에서 오른쪽으로 가세요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_dir_B1_2.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "왼쪽 아니고, 오른쪽이요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_dir_A2.mp3",
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
                        "https://firebasestorage.googleapis.com/.../dialogue_dir_B2_1.mp3",
                    },
                    {
                      text: "오른쪽으로 가면 바로 보여요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_dir_B2_2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Chỉ đường kiểu Hàn: Dùng 'Landmark'",
              content: `
      Khi hỏi đường ở Hàn Quốc, thay vì dùng tên đường (vốn khá khó nhớ), người Hàn thường dùng các <b>"Landmark" (Mốc)</b> để chỉ dẫn.
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Các mốc phổ biến: Cửa hàng tiện lợi (GS25, CU), Tiệm bánh (Paris Baguette), Ngân hàng, hoặc Cửa ra tàu điện ngầm (Exit).</li>
        <li>Vì vậy, việc nghe được các từ chỉ hướng như <b>왼쪽 (Trái)</b>, <b>오른쪽 (Phải)</b>, <b>똑바로 (Thẳng)</b> kết hợp với mốc là kỹ năng sinh tồn quan trọng nhất!</li>
      </ul>
      <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
        🚶 <b>Mẹo:</b> Hãy chú ý các biển báo màu vàng hoặc xanh lá cây, chúng thường chỉ dẫn rất rõ ràng.
      </div>
    `,
            },
            funQuiz: {
              question:
                "Khi chỉ đường, người Hàn Quốc thường dựa vào yếu tố nào để dễ hình dung nhất?",
              options: [
                "A. Tọa độ GPS",
                "B. Tên đường chính xác",
                "C. Các tòa nhà hoặc cửa hàng nổi tiếng (Landmark)",
              ],
              correctAnswerIndex: 2, // Đáp án C
              explanation:
                "Việc sử dụng các địa điểm nổi bật (Landmark) như cửa hàng, ngân hàng, ga tàu giúp việc định hướng trực quan và dễ dàng hơn.",
            },
            vocabIds: [68, 69],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question: "Tiểu từ '-(으)로' dùng để diễn tả điều gì?",
                  options: ["Thời gian", "Phương hướng / Hướng tới", "Sở hữu"],
                  correctAnswerIndex: 1,
                  explanation:
                    "'-(으)로' gắn sau danh từ để chỉ hướng di chuyển (về phía...).",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền tiểu từ thích hợp: 오른쪽<<blank>> 가세요. (Hãy đi về phía bên phải - kết thúc bằng 'k')",
                  correctAnswer: "으로",
                  explanation:
                    "오른쪽 (Oreunjjok) kết thúc bằng phụ âm 'ㄱ' -> dùng '으로'.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền tiểu từ thích hợp: 위<<blank>> 올라가세요. (Hãy đi lên phía trên - '위' không có patchim)",
                  correctAnswer: "로",
                  explanation: "위 (Wi) kết thúc bằng nguyên âm -> dùng '로'.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Trường hợp đặc biệt: 교실 (lớp học - kết thúc bằng 'ㄹ') -> 교실<<dropdown>> 오세요.",
                  options: ["로", "으로"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Danh từ kết thúc bằng phụ âm 'ㄹ' (như 교실) đi với '로', không dùng '으로'.",
                },
              ],
            },
            grammar: (
              <>
                <p className="font-semibold text-xl my-3">
                  Tiểu từ chỉ phương hướng: -(으)로
                </p>
                <p className="font-medium text-[18px] my-3">
                  Đây là tiểu từ cực kỳ quan trọng khi chỉ đường. Nó được gắn sau danh từ chỉ phương hướng để diễn tả "về phía...", "hướng tới...".
                </p>
                <p className="font-semibold text-[18px] my-3">
                  Quy tắc chia đuôi:
                </p>
                <p className="font-medium text-[18px] my-3">
                  <b>-으로</b>: Dùng khi danh từ kết thúc bằng nguyên âm hoặc phụ âm 'ㄹ'.
                </p>
                <GreenExampleBox className="my-3">
                  <p className="font-medium text-[18px] my-3">
                    오른쪽으로 가세요. (Hãy đi về phía bên phải.)
                  </p>
                </GreenExampleBox>

                <p className="font-medium text-[18px] my-3">
                  <b>으로:</b> Dùng khi danh từ kết thúc bằng phụ âm (trừ 'ㄹ').
                </p>
                <GreenExampleBox className="my-3">
                  <p className="font-medium text-[18px] my-3">
                    한국으로 여행을 가요. (Tôi đi du lịch đến Hàn Quốc.)
                  </p>
                </GreenExampleBox>

                <MeoNho className="font-medium text-[16px]">
                  <b>Mẹo nhỏ:</b>Dùng -(으)로 để chỉ hướng đi hoặc phương tiện, còn 에 chỉ dùng để chỉ điểm đến cuối cùng (điểm dừng tĩnh).
                </MeoNho>
              </>
            )
          },
          {
            id: 4,
            title: "Phương tiện di chuyển an toàn",
            icon: <FaCarSide />,
            lessonLink: "/courses/2/topics/6/lessons/4",
            miniGameLink: "/courses/2/topics/6/lessons/4/minigame",
            status: "locked",
            grammar: (
              <>
                <p className="font-semibold text-xl my-3">
                  Cấu trúc so sánh hơn:{" "}
                  <span className="text-[var(--custom-green)]">A</span>{" "}
                  +{" "}
                  <span className="text-[var(--custom-orange)]">-보다 (더)</span>{" "}
                  +{" "}
                  <span className="text-[var(--custom-green)]">B</span>
                </p>
                <p className="font-medium text-[18px] my-3">
                  Để so sánh hai đối tượng, ta sử dụng tiểu từ -보다 (boda), có nghĩa là "hơn".
                </p>
                <p className="font-medium text-[18px] my-3">
                  <b>Công thức:</b> [Danh từ A] + [Danh từ B] + -보다 + (더) + [Tính từ/Động từ].
                </p>
                <GreenExampleBox className="my-3">
                  <p className="font-medium text-[18px]">
                    지하철이 버스보다 (더) 빨라요. (Tàu điện ngầm (thì) nhanh hơn xe buýt.)
                  </p>
                  <ul className="list-disc list-inside my-3">
                    <li className="font-medium text-[18px]">A (지하철) là Chủ ngữ</li>
                    <li className="font-medium text-[18px]">B (버스) là Danh từ (đối tượng so sánh)</li>
                    <li className="font-medium text-[18px]">빨라요 (빠르다 - nhanh) là Tính từ</li>
                  </ul>
                </GreenExampleBox>
              </>
            ),
            targets: [
              "Học viên có thể so sánh tốc độ và tính chất giữa các phương tiện giao thông (nhanh hơn/chậm hơn).",
              "Sử dụng các biểu hiện trấn an tinh thần như '괜찮아요' (Không sao đâu) và '걱정하지 마세요' (Đừng lo).",
              "Nắm vững cấu trúc so sánh hơn: [Danh từ A] + -보다 (더) + [Tính từ].",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai A (người lo lắng)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Hình như chúng ta bị lạc đường rồi." }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Không sao đâu." },
                    { text: "Đừng lo lắng." },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Hay chúng ta bắt taxi nhé?" },
                    { text: "Taxi có vẻ nhanh hơn." },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Được đó." },
                    { text: "Kia có taxi đang đến kìa!" },
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
                      text: "우리가 길을 잃은 것 같아요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_safe_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "괜찮아요. 걱정하지 마세요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_safe_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "택시를 탈까요? 택시가 더 빠른 것 같아요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_safe_A2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "좋아요. 저기 택시가 와요!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_safe_B2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Taxi an toàn & Kakao T",
              content: `
      Khi bị lạc hoặc cần di chuyển an toàn, Taxi là lựa chọn tốt nhất. Ở Hàn Quốc, ứng dụng <b>Kakao T</b> (màu vàng đặc trưng) là "vua" gọi xe.
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2"><b>An toàn:</b> Ứng dụng ghi lại lộ trình và thông tin tài xế, bạn có thể chia sẻ vị trí trực tiếp cho người thân (Ansim Message).</li>
        <li><b>Tiện lợi:</b> Không cần biết tiếng Hàn để chỉ đường, chỉ cần nhập điểm đến trên app.</li>
      </ul>
      <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
        🚕 <b>Lưu ý:</b> Nếu thấy đèn taxi màu đỏ hiện chữ "빈차" (Xe trống), nghĩa là bạn có thể vẫy xe!
      </div>
    `,
            },
            funQuiz: {
              question:
                "Ứng dụng gọi xe taxi phổ biến và an toàn nhất tại Hàn Quốc là gì?",
              options: ["A. Uber", "B. Kakao T", "C. Grab"],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "Kakao T là ứng dụng gọi xe phổ biến nhất, được tích hợp với bản đồ và thanh toán, giúp việc di chuyển an toàn và thuận tiện.",
            },
            vocabIds: [70, 71],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question: "Cấu trúc so sánh 'A + -보다 + B' có nghĩa là gì?",
                  options: ["A giống như B", "A hơn B (so sánh)", "A và B"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Tiểu từ '-보다' gắn sau danh từ dùng làm mốc so sánh, có nghĩa là 'hơn so với...'.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Hoàn thành câu: 지하철이 버스<<blank>> 빨라요. (Tàu điện ngầm nhanh HƠN xe buýt)",
                  correctAnswer: "보다",
                  explanation:
                    "지하철 (Tàu) + 이 (chủ ngữ) + 버스 (xe buýt) + 보다 (hơn) + 빨라요 (nhanh).",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Tính từ '빠르다' (Nhanh) khi chia đuôi '-아요' sẽ biến đổi thế nào?",
                  options: ["빠르아요", "빨라요", "빠라요"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Đây là bất quy tắc '르'. 빠르다 -> 빠 + ㄹ + 라요 -> 빨라요.",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Để trấn an ai đó 'Không sao đâu', bạn dùng câu nào?",
                  options: ["안녕하세요", "괜찮아요", "비싸요"],
                  correctAnswerIndex: 1,
                  explanation:
                    "'괜찮아요' (Gwaenchanayo) nghĩa là không sao, ổn.",
                },
              ],
            },
          },

          {
            id: 5,
            title: "Ôn tập",
            icon: <FaStar />,
            lessonLink: "/courses/2/topics/6/lessons/5",
            miniGameLink: "/courses/2/topics/6/lessons/5/minigame",
            status: "final",
            targets: [
              "Tổng hợp kiến thức về phương tiện, vị trí và hướng đi để thực hành hỏi đường.",
              "Ôn tập các cấu trúc quan trọng: '-(으)로 가세요' (Chỉ đường) và '-보다 더' (So sánh).",
              "Hoàn thành hội thoại hỏi đường đến công viên Seoul từ cửa hàng bách hóa.",
            ],
            vocabIds: [62, 63, 64, 65, 66, 67, 68, 69, 70, 71],
            practiceBox: {
              questions: [
                // --- PHẦN 1: TỪ VỰNG PHƯƠNG TIỆN & DI CHUYỂN ---
                {
                  questionType: "multipleChoice",
                  question: "Từ nào có nghĩa là 'Tàu điện ngầm'?",
                  options: [
                    "버스 (Xe buýt)",
                    "택시 (Taxi)",
                    "지하철 (Tàu điện ngầm)",
                  ],
                  correctAnswerIndex: 2,
                  explanation: "<b>지하철</b> (Ji-ha-cheol) là tàu điện ngầm.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Động từ '타다' (Ta-da) có nghĩa là gì?",
                  options: ["Đi bộ", "Lên xe/Đi xe", "Xuống xe"],
                  correctAnswerIndex: 1,
                  explanation:
                    "<b>타다</b> dùng cho hành động lên hoặc đi các phương tiện giao thông.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Từ nào chỉ hướng 'Bên trái'?",
                  options: ["오른쪽", "왼쪽", "똑바로"],
                  correctAnswerIndex: 1,
                  explanation:
                    "<b>왼쪽</b> (Oen-jjok) là bên trái. <b>오른쪽</b> (O-reun-jjok) là bên phải.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền từ trái nghĩa: Chậm (느리다) >< Nhanh (________).",
                  correctAnswer: "빠르다",
                  explanation: "<b>빠르다</b> (Ppa-reu-da) nghĩa là Nhanh.",
                },

                // --- PHẦN 2: NGỮ PHÁP - ĐI PHƯƠNG TIỆN (-을/를 타다) ---
                {
                  questionType: "dropDown",
                  question: "Tôi đi xe buýt. -> 저는 버스<<dropdown>> 타요.",
                  options: ["를", "을", "로"],
                  correctAnswerIndex: 0,
                  explanation:
                    "<b>버스</b> kết thúc bằng nguyên âm -> dùng tiểu từ tân ngữ <b>를</b> đi với động từ 타다.",
                },
                {
                  questionType: "dropDown",
                  question: "Tôi đi tàu điện ngầm. -> 지하철<<dropdown>> 타요.",
                  options: ["을", "를", "이"],
                  correctAnswerIndex: 0,
                  explanation:
                    "<b>지하철</b> kết thúc bằng phụ âm (l) -> dùng tiểu từ tân ngữ <b>을</b>.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Câu nào ĐÚNG ngữ pháp?",
                  options: ["택시를 가요.", "택시를 타요.", "택시로 타요."],
                  correctAnswerIndex: 1,
                  explanation:
                    "Cấu trúc chuẩn: <b>[Phương tiện] + 을/를 + 타다</b>.",
                },

                // --- PHẦN 3: NGỮ PHÁP - HỎI & CHỈ ĐƯỜNG (-(으)로 가세요) ---
                {
                  questionType: "fillInBlank",
                  question:
                    "Hỏi vị trí: Nhà vệ sinh ở đâu? -> 화장실이 ________예요?",
                  correctAnswer: "어디",
                  explanation: "<b>어디</b> (Ở đâu) dùng để hỏi địa điểm.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Hãy đi về phía bên phải. -> 오른쪽<<dropdown>> 가세요.",
                  options: ["으로", "로", "에"],
                  correctAnswerIndex: 0,
                  explanation:
                    "<b>오른쪽</b> có phụ âm cuối (k) -> cộng với <b>으로</b> để chỉ hướng đi.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Hãy đi về phía trên (위). -> 위<<dropdown>> 가세요.",
                  options: ["로", "으로", "는"],
                  correctAnswerIndex: 0,
                  explanation:
                    "<b>위</b> không có phụ âm cuối -> cộng trực tiếp với <b>로</b>.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Câu mệnh lệnh: 'Hãy đi thẳng.'",
                  options: ["쭉 가요.", "쭉 가세요.", "쭉 갑니다."],
                  correctAnswerIndex: 1,
                  explanation:
                    "Để chỉ đường lịch sự, dùng đuôi mệnh lệnh <b>-(으)세요</b>. -> <b>쭉 가세요</b>.",
                },

                // --- PHẦN 4: NGỮ PHÁP - SO SÁNH (-보다 더) ---
                {
                  questionType: "multipleChoice",
                  question:
                    "Tàu điện ngầm nhanh HƠN xe buýt. (Chọn cụm từ đúng cho 'Hơn xe buýt')",
                  options: ["버스보다", "버스하고", "버스처럼"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Cấu trúc so sánh: <b>[Danh từ] + 보다</b> (So với/Hơn danh từ đó).",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Xe buýt chậm hơn Taxi. -> 택시<<dropdown>> 버스가 느려요.",
                  options: ["보다", "더", "가"],
                  correctAnswerIndex: 0,
                  explanation:
                    "So với Taxi (Taxi là mốc so sánh) -> <b>택시보다</b>.",
                },
                {
                  questionType: "fillInBlank",
                  question: "Cái này tốt HƠN. -> 이게 ________ 좋아요.",
                  correctAnswer: "더",
                  explanation:
                    "Phó từ <b>더</b> (Deo) nghĩa là 'Hơn/Thêm', dùng để nhấn mạnh mức độ.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Chia tính từ '빠르다' (Nhanh) ở đuôi thân mật:",
                  options: ["빠르요", "빨라요", "빠라요"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Bất quy tắc '으': 빠르다 -> mất 'ư', thêm 'l' (ㄹ) vào patchim chữ trước -> <b>빨라요</b>.",
                },

                // --- PHẦN 5: TÌNH HUỐNG HỘI THOẠI THỰC TẾ ---
                {
                  questionType: "fillInBlank",
                  question:
                    "Mở đầu hội thoại hỏi đường lịch sự: ________합니다. (Xin lỗi/Làm phiền chút ạ)",
                  correctAnswer: "실례",
                  explanation:
                    "<b>실례합니다</b> (Sil-lye-ham-ni-da) là câu cửa miệng lịch sự trước khi hỏi người lạ.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Bạn: 'Đi xe buýt có được (ổn) không?'",
                  options: [
                    "버스를 타도 괜찮아요?",
                    "버스를 타도 빨라요?",
                    "버스를 타도 있어요?",
                  ],
                  correctAnswerIndex: 0,
                  explanation:
                    "<b>괜찮아요?</b> (Có ổn không/Có được không?) dùng để hỏi ý kiến hoặc sự cho phép.",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Người qua đường: 'Không, tàu điện ngầm nhanh hơn.'",
                  options: [
                    "아니요, 지하철이 더 비싸요.",
                    "아니요, 지하철이 더 빨라요.",
                    "네, 지하철이 더 빨라요.",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "Phủ định ý kiến đi xe buýt (아니요) + Đưa ra lựa chọn nhanh hơn (더 빨라요).",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Công viên Seoul ở đâu? -> 서울공원이 <<dropdown>>?",
                  options: ["어디예요", "어디가요", "어디에"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Câu hỏi vị trí chuẩn: <b>[Địa điểm] + 이/가 어디예요?</b>.",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Sắp xếp chỉ dẫn: (1) đi thẳng (2) rồi (3) đi về bên trái.",
                  options: [
                    "쭉 가다가 왼쪽으로 가세요.",
                    "왼쪽으로 가다가 쭉 가세요.",
                    "쭉 가세요 왼쪽 가세요.",
                  ],
                  correctAnswerIndex: 0,
                  explanation:
                    "<b>가다가</b> (Đi rồi thì/Đang đi thì...) dùng để nối hành động chuyển hướng. -> Đi thẳng rồi rẽ trái.",
                },
              ],
            },
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
            lessonLink: "/courses/3/topics/7/lessons/1",
            miniGameLink: "/courses/3/topics/7/lessons/1/minigame",
            status: "locked",
            targets: [
              "Học viên có thể miêu tả các trạng thái thời tiết cơ bản (trời trong, mưa).",
              "Sử dụng cấu trúc phỏng đoán '-(으)ㄹ 것 같다' để đưa ra dự báo thời tiết đơn giản.",
              "Tìm hiểu về đặc trưng 4 mùa xuân, hạ, thu, đông của Hàn Quốc.",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai A
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Thời tiết hôm nay đẹp thật đấy!" },
                    { text: "Bầu trời trong xanh ghê." },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Vâng, đúng vậy." },
                    {
                      text: "Nhưng trên tin tức họ nói có vẻ như ngày mai trời sẽ mưa.",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Thật sao?" },
                    { text: "Vậy cuộc hẹn ngày mai chúng ta để lần sau nhé?" },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "Vâng, làm vậy có lẽ sẽ tốt hơn." }],
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
                      text: "오늘 날씨 정말 좋네요! 하늘이 아주 맑아요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_weather_A1.mp3", // Thay link audio thực tế
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
                        "https://firebasestorage.googleapis.com/.../dialogue_weather_B1_1.mp3",
                    },
                    {
                      text: "그런데 뉴스에서 내일은 비가 올 것 같다고 했어요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_weather_B1_2.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "정말요? 그럼 내일 약속은 다음에 할까요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_weather_A2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "네, 그게 좋겠어요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_weather_B2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Bốn mùa rõ rệt của Hàn Quốc",
              content: `
      Hàn Quốc nổi tiếng với bốn mùa rõ rệt, mỗi mùa đều có một vẻ đẹp riêng:
      <ul className="list-disc list-inside ml-2 mt-2">
        <li><b>Xuân (봄):</b> Ấm áp, hoa anh đào nở rộ khắp nơi. </li>
        <li><b>Hạ (여름):</b> Nóng và ẩm, đặc biệt có mùa mưa lớn gọi là "장마" (jangma).</li>
        <li><b>Thu (가을):</b> Mát mẻ, khô ráo, nổi tiếng với lá phong đỏ rực rỡ. Đây được coi là mùa đẹp nhất để du lịch.</li>
        <li><b>Đông (겨울):</b> Lạnh và khô, thường có tuyết rơi trắng xóa.</li>
      </ul>
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        🍂 <b>Lời khuyên:</b> Mùa thu là thời điểm lý tưởng nhất để ngắm cảnh và tham gia các hoạt động ngoài trời.
      </div>
    `,
            },
            funQuiz: {
              question:
                "Mùa nào ở Hàn Quốc được coi là đẹp nhất với tiết trời mát mẻ và lá phong chuyển màu rực rỡ?",
              options: [
                "A. Mùa Xuân (봄)",
                "B. Mùa Hạ (여름)",
                "C. Mùa Thu (가을)",
              ],
              correctAnswerIndex: 2, // Đáp án C
              explanation:
                "Mùa thu (가을) ở Hàn Quốc có thời tiết dễ chịu nhất và cảnh sắc thiên nhiên tuyệt đẹp với lá vàng, lá đỏ.",
            },
            vocabIds: [72, 73, 74],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question:
                    "Cấu trúc '-(으)ㄹ 것 같다' dùng để diễn tả điều gì?",
                  options: [
                    "Một sự thật hiển nhiên",
                    "Sự phỏng đoán, suy luận (có vẻ như...)",
                    "Mệnh lệnh",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "'-(으)ㄹ 것 같다' mang nghĩa là 'có vẻ như', 'hình như là', dùng để phỏng đoán về tương lai hoặc hiện tại.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Dự đoán trời mưa: 내일은 비가 <<blank>> 것 같아요. (Ngày mai có vẻ sẽ mưa - động từ '오다')",
                  correctAnswer: "올",
                  explanation:
                    "오다 (kết thúc bằng nguyên âm) -> cộng 'ㄹ 것 같다' -> 올 것 같다.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Dự đoán điều tốt đẹp: 날씨가 <<blank>> 것 같아요. (Thời tiết có vẻ sẽ tốt - tính từ '좋다')",
                  correctAnswer: "좋을",
                  explanation:
                    "좋다 (kết thúc bằng phụ âm) -> cộng '을 것 같다' -> 좋을 것 같다.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Món ăn này có vẻ cay: 이 음식이 <<dropdown>> 것 같아요.",
                  options: ["맵을", "매울", "맵를"],
                  correctAnswerIndex: 1,
                  explanation:
                    "맵다 (Cay) là bất quy tắc 'ㅂ' -> biến thành '매우' + 'ㄹ 것 같다' -> 매울 것 같다.",
                },
              ],
            },
            grammar: (
              <>
                <p className="font-semibold text-xl my-3">
                  Cấu trúc phỏng đoán:{" "}
                  <span className="text-[var(--custom-orange)]">-(으)ㄹ</span>{" "}
                  <span className="text-[var(--custom-green)]">것</span>{" "}
                  <span className="text-[var(--custom-purple)]">같다</span>{" "}
                  (Có vẻ như/Hình như...)
                </p>
                <p className="font-medium text-[18px] my-3">
                  Đây là một trong những bất quy tắc phổ biến nhất trong tiếng Hàn. Khi một gốc động từ/tính từ kết thúc bằng phụ âm 'ㅂ' và theo sau nó là một nguyên âm (ví dụ như khi chia đuôi -아요/어요), quy tắc sau sẽ được áp dụng:
                </p>
                <p className="font-semibold text-[18px] my-3">
                  Quy tắc chia gốc từ (Bỏ đuôi -다):
                </p>
                <p className="font-semibold text-[18px] my-3">
                  1. Gốc từ kết thúc bằng nguyên âm <span className="font-medium">(hoặc kết thúc bằng phụ âm ㄹ):</span>
                </p>
                <p className="font-medium text-[18px] my-3">
                  <b>Thêm:</b> -ㄹ 것 같다
                </p>
                <GreenExampleBox className="my-3">
                  <ul className="list-disc list-inside">
                    <li className="font-medium text-[18px]">내일은 비가 올 것 같아요. (Có vẻ như ngày mai trời sẽ mưa.)</li>
                    <li className="font-medium text-[18px] mx-5">오다 (đến) → 올 것 같아요 (Có vẻ sẽ đến/mưa.)</li>
                  </ul>
                </GreenExampleBox>

                <p className="font-semibold text-[18px] my-3">
                  2. Gốc từ kết thúc bằng phụ âm <span className="font-medium">(trừ ㄹ):</span>
                </p>
                <p className="font-medium text-[18px] my-3">
                  <b>Thêm:</b> -을 것 같다
                </p>
                <GreenExampleBox className="my-3">
                  <ul className="list-disc list-inside">
                    <li className="font-medium text-[18px]">이 식당은 정말 좋을 것 같아요. (Có vẻ như nhà hàng này sẽ rất tốt/ngon.)</li>
                    <li className="font-medium text-[18px] mx-5">좋다 (tốt) → 좋을 것 같아요 (Có vẻ sẽ tốt.)</li>
                  </ul>
                </GreenExampleBox>
              </>
            )
          },
          {
            id: 2,
            title: "Miêu tả cảm nhận về thời tiết",
            icon: <WiDaySunnyOvercast />,
            lessonLink: "/courses/3/topics/7/lessons/2",
            miniGameLink: "/courses/3/topics/7/lessons/2/minigame",
            status: "locked",
            targets: [
              "Học viên có thể miêu tả cảm giác nóng (덥다), lạnh (춥다) của thời tiết.",
              "Hiểu và áp dụng thành thạo quy tắc bất quy tắc của 'ㅂ' (ㅂ 불규칙).",
              "Tìm hiểu về văn hóa sưởi sàn Ondol độc đáo của Hàn Quốc.",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai A
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Wow, hôm nay lạnh quá!" },
                    { text: "Có vẻ như mùa đông đã đến rồi." },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Đúng vậy. Hôm qua vẫn ổn mà..." },
                    {
                      text: "Mùa hè thì khổ vì quá nóng, mùa đông thì khổ vì quá lạnh.",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "Dù vậy tôi vẫn thích trời lạnh hơn là trời nóng.",
                    },
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
                      text: "와, 오늘 너무 추워요! 겨울이 온 것 같아요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_feel_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "맞아요. 어제는 괜찮았는데...",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_feel_B1_1.mp3",
                    },
                    {
                      text: "여름에는 너무 더워서 힘들고, 겨울에는 너무 추워서 힘들어요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_feel_B1_2.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "그래도 저는 더운 것보다 추운 게 더 좋아요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_feel_A2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Ondol (온돌) - Bí mật mùa đông ấm áp",
              content: `
      Mùa đông Hàn Quốc rất lạnh (có thể xuống -20 độ C), nhưng trong nhà lúc nào cũng ấm áp. Bí mật nằm ở <b>Ondol (온돌)</b> - hệ thống sưởi sàn truyền thống.
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Ngày xưa, người Hàn đốt lửa luân chuyển hơi nóng dưới sàn đá. Ngày nay, họ dùng hệ thống ống nước nóng chạy dưới sàn nhà.</li>
        <li>Chính vì văn hóa Ondol này mà người Hàn có thói quen sinh hoạt (ăn, ngủ, ngồi) trực tiếp trên sàn nhà thay vì dùng giường hay ghế cao.</li>
      </ul>
      <div className="mt-4 p-3 bg-orange-50 rounded-lg">
        🔥 <b>Trải nghiệm:</b> Vào mùa đông, được nằm ngủ trên sàn nhà ấm áp (Jjimjilbang) là một cảm giác cực kỳ tuyệt vời!
      </div>
    `,
            },
            funQuiz: {
              question:
                "Tại sao người Hàn Quốc có thói quen sinh hoạt (ngồi, ngủ) trực tiếp trên sàn nhà?",
              options: [
                "A. Vì họ không thích dùng ghế.",
                "B. Vì hệ thống sưởi sàn (Ondol) giúp sàn nhà luôn ấm áp.",
                "C. Vì để tiết kiệm diện tích.",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "Văn hóa Ondol (sưởi sàn) khiến sàn nhà trở thành nơi ấm áp nhất trong mùa đông, hình thành nên lối sống sinh hoạt trên sàn.",
            },
            vocabIds: [75, 76],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question:
                    "Khi chia đuôi '-아요/어요', gốc từ kết thúc bằng 'ㅂ' (như 춥다, 덥다) thường biến đổi thế nào?",
                  options: [
                    "Giữ nguyên 'ㅂ' và thêm '어요'",
                    "Bỏ 'ㅂ' và thêm '우' + '어요' -> '워요'",
                    "Bỏ 'ㅂ' và thêm '아요'",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "Quy tắc: Bỏ 'ㅂ', thêm '우'. Ví dụ: 춥다 -> 추우 -> 추워요.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Chia tính từ '춥다' (Lạnh): 오늘 날씨가 너무 <<blank>>. (Thời tiết hôm nay lạnh quá)",
                  correctAnswer: "추워요",
                  explanation:
                    "춥다 -> 춥 (bỏ ㅂ) -> 추 + 우 -> 추우 + 어요 -> 추워요.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Chia tính từ '덥다' (Nóng): 여름은 너무 <<blank>>.",
                  correctAnswer: "더워요",
                  explanation:
                    "덥다 -> 덥 (bỏ ㅂ) -> 더 + 우 -> 더우 + 어요 -> 더워요.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Chia tính từ '맵다' (Cay): 떡볶이가 정말 <<blank>>. (Tteokbokki cay thật)",
                  correctAnswer: "매워요",
                  explanation:
                    "맵다 -> 맵 (bỏ ㅂ) -> 매 + 우 -> 매우 + 어요 -> 매워요.",
                },
              ],
            },
            grammar: (
              <>
                <p className="font-semibold text-xl my-3">
                  Bất quy tắc của{" "}
                  '<span className="text-[var(--custom-green)]">ㅂ</span>'{" "}
                  (<span className="text-[var(--custom-green)]">ㅂ 불규칙</span>{" "})
                </p>
                <p className="font-medium text-[18px] my-3">
                  Đây là một trong những bất quy tắc phổ biến nhất trong tiếng Hàn. <br />
                  Quy tắc này được áp dụng khi một <b>gốc từ kết thúc bằng phụ âm 'ㅂ'</b> và <b>theo sau
                    nó là một nguyên âm</b> (ví dụ: khi chia đuôi -아요/어요 hoặc -았/었어요).
                </p>
                <p className="font-semibold text-xl my-3">Quy tắc biến đổi chuẩn (Thường gặp):</p>
                <p className="font-medium text-[18px] my-3">
                  <b>Bước 1</b>: Bỏ hẳn phụ âm ㅂ khỏi gốc từ.
                </p>
                <p className="font-medium text-[18px] my-3">
                  <b>Bước 2</b>: Thay ㅂ bằng nguyên âm 우 (u).
                </p>
                <p className="font-medium text-[18px] my-3">
                  <b>Bước 3</b>: Gốc từ mới kết thúc bằng 우 sẽ kết hợp với đuôi ~어요 (Lưu ý: 우 + 어 hợp nhất thành 워).
                </p>
                <GrammarTable
                  className="my-3"
                  headers={["Nguyên thể", "Biến đổi", "Kết quả (Thì hiện tại lịch sự)", "Phân tích"]}
                  rows={[
                    {
                      col1: "춥다 (lạnh)",
                      col2: "ㅂ → 추우",
                      col3: "추워요",
                      col4: "추우 + 어요 → 추워요"
                    },
                    {
                      col1: "덥다 (nóng)",
                      col2: "ㅂ → 더우",
                      col3: "더워요",
                      col4: "더우 + 어요 → 더워요"
                    },
                    {
                      col1: "어렵다 (khó)",
                      col2: "어렵 → 어려우",
                      col3: "어려워요",
                      col4: "어려우 + 어요 → 어려워요"
                    }
                  ]}
                />
                <p className="font-semibold text-[18px] my-3">
                  Trường hợp Ngoại lệ (Thêm '오' thay vì '우'):
                </p>
                <p className="font-medium text-[18px] my-3">
                  <b>Quy tắc</b>: Chỉ áp dụng cho hai từ 돕다 (giúp đỡ) và 곱다 (xinh đẹp/tốt).
                </p>
                <p className="font-medium text-[18px] my-3">
                  <b>Biến đổi</b>: Hai từ này biến đổi thành 오 thay vì 우.
                </p>
                <GreenExampleBox className="my-3">
                  <ul className="list-disc list-inside">
                    <li className="font-medium text-[18px]">돕다 → 도오 → 도와요 (오 + 아 hợp nhất thành 와).</li>
                  </ul>
                </GreenExampleBox>
              </>
            )
          },
          {
            id: 3,
            title: "Sức khỏe",
            icon: <FaHeartbeat />,
            lessonLink: "/courses/3/topics/7/lessons/3",
            miniGameLink: "/courses/3/topics/7/lessons/3/minigame",
            status: "locked",
            targets: [
              "Học viên có thể nói về tình trạng sức khỏe của mình (đau, ốm).",
              "Sử dụng cấu trúc '-(으)니까' để đưa ra lý do cho một lời khuyên hoặc đề nghị.",
              "Phân biệt sự khác nhau cơ bản giữa '-(으)니까' và '-아서/어서'.",
            ],
            vnDialogue: {
              mainRole: "B", // Người học đóng vai Nam (B)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Nam ơi, bạn bị ốm ở đâu à?" },
                    { text: "Sắc mặt không tốt lắm." },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Vâng, tôi bị đau đầu một chút từ hôm qua." },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "Dạo này thời tiết lạnh nên hãy cẩn thận kẻo bị cảm lạnh nhé.",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Vâng, cảm ơn bạn." },
                    { text: "Sức khỏe luôn là số một." },
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
                      text: "남 씨, 어디 아파요? 얼굴이 안 좋아요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_health_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "네, 어제부터 머리가 좀 아파요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_health_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "요즘 날씨가 추우니까 감기 조심하세요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_health_A2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "네, 고마워요. 항상 건강이 최고예요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_health_B2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Hiệu thuốc (약국) - Dễ tìm như cửa hàng tiện lợi",
              content: `
      Ở Hàn Quốc, khi bị ốm nhẹ như cảm cúm hay đau đầu, bạn có thể dễ dàng tìm thấy <b>Hiệu thuốc (약국 - Yakguk)</b>.
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Dấu hiệu nhận biết là chữ <b>"약" (Thuốc)</b> rất lớn trên biển hiệu. </li>
        <li>Dược sĩ Hàn Quốc thường tư vấn rất kỹ và thuốc có tác dụng rất nhanh (ppalli-ppalli).</li>
        <li>Ngoài thuốc tây, người Hàn còn rất chuộng các loại nước uống vitamin hay hồng sâm để tăng cường sức đề kháng.</li>
      </ul>
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        💊 <b>Từ vựng:</b> Thuốc cảm là <b>감기약 (gamgiyak)</b>, thuốc đau đầu là <b>두통약 (dutongyak)</b>.
      </div>
    `,
            },
            funQuiz: {
              question:
                "Bạn cần tìm mua thuốc cảm tại Hàn Quốc. Bạn sẽ tìm biển hiệu có chữ gì?",
              options: ["A. 술 (Rượu)", "B. 밥 (Cơm)", "C. 약 (Thuốc)"],
              correctAnswerIndex: 2, // Đáp án C
              explanation:
                "Hiệu thuốc ở Hàn Quốc được gọi là '약국' (Dược cục) và thường có chữ '약' (Dược/Thuốc) rất lớn ở bên ngoài.",
            },
            vocabIds: [77, 78, 79],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question:
                    "Điểm khác biệt quan trọng nhất của '-(으)니까' so với '-아서/어서' là gì?",
                  options: [
                    "Chỉ dùng cho thì quá khứ.",
                    "Có thể dùng với câu mệnh lệnh, đề nghị (đuôi -세요, -읍시다).",
                    "Không thể dùng với tính từ.",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "'-(으)니까' thường đi kèm với vế sau là câu mệnh lệnh (Hãy...) hoặc rủ rê (Cùng...), trong khi '-아서/어서' thì KHÔNG được.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Kết hợp câu: 날씨가 춥다 (Lạnh) + 감기 조심하세요 (Cẩn thận cảm) -> 날씨가 <<blank>> 감기 조심하세요.",
                  correctAnswer: "추우니까",
                  explanation:
                    "춥다 (Bất quy tắc 'ㅂ') -> 추우 + 니까 -> 추우니까. Vì vế sau là 'hãy cẩn thận' (mệnh lệnh) nên phải dùng '니까'.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Kết hợp câu: 시간이 없다 (Không có thời gian) + 빨리 가세요 (Hãy đi nhanh lên) -> 시간이 <<blank>> 빨리 가세요.",
                  correctAnswer: "없으니까",
                  explanation:
                    "없다 (kết thúc bằng phụ âm) -> cộng '으니까' -> 없으니까.",
                },
                {
                  questionType: "dropDown",
                  question: "비가 (오다) -> 비가 <<dropdown>> 우산을 쓰세요.",
                  options: ["와서", "오니까"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Vì vế sau là câu mệnh lệnh 'Hãy dùng ô' (우산을 쓰세요), nên bắt buộc dùng '오니까'.",
                },
              ],
            },
            grammar: (
              <>
                <p className="font-semibold text-xl my-3">
                  Diễn tả nguyên nhân/lý do với{" "}
                  '<span className="text-[var(--custom-orange)]">-(으)니까</span>'{" "}
                </p>
                <p className="font-medium text-[18px] my-3">
                  Cấu trúc này cũng dùng để chỉ nguyên nhân và kết quả như -아서/어서, nhưng có những điểm khác biệt quan trọng sau:
                </p>
                <p className="font-semibold text-[18px] my-3">
                  Điểm khác biệt cốt lõi:
                </p>
                <ul className="list-disc list-inside my-3 mx-3">
                  <li className="font-medium text-[18px] my-3">
                    <b>Ngữ cảnh:</b> Cấu trúc này thường được dùng khi vế sau là một câu mệnh lệnh, đề nghị hoặc rủ rê (ví dụ: đuôi -세요, -ㅂ시다, -(으)ㄹ까요?). Đây là lý do chính khiến ta phải dùng -(으)니까.
                  </li>
                  <li className="font-medium text-[18px] my-3">
                    <b>Sắc thái:</b> Nó nhấn mạnh vào lý do mà người nói vừa mới nhận ra hoặc là một lý do mang tính khách quan.
                  </li>
                </ul>
                <p className="font-semibold text-[18px] my-3">
                  Quy tắc chia đuôi:
                </p>
                <p className="font-medium text-[18px] my-3">
                  Cấu trúc này cũng dùng để chỉ nguyên nhân và kết quả như -아서/어서, nhưng có những điểm khác biệt quan trọng sau:
                </p>
                <div className="mx-5">
                  <p className="font-medium text-[18px] my-3">
                    <b>1. -니까 (nikka):</b> Dùng khi gốc từ kết thúc bằng nguyên âm.
                  </p>
                  <GreenExampleBox className="my-3">
                    <p className="font-medium text-[18px]">
                      오다 (đến) → 오 + 니까 → 오니까 (vì đến...)
                    </p>
                  </GreenExampleBox>
                  <p className="font-medium text-[18px] my-3">
                    <b>2. -으니까 (eunika):</b> Dùng khi gốc từ kết thúc bằng phụ âm.
                  </p>
                  <GreenExampleBox className="my-3">
                    <p className="font-medium text-[18px]">
                      먹다 (ăn) → 먹 + 으니까 → 먹으니까 (vì ăn...)
                    </p>
                  </GreenExampleBox>
                </div>
                <p className="font-semibold text-[18px] my-3">
                  Ví dụ và giải thích chi tiết
                </p>
                <GreenExampleBox className="my-6">
                  <p className="font-medium text-[18px]">
                    날씨가 추우니까 감기 조심하세요. (Vì thời tiết lạnh nên hãy cẩn thận cảm lạnh nhé.)
                  </p>
                </GreenExampleBox>
                <p className="font-medium text-[18px]">
                  Giải thích: Ở đây, vế sau (조심하세요 - hãy cẩn thận) là một câu mệnh <b>lệnh/khuyên nhủ</b>.
                  Do đó, việc dùng <b>-(으)니까</b> sẽ tự nhiên và chính xác hơn so với dùng -아서/어서.
                </p>
              </>
            )
          },
          {
            id: 4,
            title: "Trạng thái tinh thần tích cực",
            icon: <FaRegSmile />,
            lessonLink: "/courses/3/topics/7/lessons/4",
            miniGameLink: "/courses/3/topics/7/lessons/4/minigame",
            status: "locked",
            targets: [
              "Học viên sử dụng các từ vựng về cảm xúc (행복, 기분) để nói về trạng thái tinh thần.",
              "Biết cách biến đổi tính từ/danh từ thành trạng từ (Adverb) bằng đuôi '-게' hoặc '-으로'.",
              "Tìm hiểu về trào lưu sống 'Sohwakhaeng' (Hạnh phúc nhỏ bé nhưng chắc chắn) của giới trẻ Hàn.",
            ],
            vnDialogue: {
              mainRole: "B", // Người học đóng vai B (Người tích cực)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Dạo này tâm trạng bạn thế nào?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Rất tốt!" },
                    {
                      text: "Vì tôi suy nghĩ một cách tích cực nên mỗi ngày đều hạnh phúc.",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Wow, thấy bạn như vậy thật tốt quá." }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "Vâng, việc cả thể chất và tinh thần đều khỏe mạnh rất quan trọng.",
                    },
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
                      text: "요즘 기분이 어때요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_positive_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "아주 좋아요!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_positive_B1_1.mp3",
                    },
                    {
                      text: "긍정적으로 생각하니까 매일 행복해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_positive_B1_2.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "와, 정말 보기 좋아요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_positive_A2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "네, 몸도 마음도 건강한 게 중요해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_positive_B2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Sohwakhaeng (소확행) - Hạnh phúc nhỏ bé",
              content: `
      Giới trẻ Hàn Quốc ngày nay rất ưa chuộng lối sống <b>"Sohwakhaeng" (소확행 - Tiểu Xác Hạnh)</b>.
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Nghĩa là <b>"Hạnh phúc nhỏ bé nhưng chắc chắn"</b> (Small but certain happiness).</li>
        <li>Thay vì theo đuổi những mục tiêu xa vời như nhà lầu xe hơi, họ tìm niềm vui từ những điều giản dị: một ly cà phê ngon, tắm nước nóng sau giờ làm, hay vuốt ve thú cưng.</li>
      </ul>
      <div className="mt-4 p-3 bg-pink-50 rounded-lg">
        🍀 <b>Thông điệp:</b> Hãy trân trọng những niềm vui nhỏ bé mỗi ngày để tâm hồn luôn "khỏe mạnh" nhé!
      </div>
    `,
            },
            funQuiz: {
              question:
                "Trào lưu 'Sohwakhaeng' (Tiểu Xác Hạnh) ở Hàn Quốc khuyến khích điều gì?",
              options: [
                "A. Làm việc 24/7 để mua nhà to.",
                "B. Tìm kiếm hạnh phúc từ những điều nhỏ bé, giản dị hàng ngày.",
                "C. Đi du lịch nước ngoài đắt tiền.",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "'Sohwakhaeng' là tìm kiếm niềm vui và sự thỏa mãn từ những điều nhỏ nhặt nhưng chắc chắn có được trong cuộc sống thường nhật.",
            },
            vocabIds: [80, 81],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question:
                    "Để biến tính từ '예쁘다' (đẹp) thành trạng từ 'một cách xinh đẹp', ta dùng đuôi nào?",
                  options: ["-게", "-히", "-으로"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Đa số tính từ biến thành trạng từ bằng cách thêm '-게'. 예쁘다 -> 예쁘게.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Chuyển đổi: 행복하다 (Hạnh phúc) -> Sống một cách hạnh phúc: 행복하<<blank>> 살아요.",
                  correctAnswer: "게",
                  explanation: "행복하다 -> 행복하게 (một cách hạnh phúc).",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Chuyển đổi: 긍정적 (Tích cực) -> Suy nghĩ một cách tích cực: 긍정적<<blank>> 생각해요.",
                  correctAnswer: "으로",
                  explanation:
                    "Các từ gốc Hán kết thúc bằng '-적' thường đi với '-으로' để tạo thành trạng từ. 긍정적 -> 긍정적으로.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "맛있다 (Ngon) -> Hãy ăn ngon miệng nhé: <<dropdown>> 드세요.",
                  options: ["맛있게", "맛있히", "맛있으로"],
                  correctAnswerIndex: 0,
                  explanation: "맛있다 -> 맛있게 (một cách ngon miệng).",
                },
              ],
            },
            grammar: (
              <>
                <p className="font-semibold text-xl my-3">
                  Biến danh từ/tính từ thành trang từ:{" "}
                  <span className="text-[var(--custom-orange)]">-이/히/리/기</span>
                  ...{" "}
                  và{" "}
                  <span className="text-[var(--custom-orange)]">-게</span>
                </p>
                <p className="font-medium text-[18px] my-3">
                  Trong tiếng Hàn, để mô tả cách thức thực hiện hành động (Ví dụ: "ăn nhanh," "suy nghĩ tích cực"),
                  ta cần biến đổi tính từ và một số danh từ thành trạng từ. Có hai cách phổ biến nhất:
                </p>
                <p className="font-semibold text-[18px] my-3">
                  Cách 1 (Quy tắc chung): Thêm -게 vào gốc từ
                </p>
                <ul className="list-disc list-inside mx-3">
                  <li className="font-medium text-[18px] my-3">
                    Đây là cách dễ nhất, phổ biến nhất và có thể áp dụng cho hầu hết các tính từ.
                  </li>
                  <li className="font-medium text-[18px] my-3">
                    <b>Thực hiện:</b> Bỏ -다 và thêm -게.
                  </li>
                </ul>
                <GreenExampleBox className="my-6">
                  <ul className="list-disc list-inside">
                    <li className="font-medium text-[18px]">
                      예쁘다 (đẹp) → 예쁘게 (một cách xinh đẹp)
                    </li>
                    <li className="font-medium text-[18px]">
                      행복하다 (hạnh phúc) → 행복하게 (một cách hạnh phúc)
                    </li>
                    <li className="font-medium text-[18px]">
                      긍정적이다 (tích cực) → 긍정적으로 (một cách tích cực - trường hợp đặc biệt với tính từ gốc Hán)
                    </li>
                  </ul>
                </GreenExampleBox>
                <p className="font-semibold text-[18px] my-3">
                  Cách 2 (Trường hợp cố định): Thêm -이/-히
                </p>
                <ul className="list-disc list-inside mx-3">
                  <li className="font-medium text-[18px] my-3">
                    Cách này áp dụng cho một số từ nhất định và cần phải học thuộc lòng vì không có quy tắc chung nào.
                  </li>
                </ul>
                <GreenExampleBox className="my-6">
                  <ul className="list-disc list-inside">
                    <li className="font-medium text-[18px]">
                      많다 (nhiều) → 많이 (một cách nhiều)
                    </li>
                    <li className="font-medium text-[18px]">
                      조용하다 (yên tĩnh) → 조용히 (một cách yên tĩnh)
                    </li>
                  </ul>
                </GreenExampleBox>
                <p className="font-semibold text-[18px] my-3">
                  Ví dụ và giải thích chi tiết
                </p>
                <GreenExampleBox className="my-6">
                  <p className="font-medium text-[18px]">
                    긍정적으로 생각하세요. (Hãy suy nghĩ một cách tích cực.)
                  </p>
                </GreenExampleBox>
                <p className="font-medium text-[18px]">
                  Giải thích: Trong câu này, 긍정적으로 bổ nghĩa cho động từ "suy nghĩ" (생각하다).
                </p>
              </>
            )
          },
          {
            id: 5,
            title: "Ôn tập",
            icon: <FaStar />,
            lessonLink: "/courses/3/topics/7/lessons/5",
            miniGameLink: "/courses/3/topics/7/lessons/5/minigame",
            status: "final",
            targets: [
              "Tổng hợp kiến thức về thời tiết và sức khỏe để áp dụng vào tình huống thực tế.",
              "Ôn tập các ngữ pháp trọng tâm: Phỏng đoán, Bất quy tắc 'ㅂ', Lý do '-(으)니까', Trạng từ hóa.",
              "Hoàn thành hội thoại hỏi thăm và đưa ra lời khuyên cho người bạn bị ốm qua tin nhắn.",
            ],
            vocabIds: [72, 73, 74, 75, 76, 77, 78, 79, 80, 81],
            practiceBox: {
              questions: [
                // --- PHẦN 1: TỪ VỰNG THỜI TIẾT & SỨC KHỎE ---
                {
                  questionType: "multipleChoice",
                  question: "Từ nào có nghĩa là 'Thời tiết'?",
                  options: ["계절", "날씨", "하늘"],
                  correctAnswerIndex: 1,
                  explanation: "<b>날씨</b> (Nal-ssi) là Thời tiết.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Trời quang đãng/trong xanh là gì?",
                  options: ["흐리다", "맑다", "나쁘다"],
                  correctAnswerIndex: 1,
                  explanation:
                    "<b>맑다</b> (Mak-da) nghĩa là Trong xanh, quang đãng.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền động từ đi kèm với 'Mưa' (비): Mưa rơi/đến -> 비가 ________.",
                  correctAnswer: "오다",
                  explanation:
                    "Người Hàn dùng <b>비가 오다</b> (Mưa đến) để nói trời mưa.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Cảm giác 'Đau' trong tiếng Hàn là:",
                  options: ["아프다", "나쁘다", "예쁘다"],
                  correctAnswerIndex: 0,
                  explanation: "<b>아프다</b> (A-peu-da) nghĩa là Đau/Ốm.",
                },

                // --- PHẦN 2: BẤT QUY TẮC 'ㅂ' (IRREGULAR VERBS) ---
                {
                  questionType: "dropDown",
                  question: "Hôm nay trời lạnh. -> 오늘 날씨가 <<dropdown>>.",
                  options: ["추워요", "춥어요", "추와요"],
                  correctAnswerIndex: 0,
                  explanation:
                    "<b>춥다</b> (Lạnh) là bất quy tắc 'ㅂ'. Bỏ 'ㅂ' thêm '우' + '어요' -> <b>추워요</b>.",
                },
                {
                  questionType: "dropDown",
                  question: "Thời tiết nóng. -> 날씨가 <<dropdown>>.",
                  options: ["덥어요", "더워요", "덥네요"],
                  correctAnswerIndex: 1,
                  explanation:
                    "<b>덥다</b> (Nóng) tương tự '춥다', biến đổi thành <b>더워요</b>.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Chọn dạng chia đúng của '어렵다' (Khó):",
                  options: ["어렵어요", "어려워요", "어려요"],
                  correctAnswerIndex: 1,
                  explanation: "어렵다 -> <b>어려워요</b> (Bất quy tắc 'ㅂ').",
                },

                // --- PHẦN 3: NGỮ PHÁP - PHỎNG ĐOÁN (-(으)ㄹ 것 같다) ---
                {
                  questionType: "multipleChoice",
                  question: "Cấu trúc '-(으)ㄹ 것 같아요' dùng để làm gì?",
                  options: ["Ra lệnh", "Phỏng đoán/Dự đoán", "Hỏi quá khứ"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Cấu trúc này có nghĩa là 'Hình như là/Có lẽ là/Chắc là'.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Có lẽ trời sẽ mưa. -> 비가 <<dropdown>> 것 같아요.",
                  options: ["올", "오", "온"],
                  correctAnswerIndex: 0,
                  explanation:
                    "오다 (không có patchim) + ㄹ 것 같아요 -> <b>올 것 같아요</b>.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Món ăn này có vẻ ngon. -> 이 음식이 <<dropdown>> 것 같아요.",
                  options: ["맛있을", "맛있", "맛있는"],
                  correctAnswerIndex: 0,
                  explanation:
                    "맛있다 (có patchim) + 을 것 같아요 -> <b>맛있을 것 같아요</b>.",
                },

                // --- PHẦN 4: NGỮ PHÁP - LÝ DO KHUYÊN NHỦ (-(으)니까) ---
                {
                  questionType: "fillInBlank",
                  question:
                    "Vì trời lạnh NÊN hãy mặc áo. -> 날씨가 춥________ 옷을 입으세요.",
                  correctAnswer: "으니까",
                  explanation:
                    "Khi vế sau là câu mệnh lệnh/khuyên nhủ (hãy...), bắt buộc dùng <b>-(으)니까</b> để chỉ lý do. 춥다 (biến âm thành 추우) + 니까 -> 추우니까.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Chọn câu đúng: 'Vì đau nên hãy nghỉ ngơi.'",
                  options: [
                    "아파서 쉬세요.",
                    "아프니까 쉬세요.",
                    "아프고 쉬세요.",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "Không dùng '-아서/어서' với câu mệnh lệnh '쉬세요'. Phải dùng <b>아프니까</b>.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Vì không có thời gian nên hãy đi nhanh lên. -> 시간이 <<dropdown>> 빨리 가세요.",
                  options: ["없으니까", "없어서", "없고"],
                  correctAnswerIndex: 0,
                  explanation: "없다 (có patchim) -> <b>없으니까</b>.",
                },

                // --- PHẦN 5: TRẠNG TỪ HÓA (-게 / -(으)로) ---
                {
                  questionType: "dropDown",
                  question:
                    "Hãy suy nghĩ một cách tích cực. -> <<dropdown>> 생각하세요.",
                  options: ["긍정적으로", "긍정적게", "긍정적이"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Với các từ gốc Hán kết thúc bằng '적' (tính chất), thường dùng <b>-으로</b> để tạo trạng từ -> <b>긍정적으로</b>.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Ăn ngon miệng nhé (Ăn một cách ngon nhé). -> 맛 있____ 드세요.",
                  correctAnswer: "게",
                  explanation:
                    "Tính từ + <b>게</b> biến thành trạng từ. 맛있게 (Một cách ngon lành).",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Sắp xếp câu: (1) Hạnh phúc (2) Sống (3) Một cách. -> 'Sống hạnh phúc'.",
                  options: [
                    "행복하게 사세요.",
                    "행복으로 사세요.",
                    "행복이 사세요.",
                  ],
                  correctAnswerIndex: 0,
                  explanation:
                    "행복하다 -> <b>행복하게</b> (Một cách hạnh phúc).",
                },

                // --- PHẦN 6: TÌNH HUỐNG HỘI THOẠI (SICK FRIEND) ---
                {
                  questionType: "multipleChoice",
                  question: "Bạn thấy bạn mình trông mệt mỏi. Bạn hỏi:",
                  options: [
                    "어디 가요? (Đi đâu đấy?)",
                    "괜찮아요? 어디 아파요? (Ổn không? Đau ở đâu à?)",
                    "축하해요! (Chúc mừng)",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "Câu hỏi thăm sức khỏe tiêu chuẩn: <b>괜찮아요?</b> (Bạn có sao không?).",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Mô tả triệu chứng: Tôi bị đau cổ họng. -> ____이/가 아파요.",
                  correctAnswer: "목",
                  explanation: "<b>목</b> (Mok) là Cổ/Họng.",
                },
                {
                  questionType: "dropDown",
                  question: "Tôi bị sốt. -> <<dropdown>> 좀 있어요.",
                  options: ["열이", "눈이", "돈이"],
                  correctAnswerIndex: 0,
                  explanation: "<b>열</b> (Yeol) là Sốt (Nhiệt).",
                },
                {
                  questionType: "multipleChoice",
                  question: "Lời khuyên: 'Hãy nghỉ ngơi thật nhiều/tốt'.",
                  options: ["푹 쉬세요.", "많이 먹으세요.", "조심하세요."],
                  correctAnswerIndex: 0,
                  explanation:
                    "<b>푹</b> (Phó từ chỉ mức độ: sâu/kỹ) + 쉬다 (Nghỉ) -> <b>푹 쉬세요</b>.",
                },
              ],
            },
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
            lessonLink: "/courses/3/topics/8/lessons/1",
            miniGameLink: "/courses/3/topics/8/lessons/1/minigame",
            status: "locked",
            targets: [
              "Học viên có thể hỏi và trả lời về sở thích (취미) của bản thân và người khác.",
              "Sử dụng thành thạo cấu trúc danh từ hóa động từ '-는 것' để nói 'Việc làm gì đó'.",
              "Tìm hiểu về văn hóa Webtoon (truyện tranh kỹ thuật số) phổ biến tại Hàn Quốc.",
            ],
            vnDialogue: {
              mainRole: "B", // Người học đóng vai Mina (B)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Mina ơi, sở thích của bạn là gì?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Sở thích của tôi là đọc sách." },
                    {
                      text: "Nếu vừa nghe nhạc vừa đọc sách ở một quán cà phê yên tĩnh thì thật sự hạnh phúc.",
                    },
                    { text: "Còn Nam thì sao?" },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Tôi thì thích những hoạt động năng động," },
                    { text: "nên tôi thích việc tập thể thao." },
                    { text: "Đặc biệt là tôi thích bóng đá." },
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
                      text: "민아 씨, 취미가 뭐예요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_hobby_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "제 취미는 책을 읽는 것이에요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_hobby_B1_1.mp3",
                    },
                    {
                      text: "조용한 카페에서 음악을 들으면서 책을 읽으면 정말 행복해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_hobby_B1_2.mp3",
                    },
                    {
                      text: "남 씨는요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_hobby_B1_3.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "저는 활동적인 것을 좋아해서, 운동하는 것을 좋아해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_hobby_A2_1.mp3",
                    },
                    {
                      text: "특히 축구를 좋아해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_hobby_A2_2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Webtoon (웹툰) - Khi 'Sách' không chỉ là giấy",
              content: `
      Khi nói về "đọc sách" (책을 읽다) ở Hàn Quốc, không thể không nhắc đến <b>Webtoon (웹툰)</b>.
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Đây là hình thức truyện tranh kỹ thuật số (truyện tranh mạng) đọc bằng cách lướt dọc trên điện thoại thông minh. </li>
        <li>Rất nhiều bộ phim truyền hình (Drama) nổi tiếng của Hàn Quốc như "Itaewon Class" hay "True Beauty" đều được chuyển thể từ Webtoon.</li>
      </ul>
      <div className="mt-4 p-3 bg-green-50 rounded-lg">
        📱 <b>Xu hướng:</b> Webtoon là một phần không thể thiếu trong văn hóa giải trí hàng ngày của giới trẻ Hàn Quốc.
      </div>
    `,
            },
            funQuiz: {
              question:
                "Hình thức truyện tranh kỹ thuật số phổ biến tại Hàn Quốc, được đọc chủ yếu trên điện thoại thông minh gọi là gì?",
              options: ["A. Manga", "B. Webtoon (웹툰)", "C. E-book"],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "Webtoon (ghép từ Web + Cartoon) là loại hình truyện tranh mạng độc đáo của Hàn Quốc, phù hợp với thói quen sử dụng điện thoại di động.",
            },
            vocabIds: [82, 83, 84, 85, 86],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question: "Cấu trúc '-는 것' có chức năng gì?",
                  options: [
                    "Biến động từ thành danh từ (Việc...)",
                    "Biến danh từ thành động từ",
                    "Chỉ thì tương lai",
                  ],
                  correctAnswerIndex: 0,
                  explanation:
                    "Gắn '-는 것' vào sau động từ giúp biến hành động đó thành một cụm danh từ (Ví dụ: Xem -> Việc xem).",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Danh từ hóa: 읽다 (đọc) -> đọc sách là sở thích của tôi: 책을 <<blank>> 것이 제 취미예요.",
                  correctAnswer: "읽는",
                  explanation: "읽다 + 는 것 -> 읽는 것.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Danh từ hóa: 운동하다 (tập thể thao) -> Tôi thích việc tập thể thao: <<blank>> 것을 좋아해요.",
                  correctAnswer: "운동하는",
                  explanation: "운동하다 + 는 것 -> 운동하는 것.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "보다 (Xem) -> Sở thích của tôi là việc xem phim: 제 취미는 영화를 <<dropdown>> 것이에요.",
                  options: ["보는", "보는", "본"],
                  correctAnswerIndex: 0,
                  explanation: "보다 + 는 것 -> 보는 것.",
                },
              ],
            },
            grammar: (
              <>
                <p className="font-semibold text-xl my-3">
                  Danh từ hóa động từ:{" "}
                  <span className="text-[var(--custom-orange)]">-는 </span>
                  <span className="text-[var(--custom-green)]">것 </span>
                </p>
                <p className="font-medium text-[18px] my-3">
                  Đây là một ngữ pháp cực kỳ quan trọng, dùng để biến một hành động (Động từ) thành một Danh từ (cụm danh từ, có nghĩa là "sự việc" hoặc "việc làm gì đó"). <br />
                  Cấu trúc này cho phép bạn dùng hành động như chủ ngữ hoặc tân ngữ trong câu.
                </p>
                <p className="font-medium text-[18px] my-3">
                  <b>Công thức:</b> Gốc động từ + 는 것
                </p>
                <GreenExampleBox className="my-6">
                  <ul className="list-disc list-inside mx-3">
                    <li className="font-medium text-[18px]">보다 (xem) → 보는 것 (việc xem)</li>
                    <li className="font-medium text-[18px]">읽다 (đọc) → 읽는 것 (việc đọc)</li>
                    <li className="font-medium text-[18px]">운동하다 (tập thể thao) → 운동하는 것 (việc tập thể thao)</li>
                  </ul>
                </GreenExampleBox>
                <p className="font-semibold text-[18px] my-3">
                  Cách áp dụng:
                </p>
                <p className="font-medium text-[18px] my-3">
                  Cụm danh từ hóa này có thể được sử dụng như chủ ngữ (-은/는) hoặc tân ngữ (-을/를) trong câu:
                </p>
                <GreenExampleBox className="my-6">
                  <ul className="list-disc list-inside mx-3">
                    <li className="font-medium text-[18px]">Làm Chủ ngữ: 제 취미는 영화를 보는 것이에요. (Sở thích của tôi là việc xem phim.)</li>
                    <li className="font-medium text-[18px]">Làm Tân ngữ: 저는 책을 읽는 것을 좋아해요. (Tôi thích việc đọc sách.)</li>
                  </ul>
                </GreenExampleBox>
                <MeoNho>
                  <p className="font-medium text-[18px]"><b>Mẹo nhỏ: </b>Trong văn nói hàng ngày, danh từ phụ thuộc 것 thường được rút gọn thành 거 (geo) để nói nhanh hơn. Ví dụ: 보는 거, 읽는 거.</p>
                </MeoNho>
              </>
            )
          },
          {
            id: 2,
            title: "Hoạt động vào cuối tuần",
            icon: <FaRunning />,
            lessonLink: "/courses/3/topics/8/lessons/2",
            miniGameLink: "/courses/3/topics/8/lessons/2/minigame",
            status: "locked",
            targets: [
              "Học viên có thể rủ rê bạn bè cùng thực hiện một hoạt động vào cuối tuần.",
              "Sử dụng cấu trúc đề nghị '-(으)ㄹ까요?' (Chúng ta cùng... nhé?).",
              "Nắm vững quy tắc phát âm đặc biệt của từ '같이' (Cùng nhau).",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai A (Người rủ rê)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "Cuối tuần này bạn có kế hoạch gì đặc biệt không?",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Chưa, mình chưa có." },
                    { text: "Sao vậy?" },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "Vậy cuối tuần này chúng ta cùng nhau tập thể thao nhé?",
                    },
                    { text: "Chơi cầu lông ở công viên thì thế nào?" },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Ý hay đó!" },
                    {
                      text: "Sau khi tập thể thao mình đi ăn gì đó ngon ngon đi.",
                    },
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
                      text: "이번 주말에 특별한 계획 있어요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_weekend_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "아니요, 아직 없어요. 왜요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_weekend_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "그럼 우리 주말에 같이 운동할까요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_weekend_A2_1.mp3",
                    },
                    {
                      text: "공원에서 배드민턴 치는 거 어때요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_weekend_A2_2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "좋은 생각이에요!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_weekend_B2_1.mp3",
                    },
                    {
                      text: "운동 후에 맛있는 것도 먹으러 가요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_weekend_B2_2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Cuối tuần ở sông Hàn & Chimaek",
              content: `
      Vào cuối tuần, địa điểm yêu thích nhất của người dân Seoul chính là <b>Công viên sông Hàn (Hangang Park)</b>.
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Mọi người thường đến đây cắm trại, đạp xe đạp đôi hoặc chơi thể thao. </li>
        <li>Đặc biệt, văn hóa <b>"Chimaek" (Gà rán + Bia)</b> bên sông Hàn là trải nghiệm không thể bỏ qua. Bạn chỉ cần ngồi tại chỗ, gọi điện và shipper sẽ mang gà đến tận thảm cỏ cho bạn!</li>
      </ul>
      <div className="mt-4 p-3 bg-orange-50 rounded-lg">
        🍗 <b>Từ vựng:</b> Chi-maek (치맥) = Chicken (치킨) + Maekju (맥주 - Bia).
      </div>
    `,
            },
            funQuiz: {
              question:
                "Hoạt động ẩm thực nào nổi tiếng nhất khi đi dã ngoại tại công viên sông Hàn?",
              options: [
                "A. Ăn Sushi",
                "B. Ăn Chimaek (Gà rán + Bia)",
                "C. Ăn Phở",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "Chimaek (Gà rán và Bia) là combo ẩm thực kinh điển của người Hàn khi đi dã ngoại bên sông Hàn.",
            },
            vocabIds: [87, 88, 89, 90],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question: "Cấu trúc '-(으)ㄹ까요?' dùng để làm gì?",
                  options: [
                    "Ra lệnh cho người khác",
                    "Rủ rê hoặc hỏi ý kiến người nghe (Làm... nhé?)",
                    "Kể về quá khứ",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "'-(으)ㄹ까요?' là đuôi câu dùng để đề nghị cùng làm gì đó hoặc hỏi ý kiến người nghe một cách nhẹ nhàng.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Rủ rê: 하다 (làm) -> 우리 같이 게임 <<blank>>? (Chúng ta cùng chơi game nhé?)",
                  correctAnswer: "할까요",
                  explanation:
                    "하다 (kết thúc bằng nguyên âm) -> cộng 'ㄹ까요' -> 할까요?",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Rủ rê: 먹다 (ăn) -> 점심을 <<blank>>? (Chúng ta ăn trưa nhé?)",
                  correctAnswer: "먹을까요",
                  explanation:
                    "먹다 (kết thúc bằng phụ âm) -> cộng '을까요' -> 먹을까요?",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Từ '같이' (Cùng nhau) phát âm như thế nào là chuẩn?",
                  options: ["Gat-i", "Ga-chi", "Ga-ti"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Quy tắc phát âm vòm hóa: Khi phụ âm cuối 'ㅌ' gặp nguyên âm '이', nó được phát âm thành '치'. [가치].",
                },
              ],
            },
            grammar: (
              <>
                <p className="font-semibold text-xl my-3">
                  Danh từ hóa động từ:{" "}
                  <span className="text-[var(--custom-orange)]">-(으)ㄹ까요?</span>
                </p>
                <p className="font-medium text-[18px] my-3">
                  Đây là đuôi câu dùng để hỏi ý kiến người nghe về một hành động nào đó, hoặc để rủ rê họ cùng làm. Nó mang nghĩa "nhé?", "nhỉ?", "chúng ta cùng... nhé?".
                </p>
                <p className="font-semibold text-[18px] my-3">
                  Quy tắc chia gốc từ (Bỏ đuôi -다):
                </p>
                <div className="mx-5">
                  <p className="font-medium text-[18px] my-3">
                    <b>1. Gốc từ kết thúc bằng nguyên âm</b> (hoặc kết thúc bằng phụ âm ㄹ):
                  </p>
                  <p className="font-medium text-[18px] my-3">
                    Thêm: -ㄹ까요? (Trong trường hợp ㄹ, ta giữ nguyên ㄹ đó).
                  </p>
                  <GreenExampleBox>
                    <ul>
                      <li className="font-medium text-[18px]">하다 (làm) → 할까요? (Làm nhé?)</li>
                      <li className="font-medium text-[18px]">만들다 (làm) → 만들까요? (Làm cùng nhau nhé?)</li>
                    </ul>
                  </GreenExampleBox>

                  <p className="font-medium text-[18px] my-3">
                    <b>2. Gốc từ kết thúc bằng phụ âm</b> (trừ ㄹ):
                  </p>
                  <p className="font-medium text-[18px] my-3">
                    Thêm: -을까요?
                  </p>
                  <GreenExampleBox>
                    <ul>
                      <li className="font-medium text-[18px]">먹다 (ăn) → 먹을까요? (Ăn nhé?)</li>
                      <li className="font-medium text-[18px]">읽다 (đọc) → 읽을까요? (Đọc nhé?)</li>
                    </ul>
                  </GreenExampleBox>
                </div>
                <p className="font-semibold text-[18px] my-3">
                  Ví dụ tổng quát:
                </p>
                <GreenExampleBox>
                  <p className="font-medium text-[18px]">주말에 같이 운동할까요? (Cuối tuần chúng ta cùng tập thể thao nhé?)</p>
                </GreenExampleBox>
              </>
            )
          },
          {
            id: 3,
            title: "Miêu tả cảm xúc",
            icon: <FaRegSmile />,
            lessonLink: "/courses/3/topics/8/lessons/3",
            miniGameLink: "/courses/3/topics/8/lessons/3/minigame",
            status: "locked",
            targets: [
              "Học viên có thể phân biệt và sử dụng đúng hai tính từ '재미있다' (thú vị) và '즐겁다' (vui vẻ).",
              "Miêu tả cảm xúc của bản thân về một hoạt động giải trí hoặc sở thích.",
              "Nắm vững quy tắc chia bất quy tắc 'ㅂ' với tính từ '즐겁다'.",
            ],
            vnDialogue: {
              mainRole: "B", // Người học đóng vai B (Người chia sẻ cảm xúc)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [{ text: "Bộ phim xem hôm qua thế nào?" }],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Thật sự rất thú vị!" },
                    { text: "Cốt truyện hấp dẫn lắm." },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "Vậy thì cuối tuần sau chúng ta hãy cùng nhau có một khoảng thời gian vui vẻ nhé.",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Được đó." },
                    { text: "Chỉ nghĩ thôi đã thấy vui rồi." },
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
                      text: "어제 본 영화 어땠어요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_emo_hobby_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "정말 재미있었어요!",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_emo_hobby_B1_1.mp3",
                    },
                    {
                      text: "이야기가 흥미진진했어요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_emo_hobby_B1_2.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "그럼 다음 주말에는 우리 같이 즐거운 시간을 보내요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_emo_hobby_A2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "좋아요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_emo_hobby_B2_1.mp3",
                    },
                    {
                      text: "생각만 해도 즐거워요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_emo_hobby_B2_2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Noraebang (노래방) - Nơi xả stress quốc dân",
              content: `
      Để tìm kiếm niềm vui (<b>재미</b>) và cảm giác sảng khoái (<b>즐거움</b>), người Hàn thường rủ nhau đi <b>Noraebang (Phòng Karaoke)</b>.
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Khác với nhiều nơi, người Hàn coi việc hát hò là cách giải tỏa stress hiệu quả nhất sau giờ làm việc hoặc học tập.</li>
        <li>Gần đây, mô hình <b>"Coin Noraebang" (코인 노래방)</b> - trả tiền xu cho từng bài hát - rất được giới trẻ ưa chuộng vì giá rẻ và có thể đi một mình (Hon-norae).</li>
      </ul>
      <div className="mt-4 p-3 bg-purple-50 rounded-lg">
        🎤 <b>Từ vựng:</b> Norae (노래 - Bài hát) + Bang (방 - Phòng).
      </div>
    `,
            },
            funQuiz: {
              question:
                "Từ nào dùng để chỉ 'Phòng Karaoke' - địa điểm giải trí phổ biến nhất tại Hàn Quốc?",
              options: [
                "A. PC Bang (PC방)",
                "B. Jjimjilbang (찜질방)",
                "C. Noraebang (노래방)",
              ],
              correctAnswerIndex: 2, // Đáp án C
              explanation:
                "'Noraebang' (Phòng hát) là nơi mọi người đến để hát và giải trí. PC Bang là quán net, Jjimjilbang là phòng tắm hơi.",
            },
            vocabIds: [91, 92],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question:
                    "Sự khác biệt chính giữa '재미있다' và '즐겁다' là gì?",
                  options: [
                    "재미있다 nói về đối tượng bên ngoài (phim, sách), 즐겁다 nói về cảm xúc nội tâm (vui vẻ).",
                    "재미있다 dùng cho người, 즐겁다 dùng cho vật.",
                    "Hai từ này hoàn toàn giống nhau.",
                  ],
                  correctAnswerIndex: 0,
                  explanation:
                    "'재미있다' (Thú vị/Hay) thường dùng để khen nội dung của một vật/sự việc. '즐겁다' (Vui vẻ) miêu tả tâm trạng của con người.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Chia tính từ: Quyển truyện tranh này rất <<blank>>. (Thú vị - dùng đuôi thân mật)",
                  correctAnswer: "재미있어요",
                  explanation: "재미있다 -> 재미있어요.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Chia tính từ (Bất quy tắc 'ㅂ'): Bữa tiệc hôm qua rất <<blank>>. (Vui vẻ - thì quá khứ)",
                  correctAnswer: "즐거웠어요",
                  explanation:
                    "즐겁다 -> 즐거우 (bỏ ㅂ thêm 우) -> 즐거우 + 었어요 -> 즐거웠어요.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Kỳ nghỉ vừa rồi thật sự <<dropdown>>. (Vui vẻ/Hạnh phúc)",
                  options: ["즐거웠어요", "재미있었어요"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Kỳ nghỉ mang lại cảm giác hân hoan, hạnh phúc cho bản thân -> Dùng '즐겁다'.",
                },
              ],
            },
            grammar: (
              <>
                <p className="font-semibold text-xl my-3">
                  Phân biệt{" "}
                  <span className="text-[var(--custom-purple)]">재미있다 </span>
                  (thú vị) và{" "}
                  <span className="text-[var(--custom-purple)]">즐겁다</span>
                  (vui vẻ)
                </p>
                <p className="font-medium text-[18px] my-3">
                  Mặc dù cả hai từ đều có thể dịch là "vui", nhưng chúng mang sắc thái khác biệt rõ rệt. Vấn đề nằm ở việc trọng tâm của sự vui đó nằm ở đâu:
                </p>
                <div className="flex justify-between gap-3 my-3">
                  <PurpleFlashCard header="재미있다">
                    <ul className="list-disc list-inside font-medium text-[18px] my-3">
                      <li className="my-3"><b>Ý nghĩa cốt lõi:</b> Thú vị, hay, có tính giải trí.</li>
                      <li className="my-3"><b>Trọng tâm:</b> Tập trung vào chất lượng của đối tượng bên ngoài.</li>
                      <li className="my-3"><b>Áp dụng cho:</b> Phim ảnh, sách vở, trận đấu, bài giảng, trò chơi.</li>
                      <li className="my-3"><b>Ví dụ:</b> 이 책은 재미있어요. (Quyển sách này hay/thú vị.)</li>
                    </ul>
                    <MeoNho className="mt-6">
                      <p className="font-medium text-[18px]"><b>Từ khóa:</b> Đối tượng, Bên ngoài, Thú vị.</p>
                    </MeoNho>
                  </PurpleFlashCard>
                  <PurpleFlashCard header="즐겁다">
                    <ul className="list-disc list-inside font-medium text-[18px] my-3">
                      <li className="my-3"><b>Ý nghĩa cốt lõi: Vui vẻ, hân hoan,</b> sảng khoái.</li>
                      <li className="my-3"><b>Trọng tâm:</b> Tập trung vào CẢM XÚC NỘI TÂM của người nói.</li>
                      <li className="my-3"><b>Áp dụng cho:</b> Khoảng thời gian, sự kiện, bữa tiệc, chuyến đi, kỷ niệm.</li>
                      <li className="my-3"><b>Ví dụ:</b> 친구들과의 파티는 즐거웠어요. (Bữa tiệc với bạn bè đã rất vui vẻ.)</li>
                    </ul>
                    <MeoNho className="mt-6">
                      <p className="font-medium text-[18px]"><b>Từ khóa:</b> Cảm xúc, Nội tâm, Vui vẻ.</p>
                    </MeoNho>
                  </PurpleFlashCard>
                </div>
                <BorderedGrammarBox title="Mối liên hệ (Tổng kết)">
                  <p className="font-medium text-[18px]">
                    <b>Mẹo ghi nhớ:</b> Một bộ phim 재미있는 (thú vị) có thể khiến bạn 즐겁다 (cảm thấy vui vẻ).<br />
                    <b>Tóm lại:</b> Đối tượng thì 재미있다, còn Bản thân thì 즐겁다.
                  </p>
                </BorderedGrammarBox>
              </>
            )
          },
          {
            id: 4,
            title: "Nói về điều mình yêu thích",
            icon: <FaHeart />,
            lessonLink: "/courses/3/topics/8/lessons/4",
            miniGameLink: "/courses/3/topics/8/lessons/4/minigame",
            status: "locked",
            targets: [
              "Học viên có thể nói về những điều quan trọng hoặc yêu thích nhất của bản thân.",
              "Sử dụng cấu trúc định ngữ động từ thì hiện tại '-는' (Việc mà tôi thích...).",
              "Hiểu văn hóa 'Deok-jil' (Sự đam mê/Fan cuồng) tích cực của giới trẻ Hàn.",
            ],
            vnDialogue: {
              mainRole: "B", // Người học đóng vai Nam (B)
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "Đối với Nam, điều quan trọng nhất trong cuộc sống là gì?",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Ừm..." },
                    {
                      text: "Tôi nghĩ rằng việc được làm điều mình thích là tuyệt vời nhất.",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Tôi cũng đồng ý." },
                    {
                      text: "Khoảng thời gian được nghe bản nhạc mình thích là khoảng thời gian tuyệt vời nhất đối với tôi.",
                    },
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
                      text: "남 씨에게 인생에서 가장 중요한 것은 뭐예요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_fav_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "음...",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_fav_B1_1.mp3",
                    },
                    {
                      text: "제가 좋아하는 일을 하는 것이 최고라고 생각해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_fav_B1_2.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "저도 동의해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_fav_A2_1.mp3",
                    },
                    {
                      text: "좋아하는 음악을 듣는 시간이 저에게는 최고의 시간이에요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_fav_A2_2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Deok-jil (덕질) - Hạnh phúc từ đam mê",
              content: `
      Ở Hàn Quốc, việc <b>"làm điều mình thích"</b> thường được nâng tầm thành <b>"Deok-jil" (덕질)</b>.
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Xuất phát từ từ lóng "Deok-hu" (Otaku), Deok-jil chỉ hành động hâm mộ cuồng nhiệt hoặc đắm chìm vào một sở thích nào đó (K-pop, sưu tầm, làm bánh...). </li>
        <li>Người Hàn quan niệm rằng có một "Deok-jil" cho riêng mình sẽ giúp cuộc sống bớt nhàm chán và là nguồn năng lượng tích cực mỗi ngày.</li>
      </ul>
      <div className="mt-4 p-3 bg-purple-50 rounded-lg">
        🌟 <b>Câu nói hay:</b> "어덕행덕" (Eo-deok-haeng-deok) - Đằng nào cũng phải làm fan, hãy làm một fan hạnh phúc!
      </div>
    `,
            },
            funQuiz: {
              question:
                "Thuật ngữ tiếng Hàn nào dùng để chỉ hành động đắm chìm, theo đuổi đam mê hoặc sở thích cá nhân (như làm fan thần tượng)?",
              options: [
                "A. Gap-jil (갑질)",
                "B. Deok-jil (덕질)",
                "C. Mok-bang (먹방)",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "'Deok-jil' là từ lóng chỉ việc theo đuổi sở thích/đam mê. 'Gap-jil' là lạm quyền, 'Mok-bang' là quay video ăn uống.",
            },
            vocabIds: [93, 94, 95],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question: "Cấu trúc định ngữ '-는' dùng để làm gì?",
                  options: [
                    "Biến động từ thành tính từ bổ nghĩa cho danh từ (Người mà.../Việc mà...)",
                    "Chỉ thì quá khứ",
                    "Nối hai câu",
                  ],
                  correctAnswerIndex: 0,
                  explanation:
                    "'-는' gắn sau động từ thì hiện tại để bổ nghĩa cho danh từ đứng sau nó (Ví dụ: Người đang đi, Món ăn đang ăn).",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Định ngữ: 좋아하다 (Thích) + 일 (Việc) -> Công việc mà tôi thích: 제가 <<blank>> 일.",
                  correctAnswer: "좋아하는",
                  explanation: "좋아하다 + 는 -> 좋아하는.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Định ngữ: 가다 (Đi) + 사람 (Người) -> Người đang đi: <<blank>> 사람.",
                  correctAnswer: "가는",
                  explanation: "가다 + 는 -> 가는.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Định ngữ: 듣다 (Nghe) + 음악 (Nhạc) -> Nhạc đang nghe: <<dropdown>> 음악.",
                  options: ["듣는", "드는", "들는"],
                  correctAnswerIndex: 0,
                  explanation:
                    "듣다 (bất quy tắc 'ㄷ') khi gặp phụ âm 'ㄴ' của '-는' thì giữ nguyên hoặc biến đổi tùy ngữ cảnh, nhưng quy tắc chuẩn ngữ pháp là '듣는' [든는].",
                },
              ],
            },
            grammar: (
              <>
                <p className="font-semibold text-xl my-3">
                  Định ngữ của động từ (Thì hiện tại):{" "}
                  <span className="text-[var(--custom-orange)]">-는 </span>
                </p>
                <p className="font-medium text-[18px] my-3">
                  Đây là cấu trúc dùng để biến một <b>động từ</b> thành một <b>cụm từ bổ nghĩa cho danh từ</b> đứng sau nó, tương tự như <b>mệnh đề quan hệ</b> trong tiếng Việt.
                </p>
                <p className="font-medium text-[18px] my-3">
                  <b>Công thức:</b> Gốc động từ + 는 + Danh từ
                </p>
                <GreenExampleBox>
                  <ul className="list-disc list-inside">
                    <li className="font-medium text-[18px]">좋아하다 (thích) + 일 (việc) → 좋아하는 일 (công việc mà (tôi) thích)</li>
                    <li className="font-medium text-[18px]">듣다 (nghe) + 음악 (âm nhạc) → 듣는 음악 (bản nhạc mà (tôi) nghe)</li>
                    <li className="font-medium text-[18px]">읽다 (đọc) + 책 (sách) → 읽는 책 (quyển sách mà (tôi) đọc)</li>
                  </ul>
                </GreenExampleBox>
                <p className="font-semibold text-xl my-3">
                  Ví dụ phân tích cụ thể:
                </p>
                <GreenExampleBox>
                  <p className="font-medium text-[18px]">좋아하는 일을 하는 것이 최고예요.</p>
                  <ul className="list-disc list-inside">
                    <li className="font-medium text-[18px]">좋아하는 일: (Định ngữ) → Cụm bổ nghĩa cho Danh từ 일.</li>
                    <li className="font-medium text-[18px]">일을 하는 것: (Danh từ hóa) → Cụm danh từ lớn có nghĩa là "Việc làm công việc [mà tôi thích]".</li>
                    <li className="font-medium text-[18px]">Kết quả: [좋아하는 일을 하는 것] 이 최고예요. (Việc làm công việc mà tôi thích) là tuyệt vời nhất.</li>
                  </ul>
                </GreenExampleBox>
              </>
            )
          },
          {
            id: 5,
            title: "Ôn tập",
            icon: <FaStar />,
            lessonLink: "/courses/3/topics/8/lessons/5",
            miniGameLink: "/courses/3/topics/8/lessons/5/minigame",
            status: "final",
            targets: [
              "Tổng hợp kiến thức về sở thích, giải trí để thảo luận và lên kế hoạch cuối tuần.",
              "Ôn tập các ngữ pháp trọng tâm: Danh từ hóa '-는 것', Rủ rê '-(으)ㄹ까요?', Định ngữ '-는'.",
              "Hoàn thành hội thoại rủ bạn đi xem hòa nhạc (Concert).",
            ],

            vocabIds: [82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95],
            practiceBox: {
              questions: [
                // --- PHẦN 1: TỪ VỰNG SỞ THÍCH & GIẢI TRÍ ---
                {
                  questionType: "multipleChoice",
                  question: "Từ '취미' (Chwi-mi) có nghĩa là gì?",
                  options: ["Công việc", "Sở thích", "Thể thao"],
                  correctAnswerIndex: 1,
                  explanation: "<b>취미</b> là Sở thích.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Hoạt động 'Xem phim' trong tiếng Hàn là:",
                  options: ["음악을 듣다", "영화를 보다", "책을 읽다"],
                  correctAnswerIndex: 1,
                  explanation: "<b>영화</b> (Phim) + <b>보다</b> (Xem).",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền từ: Cuối tuần này chúng ta gặp nhau nhé. -> 이번 ________에 만나요.",
                  correctAnswer: "주말",
                  explanation: "<b>주말</b> (Ju-mal) là Cuối tuần.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Tính từ '재미있다' có nghĩa là gì?",
                  options: ["Buồn chán", "Thú vị/Hay/Vui", "Khó"],
                  correctAnswerIndex: 1,
                  explanation:
                    "<b>재미있다</b> (Jae-mi-it-da) nghĩa là Thú vị, hay (dùng cho phim ảnh, trò chơi...).",
                },

                // --- PHẦN 2: NGỮ PHÁP - DANH TỪ HÓA (-는 것) ---
                {
                  questionType: "multipleChoice",
                  question:
                    "Biến đổi động từ '읽다' (Đọc) thành danh từ (Việc đọc):",
                  options: ["읽은 것", "읽는 것", "읽을 것"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Động từ thì hiện tại + <b>는 것</b> -> <b>읽는 것</b> (Việc đọc).",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Sở thích của tôi là NẤU ĂN. -> 제 취미는 요리<<dropdown>> 거예요.",
                  options: ["하는", "한", "하"],
                  correctAnswerIndex: 0,
                  explanation:
                    "요리하다 (Nấu ăn) -> <b>요리하는 것</b> (Việc nấu ăn). Khi kết hợp với đuôi câu '이에요', '것' thường rút gọn thành '거'.",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Chọn câu đúng: 'Việc chơi với bạn bè thì vui.' (놀다: Chơi)",
                  options: [
                    "친구와 놀는 것은 즐거워요.",
                    "친구와 노는 것은 즐거워요.",
                    "친구와 놀은 것은 즐거워요.",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "<b>Lưu ý quan trọng:</b> Động từ kết thúc bằng 'ㄹ' (như 놀다, 만들다) khi gặp '-는' thì 'ㄹ' sẽ bị mất đi. -> <b>노는 것</b>.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Sở thích của tôi là NGHE nhạc. -> 제 취미는 음악을 ____는 것이에요.",
                  correctAnswer: "듣",
                  explanation:
                    "Với cấu trúc '-는 것', động từ <b>듣다</b> giữ nguyên (không biến âm thành '들' như các cấu trúc nguyên âm khác). -> 듣는 것.",
                },

                // --- PHẦN 3: NGỮ PHÁP - RỦ RÊ/ĐỀ NGHỊ (-(으)ㄹ까요?) ---
                {
                  questionType: "multipleChoice",
                  question: "Câu rủ rê: 'Chúng mình cùng đi nhé?'",
                  options: ["갈까요?", "가세요?", "갑니까?"],
                  correctAnswerIndex: 0,
                  explanation:
                    "가다 (không patchim) + ㄹ까요 -> <b>갈까요?</b>",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Chúng mình cùng ăn trưa nhé? -> 점심을 <<dropdown>>?",
                  options: ["먹을까요", "먹ㄹ까요", "먹으세요"],
                  correctAnswerIndex: 0,
                  explanation: "먹다 (có patchim) + 을까요 -> <b>먹을까요?</b>",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Từ vựng quan trọng khi rủ rê: 'Cùng nhau'. -> 우리 ________ 영화 봐요.",
                  correctAnswer: "같이",
                  explanation:
                    "<b>같이</b> (Ga-chi) nghĩa là Cùng nhau (thường đọc là 'Ga-chi' dù viết là 'Gat-i').",
                },
                {
                  questionType: "multipleChoice",
                  question: "Đáp lại lời mời: '갈까요?' (Đi nhé?). Bạn đồng ý:",
                  options: [
                    "아니요, 가요.",
                    "네, 좋아요. 같이 가요.",
                    "네, 안 가요.",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "Cách đáp lại tự nhiên nhất: <b>네, 좋아요</b> (Vâng, hay đấy/được đấy).",
                },

                // --- PHẦN 4: NGỮ PHÁP - ĐỊNH NGỮ (-는) ---
                {
                  questionType: "multipleChoice",
                  question: "Dịch cụm từ: 'Người (mà) tôi thích'.",
                  options: [
                    "저는 좋아하는 사람",
                    "제가 좋아하는 사람",
                    "제가 좋아한 사람",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "Định ngữ thì hiện tại: Động từ + 는 + Danh từ. -> <b>좋아하는 사람</b>. Chủ ngữ trong mệnh đề định ngữ dùng '이/가' (제가).",
                },
                {
                  questionType: "dropDown",
                  question: "Món ăn (mà) tôi ăn. -> 제가 <<dropdown>> 음식.",
                  options: ["먹는", "먹은", "먹을"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Động từ 먹다 + 는 -> <b>먹는</b> (đang ăn/thường ăn - hiện tại).",
                },
                {
                  questionType: "dropDown",
                  question: "Bộ phim (mà) tôi xem. -> 제가 <<dropdown>> 영화.",
                  options: ["보는", "보는", "봅니다"],
                  correctAnswerIndex: 0,
                  explanation: "보다 + 는 -> <b>보는</b>.",
                },

                // --- PHẦN 5: TÌNH HUỐNG HỘI THOẠI & CẢM XÚC ---
                {
                  questionType: "multipleChoice",
                  question:
                    "Bạn A: '취미가 뭐예요?' (Sở thích là gì?). Bạn B trả lời:",
                  options: [
                    "영화예요. (Là phim)",
                    "영화를 봐요. (Tôi xem phim)",
                    "제 취미는 영화를 보는 것이에요. (Sở thích của tôi là việc xem phim)",
                  ],
                  correctAnswerIndex: 2,
                  explanation:
                    "Câu C là câu trả lời đầy đủ và chuẩn xác nhất về mặt ngữ pháp ('Sở thích là...'). Tuy nhiên, trong văn nói ngắn gọn có thể dùng A.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Bày tỏ cảm xúc: Cuối tuần này là tuyệt nhất! -> 이번 주말은 ____예요!",
                  correctAnswer: "최고",
                  explanation: "<b>최고</b> (Choe-go) là Tuyệt nhất/Số 1.",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Sắp xếp câu rủ rê: (1) vào cuối tuần (2) cùng nhau (3) xem phim nhé?",
                  options: [
                    "주말에 같이 영화 볼까요?",
                    "같이 주말에 영화 볼까요?",
                    "Cả A và B đều được.",
                  ],
                  correctAnswerIndex: 2,
                  explanation:
                    "Trạng từ thời gian (주말에) và phó từ (같이) có thể đổi chỗ linh hoạt, nhưng thường thời gian đứng đầu câu.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Ca sĩ (mà) đến biểu diễn. -> <<dropdown>> 가수가 와요.",
                  options: ["노래하는", "노래", "노래한"],
                  correctAnswerIndex: 0,
                  explanation:
                    "노래하다 (Hát) -> dạng định ngữ: <b>노래하는</b> (người đang hát/người hát).",
                },
                {
                  questionType: "multipleChoice",
                  question: "Câu nào SAI ngữ pháp?",
                  options: [
                    "먹는 것 (Việc ăn)",
                    "가는 것 (Việc đi)",
                    "놀는 것 (Việc chơi)",
                  ],
                  correctAnswerIndex: 2,
                  explanation:
                    "Sai ở <b>놀는 것</b>. Vì '놀다' có patchim 'ㄹ' nên phải bỏ 'ㄹ' -> <b>노는 것</b>.",
                },
              ],
            },
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
            lessonLink: "/courses/3/topics/9/lessons/1",
            miniGameLink: "/courses/3/topics/9/lessons/1/minigame",
            status: "locked",
            targets: [
              "Học viên có thể định nghĩa và thảo luận sơ bộ về văn hóa và tầm quan trọng của việc chào hỏi.",
              "Sử dụng cấu trúc '-고 싶다' để diễn tả mong muốn (Tôi muốn làm gì đó).",
              "Hiểu ý nghĩa sâu sắc của các góc độ cúi chào trong văn hóa Hàn Quốc.",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai A
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Dạo này tôi đang học về văn hóa Hàn Quốc." },
                    { text: "Thật sự rất thú vị." },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Ồ, vậy sao?" },
                    {
                      text: "Trong văn hóa Hàn Quốc thì điều gì thú vị nhất ạ?",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "Tôi thấy văn hóa chào hỏi của Hàn Quốc rất ấn tượng.",
                    },
                    {
                      text: "Nó không chỉ là một lời chào đơn thuần, mà còn chứa đựng ý nghĩa của sự tôn trọng.",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Đúng vậy." },
                    {
                      text: "Ở Hàn Quốc, việc chào hỏi thật sự rất quan trọng.",
                    },
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
                      text: "저는 요즘 한국 문화에 대해 배우고 있어요. 정말 흥미로워요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_culture_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "와, 그래요? 한국 문화 중에서 어떤 것이 가장 재미있어요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_culture_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "저는 한국의 인사 문화가 인상 깊었어요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_culture_A2_1.mp3",
                    },
                    {
                      text: "단순한 인사가 아니라, 존경의 의미를 담고 있더라고요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_culture_A2_2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "맞아요. 한국에서는 인사가 정말 중요해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_culture_B2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Ý nghĩa của cái cúi đầu",
              content: `
      Trong văn hóa Hàn Quốc, <b>인사 (Chào hỏi)</b> không chỉ là lời nói mà là hành động thể hiện sự tôn trọng. Độ sâu của cái cúi đầu mang ý nghĩa khác nhau:
      <ul className="list-disc list-inside ml-2 mt-2">
        <li><b>15° (Nhẹ):</b> Chào bạn bè, đồng nghiệp ngang hàng hoặc người quen xã giao.</li>
        <li><b>30-45° (Bình thường):</b> Chào người lớn tuổi, cấp trên hoặc trong tình huống trang trọng. </li>
        <li><b>90° (Sâu):</b> Thể hiện sự tôn trọng cao nhất, hoặc dùng khi xin lỗi chân thành (Sa-gwa).</li>
      </ul>
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        🙇 <b>Lưu ý:</b> Khi bắt tay người lớn tuổi, hãy dùng tay trái đỡ nhẹ khuỷu tay phải hoặc đặt tay trái lên ngực để thể hiện sự kính trọng.
      </div>
    `,
            },
            vocabIds: [96, 97],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question: "Cấu trúc '-고 싶다' dùng để diễn tả điều gì?",
                  options: [
                    "Hành động đang diễn ra",
                    "Mong muốn (Muốn làm gì đó)",
                    "Quá khứ",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "'Gốc động từ + -고 싶다' diễn tả mong muốn của chủ ngữ (Tôi muốn...).",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Chia động từ: 배우다 (Học) -> Tôi muốn học: <<blank>> 싶어요.",
                  correctAnswer: "배우고",
                  explanation: "배우다 + 고 싶다 -> 배우고 싶다.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Chia động từ: 가다 (Đi) -> Tôi muốn đi Hàn Quốc: 한국에 <<blank>> 싶어요.",
                  correctAnswer: "가고",
                  explanation: "가다 + 고 싶다 -> 가고 싶다.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Tôi muốn ăn Kimchi (먹다): 김치를 <<dropdown>> 싶어요.",
                  options: ["먹고", "가고", "하고"],
                  correctAnswerIndex: 0,
                  explanation: "먹다 (Ăn) + 고 싶다 -> 먹고 싶다.",
                },
              ],
            },
            grammar: (
              <>
                <p className="font-semibold text-xl my-3">
                  Cấu trúc diễn tả mong muốn:{" "}
                  <span className="text-[var(--custom-orange)]">-고  </span>
                  <span className="text-[var(--custom-purple)]">싶다</span>
                </p>
                <p className="font-medium text-[18px] my-3">
                  Đây là cấu trúc cơ bản nhưng cực kỳ quan trọng để diễn tả "mong muốn" làm một việc gì đó.
                </p>
                <p className="font-medium text-[18px] my-3">
                  <b>Công thức:</b> Gốc động từ + -고 싶다.
                </p>
                <GreenExampleBox>
                  <ul className="list-disc list-inside">
                    <li className="font-medium text-[18px]">배우다 (học) → 배우고 싶어요. (Tôi muốn học.)</li>
                    <li className="font-medium text-[18px]">이해하다 (hiểu) → 이해하고 싶어요. (Tôi muốn hiểu.)</li>
                    <li className="font-medium text-[18px]">가다 (đi) → 가고 싶어요. (Tôi muốn đi.)</li>
                  </ul>
                </GreenExampleBox>
                <p className="font-medium text-[18px] my-3">
                  <b>Cách dùng trong bài:</b> 한국 문화를 더 배우고 싶어요. (Tôi muốn học thêm về văn hóa Hàn Quốc.)
                </p>
              </>
            )
          },
          {
            id: 2,
            title: "Lễ nghi và phép tắc quan trọng",
            icon: <FaRuler />,
            lessonLink: "/courses/3/topics/9/lessons/2",
            miniGameLink: "/courses/3/topics/9/lessons/2/minigame",
            status: "locked",
            targets: [
              "Học viên hiểu và có thể nói về tầm quan trọng của lễ nghi (예절) và sự tôn trọng (존경) trong xã hội Hàn Quốc.",
              "Sử dụng cấu trúc '-(으)려면' để diễn tả điều kiện cần thiết (Nếu muốn... thì...).",
              "Nắm vững quy tắc đưa và nhận đồ vật bằng hai tay.",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai A
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "Ở Hàn Quốc, tấm lòng tôn trọng người lớn rất quan trọng.",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "Vâng, có lẽ vì vậy mà lễ nghi ăn uống hay lễ nghi ngôn ngữ đã rất phát triển.",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Đúng vậy." },
                    {
                      text: "Khi đưa đồ cho người lớn, việc đưa bằng hai tay là phép tắc cơ bản.",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    { text: "Càng học về văn hóa mới," },
                    {
                      text: "tôi càng nhận ra việc tôn trọng lẫn nhau quan trọng đến nhường nào.",
                    },
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
                      text: "한국에서는 어른들을 존경하는 마음이 아주 중요해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_etiquette_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "네, 그래서 식사 예절이나 언어 예절이 발달한 것 같아요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_etiquette_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "맞아요. 어른들께 물건을 드릴 때는 두 손으로 드리는 것이 기본 예절이에요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_etiquette_A2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "새로운 문화를 배울수록, 서로를 존경하는 것이 얼마나 중요한지 깨닫게 돼요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_etiquette_B2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Văn hóa 'Hai bàn tay' (두 손)",
              content: `
      Trong đoạn hội thoại, nhân vật A có nhắc đến việc đưa đồ bằng hai tay. Đây là quy tắc vàng trong giao tiếp Hàn Quốc:
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Khi <b>đưa</b> hoặc <b>nhận</b> đồ vật (tiền, danh thiếp, quà, ly rượu...) với người lớn tuổi hoặc cấp trên, bạn bắt buộc phải dùng <b>hai tay</b>.</li>
        <li>Nếu một tay đang bận, bạn có thể dùng tay trái đỡ nhẹ khuỷu tay phải hoặc đặt tay trái lên ngực để thể hiện sự kính trọng. </li>
      </ul>
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        🤲 <b>Ghi nhớ:</b> Dùng một tay (đặc biệt là tay trái) đưa đồ cho người lớn bị coi là rất thô lỗ (무례하다).
      </div>
    `,
            },
            funQuiz: {
              question:
                "Hành động nào sau đây bị coi là THIẾU LỊCH SỰ khi giao tiếp với người lớn tuổi ở Hàn Quốc?",
              options: [
                "A. Cúi đầu chào.",
                "B. Đưa đồ vật bằng một tay.",
                "C. Dùng kính ngữ.",
              ],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "Việc đưa hoặc nhận đồ vật bằng một tay với người bề trên bị coi là thiếu tôn trọng. Hãy luôn dùng hai tay nhé!",
            },
            vocabIds: [98, 99, 100],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question: "Cấu trúc '-(으)려면' mang nghĩa là gì?",
                  options: [
                    "Tuy... nhưng...",
                    "Vì... nên...",
                    "Nếu muốn... thì...",
                  ],
                  correctAnswerIndex: 2,
                  explanation:
                    "'-(으)려면' diễn tả điều kiện cần thiết để đạt được một mục đích (Nếu muốn làm gì đó, thì phải...).",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Chia động từ: hiểu (이해하다) -> Nếu muốn hiểu: 이해하<<blank>>.",
                  correctAnswer: "려면",
                  explanation:
                    "이해하다 (kết thúc bằng nguyên âm) -> cộng '-려면' -> 이해하려면.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Chia động từ: nhận (받다) -> Nếu muốn nhận: 받<<blank>>.",
                  correctAnswer: "으려면",
                  explanation:
                    "받다 (kết thúc bằng phụ âm) -> cộng '-으려면' -> 받으려면.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Hoàn thành câu: 한국어를 잘<<dropdown>> 매일 공부하세요. (Nếu muốn giỏi tiếng Hàn, hãy học mỗi ngày)",
                  options: ["하려면", "하러면", "하면"],
                  correctAnswerIndex: 0,
                  explanation: "잘하다 -> 잘하려면 (Nếu muốn làm giỏi).",
                },
              ],
            },
            grammar: (
              <>
                <p className="font-semibold text-xl my-3">
                  Cấu trúc "Nếu muốn..., thì...":{" "}
                  <span className="text-[var(--custom-orange)]">-(으)려면</span>
                </p>
                <p className="font-medium text-[18px] my-3">
                  Đây là cấu trúc dùng để diễn tả điều kiện cần thiết để đạt được một mục đích nào đó. Nó thường được dịch là "Nếu muốn..." hoặc "Để mà...".                </p>
                <p className="font-semibold text-[18px] my-3">
                  Quy tắc chia gốc từ (Bỏ đuôi -다):
                </p>
                <div className="mx-5">
                  <p className="font-medium text-[18px] my-3">
                    <b>1. Gốc từ kết thúc bằng nguyên âm</b> (hoặc kết thúc bằng phụ âm ㄹ):
                  </p>
                  <p className="font-medium text-[18px] my-3">
                    Thêm: -려면
                  </p>
                  <GreenExampleBox>
                    <ul className="list-disc list-inside">
                      <li className="font-medium text-[18px]">이해하다 (hiểu) → 이해하려면 (Nếu muốn hiểu thì...)</li>
                      <li className="font-medium text-[18px]">만들다 (làm) → 만들려면 (Nếu muốn làm/tạo ra thì...)</li>
                    </ul>
                  </GreenExampleBox>

                  <p className="font-medium text-[18px] my-3">
                    <b>2. Gốc từ kết thúc bằng phụ âm</b> (trừ ㄹ):
                  </p>
                  <p className="font-medium text-[18px] my-3">
                    Thêm: -으려면
                  </p>
                  <GreenExampleBox>
                    <ul className="list-disc list-inside">
                      <li className="font-medium text-[18px]">받다 (nhận) → 받으려면 (Nếu muốn nhận thì...)</li>
                    </ul>
                  </GreenExampleBox>
                </div>
                <p className="font-semibold text-xl my-3">
                  Ví dụ tổng quát:
                </p>
                <div className="mx-5">
                  <GreenExampleBox>
                    <p className="font-medium text-[18px]">한국 문화를 잘 이해하려면, 예절을 먼저 배워야 해요. (Nếu muốn hiểu rõ văn hóa Hàn Quốc, thì phải học lễ nghi trước tiên.)</p>
                  </GreenExampleBox>
                </div>
              </>
            )
          },
          {
            id: 3,
            title: "Ẩm thực và trang phục",
            icon: <GiClothes />,
            lessonLink: "/courses/3/topics/9/lessons/3",
            miniGameLink: "/courses/3/topics/9/lessons/3/minigame",
            status: "locked",
            targets: [
              "Học viên có thể thảo luận đơn giản về các nét đặc trưng của ẩm thực (음식) và trang phục (한복) truyền thống Hàn Quốc.",
              "Sử dụng cấu trúc định ngữ tính từ '-(으)ㄴ' để miêu tả sự vật (Ví dụ: Trang phục đẹp).",
              "Nắm vững quy tắc biến đổi bất quy tắc 'ㅂ' khi dùng định ngữ (아름답다 -> 아름다운).",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai A
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "Tôi thực sự rất thích món ăn truyền thống của Hàn Quốc.",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [{ text: "Bạn thích món ăn nào ạ?" }],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Tôi thích Bulgogi và Bibimbap." },
                    {
                      text: "Và tôi cũng thấy Hanbok mặc vào các dịp lễ tết thật sự rất đẹp.",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "Vâng, Hanbok là trang phục truyền thống có đường nét và màu sắc rất đẹp.",
                    },
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
                      text: "저는 한국의 전통 음식을 정말 좋아해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_culture_fc_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "어떤 음식을 좋아하세요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_culture_fc_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "불고기하고 비빔밥을 좋아해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_culture_fc_A2_1.mp3",
                    },
                    {
                      text: "그리고 명절에 입는 한복도 정말 아름다운 것 같아요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_culture_fc_A2_2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "네, 한복은 색깔과 선이 아름다운 전통 옷이에요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_culture_fc_B2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Hanbok (한복) - Vẻ đẹp của đường cong",
              content: `
      <b>Hanbok</b> là trang phục truyền thống của Hàn Quốc, nổi tiếng với màu sắc rực rỡ và các đường nét thanh thoát.
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">Đặc trưng của Hanbok là <b>không có túi</b> và nhấn mạnh vào các <b>đường cong</b> (như viền áo, tay áo). </li>
        <li>Ngày nay, người Hàn thường chỉ mặc Hanbok vào các dịp đặc biệt như Tết (Seollal), Trung thu (Chuseok) hoặc đám cưới.</li>
      </ul>
      <div className="mt-4 p-3 bg-pink-50 rounded-lg">
        👘 <b>Trải nghiệm:</b> Khi đến cung điện Gyeongbokgung ở Seoul, nếu bạn mặc Hanbok, bạn sẽ được miễn phí vé vào cửa đấy!
      </div>
    `,
            },
            funQuiz: {
              question: "Người Hàn Quốc thường mặc Hanbok vào những dịp nào?",
              options: [
                "A. Khi đi làm hàng ngày.",
                "B. Khi đi ngủ.",
                "C. Vào các dịp lễ tết (Seollal, Chuseok) hoặc đám cưới.",
              ],
              correctAnswerIndex: 2, // Đáp án C
              explanation:
                "Hanbok là lễ phục trang trọng, ngày nay chủ yếu được mặc trong các dịp lễ tết, cưới hỏi hoặc sự kiện văn hóa.",
            },
            vocabIds: [101, 102, 103],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question:
                    "Cấu trúc '-(으)ㄴ' gắn sau tính từ dùng để làm gì?",
                  options: [
                    "Biến tính từ thành danh từ",
                    "Biến tính từ thành từ bổ nghĩa cho danh từ đứng sau",
                    "Chỉ thì quá khứ",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "'-(으)ㄴ' giúp tính từ đứng trước danh từ để miêu tả tính chất của danh từ đó (Ví dụ: Người ĐẸP).",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Định ngữ: 예쁘다 (Đẹp) + 사람 (Người) -> Người đẹp: 예쁘<<blank>> 사람.",
                  correctAnswer: "ㄴ",
                  explanation:
                    "예쁘다 (kết thúc bằng nguyên âm) -> cộng '-ㄴ' -> 예쁜.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Định ngữ: 좋다 (Tốt) + 친구 (Bạn) -> Bạn tốt: 좋<<blank>> 친구.",
                  correctAnswer: "은",
                  explanation:
                    "좋다 (kết thúc bằng phụ âm) -> cộng '-은' -> 좋은.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Bất quy tắc 'ㅂ': 아름답다 (Đẹp) + 옷 (Áo) -> Áo đẹp: <<dropdown>> 옷.",
                  options: ["아름다운", "아름답은", "아름답는"],
                  correctAnswerIndex: 0,
                  explanation:
                    "아름답다 -> Bỏ 'ㅂ' thêm '우' -> 아름다우 + 'ㄴ' -> 아름다운.",
                },
              ],
            },
            grammar: (
              <>
                <p className="font-semibold text-xl my-3">
                  Định ngữ của tính từ:{" "}
                  <span className="text-[var(--custom-orange)]">-(으)ㄴ</span>
                </p>
                <p className="font-medium text-[18px] my-3">
                  Cấu trúc này dùng để biến một tính từ (mô tả trạng thái) thành một cụm từ bổ nghĩa cho danh từ đứng sau nó.
                </p>
                <p className="font-semibold text-[18px] my-3">
                  Quy tắc chia gốc từ (Bỏ đuôi -다):
                </p>
                <div className="mx-5">
                  <p className="font-medium text-[18px] my-3">
                    <b>1. Gốc từ kết thúc bằng nguyên âm</b> (hoặc kết thúc bằng phụ âm ㄹ):
                  </p>
                  <p className="font-medium text-[18px] my-3">
                    Thêm -ㄴ
                  </p>
                  <GreenExampleBox>
                    <ul className="list-disc list-inside">
                      <li className="font-medium text-[18px]">예쁘다 → 예쁜 사람 (người đẹp)</li>
                    </ul>
                  </GreenExampleBox>

                  <p className="font-medium text-[18px] my-3">
                    <b>2. Gốc từ kết thúc bằng phụ âm</b> (trừ ㄹ):
                  </p>
                  <p className="font-medium text-[18px] my-3">
                    Thêm -은
                  </p>
                  <GreenExampleBox>
                    <ul className="list-disc list-inside">
                      <li className="font-medium text-[18px]">좋다 → 좋은 날씨 (thời tiết tốt)</li>
                    </ul>
                  </GreenExampleBox>
                </div>
                <GrammarTable
                  headers={["Nguyên thể", "Nguyên thể", "Nguyên thể"]}
                  rows={[
                    {
                      col1: "Bất quy tắc ㅂ",
                      col2: "Bỏ ㅂ, thay bằng 우, rồi thêm -ㄴ",
                      col3: "아름답다 → 아름다운 (Hanbok đẹp)"
                    },
                    {
                      col1: "Phụ âm ㄹ (Bỏsung)",
                      col2: "Bỏ hàn ㄹ khỏi gốc từ, sau đó thêm -ㄴ",
                      col3: "달다 (ngọt) → 단 커피 (cà phê ngọt)"
                    }
                  ]}
                  className="my-6"
                />
                <p className="font-semibold text-[18px] my-3">
                  Ví dụ tổng quát:
                </p>
                <GreenExampleBox>
                  <p className="font-medium text-[18px]">
                    한복은 아름다운 옷이에요. (Hanbok là một trang phục đẹp.)
                  </p>
                </GreenExampleBox>
              </>
            )
          },
          {
            id: 4,
            title: "Ý nghĩa đa dạng văn hóa",
            icon: <GiPartyFlags />,
            lessonLink: "/courses/3/topics/9/lessons/4",
            miniGameLink: "/courses/3/topics/9/lessons/4/minigame",
            status: "locked",
            targets: [
              "Thảo luận về tầm quan trọng của việc thấu hiểu (이해하다) ý nghĩa đằng sau các nền văn hóa.",
              "Sử dụng cấu trúc '-고 생각하다' để diễn tả quan điểm cá nhân (Tôi nghĩ rằng...).",
              "Tìm hiểu về khái niệm 'Jeong' (Tình) - nét đặc trưng trong tâm hồn người Hàn.",
            ],
            vnDialogue: {
              mainRole: "A", // Người học đóng vai A
              hasSpeakerBox: false,
              contents: [
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "Việc thấu hiểu văn hóa của nước khác có ý nghĩa như thế nào nhỉ?",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "Tôi nghĩ rằng nó giúp chúng ta có thể nhìn thế giới một cách rộng mở hơn.",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    { text: "Đúng vậy." },
                    {
                      text: "Mọi nền văn hóa đều có vẻ đẹp và ý nghĩa riêng của nó.",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "Vì vậy chúng ta phải thấu hiểu và tôn trọng văn hóa của nhau.",
                    },
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
                      text: "다른 나라의 문화를 이해하는 것은 어떤 의미가 있을까요?",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_culture_div_A1.mp3", // Thay link audio thực tế
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "저는 세상을 더 넓게 볼 수 있게 해준다고 생각해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_culture_div_B1.mp3",
                    },
                  ],
                },
                {
                  role: "A",
                  avatarUrl: speakerAAvatarUrl,
                  lines: [
                    {
                      text: "맞아요. 모든 문화는 고유의 의미와 아름다움을 가지고 있어요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_culture_div_A2.mp3",
                    },
                  ],
                },
                {
                  role: "B",
                  avatarUrl: speakerBAvatarUrl,
                  lines: [
                    {
                      text: "그래서 우리는 서로의 문화를 존경하고 이해해야 해요.",
                      audioUrl:
                        "https://firebasestorage.googleapis.com/.../dialogue_culture_div_B2.mp3",
                    },
                  ],
                },
              ],
            },
            culturalStory: {
              title: "Jeong (정) - Sợi dây kết nối vô hình",
              content: `
      Để thực sự <b>thấu hiểu (이해하다)</b> người Hàn, bạn cần biết đến khái niệm <b>"Jeong" (정 - Tình)</b>.
      <ul className="list-disc list-inside ml-2 mt-2">
        <li className="mb-2">"Jeong" không chỉ là tình yêu hay tình bạn. Nó là sự gắn kết, quyến luyến sâu sắc giữa người với người (thậm chí với cả đồ vật) qua thời gian dài.</li>
        <li>Chính vì có "Jeong", người Hàn thường hay chia sẻ (chia đồ ăn, mời khách nồng nhiệt) và coi trọng tập thể ("chúng tôi" - 우리) hơn cá nhân.</li>
      </ul>
      <div className="mt-4 p-3 bg-red-50 rounded-lg">
        ❤️ <b>Ví dụ:</b> Bánh Choco Pie nổi tiếng có slogan là "Tình" (Jeong), biểu tượng cho sự sẻ chia ấm áp.
      </div>
    `,
            },
            funQuiz: {
              question:
                "Khái niệm nào thể hiện sự gắn kết tình cảm sâu sắc, đặc trưng cho tâm hồn người Hàn Quốc?",
              options: ["A. Han (Hận)", "B. Jeong (Tình)", "C. Heung (Hứng)"],
              correctAnswerIndex: 1, // Đáp án B
              explanation:
                "Jeong (정) là sợi dây tình cảm gắn kết mọi người trong xã hội Hàn Quốc, thể hiện sự quan tâm và chia sẻ.",
            },
            vocabIds: [104, 105, 106],
            practiceBox: {
              questions: [
                {
                  questionType: "multipleChoice",
                  question: "Cấu trúc '-고 생각하다' dùng để làm gì?",
                  options: [
                    "Hỏi đường",
                    "Diễn tả suy nghĩ, quan điểm cá nhân",
                    "Yêu cầu người khác làm gì",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "'-고 생각하다' nghĩa là 'Tôi nghĩ rằng...', dùng để trình bày ý kiến.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Nêu quan điểm: Ngon (맛있다) -> Tôi nghĩ là ngon: 맛있<<blank>> 생각해요.",
                  correctAnswer: "다고",
                  explanation:
                    "Tính từ (맛있다) + 다고 생각하다 -> 맛있다고 생각하다.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Nêu quan điểm: Quan trọng (중요하다) -> Tôi nghĩ là quan trọng: 중요하<<blank>> 생각해요.",
                  correctAnswer: "다고",
                  explanation:
                    "Tính từ (중요하다) + 다고 생각하다 -> 중요하다고 생각하다.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Với danh từ: Học sinh (학생) -> Tôi nghĩ là học sinh: 학생<<dropdown>> 생각해요.",
                  options: ["이라고", "다고"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Danh từ (có patchim) + 이라고 생각하다. (Nếu không có patchim + 라고).",
                },
              ],
            },
            grammar: (
              <>
                <p className="font-semibold text-xl my-3">
                  Cấu trúc diễn tả suy nghĩ/ý kiến: -다고 생각하다
                </p>
                <p className="font-medium text- my-3">
                  Đây là cấu trúc dùng để diễn tả suy nghĩ, quan điểm cá nhân của người nói về một sự việc, dịch là "Tôi nghĩ rằng...". <br />
                  Nó được tạo ra bằng cách <b>chia động từ/tính</b> từ theo quy tắc tường thuật gián tiếp, sau đó thêm động từ suy nghĩ <b>(생각하다)</b>.
                </p>
                <p className="font-medium text-[18px] my-3">
                  Quy tắc chia đuôi (Bỏ đuôi -다):
                </p>
                <GrammarTable
                  headers={["Loại từ", "Quy tắc", "Kết quả"]}
                  rows={[
                    {
                      col1: "1. Tính từ",
                      col2: "Gốc từ + -다고",
                      col3: "춥다 (lạnh) → 춥다고 생각해요."
                    },
                    {
                      col1: "2. Động từ",
                      col2: "Gốc từ + -ㄴ다고",
                      col3: "가다 (đi) → 간다고 생각해요."
                    },
                    {
                      col1: "3. Danh từ",
                      col2: "Danh từ + -(이)라고",
                      col3: "선생님 → 선생님이라고 생각해요."
                    }
                  ]}
                  className="my-3"
                />
                <p className="font-semibold text-[18px] my-3">
                  Ví dụ tổng quát:
                </p>
                <GreenExampleBox>
                  <p className="font-medium text-[18px]">저는 그 사람이 약속을 지킨다고 생각해요. (Tôi nghĩ rằng người đó sẽ giữ lời hứa.)</p>
                  <ul className="list-disc list-inside">
                    <li className="font-medium text-[18px]">예쁘다 → 예쁜 사람 (người đẹp)</li>
                  </ul>
                </GreenExampleBox>
              </>
            )
          },
          {
            id: 5,
            title: "Ôn tập",
            icon: <FaStar />,
            lessonLink: "/courses/3/topics/9/lessons/5",
            miniGameLink: "/courses/3/topics/9/lessons/5/minigame",
            status: "final",
            targets: [
              "Tổng kết toàn bộ kiến thức về văn hóa và ngôn ngữ, chuẩn bị cho các cấp độ cao hơn.",
              "Ôn tập các cấu trúc cao cấp: Mong muốn '-고 싶다', Điều kiện '-(으)려면', Định ngữ '-(으)ㄴ', Nêu ý kiến '-고 생각하다'.",
              "Hoàn thành bài viết/nói ngắn về lý do học tiếng Hàn và vẻ đẹp văn hóa Hàn Quốc.",
            ],
            vocabIds: [96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106],
            practiceBox: {
              questions: [
                // --- PHẦN 1: TỪ VỰNG VĂN HÓA & TRỪU TƯỢNG ---
                {
                  questionType: "multipleChoice",
                  question: "Từ '예절' (Ye-jeol) có nghĩa là gì?",
                  options: ["Nghệ thuật", "Lễ nghi/Phép lịch sự", "Lịch sử"],
                  correctAnswerIndex: 1,
                  explanation: "<b>예절</b> là Lễ nghi, phép tắc cư xử.",
                },
                {
                  questionType: "multipleChoice",
                  question:
                    "Động từ '존경하다' (Jon-gyeong-ha-da) thường dùng cho đối tượng nào?",
                  options: [
                    "Bạn bè",
                    "Người nhỏ tuổi",
                    "Người lớn tuổi/Vĩ nhân",
                  ],
                  correctAnswerIndex: 2,
                  explanation:
                    "<b>존경하다</b> nghĩa là Tôn trọng/Kính trọng, thường dùng với người lớn tuổi, bố mẹ, thầy cô.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền từ: 'Món ăn ________' (Đồ ăn cổ truyền). -> ________ 음식.",
                  correctAnswer: "전통",
                  explanation: "<b>전통</b> (Jeon-tong) nghĩa là Truyền thống.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Tính từ '아름답다' (A-reum-dap-da) nghĩa là:",
                  options: ["Đẹp đẽ", "Khó khăn", "Thú vị"],
                  correctAnswerIndex: 0,
                  explanation:
                    "<b>아름답다</b> thường dùng để chỉ vẻ đẹp của phong cảnh, văn hóa hoặc tâm hồn (trang trọng hơn '예쁘다').",
                },

                // --- PHẦN 2: NGỮ PHÁP - MONG MUỐN (-고 싶다) ---
                {
                  questionType: "dropDown",
                  question: "Tôi muốn học tiếng Hàn. -> 한국어를 <<dropdown>>.",
                  options: ["배우고 싶어요", "배우러 가요", "배우세요"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Động từ + <b>고 싶다</b> diễn tả mong muốn của ngôi thứ nhất.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Tôi muốn đi du lịch. -> 여행을 ________ 싶어요. (가다)",
                  correctAnswer: "가고",
                  explanation: "가다 + 고 싶다 -> <b>가고 싶어요</b>.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Chọn câu đúng: 'Tôi muốn hiểu văn hóa.'",
                  options: [
                    "문화를 이해하고 싶어요.",
                    "문화를 이해해서 싶어요.",
                    "문화를 이해하면 싶어요.",
                  ],
                  correctAnswerIndex: 0,
                  explanation:
                    "이해하다 (Hiểu) + 고 싶다 -> <b>이해하고 싶어요</b>.",
                },

                // --- PHẦN 3: NGỮ PHÁP - MỤC ĐÍCH/ĐIỀU KIỆN (-(으)려면) ---
                {
                  questionType: "multipleChoice",
                  question: "Cấu trúc '-(으)려면' nghĩa là gì?",
                  options: [
                    "Nếu muốn/Để làm gì đó thì...",
                    "Tuy nhiên...",
                    "Vì... nên...",
                  ],
                  correctAnswerIndex: 0,
                  explanation:
                    "Là kết hợp của '-(으)려고 하다' (định làm) và '-(으)면' (nếu) -> Nếu định làm gì đó.",
                },
                {
                  questionType: "dropDown",
                  question:
                    "Nếu muốn ăn món ăn Hàn Quốc, hãy đến nhà hàng này. -> 한국 음식을 <<dropdown>> 이 식당에 가세요.",
                  options: ["먹으면", "먹으려면", "먹어서"],
                  correctAnswerIndex: 1,
                  explanation:
                    "먹다 (có patchim) + 으려면 -> <b>먹으려면</b> (Nếu muốn ăn).",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Nếu muốn GIỎI tiếng Hàn... -> 한국어를 잘 ________면...",
                  correctAnswer: "하려",
                  explanation:
                    "잘하다 (Giỏi) -> 잘하 (không patchim) + 려면 -> <b>잘하려면</b>.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Câu hoàn chỉnh: 'Nếu muốn hiểu, hãy học.'",
                  options: [
                    "이해하면 배우세요.",
                    "이해하려면 배우세요.",
                    "이해하고 배우세요.",
                  ],
                  correctAnswerIndex: 1,
                  explanation:
                    "Dùng <b>-(으)려면</b> khi vế sau là lời khuyên để đạt được mục đích ở vế trước.",
                },

                // --- PHẦN 4: NGỮ PHÁP - ĐỊNH NGỮ TÍNH TỪ (-(으)ㄴ) ---
                {
                  questionType: "multipleChoice",
                  question: "Biến đổi: 'Người tốt' (좋다: Tốt).",
                  options: ["좋는 사람", "좋은 사람", "좋을 사람"],
                  correctAnswerIndex: 1,
                  explanation:
                    "Tính từ có patchim (좋다) + 은 -> <b>좋은 사람</b>.",
                },
                {
                  questionType: "dropDown",
                  question: "Văn hóa đẹp. -> <<dropdown>> 문화.",
                  options: ["아름답은", "아름다운", "아름답는"],
                  correctAnswerIndex: 1,
                  explanation:
                    "<b>Bất quy tắc 'ㅂ':</b> 아름답다 -> bỏ 'ㅂ' thêm '운' -> <b>아름다운</b>.",
                },
                {
                  questionType: "fillInBlank",
                  question: "Cô gái đẹp (예쁘다). -> 예____ 여자.",
                  correctAnswer: "쁜",
                  explanation: "예쁘다 (không patchim) + ㄴ -> <b>예쁜</b>.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Câu nào dùng SAI định ngữ?",
                  options: [
                    "작은 모자 (Mũ nhỏ)",
                    "비싼 옷 (Áo đắt)",
                    "길은 머리 (Tóc dài - 길다)",
                  ],
                  correctAnswerIndex: 2,
                  explanation:
                    "Sai ở <b>길은</b>. Tính từ kết thúc bằng 'ㄹ' (길다) -> bỏ 'ㄹ' thêm 'ㄴ' -> <b>긴 머리</b>.",
                },

                // --- PHẦN 5: NGỮ PHÁP - NÊU Ý KIẾN (-다고 생각하다) ---
                {
                  questionType: "dropDown",
                  question:
                    "Tôi nghĩ là (nó) quan trọng. -> <<dropdown>> 생각해요.",
                  options: ["중요하다고", "중요하고", "중요해서"],
                  correctAnswerIndex: 0,
                  explanation:
                    "Tính từ (중요하다) + 다고 생각하다 -> <b>중요하다고 생각해요</b>.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Tôi nghĩ là (nó) tốt. -> 좋다고 생각해요.",
                  options: ["Đúng", "Sai"],
                  correctAnswerIndex: 0,
                  explanation:
                    "좋다 (nguyên thể) + 고 생각하다 -> <b>좋다고 생각해요</b>.",
                },

                // --- PHẦN 6: TỔNG HỢP & VIẾT (WRITING LOGIC) ---
                {
                  questionType: "multipleChoice",
                  question:
                    "Tại sao bạn học tiếng Hàn? (Chọn câu trả lời ngữ pháp đúng nhất)",
                  options: [
                    "한국 문화를 좋아해서 배워요.",
                    "한국 문화를 좋아하고 배워요.",
                    "한국 문화를 좋아면 배워요.",
                  ],
                  correctAnswerIndex: 0,
                  explanation:
                    "Cấu trúc 'Vì... nên...' (Lý do) -> <b>-아서/어서</b>.",
                },
                {
                  questionType: "multipleChoice",
                  question: "Sắp xếp câu: (1) nghĩ rằng (2) Hanbok (3) đẹp.",
                  options: [
                    "한복이 아름답다고 생각해요.",
                    "한복이 아름다운 생각해요.",
                    "생각이 한복 아름다워요.",
                  ],
                  correctAnswerIndex: 0,
                  explanation:
                    "Chủ ngữ (Hanbok) + Tính từ (Đẹp) + Cấu trúc nghĩ rằng -> <b>한복이 아름답다고 생각해요</b>.",
                },
                {
                  questionType: "fillInBlank",
                  question:
                    "Điền từ nối: Tôi thích món ăn Hàn Quốc ________ nó ngon. (Vì)",
                  correctAnswer: "왜냐하면",
                  explanation:
                    "Trong văn viết/nói trang trọng, có thể dùng <b>왜냐하면</b> (Bởi vì) để bắt đầu giải thích lý do, hoặc đơn giản dùng đuôi -아서/어서.",
                },
              ],
            },
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
  38: {
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
  39: {
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
  40: {
    text: "주세요",
    transcription: "juseyo",
    meaning: "Hãy cho tôi...",
    usage: "Dùng để yêu cầu người bán đưa món đồ mình muốn mua.",
    description: "Câu yêu cầu lịch sự khi mua hàng.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_juseyo.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1001/1001100.png", // Icon đưa tay xin
    wordType: "phrase",
    subdescription: "Nhấn mạnh lại từ Chủ đề 3 trong ngữ cảnh mua sắm.",
    parts: [
      {
        text: "주",
        color: "--custom-orange",
        description: "cho",
      },
      {
        text: "세요",
        color: "--custom-gray",
        description: "hãy (kính ngữ)",
      },
    ],
    examples: ["이거 주세요. (Cho tôi cái này.)", "물 주세요. (Cho tôi nước.)"],
  },
  41: {
    text: "병",
    transcription: "byeong",
    meaning: "Chai / Lọ",
    usage:
      "Đơn vị đếm (lượng từ) dùng cho các vật chứa chất lỏng như nước, rượu, nước ngọt.",
    description: "Lượng từ chỉ chai, lọ.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_byeong.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/820/820310.png", // Icon cái chai
    wordType: "counter",
    subdescription: "Bắt nguồn từ Hán tự 甁 (Bình).",
    parts: [
      {
        text: "병",
        color: "--custom-blue",
        description: "bình/chai",
      },
    ],
    examples: [
      "물 한 병 (Một chai nước).",
      "콜라 두 병 주세요. (Cho tôi 2 chai Cola.)",
    ],
  },
  42: {
    text: "하고",
    transcription: "hago",
    meaning: "Và / Với",
    usage: "Tiểu từ dùng để nối hai danh từ, thường dùng trong văn nói.",
    description: "Tiểu từ liên kết.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_hago.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/659/659902.png", // Icon dấu cộng hoặc liên kết
    wordType: "particle",
    subdescription: "Dùng nối danh từ: N1 + 하고 + N2.",
    parts: [
      {
        text: "하고",
        color: "--custom-purple",
        description: "và",
      },
    ],
    examples: [
      "빵하고 우유 주세요. (Cho tôi bánh mì và sữa.)",
      "친구하고 같이 가요. (Tôi đi cùng với bạn.)",
    ],
  },
  43: {
    text: "싸다",
    transcription: "ssada",
    meaning: "Rẻ",
    usage: "Dùng để miêu tả giá cả thấp, hợp lý.",
    description: "Tính từ chỉ giá rẻ.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_ssada.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2534/2534204.png", // Icon giảm giá/giá rẻ
    wordType: "adjective",
    subdescription: "Khi chia đuôi câu thân mật: <b>싸요 (ssayo)</b>.",
    parts: [
      {
        text: "싸",
        color: "--custom-blue",
        description: "gốc từ",
      },
      {
        text: "다",
        color: "--custom-gray",
        description: "đuôi từ điển",
      },
    ],
    examples: [
      "이거 진짜 싸요. (Cái này rẻ thật đấy.)",
      "싸게 해주세요. (Hãy bán rẻ cho tôi.)",
    ],
  },
  44: {
    text: "비싸다",
    transcription: "bissada",
    meaning: "Đắt",
    usage: "Dùng để miêu tả giá cả cao.",
    description: "Tính từ chỉ giá đắt.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_bissada.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2454/2454269.png", // Icon tiền bay đi/đắt đỏ
    wordType: "adjective",
    subdescription: "Khi chia đuôi câu thân mật: <b>비싸요 (bissayo)</b>.",
    parts: [
      {
        text: "비싸",
        color: "--custom-red",
        description: "gốc từ",
      },
      {
        text: "다",
        color: "--custom-gray",
        description: "đuôi từ điển",
      },
    ],
    examples: ["너무 비싸요. (Đắt quá.)", "비싸지 않아요. (Không đắt đâu.)"],
  },
  45: {
    text: "할인",
    transcription: "harin",
    meaning: "Giảm giá",
    usage: "Dùng để nói về việc chiết khấu giá cả.",
    description: "Danh từ chỉ sự giảm giá.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_harin.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/726/726476.png", // Icon % giảm giá
    wordType: "noun",
    subdescription: "Thường dùng: <b>할인해 주세요</b> (Hãy giảm giá cho tôi).",
    parts: [
      {
        text: "할",
        color: "--custom-blue",
        description: "Cát (cắt)",
      },
      {
        text: "인",
        color: "--custom-green",
        description: "Dẫn (kéo)",
      },
    ],
    examples: [
      "할인해 주세요. (Giảm giá cho tôi đi.)",
      "지금 할인 기간이에요. (Bây giờ là đợt giảm giá.)",
    ],
  },
  46: {
    text: "행복해요",
    transcription: "haengbokhaeyo",
    meaning: "Hạnh phúc",
    usage: "Dùng để diễn tả cảm xúc vui vẻ, mãn nguyện.",
    description: "Tính từ chỉ trạng thái hạnh phúc.",
    audioUrl:
      "https://firebasestorage.googleapis.com/.../vocab_haengbokhaeyo.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1067/1067357.png", // Icon mặt cười/trái tim
    wordType: "adjective",
    subdescription: "Gốc từ: <b>행복하다</b>.",
    parts: [
      {
        text: "행복",
        color: "--custom-orange",
        description: "hạnh phúc",
      },
      {
        text: "해요",
        color: "--custom-gray",
        description: "đuôi câu",
      },
    ],
    examples: [
      "정말 행복해요. (Tôi thật sự hạnh phúc.)",
      "만나서 행복해요. (Gặp bạn tôi rất hạnh phúc.)",
    ],
  },
  49: {
    text: "메뉴",
    transcription: "menyu",
    meaning: "Thực đơn",
    usage: "Dùng để gọi thực đơn khi vào nhà hàng.",
    description: "Danh từ mượn từ tiếng Anh 'Menu'.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_menyu.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png", // Icon quyển menu
    wordType: "noun",
    subdescription:
      "Thường nói: <b>메뉴 좀 주세요</b> (Cho tôi xem menu chút ạ).",
    parts: [
      {
        text: "메",
        color: "--custom-blue",
        description: "me",
      },
      {
        text: "뉴",
        color: "--custom-blue",
        description: "nu",
      },
    ],
    examples: ["메뉴 주세요. (Cho tôi thực đơn.)", "메뉴판 (Bảng thực đơn)."],
  },
  50: {
    text: "주문",
    transcription: "jumun",
    meaning: "Gọi món / Đặt hàng",
    usage: "Dùng khi quyết định chọn món ăn hoặc mua hàng.",
    description: "Danh từ chỉ việc đặt món.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_jumun.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3500/3500833.png", // Icon người phục vụ ghi order
    wordType: "noun",
    subdescription:
      "Bắt nguồn từ Hán tự 注文 (Chú Văn). Động từ: <b>주문하다</b>.",
    parts: [
      {
        text: "주",
        color: "--custom-orange",
        description: "chú",
      },
      {
        text: "문",
        color: "--custom-green",
        description: "văn",
      },
    ],
    examples: [
      "주문하시겠어요? (Quý khách muốn gọi món chưa?)",
      "주문할게요. (Tôi sẽ gọi món.)",
    ],
  },
  51: {
    text: "맛있어요",
    transcription: "masisseoyo",
    meaning: "Ngon",
    usage: "Dùng để khen ngợi thức ăn ngon.",
    description: "Tính từ/Cụm từ diễn tả vị ngon.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_masisseoyo.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1376/1376358.png", // Icon mặt ngon miệng (yummy)
    wordType: "phrase",
    subdescription:
      "Ghép từ <b>맛</b> (vị) + <b>있어요</b> (có). Ngược lại là <b>맛없어요</b> (dở/không ngon).",
    parts: [
      {
        text: "맛",
        color: "--custom-red",
        description: "vị",
      },
      {
        text: "있어요",
        color: "--custom-gray",
        description: "có",
      },
    ],
    examples: [
      "이거 정말 맛있어요. (Cái này ngon thật sự.)",
      "맛있게 드세요. (Chúc ăn ngon miệng.)",
    ],
  },
  52: {
    text: "밥",
    transcription: "bap",
    meaning: "Cơm / Bữa ăn",
    usage: "Dùng để chỉ món cơm nấu từ gạo, hoặc chỉ bữa ăn nói chung.",
    description: "Lương thực chính của người Hàn.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_bap.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3014/3014520.png", // Icon bát cơm
    wordType: "noun",
    subdescription: "Thường dùng trong câu chào: <b>밥 먹었어요?</b>",
    parts: [
      {
        text: "밥",
        color: "--custom-orange",
        description: "cơm",
      },
    ],
    examples: [
      "밥을 먹어요. (Tôi ăn cơm.)",
      "밥 한 공기 주세요. (Cho tôi một bát cơm.)",
    ],
  },
  53: {
    text: "물",
    transcription: "mul",
    meaning: "Nước",
    usage: "Danh từ chỉ nước uống.",
    description: "Nước uống.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_mul.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3100/3100566.png", // Icon cốc nước
    wordType: "noun",
    subdescription: "Trong nhà hàng thường là tự phục vụ (Self).",
    parts: [
      {
        text: "물",
        color: "--custom-blue",
        description: "nước",
      },
    ],
    examples: ["물 좀 주세요. (Cho tôi chút nước.)", "시원한 물 (Nước mát)."],
  },
  54: {
    text: "먹다",
    transcription: "meokda",
    meaning: "Ăn",
    usage: "Động từ chỉ hành động ăn uống.",
    description: "Động từ ăn.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_meokda.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1046/1046755.png", // Icon người ăn
    wordType: "verb",
    subdescription: "Quá khứ: <b>먹었어요</b>. Hiện tại: <b>먹어요</b>.",
    parts: [
      {
        text: "먹",
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
      "김치를 먹어요. (Tôi ăn kim chi.)",
      "점심 먹었어요? (Bạn ăn trưa chưa?)",
    ],
  },
  55: {
    text: "마시다",
    transcription: "masida",
    meaning: "Uống",
    usage: "Động từ chỉ hành động uống chất lỏng.",
    description: "Động từ uống.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_masida.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3050/3050239.png", // Icon người uống
    wordType: "verb",
    subdescription: "Quá khứ đặc biệt: <b>마셨어요</b>.",
    parts: [
      {
        text: "마시",
        color: "--custom-purple",
        description: "gốc từ",
      },
      {
        text: "다",
        color: "--custom-gray",
        description: "đuôi từ điển",
      },
    ],
    examples: [
      "물을 마셔요. (Tôi uống nước.)",
      "커피를 마셨어요. (Tôi đã uống cà phê.)",
    ],
  },
  56: {
    text: "좋아하다",
    transcription: "joahada",
    meaning: "Thích",
    usage:
      "Động từ diễn tả sự yêu thích đối với người hoặc vật. Luôn đi với tiểu từ tân ngữ -을/를.",
    description: "Động từ 'Thích'.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_joahada.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png", // Icon trái tim/like
    wordType: "verb",
    subdescription:
      "Khác với tính từ <b>좋다</b> (Tốt/Đẹp). Hiện tại: <b>좋아해요</b>.",
    parts: [
      {
        text: "좋아",
        color: "--custom-red",
        description: "thích",
      },
      {
        text: "하다",
        color: "--custom-gray",
        description: "làm (đuôi động từ)",
      },
    ],
    examples: [
      "저는 김밥을 좋아해요. (Tôi thích kimbap.)",
      "무슨 음식을 좋아해요? (Bạn thích món gì?)",
    ],
  },
  57: {
    text: "떡볶이",
    transcription: "tteokbokki",
    meaning: "Bánh gạo cay",
    usage: "Tên một món ăn đường phố nổi tiếng của Hàn Quốc.",
    description: "Món bánh gạo cay truyền thống.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_tteokbokki.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1895/1895685.png", // Icon Tteokbokki
    wordType: "noun",
    subdescription: "Món ăn tiêu biểu cho vị cay ngọt của Hàn Quốc.",
    parts: [
      {
        text: "떡",
        color: "--custom-orange",
        description: "bánh gạo",
      },
      {
        text: "볶이",
        color: "--custom-red",
        description: "xào",
      },
    ],
    examples: [
      "떡볶이는 매워요. (Tteokbokki cay lắm.)",
      "떡볶이 주세요. (Cho tôi Tteokbokki.)",
    ],
  },
  58: {
    text: "불고기",
    transcription: "bulgogi",
    meaning: "Thịt bò xào (Bulgogi)",
    usage: "Món thịt nướng/xào ướp gia vị ngọt đặc trưng.",
    description: "Món thịt bò tẩm gia vị.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_bulgogi.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1134/1134447.png", // Icon thịt nướng
    wordType: "noun",
    subdescription: "Ghép từ <b>불</b> (lửa) + <b>고기</b> (thịt).",
    parts: [
      {
        text: "불",
        color: "--custom-red",
        description: "lửa",
      },
      {
        text: "고기",
        color: "--custom-brown",
        description: "thịt",
      },
    ],
    examples: [
      "불고기는 안 매워요. (Bulgogi không cay.)",
      "불고기를 먹고 싶어요. (Tôi muốn ăn Bulgogi.)",
    ],
  },
  59: {
    text: "건강",
    transcription: "geongang",
    meaning: "Sức khỏe",
    usage: "Dùng để nói về tình trạng thể chất.",
    description: "Danh từ chỉ sức khỏe.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_geongang.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2966/2966334.png", // Icon sức khỏe/trái tim
    wordType: "noun",
    subdescription: "Bắt nguồn từ Hán tự 健康 (Kiện Khang).",
    parts: [
      {
        text: "건",
        color: "--custom-blue",
        description: "kiện",
      },
      {
        text: "강",
        color: "--custom-green",
        description: "khang",
      },
    ],
    examples: [
      "건강하세요. (Hãy mạnh khỏe nhé.)",
      "건강에 좋은 음식. (Món ăn tốt cho sức khỏe.)",
    ],
  },
  60: {
    text: "힘",
    transcription: "him",
    meaning: "Sức lực / Năng lượng",
    usage: "Dùng để diễn tả sức mạnh thể chất hoặc tinh thần.",
    description: "Danh từ chỉ sức lực.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_him.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1545/1545626.png", // Icon cánh tay cơ bắp
    wordType: "noun",
    subdescription:
      "Thường dùng: <b>힘이 없어요</b> (Hết sức rồi) hoặc <b>힘내세요!</b> (Cố lên!).",
    parts: [
      {
        text: "힘",
        color: "--custom-red",
        description: "sức",
      },
    ],
    examples: [
      "힘이 세요. (Sức khỏe tốt/Mạnh.)",
      "너무 피곤해서 힘이 없어요. (Mệt quá nên chẳng còn sức.)",
    ],
  },
  61: {
    text: "삼계탕",
    transcription: "samgyetang",
    meaning: "Gà hầm sâm",
    usage: "Món ăn tẩm bổ nổi tiếng, thường ăn khi mệt mỏi hoặc vào mùa hè.",
    description: "Món canh gà nhân sâm.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_samgyetang.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2515/2515129.png", // Icon bát canh nóng
    wordType: "noun",
    subdescription:
      "Ghép từ <b>삼</b> (sâm) + <b>계</b> (gà/kê) + <b>탕</b> (canh/thang).",
    parts: [
      {
        text: "삼",
        color: "--custom-orange",
        description: "sâm",
      },
      {
        text: "계",
        color: "--custom-yellow",
        description: "kê (gà)",
      },
      {
        text: "탕",
        color: "--custom-red",
        description: "thang (canh)",
      },
    ],
    examples: [
      "삼계탕을 드세요. (Hãy ăn gà hầm sâm đi.)",
      "삼계탕은 건강에 좋아요. (Gà hầm sâm tốt cho sức khỏe.)",
    ],
  },
  62: {
    text: "지하철",
    transcription: "jihacheol",
    meaning: "Tàu điện ngầm",
    usage: "Phương tiện công cộng phổ biến nhất ở các thành phố lớn Hàn Quốc.",
    description: "Tàu điện chạy dưới lòng đất.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_jihacheol.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2084/2084169.png", // Icon tàu điện ngầm
    wordType: "noun",
    subdescription:
      "Bắt nguồn từ Hán tự: <b>지</b> (Địa/Đất) + <b>하</b> (Hạ/Dưới) + <b>철</b> (Thiết/Sắt).",
    parts: [
      { text: "지", color: "--custom-brown", description: "Địa" },
      { text: "하", color: "--custom-blue", description: "Hạ" },
      { text: "철", color: "--custom-gray", description: "Thiết" },
    ],
    examples: [
      "지하철을 타요. (Tôi đi tàu điện ngầm.)",
      "지하철역 (Ga tàu điện ngầm).",
    ],
  },
  63: {
    text: "버스",
    transcription: "beoseu",
    meaning: "Xe buýt",
    usage: "Phương tiện công cộng đường bộ.",
    description: "Xe buýt.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_beoseu.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3448/3448339.png", // Icon xe buýt
    wordType: "noun",
    subdescription: "Là từ mượn từ tiếng Anh 'Bus'.",
    parts: [
      { text: "버", color: "--custom-blue", description: "beo" },
      { text: "스", color: "--custom-blue", description: "seu" },
    ],
    examples: [
      "버스를 기다려요. (Tôi đợi xe buýt.)",
      "버스 정류장 (Trạm xe buýt).",
    ],
  },
  64: {
    text: "택시",
    transcription: "taeksi",
    meaning: "Taxi",
    usage: "Phương tiện di chuyển cá nhân có trả phí.",
    description: "Xe taxi.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_taeksi.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2555/2555013.png", // Icon taxi
    wordType: "noun",
    subdescription: "Là từ mượn từ tiếng Anh 'Taxi'.",
    parts: [
      { text: "택", color: "--custom-orange", description: "taek" },
      { text: "시", color: "--custom-orange", description: "si" },
    ],
    examples: ["택시를 잡아요. (Bắt taxi.)", "택시비 (Tiền taxi)."],
  },
  65: {
    text: "어디",
    transcription: "eodi",
    meaning: "Ở đâu / Nơi nào",
    usage: "Đại từ nghi vấn dùng để hỏi về địa điểm, vị trí.",
    description: "Từ để hỏi nơi chốn.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_eodi.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2838/2838912.png", // Icon bản đồ/định vị hỏi chấm
    wordType: "pronoun",
    subdescription: "Thường dùng: <b>어디예요?</b> hoặc <b>어디에 있어요?</b>",
    parts: [
      {
        text: "어디",
        color: "--custom-blue",
        description: "đâu",
      },
    ],
    examples: [
      "집이 어디예요? (Nhà bạn ở đâu?)",
      "여기가 어디예요? (Đây là đâu?)",
    ],
  },
  66: {
    text: "가다",
    transcription: "gada",
    meaning: "Đi",
    usage: "Di chuyển rời xa vị trí người nói hoặc hướng tới đích khác.",
    description: "Động từ đi.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_gada.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/5556/5556391.png", // Icon người đang đi bộ
    wordType: "verb",
    subdescription: "Hiện tại: <b>가요</b>. Quá khứ: <b>갔어요</b>.",
    parts: [
      {
        text: "가",
        color: "--custom-green",
        description: "gốc từ",
      },
      {
        text: "다",
        color: "--custom-gray",
        description: "đuôi từ điển",
      },
    ],
    examples: [
      "학교에 가요. (Tôi đi đến trường.)",
      "지금 가요. (Tôi đi bây giờ đây.)",
    ],
  },
  67: {
    text: "오다",
    transcription: "oda",
    meaning: "Đến / Lại đây",
    usage: "Di chuyển hướng về phía người nói.",
    description: "Động từ đến.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_oda.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2928/2928867.png", // Icon mũi tên chỉ vào điểm đến
    wordType: "verb",
    subdescription: "Hiện tại: <b>와요</b>. Quá khứ: <b>왔어요</b>.",
    parts: [
      {
        text: "오",
        color: "--custom-orange",
        description: "gốc từ",
      },
      {
        text: "다",
        color: "--custom-gray",
        description: "đuôi từ điển",
      },
    ],
    examples: [
      "빨리 와요! (Lại đây nhanh lên!)",
      "친구가 집에 왔어요. (Bạn đã đến nhà tôi.)",
    ],
  },
  68: {
    text: "왼쪽",
    transcription: "oenjjok",
    meaning: "Bên trái",
    usage: "Danh từ chỉ hướng bên trái.",
    description: "Hướng trái.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_oenjjok.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/271/271220.png", // Icon mũi tên rẽ trái
    wordType: "noun",
    subdescription: "Ghép từ <b>왼</b> (trái) + <b>쪽</b> (phía).",
    parts: [
      {
        text: "왼",
        color: "--custom-blue",
        description: "trái",
      },
      {
        text: "쪽",
        color: "--custom-green",
        description: "phía",
      },
    ],
    examples: ["왼쪽으로 가세요. (Hãy đi về bên trái.)", "왼손 (Tay trái)."],
  },
  69: {
    text: "오른쪽",
    transcription: "oreunjjok",
    meaning: "Bên phải",
    usage: "Danh từ chỉ hướng bên phải.",
    description: "Hướng phải.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_oreunjjok.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/271/271228.png", // Icon mũi tên rẽ phải
    wordType: "noun",
    subdescription: "Ghép từ <b>오른</b> (phải) + <b>쪽</b> (phía).",
    parts: [
      {
        text: "오른",
        color: "--custom-orange",
        description: "phải",
      },
      {
        text: "쪽",
        color: "--custom-green",
        description: "phía",
      },
    ],
    examples: [
      "오른쪽을 보세요. (Hãy nhìn sang bên phải.)",
      "오른손 (Tay phải).",
    ],
  },
  70: {
    text: "빠르다",
    transcription: "ppareuda",
    meaning: "Nhanh",
    usage: "Tính từ miêu tả tốc độ di chuyển hoặc thời gian trôi qua nhanh.",
    description: "Tính từ chỉ tốc độ nhanh.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_ppareuda.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2764/2764527.png", // Icon đồng hồ chạy nhanh/thỏ
    wordType: "adjective",
    subdescription:
      "Bất quy tắc '르': Khi chia đuôi câu thân mật thành <b>빨라요 (ppallayo)</b>.",
    parts: [
      {
        text: "빠",
        color: "--custom-red",
        description: "gốc từ",
      },
      {
        text: "르",
        color: "--custom-red",
        description: "biến đổi",
      },
      {
        text: "다",
        color: "--custom-gray",
        description: "đuôi từ điển",
      },
    ],
    examples: [
      "택시가 빨라요. (Taxi nhanh.)",
      "비행기가 기차보다 빨라요. (Máy bay nhanh hơn tàu hỏa.)",
    ],
  },
  71: {
    text: "괜찮아요",
    transcription: "gwaenchanayo",
    meaning: "Không sao / Ổn",
    usage: "Dùng để trấn an người khác, hoặc từ chối lịch sự.",
    description: "Cụm từ trấn an phổ biến.",
    audioUrl:
      "https://firebasestorage.googleapis.com/.../vocab_gwaenchanayo.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/14442/14442923.png", // Icon OK hand sign
    wordType: "phrase",
    subdescription:
      "Gốc từ <b>괜찮다</b>. Bắt nguồn từ cụm '관계하지 않다' (không liên quan/không vấn đề gì).",
    parts: [
      {
        text: "괜찮",
        color: "--custom-blue",
        description: "ổn",
      },
      {
        text: "아요",
        color: "--custom-gray",
        description: "đuôi câu",
      },
    ],
    examples: [
      "저는 괜찮아요. (Tôi ổn/Tôi không sao.)",
      "늦어도 괜찮아요. (Muộn chút cũng không sao.)",
    ],
  },
  72: {
    text: "날씨",
    transcription: "nalssi",
    meaning: "Thời tiết",
    usage: "Danh từ chỉ trạng thái khí quyển.",
    description: "Từ thuần Hàn chỉ thời tiết.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_nalssi.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png", // Icon mặt trời/mây
    wordType: "noun",
    subdescription:
      "Thường hỏi: <b>오늘 날씨 어때요?</b> (Thời tiết hôm nay thế nào?)",
    parts: [
      {
        text: "날",
        color: "--custom-blue",
        description: "ngày",
      },
      {
        text: "씨",
        color: "--custom-green",
        description: "khí",
      },
    ],
    examples: [
      "날씨가 좋아요. (Thời tiết đẹp.)",
      "날씨가 흐려요. (Thời tiết âm u.)",
    ],
  },
  73: {
    text: "맑다",
    transcription: "makda",
    meaning: "Trong lành / Quang đãng",
    usage: "Tính từ miêu tả bầu trời không mây, trong xanh hoặc nước trong.",
    description: "Trời trong, không mây.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_makda.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/869/869869.png", // Icon mặt trời sáng
    wordType: "adjective",
    subdescription: "Khi chia đuôi câu thân mật: <b>맑아요 (malgayo)</b>.",
    parts: [
      {
        text: "맑",
        color: "--custom-orange",
        description: "gốc từ",
      },
      {
        text: "다",
        color: "--custom-gray",
        description: "đuôi từ điển",
      },
    ],
    examples: [
      "하늘이 맑아요. (Bầu trời trong xanh.)",
      "물이 맑아요. (Nước trong vắt.)",
    ],
  },
  74: {
    text: "비",
    transcription: "bi",
    meaning: "Mưa",
    usage: "Danh từ chỉ nước mưa.",
    description: "Hiện tượng mưa.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_bi.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1146/1146858.png", // Icon đám mây mưa
    wordType: "noun",
    subdescription: "Cụm từ phổ biến: <b>비가 오다</b> (Mưa rơi/Mưa đến).",
    parts: [
      {
        text: "비",
        color: "--custom-blue",
        description: "mưa",
      },
    ],
    examples: [
      "비가 와요. (Trời đang mưa.)",
      "우산이 있어요? (Bạn có ô không?)",
    ],
  },
  75: {
    text: "춥다",
    transcription: "chupda",
    meaning: "Lạnh",
    usage: "Dùng để miêu tả thời tiết lạnh hoặc cảm giác lạnh của cơ thể.",
    description: "Tính từ chỉ cảm giác lạnh.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_chupda.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2322/2322701.png", // Icon người run rẩy/tuyết
    wordType: "adjective",
    subdescription:
      "Bất quy tắc 'ㅂ': Chia đuôi câu thân mật là <b>추워요 (chuwoyo)</b>.",
    parts: [
      {
        text: "춥",
        color: "--custom-blue",
        description: "gốc từ",
      },
      {
        text: "다",
        color: "--custom-gray",
        description: "đuôi từ điển",
      },
    ],
    examples: ["너무 추워요. (Lạnh quá.)", "추운 날씨 (Thời tiết lạnh)."],
  },
  76: {
    text: "덥다",
    transcription: "deopda",
    meaning: "Nóng",
    usage: "Dùng để miêu tả thời tiết nóng hoặc cảm giác nóng bức.",
    description: "Tính từ chỉ cảm giác nóng.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_deopda.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/890/890347.png", // Icon người toát mồ hôi/mặt trời đỏ
    wordType: "adjective",
    subdescription:
      "Bất quy tắc 'ㅂ': Chia đuôi câu thân mật là <b>더워요 (deowoyo)</b>.",
    parts: [
      {
        text: "덥",
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
      "오늘 진짜 더워요. (Hôm nay nóng thật đấy.)",
      "더운 여름 (Mùa hè nóng bức).",
    ],
  },
  77: {
    text: "건강",
    transcription: "geongang",
    meaning: "Sức khỏe",
    usage: "Dùng để nói về tình trạng thể chất nói chung.",
    description: "Danh từ chỉ sức khỏe.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_geongang.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2966/2966486.png", // Icon nhịp tim/sức khỏe
    wordType: "noun",
    subdescription:
      "Bắt nguồn từ Hán tự <b>健康 (Kiện Khang)</b>. Tính từ: <b>건강하다</b> (Khỏe mạnh).",
    parts: [
      {
        text: "건",
        color: "--custom-blue",
        description: "kiện",
      },
      {
        text: "강",
        color: "--custom-green",
        description: "khang",
      },
    ],
    examples: [
      "건강이 최고예요. (Sức khỏe là nhất.)",
      "건강하세요. (Hãy mạnh khỏe nhé.)",
    ],
  },
  78: {
    text: "아프다",
    transcription: "apeuda",
    meaning: "Đau / Ốm",
    usage:
      "Dùng để diễn tả cảm giác đau đớn ở bộ phận cơ thể hoặc tình trạng bị bệnh.",
    description: "Tính từ chỉ sự đau ốm.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_apeuda.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2355/2355436.png", // Icon người ôm đầu/băng bó
    wordType: "adjective",
    subdescription:
      "Khi chia đuôi câu thân mật: <b>아파요 (apayo)</b> (Bất quy tắc 'ㅡ').",
    parts: [
      {
        text: "아프",
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
      "머리가 아파요. (Tôi bị đau đầu.)",
      "어디 아파요? (Bạn đau ở đâu?)",
    ],
  },
  79: {
    text: "조심하다",
    transcription: "josimhada",
    meaning: "Cẩn thận",
    usage: "Dùng để nhắc nhở hoặc cảnh báo ai đó chú ý an toàn.",
    description: "Động từ cẩn thận, chú ý.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_josimhada.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1008/1008932.png", // Icon biển báo chú ý
    wordType: "verb",
    subdescription:
      "Bắt nguồn từ Hán tự <b>操心 (Thao Tâm)</b>. Thường dùng: <b>조심하세요</b>.",
    parts: [
      {
        text: "조심",
        color: "--custom-orange",
        description: "thao tâm",
      },
      {
        text: "하다",
        color: "--custom-gray",
        description: "làm",
      },
    ],
    examples: [
      "감기 조심하세요. (Cẩn thận bị cảm nhé.)",
      "차 조심하세요. (Cẩn thận xe cộ.)",
    ],
  },
  80: {
    text: "행복",
    transcription: "haengbok",
    meaning: "Hạnh phúc",
    usage: "Danh từ chỉ trạng thái sung sướng, mãn nguyện.",
    description: "Danh từ hạnh phúc.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_haengbok.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3933/3933022.png", // Icon cầu vồng/mặt cười
    wordType: "noun",
    subdescription:
      "Bắt nguồn từ Hán tự <b>幸福 (Hạnh Phúc)</b>. Tính từ: <b>행복하다</b>.",
    parts: [
      {
        text: "행",
        color: "--custom-blue",
        description: "hạnh",
      },
      {
        text: "복",
        color: "--custom-green",
        description: "phúc",
      },
    ],
    examples: [
      "행복하게 살아요. (Sống hạnh phúc nhé.)",
      "가족은 나의 행복이에요. (Gia đình là hạnh phúc của tôi.)",
    ],
  },
  81: {
    text: "긍정적",
    transcription: "geungjeongjeok",
    meaning: "Tích cực",
    usage: "Dùng để chỉ thái độ, suy nghĩ lạc quan, mang tính xây dựng.",
    description: "Mang tính tích cực.",
    audioUrl:
      "https://firebasestorage.googleapis.com/.../vocab_geungjeongjeok.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1533/1533913.png", // Icon dấu cộng/pin đầy
    wordType: "noun",
    subdescription:
      "Bắt nguồn từ Hán tự <b>肯定的 (Khẳng Định Đích)</b>. Trạng từ: <b>긍정적으로</b>.",
    parts: [
      {
        text: "긍정",
        color: "--custom-orange",
        description: "khẳng định",
      },
      {
        text: "적",
        color: "--custom-gray",
        description: "đích (tính chất)",
      },
    ],
    examples: [
      "긍정적으로 생각하세요. (Hãy suy nghĩ tích cực lên.)",
      "그는 성격이 긍정적이에요. (Anh ấy có tính cách tích cực.)",
    ],
  },
  82: {
    text: "취미",
    transcription: "chwimi",
    meaning: "Sở thích",
    usage:
      "Dùng để hỏi hoặc nói về những hoạt động yêu thích làm trong thời gian rảnh.",
    description: "Danh từ chỉ sở thích.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_chwimi.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3079/3079165.png", // Icon bảng màu vẽ/đàn
    wordType: "noun",
    subdescription: "Bắt nguồn từ Hán tự <b>趣味 (Thú Vị)</b>.",
    parts: [
      { text: "취", color: "--custom-blue", description: "thú" },
      { text: "미", color: "--custom-green", description: "vị" },
    ],
    examples: [
      "취미가 뭐예요? (Sở thích của bạn là gì?)",
      "제 취미는 요리예요. (Sở thích của tôi là nấu ăn.)",
    ],
  },
  83: {
    text: "책",
    transcription: "chaek",
    meaning: "Sách",
    usage: "Danh từ chỉ sách vở nói chung.",
    description: "Sách.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_chaek.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3330/3330314.png", // Icon quyển sách
    wordType: "noun",
    subdescription: "Thường đi với động từ <b>읽다</b> (đọc).",
    parts: [{ text: "책", color: "--custom-orange", description: "sách" }],
    examples: ["책을 읽어요. (Tôi đọc sách.)", "한국어 책 (Sách tiếng Hàn)."],
  },
  84: {
    text: "운동",
    transcription: "undong",
    meaning: "Thể thao / Vận động",
    usage: "Dùng để chỉ các hoạt động thể dục thể thao.",
    description: "Sự vận động cơ thể.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_undong.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2964/2964514.png", // Icon tạ/người chạy
    wordType: "noun",
    subdescription:
      "Bắt nguồn từ Hán tự <b>運動 (Vận Động)</b>. Động từ: <b>운동하다</b>.",
    parts: [
      { text: "운", color: "--custom-red", description: "vận" },
      { text: "동", color: "--custom-blue", description: "động" },
    ],
    examples: [
      "매일 운동해요. (Tôi tập thể dục mỗi ngày.)",
      "운동을 좋아해요. (Tôi thích thể thao.)",
    ],
  },
  85: {
    text: "음악",
    transcription: "eumak",
    meaning: "Âm nhạc",
    usage: "Danh từ chỉ âm nhạc.",
    description: "Âm nhạc.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_eumak.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/461/461238.png", // Icon nốt nhạc
    wordType: "noun",
    subdescription:
      "Bắt nguồn từ Hán tự <b>音樂 (Âm Nhạc)</b>. Thường đi với <b>듣다</b> (nghe).",
    parts: [
      { text: "음", color: "--custom-purple", description: "âm" },
      { text: "악", color: "--custom-yellow", description: "nhạc" },
    ],
    examples: ["음악을 들어요. (Tôi nghe nhạc.)", "K-pop 음악 (Nhạc K-pop)."],
  },
  86: {
    text: "영화",
    transcription: "yeonghwa",
    meaning: "Phim điện ảnh",
    usage: "Chỉ phim chiếu rạp hoặc phim lẻ.",
    description: "Phim điện ảnh.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_yeonghwa.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2503/2503508.png", // Icon cuộn phim
    wordType: "noun",
    subdescription:
      "Bắt nguồn từ Hán tự <b>映畫 (Ánh Họa)</b>. Phim truyền hình là <b>드라마</b>.",
    parts: [
      { text: "영", color: "--custom-gray", description: "ánh" },
      { text: "화", color: "--custom-orange", description: "họa" },
    ],
    examples: ["영화를 봐요. (Tôi xem phim.)", "영화관 (Rạp chiếu phim)."],
  },
  87: {
    text: "주말",
    transcription: "jumal",
    meaning: "Cuối tuần",
    usage: "Chỉ thứ 7 và Chủ nhật.",
    description: "Thời gian nghỉ ngơi cuối tuần.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_jumal.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2693/2693507.png", // Icon lịch đỏ cuối tuần
    wordType: "noun",
    subdescription: "Bắt nguồn từ Hán tự <b>週末 (Chu Mạt)</b>.",
    parts: [
      { text: "주", color: "--custom-blue", description: "chu (tuần)" },
      { text: "말", color: "--custom-green", description: "mạt (cuối)" },
    ],
    examples: [
      "주말 잘 보내세요. (Cuối tuần vui vẻ nhé.)",
      "주말에 뭐 해요? (Cuối tuần bạn làm gì?)",
    ],
  },
  88: {
    text: "같이",
    transcription: "gachi",
    meaning: "Cùng nhau",
    usage: "Phó từ dùng để rủ rê hoặc mô tả hành động làm chung với ai đó.",
    description: "Phó từ chỉ sự cùng nhau.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_gachi.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1189/1189166.png", // Icon 2 người nắm tay
    wordType: "adverb",
    subdescription: "⚠️ Phát âm là <b>[가치] (ga-chi)</b>.",
    parts: [
      { text: "같", color: "--custom-orange", description: "giống" },
      { text: "이", color: "--custom-gray", description: "đuôi phó từ" },
    ],
    examples: [
      "같이 가요. (Cùng đi nhé.)",
      "우리 같이 밥 먹어요. (Chúng ta cùng ăn cơm đi.)",
    ],
  },
  89: {
    text: "계획",
    transcription: "gyehoek",
    meaning: "Kế hoạch",
    usage: "Dùng để nói về dự định.",
    description: "Dự định, kế hoạch.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_gyehoek.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3209/3209965.png", // Icon bản kế hoạch/giấy note
    wordType: "noun",
    subdescription: "Bắt nguồn từ Hán tự <b>計劃 (Kế Hoạch)</b>.",
    parts: [
      { text: "계", color: "--custom-purple", description: "kế" },
      { text: "획", color: "--custom-red", description: "hoạch" },
    ],
    examples: [
      "특별한 계획이 있어요? (Có kế hoạch gì đặc biệt không?)",
      "여행 계획 (Kế hoạch du lịch).",
    ],
  },
  90: {
    text: "공원",
    transcription: "gongwon",
    meaning: "Công viên",
    usage: "Nơi vui chơi giải trí công cộng.",
    description: "Công viên.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_gongwon.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2830/2830160.png", // Icon ghế đá công viên/cây
    wordType: "noun",
    subdescription: "Bắt nguồn từ Hán tự <b>公園 (Công Viên)</b>.",
    parts: [
      { text: "공", color: "--custom-blue", description: "công" },
      { text: "원", color: "--custom-green", description: "viên" },
    ],
    examples: [
      "공원에서 산책해요. (Đi dạo ở công viên.)",
      "한강 공원 (Công viên sông Hàn).",
    ],
  },
  91: {
    text: "재미있다",
    transcription: "jaemiitda",
    meaning: "Thú vị / Hay",
    usage:
      "Dùng để đánh giá nội dung của một bộ phim, cuốn sách, trò chơi... là hay, hấp dẫn.",
    description: "Tính từ chỉ sự thú vị.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_jaemiitda.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/408/408421.png", // Icon mặt cười/bỏng ngô
    wordType: "adjective",
    subdescription:
      "Ghép từ <b>재미</b> (sự thú vị) + <b>있다</b> (có). Ngược lại là <b>재미없다</b> (chán).",
    parts: [
      { text: "재미", color: "--custom-orange", description: "thú vị" },
      { text: "있다", color: "--custom-gray", description: "có" },
    ],
    examples: [
      "이 영화는 재미있어요. (Phim này hay.)",
      "한국어 공부가 재미있어요. (Học tiếng Hàn thú vị.)",
    ],
  },
  92: {
    text: "즐겁다",
    transcription: "jeulgeopda",
    meaning: "Vui vẻ / Thích thú",
    usage:
      "Dùng để diễn tả tâm trạng hân hoan, sảng khoái của bản thân khi trải nghiệm điều gì đó.",
    description: "Tính từ chỉ cảm giác vui vẻ.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_jeulgeopda.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1933/1933691.png", // Icon người nhảy múa vui vẻ
    wordType: "adjective",
    subdescription:
      "Bất quy tắc 'ㅂ': Hiện tại <b>즐거워요</b>, Quá khứ <b>즐거웠어요</b>.",
    parts: [
      { text: "즐겁", color: "--custom-blue", description: "gốc từ" },
      { text: "다", color: "--custom-gray", description: "đuôi từ điển" },
    ],
    examples: [
      "즐거운 주말 보내세요. (Chúc cuối tuần vui vẻ.)",
      "여행은 항상 즐거워요. (Du lịch lúc nào cũng vui.)",
    ],
  },
  93: {
    text: "최고",
    transcription: "choego",
    meaning: "Tuyệt nhất / Số 1",
    usage: "Dùng để khen ngợi hoặc khẳng định vị trí cao nhất.",
    description: "Danh từ chỉ mức độ cao nhất.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_choego.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1628/1628931.png", // Icon ngón tay cái
    wordType: "noun",
    subdescription: "Bắt nguồn từ Hán tự <b>最高 (Tối Cao)</b>.",
    parts: [
      { text: "최", color: "--custom-orange", description: "tối (nhất)" },
      { text: "고", color: "--custom-red", description: "cao" },
    ],
    examples: [
      "이 노래가 최고예요. (Bài hát này là nhất.)",
      "최고의 시간 (Thời gian tuyệt vời nhất).",
    ],
  },
  94: {
    text: "인생",
    transcription: "insaeng",
    meaning: "Cuộc sống / Đời người",
    usage: "Dùng để nói về cuộc đời.",
    description: "Danh từ nhân sinh.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_insaeng.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2921/2921229.png", // Icon con đường đời/cây đời
    wordType: "noun",
    subdescription: "Bắt nguồn từ Hán tự <b>人生 (Nhân Sinh)</b>.",
    parts: [
      { text: "인", color: "--custom-blue", description: "nhân" },
      { text: "생", color: "--custom-green", description: "sinh" },
    ],
    examples: [
      "인생은 아름다워요. (Cuộc đời tươi đẹp.)",
      "인생의 목표 (Mục tiêu cuộc đời).",
    ],
  },
  95: {
    text: "일",
    transcription: "il",
    meaning: "Việc / Công việc",
    usage: "Chỉ công việc làm ăn hoặc một sự việc nào đó.",
    description: "Danh từ chỉ công việc.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_il.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2082/2082103.png", // Icon cặp tài liệu
    wordType: "noun",
    subdescription: "Cũng có nghĩa là 'Ngày' hoặc số '1', tùy ngữ cảnh.",
    parts: [{ text: "일", color: "--custom-gray", description: "việc" }],
    examples: [
      "무슨 일을 하세요? (Bạn làm công việc gì?)",
      "좋아하는 일을 하세요. (Hãy làm việc mình thích.)",
    ],
  },
  96: {
    text: "문화",
    transcription: "munhwa",
    meaning: "Văn hóa",
    usage: "Dùng để nói về phong tục, tập quán, lối sống.",
    description: "Danh từ văn hóa.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_munhwa.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2041/2041164.png", // Icon mặt nạ truyền thống/quạt
    wordType: "noun",
    subdescription: "Bắt nguồn từ Hán tự <b>文化 (Văn Hóa)</b>.",
    parts: [
      {
        text: "문",
        color: "--custom-blue",
        description: "văn",
      },
      {
        text: "화",
        color: "--custom-green",
        description: "hóa",
      },
    ],
    examples: [
      "한국 문화를 배우고 싶어요. (Tôi muốn tìm hiểu văn hóa Hàn Quốc.)",
      "문화 차이 (Sự khác biệt văn hóa).",
    ],
  },
  97: {
    text: "인사",
    transcription: "insa",
    meaning: "Chào hỏi",
    usage: "Hành động chào hỏi khi gặp mặt hoặc chia tay.",
    description: "Danh từ chào hỏi.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_insa.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2645/2645962.png", // Icon hai người cúi chào
    wordType: "noun",
    subdescription:
      "Bắt nguồn từ Hán tự <b>人事 (Nhân Sự - việc người)</b>. Động từ: <b>인사하다</b>.",
    parts: [
      {
        text: "인",
        color: "--custom-orange",
        description: "nhân",
      },
      {
        text: "사",
        color: "--custom-gray",
        description: "sự",
      },
    ],
    examples: [
      "인사를 잘해요. (Chào hỏi lễ phép.)",
      "서로 인사를 나누세요. (Hãy chào hỏi nhau đi.)",
    ],
  },
  98: {
    text: "예절",
    transcription: "yejeol",
    meaning: "Phép tắc / Lễ nghi",
    usage: "Dùng để nói về các quy tắc ứng xử trong xã hội.",
    description: "Danh từ lễ nghi.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_yejeol.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3322/3322064.png", // Icon người cúi chào lịch sự
    wordType: "noun",
    subdescription: "Bắt nguồn từ Hán tự <b>禮節 (Lễ Tiết)</b>.",
    parts: [
      {
        text: "예",
        color: "--custom-blue",
        description: "lễ",
      },
      {
        text: "절",
        color: "--custom-green",
        description: "tiết",
      },
    ],
    examples: [
      "식사 예절을 지키세요. (Hãy giữ phép tắc ăn uống.)",
      "예절이 없어요. (Không có lễ độ/Vô lễ.)",
    ],
  },
  99: {
    text: "존경하다",
    transcription: "jon-gyeonghada",
    meaning: "Tôn trọng / Kính trọng",
    usage:
      "Dùng để bày tỏ sự ngưỡng mộ và kính nể đối với ai đó (thường là người lớn, thầy cô, vĩ nhân).",
    description: "Động từ tôn trọng.",
    audioUrl:
      "https://firebasestorage.googleapis.com/.../vocab_jongyeonghada.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2353/2353678.png", // Icon huy chương/người được tôn vinh
    wordType: "verb",
    subdescription: "Bắt nguồn từ Hán tự <b>尊敬 (Tôn Kính)</b>.",
    parts: [
      {
        text: "존경",
        color: "--custom-orange",
        description: "tôn kính",
      },
      {
        text: "하다",
        color: "--custom-gray",
        description: "làm",
      },
    ],
    examples: [
      "부모님을 존경해요. (Tôi kính trọng bố mẹ.)",
      "서로 존경합시다. (Chúng ta hãy tôn trọng lẫn nhau.)",
    ],
  },
  100: {
    text: "배우다",
    transcription: "baeuda",
    meaning: "Học",
    usage:
      "Dùng cho việc học tập kiến thức, kỹ năng (từ ai đó hoặc trường lớp).",
    description: "Động từ học.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_baeuda.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2436/2436874.png", // Icon học sinh/sách vở
    wordType: "verb",
    subdescription:
      "Khác với <b>공부하다</b> (nghiên cứu/tự học). 배우다 mang nghĩa 'thọ giáo', 'học hỏi'.",
    parts: [
      {
        text: "배우",
        color: "--custom-purple",
        description: "gốc từ",
      },
      {
        text: "다",
        color: "--custom-gray",
        description: "đuôi từ điển",
      },
    ],
    examples: [
      "한국어를 배우고 싶어요. (Tôi muốn học tiếng Hàn.)",
      "수영을 배워요. (Tôi học bơi.)",
    ],
  },
  101: {
    text: "음식",
    transcription: "eumsik",
    meaning: "Món ăn / Đồ ăn",
    usage: "Dùng để chỉ thực phẩm, các món ăn nói chung.",
    description: "Danh từ món ăn.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_eumsik.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1046/1046751.png", // Icon đĩa thức ăn
    wordType: "noun",
    subdescription: "Bắt nguồn từ Hán tự <b>飮食 (Ẩm Thực)</b>.",
    parts: [
      {
        text: "음",
        color: "--custom-blue",
        description: "ẩm (uống)",
      },
      {
        text: "식",
        color: "--custom-green",
        description: "thực (ăn)",
      },
    ],
    examples: [
      "한국 음식 (Món ăn Hàn Quốc).",
      "음식을 만들어요. (Tôi nấu ăn.)",
    ],
  },
  102: {
    text: "전통",
    transcription: "jeontong",
    meaning: "Truyền thống",
    usage: "Dùng để chỉ những giá trị, tập quán được lưu truyền từ xưa.",
    description: "Danh từ truyền thống.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_jeontong.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3665/3665919.png", // Icon quạt/trống truyền thống
    wordType: "noun",
    subdescription: "Bắt nguồn từ Hán tự <b>傳統 (Truyền Thống)</b>.",
    parts: [
      {
        text: "전",
        color: "--custom-orange",
        description: "truyền",
      },
      {
        text: "통",
        color: "--custom-red",
        description: "thống",
      },
    ],
    examples: [
      "전통 문화 (Văn hóa truyền thống).",
      "전통 놀이 (Trò chơi truyền thống).",
    ],
  },
  103: {
    text: "아름답다",
    transcription: "areumdapda",
    meaning: "Đẹp / Tuyệt đẹp",
    usage:
      "Dùng để miêu tả vẻ đẹp lộng lẫy, thường dùng cho phong cảnh, nghệ thuật hoặc vẻ đẹp cao quý.",
    description: "Tính từ đẹp (mức độ cao).",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_areumdapda.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/890/890122.png", // Icon bông hoa/cảnh đẹp
    wordType: "adjective",
    subdescription:
      "Bất quy tắc 'ㅂ': <b>아름다워요</b> (thân mật), <b>아름다운</b> (định ngữ).",
    parts: [
      {
        text: "아름답",
        color: "--custom-purple",
        description: "gốc từ",
      },
      {
        text: "다",
        color: "--custom-gray",
        description: "đuôi từ điển",
      },
    ],
    examples: [
      "경치가 아름다워요. (Phong cảnh tuyệt đẹp.)",
      "아름다운 이야기 (Câu chuyện đẹp).",
    ],
  },
  104: {
    text: "이해하다",
    transcription: "ihaehada",
    meaning: "Hiểu / Thấu hiểu",
    usage: "Dùng khi nắm bắt được ý nghĩa, nội dung hoặc cảm thông với ai đó.",
    description: "Động từ hiểu.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_ihaehada.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3153/3153060.png", // Icon bóng đèn bật sáng trong đầu
    wordType: "verb",
    subdescription: "Bắt nguồn từ Hán tự <b>理解 (Lý Giải)</b>.",
    parts: [
      {
        text: "이해",
        color: "--custom-blue",
        description: "lý giải",
      },
      {
        text: "하다",
        color: "--custom-gray",
        description: "làm",
      },
    ],
    examples: [
      "한국 문화를 이해하고 싶어요. (Tôi muốn hiểu văn hóa Hàn Quốc.)",
      "이해했어요. (Tôi đã hiểu rồi.)",
    ],
  },
  105: {
    text: "의미",
    transcription: "uimi",
    meaning: "Ý nghĩa",
    usage: "Dùng để nói về giá trị hoặc nội dung hàm ẩn của sự việc.",
    description: "Danh từ ý nghĩa.",
    audioUrl: "https://firebasestorage.googleapis.com/.../vocab_uimi.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1754/1754260.png", // Icon cuốn từ điển/dấu hỏi
    wordType: "noun",
    subdescription: "Bắt nguồn từ Hán tự <b>意味 (Ý Vị)</b>.",
    parts: [
      {
        text: "의",
        color: "--custom-orange",
        description: "ý",
      },
      {
        text: "미",
        color: "--custom-green",
        description: "vị",
      },
    ],
    examples: [
      "어떤 의미가 있어요? (Có ý nghĩa gì vậy?)",
      "큰 의미 (Ý nghĩa to lớn).",
    ],
  },
  106: {
    text: "생각하다",
    transcription: "saenggakhada",
    meaning: "Nghĩ / Suy nghĩ",
    usage: "Động từ chỉ hoạt động tư duy hoặc đưa ra quan điểm.",
    description: "Động từ suy nghĩ.",
    audioUrl:
      "https://firebasestorage.googleapis.com/.../vocab_saenggakhada.mp3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2906/2906308.png", // Icon người đang suy nghĩ
    wordType: "verb",
    subdescription:
      "Thường dùng trong cấu trúc: <b>-고 생각해요</b> (Tôi nghĩ rằng...).",
    parts: [
      {
        text: "생각",
        color: "--custom-purple",
        description: "suy nghĩ",
      },
      {
        text: "하다",
        color: "--custom-gray",
        description: "làm",
      },
    ],
    examples: [
      "좋다고 생각해요. (Tôi nghĩ là tốt.)",
      "긍정적으로 생각하세요. (Hãy suy nghĩ tích cực.)",
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
