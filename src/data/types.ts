import React from "react";

export interface LessonStep {
  id: number;
  title: string;
  icon?: React.ReactNode; // this will be react icon or something else
  lessonLink?: string; // link to the lesson page
  miniGameLink?: string; // link to the minigame page
  targets: string[] | [];
  status: "available" | "completed" | "locked" | "final";
  highlight?: boolean;
  vnDialogue?: Dialogue; // Vietnamese dialogue box
  koDialogue?: Dialogue; // Korean dialogue box
  culturalStory?: CulturalStory; // Cultural story section
  funQuiz?: FunQuiz; // Fun quiz section
  vocabIds?: number[]; // list of vocab ids introduced in this lesson
  grammar?: React.ReactNode; // grammar content in HTML format
  practiceBox?: PracticeBox; // practice box section
  minigameIds?: number[]; // list of minigame ids associated with this lesson
  minigameQuantity?: number; // số lượng minigame trong lesson
}

export interface LearningTopic {
  id: number;
  title: string;
  topicTitleClassName: string;
  mainColor: string;
  images?: string[];
  cta?: {
    label: string;
    tone: "neutral" | "topicTitleClassName";
  };
  lessons: LessonStep[];
}

// this is used for a node on the dashed line of road map
export interface LessonNode {}

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
  practiceBox?: PracticeBox; // practice box section,
  minigameIds?: number[]; // list of minigame ids associated with this lesson
  minigameQuantity?: number; // số lượng minigame trong lesson
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

// Phần practice box
export interface PracticeBox {
  questions: (
    | MultipleChoicePractice
    | FillInBlankPractice
    | DropDownPractice
  )[];
}

export interface MultipleChoicePractice {
  questionType: "multipleChoice";
  question: string | "";
  options: string[] | [];
  correctAnswerIndex: number | 0; // count from 0
  explanation?: string | "";
}

export interface FillInBlankPractice {
  questionType: "fillInBlank";
  question: string | ""; // insert string <<blank>> where the dropdown shoudl be at
  correctAnswer: string;
  explanation?: string;
}

export interface DropDownPractice {
  questionType: "dropDown";
  question: string | ""; // insert string <<dropdown>> where the dropdown shoudl be at
  options: string[] | [];
  correctAnswerIndex: number | 0; // count from 0
  explanation?: string | "";
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

// THƯ VIỆN MINIGAMES --------------------------
export interface MiniGame {
  title: string;
  type: "multipleChoice" | "phraseOrder" | "matching";
  content: MiniGameMc | MiniGamePhraseOrder | MiniGameMatching;
}

// multiple choice minigame
export interface MiniGameMc {
  displayType: 1 | 2 | 3 | 4; // 4 kiểu render khác nhau
  question?: MiniGameQuestionPhrase;
  options: MiniGameMcOption[];
  correctValue: string; // lấy từ value của đáp án đúng
}

export interface MiniGameMcOption {
  value: string;
  text: TextDisplay;
  image?: string;
}

// phrase order minigame
export interface MiniGamePhraseOrder {
  displayType: 1 | 2 | 3; // 3 kiểu render khác nhau
  question: MiniGameQuestionPhrase;
  texts: TextDisplay[]; // sẽ được random lúc render + có thể dư element
  rightOrder: number[]; // mảng các index của texts theo thứ tự đúng (đếm từ 0)
}

// matching minigame
export interface MiniGameMatching {
  displayType: 1 | 2; // 2 kiểu render khác nhau
  firstPhraseList: TextDisplay[]; // danh sách các phần ở cột bên trái
  secondPhraseList: TextDisplay[]; // danh sách các phần ở cột bên phải
  // sẽ được random khi render
  // thứ tự trên cũng là thứ tự cặp cần được nối đúng
}

// COMMON: phần hiển thị từ vựng, cụm từ hoặc mệnh đề... trong minigame
// có thể dùng chung cho minigame loại 1, loại 2, loại 3 (MC và Order, Matching)
export interface MiniGameQuestionPhrase {
  // phần hiển thị từ vựng câu hỏi, ảnh minh họa, audio nếu có
  text?: TextDisplay;
  audio?: string;
  image?: string;
}
export interface TextDisplay {
  // phần hiển thị văn bản chính và phụ (phụ có thể là romanji phiên âm hoặc mục đích khác)
  main: string;
  sub?: string;
}
export interface MiniGameContent {
  courseId: number;
  topicId: number;
  lessonId: number;
  quantity?: number;
  contents: MiniGame[];
}
