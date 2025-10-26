import { LearningTopic } from './types';

export const learningTopics: LearningTopic[] = [
  {
    id: 'topic-1',
    number: 1,
    title: 'Làm quen & Giới thiệu bản thân',
    accent: 'from-amber-200 to-amber-50 text-amber-700',
    barColor: 'bg-amber-400',
    cta: { label: 'Tiếp tục', tone: 'neutral' },
    lessons: [
      { id: 't1-l1', title: 'Chào hỏi cơ bản', status: 'available', highlight: true },
      { id: 't1-l2', title: 'Xưng hô và giới thiệu', status: 'completed' },
      { id: 't1-l3', title: 'Giới thiệu tên và sở thích', status: 'available' },
      { id: 't1-l4', title: 'Động lực và câu khích lệ', status: 'locked' },
      { id: 't1-review', title: 'Ôn tập', status: 'final' },
    ],
  },
  {
    id: 'topic-2',
    number: 2,
    title: 'Gia đình & Bạn bè',
    accent: 'from-lime-200 to-lime-50 text-lime-800',
    barColor: 'bg-lime-400',
    cta: { label: 'Học vượt?', tone: 'neutral' },
    lessons: [
      { id: 't2-l1', title: 'Giới thiệu gia đình', status: 'locked' },
      { id: 't2-l2', title: 'Từ vựng họ hàng', status: 'locked' },
      { id: 't2-l3', title: 'Trò chuyện hằng ngày', status: 'locked' },
      { id: 't2-l4', title: 'Kết nối bạn bè', status: 'locked' },
      { id: 't2-review', title: 'Bài cuối', status: 'final' },
    ],
  },
  {
    id: 'topic-3',
    number: 3,
    title: 'Số đếm & Thời gian',
    accent: 'from-indigo-200 to-indigo-50 text-indigo-800',
    barColor: 'bg-indigo-400',
    cta: { label: 'Học vượt?', tone: 'accent' },
    lessons: [
      { id: 't3-l1', title: 'Số đếm cơ bản', status: 'locked' },
      { id: 't3-l2', title: 'Đếm giờ & phút', status: 'locked' },
      { id: 't3-l3', title: 'Lịch hằng ngày', status: 'locked' },
      { id: 't3-l4', title: 'Lập kế hoạch', status: 'locked' },
      { id: 't3-review', title: 'Bài cuối', status: 'final' },
    ],
  },
];
