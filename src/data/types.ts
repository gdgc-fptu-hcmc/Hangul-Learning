export interface LessonStep {
  id: string;
  title: string;
  status: 'available' | 'completed' | 'locked' | 'final';
  highlight?: boolean;
}

export interface LearningTopic {
  id: string;
  number: number;
  title: string;
  accent: string;
  barColor: string;
  cta?: {
    label: string;
    tone: 'neutral' | 'accent';
  };
  lessons: LessonStep[];
}
