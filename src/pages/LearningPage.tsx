import ProgressSection from "../components/ProgressSection";
import StreakSection from "../components/StreakSection";

export default function LearningPage() {
  return (
    <div className="md:w-[95vw] mx-auto my-8 flex flex-col gap-8">
      {/* Progress & Streak Sections */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <ProgressSection />
        <StreakSection />
      </div>
    </div>
  );
}
