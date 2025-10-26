import CourseCard from "@/components/CourseCard";
import ColoredBanner from "@/shared/layout/ColoredBanner";
import Footer from "@/shared/layout/Footer";
import NavBar from "@/shared/layout/NavBar";
import React from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// card img icon urls
import level1IconUrl from "@/assets/icons/level-1.svg";
import level2IconUrl from "@/assets/icons/level-2.svg";
import level3IconUrl from "@/assets/icons/level-3.svg";
import course1ImgUrl from "@/assets/images/courses/course-1.png";
import course2ImgUrl from "@/assets/images/courses/course-2.png";
import course3ImgUrl from "@/assets/images/courses/course-3.png";

const CoursesPage = () => {
  return (
    <>
      <ColoredBanner></ColoredBanner>
      <NavBar></NavBar>

      {/* Container */}
      <div className="xl:w-[50%] lg:w-[80%] md:w-[90%] w-[95%] mx-auto mt-[10vh]  flex flex-col items-center">
        {/* Title */}
        <div className="group flex flex-col items-center hover:cursor-pointer">
          <h1 className=" font-semibold text-3xl">Bài học theo cấp độ</h1>
          <div className="mt-2 w-[30%] h-[6px] rounded-full bg-[var(--dark-pink)] group-hover:w-[50%] duration-200"></div>
        </div>
        {/* Short Description */}
        <div className="mt-5">
          <p>
            Chinh phục tiếng Hàn một cách hệ thống qua các bài học được phân
            chia theo cấp độ chuẩn. Hãy bắt đầu từ{" "}
            <span className="font-semibold">
              cấp độ phù hợp với trình độ của bạn
            </span>{" "}
            để đạt hiệu quả học tập cao nhất.
          </p>
          <div className="mt-5">
            Bạn chưa biết trình độ của mình?{" "}
            <Link
              to={"/"}
              className=" text-[var(--dark-pink)] font-semibold hover:text-[var(--light-pink)]"
            >
              Kiểm tra trình độ ngay{" "}
              <FaExternalLinkSquareAlt className="inline" />
            </Link>
          </div>
        </div>
        {/* Cards and Levels */}
        <CourseCard
          levelIconUrl={level1IconUrl}
          level="Cấp độ 1: Sơ cấp"
          numOfLessons={15}
          title="Giới thiệu về tiếng Hàn"
          href="/courses/level-1"
          describedImgUrl={course1ImgUrl}
        >
          <p className="mt-2">
            Làm quen với tiếng Hàn qua những mẫu câu và từ vựng đơn giản nhất để
            bắt đầu giao tiếp.
          </p>
          <ul className="list-disc list-inside leading-7 mt-3">
            <li>
              <b>Làm quen & Giới thiệu bản thân:</b> Chào hỏi, giới thiệu tên,
              sở thích.
            </li>
            <li>
              <b>Thời gian & Hoạt động hàng ngày:</b> Nói về thời gian, thói
              quen hàng ngày.
            </li>
            <li>
              <b>Số đếm & Thời gian:</b> Đếm số, nói về giờ giấc và ngày tháng.
            </li>
          </ul>
        </CourseCard>

        <CourseCard
          levelIconUrl={level2IconUrl}
          level="Cấp độ : Trung cấp"
          numOfLessons={15}
          title="Mở rộng giao tiếp"
          href="/courses/level-2"
          describedImgUrl={course2ImgUrl}
        >
          <p className="mt-2">
            Mở rộng vốn từ vựng và mẫu câu để ứng dụng trong các tình huống hằng
            ngày.
          </p>
          <ul className="list-disc list-inside leading-7 mt-3">
            <li>
              <b>Mua sắm:</b> Hỏi giá, mua hàng, xin giảm giá.
            </li>
            <li>
              <b>Ăn uống:</b> Gọi món, nói về món ăn yêu thích.
            </li>
            <li>
              <b>Giao thông & Chỉ đường:</b> Hỏi đường, sử dụng phương tiện công
              cộng.
            </li>
          </ul>
        </CourseCard>

        <CourseCard
          levelIconUrl={level3IconUrl}
          level="Cấp độ 3: Cao cấp"
          numOfLessons={15}
          title="Hội thoại & Cảm xúc"
          href="/courses/level-3"
          describedImgUrl={course3ImgUrl}
        >
          <p className="mt-2">
            Phát triển khả năng hội thoại tự nhiên và khám phá văn hóa Hàn Quốc.
          </p>
          <ul className="list-disc list-inside leading-7 mt-3">
            <li>
              <b>Thời tiết & Sức khỏe:</b> Mô tả thời tiết, bày tỏ tình trạng
              sức khỏe.
            </li>
            <li>
              <b>Giải trí & Sở thích:</b> Chia sẻ hoạt động yêu thích và kế
              hoạch vui chơi.
            </li>
            <li>
              <b>Văn hóa & Phong tục:</b> Tìm hiểu phong tục, lễ nghi và truyền
              thống.
            </li>
          </ul>
        </CourseCard>
      </div>
      <Footer className="mt-[10vh]"></Footer>
    </>
  );
};

export default CoursesPage;
