import React, { useEffect } from "react";
import { IoCloseCircleOutline, IoLockClosed } from "react-icons/io5";

interface ApiKeyManagerProps {
  open?: boolean;
  onClose?: () => void;
}

const ApiKeyManager: React.FC<ApiKeyManagerProps> = ({
  open = false,
  onClose,
}) => {
  const [apiKey, setApiKey] = React.useState("");

  useEffect(() => {
    const storedKey = localStorage.getItem("apiKey") || "";
    setApiKey(storedKey);
  }, []);

  const handleSubmitByEnter = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    if (!apiKey || apiKey.trim() === "") return;
    if (e.key === "Enter") {
      e.preventDefault();
      localStorage.setItem("apiKey", apiKey);
      alert("API Key đã được cập nhật!");
      onClose();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-20 z-50">
      <div className="bg-white rounded-lg shadow-lg min-w-[500px] min-h-[200px] overflow-hidden">
        <h2 className="text-lg p-2 font-semibold mb-2 bg-[var(--dark-pink)] text-white flex justify-between items-center">
          Quản lý API Key{" "}
          <IoCloseCircleOutline
            onClick={onClose}
            className="text-3xl cursor-pointer"
          />
        </h2>
        {/* body */}
        <div className="p-2">
          <p className="text-sm text-gray-600 mb-4">
            Hãy nhập Google Gemini API Key của bạn để sử dụng tính năng Chat AI.
          </p>
          {/* input part */}
          <div className="flex justify-between items-center gap-2 text-[var(--dark-pink)]">
            <IoLockClosed className="text-3xl text-[var(--dark-pink)] inline-block mr-2" />
            <input
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              onKeyDown={handleSubmitByEnter}
              className="border-2 border-[var(--dark-pink)] p-2 bg-white rounded-lg w-full focus:outline-none focus:border-[var(--dark-pink)]"
              placeholder="Nhập API Key..."
            />
          </div>
          <div className="flex justify-end items-center gap-3 mt-4">
            <button
              className="text-[var(--dark-pink)] px-4 py-2 rounded-lg"
              onClick={() => {
                localStorage.removeItem("apiKey");
                setApiKey("");
                alert("API Key đã được xóa!");
              }}
            >
              Xóa
            </button>
            <button
              className="bg-[var(--dark-pink)] text-white px-4 py-2 rounded-lg"
              onClick={() => {
                if (!apiKey || apiKey.trim() === "") return;
                localStorage.setItem("apiKey", apiKey);
                alert("API Key đã được cập nhật!");
                onClose();
              }}
            >
              Cập nhật
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyManager;
