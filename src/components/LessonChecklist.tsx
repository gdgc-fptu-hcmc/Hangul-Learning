interface LessonChecklistProps {
  items: Array<{ id: string; state: 'done' | 'current' | 'todo' }>;
}

const styles = {
  done: 'border-emerald-500 bg-emerald-50 text-emerald-600',
  current: 'border-amber-400 bg-amber-50 text-amber-600',
  todo: 'border-gray-200 bg-neutral-100 text-gray-400',
} as const;

const symbols = {
  done: '✓',
  current: '•',
  todo: '–',
} as const;

export default function LessonChecklist({ items }: LessonChecklistProps) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
      <h3 className="text-lg font-bold text-gray-900">Danh sách bài học</h3>
      <div className="mt-4 grid grid-cols-5 gap-3">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Bài học ${item.id} trạng thái ${item.state}`}
            className={`flex h-8 w-8 items-center justify-center rounded-lg border text-xs font-semibold transition ${styles[item.state]}`}
          >
            {symbols[item.state]}
          </button>
        ))}
      </div>
    </section>
  );
}
