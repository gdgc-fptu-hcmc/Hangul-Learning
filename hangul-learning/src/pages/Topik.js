import React from 'react';
import SEO from '../components/SEO';
import { Calendar, Info } from 'lucide-react';

// Component hiển thị lịch thi TOPIK
const ExamSchedule = () => {
  const pbtExams = [
    {
      ky: "TOPIK 99",
      ngayThi: "13/04/2025",
      ngayKetQua: "30/05/2025",
      diaDiem: "Việt Nam",
      baiThi: "TOPIK I\nTOPIK II",
      thoiGianDangKy: "14/01/2025 - 21/01/2025\n(Đã đóng đăng ký)"
    },
    {
      ky: "TOPIK 100",
      ngayThi: "11/05/2025",
      ngayKetQua: "26/06/2025",
      diaDiem: "Việt Nam",
      baiThi: "TOPIK I\nTOPIK II",
      thoiGianDangKy: "25/02/2025 - 04/03/2025\n(Đã đóng đăng ký)"
    },
    {
      ky: "TOPIK 101",
      ngayThi: "13/07/2025",
      ngayKetQua: "21/08/2025",
      diaDiem: "Việt Nam",
      baiThi: "TOPIK I\nTOPIK II",
      thoiGianDangKy: "13/05/2025 - 20/05/2025\n(Đã đóng đăng ký)"
    },
    {
      ky: "TOPIK 102",
      ngayThi: "19/10/2025",
      ngayKetQua: "11/12/2025",
      diaDiem: "Việt Nam",
      baiThi: "TOPIK I\nTOPIK II",
      thoiGianDangKy: "(Đang cập nhật)"
    },
    {
      ky: "TOPIK 103",
      ngayThi: "16/11/2025",
      ngayKetQua: "23/12/2025",
      diaDiem: "Việt Nam",
      baiThi: "TOPIK I\nTOPIK II",
      thoiGianDangKy: "(Đang cập nhật)"
    }
  ];

  const ibtExams = [
    {
      ky: "TOPIK IBT 6",
      ngayThi: "22/03/2025",
      ngayKetQua: "11/04/2025",
      diaDiem: "Việt Nam",
      baiThi: "TOPIK I\nTOPIK II",
      thoiGianDangKy: "04/02/2025 - 10/02/2025\n(Đã đóng đăng ký)"
    },
    {
      ky: "TOPIK IBT 7",
      ngayThi: "14/06/2025",
      ngayKetQua: "04/07/2025",
      diaDiem: "Việt Nam",
      baiThi: "TOPIK I\nTOPIK II",
      thoiGianDangKy: "15/04/2025 - 20/04/2025\n(Đã đóng đăng ký)"
    },
    {
      ky: "TOPIK IBT 8",
      ngayThi: "13/09/2025",
      ngayKetQua: "02/10/2025",
      diaDiem: "Việt Nam",
      baiThi: "TOPIK I\nTOPIK II",
      thoiGianDangKy: "27/06/2025 - 03/07/2025\n(Đã đóng đăng ký)"
    },
    {
      ky: "TOPIK IBT 9",
      ngayThi: "25/10/2025",
      ngayKetQua: "14/11/2025",
      diaDiem: "Việt Nam",
      baiThi: "TOPIK I\nTOPIK II",
      thoiGianDangKy: "(Đang cập nhật)"
    },
    {
      ky: "TOPIK IBT 10",
      ngayThi: "29/11/2025",
      ngayKetQua: "19/12/2025",
      diaDiem: "Việt Nam",
      baiThi: "TOPIK I\nTOPIK II",
      thoiGianDangKy: "(Đang cập nhật)"
    }
  ];

  const renderExamTable = (exams, title, type) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
        <Calendar className="w-5 h-5 mr-2 text-primary" />
        {title}
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-600 border-b whitespace-nowrap">Kỳ thi</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-600 border-b whitespace-nowrap">Ngày thi</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-600 border-b whitespace-nowrap">Ngày trả KQ</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-600 border-b whitespace-nowrap">Địa điểm</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-600 border-b whitespace-nowrap">Bài thi</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-600 border-b whitespace-nowrap">Thời gian ĐK</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, index) => (
              <tr key={exam.ky} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-2 sm:px-4 py-2 sm:py-4 text-xs sm:text-sm text-gray-800 border-b whitespace-nowrap">{exam.ky}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-4 text-xs sm:text-sm text-gray-800 border-b whitespace-nowrap">{exam.ngayThi}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-4 text-xs sm:text-sm text-gray-800 border-b whitespace-nowrap">{exam.ngayKetQua}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-4 text-xs sm:text-sm text-gray-800 border-b whitespace-nowrap">{exam.diaDiem}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-4 text-xs sm:text-sm text-gray-800 border-b whitespace-pre-line">{exam.baiThi}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-4 text-xs sm:text-sm text-gray-800 border-b whitespace-pre-line">{exam.thoiGianDangKy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Lịch thi và trả kết quả bài thi TOPIK</h2>
      
      <div className="text-center mb-8">
        <a 
          href="https://iigvietnam.com/lich-thi-topik/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary hover:text-orange-600 transition-colors inline-flex items-center gap-1"
        >
          <Info className="w-4 h-4" />
          Xem thêm chi tiết tại IIG Vietnam
        </a>
      </div>
      
      {renderExamTable(pbtExams, "TOPIK PBT (Thi trên giấy)", "pbt")}
      {renderExamTable(ibtExams, "TOPIK IBT (Thi trên máy)", "ibt")}

      {/* Thông tin thời gian thi */}
      <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
        <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2 flex items-center text-sm sm:text-base">
            <Info className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Thời gian thi TOPIK PBT
          </h4>
          <ul className="text-blue-800 space-y-1 sm:space-y-2 ml-6 sm:ml-7 text-sm sm:text-base">
            <li>TOPIK I: 9:40 - 11:20</li>
            <li>TOPIK II: 12:50 - 16:20</li>
          </ul>
          <p className="text-blue-700 mt-2 text-xs sm:text-sm">
            Lưu ý: Thí sinh cần có mặt đúng phòng thi, trước giờ thi đã được thông báo muộn nhất là 30 phút. 
            Sau thời gian này, thí sinh sẽ không được vào phòng thi.
          </p>
        </div>

        <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2 flex items-center text-sm sm:text-base">
            <Info className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Thời gian thi TOPIK IBT
          </h4>
          <ul className="text-green-800 space-y-1 sm:space-y-2 ml-6 sm:ml-7 text-sm sm:text-base">
            <li>TOPIK I IBT: 9:30 - 10:40</li>
            <li>TOPIK II IBT: 13:00 - 15:05</li>
          </ul>
          <p className="text-green-700 mt-2 text-xs sm:text-sm">
            Lưu ý: Thí sinh cần có mặt đúng phòng thi, trước giờ thi đã được thông báo muộn nhất là 40 phút. 
            Sau thời gian này, thí sinh sẽ không được vào phòng thi.
          </p>
        </div>
      </div>
    </div>
  );
};

function Topik() {
  return (
    <>
      <SEO
        title="Luyện Thi TOPIK 2025 - Khóa Học và Lịch Thi TOPIK Mới Nhất"
        description="Khóa học luyện thi TOPIK online miễn phí với đề thi thử, tài liệu ôn tập và lịch thi TOPIK PBT/IBT 2025 mới nhất từ IIG Vietnam. Chuẩn bị tốt nhất cho kỳ thi năng lực tiếng Hàn."
        keywords="luyện thi topik, đề thi thử topik, lịch thi topik 2025, topik pbt, topik ibt, khóa học topik online, tài liệu topik, iig vietnam"
        type="article"
      />

      <div className="min-h-screen bg-light-gray py-8">
        <div className="container mx-auto px-4">
          {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
                    Luyện Thi TOPIK 2025
                </h1>
                <p className="text-lg text-text-light max-w-2xl mx-auto">
                    Cập nhật lịch thi TOPIK PBT và IBT năm 2025 mới nhất: thời gian thi, địa điểm, lệ phí, cách đăng ký và những lưu ý quan trọng cho thí sinh.
                </p>
            </div>

          {/* Exam Schedule Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <ExamSchedule />
          </div>
        </div>
      </div>
    </>
  );
}

export default Topik; 