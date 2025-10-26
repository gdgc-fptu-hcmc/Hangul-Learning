export interface LessonStep {
  id: number;
  title: string;
  targets: string[] | [];
  status: "available" | "completed" | "locked" | "final";
  highlight?: boolean;
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
}
