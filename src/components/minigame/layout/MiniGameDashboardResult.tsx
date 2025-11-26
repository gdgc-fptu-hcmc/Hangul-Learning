import React from "react";
import ProgressBar from "@/shared/common/ProgressBar";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import { SlReload } from "react-icons/sl";

interface MiniGameDashboardResultProps {
  correctAnswers?: number;
  totalQuestions?: number;
  onGoBack?: () => void;
}

export default function MiniGameDashboardResult({
  correctAnswers = 0,
  totalQuestions = 0,
  onGoBack = () => {},
}: MiniGameDashboardResultProps) {
  const percent =
    totalQuestions > 0
      ? Math.round((correctAnswers / totalQuestions) * 100)
      : 0;

  const getMessage = (p: number) => {
    if (p === 100) return "Tuyệt vời — bạn làm rất xuất sắc!";
    if (p >= 75) return "Rất tốt — gần hoàn hảo!";
    if (p >= 50) return "Ổn — cố gắng hơn lần sau nhé!";
    return "Chưa ổn lắm — luyện thêm nhé!";
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8"
      style={{ background: "white" }}
    >
      <div
        className="w-full max-w-4xl rounded-2xl shadow-md border"
        style={{ background: "#fff", borderColor: "rgba(31,31,31,0.06)" }}
      >
        <div className="p-8">
          <div className="flex items-center gap-6">
            <div className="flex-1">
              <h2
                className="text-2xl md:text-3xl font-semibold"
                style={{ color: "var(--custom-gray)" }}
              >
                Kết quả Mini Game
              </h2>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-6">
              <div className="text-base md:text-lg text-[var(--custom-orange)]">
                Đúng
              </div>
              <div className="flex-1">
                {/* ProgressBar should be responsive; ensure it accepts bigger sizes or wraps */}
                <ProgressBar current={correctAnswers} total={totalQuestions} />
              </div>
              <div className="text-base md:text-lg font-semibold text-[var(--custom-orange)]">
                {correctAnswers}/{totalQuestions} Câu
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="p-6 rounded-lg"
                style={{
                  background: "var(--custom-green-light)",
                  border: "1px solid rgba(31,31,31,0.04)",
                }}
              >
                <div
                  className="text-sm md:text-base font-bold"
                  style={{ color: "var(--custom-purple)" }}
                >
                  Tỷ lệ chính xác:
                </div>
                <div className="mt-2 flex-1 text-4xl md:text-6xl font-bold text-[var(--custom-orange)]">
                  {percent}%
                </div>
                <p
                  className="mt-2 text-base md:text-lg"
                  style={{ color: "var(--custom-purple)" }}
                >
                  {getMessage(percent)}
                </p>
              </div>

              <div
                className="p-6 rounded-lg"
                style={{
                  background: "#fff8f0",
                  border: "1px solid rgba(31,31,31,0.04)",
                }}
              >
                <div
                  className="text-sm md:text-base font-bold"
                  style={{ color: "var(--custom-purple)" }}
                >
                  Mẹo
                </div>
                <ul
                  className="mt-3 text-base md:text-lg list-disc list-inside"
                  style={{ color: "var(--custom-gray)" }}
                >
                  <li>Ôn lại các câu đã làm sai.</li>
                  <li>Luyện với chế độ lặp để nhớ lâu hơn.</li>
                  <li>Nhấn "Chơi lại" để cải thiện điểm số.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex sm:flex-row justify-between items-center gap-4">
              <button
                onClick={onGoBack}
                className="flex items-center group rounded-2xl gap-4 px-4 py-3 text-white text-lg font-semibold"
                style={{
                  borderColor: "var(--light-pink)",
                  color: "var(--custom-purple)",
                  background: "transparent",
                }}
              >
                <GrFormNextLink className="inline-block text-[24px] translate-x-0 group-hover:translate-x-[-6px] transition-transform rotate-180" />
                Quay về bài học
              </button>

              <button
                onClick={() => window.location.reload()}
                className="flex items-center rounded-2xl gap-4 px-3 bg-[var(--custom-green)] py-2 font-semibold text-white"
              >
                Chơi lại
                <SlReload className="inline-block text-[22px] rotate transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
