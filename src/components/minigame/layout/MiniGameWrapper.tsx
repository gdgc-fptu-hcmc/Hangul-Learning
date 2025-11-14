import React from "react";
import ProgressBar from "../../../shared/common/ProgressBar";
import { IoClose } from "react-icons/io5";

interface MiniGameWrapperProps {
  children: React.ReactNode;
  currentQuestion?: number;
  totalQuestions?: number;
  answer: React.ReactNode;
  onSkip: () => void;
  onCheck: () => void;
  onNext: () => void;
  wrapperState?: "waiting" | "correct" | "incorrect"; // 'waiting' | 'correct' | 'incorrect'
}

const MiniGameWrapper: React.FC<MiniGameWrapperProps> = ({
  children,
  currentQuestion = 1,
  totalQuestions = 100,
  answer,
  onSkip,
  onCheck,
  onNext,
  wrapperState = "waiting", // 'waiting' | 'correct' | 'incorrect'
}) => {
  return (
    <div className="relative min-h-screen w-full bg-gray-50 flex justify-between flex-col">
      {/* Phần nút thoát */}
      <div
        onClick={() => {
          alert("Close mini game");
        }}
        className="absolute top-4 left-10 border-2 border-transparent hover:border-gray-300 rounded-md"
      >
        <IoClose className="  text-[var(--custom-red)] text-3xl cursor-pointer  " />
      </div>
      {/* Phần header và phần content */}
      <div className="max-w-7xl mx-auto w-full mt-[2vh]">
        {/* Phần trên: gồm progress bar số câu,... */}
        <header className="w-full flex justify-between items-center ">
          {/* Progress indicator */}
          <ProgressBar current={currentQuestion + 1} total={totalQuestions} />
          {/* Acumalated Result */}
          <span className="text-sm text-[var(--custom-orange)] font-semibold px-10">
            {currentQuestion + 1}/{totalQuestions}
          </span>
        </header>
        {/* Phần câu hỏi */}
        <main className="mt-[2vh] h-[75vh] bg-white rounded-2xl shadow-lg p-6 pb-16">
          {children}
        </main>
      </div>

      <footer
        className={`flex items-center justify-center shadow-lg p-6 ${
          wrapperState === "correct"
            ? "bg-[var(--custom-green-light)]"
            : wrapperState === "incorrect"
            ? "bg-[var(--custom-red-light)]"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl w-full px-10 flex justify-between items-center">
          {(() => {
            switch (wrapperState) {
              case "waiting":
                return (
                  <>
                    <button
                      onClick={onSkip}
                      className="underline decoration-[var(--custom-orange)] decoration-2 underline-offset-4 text-[var(--custom-orange)] font-semibold"
                    >
                      <i>Bỏ qua</i>
                    </button>

                    <button
                      onClick={onCheck}
                      className="px-8 py-3 text-white rounded-xl font-semibold transition-all hover:shadow-lg bg-[var(--custom-orange)]"
                    >
                      Kiểm tra
                    </button>
                  </>
                );

              case "correct":
              case "incorrect":
                return (
                  <>
                    <div className="flex justify-between items-center gap-5">
                      {wrapperState === "correct" ? (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="60"
                            viewBox="0 0 48 48"
                            fill="none"
                            className="bg-white rounded-full p-1"
                          >
                            <path
                              d="M24 4.5C20.1433 4.5 16.3731 5.64366 13.1664 7.78634C9.95963 9.92903 7.46027 12.9745 5.98436 16.5377C4.50845 20.1008 4.12228 24.0216 4.8747 27.8043C5.62711 31.5869 7.4843 35.0615 10.2114 37.7886C12.9386 40.5157 16.4131 42.3729 20.1957 43.1253C23.9784 43.8777 27.8992 43.4916 31.4623 42.0156C35.0255 40.5397 38.071 38.0404 40.2137 34.8336C42.3564 31.6269 43.5 27.8567 43.5 24C43.4945 18.83 41.4383 13.8732 37.7826 10.2174C34.1268 6.56167 29.1701 4.50546 24 4.5ZM17.25 18C17.695 18 18.13 18.132 18.5 18.3792C18.8701 18.6264 19.1584 18.9778 19.3287 19.389C19.499 19.8001 19.5436 20.2525 19.4568 20.689C19.37 21.1254 19.1557 21.5263 18.841 21.841C18.5263 22.1557 18.1254 22.37 17.689 22.4568C17.2525 22.5436 16.8001 22.499 16.389 22.3287C15.9778 22.1584 15.6264 21.87 15.3792 21.5C15.132 21.13 15 20.695 15 20.25C15 19.6533 15.2371 19.081 15.659 18.659C16.081 18.2371 16.6533 18 17.25 18ZM32.7975 29.25C30.8681 32.5856 27.6619 34.5 24 34.5C20.3381 34.5 17.1319 32.5875 15.2025 29.25C15.094 29.0793 15.0211 28.8884 14.9883 28.6887C14.9554 28.4891 14.9633 28.2849 15.0115 28.0884C15.0596 27.8919 15.147 27.7072 15.2683 27.5453C15.3897 27.3835 15.5426 27.2479 15.7177 27.1466C15.8929 27.0454 16.0867 26.9806 16.2875 26.9562C16.4883 26.9318 16.692 26.9483 16.8863 27.0047C17.0806 27.0611 17.2615 27.1561 17.4181 27.2842C17.5747 27.4123 17.7037 27.5707 17.7975 27.75C19.1981 30.1706 21.3994 31.5 24 31.5C26.6006 31.5 28.8019 30.1688 30.2025 27.75C30.2963 27.5707 30.4253 27.4123 30.5819 27.2842C30.7385 27.1561 30.9194 27.0611 31.1137 27.0047C31.308 26.9483 31.5117 26.9318 31.7125 26.9562C31.9133 26.9806 32.1072 27.0454 32.2823 27.1466C32.4574 27.2479 32.6103 27.3835 32.7317 27.5453C32.8531 27.7072 32.9404 27.8919 32.9886 28.0884C33.0367 28.2849 33.0446 28.4891 33.0117 28.6887C32.9789 28.8884 32.906 29.0793 32.7975 29.25ZM34.5 21.75H28.5C28.1022 21.75 27.7207 21.592 27.4393 21.3107C27.158 21.0294 27 20.6478 27 20.25C27 19.8522 27.158 19.4706 27.4393 19.1893C27.7207 18.908 28.1022 18.75 28.5 18.75H34.5C34.8978 18.75 35.2794 18.908 35.5607 19.1893C35.842 19.4706 36 19.8522 36 20.25C36 20.6478 35.842 21.0294 35.5607 21.3107C35.2794 21.592 34.8978 21.75 34.5 21.75Z"
                              fill="#6BA823"
                            />
                          </svg>
                          <span className="text-[var(--custom-green)] font-semibold text-2xl">
                            Chính xác!
                          </span>
                        </>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="60"
                            viewBox="0 0 39 39"
                            fill="none"
                            className="bg-white rounded-full p-2"
                          >
                            <path
                              d="M19.5 0C15.6433 0 11.8731 1.14366 8.66639 3.28634C5.45963 5.42903 2.96027 8.47451 1.48436 12.0377C0.00844905 15.6008 -0.377716 19.5216 0.374696 23.3043C1.12711 27.0869 2.9843 30.5615 5.71143 33.2886C8.43855 36.0157 11.9131 37.8729 15.6957 38.6253C19.4784 39.3777 23.3992 38.9916 26.9623 37.5156C30.5255 36.0397 33.571 33.5404 35.7137 30.3336C37.8564 27.1269 39 23.3567 39 19.5C38.9936 14.3303 36.937 9.3741 33.2815 5.71854C29.6259 2.06298 24.6698 0.00645009 19.5 0ZM12.75 18C12.305 18 11.87 17.868 11.5 17.6208C11.13 17.3736 10.8416 17.0222 10.6713 16.611C10.501 16.1999 10.4564 15.7475 10.5432 15.311C10.6301 14.8746 10.8443 14.4737 11.159 14.159C11.4737 13.8443 11.8746 13.63 12.3111 13.5432C12.7475 13.4564 13.1999 13.501 13.611 13.6713C14.0222 13.8416 14.3736 14.13 14.6208 14.5C14.868 14.87 15 15.305 15 15.75C15 16.3467 14.763 16.919 14.341 17.341C13.919 17.7629 13.3467 18 12.75 18ZM26.25 18C25.805 18 25.37 17.868 25 17.6208C24.63 17.3736 24.3416 17.0222 24.1713 16.611C24.001 16.1999 23.9564 15.7475 24.0432 15.311C24.1301 14.8746 24.3444 14.4737 24.659 14.159C24.9737 13.8443 25.3746 13.63 25.8111 13.5432C26.2475 13.4564 26.6999 13.501 27.111 13.6713C27.5222 13.8416 27.8736 14.13 28.1208 14.5C28.368 14.87 28.5 15.305 28.5 15.75C28.5 16.3467 28.263 16.919 27.841 17.341C27.419 17.7629 26.8467 18 26.25 18Z"
                              fill="#BB3030"
                            />
                          </svg>
                          <span className="text-[var(--custom-red)] font-semibold text-2xl">
                            Rút kinh nghiệm nhé!
                          </span>
                        </>
                      )}
                    </div>
                    {/* SHOW ĐÁP ÁN */}
                    <div className="flex-1 flex justify-center items-center">
                      {answer}
                    </div>
                    <button
                      onClick={onNext}
                      className={`px-8 py-3 text-white rounded-xl font-semibold transition-all hover:shadow-lg ${
                        wrapperState === "correct"
                          ? "bg-[var(--custom-green)]"
                          : "bg-[var(--custom-red)]"
                      }`}
                    >
                      Tiếp tục
                    </button>
                  </>
                );

              default:
                return null;
            }
          })()}
        </div>
      </footer>
    </div>
  );
};
export default MiniGameWrapper;
