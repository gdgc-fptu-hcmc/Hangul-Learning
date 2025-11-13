import React from "react";
import { useParams } from "react-router-dom";

const MiniGamePage = () => {
  const { courseId, topicId, lessonId } = useParams<{
    courseId: string;
    topicId: string;
    lessonId: string;
  }>();

  const gameContent = `MiniGame for Course ${courseId}, Topic ${topicId}, Lesson ${lessonId}`;
  console.log("gameContent:", gameContent);

  return <div className="bg-red-400">MiniGamePage</div>;
};

export default MiniGamePage;
