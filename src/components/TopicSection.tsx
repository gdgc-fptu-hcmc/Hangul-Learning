import TopicTitle from "./TopicTitle";
import { learningCourses, LearningCourse } from "@/data";

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
   * Will be converted to zero-based indexes to look up learningCourses.
   */
  picks: number[];
  className?: string;
}

export default function TopicSection({ picks, className = "" }: TopicSectionProps) {
  return (
    <div className={`flex flex-col ${className}`}>

    </div >
  );
}
