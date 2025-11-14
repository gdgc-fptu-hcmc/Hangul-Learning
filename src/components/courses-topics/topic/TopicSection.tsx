import React from "react";
import TopicTitle from "./TopicTitle";
import type { LearningTopic } from "@/data";
import LessonNodeOnRoadmap from "./LessonNodeOnRoadmap";

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
      <div className="w-full flex flex-col gap-12">
        {learningTopics.map((topic, index) => (
          <div key={topic.id} className="flex flex-col gap-4">
            {/* TopicTitle Component */}
            <TopicTitle
              topicNumber={index + 1}
              title={topic.title}
              topicTitleClassName={topic.topicTitleClassName}
            />

            {/* TopicContent Frame */}
            <div
              className="
                relative
                bg-white
                rounded-[10px]
                border-[4px]
                border-[#D9D9D9]
                p-6
                w-full
                min-h-[260px]
                relative
                py-20
                pb-[30vh]
              "
            >
              {/* road map dashed line */}
              <div className="max-w-xl h-full mx-auto  grid grid-cols-2 auto-rows-[150px]">
                <div className="relative border-t-4 border-l-4 border-dashed border-gray-300 rounded-tl-[100%]">
                  <LessonNodeOnRoadmap
                    icon={topic.lessons[0].icon}
                    title={topic.lessons[0].title}
                    lessonLink={topic.lessons[0].lessonLink}
                    miniGameLink={topic.lessons[0].miniGameLink}
                    mainColor={topic.mainColor}
                    className="absolute left-full -translate-x-1/2 top-0 -translate-y-1/2 z-[999]"
                  />
                </div>
                <div className=""></div>
                <div className="relative border-b-4 border-l-4 border-dashed border-gray-300 rounded-bl-[100%]">
                  <LessonNodeOnRoadmap
                    icon={topic.lessons[1].icon}
                    title={topic.lessons[1].title}
                    lessonLink={topic.lessons[1].lessonLink}
                    miniGameLink={topic.lessons[1].miniGameLink}
                    mainColor={topic.mainColor}
                    className="absolute left-0 -translate-x-1/2 top-0 -translate-y-1/2  z-[998]"
                  />
                </div>
                <div className=""></div>
                <div className=""></div>
                <div className="relative border-t-4 border-r-4 border-dashed border-gray-300  rounded-tr-[100%]">
                  <LessonNodeOnRoadmap
                    icon={topic.lessons[2].icon}
                    title={topic.lessons[2].title}
                    lessonLink={topic.lessons[2].lessonLink}
                    miniGameLink={topic.lessons[2].miniGameLink}
                    mainColor={topic.mainColor}
                    className="absolute left-0 -translate-x-1/2 top-0 -translate-y-1/2 z-[997]"
                  />
                </div>
                <div className=""></div>
                <div className="relative border-b-4 border-r-4 border-dashed border-gray-300  rounded-br-[100%]">
                  <LessonNodeOnRoadmap
                    icon={topic.lessons[3].icon}
                    title={topic.lessons[3].title}
                    lessonLink={topic.lessons[3].lessonLink}
                    miniGameLink={topic.lessons[3].miniGameLink}
                    mainColor={topic.mainColor}
                    className="absolute left-full -translate-x-1/2  top-0 -translate-y-1/2 z-[996]"
                  />
                  <LessonNodeOnRoadmap
                    icon={topic.lessons[4].icon}
                    title={topic.lessons[4].title}
                    lessonLink={topic.lessons[4].lessonLink}
                    miniGameLink={topic.lessons[4].miniGameLink}
                    mainColor={topic.mainColor}
                    className="absolute right-0 -translate-x-1/2  bottom-0 translate-y-1/2 z-[995]"
                  />
                </div>
              </div>
              {/* anh minh hoa */}
              {topic.images && topic.images.length > 0 && (
                <img
                  src={topic.images[0]}
                  className="absolute top-[50px] right-[50px] max-w-[350px]"
                ></img>
              )}
              {topic.images && topic.images.length > 1 && (
                <img
                  src={topic.images[1]}
                  className="absolute bottom-[50px] left-[50px] max-w-[350px]"
                ></img>
              )}
              {topic.images && topic.images.length > 2 && (
                <img
                  src={topic.images[2]}
                  className="absolute bottom-[50px] right-[50px] max-w-[350px]"
                ></img>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopicSection;
