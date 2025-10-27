export interface LessonStep {
  id: number;
  title: string;
  targets: string[] | [];
  status: "available" | "completed" | "locked" | "final";
  highlight?: boolean;
  vnDialogue?: Dialogue; // Vietnamese dialogue box
  koDialogue?: Dialogue; // Korean dialogue box
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
}

// Các thành phần bài học
export interface Dialogue {
  hasSpeakerBox: boolean | false; // box ấn vào để đọc lên line hội thoại
  contents: DialogueContent[];
  mainRole?: string | ""; // vai chinh cua hoi thoai, neu co thi hien thi o ben phai, khong thi ben trai
}

export interface DialogueContent {
  role: string | ""; // giao vien, hoc sinh, ... hoac ko co role hoac la A/B
  lines: DialogueLine[];
}

export interface DialogueLine {
  text: string | "";
  audioUrl?: string;
}
