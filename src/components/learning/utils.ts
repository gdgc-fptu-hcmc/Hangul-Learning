import { LessonStep } from './types';
import { getLessonStatusStyles } from './lessonStatus';

export function getLessonStatusLabel(status: LessonStep['status']) {
  switch (status) {
    case 'completed':
      return 'Đã hoàn thành';
    case 'available':
      return 'Sẵn sàng';
    case 'locked':
      return 'Chưa mở khóa';
    case 'final':
      return 'Bài cuối';
    default:
      return '';
  }
}

export function getLessonChipStyles(lesson: LessonStep) {
  return lesson.highlight ? 'border-amber-400 bg-amber-100 text-amber-700' : getLessonStatusStyles(lesson.status);
}
