import useIsMobile from "@/hooks/useIsMobile";
import { useState } from "react";
import ChatBox from "./ChatBox";
import bgImgUrl from "@/assets/images/wavy-clouds-pattern.svg";
import logoImgUrl from "@/assets/logos/logo-only.svg";

const MobileChatBox = () => {
  const isMobile = useIsMobile(1280);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isMobile && (
        <>
          {isOpen ? (
            <ChatBox
              hasCloseButton
              onClose={() => setIsOpen(false)}
              className="fixed bottom-[7vh] right-5 max-w-[500px] w-[80vw] h-[600px] z-[1000]"
            />
          ) : (
            <div
              onClick={() => setIsOpen(true)}
              className="fixed origin-bottom-left -rotate-90 bottom-[3vh] left-full  cursor-pointer flex justify-center items-center gap-1 w-[150px] py-1 rounded-tr-md rounded-tl-md"
              style={{ backgroundImage: `url(${bgImgUrl})` }}
            >
              <img src={logoImgUrl} width={40} alt="" />
              <div className="text-[var(--dark-pink)] font-bold p-1 px-2 text-sm rounded-full bg-white">
                Mở ChatBox
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MobileChatBox;
