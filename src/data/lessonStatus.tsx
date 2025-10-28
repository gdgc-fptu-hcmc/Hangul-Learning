import { LessonStep } from "./types.tsx";

export function getLessonStatusStyles(status: LessonStep["status"]) {
  switch (status) {
    case "completed":
      return "border-green-500 text-green-600 bg-green-50";
    case "available":
      return "border-amber-400 text-amber-700";
    case "locked":
      return "border-gray-300 text-gray-400 bg-gray-100";
    case "final":
      return "border-purple-500 text-purple-600 bg-purple-50";
    default:
      return "border-gray-300 text-gray-400 bg-gray-100";
  }
}
