import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Calendar, Info, Book, ChevronDown, ChevronUp, Volume2, Image, CheckCircle2, AlertCircle, Lightbulb, ArrowRight, BookOpen } from 'lucide-react';
import TopikTestContent from '../components/TopikTestContent';
import { Link } from 'react-router-dom';

// Component hiển thị đề thi thử TOPIK I
const MockTests = () => {
  const [expandedTest, setExpandedTest] = useState(null);
  const [selectedTest, setSelectedTest] = useState(null);

  const mockTests = [
    {
      id: '91st',
      title: '91st TOPIK I Mock Test',
      hasAudio: true,
      hasImages: true,
      imageCount: 8
    },
    {
      id: '83rd',
      title: '83rd TOPIK I Mock Test',
      hasAudio: true,
      hasImages: true,
      imageCount: 6
    },
    {
      id: '64th',
      title: '64th TOPIK I Mock Test',
      hasAudio: true,
      hasImages: true,
      imageCount: 7
    },
    {
      id: '60th',
      title: '60th TOPIK I Mock Test',
      hasAudio: true,
      hasImages: true,
      imageCount: 5
    },
    {
      id: '52nd',
      title: '52nd TOPIK I Mock Test',
      hasAudio: true,
      hasImages: true,
      imageCount: 6
    },
    {
      id: '47th',
      title: '47th TOPIK I Mock Test',
      hasAudio: true,
      hasImages: true,
      imageCount: 7
    },
    {
      id: '41st',
      title: '41st TOPIK I Mock Test',
      hasAudio: true,
      hasImages: true,
      imageCount: 8
    },
    {
      id: '37th',
      title: '37th TOPIK I Mock Test',
      hasAudio: true,
      hasImages: true,
      imageCount: 6
    },
    {
      id: '36th',
      title: '36th TOPIK I Mock Test',
      hasAudio: true,
      hasImages: true,
      imageCount: 7
    },
    {
      id: '35th',
      title: '35th TOPIK I Mock Test',
      hasAudio: true,
      hasImages: true,
      imageCount: 6
    }
  ];

  const toggleTest = (id) => {
    setExpandedTest(expandedTest === id ? null : id);
  };

  const openTestContent = (testId) => {
    setSelectedTest(testId);
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center justify-center">
        <Book className="w-6 h-6 mr-2 text-primary" />
        Đề Thi Thử TOPIK I
      </h2>

      <div className="grid gap-4">
        {mockTests.map((test) => (
          <div key={test.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => toggleTest(test.id)}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <span className="text-lg font-semibold text-gray-800">{test.title}</span>
                <div className="flex items-center ml-4 space-x-2">
                  {test.hasAudio && (
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      <Volume2 className="w-3 h-3 mr-1" />
                      Audio
                    </span>
                  )}
                  {test.hasImages && (
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                      <Image className="w-3 h-3 mr-1" />
                      {test.imageCount} Images
                    </span>
                  )}
                </div>
              </div>
              {expandedTest === test.id ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {expandedTest === test.id && (
              <div className="px-4 pb-4">
                <div className="mt-2">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Thời gian: 90 phút</p>
                        <p className="text-sm text-gray-600">Số câu hỏi: 40 câu</p>
                      </div>
                      <button 
                        onClick={() => openTestContent(test.id)}
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                      >
                        Bắt đầu làm bài
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedTest && (
        <TopikTestContent
          testId={selectedTest}
          onClose={() => setSelectedTest(null)}
        />
      )}
    </div>
  );
};

// Component hiển thị lịch thi TOPIK
const ExamSchedule = ({ pbtExams, ibtExams }) => {
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

// Component hướng dẫn thi TOPIK
const TopikGuide = () => {
  return (
    <div className="space-y-8">
      {/* Thông tin chung */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Thông tin chung về kỳ thi TOPIK</h3>
        <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-800">TOPIK I (Sơ cấp)</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dành cho người mới bắt đầu đến trình độ sơ cấp</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Thời gian thi: 100 phút</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Gồm 2 phần: Nghe hiểu (40 câu) và Đọc hiểu (40 câu)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-800">TOPIK II (Trung - Cao cấp)</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dành cho người có trình độ trung cấp trở lên</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Thời gian thi: 180 phút</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Gồm 3 phần: Nghe hiểu (50 câu), Viết (4 câu) và Đọc hiểu (50 câu)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quy trình đăng ký */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Quy trình đăng ký thi TOPIK</h3>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-3 flex-shrink-0">1</span>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Chuẩn bị hồ sơ</h5>
                <p className="text-gray-600">Chuẩn bị ảnh thẻ 3x4 (chụp trong vòng 3 tháng) và CMND/CCCD/Hộ chiếu còn hiệu lực.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-3 flex-shrink-0">2</span>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Đăng ký tài khoản</h5>
                <p className="text-gray-600">Tạo tài khoản trên website của IIG Vietnam và điền đầy đủ thông tin cá nhân.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-3 flex-shrink-0">3</span>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Chọn kỳ thi và nộp lệ phí</h5>
                <p className="text-gray-600">Chọn kỳ thi phù hợp và thanh toán lệ phí qua chuyển khoản ngân hàng hoặc trực tiếp tại văn phòng IIG.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-3 flex-shrink-0">4</span>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Nhận phiếu báo thi</h5>
                <p className="text-gray-600">Sau khi hoàn tất đăng ký, thí sinh sẽ nhận được phiếu báo thi qua email.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/* Lưu ý quan trọng */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Những lưu ý quan trọng</h3>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <ul className="space-y-3">
            <li className="flex items-start">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">Thí sinh cần có mặt tại phòng thi trước giờ thi ít nhất 30 phút.</span>
            </li>
            <li className="flex items-start">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">Mang theo CMND/CCCD/Hộ chiếu (bản gốc) và phiếu báo thi.</span>
            </li>
            <li className="flex items-start">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">Chỉ được mang bút chì 2B, tẩy và gọt bút chì vào phòng thi.</span>
            </li>
            <li className="flex items-start">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">Không được mang điện thoại, smartwatch, máy tính, từ điển và các thiết bị điện tử khác.</span>
            </li>
            <li className="flex items-start">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">Thí sinh đến muộn sau khi phát đề thi sẽ không được vào phòng thi.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Cách tính điểm */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Cách tính điểm TOPIK</h3>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-800">TOPIK I</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Mỗi kỹ năng 100 điểm, tổng điểm 200</li>
                <li>• Cấp 1: 80-140 điểm</li>
                <li>• Cấp 2: 140-200 điểm</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-800">TOPIK II</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Mỗi kỹ năng 100 điểm, tổng điểm 300</li>
                <li>• Cấp 3: 120-149 điểm</li>
                <li>• Cấp 4: 150-179 điểm</li>
                <li>• Cấp 5: 180-209 điểm</li>
                <li>• Cấp 6: 210-300 điểm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component tips học TOPIK
const TopikTips = () => {
  return (
    <div className="space-y-8">
      {/* TOPIK I Tips */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Mẹo thi TOPIK I đạt điểm cao</h3>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Tips cho phần Nghe */}
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-800 flex items-center">
                <Volume2 className="w-5 h-5 mr-2 text-primary" />
                Phần Nghe (듣기)
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Luyện nghe nhiều file audio TOPIK có transcript để làm quen với tốc độ và ngữ điệu.</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Tập trung vào từ khóa và con số trong câu hỏi trước khi nghe.</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Với câu hội thoại, chú ý câu cuối cùng vì thường chứa đáp án.</span>
                </li>
              </ul>
            </div>

            {/* Tips cho phần Đọc */}
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-800 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-primary" />
                Phần Đọc (읽기)
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Đọc câu hỏi trước để biết cần tìm thông tin gì trong bài.</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Tập trung vào câu đầu và câu cuối của mỗi đoạn văn.</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Học thuộc các cấu trúc ngữ pháp thường gặp trong đề thi.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* TOPIK II Tips */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Mẹo thi TOPIK II đạt điểm cao</h3>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Tips cho phần Nghe và Đọc */}
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-800">Nghe và Đọc</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Luyện đọc nhanh và nắm ý chính của bài văn dài.</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Học từ vựng theo chủ đề thường gặp: kinh tế, văn hóa, khoa học.</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Luyện nghe các bài giảng và tin tức tiếng Hàn.</span>
                </li>
              </ul>
            </div>

            {/* Tips cho phần Viết */}
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-800">Viết</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Học thuộc các mẫu câu mở đầu và kết thúc cho từng dạng bài.</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Luyện viết theo thời gian để quen với áp lực.</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Sử dụng đa dạng cấu trúc ngữ pháp cao cấp.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Ngữ pháp quan trọng */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Ngữ pháp quan trọng cho TOPIK</h3>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-800">TOPIK I</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">Ngữ pháp cơ bản</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• -아/어요, -(스)ㅂ니다</li>
                    <li>• -고 싶다, -ㄹ 수 있다/없다</li>
                    <li>• -(으)ㄹ까요?, -아/어 주세요</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">Ngữ pháp trung cấp</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• -(으)니까, -(으)면</li>
                    <li>• -아/어서, -(으)러 가다</li>
                    <li>• -지 않다, -고 있다</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-800">TOPIK II</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">Ngữ pháp nâng cao</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• -(으)ㄹ 뿐만 아니라</li>
                    <li>• -더라도, -(으)ㄴ/는데도</li>
                    <li>• -는 반면에, -기는커녕</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">Ngữ pháp học thuật</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• -(으)ㄴ/는 바와 같이</li>
                    <li>• -다시 말해서, -에 비해</li>
                    <li>• -에도 불구하고</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link 
                to="/grammar" 
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                <Book className="w-5 h-5 mr-2" />
                Xem chi tiết ngữ pháp
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Topik() {
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <SEO
        title="Luyện Thi TOPIK 2025 | Đề Thi & Tips TOPIK I, II"
        description="Hướng dẫn chi tiết luyện thi TOPIK 2025: lịch thi, tips ôn tập, đề thi thử, ngữ pháp trọng tâm và bí quyết đạt điểm cao TOPIK I, II. Cập nhật mới nhất từ IIG Vietnam."
        keywords="TOPIK, luyện thi TOPIK, đề thi TOPIK, tips TOPIK, ngữ pháp TOPIK, TOPIK I, TOPIK II, lịch thi TOPIK 2025"
        type="article"
        imageUrl="/logo.webp"
      />

      <div className="container mx-auto px-4">
        {/* Header Section with Article Schema */}
        <header className="text-center mb-12">
          <h1 
            className="text-4xl md:text-5xl font-extrabold text-secondary mb-4"
            itemProp="headline"
          >
            Luyện Thi TOPIK 2025
          </h1>
          <p 
            className="text-lg text-text-light max-w-2xl mx-auto"
            itemProp="description"
          >
            Cập nhật lịch thi TOPIK PBT và IBT năm 2025 mới nhất, kèm hướng dẫn chi tiết, tips ôn tập và tài liệu luyện thi hiệu quả.
          </p>
          <div itemScope itemType="https://schema.org/Article">
            <meta itemProp="headline" content="Luyện Thi TOPIK 2025 | Hướng Dẫn Chi Tiết & Tips" />
            <meta itemProp="description" content="Hướng dẫn chi tiết luyện thi TOPIK 2025: lịch thi, tips ôn tập, đề thi thử, ngữ pháp trọng tâm và bí quyết đạt điểm cao TOPIK I, II. Cập nhật mới nhất từ IIG Vietnam." />
            <meta itemProp="author" content="한국어학습" />
            <meta itemProp="datePublished" content="2025-01-01" />
            <meta itemProp="dateModified" content="2025-01-01" />
            <meta itemProp="image" content="/logo.webp" />
            <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
              <meta itemProp="name" content="한국어학습" />
              <meta itemProp="url" content="https://hanguelhoc.com" />
              <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
                <meta itemProp="url" content="/logo.webp" />
                <meta itemProp="width" content="512" />
                <meta itemProp="height" content="512" />
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* Exam Schedule Section with Event Schema */}
          <section className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Lịch thi và trả kết quả bài thi TOPIK</h2>
            {/* Event Schema for TOPIK PBT */}
            {pbtExams.map((exam, index) => (
              <div 
                key={`pbt-${index}`}
                itemScope 
                itemType="https://schema.org/Event"
              >
                <meta itemProp="name" content={`${exam.ky} - Kỳ thi TOPIK PBT tại Việt Nam`} />
                <meta itemProp="startDate" content={exam.ngayThi.split('/').reverse().join('-')} />
                <meta itemProp="endDate" content={exam.ngayThi.split('/').reverse().join('-')} />
                <meta itemProp="location" content={exam.diaDiem} />
                <meta itemProp="organizer" content="National Institute for International Education (NIIED)" />
                <meta itemProp="performer" content="IIG Vietnam" />
                <meta itemProp="description" content={`Kỳ thi đánh giá năng lực tiếng Hàn ${exam.ky} tổ chức tại ${exam.diaDiem}. Bao gồm TOPIK I và TOPIK II.`} />
                <meta itemProp="eventStatus" content="https://schema.org/EventScheduled" />
                <meta itemProp="image" content="/logo.webp" />
                <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <meta itemProp="price" content="1400000" />
                  <meta itemProp="priceCurrency" content="VND" />
                  <meta itemProp="availability" content="https://schema.org/InStock" />
                  <meta itemProp="validFrom" content={exam.thoiGianDangKy.split('-')[0].trim()} />
                </div>
              </div>
            ))}
            <ExamSchedule pbtExams={pbtExams} ibtExams={ibtExams} />
          </section>

          {/* Mock Tests Section with Course Schema */}
          <section className="mt-8 bg-white p-6 rounded-xl shadow-sm">
            <div itemScope itemType="https://schema.org/Course">
              <meta itemProp="name" content="Đề Thi Thử TOPIK 2025" />
              <meta itemProp="description" content="Tuyển tập đề thi thử TOPIK I, II từ kỳ thi 35 đến 91 kèm đáp án và giải thích chi tiết." />
              <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
                <meta itemProp="name" content="한국어학습" />
                <meta itemProp="url" content="https://hanguelhoc.com" />
              </div>
              <meta itemProp="educationalLevel" content="beginner, intermediate, advanced" />
              <meta itemProp="learningResourceType" content="Practice Test" />
              <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="price" content="0" />
                <meta itemProp="priceCurrency" content="VND" />
                <meta itemProp="availability" content="https://schema.org/InStock" />
              </div>
              <div itemProp="hasCourseInstance" itemScope itemType="https://schema.org/CourseInstance">
                <meta itemProp="name" content="Khóa Luyện Thi TOPIK Online 2025" />
                <meta itemProp="courseMode" content="online" />
                <meta itemProp="courseWorkload" content="PT20H" />
                <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <meta itemProp="price" content="0" />
                  <meta itemProp="priceCurrency" content="VND" />
                  <meta itemProp="availability" content="https://schema.org/InStock" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Đề Thi Thử TOPIK</h2>
              <MockTests />
            </div>
          </section>

          {/* Guide Section with HowTo Schema */}
          <section className="mt-8 bg-white p-6 rounded-xl shadow-sm">
            <div itemScope itemType="https://schema.org/HowTo">
              <meta itemProp="name" content="Hướng Dẫn Thi TOPIK 2025" />
              <meta itemProp="description" content="Hướng dẫn chi tiết cách đăng ký, chuẩn bị và làm bài thi TOPIK." />
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Hướng dẫn thi TOPIK chi tiết</h2>
              <TopikGuide />
            </div>
          </section>

          {/* Tips Section with Article Schema */}
          <section className="mt-8 bg-white p-6 rounded-xl shadow-sm">
            <div itemScope itemType="https://schema.org/Article">
              <meta itemProp="headline" content="Tips và Bí Quyết Đạt Điểm Cao TOPIK" />
              <meta itemProp="description" content="Tổng hợp các mẹo và bí quyết giúp đạt điểm cao trong kỳ thi TOPIK I, II từ các giáo viên có kinh nghiệm." />
              <meta itemProp="author" content="한국어학습" />
              <meta itemProp="datePublished" content="2025-01-01" />
              <meta itemProp="dateModified" content="2025-01-01" />
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Tips và ngữ pháp TOPIK</h2>
              <TopikTips />
            </div>
          </section>

          {/* FAQ Section with FAQPage Schema */}
          <section className="mt-8 bg-white p-6 rounded-xl shadow-sm">
            <div itemScope itemType="https://schema.org/FAQPage">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Câu hỏi thường gặp về TOPIK</h2>
              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 itemProp="name" className="font-semibold text-lg mb-2">TOPIK là gì?</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-gray-600 mb-4">
                    TOPIK (Test of Proficiency in Korean) là kỳ thi đánh giá năng lực tiếng Hàn được tổ chức bởi National Institute for International Education (NIIED). Kỳ thi này được công nhận rộng rãi cho mục đích học tập, làm việc và định cư tại Hàn Quốc.
                  </div>
                </div>
              </div>
              
              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 itemProp="name" className="font-semibold text-lg mb-2">Sự khác biệt giữa TOPIK I và TOPIK II là gì?</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-gray-600 mb-4">
                    TOPIK I dành cho người mới bắt đầu đến trình độ sơ cấp (cấp 1-2), trong khi TOPIK II dành cho người có trình độ trung cấp đến cao cấp (cấp 3-6). TOPIK I tập trung vào kỹ năng giao tiếp cơ bản, còn TOPIK II yêu cầu khả năng sử dụng tiếng Hàn trong các tình huống học thuật và chuyên môn.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Breadcrumbs Schema */}
          <div itemScope itemType="https://schema.org/BreadcrumbList" className="hidden">
            <div itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
              <meta itemProp="position" content="1" />
              <meta itemProp="name" content="Trang chủ" />
              <meta itemProp="item" content="https://hanguelhoc.com" />
            </div>
            <div itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
              <meta itemProp="position" content="2" />
              <meta itemProp="name" content="TOPIK" />
              <meta itemProp="item" content="https://hanguelhoc.com/topik" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Topik; 