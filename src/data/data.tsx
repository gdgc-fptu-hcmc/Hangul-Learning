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
          },
          {
            id: 2,
            title: "Xưng hô và giới thiệu",
            icon: <BsPersonBoundingBox />,
            lessonLink: "/courses/1/topics/1/lessons/2",
            miniGameLink: "/courses/1/topics/1/lessons/2/minigame",
            status: "completed",
            targets: [],
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
            targets: [],
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
            id: 4,
            title: "Động lực và câu khích lệ",
            icon: <FaHandshakeSimple />,
            lessonLink: "/courses/1/topics/1/lessons/4",
            miniGameLink: "/courses/1/topics/1/lessons/4/minigame",
            status: "locked",
            targets: [],
          },
          {
            id: 5,
            title: "Ôn tập",
            icon: <FaStar />,
            lessonLink: "/courses/1/topics/1/lessons/5",
            miniGameLink: "/courses/1/topics/1/lessons/5/minigame",
            status: "final",
            targets: [],
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
