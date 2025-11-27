// PracticeBox.tsx
import CustomBox from "@/shared/common/CustomBox";
import React, { useState } from "react";
import type {
  PracticeBox,
  MultipleChoicePractice,
  FillInBlankPractice,
  DropDownPractice,
} from "@/data";
import { RiPencilFill } from "react-icons/ri";
import EyeIcon from "@/assets/icons/eyes.svg";
import { SlReload } from "react-icons/sl";

const PLACEHOLDER_BLANK = "<<blank>>";
const PLACEHOLDER_DROPDOWN = "<<dropdown>>";

const PracticeBox: React.FC<PracticeBox> = ({ questions }) => {
  const [answers, setAnswers] = useState<Record<number, string | number>>({});
  const [showAnswers, setShowAnswers] = useState<boolean>(false);

  const onAnswerChange = (qIndex: number, value: string | number) =>
    setAnswers((prev) => {
      return { ...prev, [qIndex]: value };
    });

  const handleTryAgain = () => {
    setAnswers({});
    setShowAnswers(false);
  };

  /* ---------- scoring logic ---------- */
  const isCorrect = (
    q: MultipleChoicePractice | FillInBlankPractice | DropDownPractice,
    index: number
  ) => {
    if (!showAnswers) return undefined;
    const a = answers[index];

    switch (q.questionType) {
      case "multipleChoice":
      case "dropDown":
        return typeof a === "number" && a === q.correctAnswerIndex;

      case "fillInBlank": {
        const correct = (q as FillInBlankPractice).correctAnswer;

        // arrays: compare per-item or join depending on correct type
        if (Array.isArray(a)) {
          if (Array.isArray(correct)) {
            if (correct.length !== a.length) return false;
            return a.every(
              (val, i) =>
                String(val ?? "")
                  .trim()
                  .toLowerCase() ===
                String(correct[i] ?? "")
                  .trim()
                  .toLowerCase()
            );
          } else {
            const userJoined = a
              .map((v) => String(v ?? ""))
              .join(" ")
              .trim()
              .toLowerCase();
            return (
              userJoined ===
              String(correct ?? "")
                .trim()
                .toLowerCase()
            );
          }
        } else {
          // a is string or undefined
          return (
            typeof a === "string" &&
            String(a ?? "")
              .trim()
              .toLowerCase() ===
              String(correct ?? "")
                .trim()
                .toLowerCase()
          );
        }
      }

      default:
        return false;
    }
  };

  // compute total correct & total questions
  const computeResult = () => {
    let correct = 0;
    const total = questions.length;
    questions.forEach((q, idx) => {
      const c = isCorrect(q as any, idx);
      if (c === true) correct += 1;
    });
    return { correct, total };
  };

  const getResultText = () => {
    const { correct, total } = computeResult();
    const percent = total === 0 ? 0 : Math.round((correct / total) * 100);
    return `${correct}/${total} (${percent}%)`;
  };

  /* ---------- helpers for dynamic width inputs ---------- */

  const computeWidthCh = (
    correctVal: string | Array<string> | undefined,
    userVal: string
  ) => {
    const correctLen =
      typeof correctVal === "string"
        ? correctVal.length
        : Array.isArray(correctVal)
        ? correctVal
            .map((s) => String(s ?? ""))
            .reduce((a, b) => Math.max(a, (b as string).length), 0)
        : 0;
    const userLen = userVal.length;
    const base = Math.max(correctLen, userLen, 10); // at least 5ch
    const clamped = Math.min(40, base + 1); // cap width to 40ch
    return clamped;
  };

  /* ---------- renderers ---------- */

  const renderMultipleChoiceQuestion = (
    q: MultipleChoicePractice,
    index: number
  ) => {
    const selected =
      typeof answers[index] === "number" ? (answers[index] as number) : -1;
    const correct = q.correctAnswerIndex;

    return (
      <div className="mb-4">
        <p className="font-semibold">{`${index + 1}. ${q.question}`}</p>
        <ul className="list-none ml-0 mt-2">
          {q.options.map((option, i) => {
            const isSelected = selected === i;

            // determine visual state (priority: showAnswers -> correct/wrong; else selected)
            const state = showAnswers
              ? i === correct
                ? "correct"
                : isSelected && i !== correct
                ? "wrong"
                : "neutral"
              : isSelected
              ? "selected"
              : "neutral";

            const outerBase =
              "w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-150";
            const outerStyle =
              state === "correct"
                ? {
                    borderColor: "var(--custom-purple)",
                    background: "white",
                    borderWidth: 2,
                  }
                : state === "wrong"
                ? {
                    borderColor: "var(--custom-red)",
                    background: "white",
                    borderWidth: 2,
                  }
                : state === "selected"
                ? {
                    borderColor: "rgba(107,114,128,1)",
                    background: "white",
                    borderWidth: 2,
                  }
                : {
                    borderColor: "rgba(209,213,219,1)",
                    background: "white",
                    borderWidth: 2,
                  };

            const innerStyle =
              state === "correct"
                ? { background: "var(--custom-purple)" }
                : state === "wrong"
                ? { background: "var(--custom-red)" }
                : state === "selected"
                ? { background: "rgba(156,163,175,1)" }
                : { background: "white" };

            return (
              <li key={i} className="mb-2">
                <label
                  onClick={() => !showAnswers && onAnswerChange(index, i)}
                  className="cursor-pointer flex items-center gap-3 rounded px-3 py-2 hover:bg-gray-50"
                >
                  {/* visually hidden native input for accessibility */}
                  <input
                    type="radio"
                    name={`mc-${index}`}
                    checked={isSelected}
                    onChange={() => !showAnswers && onAnswerChange(index, i)}
                    disabled={showAnswers}
                    className="sr-only"
                  />

                  {/* custom circle */}
                  <span className={outerBase} style={outerStyle} aria-hidden>
                    {isSelected || showAnswers ? (
                      <span
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: "9999px",
                          display: "block",
                          ...innerStyle,
                        }}
                      />
                    ) : (
                      <span
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: "9999px",
                          background: "white",
                          display: "block",
                        }}
                      />
                    )}
                  </span>

                  {/* option text */}
                  <span
                    className={
                      state === "correct"
                        ? "text-[var(--custom-purple)] font-semibold"
                        : state === "wrong"
                        ? "text-[var(--custom-red)] font-semibold"
                        : ""
                    }
                  >
                    {option}
                  </span>
                  {showAnswers &&
                    i === correct &&
                    answers[index] === undefined && (
                      <span className="text-[var(--custom-red)] text-sm font-semibold">
                        Bạn đã bỏ trống câu này
                      </span>
                    )}
                </label>
              </li>
            );
          })}
        </ul>
        {showAnswers && q.explanation && (
          <div className="mt-2 text-sm text-gray-700 pl-2">
            <strong>Giải thích: </strong>
            <span>{q.explanation}</span>
          </div>
        )}
      </div>
    );
  };

  const renderFillInTheBlankQuestion = (
    q: FillInBlankPractice,
    index: number
  ) => {
    const parts = q.question.split(PLACEHOLDER_BLANK);
    // Expect exactly one placeholder: parts.length === 2
    const correct = (q as FillInBlankPractice).correctAnswer;

    const getUser = () => {
      const cur = answers[index];
      if (Array.isArray(cur)) return String(cur[0] ?? "");
      if (typeof cur === "string") return cur;
      return "";
    };

    const isCorrectFlag = () => {
      if (!showAnswers) return undefined;
      const user = getUser().trim().toLowerCase();
      const expected = String(correct ?? "")
        .trim()
        .toLowerCase();
      if (user === "") return false;
      return user === expected;
    };

    const user = getUser();
    const w = computeWidthCh(
      Array.isArray(correct) ? (correct[0] as any) : (correct as any),
      user
    );
    const correctFlag = isCorrectFlag();

    return (
      <div className="mb-4">
        <p className="font-semibold">
          {`${index + 1}. `}
          <span>{parts[0]}</span>
          <input
            name={`fib-${index}`}
            value={user}
            onChange={(e) => onAnswerChange(index, e.target.value)}
            type="text"
            readOnly={showAnswers}
            aria-disabled={showAnswers}
            className="rounded px-2 py-1 mx-1 align-middle bg-white transition-colors duration-150 border border-gray-300 focus:outline-none"
            style={
              {
                width: `${w}ch`,
                border:
                  showAnswers && correctFlag !== undefined
                    ? correctFlag
                      ? "2px solid var(--custom-purple)"
                      : "2px solid var(--custom-red)"
                    : undefined,
                color:
                  showAnswers && correctFlag !== undefined
                    ? correctFlag
                      ? "var(--custom-purple)"
                      : "var(--custom-red)"
                    : undefined,
                opacity: 1,
              } as React.CSSProperties
            }
            placeholder="..."
          />
          {showAnswers && (
            <span className="text-[var(--custom-purple)] font-semibold px-2 py-1 border-2 border-[var(--custom-purple)] rounded">
              / {Array.isArray(correct) ? correct[0] : correct}
            </span>
          )}
          <span>{parts[1]}</span>
        </p>

        {showAnswers && (
          <div className="mt-2 pl-2 text-sm">
            {q.explanation && (
              <div className="mt-1 text-gray-700">
                <strong>Giải thích: </strong>
                <span>{q.explanation}</span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderDropDownQuestion = (q: DropDownPractice, index: number) => {
    const parts = q.question.split(PLACEHOLDER_DROPDOWN);
    const correct = q.correctAnswerIndex;
    const user =
      typeof answers[index] === "number" ? (answers[index] as number) : -1;

    const selectEl = (
      <>
        <select
          aria-label={`drop-${index}`}
          value={typeof answers[index] === "number" ? answers[index] : ""}
          onChange={(e) => onAnswerChange(index, Number(e.target.value))}
          disabled={showAnswers}
          className="rounded px-2 py-1 mx-1 align-middle bg-white transition-colors duration-150"
          style={{
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: showAnswers
              ? user === correct
                ? "var(--custom-purple)"
                : "var(--custom-red)"
              : undefined,
            color: showAnswers
              ? user === correct
                ? "var(--custom-purple)"
                : "var(--custom-red)"
              : undefined,
          }}
        >
          <option value="">--</option>
          {q.options.map((option, idx) => (
            <option key={idx} value={idx}>
              {option}
            </option>
          ))}
        </select>
        {showAnswers && (
          <span className="text-[var(--custom-purple)] font-semibold px-2 py-1 border-2 border-[var(--custom-purple)] rounded">
            / {q.options[correct]}
          </span>
        )}
      </>
    );

    return (
      <div className="mb-4">
        <p className="font-semibold">
          {`${index + 1}. `}
          {parts.map((part, i) => (
            <React.Fragment key={i}>
              <span>{part}</span>
              {i < parts.length - 1 && selectEl}
            </React.Fragment>
          ))}
        </p>

        {showAnswers && (
          <div className="mt-2 pl-2 text-sm">
            {q.explanation && (
              <div className="mt-1 text-gray-700">
                <strong>Giải thích: </strong>
                <span>{q.explanation}</span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderQuestion = (
    question: MultipleChoicePractice | FillInBlankPractice | DropDownPractice,
    index: number
  ) => {
    switch (question.questionType) {
      case "multipleChoice":
        return renderMultipleChoiceQuestion(question, index);
      case "fillInBlank":
        return renderFillInTheBlankQuestion(question, index);
      case "dropDown":
        return renderDropDownQuestion(question, index);
      default:
        return null;
    }
  };

  return (
    <CustomBox className="mt-7 w-full rounded-lg overflow-hidden">
      <header className="text-white bg-[var(--custom-purple)] p-2 pl-5 flex gap-2 items-center text-lg font-semibold">
        <RiPencilFill />
        <span>Luyện tập nhỏ</span>
      </header>

      <ul className="mt-3 px-5 list-none list-inside">
        {questions.map((question, index) => (
          <li key={index}>{renderQuestion(question as any, index)}</li>
        ))}
      </ul>

      <div className="flex items-center gap-3 px-5 pb-4">
        {!showAnswers ? (
          <button
            className="ml-3 my-3 p-2 border-2 rounded-xl border-gray-300 flex items-center gap-2"
            onClick={() => setShowAnswers(true)}
          >
            <span className="font-semibold text-sm text-[var(--custom-purple)]">
              Kiểm tra đáp án
            </span>
            {/* @ts-ignore */}
            {/* @ts-ignore */}
            <img src={EyeIcon} alt="" className="inline-block w-[20px] ml-1" />
          </button>
        ) : (
          <button
            className="ml-3 my-3 p-2 rounded-xl bg-[var(--custom-purple)] flex items-center gap-2"
            onClick={handleTryAgain}
          >
            <span className="font-semibold text-sm text-white">Làm lại</span>
            <SlReload className="text-white" />
          </button>
        )}

        {showAnswers && (
          <div className="text-sm text-[var(--custom-purple)] font-semibold">
            Kết quả: <span className="font-semibold">{getResultText()}</span>
          </div>
        )}
      </div>
    </CustomBox>
  );
};

export default PracticeBox;
