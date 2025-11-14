import MiniGameWrapper from "@/components/minigame/layout/MiniGameWrapper";
import { getMiniGameContent } from "@/data";
import { useParams } from "react-router-dom";

const MiniGamePage = () => {
  const { courseId, topicId, lessonId } = useParams<{
    courseId: string;
    topicId: string;
    lessonId: string;
  }>();

  const gameContent = getMiniGameContent(
    Number(courseId),
    Number(topicId),
    Number(lessonId)
  );

  console.log("gameContent:", gameContent);

  return (
    <MiniGameWrapper currentQuestion={3} totalQuestions={10}></MiniGameWrapper>
  );
};

export default MiniGamePage;
