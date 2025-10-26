import { LearningCourse } from "./types";

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
          },
          {
            id: 2,
            title: "Xưng hô và giới thiệu",
            status: "completed",
            targets: [],
          },
          {
            id: 3,
            title: "Giới thiệu tên và sở thích",
            status: "available",
            targets: [],
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
