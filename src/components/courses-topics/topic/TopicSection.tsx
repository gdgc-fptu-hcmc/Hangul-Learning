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
    <section className={`w-full flex justify-center px-4 sm:px-6 ${className}`}>
      <div className="w-full max-w-5xl flex flex-col gap-12">
        {learningTopics.map((topic) => (
          <div key={topic.id} className="flex flex-col gap-4">
            {/* TopicTitle Component */}
            <TopicTitle
              topicNumber={topic.id}
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
                w-full
                min-h-[260px]
                p-4 sm:p-6
                pt-10 sm:pt-12 md:pt-16 lg:pt-20
                pb-16 md:pb-[30vh]
              "
            >
              {/* Road map: mobile = simple list, md+ = curved dashed layout */}
              {topic.lessons && topic.lessons.length > 0 && (
                <>
                  {/* Mobile / small: vertical list */}
                  <div className="flex flex-col gap-[100px] py-10 md:hidden">
                    {topic.lessons.map((lesson, idx) => (
                      <div
                        key={lesson.title + idx}
                        className="relative flex justify-center"
                      >
                        <LessonNodeOnRoadmap
                          icon={lesson.icon}
                          title={lesson.title}
                          lessonLink={lesson.lessonLink}
                          miniGameLink={lesson.miniGameLink}
                          mainColor={topic.mainColor}
                          className="relative"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Desktop: original roadmap layout */}
                  <div className="hidden md:grid max-w-xl h-full mx-auto grid-cols-2 auto-rows-[150px]">
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
                    <div />
                    <div className="relative border-b-4 border-l-4 border-dashed border-gray-300 rounded-bl-[100%]">
                      <LessonNodeOnRoadmap
                        icon={topic.lessons[1].icon}
                        title={topic.lessons[1].title}
                        lessonLink={topic.lessons[1].lessonLink}
                        miniGameLink={topic.lessons[1].miniGameLink}
                        mainColor={topic.mainColor}
                        className="absolute left-0 -translate-x-1/2 top-0 -translate-y-1/2 z-[998]"
                      />
                    </div>
                    <div />
                    <div />
                    <div className="relative border-t-4 border-r-4 border-dashed border-gray-300 rounded-tr-[100%]">
                      <LessonNodeOnRoadmap
                        icon={topic.lessons[2].icon}
                        title={topic.lessons[2].title}
                        lessonLink={topic.lessons[2].lessonLink}
                        miniGameLink={topic.lessons[2].miniGameLink}
                        mainColor={topic.mainColor}
                        className="absolute left-0 -translate-x-1/2 top-0 -translate-y-1/2 z-[997]"
                      />
                    </div>
                    <div className="relative">
                      <LessonNodeOnRoadmap
                        icon={topic.lessons[4].icon}
                        title={topic.lessons[4].title}
                        lessonLink={topic.lessons[4].lessonLink}
                        miniGameLink={topic.lessons[4].miniGameLink}
                        mainColor={topic.mainColor}
                        className="absolute left-full -translate-x-1/2 top-full -translate-y-1/2  z-[995]"
                      />
                    </div>
                    <div className="relative border-b-4 border-r-4 border-dashed border-gray-300 rounded-br-[100%]">
                      <LessonNodeOnRoadmap
                        icon={topic.lessons[3].icon}
                        title={topic.lessons[3].title}
                        lessonLink={topic.lessons[3].lessonLink}
                        miniGameLink={topic.lessons[3].miniGameLink}
                        mainColor={topic.mainColor}
                        className="absolute left-full -translate-x-1/2 top-0 -translate-y-1/2 z-[996]"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Images – hidden on small so they don't overflow */}
              {topic.images && topic.images.length > 0 && (
                <img
                  src={topic.images[0]}
                  className="
                    hidden md:block
                    absolute
                    top-4 right-4
                    max-w-[180px]
                    lg:top-[50px] lg:right-[50px] lg:max-w-[260px]
                  "
                  alt=""
                />
              )}
              {topic.images && topic.images.length > 1 && (
                <img
                  src={topic.images[1]}
                  className="
                    hidden lg:block
                    absolute
                    bottom-[40px] left-[40px]
                    max-w-[220px]
                  "
                  alt=""
                />
              )}
              {topic.images && topic.images.length > 2 && (
                <img
                  src={topic.images[2]}
                  className="
                    hidden lg:block
                    absolute
                    bottom-[40px] right-[40px]
                    max-w-[220px]
                  "
                  alt=""
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopicSection;
