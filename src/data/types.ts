export interface LessonStep {
  id: number;
  title: string;
  targets: string[] | [];
  status: "available" | "completed" | "locked" | "final";
  highlight?: boolean;
  vnDialogue?: Dialogue; // Vietnamese dialogue box
  koDialogue?: Dialogue; // Korean dialogue box
  culturalStory?: CulturalStory; // Cultural story section
  funQuiz?: FunQuiz; // Fun quiz section
  vocabIds?: number[]; // list of vocab ids introduced in this lesson
  grammar?: React.ReactNode; // grammar content in HTML format
}

export interface LearningTopic {
  id: number;
  title: string;
  accent: string;
  barColor: string;
  cta?: {
    label: string;
    tone: "neutral" | "accent";
  };
  lessons: LessonStep[];
}

export interface LearningCourse {
  id: number;
  level: string;
  title: string;
  topics: LearningTopic[];
}

export interface LessonContent {
  courseId: number | 0;
  courseLevel?: string | "";
  courseTitle?: string | "";
  topicId: number | 0;
  topicTitle?: string | "";
  lessonId: number | 0;
  lessonTitle?: string | "";
  lessonTargets?: string[] | [];
  vnDialogue?: Dialogue; // Vietnamese dialogue box
  koDialogue?: Dialogue; // Korean dialogue box
  culturalStory?: CulturalStory; // Cultural story section
  funQuiz?: FunQuiz; // Fun quiz section
  vocabs?: Vocab[]; // list of vocab ids introduced in this lesson
  grammar?: React.ReactNode; // grammar content in HTML format
}

// Các thành phần bài học--------------------------
// PHẦN HỘI THOẠI
export interface Dialogue {
  hasSpeakerBox: boolean | false; // box ấn vào để đọc lên line hội thoại
  contents: DialogueContent[];
  mainRole?: string | ""; // vai chinh cua hoi thoai, neu co thi hien thi o ben phai, khong thi ben trai
}

export interface DialogueContent {
  role: string | ""; // giao vien, hoc sinh, ... hoac ko co role hoac la A/B
  avatarUrl?: string | "";
  lines: DialogueLine[];
}

export interface DialogueLine {
  text: string | "";
  audioUrl?: string;
}

// PHẦN CÂU CHUYỆN VĂN HÓA
export interface CulturalStory {
  title: string | "";
  content: string | ""; // HTML content
}

export interface FunQuiz {
  question: string | "";
  options: string[] | [];
  correctAnswerIndex: number | 0; // count from 0
  explanation: string | "";
}

// THƯ VIỆN TỪ VỰNG --------------------------
export interface Vocab {
  text: string;
  transcription: string; // phiên âm roman
  meaning: string; // nghĩa súc tích nhất
  usage?: string; // mô tả chi tiết hơn về casch dùng
  description?: string; // mô tả thêm về từ vựng viết dưới dạng html
  audioUrl?: string; // audio pronunciation
  imgUrl?: string; // hình minh họa
  wordType: string; // n for danh tu, v for động từ, a for tính từ, adverb for trạng từ, phrase for cụm từ, đuôi lịch sự, phó từ ...
  subdescription?: string; // additional info like câu chuyện văn hóa, funfact, tip, trick viết dưới dạng html
  parts?: VocabPart[]; // phân tích từ vựng thành các phần nhỏ hơn
  examples?: string[]; // ví dụ sử dụng từ này trong câu
}

export interface VocabPart {
  text: string; // tên loại từ vựng
  color: string;
  description: string; // mô tả
}
