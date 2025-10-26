import { LessonStep } from "../data";

interface LessonRowProps {
  index: number;
  lesson: LessonStep;
  styles: string;
  statusLabel: string;
}

export default function LessonRow({
  index,
  lesson,
  styles,
  statusLabel,
}: LessonRowProps) {
  return (
    <div className="flex items-center gap-6">
      <div
        className={`flex h-12 w-12 flex-none items-center justify-center rounded-full border-4 text-lg font-black ${styles}`}
      >
        {lesson.status === "final" ? (
          <span role="img" aria-label="crown">
            👑
          </span>
        ) : (
          index
        )}
      </div>

      <div className="flex flex-1 items-start justify-between gap-4 rounded-xl bg-neutral-50 px-4 py-3 md:px-6">
        <div>
          <p className="text-sm font-bold text-gray-900 md:text-base xl:text-lg">
            {lesson.title}
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-400">
            {statusLabel}
          </p>
        </div>
        <span className="text-xs font-semibold text-gray-400">15 phút</span>
      </div>
    </div>
  );
}
