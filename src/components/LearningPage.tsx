import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import ProgressSection from './ProgressSection';
import StreakSection from './StreakSection';
import TopicTitle from './TopicTitle';
import KhoaHc from './KhoaHc';
import LessonsCheckbox from './LessonsCheckbox';
import Footer from './Footer';
import Component32 from './Component32';

export default function LearningPage() {
  const DESIGN_WIDTH = 1440;
  const DESIGN_HEIGHT = 2479;

  const [scale, setScale] = useState(1);
  const [verticalOffset, setVerticalOffset] = useState(0);

  useEffect(() => {
    const computeScaleAndOffset = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const nextScale = Math.min(1, viewportWidth / DESIGN_WIDTH);
      const scaledHeight = DESIGN_HEIGHT * nextScale;
      const offset = Math.max(0, viewportHeight - scaledHeight);
      setScale(nextScale);
      setVerticalOffset(offset);
    };

    computeScaleAndOffset();
    window.addEventListener('resize', computeScaleAndOffset);
    return () => window.removeEventListener('resize', computeScaleAndOffset);
  }, []);
  return (
    <div
      className="lp-outer"
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflowX: 'hidden',
        minHeight: '100vh',
      }}
    >
      <div
        className="learning-page bg-white relative w-[1440px] h-[2479px]"
        data-name="Learning Page"
        data-node-id="211:68"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          marginTop: `${verticalOffset}px`,
        }}
      >
      {/* Navigation Bar */}
      <NavBar className="absolute h-[60px] left-[50px] rounded-[10px] top-[12px] w-[1340px]" />
      
      {/* Breadcrumb */}
      <div className="absolute content-stretch flex gap-[2px] items-center justify-center left-[50px] top-[91px] w-[268px] h-[25px]" data-node-id="245:281">
        <a className="block cursor-pointer font-bold leading-[0] relative shrink-0 text-[#202020] text-[18px] whitespace-nowrap hover:text-[#464394] transition-colors" data-node-id="257:276">
          <p className="leading-[normal]">Lộ trình học</p>
        </a>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-[180deg]">
            <div className="relative size-[24px]" data-name="arrow-left" data-node-id="245:276">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <p className="font-bold leading-[normal] relative shrink-0 text-[#202020] text-[18px]" data-node-id="242:1291">
          Cấp độ 1: Sơ cấp
        </p>
      </div>

      {/* Progress Section */}
      <ProgressSection className="absolute left-[1040px] top-[143px] w-[350px] h-[262px]" />
      
      {/* Streak Section */}
      <StreakSection className="absolute left-[1040px] top-[425px] w-[350px] h-[100px]" />
      
      {/* Lessons Checkboxes */}
      <div className="absolute content-start flex flex-wrap gap-[10px_12px] items-start left-[1070px] top-[268px] w-[247px] h-[95px]" data-node-id="261:1387">
        <LessonsCheckbox className="relative shrink-0 size-[25px]" />
        <LessonsCheckbox className="relative shrink-0 size-[25px]" />
        <LessonsCheckbox property1="Variant3" className="relative shrink-0 size-[25px]" />
        <LessonsCheckbox property1="Variant3" className="relative shrink-0 size-[25px]" />
        <LessonsCheckbox property1="Variant2" className="relative shrink-0 size-[25px]" />
        <LessonsCheckbox property1="Variant3" className="relative shrink-0 size-[25px]" />
        <LessonsCheckbox property1="Variant3" className="relative shrink-0 size-[25px]" />
        <LessonsCheckbox property1="Variant3" className="relative shrink-0 size-[25px]" />
        <LessonsCheckbox property1="Variant3" className="relative shrink-0 size-[25px]" />
        <LessonsCheckbox property1="Variant2" className="relative shrink-0 size-[25px]" />
        <LessonsCheckbox property1="Variant3" className="relative shrink-0 size-[25px]" />
        <LessonsCheckbox property1="Variant3" className="relative shrink-0 size-[25px]" />
        <LessonsCheckbox property1="Variant3" className="relative shrink-0 size-[25px]" />
        <LessonsCheckbox property1="Variant3" className="relative shrink-0 size-[25px]" />
        <LessonsCheckbox property1="Variant2" className="relative shrink-0 size-[25px]" />
        <LessonsCheckbox property1="Variant4" className="relative shrink-0 size-[25px]" />
      </div>

      {/* Topic 1 - Yellow - Component32 from Figma (383:625) */}
      <Component32 className="absolute left-[277px] top-[125px] w-[660px] h-[632px]" />

      {/* Topic 2 - Green */}
      <TopicTitle 
        className="absolute left-[277px] top-[796px] w-[660px] h-[93px]"
        topicNumber={2}
        title="Gia đình & Bạn bè"
        variant="green"
        sticky={true}
      />

      {/* Topic 2 Lesson Components */}

      <KhoaHc property1="Bỏ qua" className="absolute left-[575px] top-[989px] w-[87px] h-[87px]" />
      <KhoaHc property1="Khóa" className="absolute left-[410px] top-[1101px] w-[90px] h-[90px]" />
      <KhoaHc property1="Khóa" className="absolute left-[573px] top-[1201px] w-[90px] h-[90px]" />
      <KhoaHc property1="Khóa" className="absolute left-[718px] top-[1312px] w-[90px] h-[90px]" />
      <KhoaHc property1="Bài cuối" className="absolute left-[575px] top-[1406px] w-[90px] h-[90px]" />

      <div className="absolute left-[546px] top-[939px] w-[144px] h-[58px]" data-node-id="344:801">
        <div className="absolute inset-0 bg-[#f0f0f0] rounded-lg flex items-center justify-center">
          <p className="absolute font-bold leading-[normal] text-[#4f4f4f] text-[24px] flex items-center justify-center">
            Học vượt?
          </p>
        </div>
      </div>

      {/* Topic 3 - Purple */}
      <TopicTitle 
        className="absolute left-[277px] top-[1525px] w-[660px] h-[93px]"
        topicNumber={3}
        title="Số đếm & Thời gian"
        variant="purple"
        sticky={true}
      />

      {/* Topic 3 Lesson Components */}
      <div className="absolute flex left-[760px] top-[2177px] w-[154px] h-[208px] items-center justify-center">
        <div className="flex-none h-[208px] rotate-[180deg] w-[154px]">
          <div className="border-[#d9d9d9] border-b-[2.518px] border-dashed border-l-[2.518px] border-r-0 border-t-[2.518px] rounded-bl-[83.948px] rounded-tl-[83.948px] size-full" data-node-id="344:787" />
        </div>
      </div>

      <KhoaHc property1="Bỏ qua" className="absolute left-[575px] top-[1714px] w-[87px] h-[87px]" />
      <KhoaHc property1="Khóa" className="absolute left-[410px] top-[1826px] w-[90px] h-[90px]" />
      <KhoaHc property1="Khóa" className="absolute left-[573px] top-[1926px] w-[90px] h-[90px]" />
      <KhoaHc property1="Khóa" className="absolute left-[718px] top-[2037px] w-[90px] h-[90px]" />
      <KhoaHc property1="Bài cuối" className="absolute left-[575px] top-[2131px] w-[90px] h-[90px]" />

      <div className="absolute left-[547px] top-[1668px] w-[144px] h-[62px]" data-node-id="344:797">
        <div className="absolute inset-0 bg-[#e8e8ff] rounded-lg flex items-center justify-center">
          <p className="absolute font-bold leading-[normal] text-[#464394] text-[24px] flex items-center justify-center">
            Học vượt?
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bg-white border-[#d9d9d9] border-b-0 border-l-0 border-r-0 border-solid border-t-[3px] box-border content-stretch flex h-[45px] items-center justify-between left-0 px-[51px] py-[7px] top-[2434px] w-[1440px]">
        <Footer />
      </div>
      </div>
    </div>
  );
}
