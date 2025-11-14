import React from "react";
import TopicTitle from "./TopicTitle";
import type { LearningTopic } from "@/data";

type TopicSectionProps = {
  learningTopics?: LearningTopic[];
  className?: string;
};

const TopicSection: React.FC<TopicSectionProps> = ({
  learningTopics = [],
  className = "",
}) => {
  if (!learningTopics.length) return null;

  return (
    <section className={`w-full flex justify-center ${className}`}>
      <div className="w-[70vw] flex flex-col gap-12">
        {learningTopics.map((topic, index) => (
          <div key={topic.id} className="flex flex-col gap-4">
            {/* TopicTitle Component */}
            <TopicTitle
              topicNumber={index + 1}
              title={topic.title}
              accent={topic.accent}
              barColor={topic.barColor}
            />

            {/* TopicContent Frame */}
            <div
              className="
                bg-white
                rounded-[10px]
                border-[4px]
                border-[#D9D9D9]
                p-6
                w-full
                min-h-[260px]
                relative
              "
            >
              {/* Placeholder until roadmap graphics are finished */}
              <p className="text-gray-600 text-center opacity-70">
                (Roadmap UI goes here)
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopicSection;
