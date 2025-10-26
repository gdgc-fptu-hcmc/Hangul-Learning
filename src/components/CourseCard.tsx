import React from "react";
import { GoBook } from "react-icons/go";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";

interface CourseCardProps {
  levelIconUrl: string;
  level: string;
  numOfLessons: number;
  title: string;
  children?: React.ReactNode;
  href: string;
  describedImgUrl: string;
  className?: string;
}

const CourseCard = ({
  levelIconUrl,
  level,
  numOfLessons,
  title,
  children,
  href,
  describedImgUrl,
  className = "",
}: CourseCardProps) => {
  return (
    <div
      className={`w-full min-h-[400px] hover:cursor-pointer rounded-md border-gray-300 border-2 flex flex-col md:flex-row-reverse overflow-hidden mt-8 p-5 ${className}`}
    >
      {/* Card Image */}
      <div className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
        <img
          src={describedImgUrl}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Card Info */}
      <div className="w-full md:w-2/3 flex flex-col justify-between p-4">
        {/* Upper */}
        <div>
          {/* Header */}
          <header className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <img src={levelIconUrl} alt={level} className="w-4 h-4" />
              <span>{level}</span>
            </div>
            <div className="flex items-center gap-1">
              <GoBook className="w-4 h-4" />
              <span>{numOfLessons} bài học</span>
            </div>
          </header>

          {/* Content */}
          <h2 className="font-semibold text-3xl mt-4">{title}</h2>
          <div className="text-base mt-2">{children}</div>
        </div>

        {/* Lower */}
        <Link
          to={href}
          className="block group w-[170px] rounded-md flex justify-between items-center border-2 border-[var(--dark-pink)]"
        >
          <span className="inline-block flex-1 text-center bg-[var(--dark-pink)] text-white p-2 ">
            Bắt đầu học
          </span>
          <GrLinkNext className="group-hover:inline-block hidden text-xl m-2 text-[var(--dark-pink)]" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
