import TopicTitle from "./TopicTitle";
import { learningTopics, LearningTopic } from "@/data";

type Variant = 'yellow' | 'green' | 'purple';

// Map barColor class from data.ts to our TopicTitle variants
const barToVariant: Record<string, Variant> = {
  "bg-amber-400": "yellow",
  "bg-lime-400": "green",
  "bg-indigo-400": "purple",
};

interface TopicSectionProps {
  /**
   * 1-based topic selection, e.g. [1,2,3]
   * Will be converted to zero-based indexes to look up learningTopics.
   */
  picks: number[];
  className?: string;
}

export default function TopicSection({ picks, className = "" }: TopicSectionProps) {
  const topicsToShow: LearningTopic[] = (picks || [])
    .map((t) => t - 1) // to zero-based index
    .filter((idx) => Number.isInteger(idx) && idx >= 0 && idx < learningTopics.length)
    // turn the indexes into LearningTopic objects
    .map((idx) => learningTopics[idx]);

  return (
    <div className={`flex flex-col ${className}`}>
      {topicsToShow.map((topic) => {
        const variant = barToVariant[topic.barColor];
        return (
          <>
            <TopicTitle
              topicNumber={topic.number}
              title={topic.title}
              variant={variant}
              sticky={false}
            />

            {/* actual roadmap section */}
            <div className="mt-6 space-y-4">
              <p>Placeholder</p>
            </div>
          </>
        );
      })}
    </div>
  );
}
